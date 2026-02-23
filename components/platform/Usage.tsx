'use client'


import React from "react";
import { motion } from "framer-motion";

const Usage = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--black)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            4.8M+ deploys per month (and counting)
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Real-time usage showing totals for users and services, along with 30-day deploys, requests, and logs.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-b from-gray-900/50 to-black rounded-xl overflow-hidden p-6 border border-gray-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center justify-center p-6 bg-[var(--black)]/50 rounded-xl">
              <div className="text-4xl font-bold text-[var(--white)] mb-2">4.8M+</div>
              <div className="text-neutral-400">Monthly Deploys</div>
            </div>
            
            <div className="flex flex-col items-center justify-center p-6 bg-[var(--black)]/50 rounded-xl">
              <div className="text-4xl font-bold text-[var(--white)] mb-2">1.2B+</div>
              <div className="text-neutral-400">Monthly Requests</div>
            </div>
            
            <div className="flex flex-col items-center justify-center p-6 bg-[var(--black)]/50 rounded-xl">
              <div className="text-4xl font-bold text-[var(--white)] mb-2">850K+</div>
              <div className="text-neutral-400">Active Developers</div>
            </div>
          </div>
          
          <div className="mt-8 bg-[var(--black)]/50 p-4 rounded-xl">
            <div className="h-40 w-full bg-gray-900/50 rounded-lg flex items-center justify-center">
              <p className="text-neutral-500">Usage Metrics Visualization</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Usage;
