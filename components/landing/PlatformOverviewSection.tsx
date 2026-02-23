'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  Users,
  Clock,
  Eye,
  ArrowRight,
  GitBranch,
  TestTube,
  FileCheck,
  Rocket,
  Shield,
  Lock,
  ChevronRight,
} from "lucide-react";

const BRAND_COLOR = "#ffffff";

// AI providers we support for multi-agent execution
const aiProviders = [
  { name: "OpenAI", logo: "/logos/openai.svg" },
  { name: "Anthropic", logo: "/logos/anthropic.svg" },
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Qwen", logo: "/logos/qwen.svg" },
  { name: "Gemini", logo: "/logos/gemini.svg" },
  { name: "Mistral", logo: "/logos/mistral.svg" },
  { name: "Kimi", logo: "/logos/kimi.svg" },
  { name: "Moonshot", logo: "/logos/moonshot.svg" },
];

const multiAgentFeatures = [
  {
    icon: Zap,
    title: "Race multiple agents",
    description: "One task, multiple agents racing. GPT-4, Claude, Gemini, and Qwen compete in parallel.",
  },
  {
    icon: Users,
    title: "Automatic winner selection",
    description: "Diffs scored by test pass rate, code quality, and performance. Best patch wins.",
  },
  {
    icon: Clock,
    title: "Persistent sandboxes",
    description: "Full dev environments that persist. Install deps, refactor, iterate until CI goes green.",
  },
  {
    icon: Eye,
    title: "Complete audit trail",
    description: "Every run, every decision, every artifact. Full visibility for your entire team.",
  },
];

const autonomyModes = [
  {
    id: "plan",
    title: "Plan-only",
    description: "Proposal + file list + risk notes + diff preview",
    icon: FileCheck,
  },
  {
    id: "implement",
    title: "Implement",
    description: "Coherent multi-file edits with repo context",
    icon: GitBranch,
  },
  {
    id: "test",
    title: "Implement + test",
    description: "Suites run automatically; logs attached",
    icon: TestTube,
  },
  {
    id: "deploy",
    title: "Implement + deploy",
    description: "Approvals + policy checks + audit trail",
    icon: Rocket,
  },
];

const PlatformOverviewSection = () => {
  const [activeMode, setActiveMode] = useState("plan");

  return (
    <section className="py-24 px-4 md:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Multi-Agent Remote Execution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <p
            className="inline-flex text-xs font-medium rounded-full px-4 py-2 border mb-6"
            style={{ color: BRAND_COLOR, borderColor: `#ffffff4d` }}
          >
            Why Hanzo Wins
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
            Ship code that actually works.
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mb-8">
            Stop gambling on single-model outputs. Race multiple AI agents against each other,
            and let test results pick the winner. Evidence over vibes.
          </p>

          {/* AI Provider logos */}
          <div className="flex flex-wrap items-center gap-6 mb-12 p-4 rounded-xl bg-neutral-900/30 border border-neutral-800">
            <span className="text-xs text-neutral-500 uppercase tracking-wider font-medium">Supported agents:</span>
            {aiProviders.map((provider) => (
              <div
                key={provider.name}
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                title={provider.name}
              >
                <img
                  src={provider.logo}
                  alt={provider.name}
                  className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity"
                  style={{ filter: 'grayscale(100%) brightness(2)' }}
                />
                <span className="text-xs hidden sm:inline">{provider.name}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {multiAgentFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `#ffffff15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: BRAND_COLOR }} />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-neutral-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

          <Link
            href="/dev"
            className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-colors text-white"
            style={{ backgroundColor: BRAND_COLOR }}
          >
            Start building now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>

        {/* Controllable Autonomy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="inline-flex text-xs font-medium rounded-full px-4 py-2 border mb-6"
            style={{ color: BRAND_COLOR, borderColor: `#ffffff4d` }}
          >
            Your Wedge
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
            Autonomy you can dial. Evidence you can trust.
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mb-12">
            Move fast without giving agents the keys. Every step is explicit, reviewable, and enforceable.
          </p>

          {/* Mode Selector */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {autonomyModes.map((mode, index) => {
              const Icon = mode.icon;
              const isActive = activeMode === mode.id;
              return (
                <motion.button
                  key={mode.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setActiveMode(mode.id)}
                  className={`p-5 rounded-xl border text-left transition-all ${
                    isActive
                      ? "border-white bg-white/10"
                      : "border-neutral-800 bg-neutral-900/50 hover:border-neutral-700"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isActive ? "bg-white/20" : "bg-neutral-800"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-neutral-400"}`} />
                    </div>
                    <div>
                      <h3 className={`text-sm font-semibold mb-1 ${isActive ? "text-white" : "text-neutral-300"}`}>
                        {mode.title}
                      </h3>
                      <p className="text-xs text-neutral-500">{mode.description}</p>
                    </div>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="mt-3 flex items-center text-white text-xs font-medium"
                    >
                      <ChevronRight className="w-3 h-3 mr-1" />
                      Selected
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Signature line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-3 p-4 rounded-xl border border-neutral-800 bg-neutral-900/30 max-w-md"
          >
            <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center">
              <Lock className="w-5 h-5 text-neutral-400" />
            </div>
            <p className="text-sm text-neutral-300">
              <span className="font-medium text-white">Agents don't get admin.</span>{" "}
              They get policies.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformOverviewSection;
