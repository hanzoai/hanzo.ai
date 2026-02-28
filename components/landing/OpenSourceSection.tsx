'use client'

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, ExternalLink, Heart, ArrowRight, Network, Star } from "lucide-react";

const githubOrgs = [
  { name: "hanzoai",    label: "Hanzo AI",    description: "AI platform & infrastructure",    url: "https://github.com/hanzoai",    count: "140+" },
  { name: "luxfi",      label: "Lux",          description: "L1 blockchain & consensus",        url: "https://github.com/luxfi",      count: "30+"  },
  { name: "zenlm",      label: "Zen LM",       description: "Open frontier AI models",          url: "https://github.com/zenlm",      count: "20+"  },
  { name: "hanzo-js",   label: "Hanzo JS",     description: "TypeScript / JavaScript SDKs",    url: "https://github.com/hanzo-js",   count: "15+"  },
  { name: "hanzo-apps", label: "Hanzo Apps",   description: "Templates & starters",            url: "https://github.com/hanzo-apps", count: "10+"  },
  { name: "zoo-labs",   label: "Zoo Labs",     description: "DeAI research foundation",        url: "https://github.com/zoo-labs",   count: "25+"  },
];

interface Repo {
  org: string;
  name: string;
  description: string;
  language: string;
  stars?: string;
  tag?: string;
}

const LANG_COLOR: Record<string, string> = {
  TypeScript: "bg-blue-500/20 text-blue-300",
  Python:     "bg-yellow-500/20 text-yellow-300",
  Rust:       "bg-orange-500/20 text-orange-300",
  Go:         "bg-cyan-500/20 text-cyan-300",
  Solidity:   "bg-purple-500/20 text-purple-300",
  MDX:        "bg-pink-500/20 text-pink-300",
};

const repos: Repo[] = [
  // hanzoai — AI infra
  { org: "hanzoai",    name: "hanzo",        description: "The complete AI platform — deploy anywhere, any model",         language: "TypeScript", stars: "2.1k", tag: "platform" },
  { org: "hanzoai",    name: "mcp",          description: "260+ Model Context Protocol tools and servers",                  language: "TypeScript", stars: "1.8k", tag: "mcp"      },
  { org: "hanzoai",    name: "llm",          description: "Unified gateway to 100+ AI models via one OpenAI-compatible API", language: "Python",     stars: "3.2k", tag: "infra"    },
  { org: "hanzoai",    name: "dev",          description: "AI coding agent for the terminal and IDE",                       language: "TypeScript", stars: "980"               },
  { org: "hanzoai",    name: "auto",         description: "Workflow automation with AI agents",                             language: "TypeScript"                              },
  { org: "hanzoai",    name: "flow",         description: "Visual LLM workflow builder",                                    language: "TypeScript"                              },
  { org: "hanzoai",    name: "agent",        description: "Multi-agent orchestration framework",                            language: "TypeScript"                              },
  { org: "hanzoai",    name: "candle",       description: "High-performance ML framework in Rust",                          language: "Rust",       stars: "450"               },
  { org: "hanzoai",    name: "jin",          description: "Unified multimodal AI framework (vision + language + audio)",    language: "Rust"                                    },
  { org: "hanzoai",    name: "aci",          description: "AI Chain Infrastructure — decentralized compute and inference",  language: "Go"                                      },
  { org: "hanzoai",    name: "ui",           description: "React component library for AI applications",                    language: "TypeScript"                              },
  { org: "hanzoai",    name: "evals",        description: "Model evaluation harness and benchmark suite",                   language: "Python"                                  },
  // luxfi — Lux blockchain
  { org: "luxfi",      name: "node",         description: "Lux blockchain node — multi-consensus, post-quantum ready",      language: "Go",         stars: "820"               },
  { org: "luxfi",      name: "sdk",          description: "Client SDK for Lux — Go, TypeScript, Python",                   language: "Go"                                      },
  { org: "luxfi",      name: "cli",          description: "Command-line interface for Lux network operations",              language: "Go"                                      },
  { org: "luxfi",      name: "wallet",       description: "HD wallet with multi-chain support and hardware wallet integration", language: "Go"                                  },
  { org: "luxfi",      name: "netrunner",    description: "Blockchain network testing and simulation tool",                  language: "Go"                                      },
  { org: "luxfi",      name: "genesis",      description: "Genesis block configuration and validator bootstrapping",         language: "Go"                                      },
  // zenlm — Zen models
  { org: "zenlm",      name: "zen",          description: "Zen AI model family — nano to 1T+ frontier, Qwen3 + Kimi-based", language: "Python",     stars: "1.4k", tag: "models" },
  { org: "zenlm",      name: "zen-max-trainer", description: "QLoRA cloud training for zen-max (671B MoE)",                language: "Python"                                  },
  { org: "zenlm",      name: "zen4-ultra-trainer", description: "GT-QLoRA gate-targeted training for 1T MoE",              language: "Python"                                  },
  // hanzo-js
  { org: "hanzo-js",   name: "hanzo.js",     description: "Core JavaScript SDK for the Hanzo platform",                    language: "TypeScript"                              },
  { org: "hanzo-js",   name: "ui",           description: "@hanzo/ui — React components with unified analytics",            language: "TypeScript", stars: "340"               },
  { org: "hanzo-js",   name: "commerce",     description: "Headless commerce engine with AI recommendations",               language: "TypeScript"                              },
  // hanzo-apps
  { org: "hanzo-apps", name: "ai-chat",      description: "Full-featured AI chat — streaming, tools, memory",              language: "TypeScript", tag: "template"            },
  { org: "hanzo-apps", name: "rag-starter",  description: "RAG application with vector search and reranking",              language: "TypeScript", tag: "template"            },
  { org: "hanzo-apps", name: "agent-toolkit", description: "Multi-agent application starter with MCP tools",              language: "TypeScript", tag: "template"            },
  // zoo-labs
  { org: "zoo-labs",   name: "zoo",          description: "Zoo ecosystem — DeAI research and DeSci governance",            language: "TypeScript"                              },
  { org: "zoo-labs",   name: "zips",         description: "Zoo Improvement Proposals — open AI governance (zips.zoo.ngo)", language: "MDX"                                     },
  { org: "zoo-labs",   name: "contracts",    description: "Smart contracts — ERC20/721/1155, staking, governance",         language: "Solidity"                                },
];

const OpenSourceSection = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium rounded-full px-4 py-2 border mb-6 border-white/20 text-white/80">
            <Github className="w-4 h-4" />
            Open Source
          </div>
          <h2 className="text-3xl md:text-5xl font-medium text-foreground mb-4">
            Built in the open
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            200+ open-source repositories across AI infrastructure, blockchain, frontier models, and developer tools.
            View, fork, or self-host anything.
          </p>
        </motion.div>

        {/* GitHub Orgs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-14"
        >
          {githubOrgs.map((org) => (
            <a
              key={org.name}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1.5 p-3 rounded-xl border border-border bg-secondary/30 hover:bg-secondary hover:border-border/80 transition-all text-center"
            >
              <Github className="w-4 h-4 text-muted-foreground mx-auto group-hover:text-foreground transition-colors" />
              <div className="text-xs font-semibold text-foreground">{org.label}</div>
              <div className="text-[10px] text-muted-foreground leading-snug hidden sm:block">{org.description}</div>
              <div className="text-[10px] font-mono text-muted-foreground/60">{org.count} repos</div>
            </a>
          ))}
        </motion.div>

        {/* Repo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-14"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-semibold text-foreground">Selected Projects</h3>
            <a href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer"
               className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
              View all on GitHub <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {repos.map((repo, i) => (
              <motion.a
                key={`${repo.org}/${repo.name}`}
                href={`https://github.com/${repo.org}/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 + (i % 6) * 0.04 }}
                className="group p-4 rounded-xl border border-border/50 bg-secondary/20 hover:bg-secondary/50 hover:border-border transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <Github className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                    <span className="font-mono text-xs text-muted-foreground truncate">{repo.org}/</span>
                    <span className="font-mono text-xs font-semibold text-foreground truncate">{repo.name}</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-muted-foreground/40 group-hover:text-muted-foreground flex-shrink-0 transition-colors" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-2.5 line-clamp-2">{repo.description}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${LANG_COLOR[repo.language] ?? "bg-neutral-700/50 text-neutral-400"}`}>
                    {repo.language}
                  </span>
                  {repo.stars && (
                    <span className="flex items-center gap-0.5 text-[10px] text-muted-foreground/60">
                      <Star className="w-2.5 h-2.5" />{repo.stars}
                    </span>
                  )}
                  {repo.tag && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-foreground/60 font-medium">
                      {repo.tag}
                    </span>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Hanzo Network callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6 md:p-8 mb-10"
        >
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-medium rounded-full px-3 py-1.5 border border-white/20 text-white/80 mb-4">
                <Network className="w-3.5 h-3.5" />
                Hanzo Network
              </div>
              <h3 className="text-2xl font-medium text-foreground mb-3">
                Decentralized AI compute
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                Contribute GPU power for AI inference and training. Earn rewards while powering the next generation of AI applications on a decentralized, verifiable network.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://hanzo.network" target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-all">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a href="https://github.com/hanzoai/network" target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-border text-foreground hover:bg-secondary transition-colors">
                  <Github className="w-3.5 h-3.5" /> View source
                </a>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-28 h-28 rounded-2xl bg-neutral-800/50 flex items-center justify-center">
                <Network className="w-14 h-14 text-foreground/60" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Open Source values row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
        >
          {[
            { icon: "MIT/Apache", title: "Open Licensed", desc: "Every core component is MIT or Apache 2.0 licensed" },
            { icon: <Heart className="w-5 h-5" />, title: "Community Driven", desc: "Built with and for developers worldwide" },
            { icon: <Github className="w-5 h-5" />, title: "Self-Hostable", desc: "Run the entire platform on your own infrastructure" },
          ].map((f, i) => (
            <div key={f.title} className="text-center p-5 rounded-xl border border-border/40 bg-secondary/20">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 text-foreground font-bold text-xs">
                {typeof f.icon === "string" ? f.icon : f.icon}
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">{f.title}</h3>
              <p className="text-xs text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Research link → blog */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-10"
        >
          <p className="text-muted-foreground text-sm mb-3">
            Read our research, model releases, and technical deep-dives
          </p>
          <a href="https://hanzo.blog" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 text-foreground text-sm hover:underline underline-offset-4">
            Hanzo Blog — AI Research &amp; Infrastructure
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/open-source"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Browse all projects
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://github.com/hanzoai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-foreground border border-border hover:bg-secondary transition-colors"
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
