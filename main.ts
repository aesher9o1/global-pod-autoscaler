/* eslint-disable @typescript-eslint/no-explicit-any */
import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from './types/proto/externalscaler'
import { ExternalScalerHandlers } from './types/proto/externalscaler/ExternalScaler'
import { isActive } from './src/IsActive'
import { streamIsActive } from './src/streamIsActive'
import { getMetric } from './src/getMetrics'
import { getMetricSpec } from './src/getMetricSpec'

const GlobalPodAutoscaler: ExternalScalerHandlers = {
  IsActive: isActive,
  StreamIsActive: streamIsActive,
  GetMetrics: getMetric,
  GetMetricSpec: getMetricSpec
}

const packageDefinition = protoLoader.loadSync('./proto/externalscaler.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
})
const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType

const server = new grpc.Server()
server.addService(proto.externalscaler.ExternalScaler.service, GlobalPodAutoscaler)
