/* eslint-disable @typescript-eslint/no-explicit-any */
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from './types/proto/externalscaler'
import { ExternalScalerHandlers } from './types/proto/externalscaler/ExternalScaler'
import { isActive } from './src/IsActive'
import { streamIsActive } from './src/streamIsActive'
import { getMetric } from './src/getMetrics'
import { getMetricSpec } from './src/getMetricSpec'
import path from 'path'
import logger from './src/common/logger'
import { getDeploymentsInNamespace } from './src/kubernetes'

const GlobalPodAutoscaler: ExternalScalerHandlers = {
  IsActive: isActive,
  StreamIsActive: streamIsActive,
  GetMetrics: getMetric,
  GetMetricSpec: getMetricSpec
}

const packageDefinition = protoLoader.loadSync(path.join(__dirname, 'proto/externalscaler.proto'), {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
})
const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType

const server = new grpc.Server()
server.addService(proto.externalscaler.ExternalScaler.service, GlobalPodAutoscaler)

server.bindAsync('0.0.0.0:3000', grpc.ServerCredentials.createInsecure(), async (error, port: number) => {
  if (error) logger.error(error.message)

  server.start()
  logger.info(`Server listening on port: ${port}✅`)

  try {
    const deployments = await getDeploymentsInNamespace()

    if (deployments.response.statusCode === 200) logger.info('Connection with kubernetes sucessfully stablished✅')
    else {
      logger.error(`Connection with kubernetes failed with the error code ${deployments.response.statusCode}`)
      process.exit()
    }
  } catch (e) {
    logger.error(e)
    process.exit()
  }
})
