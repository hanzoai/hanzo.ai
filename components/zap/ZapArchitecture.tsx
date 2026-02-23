'use client'

import React from "react";
import { motion } from "framer-motion";

const ZapArchitecture = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Architecture
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            ZAP acts as a unified gateway, federating multiple tool servers behind a single endpoint.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-black/50 border border-neutral-800 rounded-xl p-8 font-mono text-sm overflow-x-auto"
        >
          <pre className="text-neutral-300">
{`┌─────────────────────────────────────────────────────────────────┐
│                        Agent Swarm                               │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐             │
│  │ Agent 1 │  │ Agent 2 │  │ Agent 3 │  │ Agent N │    ...      │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘             │
│       │            │            │            │                   │
│       └────────────┴─────┬──────┴────────────┘                   │
│                          │                                       │
│                          ▼                                       │
│              ┌───────────────────────┐                           │
│              │      `}<span className="text-white/70">ZAP Gateway</span>{`       │                           │
│              │   zap://localhost:9999│                           │
│              │                       │                           │
│              │  • Schema Federation  │                           │
│              │  • Request Routing    │                           │
│              │  • Capability Control │                           │
│              └───────────┬───────────┘                           │
│                          │                                       │
│       ┌──────────────────┼──────────────────┐                    │
│       │                  │                  │                    │
│       ▼                  ▼                  ▼                    │
│  ┌─────────┐       ┌─────────┐       ┌─────────┐                │
│  │`}<span className="text-white/70">MCP Srv</span>{` │       │`}<span className="text-white/70">ZAP Srv</span>{` │       │`}<span className="text-white/70">MCP Srv</span>{` │                │
│  │ GitHub  │       │ Native  │       │ Slack   │    ...         │
│  └─────────┘       └─────────┘       └─────────┘                │
└─────────────────────────────────────────────────────────────────┘`}
          </pre>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mt-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white/70 mb-2">N:1</div>
            <div className="text-neutral-400">Agents share one connection</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white/70 mb-2">1:M</div>
            <div className="text-neutral-400">Gateway fans out to backends</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white/70 mb-2">0</div>
            <div className="text-neutral-400">Duplicate tool processes</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ZapArchitecture;
