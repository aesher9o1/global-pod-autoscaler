import type * as grpc from '@grpc/grpc-js'
import type { MessageTypeDefinition } from '@grpc/proto-loader'

import type {
  ExternalScalerClient as _externalscaler_ExternalScalerClient,
  ExternalScalerDefinition as _externalscaler_ExternalScalerDefinition
} from './externalscaler/ExternalScaler'

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype
}

export interface ProtoGrpcType {
  externalscaler: {
    ExternalScaler: SubtypeConstructor<typeof grpc.Client, _externalscaler_ExternalScalerClient> & {
      service: _externalscaler_ExternalScalerDefinition
    }
    GetMetricSpecResponse: MessageTypeDefinition
    GetMetricsRequest: MessageTypeDefinition
    GetMetricsResponse: MessageTypeDefinition
    IsActiveResponse: MessageTypeDefinition
    MetricSpec: MessageTypeDefinition
    MetricValue: MessageTypeDefinition
    ScaledObjectRef: MessageTypeDefinition
  }
}
