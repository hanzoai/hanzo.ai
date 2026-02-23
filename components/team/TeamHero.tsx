'use client'

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@hanzo/ui";
import { BrainCircuit, Zap, Users, ArrowRight, Bot } from "lucide-react";

const BRAND_COLOR = "#ffffff";

const TeamHero = () => {
  return (
    <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15"
          style={{
            background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: `radial-gradient(circle, #ffffff 0%, transparent 70%)`,
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-10"
          style={{
            background: `radial-gradient(circle, #a3a3a3 0%, transparent 70%)`,
            filter: "blur(80px)",
          }}
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
            style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
          >
            <Bot className="w-3.5 h-3.5" />
            AI + Human Integration
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
          >
            <span className="text-foreground">Meet your</span>
            <br />
            <span className="text-muted-foreground">AI Team.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto"
          >
            Autonomous AI agents working seamlessly alongside humans.
            Train them with a simple Zoom call, monitor their work in real-time,
            and benefit from enterprise-grade security and audit features.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Link
              href="/signup"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm"
              style={{ backgroundColor: BRAND_COLOR, color: "#000000" }}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-accent text-sm text-foreground"
            >
              Watch Demo
            </Link>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-8"
          >
            {[
              { icon: BrainCircuit, label: "AI-Powered" },
              { icon: Users, label: "Human Integration" },
              { icon: Zap, label: "Enterprise Ready" }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  className="flex flex-col items-center"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className="p-3 rounded-full mb-3 border"
                    style={{
                      backgroundColor: `${BRAND_COLOR}15`,
                      borderColor: `${BRAND_COLOR}30`
                    }}
                  >
                    <Icon className="h-6 w-6" style={{ color: BRAND_COLOR }} />
                  </div>
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="w-1 h-8 rounded-full opacity-70"
          style={{ background: `linear-gradient(to bottom, ${BRAND_COLOR}, #ffffff)` }}
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, delay: 0.2, repeat: Infinity, repeatType: "loop" }}
          className="w-1 h-6 rounded-full opacity-40"
          style={{ background: `linear-gradient(to bottom, ${BRAND_COLOR}, #ffffff)` }}
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, delay: 0.4, repeat: Infinity, repeatType: "loop" }}
          className="w-1 h-4 rounded-full opacity-20"
          style={{ background: `linear-gradient(to bottom, ${BRAND_COLOR}, #ffffff)` }}
        />
      </div>
    </section>
  );
};

export default TeamHero;
