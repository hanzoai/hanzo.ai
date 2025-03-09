
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

const products = {
  aiCloud: [
    "AI – Unified access to frontier AI models.",
    "Balancer – AI-native load balancer, LLM router, global CDN, caching, firewall.",
    "Commerce – Intelligent e-commerce, dynamic pricing, subscriptions, integrated analytics.",
    "Database – Real-time analytics DB optimized for AI, global replication, fault-tolerant.",
    "Edge – Instant global edge deployments, ultra-low latency compute.",
    "Functions – Globally distributed serverless compute for AI-driven event handling.",
    "Machines – Instantly scalable GPU and CPU compute optimized for AI workloads.",
    "Metrics – Planetary-scale monitoring, observability, predictive analytics.",
    "Payments – Integrated payments infrastructure with subscriptions and usage-based billing.",
    "Storage – Edge-optimized, secure global storage, CDN, S3 compatible.",
    "Vector – High-performance vector database for semantic search, RAG, embeddings.",
    "Works – Workflow automation and orchestration platform for AI-driven processes."
  ],
  dxPlatform: [
    "App – No-code AI app builder with drag-and-drop workflows.",
    "Base – All-in-one realtime DB, authentication, file storage in one backend.",
    "Code – AI-powered VS Code fork for codebase-aware autocomplete and editing.",
    "Dev – Autonomous AI-powered software engineering assistant.",
    "Edge – Lightweight runtime for global edge-optimized applications.",
    "Extension – Marketplace for AI-powered IDE extensions compatible with VS Code.",
    "Functions – Scalable, event-driven serverless compute with built-in AI integration.",
    "Identity – Authentication and authorization supporting OAuth, JWT, RBAC.",
    "Observability – Intelligent tracing, logging, real-time monitoring of AI systems.",
    "Operator – AI-native assistant for automating desktop tasks via natural language.",
    "Virtual Machine – AI-enabled local virtual machine for unified development environments.",
    "Warehouse – Infinitely scalable columnar database designed for realtime analytics.",
    "Zen – Simplicity, clarity, elegance—our AI engineering manifesto guiding every decision we make."
  ]
};

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
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

        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Hanzo Product Lineup</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Hanzo's complete product portfolio offers everything from infrastructure to developer tools.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">Hanzo AI Cloud</h3>
              <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
                <ul className="space-y-3">
                  {products.aiCloud.map((product, index) => (
                    <li key={index} className="text-gray-300">
                      {product}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-indigo-400">Hanzo DX Platform <span className="text-sm text-gray-400">(Open Source & Self-Hostable)</span></h3>
              <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
                <ul className="space-y-3">
                  {products.dxPlatform.map((product, index) => (
                    <li key={index} className="text-gray-300">
                      {product}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
