'use client'


import React from "react";
import { motion } from "framer-motion";

const Regions = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--black)] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:30px_30px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Serverful JavaScript Without the Hassle of Serverless
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Imagine if a server could boot as fast as a serverless function? That's Hanzo Machines—serverless compute is a trade-off you no longer need to make. Graduate to a full-stack cloud to regain control over your stack & hosting bill.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Boots in 250ms or Less</h3>
            <p className="text-neutral-300 mb-8">
              Functions and apps boot and respond to web requests in 250ms or less with Hanzo Machines. You decide to keep them running or automatically put them to sleep.
            </p>
            
            <div className="rounded-lg bg-gray-900/50 border border-gray-800 overflow-hidden">
              <div className="bg-gray-800 py-2 px-4 flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-white/10"></div>
                <div className="w-3 h-3 rounded-full bg-white/10"></div>
                <div className="w-3 h-3 rounded-full bg-white/10"></div>
                <div className="text-neutral-400 text-sm">Terminal</div>
              </div>
              <div className="p-4 font-mono text-sm text-neutral-300">
                <div className="text-white/70">$ hanzo deploy</div>
                <div className="text-neutral-400">Initializing deployment...</div>
                <div className="text-neutral-400">Deploying to region: us-east-1</div>
                <div className="text-neutral-400">Building container image...</div>
                <div className="text-neutral-400">Pushing to registry...</div>
                <div className="text-white">✓ Deployed in 250ms</div>
                <div className="text-neutral-400">Your app is live at: <span className="text-white">https://myapp.hanzo.cloud</span></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Built for JavaScript Developers</h3>
            <p className="text-neutral-300 mb-8">
              JavaScript, TypeScript, Bun, Deno—whatever your flavor, Hanzo Launch automatically detects your runtime and generates a VM with everything you need to run your app.
            </p>
            
            <div className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/10 border border-white/30">
              <h4 className="text-xl font-bold mb-4">Real GPUs & CPUs on the Edge</h4>
              <p className="text-neutral-300">
                Run workloads that require GPUs or lots of CPUs, memory, and storage in over 30 regions around the world—all interconnected by a private, encrypted WireGuard network that works out of the box.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Regions;
