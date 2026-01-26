
import React from "react";
import { motion } from "framer-motion";
import { 
  Server, 
  Router, 
  Lock, 
  Gauge, 
  BarChart, 
  Terminal 
} from "lucide-react";

const CoreCapabilities = () => {
  const capabilities = [
    {
      icon: Router,
      title: "Intelligent Routing",
      description: "Advanced L4 and L7 routing with traffic splitting, blue/green deployments, canary releases, and A/B testing."
    },
    {
      icon: Gauge,
      title: "AI-Optimized Performance",
      description: "Machine learning-driven load balancing algorithms that adapt to traffic patterns for optimal resource utilization."
    },
    {
      icon: Lock,
      title: "End-to-End Security",
      description: "Built-in TLS, authentication, rate limiting, and WAF capabilities to protect your services from threats."
    },
    {
      icon: BarChart,
      title: "Real-Time Observability",
      description: "Comprehensive metrics, logging, and tracing capabilities with out-of-the-box integrations for popular platforms."
    },
    {
      icon: Server,
      title: "Global Edge Network",
      description: "Deploy your balancer instances at the edge for ultra-low latency and global availability."
    },
    {
      icon: Terminal,
      title: "GitOps Native",
      description: "Declarative configuration with version control integration for reproducible, auditable deployments."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Capabilities</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Hanzo Balancer provides a comprehensive set of features to handle the most demanding traffic management requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50"
            >
              <div className="bg-red-900/20 p-3 rounded-full w-fit mb-4">
                <capability.icon className="h-6 w-6 text-[#fd4444]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
              <p className="text-neutral-300">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
