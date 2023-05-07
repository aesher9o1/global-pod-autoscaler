import { ServerWritableStream } from '@grpc/grpc-js'
import { IsActiveResponse } from '../types/proto/externalscaler/IsActiveResponse'
import { ScaledObjectRef } from '../types/proto/externalscaler/ScaledObjectRef'

/**
 * Unlike IsActive, StreamIsActive is called once when KEDA reconciles the ScaledObject,
 * and expects the external scaler to maintain a long-lived connection and push IsActiveResponse
 * objects whenever the scaler needs KEDA to activate the deployment.
 */

export function streamIsActive(call: ServerWritableStream<ScaledObjectRef, IsActiveResponse>) {
  call.on('end', () => {
    return ''
  })
}
