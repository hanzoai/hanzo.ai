
import React from "react";
import { motion } from "framer-motion";
import { Balance, Network, Shield } from "lucide-react";

const PlatformVision = () => {
  const visionPoints = [
    {
      icon: <Balance className="h-10 w-10 text-purple-400" />,
      title: "Intelligent Load Distribution",
      description: "Hanzo Balancer dynamically routes traffic based on real-time service health, load, and AI-driven insights to ensure optimal performance and resource utilization."
    },
    {
      icon: <Network className="h-10 w-10 text-purple-400" />,
      title: "Global Edge Network",
      description: "Deploy your services globally with our planetary-scale edge network, providing ultra-low latency and instant scaling for AI workloads anywhere in the world."
    },
    {
      icon: <Shield className="h-10 w-10 text-purple-400" />,
      title: "Always-On Security",
      description: "Built-in Web Application Firewall (WAF), DDoS protection, and AI-powered threat detection ensure your services are secured against evolving cyber threats."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Platform Vision</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hanzo Balancer represents the next evolution in intelligent traffic management, designed for the AI-first era
            of cloud computing where millisecond performance and dynamic scaling are non-negotiable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/30 p-8 rounded-lg"
            >
              <div className="mb-4">{point.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
              <p className="text-gray-300">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformVision;
