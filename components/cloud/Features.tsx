'use client'


import React from "react";
import { motion } from "framer-motion";
import { Cloud, Cpu, Globe, Server, Database, Network, Bot, Lock, Zap } from "lucide-react";
import { Button } from "@hanzo/ui";

const Features = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Enterprise-Grade Cloud Built for AI Engineers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-300 max-w-3xl mx-auto"
          >
            The most flexible and powerful compute platform for AI workloads. Hanzo Machines are hardware-virtualized containers, running on proprietary AI-optimized hardware, that launch instantly and scale automatically with your needs.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-white/30 transition-colors"
          >
            <Globe className="w-12 h-12 text-white mb-6" />
            <h3 className="text-xl font-bold mb-4">Global Reach</h3>
            <p className="text-neutral-300">
              Deploy in 35 regions, from Sydney to São Paulo, for sub-100ms response times and native-app feel no matter where your users are.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-white/30 transition-colors"
          >
            <Server className="w-12 h-12 text-white mb-6" />
            <h3 className="text-xl font-bold mb-4">Instant Scaling</h3>
            <p className="text-neutral-300">
              Hanzo Machines start fast enough to handle HTTP requests, run only when you need them, and scale into tens of thousands of instances.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-white/30 transition-colors"
          >
            <Cpu className="w-12 h-12 text-white mb-6" />
            <h3 className="text-xl font-bold mb-4">GPU Acceleration</h3>
            <p className="text-neutral-300">
              From LLMs to inferencing, hardware acceleration with the same developer experience as a simple CRUD app.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-white/30 transition-colors"
          >
            <Database className="w-12 h-12 text-white mb-6" />
            <h3 className="text-xl font-bold mb-4">AI-Native Storage</h3>
            <p className="text-neutral-300">
              Vector databases, document stores, and relational databases optimized for AI workloads with automatic scaling.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-white/30 transition-colors"
          >
            <Bot className="w-12 h-12 text-white mb-6" />
            <h3 className="text-xl font-bold mb-4">Model Management</h3>
            <p className="text-neutral-300">
              Streamlined deployment and management of AI models with version control, A/B testing, and monitoring built-in.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-white/30 transition-colors"
          >
            <Lock className="w-12 h-12 text-white mb-6" />
            <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
            <p className="text-neutral-300">
              Enterprise-grade security with private networking, encryption, audit logging, and GDPR controls.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-white/10 rounded-xl p-8 border border-white/30"
        >
          <div className="flex flex-col md:flex-row items-center">
            <Cloud className="w-14 h-14 text-white mb-6 md:mb-0 md:mr-8" />
            <div>
              <h3 className="text-xl font-bold mb-3">Built for AI Engineering</h3>
              <p className="text-neutral-300">
                Specialized infrastructure for AI workloads, with optimizations for large language models, computer vision, and other AI tasks. From prototype to production with zero re-architecture.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-xl p-8 ring-1 ring-white/10 hover:ring-white/30 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">Enterprise Support</h3>
            <p className="text-neutral-300 mb-8">
              Paid support packages include a team of actual engineers (not chatbots) who themselves ship code on our platform. Emergency support and guaranteed response times available.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                className="bg-gradient-to-r from-white to-white/10 hover:from-[#cccccc] hover:to-white text-[var(--white)]"
              >
                Contact Sales
              </Button>
              
              <Button
                variant="outline"
                className="bg-transparent text-[var(--white)] hover:bg-[var(--white)]/10 border border-white/30"
              >
                Try Free Tier
              </Button>
            </div>
            
            <div className="mt-6 text-neutral-400 text-sm">
              Looking for a free, self-hosted alternative? <a href="/platform" className="text-white hover:underline">Check out Hanzo Platform</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
