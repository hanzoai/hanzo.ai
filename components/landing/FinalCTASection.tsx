'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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
    <section className="py-24 px-4 md:px-8 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: `radial-gradient(circle, var(--primary) 0%, transparent 60%)`,
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm text-foreground/80">Start free. Scale forever.</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-4">
            Ready to build?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
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
                    ? "border-white/50 bg-primary/5 hover:bg-primary/10"
                    : "border-border bg-secondary/50 hover:bg-secondary hover:border-border"
                }`}
              >
                {entry.primary && (
                  <div className="absolute -top-2.5 left-4 px-2 py-0.5 rounded-full text-[10px] font-medium bg-primary text-primary-foreground">
                    RECOMMENDED
                  </div>
                )}

                <div className="flex items-start gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      entry.primary ? "bg-primary/20" : "bg-neutral-800"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        entry.primary ? "text-foreground" : "text-muted-foreground"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{entry.title}</h3>
                    <p className="text-xs text-muted-foreground">{entry.description}</p>
                  </div>
                </div>

                {entry.action.type === "copy" ? (
                  <button
                    onClick={() => handleCopy(entry.id, entry.action.command!)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-mono transition-colors ${
                      entry.primary
                        ? "bg-primary/10 hover:bg-primary/20 text-foreground"
                        : "bg-neutral-800 hover:bg-neutral-700 text-foreground/80"
                    }`}
                  >
                    <span className="truncate text-xs">{entry.action.command}</span>
                    {isCopied ? (
                      <Check className="w-4 h-4 text-foreground/70 flex-shrink-0 ml-2" />
                    ) : (
                      <Copy className="w-4 h-4 text-muted-foreground flex-shrink-0 ml-2" />
                    )}
                  </button>
                ) : entry.action.type === "external" ? (
                  <a
                    href={entry.action.href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-sm text-foreground transition-colors"
                  >
                    {entry.action.label}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <Link
                    href={entry.action.href! || "#"}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-sm text-foreground transition-colors"
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
          <div className="rounded-xl border border-border bg-secondary/80 overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-primary/10" />
                <div className="w-3 h-3 rounded-full bg-primary/10" />
                <div className="w-3 h-3 rounded-full bg-primary/10" />
              </div>
              <span className="text-xs text-muted-foreground font-mono ml-2">terminal</span>
            </div>
            {/* Terminal content */}
            <div className="p-4 font-mono text-sm">
              <div className="text-muted-foreground">
                <span className="text-foreground/70">$</span> curl -fsSL hanzo.sh | bash
              </div>
              <div className="text-muted-foreground mt-1">✓ Installed hanzo CLI, MCP, and agents</div>
              <div className="text-muted-foreground mt-3">
                <span className="text-foreground/70">$</span> dev
              </div>
              <div className="text-muted-foreground mt-1">
                <span className="text-foreground">◆</span> Hanzo Dev v2.1.0
              </div>
              <div className="text-muted-foreground">
                <span className="text-muted-foreground/60">│</span>
              </div>
              <div className="text-muted-foreground">
                <span className="text-muted-foreground/60">│</span> What would you like to build?
              </div>
              <div className="text-muted-foreground mt-2 flex items-center">
                <span className="text-foreground/70">$</span>
                <span className="ml-1 text-foreground">"Add user auth with OAuth2 and session management"</span>
                <span className="w-2 h-4 bg-primary/80 animate-pulse ml-1" />
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
          <p className="text-muted-foreground text-sm mb-6">
            Or explore everything we offer
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium text-primary-foreground transition-all hover:opacity-90 bg-primary text-primary-foreground"

            >
              View all products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium text-foreground border border-border hover:bg-secondary hover:border-neutral-600 transition-all"
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
