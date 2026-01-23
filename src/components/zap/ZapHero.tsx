import React from "react";
import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";

const ZapHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8"
        >
          <Zap className="w-4 h-4 text-green-500" />
          <span className="text-sm font-medium text-green-400">Zero-Copy Agent Protocol</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            ZAP
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-2xl md:text-3xl font-medium text-white mb-4"
        >
          One endpoint to rule all MCP servers
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-neutral-400 mb-8 max-w-3xl mx-auto"
        >
          MCP made tool integration easy — but JSON everywhere doesn't scale.
          ZAP is Cap'n Proto-native: low allocation, low memory, built for agent swarms.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto"
        >
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4">
            <div className="text-2xl font-bold text-green-500">40–50×</div>
            <div className="text-sm text-neutral-400">Lower overhead</div>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4">
            <div className="text-2xl font-bold text-green-500">↓ Infra</div>
            <div className="text-sm text-neutral-400">RAM + CPU</div>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4">
            <div className="text-2xl font-bold text-green-500">&lt; 1 μs</div>
            <div className="text-sm text-neutral-400">Local hop</div>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4">
            <div className="text-2xl font-bold text-green-500">0</div>
            <div className="text-sm text-neutral-400">JSON parsing</div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://hanzoai.github.io/zap/docs"
            className="inline-flex items-center gap-2 px-8 py-3 bg-green-500 hover:bg-green-600 text-black font-medium rounded-full transition-colors"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://hanzoai.github.io/zap/docs/whitepaper"
            className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-neutral-700 hover:border-neutral-500 text-white font-medium rounded-full transition-colors"
          >
            Read Whitepaper
          </a>
          <a
            href="https://github.com/hanzoai/zap"
            className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-neutral-700 hover:border-neutral-500 text-white font-medium rounded-full transition-colors"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ZapHero;
