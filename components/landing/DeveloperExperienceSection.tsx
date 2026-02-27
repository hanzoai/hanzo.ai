'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Terminal,
  Copy,
  Check,
  ArrowRight,
  MonitorUp,
  Zap,
  Lock,
  Users,
  Shield,
  ExternalLink,
  Code,
  Bug,
  Workflow,
  Box,
  Bot,
  Brain,
  Database,
  FolderSearch,
  Wrench,
  Share2,
  Layers,
  GitBranch,
  FileSearch,
  Puzzle,
  History,
  Globe,
  Cpu
} from "lucide-react";
import { CodeTabs } from "@/components/ui/code-tabs";

// Multi-language code examples for the API section
const API_CODE_EXAMPLES = [
  {
    language: "typescript",
    label: "TypeScript",
    code: `import { Hanzo } from "@hanzo/ai";

const hanzo = new Hanzo({
  apiKey: process.env.HANZO_API_KEY,
});

const response = await hanzo.chat.completions.create({
  model: "claude-sonnet-4-20250514",
  messages: [{ role: "user", content: "Hello!" }],
});

console.log(response.choices[0].message.content);`,
  },
  {
    language: "python",
    label: "Python",
    code: `from hanzo import Hanzo
import os

client = Hanzo(api_key=os.environ["HANZO_API_KEY"])

response = client.chat.completions.create(
    model="claude-sonnet-4-20250514",
    messages=[{"role": "user", "content": "Hello!"}],
)

print(response.choices[0].message.content)`,
  },
  {
    language: "go",
    label: "Go",
    code: `package main

import (
    "context"
    "fmt"
    "os"

    "github.com/hanzoai/hanzo-go"
)

func main() {
    client := hanzo.NewClient(os.Getenv("HANZO_API_KEY"))

    resp, _ := client.Chat.Completions.Create(
        context.Background(),
        hanzo.ChatCompletionRequest{
            Model: "claude-sonnet-4-20250514",
            Messages: []hanzo.Message{
                {Role: "user", Content: "Hello!"},
            },
        },
    )

    fmt.Println(resp.Choices[0].Message.Content)
}`,
  },
  {
    language: "bash",
    label: "cURL",
    code: `curl https://api.hanzo.ai/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $HANZO_API_KEY" \\
  -d '{
    "model": "claude-sonnet-4-20250514",
    "messages": [
      {"role": "user", "content": "Hello!"}
    ]
  }'`,
  },
];

const DeveloperExperienceSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyInstall = () => {
    navigator.clipboard.writeText("curl -fsSL hanzo.sh | bash");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-background">
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
              style={{ color: "var(--primary)", borderColor: "color-mix(in srgb, var(--primary) 30%, transparent)" }}
            >
              Works where developers live
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
              VS Code. JetBrains. Terminal. Remote.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Hanzo reads your repo structure first, edits across files coherently, and executes tasks step-by-step—locally or in isolated remote sandboxes.
            </p>
            <a
              href="https://github.com/hanzoai/mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-colors bg-primary text-primary-foreground hover:opacity-90"
            >
              Install the IDE extension
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* IDE Preview */}
          <div className="rounded-xl border border-border bg-secondary/80 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-primary/10" />
                <div className="w-3 h-3 rounded-full bg-primary/10" />
                <div className="w-3 h-3 rounded-full bg-primary/10" />
              </div>
              <span className="ml-2 text-xs text-muted-foreground">VS Code - Hanzo Extension</span>
            </div>
            <div className="p-4 space-y-3 bg-background">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary border border-border">
                <MonitorUp className="w-4 h-4 text-foreground" />
                <span className="text-sm text-foreground/80">Reading repo structure...</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary border border-border">
                <Check className="w-4 h-4 text-foreground/70" />
                <span className="text-sm text-foreground/80">Edited 4 files cohesively</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/5 border border-border">
                <Check className="w-4 h-4 text-foreground/70" />
                <span className="text-sm text-foreground/70">All tests passing</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hanzo Dev Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Terminal Preview */}
          <div className="order-2 lg:order-1 rounded-xl border border-border bg-secondary/80 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-primary/10" />
                <div className="w-3 h-3 rounded-full bg-primary/10" />
                <div className="w-3 h-3 rounded-full bg-primary/10" />
              </div>
              <span className="ml-2 text-xs text-muted-foreground font-mono">terminal</span>
              <button
                onClick={handleCopyInstall}
                className="ml-auto p-1 rounded hover:bg-accent transition-colors"
              >
                {copied ? (
                  <Check className="h-3 w-3 text-foreground/70" />
                ) : (
                  <Copy className="h-3 w-3 text-muted-foreground" />
                )}
              </button>
            </div>
            <div className="p-4 font-mono text-sm bg-background">
              <div className="mb-2">
                <span className="text-muted-foreground">$ </span>
                <span className="text-foreground">curl</span>
                <span className="text-foreground/80"> -fsSL </span>
                <span className="text-foreground/70">hanzo.sh</span>
                <span className="text-foreground/80"> | </span>
                <span className="text-foreground">bash</span>
              </div>
              <div className="mb-4">
                <span className="text-muted-foreground">$ </span>
                <span className="text-foreground">hanzo</span>
                <span className="text-foreground/70"> dev</span>
                <span className="text-foreground/70"> "Fix rate limiting. Add metrics. Add tests. Open a PR."</span>
              </div>
              <div className="text-foreground/70 mb-1">
                <span className="text-foreground/70">✓ </span>Plan created
              </div>
              <div className="text-foreground/70 mb-1">
                <span className="text-foreground/70">✓ </span>Implementation complete
              </div>
              <div className="text-foreground/70 mb-1">
                <span className="text-foreground/70">✓ </span>Tests passing (12/12)
              </div>
              <div className="text-foreground">
                <span className="text-foreground/70">✓ </span>PR opened: #247
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p
              className="inline-flex items-center text-xs font-medium rounded-full px-4 py-2 border mb-6"
              style={{ color: "var(--primary)", borderColor: "color-mix(in srgb, var(--primary) 30%, transparent)" }}
            >
              <Bot className="w-3.5 h-3.5 mr-1.5" />
              Hanzo Dev
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
              AI coding agent in your terminal.
            </h2>
            <p className="text-muted-foreground mb-6">
              Install <code className="px-1.5 py-0.5 rounded bg-neutral-800 text-foreground/80 text-sm">@hanzo/dev</code> and <code className="px-1.5 py-0.5 rounded bg-neutral-800 text-foreground/80 text-sm">@hanzo/cli</code> via curl.
            </p>
            <ul className="space-y-3 text-muted-foreground mb-8">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center">
                  <Code className="w-3.5 h-3.5 text-muted-foreground" />
                </div>
                Generate APIs, scripts, components, and tests
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center">
                  <Bug className="w-3.5 h-3.5 text-muted-foreground" />
                </div>
                Debug and fix using your real codebase context
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center">
                  <Workflow className="w-3.5 h-3.5 text-muted-foreground" />
                </div>
                Scaffold CI/CD and release workflows
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center">
                  <Box className="w-3.5 h-3.5 text-muted-foreground" />
                </div>
                No framework lock-in
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Unified AI Platform Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <p
              className="inline-flex text-xs font-medium rounded-full px-4 py-2 border mb-6"
              style={{ color: "var(--primary)", borderColor: "color-mix(in srgb, var(--primary) 30%, transparent)" }}
            >
              Unified AI Platform
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
              One platform. Every AI tool. Shared everything.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stop context-switching between AI tools. Hanzo unifies memory, history, and context across all your AI interactions—terminal, IDE, browser, and API.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Brain, title: "Shared Memory", desc: "Context persists across all tools and sessions" },
              { icon: Database, title: "Vector Search", desc: "Semantic search over your entire codebase" },
              { icon: FolderSearch, title: "Master Large Codebases", desc: "Navigate millions of lines with ease" },
              { icon: Puzzle, title: "Auto Tool Discovery", desc: "Automatically adds tools as you need them" },
              { icon: History, title: "Unified History", desc: "Every prompt, every response, searchable" },
              { icon: Share2, title: "Team Sync", desc: "Share context and memory across your team" },
              { icon: Layers, title: "260+ MCP Tools", desc: "Browser, file, code, git, and more built-in" },
              { icon: Cpu, title: "Any Model", desc: "GPT-4, Claude, Gemini, Zen, Mistral, Llama, local" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-4 rounded-xl border border-border bg-secondary/50 hover:bg-secondary hover:border-border transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-0.5">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* How it works visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-xl border border-border bg-secondary/50 p-6 mb-8"
          >
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">How Hanzo Unifies Your AI Stack</h3>
              <p className="text-sm text-muted-foreground">All your tools, one shared brain</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
              {/* Entry points */}
              <div className="space-y-2 col-span-2 md:col-span-2">
                {[
                  { icon: Terminal, label: "Terminal" },
                  { icon: Code, label: "VS Code" },
                  { icon: Globe, label: "Browser" },
                  { icon: Bot, label: "API" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-800/50 border border-border/50">
                      <Icon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-foreground/80">{item.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center">
                <ArrowRight className="w-6 h-6 text-muted-foreground/60" />
              </div>

              {/* Core */}
              <div className="col-span-2 md:col-span-2 p-4 rounded-xl border-2 border-white/30 bg-primary/5">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <Brain className="w-6 h-6 text-foreground" />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Hanzo Core</h4>
                  <p className="text-xs text-muted-foreground mb-3">Unified memory • Vector index • Tool registry</p>
                  <div className="flex flex-wrap justify-center gap-1">
                    {["Memory", "Context", "History", "Tools"].map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full bg-neutral-800 text-[10px] text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="text-center">
            <Link
              href="/products"
              className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-colors bg-primary text-primary-foreground hover:opacity-90"
            >
              Explore all capabilities
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
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
              style={{ color: "var(--primary)", borderColor: "color-mix(in srgb, var(--primary) 30%, transparent)" }}
            >
              Remote Agents
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
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
                  className="p-5 rounded-xl border border-border bg-secondary/50 text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/operative"
              className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-colors border border-border hover:bg-secondary text-foreground"
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
          className="rounded-2xl border border-white/30 bg-gradient-to-br from-white/10 to-transparent p-8 md:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <p
                className="inline-flex text-xs font-medium rounded-full px-4 py-2 border mb-6"
                style={{ color: "var(--primary)", borderColor: "color-mix(in srgb, var(--primary) 30%, transparent)" }}
              >
                Hanzo AI API
              </p>
              <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
                One API for models + tools.
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Streaming, tool calling, and agent execution behind a single endpoint. Compatible with existing OpenAI SDKs by switching the base URL.
              </p>
              <a
                href="https://docs.hanzo.ai/api"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-accent"
              >
                View API reference
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
            <CodeTabs tabs={API_CODE_EXAMPLES} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeveloperExperienceSection;
