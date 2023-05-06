import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from './types/proto/externalscaler'

const packageDefinition = protoLoader.loadSync('./proto/externalscaler.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
})
const packageObject = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType
