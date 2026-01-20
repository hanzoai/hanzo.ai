import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Terminal,
  Copy,
  Check,
  ArrowRight,
  MonitorUp,
  Cloud,
  Zap,
  Lock,
  Users,
  Shield,
  ExternalLink,
} from "lucide-react";

const DeveloperExperienceSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyInstall = () => {
    navigator.clipboard.writeText("curl -sSL https://hanzo.sh | sh");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-black">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* IDE Agents Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <p
              className="inline-flex text-xs font-medium rounded-full px-4 py-2 border mb-6"
              style={{ color: "#fd4444", borderColor: "rgba(253, 68, 68, 0.3)" }}
            >
              IDE Agents
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
              Inside VS Code, JetBrains, and your terminal
            </h2>
            <p className="text-lg text-neutral-400 mb-8">
              The agent reads your project structure before making changes, edits multiple files cohesively, and executes tasks step-by-step.
            </p>
            <Link
              to="/extensions"
              className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-colors bg-[#fd4444] text-white hover:opacity-90"
            >
              Install the IDE extension
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* IDE Preview */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/80 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-950">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="ml-2 text-xs text-neutral-500">VS Code - Hanzo Extension</span>
            </div>
            <div className="p-4 space-y-3 bg-neutral-950">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800">
                <MonitorUp className="w-4 h-4 text-[#fd4444]" />
                <span className="text-sm text-neutral-300">Analyzing project structure...</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm text-neutral-300">Edited 4 files cohesively</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/30">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm text-green-400">All tests passing</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CLI Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Terminal Preview */}
          <div className="order-2 lg:order-1 rounded-xl border border-neutral-800 bg-neutral-900/80 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-950">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="ml-2 text-xs text-neutral-500 font-mono">terminal</span>
              <button
                onClick={handleCopyInstall}
                className="ml-auto p-1 rounded hover:bg-neutral-800 transition-colors"
              >
                {copied ? (
                  <Check className="h-3 w-3 text-green-500" />
                ) : (
                  <Copy className="h-3 w-3 text-neutral-500" />
                )}
              </button>
            </div>
            <div className="p-4 font-mono text-sm bg-neutral-950">
              <div className="text-neutral-500 mb-2">$ curl -sSL https://hanzo.sh | sh</div>
              <div className="text-neutral-500 mb-2">$ hanzo login</div>
              <div className="text-neutral-300 mb-2">$ hanzo dev "Improve the rate limiter. Add metrics. Add tests. Open a PR."</div>
              <div className="text-green-400 mb-1">✓ Plan created</div>
              <div className="text-green-400 mb-1">✓ Implementation complete</div>
              <div className="text-green-400 mb-1">✓ Tests passing (12/12)</div>
              <div className="text-[#fd4444]">✓ PR opened: #247</div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p
              className="inline-flex text-xs font-medium rounded-full px-4 py-2 border mb-6"
              style={{ color: "#fd4444", borderColor: "rgba(253, 68, 68, 0.3)" }}
            >
              Hanzo CLI
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
              AI-powered development from the terminal
            </h2>
            <ul className="space-y-3 text-neutral-400 mb-8">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#fd4444]" />
                Generate APIs, scripts, and components
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#fd4444]" />
                Debug + fix with context
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#fd4444]" />
                Produce tests and CI scaffolding
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#fd4444]" />
                No framework lock-in
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Remote Agents Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <p
              className="inline-flex text-xs font-medium rounded-full px-4 py-2 border mb-6"
              style={{ color: "#fd4444", borderColor: "rgba(253, 68, 68, 0.3)" }}
            >
              Remote Agents
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
              Secure remote execution for teams
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { icon: Zap, title: "Parallel runs", desc: "Execute across repos simultaneously" },
              { icon: Users, title: "Shared workspaces", desc: "Collaborate via shared environments" },
              { icon: Shield, title: "Quality gates", desc: "Enforce policy before PR/merge" },
              { icon: Lock, title: "Isolation", desc: "Safe installs and builds" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-5 h-5 text-neutral-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-neutral-500">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/remote"
              className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-colors border border-neutral-700 hover:bg-neutral-900 text-white"
            >
              Enable Remote Agents
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        {/* Hanzo AI API Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-[#fd4444]/30 bg-gradient-to-br from-[#fd4444]/10 to-transparent p-8 md:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p
                className="inline-flex text-xs font-medium rounded-full px-4 py-2 border mb-6"
                style={{ color: "#fd4444", borderColor: "rgba(253, 68, 68, 0.3)" }}
              >
                Hanzo AI API
              </p>
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
                One API for the best models
              </h2>
              <p className="text-lg text-neutral-400 mb-6">
                Use leading models through a single endpoint with streaming + tool calling. Works with existing OpenAI SDKs by changing the base URL.
              </p>
              <a
                href="https://docs.hanzo.ai/api"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-colors bg-white text-black hover:bg-neutral-200"
              >
                View API reference
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-neutral-300">
{`import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.hanzo.ai/v1",
  apiKey: process.env.HANZO_API_KEY,
});

const response = await client.chat.completions.create({
  model: "claude-3-opus",
  messages: [{ role: "user", content: "Hello!" }],
});`}
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeveloperExperienceSection;
