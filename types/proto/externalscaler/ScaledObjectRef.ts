// Original file: proto/externalscaler.proto

export interface ScaledObjectRef {
  name?: string
  namespace?: string
  scalerMetadata?: { [key: string]: string }
}

export interface ScaledObjectRef__Output {
  name: string
  namespace: string
  scalerMetadata: { [key: string]: string }
}
