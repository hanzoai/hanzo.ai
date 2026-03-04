"use client"

import { motion } from "framer-motion"
import {
  Globe,
  ArrowRight,
  Layers,
  Zap,
  Terminal,
  Code2,
  Shield,
  Server,
  Lock,
  Cloud,
  Network,
  Rocket,
  BookOpen,
  Check,
} from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "Multi-Provider",
    description:
      "Unified API across Cloudflare, CoreDNS, Route53, GoDaddy, and DigitalOcean. Manage all your DNS from one interface.",
  },
  {
    icon: Zap,
    title: "Parallel Queries",
    description:
      "Query all providers simultaneously and merge results. Get a unified view of your DNS records across every provider.",
  },
  {
    icon: Terminal,
    title: "CLI Native",
    description:
      "Full CLI control with hanzo dns zones, hanzo dns add, and more. Script and automate your DNS workflows natively.",
  },
  {
    icon: Code2,
    title: "API First",
    description:
      "REST API for programmatic DNS management. Integrate DNS operations into your CI/CD pipelines and infrastructure code.",
  },
  {
    icon: Shield,
    title: "DNSSEC",
    description:
      "Built-in DNSSEC signing and automatic key rotation. Protect your domains from spoofing and cache poisoning attacks.",
  },
  {
    icon: Globe,
    title: "Edge DNS",
    description:
      "CoreDNS at the edge with Hanzo plugins. Low-latency resolution with custom middleware for advanced routing logic.",
  },
]

const useCases = [
  {
    icon: Rocket,
    title: "DevOps Automation",
    description:
      "Automate DNS record management as part of your deployment pipeline. Create, update, and clean up records programmatically.",
  },
  {
    icon: Cloud,
    title: "Multi-Cloud DNS",
    description:
      "Manage DNS across AWS, Cloudflare, and DigitalOcean from a single API. No more switching consoles.",
  },
  {
    icon: Network,
    title: "Domain Portfolio Management",
    description:
      "Manage hundreds of domains across multiple registrars and DNS providers from one unified interface.",
  },
]

const pricingTiers = [
  {
    name: "Starter",
    price: "Pay-as-you-go",
    period: "",
    description: "Usage-based pricing for getting started",
    features: [
      "Up to 5 zones",
      "2 DNS providers",
      "CLI and API access",
      "$0.10 per 10K queries",
    ],
    cta: "Get Started",
    ctaHref: "https://hanzo.id",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$20",
    period: "/month",
    description: "For teams managing production DNS",
    features: [
      "Unlimited zones",
      "All DNS providers",
      "DNSSEC management",
      "Audit logging",
      "Priority support",
    ],
    cta: "Subscribe",
    ctaHref: "https://hanzo.id",
    highlight: true,
  },
  {
    name: "Team",
    price: "$25",
    period: "/month",
    description: "For teams with shared DNS management",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Role-based access",
      "Shared audit log",
      "Priority support",
    ],
    cta: "Subscribe",
    ctaHref: "https://hanzo.id",
    highlight: false,
  },
  {
    name: "Enterprise",
    price: "$200",
    period: "/month",
    description: "For organizations with advanced needs",
    features: [
      "Everything in Team",
      "Edge DNS (CoreDNS)",
      "Custom plugins",
      "SLA guarantee",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    ctaHref: "/contact/sales",
    highlight: false,
  },
]

export default function DNSPage() {
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
            <Globe className="w-4 h-4 text-foreground" />
            <span className="text-sm font-medium text-foreground/80">
              Programmable DNS Infrastructure
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-foreground">Hanzo</span>{" "}
            <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              DNS
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-2xl md:text-3xl font-medium text-foreground mb-4"
          >
            Multi-provider DNS management
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            One API for Cloudflare, CoreDNS, Route53, and more. Parallel queries,
            DNSSEC, audit logging, and CLI-native workflows for infrastructure teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto"
          >
            <div className="bg-secondary/50 border border-border rounded-xl p-4">
              <div className="text-2xl font-bold text-foreground">5+</div>
              <div className="text-sm text-muted-foreground">Providers</div>
            </div>
            <div className="bg-secondary/50 border border-border rounded-xl p-4">
              <div className="text-2xl font-bold text-foreground">CLI</div>
              <div className="text-sm text-muted-foreground">Native</div>
            </div>
            <div className="bg-secondary/50 border border-border rounded-xl p-4">
              <div className="text-2xl font-bold text-foreground">DNSSEC</div>
              <div className="text-sm text-muted-foreground">Built-in</div>
            </div>
            <div className="bg-secondary/50 border border-border rounded-xl p-4">
              <div className="text-2xl font-bold text-foreground">Edge</div>
              <div className="text-sm text-muted-foreground">CoreDNS</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://docs.hanzo.ai/dns"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-accent text-primary-foreground font-medium rounded-full transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/hanzoai/dns"
              className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-border hover:border-neutral-500 text-foreground font-medium rounded-full transition-colors"
            >
              GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
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
              One API. Every Provider.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stop juggling provider consoles. Manage all your DNS from a single, unified interface.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-neutral-600 transition-colors"
              >
                <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-4 bg-primary/10">
                  <feature.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built for Infrastructure Teams
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Hanzo DNS sits between your applications and DNS providers,
                giving you a single control plane for all DNS operations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Server className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Provider-agnostic record management with automatic conflict resolution
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Audit logging for every DNS change with rollback support
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Sub-second propagation checks across global resolvers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    DNSSEC key management with automated rotation schedules
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Architecture Diagram */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-secondary/50 border border-border rounded-xl p-8"
            >
              <div className="space-y-4">
                <div className="bg-secondary border border-border rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Your Applications
                  </h4>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-background/50 border border-border rounded p-2 text-center text-muted-foreground">CI/CD</div>
                    <div className="bg-background/50 border border-border rounded p-2 text-center text-muted-foreground">CLI</div>
                    <div className="bg-background/50 border border-border rounded p-2 text-center text-muted-foreground">REST API</div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-6 bg-border" />
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2 text-center">
                    Hanzo DNS Control Plane
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-background/50 border border-border rounded p-2 text-center text-muted-foreground">Record Manager</div>
                    <div className="bg-background/50 border border-border rounded p-2 text-center text-muted-foreground">DNSSEC Engine</div>
                    <div className="bg-background/50 border border-border rounded p-2 text-center text-muted-foreground">Parallel Query</div>
                    <div className="bg-background/50 border border-border rounded p-2 text-center text-muted-foreground">Audit Log</div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-6 bg-border" />
                </div>

                <div className="bg-secondary border border-border rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    DNS Providers
                  </h4>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-background/50 border border-border rounded p-2 text-center text-muted-foreground">Cloudflare</div>
                    <div className="bg-background/50 border border-border rounded p-2 text-center text-muted-foreground">Route53</div>
                    <div className="bg-background/50 border border-border rounded p-2 text-center text-muted-foreground">CoreDNS</div>
                    <div className="bg-background/50 border border-border rounded p-2 text-center text-muted-foreground">GoDaddy</div>
                    <div className="bg-background/50 border border-border rounded p-2 text-center text-muted-foreground">DigitalOcean</div>
                    <div className="bg-background/50 border border-border rounded p-2 text-center text-muted-foreground">+ More</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CLI / Quickstart Code Example */}
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
              Get Started in Minutes
            </h2>
            <p className="text-xl text-muted-foreground">
              Three steps to unified DNS management
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
                terminal
              </span>
            </div>
            <pre className="p-4 overflow-x-auto text-sm">
              <code className="text-foreground/80">{`# Install the Hanzo CLI
curl -sSL https://hanzo.sh | sh

# Connect your DNS providers
hanzo dns provider add cloudflare --api-token $CF_TOKEN

# List all zones across providers
hanzo dns zones

# Add a DNS record
hanzo dns add A app.example.com 10.0.0.1

# Sync records from a provider
hanzo dns sync --provider cloudflare

# Query all providers in parallel
hanzo dns records example.com`}</code>
            </pre>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
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
              Use Cases
            </h2>
            <p className="text-xl text-muted-foreground">
              From startups to enterprise, Hanzo DNS scales with your infrastructure
            </p>
          </motion.div>

          <div className="space-y-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-neutral-600 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-primary/10 flex-shrink-0">
                    <useCase.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Start free. Scale as you grow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`bg-secondary/50 border rounded-xl p-6 relative ${
                  tier.highlight
                    ? "border-primary"
                    : "border-border"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Popular
                  </div>
                )}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {tier.name}
                </h3>
                <p className="text-3xl font-bold text-foreground mb-1">
                  {tier.price}
                  <span className="text-sm text-muted-foreground font-normal">
                    {tier.period}
                  </span>
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  {tier.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-foreground flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.ctaHref}
                  className={`inline-flex items-center justify-center w-full px-6 py-2.5 font-medium rounded-full transition-colors text-sm ${
                    tier.highlight
                      ? "bg-primary hover:bg-accent text-primary-foreground"
                      : "bg-transparent border border-border hover:border-neutral-500 text-foreground"
                  }`}
                >
                  {tier.cta}
                </a>
              </motion.div>
            ))}
          </div>
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
                Take Control of Your DNS
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
                Stop managing DNS in five different consoles. One API, every provider, zero vendor lock-in.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://docs.hanzo.ai/dns"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-accent text-primary-foreground font-medium rounded-full transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/hanzoai/dns"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-border hover:border-neutral-500 text-foreground font-medium rounded-full transition-colors"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
