import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js'
import { GetMetricsResponse } from '../types/proto/externalscaler/GetMetricsResponse'
import { GetMetricsRequest } from '../types/proto/externalscaler/GetMetricsRequest'

/**
 * GetMetrics returns the value of the metric referred to from GetMetricSpec
 */

export function getMetric(
  call: ServerUnaryCall<GetMetricsRequest, GetMetricsResponse>,
  callback: sendUnaryData<GetMetricsResponse>
) {
  return null
}