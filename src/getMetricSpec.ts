import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js'
import { GetMetricSpecResponse } from '../types/proto/externalscaler/GetMetricSpecResponse'
import { ScaledObjectRef } from '../types/proto/externalscaler/ScaledObjectRef'
/**
 * GetMetricSpec returns the target value for the HPA definition for the scaler.
 */
export function getMetricSpec(
  _call: ServerUnaryCall<ScaledObjectRef, GetMetricSpecResponse>,
  _callback: sendUnaryData<GetMetricSpecResponse>
) {
  return null
}
