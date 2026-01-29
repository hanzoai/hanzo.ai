import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowLeftRight,
  TrendingUp,
  Zap,
  Shield,
  Globe,
  BarChart3,
  Layers,
  ArrowRight,
  Check,
  Database,
  Activity,
  Lock,
  Settings,
  RefreshCw,
} from "lucide-react";

const exchangeProducts = [
  {
    id: "amm",
    name: "AMM Infrastructure",
    description: "Deploy and manage automated market makers across chains",
    icon: RefreshCw,
    color: "#22c55e",
    features: [
      "Constant product (x*y=k) pools",
      "Concentrated liquidity positions",
      "Multi-token weighted pools",
      "Custom bonding curves",
      "Flash loan support",
      "MEV-resistant design",
    ],
    href: "/blockchain/amm",
  },
  {
    id: "dex",
    name: "DEX Aggregator",
    description: "Route swaps across 100+ DEXs for best execution",
    icon: ArrowLeftRight,
    color: "#f59e0b",
    features: [
      "Multi-DEX price comparison",
      "Split route optimization",
      "Cross-chain swaps",
      "Limit order support",
      "Gas optimization",
      "MEV protection",
    ],
    href: "/blockchain/dex",
  },
  {
    id: "orderbook",
    name: "Order Book Engine",
    description: "High-performance matching engine for CEX-grade trading",
    icon: BarChart3,
    color: "#f97316",
    features: [
      "Sub-millisecond matching",
      "Millions of orders/second",
      "Market & limit orders",
      "Stop-loss & take-profit",
      "Margin trading support",
      "Real-time feeds",
    ],
    href: "/blockchain/orderbook",
  },
  {
    id: "liquidity",
    name: "Liquidity Network",
    description: "Access deep liquidity pools and market makers",
    icon: Layers,
    color: "#fd4444",
    features: [
      "Institutional liquidity",
      "RFQ (Request for Quote)",
      "OTC desk integration",
      "Market maker APIs",
      "Liquidity mining",
      "LP analytics",
    ],
    href: "/blockchain/liquidity",
  },
];

const capabilities = [
  { icon: Zap, title: "Sub-ms Latency", description: "Colocated infrastructure for fastest execution" },
  { icon: Globe, title: "Multi-Chain", description: "Trade across 100+ networks from one interface" },
  { icon: Shield, title: "MEV Protected", description: "Private transactions and fair ordering" },
  { icon: Activity, title: "Real-time Data", description: "WebSocket feeds with tick-level precision" },
  { icon: Lock, title: "Self-Custody", description: "Non-custodial trading with your own keys" },
  { icon: Database, title: "Historical Data", description: "Full trade history and OHLCV archives" },
];

const HanzoExchange = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Navbar />

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fd4444]/10 border border-[#fd4444]/20 mb-8"
          >
            <TrendingUp className="w-4 h-4 text-[#fd4444]" />
            <span className="text-sm font-medium text-[#ff6b6b]">Exchange Infrastructure</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-white">Hanzo</span>{" "}
            <span className="bg-gradient-to-r from-[#fd4444] to-[#ff6b6b] bg-clip-text text-transparent">
              Exchange
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-2xl md:text-3xl font-medium text-white mb-4"
          >
            AMM. DEX. Order Books. All-in-One.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-neutral-400 mb-12 max-w-3xl mx-auto"
          >
            Build trading platforms with institutional-grade infrastructure. From AMM pools to
            high-frequency order books—everything you need to power digital asset trading.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://docs.hanzo.ai/exchange"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#fd4444] hover:bg-[#e03e3e] text-white font-medium rounded-full transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/contact/sales"
              className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-neutral-700 hover:border-neutral-500 text-white font-medium rounded-full transition-colors"
            >
              Contact Sales
            </a>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 md:px-8 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Exchange Products</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Choose your trading model or combine them for hybrid exchanges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {exchangeProducts.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-[#fd4444]/30 transition-colors"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${product.color}1a` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: product.color }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                      <p className="text-neutral-400 text-sm">{product.description}</p>
                    </div>
                  </div>

                  <ul className="grid grid-cols-2 gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-neutral-300">
                        <Check className="w-4 h-4 text-[#fd4444]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={product.href}
                    className="inline-flex items-center gap-2 text-[#fd4444] hover:text-[#ff6b6b] text-sm font-medium"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-4 md:px-8 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Institutional-Grade Infrastructure
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-[#fd4444]/10 flex items-center justify-center mx-auto mb-3">
                  <cap.icon className="w-5 h-5 text-[#fd4444]" />
                </div>
                <h3 className="font-semibold text-white text-sm mb-1">{cap.title}</h3>
                <p className="text-xs text-neutral-500">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-2 border-b border-neutral-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-neutral-700" />
                <div className="w-3 h-3 rounded-full bg-neutral-700" />
                <div className="w-3 h-3 rounded-full bg-neutral-700" />
              </div>
              <span className="text-xs text-neutral-500 ml-2">exchange.ts</span>
            </div>
            <pre className="p-4 overflow-x-auto text-sm">
              <code className="text-neutral-300">{`import { HanzoExchange } from "@hanzo/blockchain";

const exchange = new HanzoExchange({
  apiKey: process.env.HANZO_API_KEY,
});

// DEX Aggregator - Find best swap route
const quote = await exchange.dex.getQuote({
  fromToken: "ETH",
  toToken: "USDC",
  amount: "1.0",
  slippage: 0.5, // 0.5%
});

console.log("Best route:", quote.route);
console.log("Expected output:", quote.outputAmount);
console.log("Price impact:", quote.priceImpact);

// Execute swap with MEV protection
const tx = await exchange.dex.swap(quote, {
  mevProtection: true,
  privateTransaction: true,
});

// Or use Order Book for limit orders
await exchange.orderbook.placeLimitOrder({
  pair: "ETH/USDC",
  side: "buy",
  price: 2000,
  amount: 1.0,
});`}</code>
            </pre>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#fd4444]/20 to-transparent border border-[#fd4444]/30 rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Build Your Exchange
            </h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-xl mx-auto">
              From DeFi protocols to institutional trading platforms—we have the infrastructure.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://docs.hanzo.ai/exchange"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#fd4444] hover:bg-[#e03e3e] text-white font-medium rounded-full transition-colors"
              >
                Read the Docs
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/pricing?tab=blockchain"
                className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-neutral-600 hover:border-neutral-500 text-white font-medium rounded-full transition-colors"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HanzoExchange;
