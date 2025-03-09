
import React from "react";
import { motion } from "framer-motion";
import { Cloud, Database, BarChart, Server, Box, Users, CreditCard, Cpu } from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";

const CloudServices = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <ChromeText as="h2" className="text-3xl md:text-5xl font-bold mb-6">
            Hanzo Cloud
          </ChromeText>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Global, infinitely scalable, sustainable compute infrastructure specifically optimized for AI applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* AI Compute */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-gray-900/20 border border-gray-800 rounded-xl p-8"
          >
            <div className="h-12 w-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
              <Cpu className="h-6 w-6 text-purple-400" />
            </div>
            <ChromeText as="h3" className="text-2xl font-bold mb-4">
              AI Compute
            </ChromeText>
            <p className="text-gray-300 mb-4">
              Instant scaling, GPU-accelerated AI environments.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>High-performance NVIDIA hardware on-demand (H100, DGX)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Scalable AI inference and training infrastructure</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Low-latency deployments across global data centers</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-gray-900/20 border border-gray-800 rounded-xl p-8"
          >
            <div className="h-12 w-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
              <BarChart className="h-6 w-6 text-purple-400" />
            </div>
            <ChromeText as="h3" className="text-2xl font-bold mb-4">
              Analytics
            </ChromeText>
            <p className="text-gray-300 mb-4">
              Precision business intelligence and real-time user insights.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Real-time event tracking and contextual analytics</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>AI-driven predictive analytics and anomaly detection</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Planetary-scale infrastructure (200+ global locations)</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Base */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-gray-900/20 border border-gray-800 rounded-xl p-8"
          >
            <div className="h-12 w-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
              <Server className="h-6 w-6 text-purple-400" />
            </div>
            <ChromeText as="h3" className="text-2xl font-bold mb-4">
              Base
            </ChromeText>
            <p className="text-gray-300 mb-4">
              A complete backend platform in one line of code (@hanzo/base).
            </p>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Real-time database, serverless functions, and authentication</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Integrated CDN and edge-optimized global storage</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Fully open-source, easy self-hosting and no vendor lock-in</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Commerce */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-gray-900/20 border border-gray-800 rounded-xl p-8"
          >
            <div className="h-12 w-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
              <Box className="h-6 w-6 text-purple-400" />
            </div>
            <ChromeText as="h3" className="text-2xl font-bold mb-4">
              Commerce
            </ChromeText>
            <p className="text-gray-300 mb-4">
              Intelligent, next-generation e-commerce platform (@hanzo/commerce).
            </p>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>One-line store creation with automated checkout and cart</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Dynamic pricing, subscription management, and analytics</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Seamless Web2 and Web3 payment integrations</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Database */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="bg-gray-900/20 border border-gray-800 rounded-xl p-8"
          >
            <div className="h-12 w-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
              <Database className="h-6 w-6 text-purple-400" />
            </div>
            <ChromeText as="h3" className="text-2xl font-bold mb-4">
              Database
            </ChromeText>
            <p className="text-gray-300 mb-4">
              High-performance real-time analytics database.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Optimized for AI workloads with clickhouse-style performance</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Scalable, fault-tolerant architecture with global replication</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>In-memory caching included, seamlessly integrated with Base</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CloudServices;
