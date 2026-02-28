'use client'

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  Blocks,
  Wallet,
  CreditCard,
  FileCode,
  HardDrive,
  Radio,
  Search,
  ArrowLeftRight,
  Shield,
  ArrowRight,
  Check,
  Key,
  Database,
  Globe,
  Zap,
  Lock,
  Server,
  Code,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Button } from "@hanzo/ui";

// Web3 capability categories
const CAPABILITIES = [
  {
    id: "nodes",
    icon: Server,
    title: "Blockchain Nodes & Data",
    description: "Access any chain with managed node infrastructure",
    features: [
      "Multi-chain RPC endpoints (EVM, Solana, Cosmos, etc.)",
      "Archive nodes for historical data access",
      "WebSocket subscriptions for real-time events",
      "Rate limiting and load balancing built-in",
      "99.9% uptime SLA with global distribution",
    ],
  },
  {
    id: "wallet",
    icon: Wallet,
    title: "Wallet & Key Management",
    description: "Enterprise-grade key infrastructure",
    features: [
      "MPC (Multi-Party Computation) wallets",
      "Hardware Security Module (HSM) integration",
      "Policy-based transaction signing",
      "Multi-sig support across chains",
      "Custodial and non-custodial options",
    ],
  },
  {
    id: "payments",
    icon: CreditCard,
    title: "On-Chain Payments",
    description: "Accept crypto payments seamlessly",
    features: [
      "Stablecoin payment processing (USDC, USDT, DAI)",
      "Native token support across chains",
      "Payment links and checkout widgets",
      "Automatic conversion and settlement",
      "Invoice generation and tracking",
    ],
  },
  {
    id: "contracts",
    icon: FileCode,
    title: "Smart Contract Management",
    description: "Deploy and interact with contracts at scale",
    features: [
      "Contract deployment across multiple chains",
      "ABI management and verification",
      "Gas estimation and optimization",
      "Event indexing and webhooks",
      "Upgradeable proxy pattern support",
    ],
  },
  {
    id: "storage",
    icon: HardDrive,
    title: "Decentralized Storage",
    description: "Persistent, censorship-resistant data storage",
    features: [
      "IPFS pinning with global CDN",
      "Arweave permanent storage integration",
      "Filecoin deal management",
      "NFT metadata hosting",
      "Content-addressed file retrieval",
    ],
  },
  {
    id: "oracles",
    icon: Radio,
    title: "Oracle Services",
    description: "Bring off-chain data on-chain",
    features: [
      "Price feeds for DeFi applications",
      "Custom data feeds and attestations",
      "VRF (Verifiable Random Function)",
      "Cross-chain message passing",
      "Chainlink and custom oracle integration",
    ],
  },
  {
    id: "indexing",
    icon: Search,
    title: "Blockchain Indexing",
    description: "Query blockchain data with GraphQL",
    features: [
      "Custom subgraph deployment",
      "Real-time indexing and caching",
      "Historical data aggregation",
      "Cross-chain data unification",
      "SQL and GraphQL query interfaces",
    ],
  },
  {
    id: "crosschain",
    icon: ArrowLeftRight,
    title: "Cross-Chain Infrastructure",
    description: "Bridge assets and data between chains",
    features: [
      "Token bridging with Wormhole, LayerZero",
      "Cross-chain messaging protocols",
      "Unified liquidity across chains",
      "Chain abstraction for users",
      "Multi-chain transaction batching",
    ],
  },
  {
    id: "compliance",
    icon: Shield,
    title: "Compliance & Fiat",
    description: "Enterprise compliance and fiat rails",
    features: [
      "KYC/AML integration",
      "Transaction monitoring and screening",
      "Fiat on/off ramp connections",
      "Tax reporting and documentation",
      "Regulatory-compliant custody",
    ],
  },
];

// Roadmap items
const ROADMAP = [
  { phase: "Q4 2025", title: "Multi-Chain RPC & Indexing", status: "complete" },
  { phase: "Q1 2026", title: "Token, NFT & Transfers APIs", status: "complete" },
  { phase: "Q1 2026", title: "Smart Wallets & ERC-4337 Bundler", status: "complete" },
  { phase: "Q1 2026", title: "Webhooks, WebSockets & Gas Manager", status: "complete" },
  { phase: "Q2 2026", title: "Cross-Chain Bridges & Oracles", status: "in-progress" },
  { phase: "Q2 2026", title: "DeFi Aggregation & DEX APIs", status: "planned" },
];

// Product pages - Core APIs
const PRODUCTS = [
  // Core Infrastructure
  { id: "chains", name: "Hanzo Chains", description: "Multi-chain RPC endpoints & infrastructure", icon: Server, color: "#f97316", href: "/blockchain/chains" },
  { id: "indexer", name: "Indexer", description: "Query blockchain data with GraphQL", icon: Search, color: "#10b981", href: "/blockchain/indexer" },
  { id: "wallets", name: "Smart Wallets", description: "ERC-4337 account abstraction wallets", icon: Wallet, color: "#f59e0b", href: "/blockchain/wallets" },
  { id: "rollups", name: "Rollups", description: "L2 scaling & rollup infrastructure", icon: Blocks, color: "#ffffff", href: "/blockchain/rollups" },
  // Data APIs
  { id: "tokens", name: "Token API", description: "ERC-20 balances, prices & metadata", icon: Database, color: "#22c55e", href: "/blockchain/tokens" },
  { id: "nft", name: "NFT API", description: "NFT metadata, ownership & transfers", icon: Blocks, color: "#ec4899", href: "/blockchain/nft" },
  { id: "transfers", name: "Transfers API", description: "Track token & NFT transfers", icon: ArrowLeftRight, color: "#06b6d4", href: "/blockchain/transfers" },
  // Trading & DeFi APIs
  { id: "prices", name: "Prices API", description: "Real-time & historical price feeds", icon: Database, color: "#22c55e", href: "/blockchain/prices" },
  { id: "dex", name: "DEX API", description: "Swap routing & liquidity aggregation", icon: ArrowLeftRight, color: "#f59e0b", href: "/blockchain/dex" },
  { id: "oracle", name: "Oracle API", description: "On-chain price oracles & data feeds", icon: Radio, color: "#ffffff", href: "/blockchain/oracle" },
  // Realtime & Events
  { id: "webhooks", name: "Webhooks", description: "Real-time blockchain event notifications", icon: Radio, color: "#f97316", href: "/blockchain/webhooks" },
  { id: "websockets", name: "Websockets", description: "Live blockchain data streaming", icon: Radio, color: "#a855f7", href: "/blockchain/websockets" },
  // Account Abstraction
  { id: "bundler", name: "Bundler API", description: "ERC-4337 UserOp bundling service", icon: Blocks, color: "#14b8a6", href: "/blockchain/bundler" },
  { id: "gas", name: "Gas Manager", description: "Sponsor gas for your users", icon: Zap, color: "#eab308", href: "/blockchain/gas" },
  { id: "simulation", name: "Simulation API", description: "UserOp & transaction simulation", icon: Code, color: "#06b6d4", href: "/blockchain/simulation" },
  // Debug & Development
  { id: "debug", name: "Debug API", description: "Transaction tracing & debugging", icon: Code, color: "#64748b", href: "/blockchain/debug" },
  { id: "trace", name: "Trace API", description: "Internal transaction traces", icon: Search, color: "#94a3b8", href: "/blockchain/trace" },
  // Payments
  { id: "pay", name: "Payments", description: "Crypto payments gateway", icon: CreditCard, color: "#f97316", href: "/blockchain/pay" },
];

const Blockchain = () => {
  const [expandedCapability, setExpandedCapability] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-8 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15"
            style={{
              background: `radial-gradient(circle, #ffffff 0%, transparent 70%)`,
              filter: "blur(100px)",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            {/* Live Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-primary/5 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary/10 animate-pulse" />
              <span className="text-sm font-medium text-foreground/70">Now Available</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
              <span className="text-foreground">The Web3 Developer Platform.</span>
              <br />
              <span className="text-muted-foreground">AI-Native. Blazing Fast.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Ship your first blockchain request in under 5 minutes. Multi-chain RPC, Token & NFT APIs, Smart Wallets, webhooks, and more—with AI agent integration built-in.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                className="px-8 py-3 rounded-lg font-medium transition-all"
                style={{ backgroundColor: "#ffffff" }}
                onClick={() => window.open('https://cloud.hanzo.ai/signup', '_blank')}
              >
                Start Building Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="px-8 py-3 rounded-lg font-medium border-border hover:border-neutral-600"
                onClick={() => window.location.href = '/pricing?tab=blockchain'}
              >
                View Pricing
              </Button>
            </motion.div>
            <p className="text-xs text-muted-foreground mt-4">
              100+ chains supported. No credit card required.
            </p>
          </motion.div>

          {/* Visual Hero Element */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-border bg-gradient-to-br from-white/20 to-transparent p-8 md:p-12"
          >
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {[
                { icon: Server, label: "Nodes" },
                { icon: Wallet, label: "Wallets" },
                { icon: CreditCard, label: "Payments" },
                { icon: FileCode, label: "Contracts" },
                { icon: Database, label: "Storage" },
                { icon: ArrowLeftRight, label: "Bridges" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.05 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-primary/10 border border-white/30 flex items-center justify-center">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-foreground" />
                    </div>
                    <span className="text-xs md:text-sm text-muted-foreground">{item.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4 md:px-8 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "99.999%", label: "Uptime SLA", detail: "7+ years running" },
              { value: "<50ms", label: "Avg Latency", detail: "Global edge network" },
              { value: "100+", label: "Chains Supported", detail: "EVM, Solana, Cosmos" },
              { value: "10B+", label: "Requests Served", detail: "And counting" },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.detail}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
              Developer Suite
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build, deploy, and scale Web3 applications. One API key, every chain.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {PRODUCTS.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                >
                  <Link
                    href={product.href || "#"}
                    className="block p-5 rounded-xl border border-border bg-secondary/50 hover:bg-accent/50 hover:border-border transition-all group"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                      style={{ backgroundColor: `${product.color}1a` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: product.color }} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-foreground transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                    <div className="mt-3 flex items-center gap-1 text-xs text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      Get started
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
              Complete Web3 Infrastructure
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build decentralized applications, from blockchain data access to compliance tools.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAPABILITIES.map((capability, index) => {
              const Icon = capability.icon;
              const isExpanded = expandedCapability === capability.id;
              return (
                <motion.div
                  key={capability.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="rounded-xl border border-border bg-secondary/50 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedCapability(isExpanded ? null : capability.id)}
                    className="w-full p-5 text-left flex items-start gap-4 hover:bg-accent/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-semibold text-foreground">{capability.title}</h3>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{capability.description}</p>
                    </div>
                  </button>

                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-5 pb-5 border-t border-border"
                    >
                      <ul className="mt-4 space-y-2">
                        {capability.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                            <Check className="w-4 h-4 text-foreground shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-primary/10 mb-6">
                <Zap className="w-4 h-4 text-foreground" />
                <span className="text-sm font-medium text-foreground">Unified Platform</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
                AI + Web3.<br />
                <span className="text-muted-foreground">Better Together.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Combine Hanzo's AI capabilities with blockchain infrastructure. Let AI agents manage wallets, execute transactions, and interact with smart contracts autonomously.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "AI agents that can send on-chain transactions",
                  "Natural language smart contract interaction",
                  "Automated DeFi strategies with AI optimization",
                  "Cross-chain portfolio management",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-foreground/80">
                    <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-foreground" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-secondary/80 overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-primary/10" />
                  <div className="w-3 h-3 rounded-full bg-primary/10" />
                  <div className="w-3 h-3 rounded-full bg-primary/10" />
                </div>
                <span className="ml-2 text-xs text-muted-foreground font-mono">hanzo-agent.ts</span>
              </div>
              <div className="p-4 font-mono text-sm bg-background">
                <pre className="text-foreground/80 overflow-x-auto">
{`import { Hanzo } from "@hanzo/ai";
import { Wallet } from "@hanzo/blockchain";

const agent = new Hanzo.Agent({
  model: "claude-sonnet-4-6",
  tools: [Wallet.tools],
});

// Agent can now execute on-chain
await agent.run(\`
  Check my ETH balance on Ethereum mainnet,
  then swap 0.1 ETH for USDC on Uniswap
  if the price is favorable.
\`);`}
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
              Development Roadmap
            </h2>
            <p className="text-lg text-muted-foreground">
              Our planned timeline for launching Web3 infrastructure.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-800" />

            <div className="space-y-8">
              {ROADMAP.map((item, index) => (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`relative flex items-center gap-6 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 bg-primary" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-foreground border border-white/30 mb-2">
                      {item.phase}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <span className={`text-sm ${
                      item.status === "complete" ? "text-foreground/70" :
                      item.status === "in-progress" ? "text-foreground/60" : "text-muted-foreground"
                    }`}>
                      {item.status === "complete" ? "Complete" :
                       item.status === "in-progress" ? "In Progress" : "Planned"}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supported Chains */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
              Multi-Chain from Day One
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Support for all major blockchain networks, with more being added continuously.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              // L1s
              "Ethereum", "Solana", "Bitcoin", "Avalanche", "BNB Chain", "Cosmos",
              // L2s & Rollups
              "Arbitrum", "Optimism", "Base", "Polygon", "zkSync", "Scroll", "Linea", "Blast", "Starknet",
              // Lux Ecosystem - All Chains
              "Lux P-Chain", "Lux C-Chain", "Lux A-Chain", "Lux B-Chain", "Lux Z-Chain",
              "Lux T-Chain", "Lux K-Chain", "Lux Q-Chain", "Lux D-Chain",
              "Hanzo Network", "Zoo Network", "Pars Network",
              // Other Networks
              "Aptos", "Sui", "Sei", "Near", "Tron",
            ].map((chain, index) => (
              <div
                key={chain}
                className="px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm text-foreground/80"
              >
                {chain}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/30 bg-gradient-to-br from-white/20 to-transparent p-8 md:p-12 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Blocks className="w-8 h-8 text-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
              Ready to Build on Web3?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Start building with multi-chain RPC, Token APIs, NFT APIs, Smart Wallets, and more. No credit card required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                className="px-8 py-3 rounded-lg font-medium"
                style={{ backgroundColor: "#ffffff" }}
                onClick={() => window.open('https://cloud.hanzo.ai/signup', '_blank')}
              >
                Get Started Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="px-8 py-3 rounded-lg font-medium border-border hover:border-neutral-600"
                onClick={() => window.location.href = '/pricing?tab=blockchain'}
              >
                View Pricing
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Enterprise-grade security
              </span>
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                100+ chains supported
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                AI-native integration
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      
    </div>
  );
};

export default Blockchain;
