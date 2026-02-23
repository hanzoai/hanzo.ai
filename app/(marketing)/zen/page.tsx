'use client'

import Link from 'next/link'
import React from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Code2,
  Eye,
  Zap,
  ExternalLink,
  Brain,
  Shield,
  Globe,
  Cpu,
  Layers,
  Clock,
} from "lucide-react";

// Model categories overview -- matches the 14 models in pricing.json
const MODEL_CATEGORIES = [
  {
    icon: Brain,
    title: "Flagship Language",
    count: "6 models",
    description:
      "Zen4, Zen4 Ultra, Zen4 Pro, Zen4 Max, Zen4 Mini, Zen4 Thinking. From 8B to ~400B parameters across Dense and MoE architectures.",
  },
  {
    icon: Code2,
    title: "Code Generation",
    count: "3 models",
    description:
      "Zen4 Coder, Zen4 Coder Pro, Zen4 Coder Flash. Up to 480B parameters with 262K context for full-codebase understanding.",
  },
  {
    icon: Eye,
    title: "Multimodal & Vision",
    count: "2 models",
    description:
      "Zen3 Omni for hypermodal text+vision+audio. Zen3 VL for vision-language reasoning and image understanding.",
  },
  {
    icon: Shield,
    title: "Specialized",
    count: "3 models",
    description:
      "Zen3 Nano for edge deployment, Zen3 Guard for content safety, Zen3 Embedding for high-quality text embeddings.",
  },
];

// Key benefits
const BENEFITS = [
  {
    icon: Clock,
    title: "OpenAI-Compatible API",
    description:
      "Drop-in replacement. Switch from GPT/Claude with one line. Same SDK, same format, lower cost.",
  },
  {
    icon: Globe,
    title: "Open Source Upstream",
    description:
      "Zen MoDE (Mixture of Distilled Experts). Curating the best open-source foundations into a unified family.",
  },
  {
    icon: Layers,
    title: "Four Tiers",
    description:
      "Pro, Pro Max, Ultra, Ultra Max. Pick the right balance of capability and cost for each task.",
  },
  {
    icon: Cpu,
    title: "MoE Efficiency",
    description:
      "Mixture-of-Experts models activate only a fraction of parameters per token, cutting inference cost.",
  },
];

const QUICK_STATS = [
  { label: "Models", value: "14" },
  { label: "Max Params", value: "480B" },
  { label: "Max Context", value: "262K" },
  { label: "From", value: "$0.30" },
];

const Zen = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
            

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
              style={{
                background: `radial-gradient(circle, var(--primary) 0%, transparent 70%)`,
                filter: "blur(100px)",
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mb-6"
                >
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-foreground border border-border">
                    <Zap className="w-3 h-3" />
                    14 Foundation Models
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
                >
                  <span className="text-foreground">Hanzo Zen Models</span>
                  <br />
                  <span className="text-muted-foreground">
                    Language, Code, Vision
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl"
                >
                  14 foundation models across four tiers. Zen MoDE (Mixture of
                  Distilled Experts) architecture. From $0.30/MTok for edge
                  models to flagship reasoning at $9.60/MTok.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="flex flex-wrap items-center gap-4 mb-8"
                >
                  <Link
                    href="/zen/models"
                    className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm bg-primary text-primary-foreground"

                  >
                    Explore All 14 Models
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-secondary text-sm text-foreground"
                  >
                    View Pricing
                  </Link>
                </motion.div>

                {/* Quick links */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex flex-wrap gap-3"
                >
                  <a
                    href="https://cloud.hanzo.ai/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-border transition-all"
                  >
                    <Globe className="w-4 h-4" />
                    Get API Key
                  </a>
                  <a
                    href="https://huggingface.co/zenlm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-border transition-all"
                  >
                    HuggingFace
                  </a>
                  <a
                    href="https://github.com/zenlm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-border transition-all"
                  >
                    <Globe className="w-4 h-4" />
                    GitHub
                  </a>
                </motion.div>
              </div>

              {/* Right Column: Stats Demo */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                <div className="rounded-xl border border-border bg-secondary/95 backdrop-blur-sm overflow-hidden shadow-2xl">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-primary/10" />
                      <div className="w-3 h-3 rounded-full bg-primary/10" />
                      <div className="w-3 h-3 rounded-full bg-primary/10" />
                    </div>
                    <span className="text-xs text-muted-foreground font-mono ml-2">
                      zen-models
                    </span>
                  </div>
                  <div className="p-6 bg-background">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {QUICK_STATS.map((stat) => (
                        <div
                          key={stat.label}
                          className="p-4 bg-secondary/50 rounded-lg border border-border text-center"
                        >
                          <div className="text-2xl font-bold text-foreground mb-1">
                            {stat.value}
                          </div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wider">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Brain className="w-4 h-4 text-foreground" />
                        <span className="text-foreground/80">
                          Language + Code + Vision + Multimodal
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Code2 className="w-4 h-4 text-foreground" />
                        <span className="text-foreground/80">
                          Zen MoDE architecture
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Shield className="w-4 h-4 text-foreground" />
                        <span className="text-foreground/80">
                          OpenAI-compatible API
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Model Categories Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                14 Models Across 4 Categories
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {MODEL_CATEGORIES.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 bg-background border border-border rounded-xl text-center hover:border-white/30 transition-all hover:-translate-y-1"
                  >
                    <div className="mx-auto w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-primary/10 border border-border">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {category.title}
                    </h3>
                    <p className="text-sm text-foreground mb-2">
                      {category.count}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Zen Section */}
        <section className="py-20 px-4 md:px-8 bg-background/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Why Zen Models?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {BENEFITS.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 bg-background border border-border rounded-xl text-center hover:border-white/30 transition-all"
                  >
                    <div className="mx-auto w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-primary/10 border border-border">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Zen5 Teaser */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-white/[0.02] via-white/[0.06] to-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-8 md:p-12 rounded-2xl border border-border bg-background/80 overflow-hidden"
            >
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground">
                Coming Soon
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-foreground" />
                <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Next Generation</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Zen 5 Ultra
              </h2>
              <p className="text-xl text-muted-foreground mb-6 max-w-2xl">
                2T+ parameter MoDE (Mixture of Distilled Experts). The largest open-weight model in history — trained on-chain via NVIDIA TEE confidential compute on{" "}
                <a href="https://hanzo.network" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline text-foreground">hanzo.network</a>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-lg bg-primary/5">
                  <div className="text-2xl font-bold text-foreground mb-1">2T+</div>
                  <div className="text-sm text-muted-foreground">Parameters</div>
                </div>
                <div className="p-4 rounded-lg bg-primary/5">
                  <div className="text-2xl font-bold text-foreground mb-1">MoDE</div>
                  <div className="text-sm text-muted-foreground">Mixture of Distilled Experts</div>
                </div>
                <div className="p-4 rounded-lg bg-primary/5">
                  <div className="text-2xl font-bold text-foreground mb-1">TEE</div>
                  <div className="text-sm text-muted-foreground">On-Chain Verifiable Training</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Private beta available. Researchers can request early access to preprints and weights under a special research license.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-sm gap-2"
                >
                  Request Research Access
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://hanzo.network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium border border-border bg-transparent hover:bg-secondary transition-colors text-sm text-foreground gap-2"
                >
                  <Globe className="w-4 h-4" />
                  On-Chain Training
                </a>
                <a
                  href="https://zenlm.org/docs/models#zen5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium border border-border bg-transparent hover:bg-secondary transition-colors text-sm text-foreground gap-2"
                >
                  Learn More
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Get Started
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-background border border-border rounded-xl text-center hover:border-white/30 transition-all hover:-translate-y-1"
              >
                <Link href="/zen/models" className="block">
                  <Brain className="w-8 h-8 mx-auto mb-4 text-foreground" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Model Catalog
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    All 14 models with specs, tiers, and pricing
                  </p>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 bg-background border border-border rounded-xl text-center hover:border-white/30 transition-all hover:-translate-y-1"
              >
                <Link href="/pricing" className="block">
                  <Layers className="w-8 h-8 mx-auto mb-4 text-foreground" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    API Pricing
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Transparent per-token pricing for all tiers
                  </p>
                </Link>
              </motion.div>

              <motion.a
                href="https://cloud.hanzo.ai/signup"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 bg-background border border-border rounded-xl text-center hover:border-white/30 transition-all hover:-translate-y-1"
              >
                <Globe className="w-8 h-8 mx-auto mb-4 text-foreground" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  API Access
                </h3>
                <p className="text-muted-foreground text-sm">
                  Get your API key and start building
                </p>
              </motion.a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-8 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to build with Zen?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                14 models, four tiers, one API. Start building today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/zen/models"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm bg-primary text-primary-foreground"

                >
                  Explore All Models
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/dev"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-secondary text-sm text-foreground"
                >
                  Try Hanzo Dev
                </Link>
                <a
                  href="https://cloud.hanzo.ai/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-secondary text-sm text-foreground"
                >
                  <Globe className="mr-2 h-4 w-4" />
                  Get API Key
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
