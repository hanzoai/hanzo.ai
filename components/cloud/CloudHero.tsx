'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Server,
  Globe,
  Database,
  Cpu,
  Shield,
  Zap,
  Cloud,
  Check,
  Copy,
} from "lucide-react";

const SERVICES = [
  { id: "compute", label: "Compute", icon: Server },
  { id: "ai", label: "AI/ML", icon: Cpu },
  { id: "database", label: "Database", icon: Database },
  { id: "edge", label: "Edge", icon: Globe },
  { id: "security", label: "Security", icon: Shield },
];

const ServiceDemo = ({ activeService }: { activeService: string }) => {
  const demos: Record<string, { title: string; code: string }> = {
    compute: {
      title: "Auto-scaling Compute",
      code: `# Deploy with auto-scaling
hanzo deploy --min 1 --max 100

# Scale based on metrics
hanzo scale web \\
  --cpu-target 70% \\
  --memory-target 80%

# GPU instances for AI workloads
hanzo compute create \\
  --type a100-80gb \\
  --spot-instances`,
    },
    ai: {
      title: "AI Infrastructure",
      code: `# Deploy ML models
hanzo ai deploy ./model \\
  --gpu a100 \\
  --replicas 3

# Inference endpoints
curl https://api.hanzo.cloud/v1/predict \\
  -H "Authorization: Bearer $TOKEN" \\
  -d '{"input": "Hello world"}'

# Fine-tuning jobs
hanzo ai train --base llama-3 --data ./dataset`,
    },
    database: {
      title: "Managed Databases",
      code: `# PostgreSQL with pgvector
hanzo db create postgres \\
  --version 16 \\
  --extensions pgvector,postgis

# Redis cluster
hanzo db create redis \\
  --cluster \\
  --replicas 3

# Automatic backups
hanzo db backup --schedule "0 2 * * *"`,
    },
    edge: {
      title: "Global Edge Network",
      code: `# Deploy to edge
hanzo edge deploy ./functions \\
  --regions all

# Edge KV storage
hanzo edge kv put user:123 '{"name":"Alice"}'

# 35+ regions, <50ms latency
hanzo edge status
# ✓ 35 regions active
# ✓ Avg latency: 23ms`,
    },
    security: {
      title: "Enterprise Security",
      code: `# Enterprise security
hanzo security audit

# Private networking
hanzo vpc create production \\
  --cidr 10.0.0.0/16

# Secrets management
hanzo secrets set API_KEY --env production

# Zero-trust access
hanzo access grant user@company.com \\
  --role developer`,
    },
  };

  const demo = demos[activeService];

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
            key={activeService}
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
            key={activeService}
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

const CloudHero = () => {
  const [activeService, setActiveService] = useState("compute");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx hanzo deploy");
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
              90+ Managed Services • Global Edge • 99.999% SLA
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
            >
              <span className="text-foreground">Cloud that</span>
              <br />
              <span className="text-muted-foreground">scales with you.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl"
            >
              AI infrastructure, managed databases, serverless compute, and global edge deployment.
              Build, deploy, and scale modern applications on a unified platform.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex flex-wrap items-center gap-4 mb-6"
            >
              <Link
                href="/signup"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm bg-primary text-primary-foreground"

              >
                Start free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="https://docs.hanzo.ai/cloud"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-secondary text-sm text-foreground"
              >
                Documentation
              </a>
            </motion.div>

            {/* Deploy command */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-secondary border border-border">
                <code className="text-sm font-mono text-foreground/80">npx hanzo deploy</code>
                <button
                  onClick={handleCopy}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-foreground/70" /> : <Copy className="h-3.5 w-3.5" />}
                </button>
              </div>
            </motion.div>

            {/* Service tabs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="flex flex-wrap gap-2"
            >
              {SERVICES.map((service) => {
                const Icon = service.icon;
                const isActive = activeService === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-border"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {service.label}
                  </button>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Service Demo */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <ServiceDemo activeService={activeService} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CloudHero;
