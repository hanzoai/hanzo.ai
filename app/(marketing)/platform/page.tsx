'use client'

import Link from "next/link";

import React from "react";
import PlatformHero from "@/components/platform/PlatformHero";
import PaaSCapabilities from "@/components/platform/PaaSCapabilities";
import TrustedBy from "@/components/platform/TrustedBy";
import DeveloperLove from "@/components/platform/DeveloperLove";
import CallToAction from "@/components/platform/CallToAction";
import ZenBackground from "@/components/zen/ZenBackground";
import ZenQuoteSection from "@/components/zen/ZenQuoteSection";
import { motion } from "framer-motion";
import { Github, Cloud, Server, Lock, Code2, Network, Terminal, ArrowRight } from "lucide-react";

const DeploymentOptions = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Deploy Your Way
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Same codebase, same APIs, your choice of infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Self-Hosted */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-white/30 transition-colors"
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)" }}
            >
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Self-Hosted</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Run on your own servers, VMs, or containers. Full control, complete data sovereignty.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-foreground">✓</span> Docker & Kubernetes ready
              </li>
              <li className="flex items-center gap-2">
                <span className="text-foreground">✓</span> Air-gapped deployments
              </li>
              <li className="flex items-center gap-2">
                <span className="text-foreground">✓</span> No external dependencies
              </li>
            </ul>
            <a
              href="https://github.com/hanzoai/platform"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center mt-6 text-sm text-foreground hover:text-foreground/70"
            >
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </a>
          </motion.div>

          {/* Hanzo Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-white/30 transition-colors"
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)" }}
            >
              <Cloud className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Hanzo Cloud</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Fully managed platform with global edge deployment and automatic scaling.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-foreground">✓</span> 35+ global regions
              </li>
              <li className="flex items-center gap-2">
                <span className="text-foreground">✓</span> Zero-config deployments
              </li>
              <li className="flex items-center gap-2">
                <span className="text-foreground">✓</span> 99.999% SLA
              </li>
            </ul>
            <Link
              href="/cloud"
              className="inline-flex items-center mt-6 text-sm text-foreground hover:text-foreground/70"
            >
              Explore Cloud
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>

          {/* Hybrid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-white/30 transition-colors"
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)" }}
            >
              <Network className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Hybrid</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Keep sensitive data on-premise while leveraging cloud for global reach.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-foreground">✓</span> Data residency compliance
              </li>
              <li className="flex items-center gap-2">
                <span className="text-foreground">✓</span> Edge + origin architecture
              </li>
              <li className="flex items-center gap-2">
                <span className="text-foreground">✓</span> Unified management
              </li>
            </ul>
            <Link
              href="/enterprise"
              className="inline-flex items-center mt-6 text-sm text-foreground hover:text-foreground/70"
            >
              Contact Sales
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const OpenSourceBenefits = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-neutral-900 to-neutral-800/50 rounded-xl p-8 border border-border"
        >
          <div className="flex items-center gap-4 mb-8">
            <Github className="w-8 h-8 text-foreground" />
            <div>
              <h3 className="text-2xl font-bold text-foreground">100% Open Source</h3>
              <p className="text-muted-foreground">MIT Licensed. Fork, modify, contribute.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Code2 className="h-10 w-10 text-foreground" />
              <h4 className="text-lg font-bold text-foreground">MIT Licensed</h4>
              <p className="text-muted-foreground text-sm">
                Use it commercially, modify it freely. No vendor lock-in, no surprise licensing changes.
              </p>
            </div>

            <div className="space-y-4">
              <Lock className="h-10 w-10 text-foreground" />
              <h4 className="text-lg font-bold text-foreground">Data Sovereignty</h4>
              <p className="text-muted-foreground text-sm">
                Your code, your data, your infrastructure. Complete control over your stack.
              </p>
            </div>

            <div className="space-y-4">
              <Terminal className="h-10 w-10 text-foreground" />
              <h4 className="text-lg font-bold text-foreground">Developer First</h4>
              <p className="text-muted-foreground text-sm">
                Built by developers, for developers. Extensive docs, active community, responsive maintainers.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <a
              href="https://github.com/hanzoai/platform"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-600 bg-transparent hover:bg-accent text-sm text-foreground"
            >
              <Github className="w-4 h-4 mr-2" />
              Star on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Platform = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)] overflow-x-hidden">
      
      <ZenBackground />
      

      <main>
        <PlatformHero />
        <PaaSCapabilities />
        <ZenQuoteSection
          quote="The wise engineer owns their tools, lest their tools own them."
          attribution="Principle 14"
        />
        <DeploymentOptions />
        <OpenSourceBenefits />
        <TrustedBy />
        <DeveloperLove />
        <CallToAction />
      </main>

      
    </div>
  );
};

export default Platform;
