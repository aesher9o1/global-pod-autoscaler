import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js'
import { IsActiveResponse } from '../types/proto/externalscaler/IsActiveResponse'
import { ScaledObjectRef } from '../types/proto/externalscaler/ScaledObjectRef'
/**
 * IsActive method in the GRPC interface is called every pollingInterval
 * with a ScaledObjectRef object that contains the scaledObject name, namespace,
 * and scaler metadata.
 */
export function isActive(
  call: ServerUnaryCall<ScaledObjectRef, IsActiveResponse>,
  callback: sendUnaryData<IsActiveResponse>
) {
  return null
}
