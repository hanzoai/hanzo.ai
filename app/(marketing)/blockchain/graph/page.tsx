'use client'

import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Zap,
  Shield,
  ArrowRight,
  Server,
  Code,
  Search,
  Layers,
  Activity,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    icon: Code,
    title: "GraphQL API",
    description: "Define your schema, deploy your subgraph, query with GraphQL. No backend needed.",
  },
  {
    icon: Zap,
    title: "Real-time Indexing",
    description: "Events indexed in real-time. Queries reflect the latest on-chain state.",
  },
  {
    icon: Layers,
    title: "Multi-chain",
    description: "Deploy the same subgraph across 100+ chains. Unified data layer.",
  },
  {
    icon: Activity,
    title: "Auto-scaling",
    description: "Handle traffic spikes automatically. No manual scaling required.",
  },
  {
    icon: Shield,
    title: "High Availability",
    description: "99.999% uptime SLA. Redundant infrastructure across regions.",
  },
  {
    icon: RefreshCw,
    title: "Version Control",
    description: "Deploy new versions without downtime. Rollback instantly if needed.",
  },
];

const supportedChains = [
  "Ethereum", "Polygon", "Arbitrum", "Optimism", "Base", "BNB Chain",
  "Avalanche", "Gnosis", "Celo", "Fantom", "Moonbeam", "Lux Network",
];

const HanzoGraph = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-border mb-8"
          >
            <Database className="w-4 h-4 text-foreground/70" />
            <span className="text-sm font-medium text-foreground/70">Hosted Subgraphs</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-foreground">Hanzo</span>{" "}
            <span className="bg-gradient-to-r from-white/20 to-white/10 bg-clip-text text-transparent">
              Graph
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-2xl md:text-3xl font-medium text-foreground mb-4"
          >
            Hosted Graph Node & Subgraphs
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto"
          >
            Deploy subgraphs in seconds. Query on-chain data via GraphQL.
            Fully managed Graph Node infrastructure.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto"
          >
            <div className="bg-secondary/50 border border-border rounded-xl p-4">
              <div className="text-2xl font-bold text-foreground/70">100+</div>
              <div className="text-sm text-muted-foreground">Chains</div>
            </div>
            <div className="bg-secondary/50 border border-border rounded-xl p-4">
              <div className="text-2xl font-bold text-foreground/70">&lt;1s</div>
              <div className="text-sm text-muted-foreground">Index Latency</div>
            </div>
            <div className="bg-secondary/50 border border-border rounded-xl p-4">
              <div className="text-2xl font-bold text-foreground/70">99.999%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="bg-secondary/50 border border-border rounded-xl p-4">
              <div className="text-2xl font-bold text-foreground/70">∞</div>
              <div className="text-sm text-muted-foreground">Queries</div>
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
              href="https://cloud.hanzo.ai/graph"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary/10 hover:bg-primary/10 text-foreground font-medium rounded-full transition-colors"
            >
              Deploy Subgraph
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://docs.hanzo.ai/graph"
              className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-border hover:border-neutral-500 text-foreground font-medium rounded-full transition-colors"
            >
              Documentation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 md:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-border transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-foreground/70" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Chains */}
      <section className="py-20 px-4 md:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Supported Chains</h2>
            <p className="text-muted-foreground">Deploy subgraphs across the entire EVM ecosystem</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {supportedChains.map((chain) => (
              <span
                key={chain}
                className="px-4 py-2 bg-secondary border border-border rounded-full text-sm text-foreground/80"
              >
                {chain}
              </span>
            ))}
            <span className="px-4 py-2 bg-primary/5 border border-border rounded-full text-sm text-foreground/70">
              +88 more chains
            </span>
          </motion.div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
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
              <span className="text-xs text-muted-foreground ml-2">schema.graphql</span>
            </div>
            <pre className="p-4 overflow-x-auto text-sm">
              <code className="text-foreground/80">{`# Define your schema
type Token @entity {
  id: ID!
  name: String!
  symbol: String!
  totalSupply: BigInt!
  holders: [Holder!]! @derivedFrom(field: "token")
}

type Holder @entity {
  id: ID!
  address: Bytes!
  token: Token!
  balance: BigInt!
}

type Transfer @entity {
  id: ID!
  from: Bytes!
  to: Bytes!
  value: BigInt!
  timestamp: BigInt!
  blockNumber: BigInt!
}

# Query your data
query GetTopHolders($tokenId: ID!) {
  token(id: $tokenId) {
    name
    symbol
    totalSupply
    holders(first: 10, orderBy: balance, orderDirection: desc) {
      address
      balance
    }
  }
}`}</code>
            </pre>
          </motion.div>
        </div>
      </section>

      {/* Deploy Steps */}
      <section className="py-20 px-4 md:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Deploy in 3 Steps</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { step: "1", title: "Create Subgraph", code: "npx graph init --from-contract 0x... --network ethereum" },
              { step: "2", title: "Build", code: "npx graph codegen && npx graph build" },
              { step: "3", title: "Deploy to Hanzo", code: "npx graph deploy --node https://graph.hanzo.ai/deploy my-subgraph" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 bg-secondary/50 border border-border rounded-xl p-4"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-foreground font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <code className="text-sm text-foreground/70 bg-neutral-800 px-2 py-1 rounded">
                    {item.code}
                  </code>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-white/20 to-white/10 border border-border rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Index Everything
            </h2>
            <p className="text-xl text-foreground/80 mb-8 max-w-xl mx-auto">
              Free tier includes 100K queries/day. Scale to billions.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://cloud.hanzo.ai/signup"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary/10 hover:bg-primary/10 text-foreground font-medium rounded-full transition-colors"
              >
                Start Free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/pricing?tab=data"
                className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-neutral-600 hover:border-neutral-500 text-foreground font-medium rounded-full transition-colors"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      
    </div>
  );
};

export default HanzoGraph;
