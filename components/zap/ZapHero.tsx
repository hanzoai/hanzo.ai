'use client'

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
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
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
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-border mb-8"
        >
          <Zap className="w-4 h-4 text-foreground/70" />
          <span className="text-sm font-medium text-foreground/70">Zero-Copy Agent Protocol</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-white/20 to-white/10 bg-clip-text text-transparent">
            ZAP
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-2xl md:text-3xl font-medium text-foreground mb-4"
        >
          One endpoint to rule all MCP servers
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
        >
          MCP made tool integration easy — but JSON everywhere doesn't scale.
          ZAP uses zero-copy serialization: low allocation, low memory, built for agent swarms.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto"
        >
          <div className="bg-secondary/50 border border-border rounded-xl p-4">
            <div className="text-2xl font-bold text-foreground/70">40–50×</div>
            <div className="text-sm text-muted-foreground">Lower overhead</div>
          </div>
          <div className="bg-secondary/50 border border-border rounded-xl p-4">
            <div className="text-2xl font-bold text-foreground/70">↓ Infra</div>
            <div className="text-sm text-muted-foreground">RAM + CPU</div>
          </div>
          <div className="bg-secondary/50 border border-border rounded-xl p-4">
            <div className="text-2xl font-bold text-foreground/70">&lt; 1 μs</div>
            <div className="text-sm text-muted-foreground">Local hop</div>
          </div>
          <div className="bg-secondary/50 border border-border rounded-xl p-4">
            <div className="text-2xl font-bold text-foreground/70">0</div>
            <div className="text-sm text-muted-foreground">JSON parsing</div>
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
            href="https://zap-proto.github.io/zap/docs"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary/10 hover:bg-primary/10 text-primary-foreground font-medium rounded-full transition-colors"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://zap-proto.github.io/zap/docs/whitepaper"
            className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-border hover:border-neutral-500 text-foreground font-medium rounded-full transition-colors"
          >
            Read Whitepaper
          </a>
          <a
            href="https://github.com/zap-proto/zap"
            className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-border hover:border-neutral-500 text-foreground font-medium rounded-full transition-colors"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ZapHero;
