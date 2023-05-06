// Original file: proto/externalscaler.proto

import type {
  ScaledObjectRef as _externalscaler_ScaledObjectRef,
  ScaledObjectRef__Output as _externalscaler_ScaledObjectRef__Output
} from '../externalscaler/ScaledObjectRef'

export interface GetMetricsRequest {
  scaledObjectRef?: _externalscaler_ScaledObjectRef | null
  metricName?: string
}

export interface GetMetricsRequest__Output {
  scaledObjectRef: _externalscaler_ScaledObjectRef__Output | null
  metricName: string
}
