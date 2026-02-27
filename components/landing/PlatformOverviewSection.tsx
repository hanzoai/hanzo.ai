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

// AI providers we support — all available through Hanzo Cloud gateway
const aiProviders = [
  { name: "OpenAI", logo: "/logos/openai.svg" },
  { name: "Anthropic", logo: "/logos/anthropic.svg" },
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Gemini", logo: "/logos/gemini.svg" },
  { name: "Mistral", logo: "/logos/mistral.svg" },
  { name: "Fireworks", logo: "/logos/fireworks.svg" },
  { name: "OpenRouter", logo: "/logos/openrouter.svg" },
  { name: "Together", logo: "/logos/together.svg" },
  { name: "Groq", logo: "/logos/groq.svg" },
  { name: "Replicate", logo: "/logos/replicate.svg" },
];

const multiAgentFeatures = [
  {
    icon: Zap,
    title: "Race multiple agents",
    description: "One task, multiple agents racing. GPT-4, Claude, Gemini, and Zen compete in parallel.",
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
    <section className="py-24 px-4 md:px-8 bg-background">
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
            style={{ color: "var(--primary)", borderColor: `#ffffff4d` }}
          >
            Why Hanzo Wins
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Ship code that actually works.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Stop gambling on single-model outputs. Race multiple AI agents against each other,
            and let test results pick the winner. Evidence over vibes.
          </p>

          {/* AI Provider logos */}
          <div className="flex flex-wrap items-center gap-6 mb-12 p-4 rounded-xl bg-secondary/30 border border-border">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Supported agents:</span>
            {aiProviders.map((provider) => (
              <div
                key={provider.name}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
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
                  className="p-5 rounded-xl border border-border bg-secondary/50"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `#ffffff15` }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

          <Link
            href="/dev"
            className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-colors text-primary-foreground"

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
            style={{ color: "var(--primary)", borderColor: `#ffffff4d` }}
          >
            Your Wedge
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Autonomy you can dial. Evidence you can trust.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
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
                      ? "border-white bg-primary/10"
                      : "border-border bg-secondary/50 hover:border-border"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isActive ? "bg-primary/20" : "bg-neutral-800"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-foreground" : "text-muted-foreground"}`} />
                    </div>
                    <div>
                      <h3 className={`text-sm font-semibold mb-1 ${isActive ? "text-foreground" : "text-foreground/80"}`}>
                        {mode.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">{mode.description}</p>
                    </div>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="mt-3 flex items-center text-foreground text-xs font-medium"
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
            className="flex items-center gap-3 p-4 rounded-xl border border-border bg-secondary/30 max-w-md"
          >
            <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center">
              <Lock className="w-5 h-5 text-muted-foreground" />
            </div>
            <p className="text-sm text-foreground/80">
              <span className="font-medium text-foreground">Agents don't get admin.</span>{" "}
              They get policies.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformOverviewSection;
