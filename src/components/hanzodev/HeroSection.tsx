import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Terminal, Code2, MessageSquare, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const BRAND_COLOR = "#fd4444";

const BUILT_FOR = [
  "developers",
  "startups",
  "enterprises",
  "open source",
  "teams",
  "you",
];

const PLATFORMS = [
  { id: "terminal", label: "Terminal", icon: Terminal },
  { id: "ide", label: "IDE", icon: Code2 },
  { id: "slack", label: "Slack", icon: MessageSquare },
  { id: "web", label: "Web", icon: Globe },
];

const TerminalDemo = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const lines = [
    { type: "prompt", text: "> Think harder..." },
    { type: "output", text: "" },
    { type: "status", text: "✳ Casting..." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-neutral-950 rounded-xl border border-neutral-800 overflow-hidden shadow-2xl">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-900/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs text-neutral-500 ml-2 font-mono">hanzo dev</span>
      </div>

      {/* Terminal content */}
      <div className="p-6 font-mono text-sm min-h-[200px]">
        <div className="flex items-center justify-center mb-6">
          <div className="text-center">
            <div className="text-neutral-600 text-xs mb-2">╭───────────────────────────╮</div>
            <div className="text-neutral-600 text-xs">│</div>
            <div className="flex items-center justify-center gap-2 my-1">
              <span className="text-[#fd4444]">✶</span>
              <span className="text-white">Welcome to Hanzo Dev</span>
            </div>
            <div className="text-neutral-600 text-xs">│</div>
            <div className="text-neutral-600 text-xs">╰───────────────────────────╯</div>
          </div>
        </div>

        <motion.div
          key={currentLine}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-400"
        >
          <span className="text-neutral-500">&gt;</span>{" "}
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            className="inline-block overflow-hidden"
          >
            Think harder...
          </motion.span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-green-400 ml-1"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: currentLine >= 2 ? 1 : 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 flex items-center gap-2"
        >
          <span className="text-[#fd4444]">✳</span>
          <span className="text-neutral-400">Casting...</span>
        </motion.div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [builtForIndex, setBuiltForIndex] = useState(0);
  const [activePlatform, setActivePlatform] = useState("terminal");

  useEffect(() => {
    const interval = setInterval(() => {
      setBuiltForIndex((prev) => (prev + 1) % BUILT_FOR.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-[#fd4444]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50">
            <Sparkles className="w-4 h-4" style={{ color: BRAND_COLOR }} />
            <span className="text-sm text-neutral-400">Product / Hanzo Dev</span>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <span className="text-white">Hanzo Dev: </span>
            <span style={{ color: BRAND_COLOR }}>AI-powered coding assistant</span>
            <br />
            <span className="text-white">for developers</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-400 mb-4"
          >
            Built for{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={builtForIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="inline-block font-medium"
                style={{ color: BRAND_COLOR }}
              >
                {BUILT_FOR[builtForIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-neutral-400 mb-8 max-w-3xl mx-auto"
          >
            Work with Hanzo directly in your codebase. Build, debug, and ship from your terminal, IDE, Slack, or the web. Describe what you need, and Hanzo handles the rest.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="text-white text-lg px-8"
              style={{ backgroundColor: BRAND_COLOR }}
              asChild
            >
              <Link to="/signup">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-neutral-700 hover:bg-neutral-900 text-lg px-8"
              asChild
            >
              <a href="https://docs.hanzo.ai/dev" target="_blank" rel="noopener noreferrer">
                Read the documentation
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Platform tabs and demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Use Hanzo Dev where you work</h2>

            {/* Platform selector */}
            <div className="flex justify-center gap-2 mb-8">
              {PLATFORMS.map((platform) => {
                const Icon = platform.icon;
                return (
                  <button
                    key={platform.id}
                    onClick={() => setActivePlatform(platform.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      activePlatform === platform.id
                        ? "bg-white/10 text-white border border-white/20"
                        : "text-neutral-500 hover:text-neutral-300 border border-transparent"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{platform.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Terminal demo */}
          <TerminalDemo />

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-center"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Terminal</h3>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Work with Hanzo directly in your terminal. Hanzo explores your codebase context,
              answers questions, and makes changes. It can even use all your CLI tools.
            </p>
            <a
              href="https://docs.hanzo.ai/dev/cli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-4 text-sm hover:underline"
              style={{ color: BRAND_COLOR }}
            >
              Read the documentation
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
