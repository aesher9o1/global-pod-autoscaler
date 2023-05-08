import { ScalerMetadata } from '../../types/scalerMetadata'

export function sanatiseMetadata(metadata: ScalerMetadata) {
  if (!metadata.governer) throw new Error('Key governor is missing')
  if (!metadata.namespace) throw new Error('key namespace is missing')
  return true
}
