import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
  Clock,
  Bell,
  Mail,
  ArrowRight,
  Check,
  Network,
  Key,
  Database,
  Globe,
  Zap,
  Lock,
  Server,
  Code,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const BRAND_COLOR = "#fd4444";

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
  { phase: "Q2 2025", title: "Nodes & Indexing", status: "in-progress" },
  { phase: "Q3 2025", title: "Wallet Infrastructure", status: "planned" },
  { phase: "Q3 2025", title: "Payment Processing", status: "planned" },
  { phase: "Q4 2025", title: "Cross-Chain & Oracles", status: "planned" },
  { phase: "Q1 2026", title: "Full Platform Launch", status: "planned" },
];

// Product pages
const PRODUCTS = [
  { id: "nodes", name: "Hanzo Nodes", description: "Managed RPC endpoints for every chain", icon: Server, color: "#3b82f6", href: "/blockchain/nodes" },
  { id: "indexer", name: "Hanzo Indexer", description: "Query blockchain data with GraphQL", icon: Search, color: "#10b981", href: "/blockchain/indexer" },
  { id: "wallet", name: "Hanzo Wallet", description: "Unified wallet infrastructure", icon: Wallet, color: "#f59e0b", href: "/blockchain/wallet" },
  { id: "safe", name: "Hanzo Safe", description: "Multi-sig & threshold custody", icon: Shield, color: "#8b5cf6", href: "/blockchain/safe" },
  { id: "id", name: "Hanzo ID", description: "Decentralized identity & credentials", icon: Key, color: "#ec4899", href: "/blockchain/id" },
  { id: "pay", name: "Hanzo Pay", description: "Crypto payments gateway", icon: CreditCard, color: "#22c55e", href: "/blockchain/pay" },
  { id: "bridge", name: "Hanzo Bridge", description: "Cross-chain asset transfers", icon: ArrowLeftRight, color: "#06b6d4", href: "/blockchain/bridge" },
  { id: "defi", name: "Hanzo DeFi", description: "Staking, lending & yield modules", icon: Code, color: "#f97316", href: "/blockchain/defi" },
  { id: "oracle", name: "Hanzo Oracle", description: "Price feeds & VRF", icon: Radio, color: "#a855f7", href: "/blockchain/oracle" },
  { id: "storage", name: "Hanzo Storage", description: "IPFS, Arweave & Filecoin", icon: HardDrive, color: "#14b8a6", href: "/blockchain/storage" },
  { id: "explorer", name: "Hanzo Explorer", description: "Multi-chain block explorer", icon: Search, color: "#6366f1", href: "/blockchain/explorer" },
  { id: "quest", name: "Hanzo Quest", description: "Gamified engagement & loyalty", icon: Blocks, color: "#eab308", href: "/blockchain/quest" },
];

const Blockchain = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [expandedCapability, setExpandedCapability] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-8 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15"
            style={{
              background: `radial-gradient(circle, #8b5cf6 0%, transparent 70%)`,
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
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6">
              <Clock className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-400">Coming Soon</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
              <span className="text-white">Web3 Infrastructure.</span>
              <br />
              <span className="text-neutral-400">For the AI Era.</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-8">
              Blockchain nodes, wallets, payments, smart contracts, and more—all integrated into the Hanzo platform. Build decentralized applications with the same simplicity as traditional apps.
            </p>

            {/* Waitlist Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-md mx-auto"
            >
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 flex items-center gap-2 px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800">
                  <Mail className="w-4 h-4 text-neutral-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 bg-transparent text-white placeholder:text-neutral-600 outline-none text-sm"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="px-6 py-3 rounded-lg font-medium transition-all"
                  style={{ backgroundColor: "#8b5cf6" }}
                >
                  {submitted ? (
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      Joined!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Join Waitlist
                      <Bell className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </form>
              <p className="text-xs text-neutral-500 mt-3">
                Be the first to know when Hanzo Blockchain launches. No spam, ever.
              </p>
            </motion.div>
          </motion.div>

          {/* Visual Hero Element */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-transparent p-8 md:p-12"
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
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
                    </div>
                    <span className="text-xs md:text-sm text-neutral-400">{item.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-4 md:px-8 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
              Web3 Products
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Explore our suite of blockchain services. Each product is in private beta—apply for early access.
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
                    to={product.href}
                    className="block p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800/50 hover:border-neutral-700 transition-all group"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                      style={{ backgroundColor: `${product.color}1a` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: product.color }} />
                    </div>
                    <h3 className="font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-neutral-500">{product.description}</p>
                    <div className="mt-3 flex items-center gap-1 text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Apply for beta
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
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
              Complete Web3 Infrastructure
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
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
                  className="rounded-xl border border-neutral-800 bg-neutral-900/50 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedCapability(isExpanded ? null : capability.id)}
                    className="w-full p-5 text-left flex items-start gap-4 hover:bg-neutral-800/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-semibold text-white">{capability.title}</h3>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-neutral-500 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-neutral-500 shrink-0" />
                        )}
                      </div>
                      <p className="text-sm text-neutral-400 mt-1">{capability.description}</p>
                    </div>
                  </button>

                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-5 pb-5 border-t border-neutral-800"
                    >
                      <ul className="mt-4 space-y-2">
                        {capability.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-neutral-300">
                            <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6">
                <Zap className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-400">Unified Platform</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
                AI + Web3.<br />
                <span className="text-neutral-400">Better Together.</span>
              </h2>
              <p className="text-lg text-neutral-400 mb-6">
                Combine Hanzo's AI capabilities with blockchain infrastructure. Let AI agents manage wallets, execute transactions, and interact with smart contracts autonomously.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "AI agents that can send on-chain transactions",
                  "Natural language smart contract interaction",
                  "Automated DeFi strategies with AI optimization",
                  "Cross-chain portfolio management",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-neutral-300">
                    <div className="w-6 h-6 rounded bg-purple-500/10 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-purple-400" />
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
              className="rounded-xl border border-neutral-800 bg-neutral-900/80 overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-950">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-2 text-xs text-neutral-500 font-mono">hanzo-agent.ts</span>
              </div>
              <div className="p-4 font-mono text-sm bg-neutral-950">
                <pre className="text-neutral-300 overflow-x-auto">
{`import { Hanzo } from "@hanzo/ai";
import { Wallet } from "@hanzo/blockchain";

const agent = new Hanzo.Agent({
  model: "claude-sonnet-4-20250514",
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
      <section className="py-24 px-4 md:px-8 bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
              Development Roadmap
            </h2>
            <p className="text-lg text-neutral-400">
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
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 bg-purple-500" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/30 mb-2">
                      {item.phase}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <span className={`text-sm ${item.status === "in-progress" ? "text-green-400" : "text-neutral-500"}`}>
                      {item.status === "in-progress" ? "In Progress" : "Planned"}
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
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
              Multi-Chain from Day One
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
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
              "Ethereum",
              "Polygon",
              "Arbitrum",
              "Optimism",
              "Base",
              "Solana",
              "Cosmos",
              "Avalanche",
              "BNB Chain",
              "Lux",
              "zkSync",
              "Starknet",
            ].map((chain, index) => (
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

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-transparent p-8 md:p-12 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto mb-6">
              <Blocks className="w-8 h-8 text-purple-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
              Ready to Build on Web3?
            </h2>
            <p className="text-lg text-neutral-400 mb-8 max-w-xl mx-auto">
              Join the waitlist to be among the first to access Hanzo's Web3 infrastructure when it launches.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <div className="flex-1 flex items-center gap-2 px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800">
                <Mail className="w-4 h-4 text-neutral-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent text-white placeholder:text-neutral-600 outline-none text-sm"
                  required
                />
              </div>
              <Button
                type="submit"
                className="px-6 py-3 rounded-lg font-medium"
                style={{ backgroundColor: "#8b5cf6" }}
              >
                {submitted ? "Joined!" : "Join Waitlist"}
              </Button>
            </form>

            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-neutral-500">
              <span className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Enterprise-grade security
              </span>
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Multi-chain support
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                AI-native integration
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blockchain;
