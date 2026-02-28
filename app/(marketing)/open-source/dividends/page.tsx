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
  ShieldCheck,
  Users,
  Coins,
  FileCode2,
  ChevronDown,
  ChevronUp,
  BarChart3,
} from "lucide-react"

const HOW_IT_WORKS = [
  {
    step: "01",
    icon: FileCode2,
    title: "SBOM Detection",
    body: "When software deploys on Hanzo, we generate a Software Bill of Materials using Syft + CycloneDX, mapping every direct and transitive dependency to its contributors.",
  },
  {
    step: "02",
    icon: BarChart3,
    title: "Contribution Weighting",
    body: "Each dependency is weighted by usage intensity (CPU/memory time), commit attribution, and maintainer status. Multiple authors share proportionally.",
  },
  {
    step: "03",
    icon: Wallet,
    title: "Wallet Verification",
    body: "Connect GitHub/GitLab to claim your author identity. Link any EVM, Solana, Cosmos, or L2 wallet, or USD via Stripe.",
  },
  {
    step: "04",
    icon: DollarSign,
    title: "Automatic Payout",
    body: "Payouts run weekly. You see real-time dashboards of what's accruing. Communities customize their own split rules.",
  },
]

const FAQ_ITEMS = [
  {
    q: "What's the minimum to receive payouts?",
    a: "No minimum. Even $0.01 in compute time earns an allocation.",
  },
  {
    q: "How are contributions verified?",
    a: "Via GitHub/GitLab commit history, verified email, and signed commits. We use the same provenance data as SLSA.",
  },
  {
    q: "Can a project set their own distribution rules?",
    a: "Yes. Project maintainers can create a .hanzo-dividends.json at the repo root specifying how to split (e.g., 70% pro-rata to all contributors, 20% to maintainers, 10% to a foundation).",
  },
  {
    q: "What chains are supported?",
    a: "Ethereum, Polygon, Arbitrum, Optimism, Base, Solana, Cosmos (via IBC), BNB Chain, Avalanche, and Hanzo Network. USD via Stripe. More on request.",
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-secondary/30 transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-medium text-foreground text-sm">{q}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4 bg-secondary/20">
          {a}
        </div>
      )}
    </div>
  )
}

export default function DividendsPage() {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-20 px-4 md:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10"
              style={{
                background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
                filter: "blur(90px)",
              }}
            />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
              style={{
                backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)",
                color: "var(--primary)",
              }}
            >
              <Heart className="w-3.5 h-3.5" />
              OSS Compute Dividends
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              Get paid when your open source code
              <br className="hidden md:block" />
              <span className="text-muted-foreground"> powers AI infrastructure</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto"
            >
              Hanzo allocates up to{" "}
              <span className="text-foreground font-semibold">25% of compute costs</span> to OSS authors whose
              software is running in production. Connect your Git identity, verify contributions, collect automatically.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="/signup?ref=oss-dividends"
                className="inline-flex items-center px-7 py-3.5 rounded-full font-medium text-sm transition-all hover:opacity-90 bg-primary text-primary-foreground"
              >
                <Github className="w-4 h-4 mr-2" />
                Connect GitHub
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center px-7 py-3.5 rounded-full font-medium text-sm transition-colors border border-border bg-transparent hover:bg-secondary text-foreground"
              >
                How it works
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Social proof */}
        <section className="py-8 px-4 md:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-center"
            >
              {[
                { value: "2,500+", label: "OSS projects tracked" },
                { value: "50,000+", label: "contributors" },
                { value: "$1.2M", label: "allocated to date" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="py-20 px-4 md:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">How it works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
                Automated SBOM-based attribution from deployment to payout.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {HOW_IT_WORKS.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.07 }}
                    className="relative rounded-xl border border-border bg-secondary/30 p-6"
                  >
                    <span className="absolute top-4 right-4 text-xs font-mono text-muted-foreground/40">
                      {item.step}
                    </span>
                    <div
                      className="rounded-full p-2 w-fit mb-4"
                      style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)" }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Transparency callout */}
        <section className="py-12 px-4 md:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-primary/30 p-8 text-center"
              style={{ backgroundColor: "color-mix(in srgb, var(--primary) 6%, transparent)" }}
            >
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-5"
                style={{ backgroundColor: "color-mix(in srgb, var(--primary) 20%, transparent)" }}
              >
                <Eye className="w-5 h-5" style={{ color: "var(--primary)" }} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">All payouts are public</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
                Every project, every contributor, every amount is visible in our public ledger. Communities can vote
                to customize their split &mdash; for example, 10% to founder, 5% to maintainers, 85% to all
                contributors. Configure via{" "}
                <code className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded text-foreground/80">
                  .hanzo-dividends.json
                </code>{" "}
                at your repo root.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Trust badges */}
        <section className="py-12 px-4 md:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {[
                { icon: ShieldCheck, label: "SBOM-Verified", sub: "Syft + CycloneDX" },
                { icon: Eye, label: "Fully Transparent", sub: "Public ledger" },
                { icon: Users, label: "Community Governed", sub: "Custom split rules" },
                { icon: Coins, label: "Multi-Chain", sub: "10+ networks" },
              ].map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: 0.1 + i * 0.04 }}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-border bg-secondary/30"
                >
                  <badge.icon className="w-4 h-4 flex-shrink-0" style={{ color: "var(--primary)" }} />
                  <div>
                    <div className="text-xs font-semibold text-foreground">{badge.label}</div>
                    <div className="text-[11px] text-muted-foreground">{badge.sub}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 md:px-8 border-t border-border">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Frequently asked questions</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-3"
            >
              {FAQ_ITEMS.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24 px-4 md:px-8 border-t border-border relative overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 bg-primary/10 text-foreground/70"
            >
              <Heart className="w-3.5 h-3.5" />
              Join the program
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Start earning from your contributions
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed"
            >
              If your code powers Hanzo infrastructure, you deserve to be paid for it. Join 50,000+ contributors
              already tracking their compute dividends.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="/signup?ref=oss-dividends"
                className="inline-flex items-center px-8 py-4 rounded-full font-medium text-base transition-all hover:opacity-90 bg-primary text-primary-foreground"
              >
                <Github className="w-4 h-4 mr-2" />
                Join the program
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="/open-source"
                className="inline-flex items-center px-8 py-4 rounded-full font-medium text-base transition-colors border border-border bg-transparent hover:bg-secondary text-foreground"
              >
                Back to Open Source
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
