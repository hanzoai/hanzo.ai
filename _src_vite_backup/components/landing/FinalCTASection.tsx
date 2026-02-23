import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Terminal,
  Monitor,
  Globe,
  Code2,
  Copy,
  Check,
  Sparkles,
  Chrome,
  Apple,
} from "lucide-react";

const BRAND_COLOR = "#fd4444";

// Entry points for trying Hanzo
const entryPoints = [
  {
    id: "terminal",
    icon: Terminal,
    title: "Terminal",
    description: "AI coding agent in your terminal",
    primary: true,
    action: {
      type: "copy",
      command: "curl -fsSL hanzo.sh | bash",
      label: "Copy install command",
    },
  },
  {
    id: "desktop",
    icon: Monitor,
    title: "Desktop App",
    description: "Native app for Mac, Windows & Linux",
    action: {
      type: "link",
      href: "/download",
      label: "Download",
    },
  },
  {
    id: "vscode",
    icon: Code2,
    title: "VS Code",
    description: "Extension for Visual Studio Code",
    action: {
      type: "external",
      href: "https://marketplace.visualstudio.com/items?itemName=hanzo.hanzo-dev",
      label: "Install",
    },
  },
  {
    id: "browser",
    icon: Globe,
    title: "Browser",
    description: "Chrome, Firefox, Safari extensions",
    action: {
      type: "link",
      href: "/extension",
      label: "Get Extension",
    },
  },
];

const FinalCTASection = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 60%)`,
            filter: "blur(120px)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 mb-6"
          >
            <Sparkles className="w-4 h-4" style={{ color: BRAND_COLOR }} />
            <span className="text-sm text-neutral-300">Start free. Scale forever.</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4">
            Ready to build?
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
            Pick your favorite way to start. Terminal, desktop, browser, or IDE—Hanzo works wherever you do.
          </p>
        </motion.div>

        {/* Entry Points Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {entryPoints.map((entry, index) => {
            const Icon = entry.icon;
            const isCopied = copiedId === entry.id;

            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className={`relative p-5 rounded-xl border transition-all group ${
                  entry.primary
                    ? "border-[#fd4444]/50 bg-[#fd4444]/5 hover:bg-[#fd4444]/10"
                    : "border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 hover:border-neutral-700"
                }`}
              >
                {entry.primary && (
                  <div className="absolute -top-2.5 left-4 px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#fd4444] text-white">
                    RECOMMENDED
                  </div>
                )}

                <div className="flex items-start gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      entry.primary ? "bg-[#fd4444]/20" : "bg-neutral-800"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        entry.primary ? "text-[#fd4444]" : "text-neutral-400"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{entry.title}</h3>
                    <p className="text-xs text-neutral-500">{entry.description}</p>
                  </div>
                </div>

                {entry.action.type === "copy" ? (
                  <button
                    onClick={() => handleCopy(entry.id, entry.action.command!)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-mono transition-colors ${
                      entry.primary
                        ? "bg-[#fd4444]/10 hover:bg-[#fd4444]/20 text-white"
                        : "bg-neutral-800 hover:bg-neutral-700 text-neutral-300"
                    }`}
                  >
                    <span className="truncate text-xs">{entry.action.command}</span>
                    {isCopied ? (
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 ml-2" />
                    ) : (
                      <Copy className="w-4 h-4 text-neutral-500 flex-shrink-0 ml-2" />
                    )}
                  </button>
                ) : entry.action.type === "external" ? (
                  <a
                    href={entry.action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-sm text-white transition-colors"
                  >
                    {entry.action.label}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <Link
                    to={entry.action.href!}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-sm text-white transition-colors"
                  >
                    {entry.action.label}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Terminal Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/80 overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-950">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-neutral-500 font-mono ml-2">terminal</span>
            </div>
            {/* Terminal content */}
            <div className="p-4 font-mono text-sm">
              <div className="text-neutral-400">
                <span className="text-green-500">$</span> curl -fsSL hanzo.sh | bash
              </div>
              <div className="text-neutral-500 mt-1">✓ Installed hanzo CLI, MCP, and agents</div>
              <div className="text-neutral-400 mt-3">
                <span className="text-green-500">$</span> dev
              </div>
              <div className="text-neutral-500 mt-1">
                <span className="text-[#fd4444]">◆</span> Hanzo Dev v2.1.0
              </div>
              <div className="text-neutral-500">
                <span className="text-neutral-600">│</span>
              </div>
              <div className="text-neutral-500">
                <span className="text-neutral-600">│</span> What would you like to build?
              </div>
              <div className="text-neutral-400 mt-2 flex items-center">
                <span className="text-green-500">$</span>
                <span className="ml-1 text-white">"Add user auth with OAuth2 and session management"</span>
                <span className="w-2 h-4 bg-white/80 animate-pulse ml-1" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-neutral-500 text-sm mb-6">
            Or explore everything we offer
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium text-white transition-all hover:opacity-90"
              style={{ backgroundColor: BRAND_COLOR }}
            >
              View all products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium text-white border border-neutral-700 hover:bg-neutral-900 hover:border-neutral-600 transition-all"
            >
              Talk to us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
