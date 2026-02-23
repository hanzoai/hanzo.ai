'use client'


import React from "react";
import { motion } from "framer-motion";
import { Globe, Zap, Shield } from "lucide-react";

const Infrastructure = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[var(--white)] mb-4">Global Infrastructure</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Serverless architecture that scales automatically with your application needs
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-6 text-center"
          >
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/20 text-white mb-5 mx-auto">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-[var(--white)] mb-3">Global Distribution</h3>
            <p className="text-neutral-300">
              Multi-region deployments ensuring low latency and high availability for users worldwide.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-6 text-center"
          >
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/20 text-white mb-5 mx-auto">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-[var(--white)] mb-3">Automatic Scaling</h3>
            <p className="text-neutral-300">
              Serverless infrastructure that scales resources up and down based on demand without manual intervention.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-6 text-center"
          >
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/20 text-white mb-5 mx-auto">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-[var(--white)] mb-3">High Redundancy</h3>
            <p className="text-neutral-300">
              Fault-tolerant architecture with redundancy and failover capabilities to ensure 99.999% uptime.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 relative"
        >
          <div className="border border-white/20 bg-white/10 rounded-xl p-6 overflow-hidden relative">
            <div className="grid grid-cols-5 gap-2 md:gap-3 mb-6">
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className="h-2 rounded-full bg-white/30 animate-pulse"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                  }}
                ></div>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {["North America", "Europe", "Asia", "Australia", "South America"].map((region, i) => (
                <div key={i} className="px-3 py-1 bg-white/15 rounded-full text-white text-sm">
                  {region}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Infrastructure;
