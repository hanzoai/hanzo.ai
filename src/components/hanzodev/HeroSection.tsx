import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  ExternalLink,
  Terminal,
  Monitor,
  MessageSquare,
  Code2,
  Send,
  Check,
  Copy,
} from "lucide-react";

const BRAND_COLOR = "#fd4444";

// Integration tabs
const INTEGRATIONS = [
  { id: "ide", label: "VS Code", icon: Code2 },
  { id: "terminal", label: "Terminal", icon: Terminal },
  { id: "browser", label: "Browser", icon: Monitor },
  { id: "slack", label: "Slack", icon: MessageSquare },
];

// Demo conversation for each integration
const DEMOS: Record<string, {
  title: string;
  subtitle: string;
  messages: Array<{ role: string; content: string; type?: string }>;
}> = {
  ide: {
    title: "VS Code",
    subtitle: "Hanzo Extension",
    messages: [
      { role: "user", content: "Add rate limiting to the API endpoints" },
      { role: "assistant", content: "I'll add rate limiting using a token bucket algorithm. Updating the middleware..." },
      { role: "status", content: "Modified 3 files", type: "success" },
      { role: "status", content: "All tests passing", type: "success" },
    ],
  },
  terminal: {
    title: "terminal",
    subtitle: "hanzo dev",
    messages: [
      { role: "command", content: "hanzo dev \"Fix the auth bug and add tests\"" },
      { role: "assistant", content: "Found the issue in auth/session.ts. The token expiry check was incorrect." },
      { role: "status", content: "Fixed auth/session.ts", type: "success" },
      { role: "status", content: "Added 4 test cases", type: "success" },
      { role: "status", content: "PR #247 opened", type: "success" },
    ],
  },
  browser: {
    title: "hanzo.app",
    subtitle: "Remote Agent",
    messages: [
      { role: "user", content: "Deploy staging and run E2E tests" },
      { role: "assistant", content: "Starting deployment to staging environment..." },
      { role: "status", content: "Build completed", type: "success" },
      { role: "status", content: "Deployed to staging.example.com", type: "success" },
      { role: "status", content: "E2E tests: 47/47 passed", type: "success" },
    ],
  },
  slack: {
    title: "Slack",
    subtitle: "#engineering",
    messages: [
      { role: "user", content: "@hanzo summarize this week's PRs" },
      { role: "assistant", content: "12 PRs merged this week:\n• Payment integration\n• 2x perf improvements\n• Auth bug fixes" },
      { role: "status", content: "Full report in thread", type: "info" },
    ],
  },
};

// Message component with smooth slide-in
const Message = ({ message, index }: { message: { role: string; content: string; type?: string }; index: number }) => {
  const baseDelay = 0.1 + index * 0.12;

  if (message.role === "command") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: baseDelay, duration: 0.25, ease: "easeOut" }}
        className="font-mono text-sm"
      >
        <span className="text-neutral-500">$ </span>
        <span className="text-green-400">{message.content}</span>
      </motion.div>
    );
  }

  if (message.role === "status") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: baseDelay, duration: 0.25, ease: "easeOut" }}
        className="flex items-center gap-2 text-sm"
      >
        <Check className={`w-4 h-4 ${message.type === "success" ? "text-green-500" : "text-blue-400"}`} />
        <span className={message.type === "success" ? "text-green-400" : "text-blue-400"}>
          {message.content}
        </span>
      </motion.div>
    );
  }

  if (message.role === "user") {
    return (
      <motion.div
        initial={{ opacity: 0, x: 8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: baseDelay, duration: 0.25, ease: "easeOut" }}
        className="flex justify-end"
      >
        <div className="bg-[#fd4444] text-white rounded-xl rounded-br-sm px-3 py-2 text-sm max-w-[85%]">
          {message.content}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: baseDelay, duration: 0.25, ease: "easeOut" }}
      className="flex justify-start"
    >
      <div className="bg-neutral-800 text-neutral-200 rounded-xl rounded-bl-sm px-3 py-2 text-sm max-w-[85%] whitespace-pre-wrap">
        {message.content}
      </div>
    </motion.div>
  );
};

// Demo Panel with fixed container, only content animates
const DemoPanel = ({ activeTab }: { activeTab: string }) => {
  const demo = DEMOS[activeTab];

  return (
    <div className="rounded-xl border border-neutral-700 bg-neutral-900/95 backdrop-blur-sm overflow-hidden shadow-2xl h-[360px] flex flex-col">
      {/* Header - stays fixed */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-950 shrink-0">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex items-center ml-2"
          >
            <span className="text-xs text-neutral-500 font-mono">{demo.title}</span>
            <span className="text-xs text-neutral-600 ml-1">— {demo.subtitle}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Messages container - fixed height, content scrolls */}
      <div className="flex-1 p-4 overflow-y-auto bg-neutral-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="space-y-3"
          >
            {demo.messages.map((message, idx) => (
              <Message key={`${activeTab}-${idx}`} message={message} index={idx} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Input - stays fixed */}
      <div className="p-3 border-t border-neutral-800 bg-neutral-900/50 shrink-0">
        <div className="flex items-center gap-2 bg-neutral-800 rounded-lg px-3 py-2">
          <input
            type="text"
            placeholder="Ask Hanzo..."
            className="flex-1 bg-transparent text-sm text-neutral-300 placeholder:text-neutral-600 outline-none"
            disabled
          />
          <Send className="w-4 h-4 text-neutral-600" />
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("ide");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("curl -fsSL hanzo.sh | sh");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Background gradient - static, no animation */}
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
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column: Copy */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
            >
              <span className="text-white">AI coding agent.</span>
              <br />
              <span className="text-neutral-400">Everywhere you work.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-base lg:text-lg text-neutral-400 leading-relaxed mb-8 max-w-xl"
            >
              Hanzo Dev writes code, fixes bugs, runs tests, and opens PRs. Works in your IDE, terminal, browser, or Slack.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-wrap items-center gap-4 mb-6"
            >
              <Link
                to="/get-started"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm"
                style={{ backgroundColor: BRAND_COLOR, color: '#ffffff' }}
              >
                Get started free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="https://www.youtube.com/hanzoai"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch demo
              </a>
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

            {/* Integration tabs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {INTEGRATIONS.map((integration) => {
                const Icon = integration.icon;
                const isActive = activeTab === integration.id;
                return (
                  <button
                    key={integration.id}
                    onClick={() => setActiveTab(integration.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      isActive
                        ? "bg-[#fd4444] text-white"
                        : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {integration.label}
                  </button>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Demo Panel - container fixed, only content animates */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            <DemoPanel activeTab={activeTab} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
