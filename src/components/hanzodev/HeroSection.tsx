import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ExternalLink,
  Copy,
  Check,
  Users,
  Sliders,
  FileText,
} from "lucide-react";

const BRAND_COLOR = "#fd4444";

const KEY_POINTS = [
  {
    icon: Users,
    label: "Parallel agents + consensus",
    description: "one task, multiple implementations, one best result",
  },
  {
    icon: Sliders,
    label: "Dialable autonomy",
    description: "choose plan-only -> implement -> test -> PR -> deploy (gated)",
  },
  {
    icon: FileText,
    label: "Evidence & audit built in",
    description: "diffs, test logs, approvals, audit trail",
  },
];

const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("curl -fsSL hanzo.sh | sh");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-24 pb-20 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15"
          style={{
            background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main content - centered */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
          >
            <span className="text-white">All coding agents in one workspace</span>
            <br />
            <span className="text-neutral-400">without losing control.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-base lg:text-lg text-neutral-400 leading-relaxed mb-10 max-w-3xl mx-auto"
          >
            Run Hanzo, Claude Code, Codex, Gemini and more against your repo in parallel.
            Compare diffs, inspect test evidence and ship the best change—always under your policies.
          </motion.p>

          {/* Key points as chips/badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {KEY_POINTS.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-colors"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${BRAND_COLOR}20` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: BRAND_COLOR }} />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium text-white">{point.label}</div>
                    <div className="text-xs text-neutral-500">{point.description}</div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            <Link
              to="/get-started"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm"
              style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
            >
              Start free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=hanzo.hanzo-dev"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"
            >
              Install VS Code extension
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
            <a
              href="https://docs.hanzo.ai/dev"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors text-sm text-neutral-400 hover:text-white"
            >
              Docs
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </motion.div>

          {/* Install command */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800">
              <code className="text-sm font-mono text-neutral-300">
                curl -fsSL hanzo.sh | sh
              </code>
              <button
                onClick={handleCopy}
                className="text-neutral-500 hover:text-white transition-colors"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-green-500" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
