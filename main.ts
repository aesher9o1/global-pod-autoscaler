/* eslint-disable @typescript-eslint/no-explicit-any */
import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from './types/proto/externalscaler'
import { ExternalScalerHandlers } from './types/proto/externalscaler/ExternalScaler'

const GlobalPodAutoscaler: ExternalScalerHandlers = {
  IsActive: null as any,
  GetMetrics: null as any,
  GetMetricSpec: null as any,
  StreamIsActive: null as any
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
