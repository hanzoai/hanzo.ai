"use client"

import { motion } from "framer-motion"
import {
  Heart,
  ArrowRight,
  GitBranch,
  FileCode2,
  BarChart3,
  DollarSign,
  Code,
  Github,
  ExternalLink,
} from "lucide-react"

const steps = [
  {
    step: "01",
    icon: FileCode2,
    title: "SBOM Attribution",
    description:
      "Every deployment generates a Software Bill of Materials. We trace every direct and transitive dependency running in Hanzo production infrastructure.",
  },
  {
    step: "02",
    icon: GitBranch,
    title: "Git Blame Analysis",
    description:
      "For each dependency, we walk the commit history to identify authors by line count. Every line of code that runs in production is attributed to its author.",
  },
  {
    step: "03",
    icon: BarChart3,
    title: "Component Weighting",
    description:
      "Not all code is equal. Core infrastructure and gateway code carries a higher multiplier than UI components. Weights reflect operational impact.",
  },
  {
    step: "04",
    icon: DollarSign,
    title: "Monthly Payouts",
    description:
      "25% of platform revenue is pooled monthly and distributed proportionally. Connect your Git identity and wallet at console.hanzo.ai/contributor to start receiving payouts.",
  },
]

const componentWeights = [
  { category: "Core Infrastructure", examples: "@hanzo/bot, @hanzo/agents, @hanzo/node", weight: "2.0x" },
  { category: "MCP / Gateway", examples: "@hanzo/mcp, @hanzo/gateway, @hanzo/llm", weight: "1.5x" },
  { category: "UI / Tools", examples: "@hanzo/ui, @hanzo/studio, @hanzo/flow, @hanzo/search", weight: "1.0x" },
]

export default function OpenSourceFundPage() {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-20 px-4 md:px-8 lg:px-12 overflow-hidden">
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
              Open Source Fund
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              <span className="text-foreground">25% of Revenue</span>
              <br />
              <span className="text-muted-foreground">to Open Source</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto"
            >
              A quarter of all platform revenue goes directly to the open source developers
              whose code powers Hanzo infrastructure. Attribution is automated, transparent,
              and proportional to actual production usage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto"
            >
              <div className="bg-secondary/50 border border-border rounded-xl p-4">
                <div className="text-2xl font-bold text-foreground">25%</div>
                <div className="text-xs text-muted-foreground">Revenue Allocated</div>
              </div>
              <div className="bg-secondary/50 border border-border rounded-xl p-4">
                <div className="text-2xl font-bold text-foreground">Monthly</div>
                <div className="text-xs text-muted-foreground">Payout Cycle</div>
              </div>
              <div className="bg-secondary/50 border border-border rounded-xl p-4">
                <div className="text-2xl font-bold text-foreground">$1 min</div>
                <div className="text-xs text-muted-foreground">Payout Threshold</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="https://github.com/hanzoai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3.5 rounded-full font-medium text-sm transition-all hover:opacity-90 bg-primary text-primary-foreground"
              >
                <Github className="w-4 h-4 mr-2" />
                Start Contributing
              </a>
              <a
                href="https://console.hanzo.ai/contributor"
                className="inline-flex items-center px-7 py-3.5 rounded-full font-medium text-sm transition-colors border border-border bg-transparent hover:bg-secondary text-foreground"
              >
                Register as Contributor
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 md:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                How It Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
                Automated attribution from deployment to payout. No applications, no committees, no gatekeepers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((item, i) => {
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
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Component Weights */}
        <section className="py-20 px-4 md:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Component Weights
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
                Payouts are weighted by component impact. Core infrastructure that keeps the platform running
                carries a higher multiplier than frontend components.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-secondary border border-border rounded-xl overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-neutral-700" />
                  <div className="w-3 h-3 rounded-full bg-neutral-700" />
                  <div className="w-3 h-3 rounded-full bg-neutral-700" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">
                  weight multipliers
                </span>
              </div>
              <div className="divide-y divide-border">
                {componentWeights.map((row) => (
                  <div
                    key={row.category}
                    className="flex items-center justify-between px-6 py-5"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Code className="w-4 h-4 text-foreground/60" />
                        <span className="text-sm font-semibold text-foreground">
                          {row.category}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground font-mono">
                        {row.examples}
                      </span>
                    </div>
                    <span className="text-lg font-bold text-foreground">
                      {row.weight}
                    </span>
                  </div>
                ))}
              </div>
              <div className="px-6 py-4 border-t border-border text-xs text-muted-foreground">
                Weights are applied after line-count attribution. A contributor with 1,000 lines in a 2.0x
                component earns the equivalent of 2,000 lines in a 1.0x component.
              </div>
            </motion.div>
          </div>
        </section>

        {/* How to Participate */}
        <section className="py-20 px-4 md:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                How to Participate
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
                Two steps. No application process. If your code runs in production, you earn.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="rounded-xl border border-border bg-secondary/30 p-6 relative"
              >
                <span className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-secondary border border-border flex items-center justify-center text-sm font-bold text-foreground">
                  1
                </span>
                <h3 className="font-semibold text-foreground mb-2">Contribute</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Submit pull requests to any <code className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded text-foreground/80">@hanzo/*</code> repository
                  on GitHub. Bug fixes, features, documentation, tests &mdash; all contributions count.
                </p>
                <a
                  href="https://github.com/hanzoai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Browse Repos
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="rounded-xl border border-border bg-secondary/30 p-6 relative"
              >
                <span className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-secondary border border-border flex items-center justify-center text-sm font-bold text-foreground">
                  2
                </span>
                <h3 className="font-semibold text-foreground mb-2">Register</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Sign in at <code className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded text-foreground/80">console.hanzo.ai/contributor</code> with
                  your GitHub account. Link a wallet or Stripe account to receive payouts automatically.
                </p>
                <a
                  href="https://console.hanzo.ai/contributor"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-white transition-colors"
                >
                  Register Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
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
              Join the Fund
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Start Contributing
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed"
            >
              Every merged PR earns a share of platform revenue. No applications, no committees.
              Your code speaks for itself.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="https://github.com/hanzoai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-full font-medium text-base transition-all hover:opacity-90 bg-primary text-primary-foreground"
              >
                <Github className="w-4 h-4 mr-2" />
                Start Contributing
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="/open-source"
                className="inline-flex items-center px-8 py-4 rounded-full font-medium text-base transition-colors border border-border bg-transparent hover:bg-secondary text-foreground"
              >
                View All Open Source
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
