import { ServerWritableStream } from '@grpc/grpc-js'
import { IsActiveResponse } from '../types/proto/externalscaler/IsActiveResponse'
import { ScaledObjectRef } from '../types/proto/externalscaler/ScaledObjectRef'
import { ScalerMetadata } from '../types/scalerMetadata'
import logger from './common/logger'
import { sanatiseMetadata } from './common/utils'
import { getDeploymentState } from './kubernetes'

/**
 * StreamIsActive expects the external scaler to maintain a long-lived connection
 * and push IsActiveResponse objects whenever the scaler needs KEDA to activate the deployment.
 */

export function streamIsActive(call: ServerWritableStream<ScaledObjectRef, IsActiveResponse>) {
  const metadata = call.request.scalerMetadata as unknown as ScalerMetadata

  logger.info(`Got streamIsActive call 🛠️ for ${metadata.governer} and ${metadata.namespace}`)

  try {
    sanatiseMetadata(metadata)
    const interval = setInterval(async () => {
      try {
        await getDeploymentState(metadata.governer, metadata.namespace)
        call.write({
          result: true
        })
      } catch (e) {}
    }, 1000 * 60 * 5)

    call.on('end', () => clearInterval(interval))
  } catch (e) {}
}
