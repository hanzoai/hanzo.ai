import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Zap,
  Users,
  Clock,
  Eye,
  ArrowRight,
  GitBranch,
  TestTube,
  FileCode,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Multi-Agent Execution",
    description: "Send the same task to multiple agents at once.",
  },
  {
    icon: Users,
    title: "Consensus (Chairman LLM)",
    description: "Compare implementations, test results, and diffs; pick the best.",
  },
  {
    icon: Clock,
    title: "Long-running sandboxes",
    description: "Agents can install deps, run suites, refactor, and iterate.",
  },
  {
    icon: Eye,
    title: "Team visibility",
    description: "Monitor all runs, decisions, and outputs in one view.",
  },
];

const codebaseFeatures = [
  {
    icon: FileCode,
    title: "Large codebase context",
    description: "Optimized for monorepos and production systems.",
  },
  {
    icon: GitBranch,
    title: "Controllable autonomy",
    description: "Choose Plan-only → Implement → Implement+Test+PR.",
  },
  {
    icon: TestTube,
    title: "Plan → Execute → Test",
    description: "Structured work you can review and trust.",
  },
  {
    icon: Globe,
    title: "Browser agent",
    description: "Interactive validation for flows that need real UI or web checks.",
  },
];

const PlatformOverviewSection = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Multi-Agent Remote Execution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <p
            className="inline-flex text-xs font-medium rounded-full px-4 py-2 border mb-6"
            style={{ color: "#fd4444", borderColor: "rgba(253, 68, 68, 0.3)" }}
          >
            Multi-Agent Remote Execution
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
            Ship with parallel execution + consensus
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mb-12">
            Let multiple agents tackle your task simultaneously, then select the winner.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {features.map((feature, index) => {
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
                  <div className="w-10 h-10 rounded-lg bg-[#fd4444]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#fd4444]" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-neutral-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

          <Link
            to="/dev"
            className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-colors border border-neutral-700 hover:bg-neutral-900 text-white"
          >
            Run your first task
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>

        {/* Built for real codebases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="inline-flex text-xs font-medium rounded-full px-4 py-2 border mb-6"
            style={{ color: "#fd4444", borderColor: "rgba(253, 68, 68, 0.3)" }}
          >
            Built for real codebases
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
            Agents that understand your repo
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mb-12">
            Production-grade agents for production-grade code.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {codebaseFeatures.map((feature, index) => {
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
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-neutral-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-neutral-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformOverviewSection;
