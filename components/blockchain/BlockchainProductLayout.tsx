'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  LucideIcon,
} from "lucide-react";


import { Button } from "@hanzo/ui";

export interface CodeExample {
  language: string;
  filename: string;
  code: string;
}

export interface BlockchainProductProps {
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
  features: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
  }>;
  useCases: Array<{
    title: string;
    description: string;
  }>;
  chains?: string[];
  codeExample?: {
    filename: string;
    code: string;
  };
  codeExamples?: CodeExample[];
}

const BlockchainProductLayout: React.FC<BlockchainProductProps> = ({
  name,
  tagline,
  description,
  icon: ProductIcon,
  accentColor,
  features,
  useCases,
  chains,
  codeExample,
  codeExamples,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15"
            style={{
              background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
              filter: "blur(100px)",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Product Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Available Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
                style={{ borderColor: `${accentColor}4d`, backgroundColor: `${accentColor}1a` }}
              >
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                <span className="text-sm font-medium" style={{ color: accentColor }}>
                  Available Now
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4">
                <span className="text-white">{name}</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-400 mb-6">{tagline}</p>
              <p className="text-lg text-neutral-400 mb-8">{description}</p>

              {/* Quick Features */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.slice(0, 4).map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${accentColor}1a` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: accentColor }} />
                      </div>
                      <div>
                        <h3 className="font-medium text-white text-sm">{feature.title}</h3>
                        <p className="text-xs text-neutral-500">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link
                href="/blockchain"
                className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Back to Web3 Overview
              </Link>
            </motion.div>

            {/* Right: Signup Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 md:p-8"
            >
              {/* Quick Start */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${accentColor}1a` }}
                >
                  <ProductIcon className="w-6 h-6" style={{ color: accentColor }} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white">Get Your API Key</h2>
                  <p className="text-sm text-neutral-400">Start building in under 5 minutes</p>
                </div>
              </div>

              {/* Performance Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { value: "99.999%", label: "Uptime" },
                  { value: "<50ms", label: "Latency" },
                  { value: "100+", label: "Chains" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-neutral-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Button
                  className="w-full py-3 rounded-lg font-medium"
                  style={{ backgroundColor: accentColor }}
                  onClick={() => window.open('https://cloud.hanzo.ai/signup', '_blank')}
                >
                  <span className="flex items-center justify-center gap-2">
                    Start Building Free
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="w-full py-3 rounded-lg font-medium border-neutral-700 hover:border-neutral-600"
                  onClick={() => window.open('https://docs.hanzo.ai/blockchain', '_blank')}
                >
                  View Documentation
                </Button>
              </div>

              <p className="text-xs text-neutral-500 text-center mt-4">
                No credit card required. Free tier includes 300M compute units/month.
              </p>

              {/* Trust Signals */}
              <div className="mt-6 pt-6 border-t border-neutral-800">
                <p className="text-xs text-neutral-500 mb-3">Trusted by developers building:</p>
                <div className="flex flex-wrap gap-2">
                  {["DeFi", "NFTs", "Payments", "Gaming", "AI Agents"].map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs rounded-full border border-neutral-800 text-neutral-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 md:px-8 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
              Key Capabilities
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Everything you need, nothing you don't.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/50"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${accentColor}1a` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: accentColor }} />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-neutral-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Code Examples - Polyglot */}
      {(codeExamples && codeExamples.length > 0) && (
        <section className="py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
                Simple to Integrate
              </h2>
              <p className="text-lg text-neutral-400">
                Get started with just a few lines of code. SDKs for every language.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-neutral-800 bg-neutral-900/80 overflow-hidden"
            >
              {/* Language Tabs */}
              <div className="flex items-center gap-1 px-4 py-2 border-b border-neutral-800 bg-neutral-950 overflow-x-auto">
                {codeExamples.map((example, idx) => (
                  <button
                    key={example.language}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                      activeTab === idx
                        ? "bg-neutral-800 text-white"
                        : "text-neutral-500 hover:text-neutral-300"
                    }`}
                  >
                    {example.language}
                  </button>
                ))}
              </div>
              {/* File Header */}
              <div className="flex items-center gap-2 px-4 py-2 border-b border-neutral-800 bg-neutral-900/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-2 text-xs text-neutral-500 font-mono">
                  {codeExamples[activeTab]?.filename}
                </span>
              </div>
              <div className="p-4 font-mono text-sm bg-neutral-950 overflow-x-auto max-h-[500px]">
                <pre className="text-neutral-300">{codeExamples[activeTab]?.code}</pre>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Legacy single code example fallback */}
      {codeExample && !codeExamples && (
        <section className="py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
                Simple to Integrate
              </h2>
              <p className="text-lg text-neutral-400">
                Get started with just a few lines of code.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-neutral-800 bg-neutral-900/80 overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-950">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-2 text-xs text-neutral-500 font-mono">{codeExample.filename}</span>
              </div>
              <div className="p-4 font-mono text-sm bg-neutral-950 overflow-x-auto">
                <pre className="text-neutral-300">{codeExample.code}</pre>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Use Cases */}
      <section className="py-24 px-4 md:px-8 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
              Built For
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-neutral-400">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Chains */}
      {chains && chains.length > 0 && (
        <section className="py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
                Supported Chains
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3"
            >
              {chains.map((chain) => (
                <div
                  key={chain}
                  className="px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 text-sm text-neutral-300"
                >
                  {chain}
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-24 px-4 md:px-8 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
              Start Building with {name}
            </h2>
            <p className="text-lg text-neutral-400 mb-8">
              Get your free API key and ship your first request in under 5 minutes. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => window.open('https://cloud.hanzo.ai/signup', '_blank')}
                className="px-6 py-3 rounded-lg font-medium"
                style={{ backgroundColor: accentColor }}
              >
                Get Your API Key
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Link
                href="/blockchain"
                className="px-6 py-3 rounded-lg font-medium border border-neutral-700 text-white hover:bg-neutral-900 transition-colors"
              >
                Explore All Web3 Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      
    </div>
  );
};

export default BlockchainProductLayout;
