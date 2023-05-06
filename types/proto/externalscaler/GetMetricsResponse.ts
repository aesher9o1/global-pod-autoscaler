// Original file: proto/externalscaler.proto

import type {
  MetricValue as _externalscaler_MetricValue,
  MetricValue__Output as _externalscaler_MetricValue__Output
} from '../externalscaler/MetricValue'

export interface GetMetricsResponse {
  metricValues?: _externalscaler_MetricValue[]
}

export interface GetMetricsResponse__Output {
  metricValues: _externalscaler_MetricValue__Output[]
}
