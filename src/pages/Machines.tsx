
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Cpu, Server, Zap, Network, BarChart, Globe, Shield, Database } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";

const Machines = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1 inline-block mb-4">
              <span className="text-green-400 text-sm font-medium">High-Performance Computing</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
              Hanzo Machines
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Dedicated AI compute infrastructure optimized for machine learning and high-performance workloads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-green-500/30 text-white hover:bg-green-900/20 px-8 py-6 text-lg">
                View Documentation
              </Button>
            </div>
          </div>
          
          {/* Hero Hardware Visualization */}
          <div className="relative bg-green-900/20 border border-green-500/20 rounded-xl p-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/50 border border-green-500/20 rounded-lg p-4">
                <h3 className="font-medium text-green-400 mb-2">NVIDIA H100</h3>
                <p className="text-sm text-gray-300 mb-3">Dedicated GPU instances for AI/ML training</p>
                <div className="space-y-3">
                  <div className="bg-gray-800 rounded-md p-2 flex justify-between items-center">
                    <span className="text-sm">VRAM</span>
                    <span className="font-medium text-green-400">80GB HBM3</span>
                  </div>
                  <div className="bg-gray-800 rounded-md p-2 flex justify-between items-center">
                    <span className="text-sm">Cores</span>
                    <span className="font-medium text-green-400">16,896 CUDA</span>
                  </div>
                  <div className="bg-gray-800 rounded-md p-2 flex justify-between items-center">
                    <span className="text-sm">Tensor Cores</span>
                    <span className="font-medium text-green-400">528 TCs</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/50 border border-green-500/20 rounded-lg p-4">
                <h3 className="font-medium text-green-400 mb-2">AMD EPYC 7763</h3>
                <p className="text-sm text-gray-300 mb-3">High-core count CPU instances</p>
                <div className="space-y-3">
                  <div className="bg-gray-800 rounded-md p-2 flex justify-between items-center">
                    <span className="text-sm">Cores</span>
                    <span className="font-medium text-green-400">64 Cores</span>
                  </div>
                  <div className="bg-gray-800 rounded-md p-2 flex justify-between items-center">
                    <span className="text-sm">Threads</span>
                    <span className="font-medium text-green-400">128 Threads</span>
                  </div>
                  <div className="bg-gray-800 rounded-md p-2 flex justify-between items-center">
                    <span className="text-sm">Memory</span>
                    <span className="font-medium text-green-400">Up to 2TB</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/50 border border-green-500/20 rounded-lg p-4">
                <h3 className="font-medium text-green-400 mb-2">Storage Options</h3>
                <p className="text-sm text-gray-300 mb-3">Ultra-fast NVMe and persistent storage</p>
                <div className="space-y-3">
                  <div className="bg-gray-800 rounded-md p-2 flex justify-between items-center">
                    <span className="text-sm">Local NVMe</span>
                    <span className="font-medium text-green-400">Up to 8TB</span>
                  </div>
                  <div className="bg-gray-800 rounded-md p-2 flex justify-between items-center">
                    <span className="text-sm">Network Storage</span>
                    <span className="font-medium text-green-400">Unlimited</span>
                  </div>
                  <div className="bg-gray-800 rounded-md p-2 flex justify-between items-center">
                    <span className="text-sm">I/O Performance</span>
                    <span className="font-medium text-green-400">7GB/s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ChromeText as="h2" className="text-3xl font-bold mb-4">
              Key Features & Capabilities
            </ChromeText>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Purpose-built infrastructure for the most demanding AI and compute workloads
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-green-900/20 border border-green-500/30 rounded-xl p-6"
            >
              <Cpu className="h-10 w-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">High-Performance GPUs</h3>
              <p className="text-gray-300">
                Access to NVIDIA H100, A100, and L4 GPUs for AI training and inference workloads.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-green-900/20 border border-green-500/30 rounded-xl p-6"
            >
              <Server className="h-10 w-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Flexible Configurations</h3>
              <p className="text-gray-300">
                Custom CPU, memory, and storage configurations to match your specific workload requirements.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-green-900/20 border border-green-500/30 rounded-xl p-6"
            >
              <Zap className="h-10 w-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Instant Provisioning</h3>
              <p className="text-gray-300">
                Launch machines in seconds with pre-configured environments for ML frameworks and data science.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-green-900/20 border border-green-500/30 rounded-xl p-6"
            >
              <Network className="h-10 w-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">High-Speed Networking</h3>
              <p className="text-gray-300">
                Up to 100 Gbps networking with ultra-low latency between machines for distributed workloads.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-green-900/20 border border-green-500/30 rounded-xl p-6"
            >
              <BarChart className="h-10 w-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Comprehensive Monitoring</h3>
              <p className="text-gray-300">
                Real-time metrics and performance monitoring for all machine resources and workloads.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-green-900/20 border border-green-500/30 rounded-xl p-6"
            >
              <Globe className="h-10 w-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Global Availability</h3>
              <p className="text-gray-300">
                Deploy machines in 20+ regions worldwide with automatic failover and redundancy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-b from-black to-green-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ChromeText as="h2" className="text-3xl font-bold mb-4">
              Designed for AI Workloads
            </ChromeText>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Optimized infrastructure for every stage of machine learning and AI development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-900/10 border border-green-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">ML Training</h3>
              <p className="text-gray-300 mb-4">
                Train large-scale AI models with high-performance GPU clusters and optimized ML frameworks.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Multi-GPU instances with NVLink</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Distributed training across multiple machines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Pre-installed PyTorch, TensorFlow, and JAX</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-900/10 border border-green-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Inference Optimization</h3>
              <p className="text-gray-300 mb-4">
                Deploy models for inference with optimized runtime configurations.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>GPU-accelerated inference endpoints</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Automatic model quantization and optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Horizontal scaling for high-throughput demands</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-900/10 border border-green-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">High-Performance Computing</h3>
              <p className="text-gray-300 mb-4">
                Run scientific simulations, financial modeling, and other compute-intensive workloads.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>High core-count CPU machines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>MPI and other HPC frameworks pre-installed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Bare metal performance with containerized convenience</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-900/10 border border-green-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Large Language Models</h3>
              <p className="text-gray-300 mb-4">
                Run and fine-tune frontier Large Language Models with optimized environments.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Optimized for LLaMA, Falcon, and other open LLMs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>LoRA and QLoRA fine-tuning support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Seamless integration with Hanzo AI endpoints</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enterprise Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ChromeText as="h2" className="text-3xl font-bold mb-4">
              Enterprise-Grade Infrastructure
            </ChromeText>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for organizations with the most demanding requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-900/10 border border-green-500/20 rounded-xl p-6 flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Security & Compliance</h3>
              <p className="text-gray-300">
                SOC 2, HIPAA, and GDPR compliant infrastructure with hardware-level isolation.
              </p>
            </div>
            
            <div className="bg-green-900/10 border border-green-500/20 rounded-xl p-6 flex flex-col items-center text-center">
              <Database className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Data Sovereignty</h3>
              <p className="text-gray-300">
                Regional deployment options to meet data residency and sovereignty requirements.
              </p>
            </div>
            
            <div className="bg-green-900/10 border border-green-500/20 rounded-xl p-6 flex flex-col items-center text-center">
              <Server className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Reserved Capacity</h3>
              <p className="text-gray-300">
                Guaranteed availability with capacity reservations for critical workloads.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-2xl p-8 md:p-12 border border-green-500/30">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Power Your AI Workloads</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get started with Hanzo Machines today and experience high-performance AI infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
                  Sign Up Free
                </Button>
                <Button variant="outline" className="border-green-500/30 text-white hover:bg-green-900/20 px-8 py-6 text-lg">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Machines;
