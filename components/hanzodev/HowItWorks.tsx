'use client'

import React from "react";
import { motion } from "framer-motion";
import {
  GitPullRequest,
  Sliders,
  Users,
  Monitor,
  FileText,
  TestTube,
  Rocket,
  ShieldCheck,
  Terminal,
  Laptop,
} from "lucide-react";

const BRAND_COLOR = "#ffffff";

const AUTONOMY_LEVELS = [
  {
    level: "Plan-only",
    description: "proposal + file list + diff preview",
  },
  {
    level: "Implement",
    description: "coherent multi-file edits with repo context",
  },
  {
    level: "Implement + test",
    description: "suites run automatically; logs attached",
  },
  {
    level: "Implement + PR",
    description: "ready PR with linked evidence",
  },
  {
    level: "Implement + deploy (gated)",
    description: "approvals + policy checks + audit",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-black to-neutral-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            From task to production-ready pull request, with evidence at every step.
          </p>
        </motion.div>

        {/* Step 1: Give it a task */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
                style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
              >
                <GitPullRequest className="w-3.5 h-3.5" />
                Step 1
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Give it a task. Get back a PR.
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Hanzo Dev reads your repository structure, produces a coherent plan, edits multiple files,
                runs suites, benchmarks impact and generates a reviewable pull request—complete with diff
                and test evidence. Long-running work happens in isolated sandboxes.
              </p>
            </div>
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-neutral-500 font-mono">hanzo dev</span>
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div className="text-neutral-500">$ hanzo dev "Add rate limiting to API"</div>
                <div className="text-neutral-400">Reading repository structure...</div>
                <div className="text-neutral-400">Creating implementation plan...</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-green-400">Modified 4 files</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-green-400">Tests: 23/23 passing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-green-400">PR #127 created with evidence</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Step 2: Autonomy levels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:order-2">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
                style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
              >
                <Sliders className="w-3.5 h-3.5" />
                Step 2
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Autonomy you can dial. Evidence you can trust.
              </h3>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Choose exactly how much autonomy to grant. Every level produces
                artifacts you can inspect, approve, or roll back.
              </p>
              <p className="text-sm text-neutral-500 italic">
                "Agents don't get admin; they get policies."
              </p>
            </div>
            <div className="lg:order-1 bg-neutral-900/80 border border-neutral-800 rounded-xl p-6">
              <div className="space-y-4">
                {AUTONOMY_LEVELS.map((item, index) => (
                  <div
                    key={item.level}
                    className="flex items-start gap-4 p-3 rounded-lg bg-neutral-950/50 border border-neutral-800"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm font-mono"
                      style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium text-white text-sm">{item.level}</div>
                      <div className="text-xs text-neutral-500">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Step 3: Parallel agents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
                style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
              >
                <Users className="w-3.5 h-3.5" />
                Step 3
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Parallel agents. One best result.
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Dispatch the same task to several agents at once. Hanzo Dev ranks outputs by diff quality
                and test results, so you ship the strongest patch—not the first attempt.
              </p>
            </div>
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6">
              <div className="grid grid-cols-2 gap-4">
                {["Hanzo", "Claude Code", "Codex", "Gemini"].map((agent, i) => (
                  <div
                    key={agent}
                    className={`p-4 rounded-lg border ${
                      i === 0
                        ? "border-[#ffffff]/50 bg-[#ffffff]/10"
                        : "border-neutral-800 bg-neutral-950/50"
                    }`}
                  >
                    <div className="text-sm font-medium text-white mb-2">{agent}</div>
                    <div className="space-y-1 text-xs text-neutral-500">
                      <div>Diff: {i === 0 ? "+42/-18" : i === 1 ? "+67/-31" : i === 2 ? "+89/-45" : "+55/-22"}</div>
                      <div>Tests: {i === 0 ? "23/23" : i === 1 ? "21/23" : i === 2 ? "19/23" : "22/23"}</div>
                    </div>
                    {i === 0 && (
                      <div
                        className="mt-2 text-xs font-medium px-2 py-1 rounded-full inline-block"
                        style={{ backgroundColor: BRAND_COLOR, color: "#fff" }}
                      >
                        Best result
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Step 4: Works where you work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
                style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
              >
                <Monitor className="w-3.5 h-3.5" />
                Step 4
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Works where you work.
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                IDE extensions for VS Code and JetBrains, a CLI for terminals and CI/CD pipelines,
                and remote sandboxes for heavy builds. Everything stays reviewable and reproducible.
              </p>
            </div>
            <div className="lg:order-1 flex flex-wrap gap-4">
              {[
                { icon: Laptop, label: "VS Code" },
                { icon: Laptop, label: "JetBrains" },
                { icon: Terminal, label: "CLI" },
                { icon: Monitor, label: "Remote Sandbox" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-neutral-900/80 border border-neutral-800"
                  >
                    <Icon className="w-5 h-5 text-neutral-400" />
                    <span className="text-sm text-white">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
