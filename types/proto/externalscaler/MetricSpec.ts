// Original file: proto/externalscaler.proto

import type { Long } from '@grpc/proto-loader'

export interface MetricSpec {
  metricName?: string
  targetSize?: number | string | Long
}

export interface MetricSpec__Output {
  metricName: string
  targetSize: string
}
