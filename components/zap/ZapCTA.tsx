'use client'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, BookOpen, Github } from "lucide-react";

const ZapCTA = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/20 mb-8">
            <Zap className="w-4 h-4 text-white/70" />
            <span className="text-sm font-medium text-white/70">v0.2.1</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to scale your agent swarm?
          </h2>

          <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
            Join the next generation of agent infrastructure.
            <br />
            <span className="text-white/70">Welcome to Hanzo AI. All aboard for a greener agentic future.</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://zap-proto.github.io/zap/docs"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/10 text-black font-medium rounded-full transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              Read the Docs
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/zap-proto/zap"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-neutral-700 hover:border-neutral-500 text-white font-medium rounded-full transition-colors"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>

          <p className="mt-12 text-xs text-neutral-500 max-w-xl mx-auto">
            Performance claims depend on workload, payload size, and topology.
            "40–50×" refers to measured reductions in process duplication + parsing overhead
            in representative swarm benchmarks.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ZapCTA;
