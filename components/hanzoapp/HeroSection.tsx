'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Globe,
  Monitor,
  Cpu,
  Shield,
  Check,
  Copy,
  ExternalLink,
  Apple,
  Chrome,
} from "lucide-react";

const BRAND_COLOR = "#ffffff";

const PLATFORMS = [
  { id: "web", label: "Web App", icon: Globe, description: "Build in browser" },
  { id: "desktop", label: "Desktop", icon: Monitor, description: "macOS, Windows, Linux" },
  { id: "local", label: "Local AI", icon: Cpu, description: "Private & offline" },
  { id: "node", label: "Node", icon: Shield, description: "Blockchain powered" },
];

const AppDemo = ({ activeTab }: { activeTab: string }) => {
  const demos: Record<string, { title: string; content: React.ReactNode }> = {
    web: {
      title: "hanzo.app",
      content: (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-green-500" />
            <span className="text-green-400">Workspace synced</span>
          </div>
          <div className="bg-neutral-900/50 rounded-lg p-3">
            <div className="text-xs text-neutral-500 mb-2">Active Projects</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white">signal-server</span>
                <span className="text-neutral-400">12 files changed</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white">payments-api</span>
                <span className="text-neutral-400">3 PRs pending</span>
              </div>
            </div>
          </div>
          <div className="text-xs text-neutral-500">Collaborative editing • Real-time sync • Cloud storage</div>
        </div>
      ),
    },
    desktop: {
      title: "Hanzo Desktop",
      content: (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Monitor className="w-4 h-4 text-[#ffffff]" />
            <span className="text-[#ffffff]">Native performance</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-neutral-900/50 rounded-lg p-2 text-center">
              <Apple className="w-5 h-5 mx-auto mb-1 text-neutral-400" />
              <span className="text-xs text-neutral-500">macOS</span>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-2 text-center">
              <Monitor className="w-5 h-5 mx-auto mb-1 text-neutral-400" />
              <span className="text-xs text-neutral-500">Windows</span>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-2 text-center">
              <Chrome className="w-5 h-5 mx-auto mb-1 text-neutral-400" />
              <span className="text-xs text-neutral-500">Linux</span>
            </div>
          </div>
          <div className="text-xs text-neutral-500">Offline capable • System integrations • Native UI</div>
        </div>
      ),
    },
    local: {
      title: "Local AI Mode",
      content: (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Cpu className="w-4 h-4 text-[#ff6b6b]" />
            <span className="text-[#ff6b6b]">Running locally</span>
          </div>
          <div className="bg-neutral-900/50 rounded-lg p-3 font-mono text-xs">
            <div className="text-neutral-500">$ hanzo local start</div>
            <div className="text-green-400 mt-1">✓ Qwen3-32B loaded (16GB VRAM)</div>
            <div className="text-green-400">✓ MCP tools connected</div>
            <div className="text-green-400">✓ Ready on localhost:8080</div>
          </div>
          <div className="text-xs text-neutral-500">Zero data leaves your machine • Full privacy • GPU accelerated</div>
        </div>
      ),
    },
    node: {
      title: "Hanzo Node",
      content: (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Shield className="w-4 h-4" style={{ color: BRAND_COLOR }} />
            <span style={{ color: BRAND_COLOR }}>Node active</span>
          </div>
          <div className="bg-neutral-900/50 rounded-lg p-3 font-mono text-xs">
            <div className="flex justify-between">
              <span className="text-neutral-500">Staked:</span>
              <span className="text-white">50,000 LUX</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">Earnings:</span>
              <span className="text-green-400">+127.4 LUX/day</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">Uptime:</span>
              <span className="text-white">99.97%</span>
            </div>
          </div>
          <div className="text-xs text-neutral-500">Earn rewards • Decentralized compute • Proof of AI</div>
        </div>
      ),
    },
  };

  const demo = demos[activeTab];

  return (
    <div className="rounded-xl border border-neutral-700 bg-neutral-900/95 backdrop-blur-sm overflow-hidden shadow-2xl h-[320px] flex flex-col">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-950 shrink-0">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <AnimatePresence mode="wait">
          <motion.span
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-xs text-neutral-500 font-mono ml-2"
          >
            {demo.title}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="flex-1 p-4 bg-neutral-950 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {demo.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("web");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("curl -fsSL hanzo.sh | sh");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden">
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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
            >
              <span className="text-white">Build anywhere.</span>
              <br />
              <span className="text-neutral-400">Ship everywhere.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-base lg:text-lg text-neutral-400 leading-relaxed mb-8 max-w-xl"
            >
              Hanzo App works in your browser, as a native desktop app, with private local AI, or connected to the decentralized network. Your choice.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-wrap items-center gap-4 mb-6"
            >
              <a
                href="https://hanzo.app"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm"
                style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
              >
                Open in browser
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <Link
                href="/download"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"
              >
                <Download className="mr-2 h-4 w-4" />
                Download app
              </Link>
            </motion.div>

            {/* Install command */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800">
                <code className="text-sm font-mono text-neutral-300">
                  curl -fsSL hanzo.sh | sh
                </code>
                <button
                  onClick={handleCopy}
                  className="text-neutral-500 hover:text-white transition-colors"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
                </button>
                <a
                  href="https://docs.hanzo.ai"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-neutral-500 hover:text-white transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Platform tabs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {PLATFORMS.map((platform) => {
                const Icon = platform.icon;
                const isActive = activeTab === platform.id;
                return (
                  <button
                    key={platform.id}
                    onClick={() => setActiveTab(platform.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      isActive
                        ? "bg-[#ffffff] text-white"
                        : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {platform.label}
                  </button>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Demo */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            <AppDemo activeTab={activeTab} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
