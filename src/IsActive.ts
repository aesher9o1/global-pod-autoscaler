import * as grpc from '@grpc/grpc-js'
import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js'
import { IsActiveResponse } from '../types/proto/externalscaler/IsActiveResponse'
import { ScaledObjectRef } from '../types/proto/externalscaler/ScaledObjectRef'
import { ScalerMetadata } from '../types/scalerMetadata'
import { sanatiseMetadata } from './common/utils'
import { getDeploymentState } from './kubernetes'
/**
 * IsActive method in the GRPC interface is called every pollingInterval
 * with a ScaledObjectRef object that contains the scaledObject name, namespace,
 * and scaler metadata.
 */
export async function isActive(
  call: ServerUnaryCall<ScaledObjectRef, IsActiveResponse>,
  callback: sendUnaryData<IsActiveResponse>
) {
  console.log(call)
  const metadata = call.request.scalerMetadata as unknown as ScalerMetadata

  try {
    sanatiseMetadata(metadata)
    try {
      await getDeploymentState(metadata.governer, metadata.namespace)
      callback(null, { result: true })
    } catch (e) {
      callback({ code: grpc.status.INTERNAL, details: 'Got error when fetching the deployment' })
    }
  } catch (e) {
    callback({ code: grpc.status.INVALID_ARGUMENT, details: (<Error>e).message })
  }

  return null
}
