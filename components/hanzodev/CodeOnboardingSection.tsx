'use client'

import React from "react";
import { motion } from "framer-motion";
import { GitBranch, GitPullRequest, Zap } from "lucide-react";

const BRAND_COLOR = "#ffffff";

const CodebaseDemo = () => {
  return (
    <div className="bg-neutral-950 rounded-xl border border-neutral-800 overflow-hidden">
      {/* Chat interface */}
      <div className="p-6">
        {/* User message */}
        <div className="flex gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black text-sm font-medium flex-shrink-0">
            &gt;
          </div>
          <div className="bg-neutral-800 rounded-lg px-4 py-3 max-w-lg">
            <p className="text-white text-sm">I'm new to this codebase. Can you explain it to me?</p>
          </div>
        </div>

        {/* AI response */}
        <div className="flex gap-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-black text-sm font-medium flex-shrink-0"
            style={{ backgroundColor: BRAND_COLOR }}
          >
            ⏺
          </div>
          <div className="flex-1">
            <p className="text-neutral-300 text-sm mb-3">
              I'll analyze the Excalidraw codebase structure and provide a high-level overview.
            </p>

            <div className="bg-neutral-900/50 rounded-lg p-4 mb-4 border border-neutral-800">
              <p className="text-xs text-neutral-500 mb-2">
                ⏺ Analyze(what: "Excalidraw codebase structure and provide a high-level overview...")
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <p className="text-neutral-300">
                Excalidraw is an open-source virtual whiteboard application with a hand-drawn style. It's designed for creating diagrams, wireframes, and collaborative drawings.
              </p>

              <div>
                <h4 className="text-white font-semibold mb-2">## Purpose</h4>
                <ul className="text-neutral-400 space-y-1 ml-4">
                  <li>• Web-based drawing tool with infinite canvas</li>
                  <li>• Hand-drawn aesthetic with support for shapes, arrows, text</li>
                  <li>• End-to-end encrypted collaboration</li>
                  <li>• Works offline as a PWA (Progressive Web App)</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2">## Architecture</h4>
                <p className="text-neutral-400 mb-2">The project is organized as a monorepo with these main components:</p>
                <div className="ml-4 space-y-2">
                  <div>
                    <span className="text-white">1. Core Package</span>
                    <span className="text-neutral-500"> (packages/excalidraw)</span>
                  </div>
                  <div>
                    <span className="text-white">2. Web Application</span>
                    <span className="text-neutral-500"> (excalidraw-app/)</span>
                  </div>
                  <div>
                    <span className="text-white">3. Support Packages</span>
                    <span className="text-neutral-500"> - common, element, math, utils</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2">## Technology Stack</h4>
                <ul className="text-neutral-400 space-y-1 ml-4">
                  <li>• React for UI</li>
                  <li>• TypeScript for type safety</li>
                  <li>• Firebase for collaboration backend</li>
                  <li>• Jotai for state management</li>
                  <li>• Vite for development and building</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    icon: GitBranch,
    title: "Code onboarding",
    description: "Hanzo Dev maps and explains entire codebases in seconds. It uses agentic search to understand project structure and dependencies without you having to manually select context files.",
  },
  {
    icon: GitPullRequest,
    title: "Turn issues into PRs",
    description: "Stop bouncing between tools. Hanzo Dev integrates with GitHub, GitLab, and your command line tools to handle the entire workflow—reading issues, writing code, running tests, and submitting PRs—all from your terminal.",
  },
  {
    icon: Zap,
    title: "Make powerful edits",
    description: "Hanzo Dev's understanding of your codebase and dependencies enables it to make powerful, multi-file edits that work.",
  },
];

const CodeOnboardingSection = () => {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <CodebaseDemo />
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-white/30 transition-colors"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${BRAND_COLOR}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: BRAND_COLOR }} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CodeOnboardingSection;
