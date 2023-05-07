import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js'
import { GetMetricsResponse } from '../types/proto/externalscaler/GetMetricsResponse'
import { GetMetricsRequest } from '../types/proto/externalscaler/GetMetricsRequest'

/**
 * GetMetricSpec returns the target value for the HPA definition for the scaler.
 */
export function getMetricSpec(
  call: ServerUnaryCall<ScaledObjectRef, IsActiveResponse>,
  callback: sendUnaryData<IsActiveResponse>
) {
  return null
}
