'use client'

import Link from "next/link";

import React from "react";
import { motion } from "framer-motion";

import {
  Server,
  Globe,
  Zap,
  Shield,
  Code,
  Activity,
  Database,
  Layers,
  ArrowRight,
  Check,
  Cpu,
  Network,
  Lock,
  Settings,
  BarChart3,
  Webhook,
  Wallet,
  RefreshCw,
  Search,
  FileCode,
  Cloud,
  Terminal
} from "lucide-react";

const coreApis = [
  {
    name: "RPC API",
    description: "Multi-chain JSON-RPC proxy with load balancing and failover",
    icon: Server,
    features: ["100+ chains", "Auto-scaling", "Global edge", "Rate limiting"],
  },
  {
    name: "WebSockets",
    description: "Real-time blockchain subscriptions and event streaming",
    icon: Activity,
    features: ["New blocks", "Pending txs", "Log filters", "Custom queries"],
  },
  {
    name: "Token API",
    description: "ERC-20/721/1155 balances, metadata, and transfer history",
    icon: Layers,
    features: ["All standards", "Batch queries", "Price feeds", "Holders list"],
  },
  {
    name: "NFT API",
    description: "NFT collections, ownership, metadata refresh",
    icon: FileCode,
    features: ["Metadata", "Ownership", "Transfers", "Collections"],
  },
  {
    name: "Webhooks",
    description: "Event-driven notifications for on-chain activity",
    icon: Webhook,
    features: ["Address activity", "Token transfers", "NFT events", "GraphQL filters"],
  },
  {
    name: "Transfers API",
    description: "Complete transaction history and internal transfers",
    icon: RefreshCw,
    features: ["Full history", "Internal txs", "Token moves", "Batch export"],
  },
];

const accountAbstraction = [
  {
    name: "Smart Wallets",
    description: "ERC-4337 account abstraction for any user experience",
    icon: Wallet,
    href: "/blockchain/wallets",
  },
  {
    name: "Bundler API",
    description: "UserOp bundling with MEV protection",
    icon: Layers,
    href: "/blockchain/bundler",
  },
  {
    name: "Gas Manager",
    description: "Paymaster policies and gas sponsorship",
    icon: Zap,
    href: "/blockchain/gas",
  },
];

const supportedChains = {
  "Layer 1": ["Ethereum", "BNB Chain", "Avalanche", "Solana", "Aptos", "Berachain", "Sei", "TON"],
  "Optimistic L2": ["Arbitrum", "Optimism", "Base", "Blast", "Mantle", "Mode", "Zora"],
  "ZK L2": ["Polygon zkEVM", "zkSync Era", "Scroll", "Linea", "Starknet"],
  "Lux Ecosystem": ["P-Chain", "C-Chain", "A-Chain", "B-Chain", "Z-Chain", "T-Chain", "K-Chain", "Q-Chain", "D-Chain"],
};

const whiteLabelProducts = [
  { name: "Block Explorer", description: "Full-featured explorer with contract verification", icon: Search },
  { name: "Indexer", description: "GraphQL API for custom chain data", icon: Database },
  { name: "Dashboard", description: "Developer console with analytics", icon: BarChart3 },
  { name: "RPC Gateway", description: "Branded multi-chain RPC endpoints", icon: Server },
  { name: "Faucet", description: "Testnet token distribution", icon: Zap },
  { name: "Bridge UI", description: "Cross-chain asset transfer interface", icon: Network },
];

const deploymentOptions = [
  { name: "Hanzo Cloud", description: "Fully managed at web3.hanzo.ai", icon: Cloud },
  { name: "DigitalOcean", description: "DOKS Kubernetes cluster", icon: Server },
  { name: "AWS", description: "EKS with auto-scaling", icon: Server },
  { name: "GCP", description: "GKE regional clusters", icon: Server },
  { name: "Azure", description: "AKS enterprise deployment", icon: Server },
  { name: "Self-Hosted", description: "Docker Compose or Kubernetes", icon: Terminal },
];

const HanzoWeb3Cloud = () => {
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-border mb-8"
          >
            <Cloud className="w-4 h-4 text-foreground" />
            <span className="text-sm font-medium text-foreground/70">Blockchain Infrastructure</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-foreground">Hanzo</span>{" "}
            <span className="bg-gradient-to-r from-white to-white/10 bg-clip-text text-transparent">
              Nodes
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-2xl md:text-3xl font-medium text-foreground mb-4"
          >
            100+ Chains. One API. Infinite Scale.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Complete blockchain infrastructure for developers. RPC, WebSockets, Token APIs,
            NFT APIs, Account Abstraction—everything you need to build Web3 applications.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto"
          >
            <div className="bg-secondary/50 border border-border rounded-xl p-4">
              <div className="text-2xl font-bold text-foreground">100+</div>
              <div className="text-sm text-muted-foreground">Chains Supported</div>
            </div>
            <div className="bg-secondary/50 border border-border rounded-xl p-4">
              <div className="text-2xl font-bold text-foreground">99.999%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
            <div className="bg-secondary/50 border border-border rounded-xl p-4">
              <div className="text-2xl font-bold text-foreground">&lt;50ms</div>
              <div className="text-sm text-muted-foreground">Global Latency</div>
            </div>
            <div className="bg-secondary/50 border border-border rounded-xl p-4">
              <div className="text-2xl font-bold text-foreground">ERC-4337</div>
              <div className="text-sm text-muted-foreground">Account Abstraction</div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://web3.hanzo.ai"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/20 text-foreground font-medium rounded-full transition-colors"
            >
              Launch Console
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://docs.hanzo.ai/web3"
              className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-border hover:border-neutral-500 text-foreground font-medium rounded-full transition-colors"
            >
              View Documentation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Core APIs */}
      <section className="py-20 px-4 md:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Core APIs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build blockchain applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreApis.map((api, index) => {
              const Icon = api.icon;
              return (
                <motion.div
                  key={api.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-white/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{api.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{api.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {api.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-neutral-800 rounded text-xs text-foreground/80"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Account Abstraction */}
      <section className="py-20 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-border mb-6">
              <Wallet className="w-4 h-4 text-foreground" />
              <span className="text-sm font-medium text-foreground/70">ERC-4337</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Account Abstraction
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Smart wallets, gasless transactions, and programmable accounts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {accountAbstraction.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={product.href || "#"}
                    className="block bg-secondary/50 border border-border rounded-xl p-6 hover:border-white/30 transition-colors h-full"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                    <p className="text-muted-foreground">{product.description}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Supported Chains */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              100+ Supported Chains
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From Ethereum to Solana, L1s to ZK rollups—we support them all
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(supportedChains).map(([category, chains], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary/50 border border-border rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">{category}</h3>
                <ul className="space-y-2">
                  {chains.map((chain, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {chain}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link
              href="/blockchain/directory"
              className="inline-flex items-center gap-2 text-foreground hover:text-foreground/70 font-medium"
            >
              View All Chains & Endpoints <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* White Label Products */}
      <section className="py-20 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              White-Label Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Deploy branded blockchain infrastructure on your domain
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
                  className="bg-secondary/50 border border-border rounded-xl p-5 hover:border-white/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground">{product.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Deploy Anywhere
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Managed cloud or self-hosted—your infrastructure, your way
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {deploymentOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={option.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-secondary/50 border border-border rounded-xl p-4 hover:border-white/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{option.name}</h3>
                      <p className="text-xs text-muted-foreground">{option.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 px-4 md:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get Started in Minutes</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary border border-border rounded-xl overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-neutral-700" />
                <div className="w-3 h-3 rounded-full bg-neutral-700" />
                <div className="w-3 h-3 rounded-full bg-neutral-700" />
              </div>
              <span className="text-xs text-muted-foreground ml-2">web3.ts</span>
            </div>
            <pre className="p-4 overflow-x-auto text-sm">
              <code className="text-foreground/80">{`import { HanzoWeb3 } from "@hanzo/web3";

const web3 = new HanzoWeb3({
  apiKey: process.env.HANZO_API_KEY,
});

// Multi-chain RPC
const ethBlock = await web3.rpc("ethereum").getBlockNumber();
const solSlot = await web3.rpc("solana").getSlot();

// Token balances across chains
const balances = await web3.tokens.getBalances({
  address: "0x...",
  chains: ["ethereum", "polygon", "arbitrum"],
});

// NFT ownership
const nfts = await web3.nfts.getOwned({
  address: "0x...",
  chain: "ethereum",
});

// Set up webhooks for real-time events
await web3.webhooks.create({
  url: "https://your-api.com/webhook",
  chain: "ethereum",
  eventType: "ADDRESS_ACTIVITY",
  filters: { addresses: ["0x..."] },
});

// Account Abstraction
const smartWallet = await web3.wallets.create({
  owner: "0x...",
  chain: "base",
});

// Gasless transaction
await smartWallet.execute({
  to: "0x...",
  data: "0x...",
  sponsor: true, // Hanzo pays gas
});`}</code>
            </pre>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Start Building on Hanzo Web3 Cloud
            </h2>
            <p className="text-xl text-foreground/80 mb-8 max-w-xl mx-auto">
              Free tier includes 3M compute units/month. Scale to enterprise with dedicated infrastructure.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://web3.hanzo.ai/signup"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/20 text-foreground font-medium rounded-full transition-colors"
              >
                Get Free API Key
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/contact/sales"
                className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-neutral-600 hover:border-neutral-500 text-foreground font-medium rounded-full transition-colors"
              >
                Contact Enterprise Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      
    </div>
  );
};

export default HanzoWeb3Cloud;
