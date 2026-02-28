'use client'

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, GitBranch, Star, Heart, ArrowRight, ExternalLink, Code, Building2, Scale, Sparkles, Check, Wallet, DollarSign, Coins, ShieldCheck, Eye, Users } from "lucide-react";
import OSSCatalog from "@/components/oss/OSSCatalog"
import OSSComputeDividends from "@/components/oss/OSSComputeDividends";

// Real org repo counts (fallbacks verified 2026-02-27; refreshed dynamically)
const ORG_NAMES = ["hanzoai", "luxfi", "zenlm", "hanzo-js", "hanzo-apps", "zoo-labs"];
const ORG_DEFAULTS: Record<string, number> = {
  hanzoai: 303, luxfi: 289, zenlm: 83, "hanzo-js": 15, "hanzo-apps": 8, "zoo-labs": 25,
};

function useOSSStats() {
  const [totalRepos, setTotalRepos] = useState(
    Object.values(ORG_DEFAULTS).reduce((a, b) => a + b, 0)
  );
  useEffect(() => {
    let sum = 0;
    let fetched = 0;
    ORG_NAMES.forEach(org => {
      fetch(`https://api.github.com/orgs/${org}`)
        .then(r => r.ok ? r.json() : null)
        .then(d => {
          if (d?.public_repos) sum += d.public_repos;
          else sum += ORG_DEFAULTS[org];
          fetched++;
          if (fetched === ORG_NAMES.length) setTotalRepos(sum);
        })
        .catch(() => { fetched++; sum += ORG_DEFAULTS[org]; if (fetched === ORG_NAMES.length) setTotalRepos(sum); });
    });
  }, []);
  return totalRepos;
}

const OSS_FOUNDATIONS = [
  { name: "Python", description: "The language powering our ML/AI stack", url: "https://python.org", github: "https://github.com/python/cpython", creator: "Python Software Foundation", license: "PSF", emoji: "🐍" },
  { name: "Rust", description: "Systems language for our high-performance runtimes", url: "https://rust-lang.org", github: "https://github.com/rust-lang/rust", creator: "Rust Foundation", license: "MIT/Apache-2.0", emoji: "⚙️" },
  { name: "Go", description: "Powers our gateway, blockchain, and infra tooling", url: "https://go.dev", github: "https://github.com/golang/go", creator: "Go Authors / Google", license: "BSD-3-Clause", emoji: "🐹" },
  { name: "TypeScript", description: "The backbone of our developer SDKs and web apps", url: "https://typescriptlang.org", github: "https://github.com/microsoft/TypeScript", creator: "Microsoft", license: "Apache-2.0", emoji: "🔷" },
  { name: "React", description: "Powering every UI we ship", url: "https://react.dev", github: "https://github.com/facebook/react", creator: "Meta Open Source", license: "MIT", emoji: "⚛️" },
  { name: "Next.js", description: "Every hanzo.ai product is built on Next.js", url: "https://nextjs.org", github: "https://github.com/vercel/next.js", creator: "Vercel", license: "MIT", emoji: "▲" },
  { name: "PostgreSQL", description: "The database underlying all our stateful services", url: "https://postgresql.org", github: "https://github.com/postgres/postgres", creator: "PostgreSQL Global Development Group", license: "PostgreSQL License", emoji: "🐘" },
  { name: "Redis", description: "Fast caching and pub/sub throughout our platform", url: "https://redis.io", github: "https://github.com/redis/redis", creator: "Redis Ltd. / Salvatore Sanfilippo", license: "BSD-3-Clause", emoji: "🔴" },
  { name: "PyTorch", description: "Foundation of our ML training and inference", url: "https://pytorch.org", github: "https://github.com/pytorch/pytorch", creator: "Meta AI Research", license: "BSD-3-Clause", emoji: "🔥" },
  { name: "Kubernetes", description: "Orchestrates every workload in production", url: "https://kubernetes.io", github: "https://github.com/kubernetes/kubernetes", creator: "CNCF / Google", license: "Apache-2.0", emoji: "☸️" },
  { name: "Docker", description: "Containers make our 260+ MCP tools portable", url: "https://docker.com", github: "https://github.com/moby/moby", creator: "Docker / Moby Project", license: "Apache-2.0", emoji: "🐳" },
  { name: "OpenTelemetry", description: "Observability across every service", url: "https://opentelemetry.io", github: "https://github.com/open-telemetry/opentelemetry-specification", creator: "CNCF", license: "Apache-2.0", emoji: "📊" },
]

const COMMITMENTS = [
  {
    title: "We ship open source first",
    body: "Every tool we build for ourselves gets published. If it's useful to us, it belongs to the community. No internal-only forks."
  },
  {
    title: "We contribute upstream",
    body: "When we find bugs or missing features in projects we depend on, we fix them upstream — not in private patches."
  },
  {
    title: "We never lock in what we open",
    body: "Anything published under MIT or Apache-2.0 stays that way. We will never relicense open repos to extract commercial value."
  },
  {
    title: "We credit our foundations",
    body: "Our platform is built on hundreds of open-source projects. We acknowledge, link to, and financially support the communities and maintainers who make this possible."
  },
  {
    title: "We fund what we depend on",
    body: "Through GitHub Sponsors, Open Collective, and direct partnerships, we invest back into the projects that power Hanzo."
  },
  {
    title: "We welcome all contributors",
    body: "Good code can come from anywhere. We maintain a contributor-friendly CONTRIBUTING.md, respond to PRs within 48 hours on active repos, and recognize every contributor."
  },
]

const OpenSource = () => {
  const totalRepos = useOSSStats();
  const stats = [
    { label: "Public Repositories", value: `${totalRepos}+`, icon: Code },
    { label: "GitHub Organizations", value: "6", icon: Building2 },
    { label: "Open License", value: "MIT/Apache", icon: Scale },
    { label: "Open-Weight Models", value: "90+", icon: Sparkles },
  ];

  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15"
              style={{
                background: `radial-gradient(circle, var(--primary) 0%, transparent 70%)`,
                filter: "blur(100px)",
              }}
            />
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
                style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)", color: "var(--primary)" }}
              >
                <Github className="w-3.5 h-3.5" />
                Open Source First
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
              >
                <span className="text-foreground">Building in the</span>
                <br />
                <span className="text-muted-foreground">open.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto"
              >
                Open source isn&apos;t a strategy for us &mdash; it&apos;s how we work. We publish everything we build,
                contribute upstream, and stand on the shoulders of the incredible engineers who came before us.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="flex flex-wrap items-center justify-center gap-4 mb-12"
              >
                <a
                  href="https://github.com/hanzoai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm bg-primary text-primary-foreground"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
                <a
                  href="https://github.com/hanzoai/hanzo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-secondary text-sm text-foreground"
                >
                  <Star className="w-4 h-4 mr-2" />
                  Star Our Repos
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="bg-secondary/50 border border-border rounded-xl p-4"
                    >
                      <Icon className="w-5 h-5 text-muted-foreground mb-2 mx-auto" />
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Standing on the Shoulders of Giants */}
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
                Standing on the Shoulders of Giants
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hanzo is built on top of extraordinary open-source work. We owe a debt to every one of these projects and their maintainers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {OSS_FOUNDATIONS.map((foundation, i) => (
                <motion.a
                  key={foundation.name}
                  href={foundation.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="group block rounded-xl border border-border bg-secondary/30 p-4 hover:border-primary/50 hover:bg-secondary/60 transition-all"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{foundation.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors truncate">
                        {foundation.name}
                      </div>
                      <div className="text-xs text-muted-foreground truncate">
                        <a
                          href={foundation.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-foreground transition-colors"
                          onClick={e => e.stopPropagation()}
                        >
                          {foundation.creator}
                        </a>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                    {foundation.description}
                  </p>
                  <span className="inline-block font-mono text-xs bg-muted px-1.5 py-0.5 rounded text-foreground/70">
                    {foundation.license}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Stewardship Commitments */}
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
                Our Stewardship Commitments
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We hold ourselves to explicit, public commitments — not vague marketing language.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {COMMITMENTS.map((commitment, i) => (
                <motion.div
                  key={commitment.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="rounded-xl border border-border bg-secondary/30 p-5"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="mt-0.5 flex-shrink-0 rounded-full p-1"
                      style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)" }}
                    >
                      <Check className="w-3.5 h-3.5" style={{ color: "var(--primary)" }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">{commitment.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{commitment.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* OSS Revenue Sharing */}
        <section className="py-20 px-4 md:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-center mb-12"
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
                style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)", color: "var(--primary)" }}
              >
                <Coins className="w-3.5 h-3.5" />
                Revenue Sharing Program
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Earn from Open Source
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We dedicate <span className="text-foreground font-semibold">25% of all compute costs</span> to
                open source &mdash; distributed transparently based on verified Software Bills of Materials (SBOMs).
              </p>
            </motion.div>

            {/* How it works — 4 steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {[
                {
                  step: "01",
                  icon: GitBranch,
                  title: "Connect Your Git",
                  body: "Sign in with GitHub or GitLab to verify your contributions across Hanzo repos and the upstream projects we depend on.",
                },
                {
                  step: "02",
                  icon: Wallet,
                  title: "Connect Your Wallet",
                  body: "Link a wallet on any major chain (Ethereum, Solana, Polygon, etc.) or choose direct USD payout.",
                },
                {
                  step: "03",
                  icon: ShieldCheck,
                  title: "SBOM Verification",
                  body: "We trace every OSS dependency running in production and match it to contributors via Software Bills of Materials.",
                },
                {
                  step: "04",
                  icon: DollarSign,
                  title: "Transparent Payouts",
                  body: "Earn proportional to your code's actual usage. All distributions are public and auditable on-chain.",
                },
              ].map((card, i) => (
                <motion.div
                  key={card.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="relative rounded-xl border border-border bg-secondary/30 p-6"
                >
                  <span className="absolute top-4 right-4 text-xs font-mono text-muted-foreground/50">
                    {card.step}
                  </span>
                  <div
                    className="flex-shrink-0 rounded-full p-2 w-fit mb-4"
                    style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)" }}
                  >
                    <card.icon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-2">{card.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{card.body}</p>
                </motion.div>
              ))}
            </div>

            {/* Feature badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-3 mb-10"
            >
              {[
                { icon: ShieldCheck, label: "SBOM-Verified", sub: "Every payout traced to actual production usage" },
                { icon: Eye, label: "Fully Transparent", sub: "All distributions are public and auditable" },
                { icon: Users, label: "Community Governed", sub: "Projects can customize their own payout splits" },
                { icon: Coins, label: "Multi-Chain", sub: "Payout in USD, Hanzo Network, or AI coin" },
              ].map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: 0.25 + i * 0.04 }}
                  className="group flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-border bg-secondary/30 hover:border-primary/40 transition-colors"
                >
                  <badge.icon className="w-4 h-4 flex-shrink-0" style={{ color: "var(--primary)" }} />
                  <div>
                    <div className="text-xs font-semibold text-foreground">{badge.label}</div>
                    <div className="text-[11px] text-muted-foreground leading-tight">{badge.sub}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Outreach callout */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="rounded-xl border border-primary/20 p-5 mb-10 text-center"
              style={{ backgroundColor: "color-mix(in srgb, var(--primary) 5%, transparent)" }}
            >
              <p className="text-sm text-foreground">
                If your code powers Hanzo infrastructure, <span className="font-semibold">we want to pay you</span>.
                Connect your git credentials to claim your share.
              </p>
            </motion.div>

            {/* Section CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="/oss/connect"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm bg-primary text-primary-foreground"
              >
                Connect &amp; Start Earning
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="/oss/dashboard"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-secondary text-sm text-foreground"
              >
                View Payout Dashboard
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* OSS Compute Dividends */}
        <div id="dividends">
          <OSSComputeDividends />
        </div>

        {/* OSS Catalog */}
        <OSSCatalog />

        {/* CTA Section */}
        <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-neutral-900/30 to-background relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 bg-primary/10 text-foreground/70"
            >
              <Heart className="w-3.5 h-3.5" />
              Join the Community
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Contribute &amp; Earn
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              We welcome contributions of all kinds &mdash; code, documentation, bug reports, and feature requests.
              Every contribution earns a share of compute revenue through our OSS Revenue Sharing program.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="https://github.com/hanzoai/hanzo/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-all hover:opacity-90 text-base bg-primary text-primary-foreground"
              >
                Start Contributing
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://discord.gg/hanzo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-secondary text-base text-foreground"
              >
                Join Discord
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OpenSource;
