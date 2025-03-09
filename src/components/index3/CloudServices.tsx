import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Cloud, Database, BarChart, Server, Box, Users, CreditCard, Cpu, Shield, Globe, Network, Lock } from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";
import { Button } from "@/components/ui/button";
import CloudDeploymentAnimation from "@/components/animations/CloudDeploymentAnimation";

const CloudServices = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/50 relative overflow-hidden">
      <div className="absolute top-40 right-20 w-64 h-64 bg-purple-900/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium">
                Infinitely Scalable, Globally Distributed
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ChromeText 
                as="h2" 
                className="text-3xl md:text-5xl font-bold mb-4"
                style={{
                  backgroundPosition: `${(mousePosition.x / (containerRef.current?.offsetWidth || 1)) * 100}% ${(mousePosition.y / (containerRef.current?.offsetHeight || 1)) * 100}%`,
                }}
              >
                AI Cloud
              </ChromeText>
              <p className="text-xl text-gray-300 mt-4">
                Global, infinitely scalable, sustainable compute infrastructure specifically optimized for AI applications
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 md:mt-0"
          >
            <Button size="lg" variant="outline" className="text-white whitespace-nowrap">
              <a href="/cloud">Explore Cloud</a>
            </Button>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Global Network</h3>
              <p className="text-gray-300 mb-6">
                Deploy AI workloads across our planetary-scale infrastructure with over 36 global locations, ensuring low-latency access and regional data compliance.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <div className="mr-2 mt-1">•</div>
                  <span>Instant global scaling with edge-optimized routing</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">•</div>
                  <span>Automatic load-balancing and failover protection</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">•</div>
                  <span>Zero-config private networking between regions</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <CloudDeploymentAnimation />
            </motion.div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-gray-900/20 border border-gray-800 rounded-xl p-8 group hover:bg-gray-900/30 transition-colors"
            onMouseEnter={() => setIsHovered("ai-compute")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${isHovered === "ai-compute" ? "bg-purple-600/30" : "bg-purple-900/30"}`}>
              <Cpu className={`h-6 w-6 transition-colors duration-300 ${isHovered === "ai-compute" ? "text-purple-300" : "text-purple-400"}`} />
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
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Optimized containers for popular ML frameworks</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-gray-900/20 border border-gray-800 rounded-xl p-8 group hover:bg-gray-900/30 transition-colors"
            onMouseEnter={() => setIsHovered("analytics")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${isHovered === "analytics" ? "bg-purple-600/30" : "bg-purple-900/30"}`}>
              <BarChart className={`h-6 w-6 transition-colors duration-300 ${isHovered === "analytics" ? "text-purple-300" : "text-purple-400"}`} />
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
                <span>Planetary-scale infrastructure (36+ global locations)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Interactive dashboards with no-code visualization tools</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-gray-900/20 border border-gray-800 rounded-xl p-8 group hover:bg-gray-900/30 transition-colors"
            onMouseEnter={() => setIsHovered("security")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${isHovered === "security" ? "bg-purple-600/30" : "bg-purple-900/30"}`}>
              <Shield className={`h-6 w-6 transition-colors duration-300 ${isHovered === "security" ? "text-purple-300" : "text-purple-400"}`} />
            </div>
            <ChromeText as="h3" className="text-2xl font-bold mb-4">
              Security
            </ChromeText>
            <p className="text-gray-300 mb-4">
              Enterprise-grade protection for AI workloads and data.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>End-to-end encryption for data in transit and at rest</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Advanced DDoS protection and intrusion detection</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>SOC 2, HIPAA, GDPR, and ISO 27001 compliance</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Hardware-level isolation for sensitive workloads</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-gray-900/20 border border-gray-800 rounded-xl p-8 group hover:bg-gray-900/30 transition-colors"
            onMouseEnter={() => setIsHovered("base")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${isHovered === "base" ? "bg-purple-600/30" : "bg-purple-900/30"}`}>
              <Server className={`h-6 w-6 transition-colors duration-300 ${isHovered === "base" ? "text-purple-300" : "text-purple-400"}`} />
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
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Automatic schema validation and type generation</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-gray-900/20 border border-gray-800 rounded-xl p-8 group hover:bg-gray-900/30 transition-colors"
            onMouseEnter={() => setIsHovered("commerce")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${isHovered === "commerce" ? "bg-purple-600/30" : "bg-purple-900/30"}`}>
              <Box className={`h-6 w-6 transition-colors duration-300 ${isHovered === "commerce" ? "text-purple-300" : "text-purple-400"}`} />
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
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>AI-powered recommendation engines and inventory forecasting</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="bg-gray-900/20 border border-gray-800 rounded-xl p-8 group hover:bg-gray-900/30 transition-colors"
            onMouseEnter={() => setIsHovered("database")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${isHovered === "database" ? "bg-purple-600/30" : "bg-purple-900/30"}`}>
              <Database className={`h-6 w-6 transition-colors duration-300 ${isHovered === "database" ? "text-purple-300" : "text-purple-400"}`} />
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
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Automatic sharding and partitioning for massive datasets</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CloudServices;
