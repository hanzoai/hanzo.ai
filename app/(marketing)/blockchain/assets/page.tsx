'use client'

import Link from "next/link";

import React from "react";
import { motion } from "framer-motion";

import {
  Wallet,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  Check,
  Coins,
  Building2,
  CreditCard,
  Lock,
  Settings,
  RefreshCw,
  Users,
  FileCode,
  LayoutGrid,
  Search,
  ArrowLeftRight,
  Layers,
  Sparkles
} from "lucide-react";

const infrastructureCategories = [
  {
    title: "Move",
    subtitle: "Accept and send digital assets",
    products: [
      { name: "Payments", description: "Accept crypto payments with fiat settlement", icon: CreditCard, href: "/blockchain/pay" },
      { name: "Network for Payments", description: "Global payment rails for stablecoins", icon: Globe, href: "/blockchain/payments-network" },
      { name: "Compliance", description: "KYC/AML and transaction monitoring", icon: Shield, href: "/blockchain/compliance" },
      { name: "Batched Transactions", description: "Bundle multiple transfers for gas efficiency", icon: Layers, href: "/blockchain/batch" },
    ],
  },
  {
    title: "Hold",
    subtitle: "Secure custody solutions",
    products: [
      { name: "Wallets-as-a-Service", description: "Deploy branded wallets instantly", icon: Wallet, href: "/blockchain/wallets" },
      { name: "Embedded Wallets", description: "Invisible wallets for Web2 UX", icon: Sparkles, href: "/blockchain/embedded-wallets" },
      { name: "Policy & Governance", description: "Multi-sig and approval workflows", icon: Settings, href: "/blockchain/governance" },
      { name: "Security (MPC + FHE)", description: "Threshold signatures with encrypted rules", icon: Lock, href: "/blockchain/mpc" },
    ],
  },
  {
    title: "Manage",
    subtitle: "Optimize your digital assets",
    products: [
      { name: "Automation", description: "Scheduled transactions and triggers", icon: RefreshCw, href: "/blockchain/automation" },
      { name: "Staking", description: "Stake assets across protocols", icon: Coins, href: "/blockchain/staking" },
      { name: "Swaps", description: "DEX aggregation for best execution", icon: ArrowLeftRight, href: "/blockchain/dex" },
      { name: "Treasury Management", description: "Multi-chain treasury operations", icon: Building2, href: "/blockchain/treasury" },
    ],
  },
  {
    title: "Issue",
    subtitle: "Create new digital assets",
    products: [
      { name: "Tokenization", description: "Tokenize RWAs, securities, and more", icon: FileCode, href: "/blockchain/tokenization" },
      { name: "Network", description: "Launch your own L2/L3 chain", icon: Globe, href: "/blockchain/rollups" },
      { name: "Stablecoin Infrastructure", description: "Issue and manage stablecoins", icon: Coins, href: "/blockchain/stablecoins" },
      { name: "Token Launchpad", description: "Fair launch and distribution tools", icon: Zap, href: "/blockchain/launchpad" },
    ],
  },
];

const whiteLabelProducts = [
  {
    name: "NFT Marketplace",
    description: "Launch a fully-branded NFT marketplace on any chain",
    icon: LayoutGrid,
    features: ["Your branding", "Custom token support", "Royalty management", "Auction system"],
  },
  {
    name: "Block Explorer",
    description: "Branded blockchain explorer with full analytics",
    icon: Search,
    features: ["Transaction tracking", "Contract verification", "Analytics dashboard", "API access"],
  },
  {
    name: "Indexer",
    description: "Custom GraphQL API for your chain data",
    icon: Layers,
    features: ["Real-time indexing", "Custom schemas", "Historical queries", "Webhooks"],
  },
  {
    name: "DEX / Exchange",
    description: "Deploy AMM or order book exchanges",
    icon: ArrowLeftRight,
    features: ["AMM pools", "Order books", "Liquidity mining", "Trading fees"],
  },
  {
    name: "Wallet App",
    description: "Branded mobile and web wallets",
    icon: Wallet,
    features: ["Mobile apps", "Browser extension", "Hardware support", "Multi-chain"],
  },
  {
    name: "Bridge",
    description: "Cross-chain asset transfers",
    icon: Globe,
    features: ["Multi-chain", "Fast finality", "Security audited", "Liquidity pools"],
  },
];

const DigitalAssets = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(253, 68, 68, 0.15) 0%, transparent 70%)",
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

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8"
          >
            <Building2 className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white/70">Digital Asset Infrastructure</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-white">Move. Hold.</span>
            <br />
            <span className="bg-gradient-to-r from-white to-white/10 bg-clip-text text-transparent">
              Manage. Issue.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-neutral-400 mb-12 max-w-3xl mx-auto"
          >
            Complete infrastructure for digital assets. From payments to tokenization,
            custody to compliance—everything you need to build financial applications.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://cloud.hanzo.ai/signup"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white hover:bg-white/20 text-white font-medium rounded-full transition-colors"
            >
              Start Building
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/contact/sales"
              className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-neutral-700 hover:border-neutral-500 text-white font-medium rounded-full transition-colors"
            >
              Talk to Sales
            </a>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure Categories */}
      {infrastructureCategories.map((category, categoryIndex) => (
        <section
          key={category.title}
          className={`py-20 px-4 md:px-8 ${categoryIndex % 2 === 1 ? "bg-neutral-950" : ""}`}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{category.title}</h2>
              <p className="text-xl text-neutral-400">{category.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.products.map((product, index) => {
                const Icon = product.icon;
                return (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={product.href || "#"}
                      className="block bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 hover:border-white/30 transition-colors group h-full"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-white mb-1 group-hover:text-white transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-neutral-500">{product.description}</p>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* White Label Products */}
      <section className="py-20 px-4 md:px-8 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white/70">White-Label Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Launch Your Own Products
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Deploy fully-branded blockchain infrastructure on your chain with your tokens.
              Powered by Hanzo, owned by you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whiteLabelProducts.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-white/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                  <p className="text-neutral-400 text-sm mb-4">{product.description}</p>
                  <ul className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-neutral-500">
                        <Check className="w-3 h-3 text-white" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-neutral-500 mb-4">
              All products deploy from your Hanzo dashboard with custom branding
            </p>
            <Link
              href="/contact/sales"
              className="inline-flex items-center gap-2 text-white hover:text-white/70 font-medium"
            >
              Contact sales for white-label pricing <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-white/20 to-transparent border border-white/30 rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build?
            </h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-xl mx-auto">
              From simple payment integration to launching your own chain—we scale with you.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://cloud.hanzo.ai/signup"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white hover:bg-white/20 text-white font-medium rounded-full transition-colors"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://docs.hanzo.ai/blockchain"
                className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-neutral-600 hover:border-neutral-500 text-white font-medium rounded-full transition-colors"
              >
                Read Documentation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      
    </div>
  );
};

export default DigitalAssets;
