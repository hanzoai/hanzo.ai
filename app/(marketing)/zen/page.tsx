'use client'

import Link from 'next/link'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Code2, Eye, Zap, ExternalLink, Brain, Shield,
  Globe, Cpu, Layers, Clock, Github, Sparkles, Mic, FileCode,
} from "lucide-react";
import { allModels } from "@zenlm/models";

const PRICING_API = 'https://api.hanzo.ai/v1/pricing'

interface ModelStats {
  total: number
  maxContext: string
  cheapest: string
  families: { name: string; count: number; icon: any; description: string }[]
}

function useModelStats(): ModelStats {
  const [stats, setStats] = useState<ModelStats>({
    total: 0, maxContext: '—', cheapest: '—', families: [],
  })
  useEffect(() => {
    fetch(PRICING_API)
      .then(r => { if (!r.ok) throw new Error(); return r.json() })
      .then(data => {
        const zen = data.hanzoModels || []
        const cheapest = zen.reduce((min: number, m: any) => {
          const p = m.pricing?.input ?? Infinity
          return p < min ? p : min
        }, Infinity)
        const maxCtx = zen.reduce((max: number, m: any) => Math.max(max, m.context || 0), 0)
        const maxCtxStr = maxCtx >= 1_000_000 ? `${Math.round(maxCtx / 1_000_000)}M` : `${Math.round(maxCtx / 1000)}K`
        const iconMap: Record<string, any> = { Sparkles: Brain, Code: Code2, Eye: Eye, Shield: Shield, Search: Brain, Image: Eye, Mic: Brain, Brain, Rocket: Zap, Network: Cpu }
        const families = (data.families || [])
          .filter((f: any) => f.models?.length > 0)
          .map((f: any) => ({
            name: f.name,
            count: f.models.filter((id: string) => zen.some((m: any) => m.name === id)).length,
            icon: iconMap[f.icon] || Brain,
            description: f.description,
          }))
          .filter((f: any) => f.count > 0)
        setStats({ total: zen.length, maxContext: maxCtxStr, cheapest: cheapest < Infinity ? `$${cheapest >= 1 ? cheapest.toFixed(2) : cheapest.toFixed(cheapest >= 0.01 ? 2 : 3)}` : '—', families })
      })
      .catch(() => {})
  }, [])
  return stats
}

// Display model shape for this page — derived from @zenlm/models at import time
interface ZenModel {
  id: string
  label: string
  params: string
  active?: string
  ctx?: string
  tier: "edge" | "pro" | "max" | "ultra" | "vision" | "multimodal"
  tag?: string
  hf: string
}

function fmtCtx(context: number): string {
  if (!context) return ''
  if (context >= 1_000_000) return `${Math.round(context / 1_000_000)}M`
  if (context >= 1000) return `${Math.round(context / 1000)}K`
  return String(context)
}

function mapTier(tier: string, modalities: string[]): ZenModel['tier'] {
  if (modalities.includes('vision') && !modalities.includes('text')) return 'vision'
  if (modalities.includes('vision') && modalities.includes('audio')) return 'multimodal'
  if (tier === 'ultra max' || tier === 'ultra') return 'ultra'
  if (tier === 'pro max') return 'max'
  return 'pro'
}

// Derived from @zenlm/models — single source of truth
const ZEN_MODELS: ZenModel[] = allModels.map(m => ({
  id: m.id,
  label: m.id,
  params: m.spec.params || 'TBA',
  active: m.spec.activeParams ?? undefined,
  ctx: fmtCtx(m.spec.context),
  tier: mapTier(m.tier, m.modalities),
  tag: m.status === 'coming-soon' || m.status === 'contact-sales'
    ? 'research preview'
    : m.features[0]?.toLowerCase().slice(0, 20) ?? undefined,
  hf: m.huggingface
    ? m.huggingface.replace('https://huggingface.co/', '')
    : `zenlm/${m.id}`,
}))

const TIER_STYLE: Record<string, string> = {
  edge:       "bg-green-500/15 text-green-300 border-green-500/20",
  pro:        "bg-blue-500/15 text-blue-300 border-blue-500/20",
  max:        "bg-purple-500/15 text-purple-300 border-purple-500/20",
  ultra:      "bg-orange-500/15 text-orange-300 border-orange-500/20",
  vision:     "bg-pink-500/15 text-pink-300 border-pink-500/20",
  multimodal: "bg-cyan-500/15 text-cyan-300 border-cyan-500/20",
}
const TIER_LABEL: Record<string, string> = {
  edge: "Edge", pro: "Pro", max: "Max", ultra: "Ultra", vision: "Vision", multimodal: "Multimodal",
}

const BENEFITS = [
  { icon: Clock,  title: "OpenAI-Compatible API",  description: "Drop-in replacement for GPT/Claude. Same SDK, same format, lower cost." },
  { icon: Globe,  title: "Open Weight",             description: "All Zen models are open-weight on HuggingFace. Run them yourself." },
  { icon: Layers, title: "Full Spectrum",           description: "82M edge to 1T+ frontier. Text, code, vision, audio, image — one API." },
  { icon: Cpu,    title: "MoE Efficiency",          description: "Mixture-of-Experts activates only a fraction of params per token." },
]

const Zen = () => {
  const stats = useModelStats()
  const QUICK_STATS = [
    { label: "Models",      value: stats.total > 0 ? `${stats.total}+` : `${ZEN_MODELS.length}+` },
    { label: "Max Params",  value: "1.04T" },
    { label: "Max Context", value: stats.maxContext !== '—' ? stats.maxContext : "2M" },
    { label: "From",        value: stats.cheapest },
  ]

  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
              style={{ background: `radial-gradient(circle, var(--primary) 0%, transparent 70%)`, filter: "blur(100px)" }} />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-foreground border border-border">
                    <Zap className="w-3 h-3" />
                    {ZEN_MODELS.length}+ Zen Models
                  </span>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6">
                  <span className="text-foreground">Hanzo Zen Models</span><br />
                  <span className="text-muted-foreground">Language · Code · Vision · Audio</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                  {ZEN_MODELS.length}+ open-weight models from 0.6B to 1T+. Zen MoDE (Mixture of Diverse Experts) architecture.
                  {stats.cheapest !== '—' ? ` From ${stats.cheapest}/MTok.` : ''} All models on HuggingFace.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }}
                  className="flex flex-wrap items-center gap-4 mb-8">
                  <Link href="/zen/models" className="inline-flex items-center px-6 py-3 rounded-full font-medium bg-primary text-primary-foreground hover:opacity-90 transition-all text-sm">
                    Explore All Models <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link href="/pricing" className="inline-flex items-center px-6 py-3 rounded-full font-medium border border-border bg-transparent hover:bg-secondary text-sm text-foreground transition-colors">
                    View Pricing
                  </Link>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex flex-wrap gap-3">
                  <a href="https://cloud.hanzo.ai/signup" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-secondary border border-border text-muted-foreground hover:text-foreground transition-all">
                    <Globe className="w-4 h-4" /> Get API Key
                  </a>
                  <a href="https://huggingface.co/zenlm" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-secondary border border-border text-muted-foreground hover:text-foreground transition-all">
                    <Sparkles className="w-4 h-4" /> HuggingFace
                  </a>
                  <a href="https://github.com/zenlm/zen" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-secondary border border-border text-muted-foreground hover:text-foreground transition-all">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                </motion.div>
              </div>

              {/* Stats panel */}
              <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.25 }}>
                <div className="rounded-xl border border-border bg-secondary/95 backdrop-blur-sm overflow-hidden shadow-2xl">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-primary/10" />
                      <div className="w-3 h-3 rounded-full bg-primary/10" />
                      <div className="w-3 h-3 rounded-full bg-primary/10" />
                    </div>
                    <span className="text-xs text-muted-foreground font-mono ml-2">zen-models</span>
                  </div>
                  <div className="p-6 bg-background">
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      {QUICK_STATS.map((stat) => (
                        <div key={stat.label} className="p-3 bg-secondary/50 rounded-lg border border-border text-center">
                          <div className="text-xl font-bold text-foreground mb-0.5">{stat.value}</div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2.5">
                      {[
                        { icon: Brain,    label: "Language + Code + Vision + Audio" },
                        { icon: Code2,    label: "Zen MoDE — Mixture of Diverse Experts" },
                        { icon: Shield,   label: "OpenAI-compatible API" },
                        { icon: Github,   label: "Open-weight on HuggingFace" },
                      ].map(({ icon: Icon, label }) => (
                        <div key={label} className="flex items-center gap-2 text-sm">
                          <Icon className="w-4 h-4 text-foreground/70 flex-shrink-0" />
                          <span className="text-foreground/80">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Full Model Catalog */}
        <section className="py-16 px-4 md:px-8 border-t border-border/30">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Full Model Catalog</h2>
                  <p className="text-muted-foreground text-sm">{ZEN_MODELS.length}+ models · Available via API and HuggingFace</p>
                </div>
                <a href="https://huggingface.co/zenlm" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-border text-muted-foreground hover:text-foreground transition-colors">
                  <Sparkles className="w-3.5 h-3.5" /> Browse on HuggingFace <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>

            {/* Tier legend */}
            <div className="flex flex-wrap gap-2 mb-6">
              {Object.entries(TIER_LABEL).map(([k, v]) => (
                <span key={k} className={`text-xs px-2 py-1 rounded-full border font-medium ${TIER_STYLE[k]}`}>{v}</span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {ZEN_MODELS.map((m, i) => {
                const isPreview = m.tag === "research preview";
                return (
                <motion.a
                  key={m.id}
                  href={isPreview ? "/research-access" : `https://huggingface.co/${m.hf}`}
                  target={isPreview ? undefined : "_blank"}
                  rel={isPreview ? undefined : "noopener noreferrer"}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: (i % 6) * 0.04 }}
                  className="group p-4 rounded-xl border border-border/40 bg-secondary/20 hover:bg-secondary/50 hover:border-border transition-all"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="font-mono text-sm font-semibold text-foreground">{m.label}</span>
                    {isPreview ? (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/20 text-primary font-medium flex-shrink-0">Research Preview</span>
                    ) : (
                      <ExternalLink className="w-3 h-3 text-muted-foreground/40 group-hover:text-muted-foreground flex-shrink-0 transition-colors mt-0.5" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${TIER_STYLE[m.tier]}`}>
                      {TIER_LABEL[m.tier]}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">{m.params}</span>
                    {m.active && <span className="text-[10px] text-muted-foreground/60">{m.active} active</span>}
                    {m.ctx && <span className="text-[10px] text-muted-foreground/60">{m.ctx} ctx</span>}
                    {m.tag && !isPreview && <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-muted-foreground">{m.tag}</span>}
                  </div>
                </motion.a>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/zen/models" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-all">
                View Full Specs & Pricing <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://github.com/zenlm/zen" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-border text-foreground hover:bg-secondary transition-colors">
                <Github className="w-4 h-4" /> Open Source on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Model Families (dynamic from API) */}
        {stats.families.length > 0 && (
          <section className="py-16 px-4 md:px-8 bg-background/50">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {stats.total || ZEN_MODELS.length}+ Models Across {stats.families.length} Families
                </h2>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {stats.families.slice(0, 8).map((family, idx) => {
                  const Icon = family.icon;
                  return (
                    <motion.div key={family.name}
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
                      className="p-5 bg-background border border-border rounded-xl text-center hover:border-white/20 transition-all hover:-translate-y-0.5">
                      <div className="mx-auto w-11 h-11 mb-3 flex items-center justify-center rounded-xl bg-primary/10 border border-border">
                        <Icon className="w-5 h-5 text-foreground" />
                      </div>
                      <h3 className="text-base font-semibold text-foreground mb-1">{family.name}</h3>
                      <p className="text-sm text-foreground/70 mb-1">{family.count} {family.count === 1 ? 'model' : 'models'}</p>
                      <p className="text-muted-foreground text-xs leading-relaxed">{family.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Why Zen */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Why Zen Models?</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {BENEFITS.map((b, idx) => {
                const Icon = b.icon;
                return (
                  <motion.div key={b.title}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
                    className="p-5 bg-background border border-border rounded-xl text-center hover:border-white/20 transition-all">
                    <div className="mx-auto w-11 h-11 mb-3 flex items-center justify-center rounded-xl bg-primary/10 border border-border">
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">{b.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{b.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Modalities showcase */}
        <section className="py-16 px-4 md:px-8 bg-background/30 border-y border-border/30">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Every Modality</h2>
              <p className="text-muted-foreground">Text, vision, code, speech — all through a single unified API</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Brain,    label: "Language",    desc: "Chat, reasoning, RAG",      models: ["zen4-max","zen4-ultra","zen4-pro"] },
                { icon: FileCode, label: "Code",        desc: "Generation, review, debug", models: ["zen4-coder-flash","zen4-coder","zen4-mini"] },
                { icon: Eye,      label: "Vision",      desc: "Image, video, OCR",         models: ["zen-vl-4b","zen-vl-8b","zen-vl-30b"] },
                { icon: Mic,      label: "Audio",       desc: "Speech-to-speech <300ms",   models: ["zen-omni"] },
              ].map((mod, i) => {
                const Icon = mod.icon;
                return (
                  <motion.div key={mod.label}
                    initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="p-5 rounded-xl border border-border bg-secondary/20 hover:bg-secondary/40 transition-all">
                    <Icon className="w-6 h-6 text-foreground mb-3" />
                    <h3 className="font-semibold text-foreground text-sm mb-1">{mod.label}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{mod.desc}</p>
                    <div className="space-y-1">
                      {mod.models.map(m => (
                        <div key={m} className="text-[10px] font-mono text-muted-foreground/60 truncate">{m}</div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Zen5 Teaser */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="relative p-8 md:p-12 rounded-2xl border border-border bg-background/80 overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground">
                Coming Soon
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-foreground" />
                <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Next Generation</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Zen 5 Ultra</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                2T+ parameter MoDE. Trained on-chain via NVIDIA TEE confidential compute on{" "}
                <a href="https://hanzo.network" target="_blank" rel="noopener noreferrer"
                  className="underline hover:no-underline text-foreground">hanzo.network</a>.
                The largest open-weight model in history.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { v: "2T+", l: "Parameters" },
                  { v: "MoDE", l: "Mixture of Diverse Experts" },
                  { v: "TEE", l: "On-Chain Verifiable Training" },
                ].map(s => (
                  <div key={s.l} className="p-4 rounded-lg bg-primary/5 border border-border/40">
                    <div className="text-2xl font-bold text-foreground mb-1">{s.v}</div>
                    <div className="text-xs text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/research-access"
                  className="inline-flex items-center px-5 py-2.5 rounded-full font-medium bg-primary text-primary-foreground hover:opacity-90 text-sm gap-2">
                  Request Research Access <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="https://hanzo.network" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 rounded-full font-medium border border-border text-foreground hover:bg-secondary text-sm gap-2 transition-colors">
                  <Globe className="w-4 h-4" /> On-Chain Training
                </a>
                <Link href="/zen/models"
                  className="inline-flex items-center px-5 py-2.5 rounded-full font-medium border border-border text-foreground hover:bg-secondary text-sm gap-2 transition-colors">
                  Current Catalog <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Get Started */}
        <section className="py-16 px-4 md:px-8 border-t border-border/30">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Get Started</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { href: "/zen/models", icon: Brain,   title: "Model Catalog",    desc: `All ${ZEN_MODELS.length}+ models with specs, tiers, and pricing`, internal: true },
                { href: "/pricing",   icon: Layers,  title: "API Pricing",      desc: "Transparent per-token pricing for all tiers", internal: true },
                { href: "https://cloud.hanzo.ai/signup", icon: Globe, title: "API Access", desc: "Get your API key and start building", internal: false },
              ].map((card, i) => {
                const Icon = card.icon;
                const inner = (
                  <div className="p-6 bg-background border border-border rounded-xl text-center hover:border-white/20 transition-all hover:-translate-y-0.5 h-full">
                    <Icon className="w-7 h-7 mx-auto mb-3 text-foreground" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
                    <p className="text-muted-foreground text-sm">{card.desc}</p>
                  </div>
                );
                return card.internal ? (
                  <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Link href={card.href} className="block">{inner}</Link>
                  </motion.div>
                ) : (
                  <motion.a key={card.title} href={card.href} target="_blank" rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="block">{inner}</motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Philosophy Bridge */}
        <section className="py-16 px-4 md:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-4xl tracking-widest text-foreground/20 mb-6 select-none">
                ䷀ ䷸ ䷹ ䷺ ䷻ ䷼ ䷽ ䷾ ䷿ ䷡
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">The Philosophy Behind the Models</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-sm">
                These models are built on ten engineering principles drawn from the 64 hexagrams of the I-Ching.
                Orthogonality. Smallness. Completeness. Clarity. Composability.
                Ancient pattern language for systems that last.
              </p>
              <Link
                href="/philosophy"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium border border-border bg-transparent hover:bg-secondary text-sm text-foreground transition-colors gap-2"
              >
                易經 · Explore the Full Philosophy <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 md:px-8 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-3">Ready to build with Zen?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                {ZEN_MODELS.length}+ models, full spectrum of modalities, one API. Start building today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/zen/models"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium bg-primary text-primary-foreground hover:opacity-90 text-sm gap-2 transition-all">
                  Explore All Models <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/dev"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium border border-border bg-transparent hover:bg-secondary text-sm text-foreground transition-colors">
                  Try Hanzo Dev
                </Link>
                <a href="https://cloud.hanzo.ai/signup" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium border border-border bg-transparent hover:bg-secondary text-sm text-foreground transition-colors">
                  <Globe className="mr-2 h-4 w-4" /> Get API Key
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Zen;
