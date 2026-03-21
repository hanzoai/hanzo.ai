"use client"

import { motion } from "framer-motion"
import {
  Gift,
  ArrowRight,
  Share2,
  UserPlus,
  DollarSign,
  TrendingUp,
  Star,
  Crown,
  Gem,
  Code,
  Check,
} from "lucide-react"

const tiers = [
  {
    name: "Starter",
    range: "0 - 9 referrals",
    perReferral: "$20",
    revenueShare: "—",
    maxCredits: "$20,000",
    creditExpiry: "90 days",
    highlight: false,
  },
  {
    name: "Growth",
    range: "10 - 49 referrals",
    perReferral: "$30",
    revenueShare: "2.5%",
    maxCredits: "$20,000",
    creditExpiry: "180 days",
    highlight: true,
  },
  {
    name: "Pro",
    range: "50 - 199 referrals",
    perReferral: "$50",
    revenueShare: "5%",
    maxCredits: "$20,000",
    creditExpiry: "1 year",
    highlight: false,
  },
  {
    name: "Partner",
    range: "200+ referrals",
    perReferral: "$100",
    revenueShare: "7.5%",
    maxCredits: "$150,000",
    creditExpiry: "Never",
    highlight: false,
  },
]

const steps = [
  {
    icon: Share2,
    title: "Share Your Link",
    description:
      "Get your unique referral link from the console and share it with developers, teams, and communities.",
  },
  {
    icon: UserPlus,
    title: "Friend Signs Up",
    description:
      "When someone creates a Hanzo account through your link, they get $20 in free credits to start building.",
  },
  {
    icon: DollarSign,
    title: "Both Earn Credits",
    description:
      "You receive $20 in credits instantly. Unlock revenue share as you grow — up to 7.5% lifetime at Partner tier.",
  },
]

const ossPackages = [
  { name: "@hanzo/bot", weight: "2.0x" },
  { name: "@hanzo/agents", weight: "2.0x" },
  { name: "@hanzo/mcp", weight: "1.5x" },
  { name: "@hanzo/gateway", weight: "1.5x" },
  { name: "@hanzo/commerce", weight: "1.5x" },
  { name: "@hanzo/tasks", weight: "1.5x" },
  { name: "@hanzo/auto", weight: "1.0x" },
  { name: "@hanzo/ui", weight: "1.0x" },
  { name: "@hanzo/flow", weight: "1.0x" },
  { name: "@hanzo/studio", weight: "1.0x" },
  { name: "@hanzo/search", weight: "1.0x" },
]

export default function ReferralPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)",
              filter: "blur(100px)",
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-border mb-8"
          >
            <Gift className="w-4 h-4 text-foreground" />
            <span className="text-sm font-medium text-foreground/80">
              Referral Program
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-foreground">Earn While</span>{" "}
            <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              You Build
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Refer developers to Hanzo and earn $20 in AI credits per signup.
            Unlock revenue share up to 7.5% lifetime as you grow to Partner tier.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto"
          >
            <div className="bg-secondary/50 border border-border rounded-xl p-4">
              <div className="text-2xl font-bold text-foreground">$20</div>
              <div className="text-sm text-muted-foreground">Per Referral</div>
            </div>
            <div className="bg-secondary/50 border border-border rounded-xl p-4">
              <div className="text-2xl font-bold text-foreground">7.5%</div>
              <div className="text-sm text-muted-foreground">Max Rev Share</div>
            </div>
            <div className="bg-secondary/50 border border-border rounded-xl p-4">
              <div className="text-2xl font-bold text-foreground">$150K</div>
              <div className="text-sm text-muted-foreground">Partner Credits</div>
            </div>
            <div className="bg-secondary/50 border border-border rounded-xl p-4">
              <div className="text-2xl font-bold text-foreground">4 Tiers</div>
              <div className="text-sm text-muted-foreground">To Unlock</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://console.hanzo.ai/referral"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-accent text-primary-foreground font-medium rounded-full transition-colors"
            >
              Start Referring
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://docs.hanzo.ai/referral"
              className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-border hover:border-neutral-500 text-foreground font-medium rounded-full transition-colors"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three steps to start earning. No minimum payout, no hidden terms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-neutral-600 transition-colors relative"
              >
                <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-secondary border border-border flex items-center justify-center text-sm font-bold text-foreground">
                  {index + 1}
                </div>
                <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-4 bg-primary/10">
                  <step.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Earn More as You Grow
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four tiers with increasing rewards. The more you refer, the more
              you earn per referral.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => {
              const icons = [Star, TrendingUp, Crown, Gem]
              const TierIcon = icons[index]

              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`rounded-xl p-6 flex flex-col ${
                    tier.highlight
                      ? "bg-primary/10 border-2 border-foreground/20"
                      : "bg-secondary/50 border border-border"
                  }`}
                >
                  <div className="mb-6">
                    <div className="h-10 w-10 rounded-lg flex items-center justify-center mb-3 bg-primary/10">
                      <TierIcon className="h-5 w-5 text-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {tier.name}
                    </h3>
                    <div className="text-sm text-muted-foreground">
                      {tier.range}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6 flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground py-1">
                      <Check className="w-3.5 h-3.5 text-foreground/60 flex-shrink-0" />
                      {tier.perReferral} per referral
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground py-1">
                      <Check className="w-3.5 h-3.5 text-foreground/60 flex-shrink-0" />
                      {tier.revenueShare} revenue share
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground py-1">
                      <Check className="w-3.5 h-3.5 text-foreground/60 flex-shrink-0" />
                      Up to {tier.maxCredits} total
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground py-1">
                      <Check className="w-3.5 h-3.5 text-foreground/60 flex-shrink-0" />
                      {tier.creditExpiry} expiry
                    </div>
                  </div>

                  <a
                    href="https://console.hanzo.ai/referral"
                    className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 font-medium rounded-full transition-colors text-sm ${
                      tier.highlight
                        ? "bg-primary hover:bg-accent text-primary-foreground"
                        : "bg-transparent border border-border hover:border-neutral-500 text-foreground"
                    }`}
                  >
                    Get Started
                  </a>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* OSS Contributors */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Open Source Contributors
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              25% of platform revenue goes to open-source developers who build
              Hanzo. Contributions are weighted by component impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-secondary border border-border rounded-xl overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-neutral-700" />
                <div className="w-3 h-3 rounded-full bg-neutral-700" />
                <div className="w-3 h-3 rounded-full bg-neutral-700" />
              </div>
              <span className="text-xs text-muted-foreground ml-2">
                component weights
              </span>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ossPackages.map((pkg) => (
                  <div
                    key={pkg.name}
                    className="flex items-center justify-between px-4 py-2.5 bg-secondary/50 border border-border rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-foreground/60" />
                      <span className="text-sm font-mono text-foreground">
                        {pkg.name}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {pkg.weight}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
                Monthly payouts. $1 minimum. Weighted by merged PRs and
                component impact scores.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-secondary/50 border border-border rounded-2xl p-8 md:p-12 text-center overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Start Referring Today
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
                Get your referral link from the console and start earning
                credits and revenue share immediately.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://console.hanzo.ai/referral"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-accent text-primary-foreground font-medium rounded-full transition-colors"
                >
                  Start Referring
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/hanzoai"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-border hover:border-neutral-500 text-foreground font-medium rounded-full transition-colors"
                >
                  Contribute on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
