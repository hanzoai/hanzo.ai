'use client'

import React from "react"
import { motion } from "framer-motion"
import {
  Github,
  Wallet,
  DollarSign,
  Heart,
  GitBranch,
  CheckCircle,
  Eye,
  ArrowRight,
  Coins,
} from "lucide-react"

interface OSSComputeDividendsProps {
  variant?: "full" | "banner"
}

const PAYOUT_OPTIONS = ["USD", "Hanzo Network", "ETH", "SOL", "USDC", "more"]

const STEPS = [
  {
    icon: Github,
    title: "Connect GitHub or GitLab",
    body: "We verify your OSS contributions across public repos",
  },
  {
    icon: Wallet,
    title: "Link a wallet",
    body: "EVM, Solana, Cosmos, or any chain. USD via Stripe also supported.",
  },
  {
    icon: DollarSign,
    title: "Collect your share",
    body: "Payouts based on SBOM attribution, contribution weight, and compute hours",
  },
]

export default function OSSComputeDividends({ variant = "full" }: OSSComputeDividendsProps) {
  if (variant === "banner") {
    return (
      <section className="py-10 px-4 md:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="rounded-xl border border-primary/25 p-6 md:p-8"
            style={{ backgroundColor: "color-mix(in srgb, var(--primary) 5%, transparent)" }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1 min-w-0">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)",
                    color: "var(--primary)",
                  }}
                >
                  <Heart className="w-3.5 h-3.5" />
                  Open Source Compute Dividends
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  25% of compute goes back to OSS authors
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                  Every Hanzo deployment tracks software dependencies via SBOM. When your code powers compute on Hanzo,
                  the authors get paid — automatically.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {PAYOUT_OPTIONS.map((opt) => (
                    <span
                      key={opt}
                      className="inline-block text-xs px-2.5 py-0.5 rounded-full border border-border text-muted-foreground"
                    >
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:min-w-[180px]">
                <a
                  href="/signup?ref=oss-dividends"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-medium text-sm transition-all hover:opacity-90 bg-primary text-primary-foreground whitespace-nowrap"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Connect GitHub
                </a>
                <a
                  href="/open-source#dividends"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-medium text-sm transition-colors border border-border bg-transparent hover:bg-secondary text-foreground whitespace-nowrap"
                >
                  How payouts work
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  // full variant
  return (
    <section className="py-20 px-4 md:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
            style={{
              backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)",
              color: "var(--primary)",
            }}
          >
            <Heart className="w-3.5 h-3.5" />
            Open Source Compute Dividends
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
            25% of compute goes back to the OSS authors
            <br className="hidden md:block" /> who made it possible
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Every Hanzo deployment tracks software dependencies via SBOM. When your code powers compute on Hanzo,
            the authors get paid &mdash; automatically. Connect your GitHub, verify your contributions, pick a wallet.
          </p>
        </motion.div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className="relative rounded-xl border border-border bg-secondary/30 p-6"
              >
                <span className="absolute top-4 right-4 text-xs font-mono text-muted-foreground/40">
                  0{i + 1}
                </span>
                <div
                  className="rounded-full p-2 w-fit mb-4"
                  style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.body}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Transparency callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="rounded-xl border border-primary/30 p-6 mb-10"
          style={{ backgroundColor: "color-mix(in srgb, var(--primary) 6%, transparent)" }}
        >
          <div className="flex items-start gap-3">
            <div
              className="mt-0.5 flex-shrink-0 rounded-full p-1.5"
              style={{ backgroundColor: "color-mix(in srgb, var(--primary) 20%, transparent)" }}
            >
              <Eye className="w-4 h-4" style={{ color: "var(--primary)" }} />
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-sm mb-1">Fully transparent payouts</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                All payouts are public. Every project, every contributor, every amount. Communities can vote to
                customize their split &mdash; for example, 10% to founder, 5% to maintainers, 85% to all contributors.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.27 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <a
            href="/signup?ref=oss-dividends"
            className="inline-flex items-center px-6 py-3 rounded-full font-medium text-sm transition-all hover:opacity-90 bg-primary text-primary-foreground"
          >
            <Github className="w-4 h-4 mr-2" />
            Connect GitHub
          </a>
          <a
            href="/open-source#dividends"
            className="inline-flex items-center px-6 py-3 rounded-full font-medium text-sm transition-colors border border-border bg-transparent hover:bg-secondary text-foreground"
          >
            See how payouts work
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </motion.div>

        {/* Payout option pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.32 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          <span className="text-xs text-muted-foreground mr-1">Supported payouts:</span>
          {PAYOUT_OPTIONS.map((opt) => (
            <span
              key={opt}
              className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full border border-border text-muted-foreground bg-secondary/30"
            >
              <Coins className="w-3 h-3" />
              {opt}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
