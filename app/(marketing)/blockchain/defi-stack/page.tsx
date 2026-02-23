'use client'

import React from "react";
import { motion } from "framer-motion";

import {
  Coins,
  TrendingUp,
  Wallet,
  Shield,
  Lock,
  ArrowRight,
  Check,
  ArrowLeftRight,
  BarChart3,
  Layers,
  Building2,
  Vote,
  Image,
  Cpu,
  FileCode,
  RefreshCw,
  Zap,
  Users,
  Globe
} from "lucide-react";

const defiProducts = [
  {
    category: "Tokens",
    description: "Standard token implementations with Lux-native naming",
    products: [
      { name: "LRC20", description: "ERC20 base implementation with extensions", icon: Coins },
      { name: "LRC20B", description: "Bridgeable tokens (mint/burn by bridge)", icon: ArrowLeftRight },
      { name: "LRC721B", description: "Bridgeable NFT standard", icon: Image },
      { name: "LRC1155B", description: "Bridgeable multi-token standard", icon: Layers },
      { name: "WLUX", description: "Wrapped LUX for DeFi composability", icon: Coins },
    ],
  },
  {
    category: "Liquid Protocol",
    description: "Unified yield vault and liquid staking with xLUX",
    products: [
      { name: "Liquid", description: "Master yield vault - receives ALL protocol fees", icon: TrendingUp },
      { name: "xLUX", description: "Liquid staking token with auto-compounding", icon: RefreshCw },
      { name: "L* Tokens", description: "LETH, LBTC, LUSD, LUSDC, LUSDT, LDAI, LSOL...", icon: Coins },
      { name: "Vault", description: "Cross-chain teleport vault", icon: Shield },
    ],
  },
  {
    category: "Exchange",
    description: "AMM infrastructure and order books",
    products: [
      { name: "AMM V2", description: "Classic constant product pools (x*y=k)", icon: ArrowLeftRight },
      { name: "AMM V3", description: "Concentrated liquidity positions", icon: BarChart3 },
      { name: "LSSVM", description: "NFT AMM with bonding curves", icon: Image },
      { name: "Router", description: "Swap router with multi-hop paths", icon: ArrowRight },
    ],
  },
  {
    category: "Perpetuals",
    description: "Leveraged perpetual futures with up to 50x leverage",
    products: [
      { name: "Vault", description: "Central liquidity pool for perps", icon: Shield },
      { name: "Router", description: "Position management and execution", icon: ArrowLeftRight },
      { name: "LLP", description: "Liquidity provider token", icon: Coins },
      { name: "Position", description: "Keeper-executed limit orders", icon: TrendingUp },
    ],
  },
  {
    category: "Lending",
    description: "Morpho-style isolated lending markets",
    products: [
      { name: "Markets", description: "Core lending market protocol", icon: Building2 },
      { name: "Allocator", description: "Capital allocation optimizer", icon: BarChart3 },
      { name: "Oracle", description: "Price feeds and liquidation oracles", icon: Cpu },
    ],
  },
  {
    category: "Governance",
    description: "On-chain governance with vote-escrowed tokens",
    products: [
      { name: "DAO", description: "Complete DAO implementation", icon: Vote },
      { name: "vLUX", description: "Vote-escrowed LUX for governance", icon: Lock },
      { name: "Gauge", description: "Gauge weight voting system", icon: BarChart3 },
      { name: "Timelock", description: "Timelock controller for proposals", icon: Shield },
    ],
  },
  {
    category: "Safe",
    description: "Multi-sig wallets with post-quantum signer support",
    products: [
      { name: "Safe", description: "Core multi-sig wallet", icon: Shield },
      { name: "FROST", description: "Schnorr threshold signatures", icon: Lock },
      { name: "ML-DSA", description: "Post-quantum (Dilithium) signer", icon: Cpu },
      { name: "Quantum", description: "Full quantum-resistant safe", icon: Shield },
    ],
  },
  {
    category: "Bridge",
    description: "Cross-chain asset transfers via Warp messaging",
    products: [
      { name: "Bridge", description: "Core bridge with Warp verification", icon: ArrowLeftRight },
      { name: "Teleport", description: "Token teleportation interface", icon: Zap },
      { name: "Omnichain", description: "Cross-chain liquidity pools", icon: Globe },
    ],
  },
];

const postQuantum = [
  { name: "FROST", description: "Schnorr threshold signatures (IETF RFC 9591)" },
  { name: "ML-DSA", description: "FIPS 204 / Dilithium lattice signatures" },
  { name: "ML-KEM", description: "FIPS 203 key encapsulation mechanism" },
  { name: "SLH-DSA", description: "SPHINCS+ stateless hash signatures" },
  { name: "Ringtail", description: "Lattice-based threshold signatures" },
  { name: "CGGMP21", description: "ECDSA threshold (MPC) for compatibility" },
  { name: "BLS", description: "BLS aggregate signatures" },
  { name: "Lamport", description: "One-time quantum-safe signatures" },
];

const HanzoDeFiStack = () => {
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
            <TrendingUp className="w-4 h-4 text-foreground" />
            <span className="text-sm font-medium text-foreground/70">DeFi Infrastructure</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-foreground">Hanzo</span>{" "}
            <span className="bg-gradient-to-r from-white to-white/10 bg-clip-text text-transparent">
              DeFi
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-2xl md:text-3xl font-medium text-foreground mb-4"
          >
            Production-Ready DeFi Contracts
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            The complete DeFi stack: tokens, AMMs, lending, perps, governance, and post-quantum security.
            Built on OpenZeppelin, hardened for production.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto"
          >
            <div className="bg-secondary/50 border border-border rounded-xl p-4">
              <div className="text-2xl font-bold text-foreground">709</div>
              <div className="text-sm text-muted-foreground">Tests Passing</div>
            </div>
            <div className="bg-secondary/50 border border-border rounded-xl p-4">
              <div className="text-2xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Contracts</div>
            </div>
            <div className="bg-secondary/50 border border-border rounded-xl p-4">
              <div className="text-2xl font-bold text-foreground">PQ</div>
              <div className="text-sm text-muted-foreground">Quantum-Safe</div>
            </div>
            <div className="bg-secondary/50 border border-border rounded-xl p-4">
              <div className="text-2xl font-bold text-foreground">BSD-3</div>
              <div className="text-sm text-muted-foreground">Open Source</div>
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
              href="https://www.npmjs.com/package/@luxfi/contracts"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary/10 hover:bg-primary/10 text-foreground font-medium rounded-full transition-colors"
            >
              npm install @luxfi/contracts
            </a>
            <a
              href="https://standard.lux.network"
              className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-border hover:border-neutral-500 text-foreground font-medium rounded-full transition-colors"
            >
              View Documentation
            </a>
          </motion.div>
        </div>
      </section>

      {/* DeFi Products */}
      {defiProducts.map((category, categoryIndex) => (
        <section
          key={category.category}
          className={`py-16 px-4 md:px-8 ${categoryIndex % 2 === 0 ? "" : "bg-background"}`}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{category.category}</h2>
              <p className="text-muted-foreground">{category.description}</p>
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
                    className="bg-secondary/50 border border-border rounded-xl p-4 hover:border-border transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-foreground" />
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
      ))}

      {/* Post-Quantum Cryptography */}
      <section className="py-20 px-4 md:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-border mb-6">
              <Shield className="w-4 h-4 text-foreground/70" />
              <span className="text-sm font-medium text-foreground/70">Post-Quantum Ready</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quantum-Resistant Cryptography
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              EVM precompiles for next-generation signature schemes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {postQuantum.map((scheme, index) => (
              <motion.div
                key={scheme.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-secondary/50 border border-border rounded-xl p-4"
              >
                <h3 className="font-semibold text-foreground/70 mb-1">{scheme.name}</h3>
                <p className="text-sm text-muted-foreground">{scheme.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 px-4 md:px-8 bg-background">
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
              <span className="text-xs text-muted-foreground ml-2">MyDeFi.sol</span>
            </div>
            <pre className="p-4 overflow-x-auto text-sm">
              <code className="text-foreground/80">{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@luxfi/contracts/tokens/LRC20.sol";
import "@luxfi/contracts/liquid/LiquidLUX.sol";
import "@luxfi/contracts/safe/Safe.sol";
import "@luxfi/contracts/safe/SafeFROSTSigner.sol";
import "@luxfi/contracts/crypto/precompiles/IMLDSA.sol";

// Create your token
contract MyToken is LRC20 {
    constructor() LRC20("My Token", "MTK") {
        _mint(msg.sender, 1_000_000 * 10**18);
    }
}

// Deposit into yield vault
contract YieldStrategy {
    LiquidLUX public liquidLux;

    function deposit(uint256 amount) external {
        IERC20(WLUX).approve(address(liquidLux), amount);
        liquidLux.deposit(amount, msg.sender);
    }
}

// Post-quantum signature verification
contract QuantumSafe {
    function verifyQuantumSig(
        bytes memory publicKey,
        bytes memory message,
        bytes memory signature
    ) external view returns (bool) {
        return IMLDSA.verify(publicKey, message, signature);
    }
}`}</code>
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
            className="relative bg-gradient-to-br from-white/20 to-transparent border border-border rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Build DeFi with Confidence
            </h2>
            <p className="text-xl text-foreground/80 mb-8 max-w-xl mx-auto">
              Production-ready contracts. Comprehensive tests. Post-quantum security.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/luxfi/standard"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary/10 hover:bg-primary/10 text-foreground font-medium rounded-full transition-colors"
              >
                View on GitHub
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://standard.lux.network"
                className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-neutral-600 hover:border-neutral-500 text-foreground font-medium rounded-full transition-colors"
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

export default HanzoDeFiStack;
