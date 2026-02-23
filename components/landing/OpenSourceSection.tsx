'use client'

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, ExternalLink, Heart, ArrowRight, Rocket, Network } from "lucide-react";

// GitHub organizations
const githubOrgs = [
  { name: "hanzoai", label: "Hanzo AI", description: "AI infrastructure and models", url: "https://github.com/hanzoai" },
  { name: "hanzo-js", label: "Hanzo JS", description: "JavaScript & TypeScript SDKs", url: "https://github.com/hanzo-js" },
  { name: "hanzo-apps", label: "Hanzo Apps", description: "Templates and starters", url: "https://github.com/hanzo-apps" },
];

// Repos organized by org
const repos = {
  hanzoai: [
    { name: "hanzo", description: "The complete AI platform. Deploy anywhere.", language: "TypeScript", featured: true },
    { name: "mcp", description: "260+ Model Context Protocol tools and servers", language: "TypeScript", featured: true },
    { name: "llm", description: "Unified gateway to 100+ AI models", language: "Python", featured: true },
    { name: "dev", description: "AI coding agent for the terminal", language: "TypeScript" },
    { name: "auto", description: "Workflow automation with AI agents", language: "TypeScript" },
    { name: "flow", description: "Visual AI/LLM workflow builder", language: "TypeScript" },
  ],
  "hanzo-js": [
    { name: "hanzo.js", description: "Core JavaScript SDK for Hanzo platform", language: "TypeScript" },
    { name: "ui", description: "React component library for AI apps", language: "TypeScript" },
    { name: "kv", description: "Redis-compatible key-value store client", language: "TypeScript" },
    { name: "mq", description: "High-performance message queue client", language: "TypeScript" },
  ],
  "hanzo-apps": [
    { name: "ai-chat", description: "Full-featured AI chat application", language: "TypeScript", template: true },
    { name: "rag-starter", description: "RAG application with vector search", language: "TypeScript", template: true },
    { name: "agent-toolkit", description: "Multi-agent application starter", language: "TypeScript", template: true },
  ],
};

const features = [
  {
    icon: "100%",
    title: "Open Source Core",
    description: "Every core component is open source and MIT/Apache 2.0 licensed",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Community Driven",
    description: "Built with and for the developer community",
  },
  {
    icon: <Github className="w-5 h-5" />,
    title: "Self-Hostable",
    description: "Run the entire platform on your own infrastructure",
  },
];

const OpenSourceSection = () => {
  // Show featured repos from hanzoai
  const featuredRepos = repos.hanzoai.slice(0, 6);
  // Show templates from hanzo-apps
  const templates = repos["hanzo-apps"].slice(0, 3);

  return (
    <section className="py-24 px-4 md:px-8 bg-black relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium rounded-full px-4 py-2 border mb-6"
               style={{ color: "#ffffff", borderColor: "rgba(255, 255, 255, 0.3)" }}>
            <Github className="w-4 h-4" />
            Open Source
          </div>
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">
            Built in the open
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            We believe the future of AI infrastructure should be open. View our code, contribute, or self-host the entire platform.
          </p>
        </motion.div>

        {/* GitHub Organizations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {githubOrgs.map((org) => (
            <a
              key={org.name}
              href={org.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 hover:border-neutral-700 transition-all group"
            >
              <Github className="w-5 h-5 text-neutral-400" />
              <div>
                <div className="text-sm font-medium text-white group-hover:text-white transition-colors">{org.label}</div>
                <div className="text-xs text-neutral-500">{org.description}</div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-600 group-hover:text-neutral-400 transition-colors" />
            </a>
          ))}
        </motion.div>

        {/* Features row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4 text-white font-bold">
                {typeof feature.icon === "string" ? feature.icon : feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Repos grid - 3x2 on desktop */}
        <div className="mb-16">
          <h3 className="text-xl font-medium text-white mb-6 text-center">Core Infrastructure</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredRepos.map((repo, index) => (
              <motion.a
                key={repo.name}
                href={`https://github.com/hanzoai/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + (index % 3) * 0.1 }}
                className={`group p-5 rounded-xl border bg-neutral-900/50 hover:bg-neutral-900 transition-all ${
                  repo.featured
                    ? "border-white/30 hover:border-white/30/50"
                    : "border-neutral-800 hover:border-neutral-700"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-neutral-400" />
                    <span className="font-mono text-sm text-white">hanzoai/{repo.name}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-600 group-hover:text-neutral-400 transition-colors" />
                </div>
                <p className="text-sm text-neutral-400 mb-3 line-clamp-2">{repo.description}</p>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-500">{repo.language}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Templates Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-medium text-white">Templates &amp; Starters</h3>
            <a
              href="https://github.com/hanzo-apps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
            >
              View all templates
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {templates.map((template, index) => (
              <motion.div
                key={template.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                className="group p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 hover:border-neutral-700 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-white" />
                    <span className="font-mono text-sm text-white">{template.name}</span>
                  </div>
                </div>
                <p className="text-sm text-neutral-400 mb-4 line-clamp-2">{template.description}</p>
                <div className="flex items-center gap-2">
                  <a
                    href={`https://hanzo.app/new?template=${template.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-3 py-2 rounded-lg bg-white hover:bg-white/90 text-white text-xs font-medium transition-colors"
                  >
                    Launch in Hanzo
                  </a>
                  <a
                    href={`https://github.com/hanzo-apps/${template.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg border border-neutral-700 hover:bg-neutral-800 text-neutral-400 text-xs transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hanzo Network Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl border border-white/30 bg-gradient-to-br from-white/10 to-transparent p-8 mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-medium rounded-full px-4 py-2 border mb-4"
                   style={{ color: "#ffffff", borderColor: "rgba(255, 255, 255, 0.3)" }}>
                <Network className="w-4 h-4" />
                Hanzo Network
              </div>
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-4">
                Decentralized AI compute
              </h3>
              <p className="text-neutral-400 mb-6">
                Join the Hanzo Network to contribute GPU power for AI inference and training. Earn rewards while powering the next generation of AI applications.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://hanzo.network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-white text-white hover:opacity-90 transition-colors"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/hanzoai/network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-neutral-700 text-white hover:bg-neutral-900 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View source
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-32 h-32 rounded-2xl bg-neutral-800/50 flex items-center justify-center">
                <Network className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Research Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <p className="text-neutral-400 mb-4">
            Read our research papers and technical specifications
          </p>
          <a
            href="https://zenlm.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:underline"
          >
            zenlm.org - AI Research &amp; Philosophy
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/open-source"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white bg-white hover:bg-white/90 transition-colors"
          >
            Browse all projects
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://github.com/hanzoai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white border border-neutral-700 hover:bg-neutral-900 transition-colors"
          >
            <Github className="w-5 h-5" />
            View on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
