// Original file: proto/externalscaler.proto

import type { Long } from '@grpc/proto-loader'

export interface MetricValue {
  metricName?: string
  metricValue?: number | string | Long
}

export interface MetricValue__Output {
  metricName: string
  metricValue: string
}
