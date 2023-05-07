/**
apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  name: scaledobject-name
  namespace: scaledobject-namespace
spec:
  scaleTargetRef:
    name: deployment-name
  triggers:
    - type: external-push
      metadata:
        scalerAddress: internal-ip-of-scaler-deployed-to-cluster-master
        governer: name-of-the-deployment-you-want-to-watch
        namespace: namespace-of-the-deployment
 */

export interface ScalerMetadata {
  scalerAddress: string
  governer: string
  namespace: string
}
