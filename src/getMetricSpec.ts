import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js'
import { GetMetricSpecResponse } from '../types/proto/externalscaler/GetMetricSpecResponse'
import { ScaledObjectRef } from '../types/proto/externalscaler/ScaledObjectRef'
import { METRIC_NAME } from './common/utils'
/**
 * GetMetricSpec returns the target value for the HPA definition for the scaler.
 */
export function getMetricSpec(
  _call: ServerUnaryCall<ScaledObjectRef, GetMetricSpecResponse>,
  callback: sendUnaryData<GetMetricSpecResponse>
) {
  return callback(null, {
    metricSpecs: [
      {
        metricName: METRIC_NAME,
        targetSize: 1
      }
    ]
  })
}
