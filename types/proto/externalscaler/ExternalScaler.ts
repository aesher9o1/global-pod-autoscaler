// Original file: proto/externalscaler.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type {
  GetMetricSpecResponse as _externalscaler_GetMetricSpecResponse,
  GetMetricSpecResponse__Output as _externalscaler_GetMetricSpecResponse__Output
} from '../externalscaler/GetMetricSpecResponse'
import type {
  GetMetricsRequest as _externalscaler_GetMetricsRequest,
  GetMetricsRequest__Output as _externalscaler_GetMetricsRequest__Output
} from '../externalscaler/GetMetricsRequest'
import type {
  GetMetricsResponse as _externalscaler_GetMetricsResponse,
  GetMetricsResponse__Output as _externalscaler_GetMetricsResponse__Output
} from '../externalscaler/GetMetricsResponse'
import type {
  IsActiveResponse as _externalscaler_IsActiveResponse,
  IsActiveResponse__Output as _externalscaler_IsActiveResponse__Output
} from '../externalscaler/IsActiveResponse'
import type {
  ScaledObjectRef as _externalscaler_ScaledObjectRef,
  ScaledObjectRef__Output as _externalscaler_ScaledObjectRef__Output
} from '../externalscaler/ScaledObjectRef'

export interface ExternalScalerClient extends grpc.Client {
  GetMetricSpec(
    argument: _externalscaler_ScaledObjectRef,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_externalscaler_GetMetricSpecResponse__Output>
  ): grpc.ClientUnaryCall
  GetMetricSpec(
    argument: _externalscaler_ScaledObjectRef,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_externalscaler_GetMetricSpecResponse__Output>
  ): grpc.ClientUnaryCall
  GetMetricSpec(
    argument: _externalscaler_ScaledObjectRef,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_externalscaler_GetMetricSpecResponse__Output>
  ): grpc.ClientUnaryCall
  GetMetricSpec(
    argument: _externalscaler_ScaledObjectRef,
    callback: grpc.requestCallback<_externalscaler_GetMetricSpecResponse__Output>
  ): grpc.ClientUnaryCall
  getMetricSpec(
    argument: _externalscaler_ScaledObjectRef,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_externalscaler_GetMetricSpecResponse__Output>
  ): grpc.ClientUnaryCall
  getMetricSpec(
    argument: _externalscaler_ScaledObjectRef,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_externalscaler_GetMetricSpecResponse__Output>
  ): grpc.ClientUnaryCall
  getMetricSpec(
    argument: _externalscaler_ScaledObjectRef,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_externalscaler_GetMetricSpecResponse__Output>
  ): grpc.ClientUnaryCall
  getMetricSpec(
    argument: _externalscaler_ScaledObjectRef,
    callback: grpc.requestCallback<_externalscaler_GetMetricSpecResponse__Output>
  ): grpc.ClientUnaryCall

  GetMetrics(
    argument: _externalscaler_GetMetricsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_externalscaler_GetMetricsResponse__Output>
  ): grpc.ClientUnaryCall
  GetMetrics(
    argument: _externalscaler_GetMetricsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_externalscaler_GetMetricsResponse__Output>
  ): grpc.ClientUnaryCall
  GetMetrics(
    argument: _externalscaler_GetMetricsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_externalscaler_GetMetricsResponse__Output>
  ): grpc.ClientUnaryCall
  GetMetrics(
    argument: _externalscaler_GetMetricsRequest,
    callback: grpc.requestCallback<_externalscaler_GetMetricsResponse__Output>
  ): grpc.ClientUnaryCall
  getMetrics(
    argument: _externalscaler_GetMetricsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_externalscaler_GetMetricsResponse__Output>
  ): grpc.ClientUnaryCall
  getMetrics(
    argument: _externalscaler_GetMetricsRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_externalscaler_GetMetricsResponse__Output>
  ): grpc.ClientUnaryCall
  getMetrics(
    argument: _externalscaler_GetMetricsRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_externalscaler_GetMetricsResponse__Output>
  ): grpc.ClientUnaryCall
  getMetrics(
    argument: _externalscaler_GetMetricsRequest,
    callback: grpc.requestCallback<_externalscaler_GetMetricsResponse__Output>
  ): grpc.ClientUnaryCall

  IsActive(
    argument: _externalscaler_ScaledObjectRef,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_externalscaler_IsActiveResponse__Output>
  ): grpc.ClientUnaryCall
  IsActive(
    argument: _externalscaler_ScaledObjectRef,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_externalscaler_IsActiveResponse__Output>
  ): grpc.ClientUnaryCall
  IsActive(
    argument: _externalscaler_ScaledObjectRef,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_externalscaler_IsActiveResponse__Output>
  ): grpc.ClientUnaryCall
  IsActive(
    argument: _externalscaler_ScaledObjectRef,
    callback: grpc.requestCallback<_externalscaler_IsActiveResponse__Output>
  ): grpc.ClientUnaryCall
  isActive(
    argument: _externalscaler_ScaledObjectRef,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_externalscaler_IsActiveResponse__Output>
  ): grpc.ClientUnaryCall
  isActive(
    argument: _externalscaler_ScaledObjectRef,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_externalscaler_IsActiveResponse__Output>
  ): grpc.ClientUnaryCall
  isActive(
    argument: _externalscaler_ScaledObjectRef,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_externalscaler_IsActiveResponse__Output>
  ): grpc.ClientUnaryCall
  isActive(
    argument: _externalscaler_ScaledObjectRef,
    callback: grpc.requestCallback<_externalscaler_IsActiveResponse__Output>
  ): grpc.ClientUnaryCall

  StreamIsActive(
    argument: _externalscaler_ScaledObjectRef,
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientReadableStream<_externalscaler_IsActiveResponse__Output>
  StreamIsActive(
    argument: _externalscaler_ScaledObjectRef,
    options?: grpc.CallOptions
  ): grpc.ClientReadableStream<_externalscaler_IsActiveResponse__Output>
  streamIsActive(
    argument: _externalscaler_ScaledObjectRef,
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientReadableStream<_externalscaler_IsActiveResponse__Output>
  streamIsActive(
    argument: _externalscaler_ScaledObjectRef,
    options?: grpc.CallOptions
  ): grpc.ClientReadableStream<_externalscaler_IsActiveResponse__Output>
}

export interface ExternalScalerHandlers extends grpc.UntypedServiceImplementation {
  GetMetricSpec: grpc.handleUnaryCall<_externalscaler_ScaledObjectRef__Output, _externalscaler_GetMetricSpecResponse>

  GetMetrics: grpc.handleUnaryCall<_externalscaler_GetMetricsRequest__Output, _externalscaler_GetMetricsResponse>

  IsActive: grpc.handleUnaryCall<_externalscaler_ScaledObjectRef__Output, _externalscaler_IsActiveResponse>

  StreamIsActive: grpc.handleServerStreamingCall<
    _externalscaler_ScaledObjectRef__Output,
    _externalscaler_IsActiveResponse
  >
}

export interface ExternalScalerDefinition extends grpc.ServiceDefinition {
  GetMetricSpec: MethodDefinition<
    _externalscaler_ScaledObjectRef,
    _externalscaler_GetMetricSpecResponse,
    _externalscaler_ScaledObjectRef__Output,
    _externalscaler_GetMetricSpecResponse__Output
  >
  GetMetrics: MethodDefinition<
    _externalscaler_GetMetricsRequest,
    _externalscaler_GetMetricsResponse,
    _externalscaler_GetMetricsRequest__Output,
    _externalscaler_GetMetricsResponse__Output
  >
  IsActive: MethodDefinition<
    _externalscaler_ScaledObjectRef,
    _externalscaler_IsActiveResponse,
    _externalscaler_ScaledObjectRef__Output,
    _externalscaler_IsActiveResponse__Output
  >
  StreamIsActive: MethodDefinition<
    _externalscaler_ScaledObjectRef,
    _externalscaler_IsActiveResponse,
    _externalscaler_ScaledObjectRef__Output,
    _externalscaler_IsActiveResponse__Output
  >
}
