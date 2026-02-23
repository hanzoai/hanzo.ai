import React, { useEffect } from 'react';
import { Terminal, Package, Bot, Cpu, Code, ArrowRight, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const BRAND_COLOR = "#fd4444";

const bundles = [
  {
    name: "minimal",
    desc: "Python CLI only",
    cmd: "curl -fsSL hanzo.sh | bash",
  },
  {
    name: "python",
    desc: "CLI, MCP, Agents, AI SDK",
    cmd: "curl -fsSL hanzo.sh/python | bash",
  },
  {
    name: "rust",
    desc: "Node, Dev, MCP (Rust)",
    cmd: "curl -fsSL hanzo.sh/rust | bash",
  },
  {
    name: "full",
    desc: "Everything: Python + Rust",
    cmd: "curl -fsSL hanzo.sh/full | bash",
  },
];

const shortcuts = [
  { path: "/dev", name: "hanzo-dev", desc: "AI coding agent", icon: Bot },
  { path: "/mcp", name: "hanzo-mcp", desc: "MCP server (260+ tools)", icon: Cpu },
  { path: "/cli", name: "hanzo", desc: "Cloud CLI", icon: Terminal },
  { path: "/agents", name: "hanzo-agents", desc: "Multi-agent SDK", icon: Code },
];

const Install = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Navbar />

      <main className="pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
              style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
            >
              <Terminal className="w-3.5 h-3.5" />
              One Command Install
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Install Hanzo</span>
            </h1>

            <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
              The complete Hanzo AI toolkit in one command. CLI, MCP, Agents, Dev tools — in Python, Rust, or JavaScript.
            </p>

            {/* Main install command */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Terminal className="h-6 w-6 text-[#fd4444]" />
                <code className="text-xl font-mono text-white">curl -fsSL hanzo.sh | bash</code>
              </div>
              <p className="text-sm text-neutral-500">
                Or visit <a href="https://hanzo.sh" className="text-[#fd4444] hover:underline">hanzo.sh</a> for more options
              </p>
            </div>

            <a
              href="https://hanzo.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-all hover:opacity-90 text-base"
              style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
            >
              Visit hanzo.sh
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </motion.div>

          {/* Shortcuts */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-center">Quick Install Shortcuts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {shortcuts.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.path}
                    href={`https://hanzo.sh${s.path}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-5 hover:border-[#fd4444]/50 transition-colors flex items-start gap-4"
                  >
                    <div className="p-2 rounded-lg bg-[#fd4444]/10">
                      <Icon className="h-5 w-5 text-[#fd4444]" />
                    </div>
                    <div>
                      <div className="font-mono text-white">{s.name}</div>
                      <div className="text-sm text-neutral-500 mb-2">{s.desc}</div>
                      <code className="text-xs text-neutral-600">curl hanzo.sh{s.path} | bash</code>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.section>

          {/* Bundles */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-center">Installation Bundles</h2>
            <div className="space-y-3">
              {bundles.map((b) => (
                <div
                  key={b.name}
                  className="bg-neutral-900/30 border border-neutral-800 rounded-lg p-4 flex items-center justify-between"
                >
                  <div>
                    <span className="font-mono text-[#fd4444]">--bundle {b.name}</span>
                    <span className="text-neutral-500 ml-3">{b.desc}</span>
                  </div>
                  <code className="text-xs text-neutral-600 hidden md:block">{b.cmd}</code>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Package managers */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-center">Or Use Your Package Manager</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-neutral-900/30 border border-neutral-800 rounded-lg p-4">
                <div className="text-sm text-neutral-500 mb-2">Python (uv/pip)</div>
                <code className="text-sm text-neutral-300">uv tool install hanzo</code>
              </div>
              <div className="bg-neutral-900/30 border border-neutral-800 rounded-lg p-4">
                <div className="text-sm text-neutral-500 mb-2">Node.js (npm/pnpm)</div>
                <code className="text-sm text-neutral-300">npm i -g @hanzoai/cli</code>
              </div>
              <div className="bg-neutral-900/30 border border-neutral-800 rounded-lg p-4">
                <div className="text-sm text-neutral-500 mb-2">Homebrew</div>
                <code className="text-sm text-neutral-300">brew install hanzoai/tap/hanzo</code>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Install;
