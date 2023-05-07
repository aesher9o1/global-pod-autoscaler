import * as k8s from '@kubernetes/client-node'

const config = new k8s.KubeConfig()

config.loadFromDefault()

const k8sAppsV1ApiClient = config.makeApiClient(k8s.AppsV1Api)

export function getDeploymentsInNamespace(namespace = 'default') {
  return k8sAppsV1ApiClient.listNamespacedDeployment(namespace)
}
