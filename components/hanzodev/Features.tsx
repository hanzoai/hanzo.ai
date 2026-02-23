'use client'

import React from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  GitPullRequest,
  Rocket,
  GitBranch,
  Layout,
  Search,
  Users,
  RefreshCw,
  Mic,
  Code,
  BarChart3,
  CreditCard,
  Puzzle,
  Ticket,
  MessageSquare,
  Terminal,
  Wrench,
  Bug,
  Brain,
  Keyboard,
  ArrowRight,
  ExternalLink
} from "lucide-react";

const BRAND_COLOR = "#ffffff";

const RECENTLY_SHIPPED = [
  {
    icon: Cloud,
    title: "Cloud Agents",
    description:
      "Run AI agents in the cloud without consuming local resources. Execute long-running tasks, complex workflows, and resource-intensive operations while your machine stays free for other work.",
    link: "https://docs.hanzo.ai/cloud-agents",
  },
  {
    icon: GitPullRequest,
    title: "Code Reviews",
    description:
      "Automated code review agents that analyze pull requests, suggest improvements, catch bugs, and ensure code quality standards. Get instant feedback before merging.",
    link: "https://docs.hanzo.ai/code-reviews",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description:
      "One-click deployment. Deploy your applications directly from Hanzo Dev with intelligent configuration detection and automated setup.",
    link: "https://docs.hanzo.ai/deploy",
  },
  {
    icon: GitBranch,
    title: "Parallel Agents (CLI)",
    description:
      "Run multiple AI agents simultaneously using git worktrees in the Hanzo Dev CLI. Coordinate complex tasks across different parts of your codebase and review results as pull requests.",
    link: "https://docs.hanzo.ai/parallel-agents",
  },
];

const ALL_FEATURES = [
  {
    icon: Layout,
    title: "App Builder",
    description:
      "Visual app builder that generates production-ready code. Design interfaces, define logic, and let Hanzo Dev create the implementation.",
  },
  {
    icon: Search,
    title: "Managed Indexing",
    description:
      "Deep semantic understanding of your entire codebase. Navigate, understand, and modify large projects with full context awareness.",
  },
  {
    icon: Users,
    title: "Agent Manager",
    description:
      "Run multiple AI agents simultaneously directly in your IDE. Coordinate complex tasks across different parts of your codebase.",
  },
  {
    icon: RefreshCw,
    title: "Sessions",
    description:
      "Start a session in one place and continue on another platform. Your AI agents, context, and progress follow you everywhere.",
  },
  {
    icon: Mic,
    title: "Voice Prompting",
    description:
      "Use natural voice commands to interact with AI agents directly in your IDE. Speak your requests instead of typing.",
  },
  {
    icon: Code,
    title: "Autocomplete in JetBrains",
    description:
      "AI-powered autocomplete and code suggestions directly in your JetBrains IDE with full codebase understanding.",
  },
  {
    icon: BarChart3,
    title: "AI Adoption Score",
    description:
      "Track and measure your team's AI adoption effectiveness. Understand usage patterns and optimize workflows.",
  },
  {
    icon: CreditCard,
    title: "Auto Top Ups",
    description:
      "Never run out of credits mid-task. Auto-replenish your balance automatically whenever it drops below $5.",
  },
  {
    icon: Puzzle,
    title: "Skills",
    description:
      "Extend Hanzo Dev with skills. Sharable packages of domain expertise, new capabilities, and repeatable workflows.",
  },
  {
    icon: Ticket,
    title: "Hanzo Pass",
    description:
      "Get up to 50% free credits on your AI subscription. Credits never expire, plus bonus credits on top.",
  },
  {
    icon: MessageSquare,
    title: "Hanzo for Slack",
    description:
      "Ask questions about your codebase, get explanations, or create PRs via cloud agents—all in Slack.",
  },
  {
    icon: Terminal,
    title: "Install where you work",
    description:
      "Terminal CLI, VS Code, JetBrains. Hanzo works wherever you do.",
  },
  {
    icon: Wrench,
    title: "Auto failure recovery",
    description:
      "Hanzo automatically detects errors, runs test suites and recovers on failure. No more explaining errors to AI.",
  },
  {
    icon: Search,
    title: "Hallucination-free code",
    description:
      "MCP marketplace with tools that automatically look up library documentation. AI follows best practices.",
  },
  {
    icon: Brain,
    title: "Context is king",
    description:
      "Hanzo searches for the right context automatically. Any context you add is bonus, not required.",
  },
  {
    icon: Bug,
    title: "Kickstart debugging",
    description:
      "Debug mode goes through your codebase with a fine-toothed comb to find bug sources.",
  },
  {
    icon: Brain,
    title: "Memory bank",
    description:
      "Stop re-explaining your app. AI keeps its own records of what it worked on and your preferences.",
  },
  {
    icon: Keyboard,
    title: "Tab autocomplete",
    description:
      "Fast inline completion including multiline suggestions. Intelligent completions that understand your codebase.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-black to-neutral-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Features
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Everything you need for agentic development
          </p>
        </motion.div>

        {/* Recently Shipped */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
            >
              Recently Shipped
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {RECENTLY_SHIPPED.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.a
                  key={feature.title}
                  href={feature.link || "#"}
                  target="_blank"
                  rel="noreferrer noopener"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 hover:border-white/30/50 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${BRAND_COLOR}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: BRAND_COLOR }} />
                    </div>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/10 text-white/70">
                      New
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-neutral-400 mb-4">
                    {feature.description}
                  </p>
                  <span className="text-sm text-white flex items-center gap-1">
                    View Documentation
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* All Features Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {ALL_FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 6) * 0.05 }}
                className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-5 h-5 text-neutral-400" />
                  <h4 className="text-sm font-medium text-white">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* See upcoming features link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://docs.hanzo.ai/roadmap"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
          >
            See upcoming features
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
