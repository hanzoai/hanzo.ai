import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  ExternalLink,
  Check,
  Sparkles,
  Shield,
} from "lucide-react";

const BRAND_COLOR = "#fd4444";

// Proof chips - integration points
const PROOF_CHIPS = [
  "VS Code",
  "JetBrains",
  "CLI",
  "Remote sandboxes",
  "OpenAI-compatible API",
];

// Agent names for the animated dispatch
const AGENTS = [
  { name: "Hanzo", color: "#fd4444" },
  { name: "Claude Code", color: "#cc785c" },
  { name: "Codex", color: "#10a37f" },
  { name: "Gemini", color: "#8e75b9" },
];

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [dispatchStep, setDispatchStep] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animated dispatch sequence
  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      setDispatchStep((prev) => (prev < 4 ? prev + 1 : prev));
    }, 800);
    return () => clearInterval(timer);
  }, [mounted]);

  // Proof Panel Component - shows the multi-agent workflow
  const ProofPanel = () => (
    <div className="rounded-xl border border-neutral-700 bg-neutral-900/95 backdrop-blur-sm overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-950">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="ml-2 text-xs text-neutral-500 font-mono">hanzo dev</span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4 bg-neutral-950">
        {/* Task */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 10 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-[10px] uppercase tracking-wider text-neutral-500 mb-2">Task</div>
          <div className="bg-neutral-900 rounded-lg p-3 border border-neutral-800">
            <p className="text-sm text-white font-medium">
              Improve the rate limiting implementation.
            </p>
          </div>
        </motion.div>

        {/* Dispatch */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: dispatchStep >= 1 ? 1 : 0, y: dispatchStep >= 1 ? 0 : 10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-[10px] uppercase tracking-wider text-neutral-500 mb-2">
            Hanzo dispatches in parallel
          </div>
          <div className="flex flex-wrap gap-2">
            {AGENTS.map((agent, idx) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: dispatchStep >= 1 ? 1 : 0,
                  scale: dispatchStep >= 1 ? 1 : 0.9
                }}
                transition={{ delay: idx * 0.1 }}
                className="px-3 py-1.5 rounded-full text-xs font-medium border"
                style={{
                  borderColor: agent.color + "40",
                  color: agent.color,
                  backgroundColor: agent.color + "10"
                }}
              >
                {agent.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Consensus */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: dispatchStep >= 2 ? 1 : 0, y: dispatchStep >= 2 ? 0 : 10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-[10px] uppercase tracking-wider text-neutral-500 mb-2">
            Consensus
          </div>
          <div className="bg-neutral-900 rounded-lg p-3 border border-neutral-800 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-neutral-300">
              Chairman compares diffs + test output and selects the best patch.
            </p>
          </div>
        </motion.div>

        {/* Approve */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: dispatchStep >= 3 ? 1 : 0, y: dispatchStep >= 3 ? 0 : 10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-[10px] uppercase tracking-wider text-neutral-500 mb-2">
            Approve
          </div>
          <div className="bg-neutral-900 rounded-lg p-3 border border-neutral-800 flex items-start gap-3">
            <Shield className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-neutral-300">
              Gate deploy/PR with policy + approvals. Every action is audited.
            </p>
          </div>
        </motion.div>

        {/* Success indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: dispatchStep >= 4 ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2 pt-2"
        >
          <Check className="w-4 h-4 text-green-500" />
          <span className="text-sm text-green-400">PR ready for review</span>
        </motion.div>
      </div>
    </div>
  );

  return (
    <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: mounted ? 0.15 : 0 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Headline - Agent names */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6">
                <span className="text-neutral-400">Codex. Claude Code. Gemini. Hanzo.</span>
                <br />
                <span className="text-white">All Agents in One.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-base lg:text-lg text-neutral-400 leading-relaxed mb-8 max-w-xl">
                Run multiple coding agents against your repo—locally or remotely—then ship the best result with tests, policy gates, and audit trails.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-wrap items-center gap-4 mb-6"
            >
              <Link
                to="/get-started"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm"
                style={{ backgroundColor: BRAND_COLOR, color: '#ffffff' }}
              >
                Get started free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="https://www.youtube.com/hanzoai"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch demo
              </a>
            </motion.div>

            {/* Tertiary link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <a
                href="https://docs.hanzo.ai"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center text-sm text-neutral-400 hover:text-white transition-colors"
              >
                Documentation
                <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
              </a>
            </motion.div>

            {/* Proof Chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-2"
            >
              {PROOF_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400"
                >
                  {chip}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Proof Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ProofPanel />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
