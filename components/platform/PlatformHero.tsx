'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Github,
  Terminal,
  Server,
  Database,
  Lock,
  Zap,
  Check,
  Copy,
} from "lucide-react";

const FEATURES = [
  { id: "self-host", label: "Self-Host", icon: Server },
  { id: "auth", label: "Auth", icon: Lock },
  { id: "database", label: "Database", icon: Database },
  { id: "functions", label: "Functions", icon: Zap },
  { id: "cli", label: "CLI", icon: Terminal },
];

const FeatureDemo = ({ activeFeature }: { activeFeature: string }) => {
  const demos: Record<string, { title: string; code: string }> = {
    "self-host": {
      title: "Self-Hosting",
      code: `# One-line install
curl -fsSL hanzo.sh | bash

# Docker Compose setup
git clone https://github.com/hanzoai/platform
cd platform && docker compose up -d

# Kubernetes deployment
helm repo add hanzo https://charts.hanzo.ai
helm install hanzo hanzo/platform \\
  --set domain=platform.yourcompany.com`,
    },
    auth: {
      title: "Authentication",
      code: `// OAuth, Email, Phone, SSO
const { user } = await hanzo.auth.signUp({
  email: 'user@example.com',
  password: 'secure-password'
})

// Enterprise SSO
await hanzo.auth.signInWithSSO({
  provider: 'okta',
  domain: 'yourcompany.okta.com'
})

// JWT + RBAC built-in`,
    },
    database: {
      title: "PostgreSQL Database",
      code: `// Type-safe queries
const products = await hanzo
  .from('products')
  .select('id, name, price')
  .eq('category', 'electronics')
  .order('price', { ascending: true })

// Real-time subscriptions
hanzo.channel('products')
  .on('postgres_changes', { event: '*' },
    (payload) => updateUI(payload))
  .subscribe()`,
    },
    functions: {
      title: "Edge Functions",
      code: `// TypeScript/Deno powered
Deno.serve(async (req) => {
  const { email } = await req.json()

  // Send welcome email
  await hanzo.from('emails').insert({
    to: email,
    template: 'welcome'
  })

  return Response.json({ sent: true })
})`,
    },
    cli: {
      title: "Developer CLI",
      code: `# Initialize project
hanzo init my-app

# Local development
hanzo dev

# Database migrations
hanzo db migrate create add_users
hanzo db migrate up

# Deploy to production
hanzo deploy --prod`,
    },
  };

  const demo = demos[activeFeature];

  return (
    <div className="rounded-xl border border-border bg-secondary/95 backdrop-blur-sm overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-primary/10" />
          <div className="w-3 h-3 rounded-full bg-primary/10" />
          <div className="w-3 h-3 rounded-full bg-primary/10" />
        </div>
        <AnimatePresence mode="wait">
          <motion.span
            key={activeFeature}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-xs text-muted-foreground font-mono ml-2"
          >
            {demo.title}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="p-4 bg-background">
        <AnimatePresence mode="wait">
          <motion.pre
            key={activeFeature}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="text-sm font-mono text-foreground/80 overflow-x-auto"
          >
            <code>{demo.code}</code>
          </motion.pre>
        </AnimatePresence>
      </div>
    </div>
  );
};

const PlatformHero = () => {
  const [activeFeature, setActiveFeature] = useState("self-host");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx @hanzo/cli create my-app");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15"
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
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
              style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)", color: "var(--primary)" }}
            >
              Open Source • MIT Licensed • Self-Hostable
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
            >
              <span className="text-foreground">Own your</span>
              <br />
              <span className="text-muted-foreground">entire stack.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl"
            >
              Open source Backend-as-a-Service with Auth, Database, Storage, and Functions.
              Self-host on your infrastructure or deploy to Hanzo Cloud. No vendor lock-in.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex flex-wrap items-center gap-4 mb-6"
            >
              <a
                href="https://github.com/hanzoai/platform"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm bg-primary text-primary-foreground"

              >
                <Github className="mr-2 h-4 w-4" />
                Star on GitHub
              </a>
              <a
                href="https://docs.hanzo.ai/platform"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-secondary text-sm text-foreground"
              >
                Documentation
              </a>
            </motion.div>

            {/* Install command */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-secondary border border-border">
                <code className="text-sm font-mono text-foreground/80">npx @hanzo/cli create my-app</code>
                <button
                  onClick={handleCopy}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-foreground/70" /> : <Copy className="h-3.5 w-3.5" />}
                </button>
              </div>
            </motion.div>

            {/* Feature tabs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="flex flex-wrap gap-2"
            >
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                const isActive = activeFeature === feature.id;
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-border"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {feature.label}
                  </button>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Feature Demo */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <FeatureDemo activeFeature={activeFeature} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlatformHero;
