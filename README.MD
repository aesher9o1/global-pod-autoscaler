# GlobalPodAutoscaler (GPA)

GlobalPodAutoscaler (GPA) is a Kubernetes extension designed to provide high availability for your deployments by enabling automatic scaling of pods across multiple clusters. GPA actively scales deployments on a primary cluster while maintaining a backup cluster to ensure uninterrupted service in the event of resource outages on the primary cluster.

## Features

- Automatically scale pods across multiple clusters.
- Active scaling on the primary cluster with a secondary cluster as a backup.
- Seamless failover to secondary cluster in case of resource outages on the primary cluster.
- Automatic recovery of deployments from the secondary cluster back to the primary cluster once resources become available.

## Prerequisites

- Kubernetes clusters (primary and secondary) with admin access.
- `kubectl` CLI tool installed and configured to manage both clusters.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/global-pod-autoscaler.git
   cd global-pod-autoscaler
   ```

2. Deploy the GPA to both primary and secondary clusters:

   ```
   kubectl apply -f gpa-deployment.yaml --context=primary-cluster
   kubectl apply -f gpa-deployment.yaml --context=secondary-cluster
   ```

3. Configure the primary and secondary cluster contexts in `gpa-configmap.yaml`:

   ```
   primaryCluster: primary-cluster
   secondaryCluster: secondary-cluster
   ```

4. Apply the config map to both clusters:

   ```
   kubectl apply -f gpa-configmap.yaml --context=primary-cluster
   kubectl apply -f gpa-configmap.yaml --context=secondary-cluster
   ```

## Usage

1. Deploy your application to the primary cluster and create a `HorizontalPodAutoscaler` resource for it.

2. Add the `gpa.autoscaling.k8s.io/enabled: "true"` annotation to your `HorizontalPodAutoscaler` resource to enable GPA for your deployment.

   ```
   apiVersion: autoscaling/v2beta2
   kind: HorizontalPodAutoscaler
   metadata:
     name: your-app-hpa
     annotations:
       gpa.autoscaling.k8s.io/enabled: "true"
   spec:
     # HPA configuration goes here...
   ```

3. Apply the updated `HorizontalPodAutoscaler` resource.

   ```
   kubectl apply -f your-app-hpa.yaml --context=primary-cluster
   ```

4. GPA will now automatically manage pod scaling across both clusters according to your HPA configuration and resource availability.

## Contributing

We welcome contributions to the GlobalPodAutoscaler project. Please feel free to submit issues, fork the repository, and send pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
