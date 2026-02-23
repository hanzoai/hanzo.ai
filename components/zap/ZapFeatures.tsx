'use client'

import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Gauge,
  Network,
  Shield,
  Cpu,
  GitMerge,
  Blocks,
  Workflow,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Collapse the Server Explosion",
    description:
      "MCP sidecars per agent → duplicated processes, schemas, idle RAM. ZAP → shared tool backends behind a single endpoint.",
  },
  {
    icon: Gauge,
    title: "Lower Latency at Swarm Scale",
    description:
      "Fewer processes, fewer context switches, fewer parsers → better p95/p99 under load.",
  },
  {
    icon: Network,
    title: "Built for ZAP↔ZAP",
    description:
      "Run pure ZAP for maximum efficiency, or bridge MCP while migrating. Seamless interoperability.",
  },
  {
    icon: Blocks,
    title: "Zero-Copy Native",
    description:
      "ZAP's zero-copy serialization means no parsing overhead. Data stays in wire format, accessed directly in memory.",
  },
  {
    icon: Cpu,
    title: "Zero Allocation Hot Path",
    description:
      "Pre-allocated buffers and arena allocation eliminate GC pressure during request handling.",
  },
  {
    icon: GitMerge,
    title: "MCP Gateway Mode",
    description:
      "Wrap existing MCP servers transparently. One ZAP endpoint can proxy 12+ MCP servers with automatic schema federation.",
  },
  {
    icon: Shield,
    title: "Capability-Based Security",
    description:
      "Fine-grained permissions at the tool level. Delegate only what agents need, nothing more.",
  },
  {
    icon: Workflow,
    title: "Lux Consensus Ready",
    description:
      "Optional coordination layer using Lux metastable consensus for distributed agent swarms.",
  },
];

const ZapFeatures = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why ZAP?
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Purpose-built for agent swarms. Every design decision optimizes for
            low latency and minimal resource consumption.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-green-500/30 transition-colors"
            >
              <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-4 bg-green-500/10">
                <feature.icon className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZapFeatures;
