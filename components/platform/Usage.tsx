'use client'


import React from "react";
import { motion } from "framer-motion";

const capabilities = [
  { label: "Deploy any stack", description: "Containers, serverless, static — one unified platform" },
  { label: "Global edge network", description: "Low-latency routing across 100+ edge locations worldwide" },
  { label: "Instant rollbacks", description: "Zero-downtime deploys with atomic rollbacks on failure" },
  { label: "Unified observability", description: "Logs, traces, and metrics in a single pane of glass" },
  { label: "Auto-scaling", description: "Scale from zero to millions of requests automatically" },
  { label: "GitOps native", description: "Deploy on push — full CI/CD without the boilerplate" },
];

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
            Everything you need to ship with confidence
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A unified platform for deploying, scaling, and observing your services — from dev to production.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {capabilities.map((cap, i) => (
            <div key={i} className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <div className="font-semibold text-foreground mb-1">{cap.label}</div>
              <div className="text-sm text-muted-foreground">{cap.description}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Usage;
