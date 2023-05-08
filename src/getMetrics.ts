import * as grpc from '@grpc/grpc-js'
import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js'
import { GetMetricsResponse } from '../types/proto/externalscaler/GetMetricsResponse'
import { GetMetricsRequest } from '../types/proto/externalscaler/GetMetricsRequest'
import { ScalerMetadata } from '../types/scalerMetadata'
import logger from './common/logger'
import { METRIC_NAME, sanatiseMetadata } from './common/utils'
import { getDeploymentState } from './kubernetes'

/**
 * GetMetrics returns the value of the metric referred to from GetMetricSpec
 */

export async function getMetric(
  call: ServerUnaryCall<GetMetricsRequest, GetMetricsResponse>,
  callback: sendUnaryData<GetMetricsResponse>
) {
  const metadata = call.request.scaledObjectRef?.scalerMetadata as unknown as ScalerMetadata

  logger.info(`Got isActive call 🎁 for ${metadata.governer} and ${metadata.namespace}`)
  try {
    sanatiseMetadata(metadata)
    try {
      const { status } = await getDeploymentState(metadata.governer, metadata.namespace)
      callback(null, { metricValues: [{ metricName: METRIC_NAME, metricValue: status?.unavailableReplicas }] })
    } catch (e: any) {
      callback({ code: grpc.status.INTERNAL, details: 'Got error when fetching the deployment' })
      logger.error(`Error ${e?.body?.code} while fetching the deployment ${metadata.governer}`)
    }
  } catch (e) {
    callback({ code: grpc.status.INVALID_ARGUMENT, details: (<Error>e).message })
  }
}
