import * as grpc from '@grpc/grpc-js'
import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js'
import { IsActiveResponse } from '../types/proto/externalscaler/IsActiveResponse'
import { ScaledObjectRef } from '../types/proto/externalscaler/ScaledObjectRef'
import { ScalerMetadata } from '../types/scalerMetadata'
import { sanatiseMetadata } from './common/utils'
import { getDeploymentState } from './kubernetes'
import logger from './common/logger'
/**
 * IsActive method in the GRPC interface is called every pollingInterval
 * with a ScaledObjectRef object that contains the scaledObject name, namespace,
 * and scaler metadata.
 */
export async function isActive(
  call: ServerUnaryCall<ScaledObjectRef, IsActiveResponse>,
  callback: sendUnaryData<IsActiveResponse>
) {
  const metadata = call.request.scalerMetadata as unknown as ScalerMetadata

  logger.info(`Got isActive call 🎁 for ${metadata.governer} and ${metadata.namespace}`)
  try {
    sanatiseMetadata(metadata)
    try {
      await getDeploymentState(metadata.governer, metadata.namespace)
      callback(null, { result: true })
    } catch (e: any) {
      callback({ code: grpc.status.INTERNAL, details: 'Got error when fetching the deployment' })

      logger.error(`Error ${e?.body?.code} while fetching the deployment ${metadata.governer}`)
    }
  } catch (e) {
    callback({ code: grpc.status.INVALID_ARGUMENT, details: (<Error>e).message })
  }
}

/**
 ServerUnaryCallImpl {
  _events: [Object: null prototype] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  call: Http2ServerCallStream {
    _events: [Object: null prototype] {
      callEnd: [Array],
      streamEnd: [Function],
      sendMessage: [Function (anonymous)],
      receiveMessage: [Function (anonymous)],
      cancelled: [Function]
    },
    _eventsCount: 5,
    _maxListeners: undefined,
    stream: Http2Stream {
      id: 3,
      closed: false,
      destroyed: false,
      state: {
        state: 2,
        weight: 16,
        sumDependencyWeight: 0,
        localClose: 0,
        remoteClose: 0,
        localWindowSize: 65431
      },
      readableState: ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: BufferList { head: null, tail: null, length: 0 },
        length: 0,
        pipes: [],
        flowing: true,
        ended: true,
        endEmitted: true,
        reading: false,
        constructed: true,
        sync: false,
        needReadable: false,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        errorEmitted: false,
        emitClose: true,
        autoDestroy: false,
        destroyed: false,
        errored: null,
        closed: false,
        closeEmitted: false,
        defaultEncoding: 'utf8',
        awaitDrainWriters: null,
        multiAwaitDrain: false,
        readingMore: false,
        dataEmitted: true,
        decoder: null,
        encoding: null,
        [Symbol(kPaused)]: false
      },
      writableState: WritableState {
        objectMode: false,
        highWaterMark: 16384,
        finalCalled: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        destroyed: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function: bound onwrite],
        writecb: null,
        writelen: 0,
        afterWriteTickInfo: null,
        buffered: [],
        bufferedIndex: 0,
        allBuffers: true,
        allNoop: true,
        pendingcb: 0,
        constructed: true,
        prefinished: false,
        errorEmitted: false,
        emitClose: true,
        autoDestroy: false,
        errored: null,
        closed: false,
        closeEmitted: false,
        [Symbol(kOnFinished)]: []
      }
    },
    handler: {
      func: [Function: bound isActive] AsyncFunction,
      serialize: [Function: serialize],
      deserialize: [Function: deserialize],
      type: 'unary',
      path: '/externalscaler.ExternalScaler/IsActive'
    },
    options: {},
    cancelled: false,
    deadlineTimer: null,
    statusSent: false,
    deadline: Infinity,
    wantTrailers: false,
    metadataSent: false,
    canPush: false,
    isPushPending: false,
    bufferedMessages: [],
    messagesToPush: [],
    maxSendMessageSize: -1,
    maxReceiveMessageSize: 4194304,
    [Symbol(kCapture)]: false
  },
  metadata: Metadata {
    internalRepr: Map(1) { 'user-agent' => [Array] },
    options: {}
  },
  request: {
    scalerMetadata: {
      scalerAddress: '0.tcp.in.ngrok.io:13192',
      governer: 'wandb',
      namespace: 'default'
    },
    name: 'wandb',
    namespace: 'default'
  },
  cancelled: false,
  [Symbol(kCapture)]: false
}
 */
