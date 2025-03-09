
import React from "react";
import { motion } from "framer-motion";

const ecosystemCategories = [
  {
    title: "Providers & Orchestrators",
    items: [
      "Kubernetes",
      "Docker Swarm",
      "etcd",
      "Consul",
      "K3S",
      "HashiCorp Nomad",
      "Redis",
      "Azure Service Fabric",
      "Amazon ECS",
      "AKS",
      "GKE",
      "EKS",
      "IBM Cloud Kubernetes Service",
      "OpenShift"
    ]
  },
  {
    title: "Tracing & Metrics",
    items: [
      "OpenTelemetry",
      "Datadog",
      "Prometheus",
      "InfluxDB"
    ]
  },
  {
    title: "TLS Certificates",
    items: [
      "Let's Encrypt",
      "Tailscale",
      "SPIFFE"
    ]
  }
];

const Ecosystem = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Hanzo Balancer Ecosystem</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Hanzo Balancer integrates with every major cluster technology and includes built-in support for 
            the top distributed tracing and metrics providers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {ecosystemCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/30 p-6 rounded-lg border border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
