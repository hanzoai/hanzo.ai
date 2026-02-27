"use client"

import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Calendar } from "lucide-react"

const posts = [
  {
    slug: 'build-ai-coding-agent-that-ships',
    title: 'How to Build an AI Coding Agent That Actually Ships',
    description: 'Most AI coding tools generate code. Very few ship it. Here\'s the architecture behind an AI agent that writes, tests, deploys, and monitors production software autonomously.',
    date: 'February 27, 2026',
    tag: 'Engineering',
  },
  {
    slug: 'mcp-tools-advantage',
    title: '260 MCP Tools: The Unfair Advantage Over Copilot and Cursor',
    description: 'Model Context Protocol gives AI agents access to 260+ tools — databases, APIs, cloud providers, browsers, and more. Here\'s why MCP changes everything for agentic coding.',
    date: 'February 27, 2026',
    tag: 'Deep Dive',
  },
  {
    slug: 'real-cost-ai-coding-agents-2026',
    title: 'The Real Cost of AI Coding Agents in 2026',
    description: 'Devin costs $500/mo. Cursor costs $20/mo. Claude Code costs $20/mo. We broke down every AI coding agent\'s real cost — including the hidden fees nobody talks about.',
    date: 'February 27, 2026',
    tag: 'Analysis',
  },
  {
    slug: 'deploy-ai-marketing-agent-discord-slack-telegram',
    title: 'Deploy an AI Marketing Agent on Discord, Slack, and Telegram',
    description: 'Step-by-step guide to deploying an AI marketing agent across Discord, Slack, and Telegram. One bot, persistent memory, every channel — in under 10 minutes.',
    date: 'February 27, 2026',
    tag: 'Tutorial',
  },
  {
    slug: 'ai-content-automation-blog-to-ads',
    title: 'AI Content Automation: From Blog Posts to Ad Copy in One Agent',
    description: 'One AI agent that writes blog posts, generates social media content, creates ad copy, writes email sequences, and optimizes for SEO — all from a single prompt.',
    date: 'February 27, 2026',
    tag: 'Guide',
  },
  {
    slug: '50k-marketing-stack-vs-one-ai-agent',
    title: 'The $50K Marketing Stack vs One AI Agent',
    description: 'We analyzed what companies actually spend on marketing tools and compared it to running a single AI marketing agent. The savings are staggering — $75K+/yr.',
    date: 'February 27, 2026',
    tag: 'Analysis',
  },
  {
    slug: 'hanzo-bot-vs-ai-coding-agents',
    title: 'Hanzo Bot vs Every AI Coding Agent',
    description: 'Cursor costs $20/mo. Claude Code costs $20/mo. Copilot costs $19/mo. Devin costs $500/mo. Hanzo Bot starts free and does more at $15/mo. Here\'s the full breakdown.',
    date: 'February 26, 2026',
    tag: 'Deep Dive',
  },
  {
    slug: 'ai-marketing-agents',
    title: 'AI Marketing Agents: Automate Your Growth Stack',
    description: 'Stop paying $50K/yr for marketing tools. Deploy an AI marketing agent that handles content, campaigns, analytics, and engagement across every channel for $15/mo.',
    date: 'February 26, 2026',
    tag: 'Guide',
  },
  {
    slug: 'crypto-skills-agents-go-onchain',
    title: 'Crypto Skills: Agents Go Onchain',
    description: 'Pay, trade, build apps — no human in the loop. Agents can now use crypto autonomously with USDC on Base via x402.',
    date: 'February 26, 2026',
    tag: 'Launch',
  },
  {
    slug: 'vertically-integrated-ai-cloud',
    title: 'The Vertically Integrated AI Cloud',
    description: 'What every agentic harness actually needs — and why owning the full stack from LLM gateway to compute tiers changes everything.',
    date: 'February 24, 2026',
    tag: 'Architecture',
  },
  {
    slug: 'introducing-hanzo-bot',
    title: 'Introducing Hanzo Bot',
    description: 'Your AI team in a box — one bot, every role, every channel. Deploy autonomous AI agents that run locally or in the cloud.',
    date: 'February 20, 2026',
    tag: 'Announcement',
  },
  {
    slug: 'from-eliza-to-hanzo-bot',
    title: 'The Road to Hanzo Bot: Ten Years of Building AI Infrastructure',
    description: 'From the first Hanzo API in 2014 to Jin hypermodal research, Zen MoDE models, Enso diffusion, and a 260-repo AI platform — the full story of how Hanzo Bot was born.',
    date: 'February 20, 2026',
    tag: 'Origin Story',
  },
  {
    slug: 'zen-mode-model-architecture',
    title: 'Zen MoDE: 47 Models, One Architecture',
    description: 'Inside Zen — Mixture of Distilled Experts (MoDE) architecture that activates only the parameters it needs. 47 models spanning text, code, vision, audio, video, 3D, and agents.',
    date: 'September 15, 2025',
    tag: 'Research',
  },
  {
    slug: 'agent-sdk-multi-agent-orchestration',
    title: 'Agent SDK: Multi-Agent Orchestration with 260+ MCP Tools',
    description: 'How we built a Go-based agent SDK that coordinates multiple AI agents with shared memory, tool delegation, and 260+ MCP tools — the orchestration layer behind Hanzo Bot.',
    date: 'March 15, 2025',
    tag: 'Launch',
  },
  {
    slug: 'operative-computer-use-for-claude',
    title: 'Operative: Giving AI Eyes and Hands',
    description: 'We built a full computer-use stack — Operative, CUA, ACI, and Overlord — so AI agents can see screens, click buttons, type text, and automate browsers. Open source.',
    date: 'March 20, 2025',
    tag: 'Launch',
  },
  {
    slug: 'enso-ai-native-browser',
    title: 'Enso: From Diffusion LLM to AI-Native Browser',
    description: 'Enso started as a dLLM — a diffusion language model for text generation. It evolved into an AI-native browser with diffusion intelligence built into the rendering engine.',
    date: 'April 1, 2024',
    tag: 'Research',
  },
  {
    slug: 'jin-multimodal-ai-architecture',
    title: 'Jin: Our Hypermodal AI Architecture',
    description: 'Inside Jin — a unified hypermodal architecture built on JEPA principles that processes text, images, audio, video, and 3D through shared representations. Not multimodal. Hypermodal.',
    date: 'July 15, 2023',
    tag: 'Research',
  },
  {
    slug: 'llm-gateway-100-models-one-api',
    title: 'LLM Gateway: 391 Models, One API',
    description: 'Why we built a unified LLM gateway that routes to 391 models — 47 Zen and 344 third-party — through one API. Automatic fallback, cost tracking, and budget controls built in.',
    date: 'August 1, 2023',
    tag: 'Architecture',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)", filter: "blur(100px)" }} />
          </div>
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 bg-primary/20 text-foreground">
              <BookOpen className="w-3.5 h-3.5" />Blog
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }} className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6">
              <span className="text-foreground">News</span><br /><span className="text-muted-foreground">& Guides.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl mx-auto">
              Product launches, architecture deep dives, and how-to guides from the team building the AI workforce platform.
            </motion.p>
          </div>
        </section>

        {/* Posts */}
        <section className="py-8 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-4">
              {posts.map((post, index) => (
                <motion.div key={post.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: Math.min(index * 0.05, 0.3) }}>
                  <a
                    href={`https://hanzo.bot/blog/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 rounded-xl bg-secondary/50 border border-border hover:border-foreground/20 transition-all group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-foreground/80">
                            {post.tag}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                        </div>
                        <h2 className="font-semibold text-foreground mb-2 group-hover:text-foreground/80 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {post.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground/60 group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-neutral-900/30 to-background relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Build with Hanzo
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Deploy AI agents that code, market, and operate — starting free.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-wrap items-center justify-center gap-4">
              <a href="https://hanzo.bot/get-started" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-all hover:opacity-90 text-base bg-primary text-primary-foreground">
                Get Started<ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="https://docs.hanzo.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-secondary text-base text-foreground">
                Read the Docs
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
