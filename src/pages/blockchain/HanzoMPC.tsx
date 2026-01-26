import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Shield,
  Key,
  Lock,
  Users,
  Server,
  Zap,
  ArrowRight,
  Check,
  Globe,
  Cpu,
  FileCode,
  Settings,
  Layers,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Threshold Signatures",
    description: "Split keys across multiple parties. No single point of failure, no single point of compromise.",
  },
  {
    icon: Lock,
    title: "FHE-Powered Rules",
    description: "Fully Homomorphic Encryption enables policy evaluation on encrypted data. Your rules stay private.",
  },
  {
    icon: Users,
    title: "Multi-Party Approval",
    description: "Configure M-of-N approval schemes. Combine human approvers with automated policy checks.",
  },
  {
    icon: Cpu,
    title: "Hardware Security",
    description: "HSM integration for key shares. FIPS 140-2 Level 3 certified infrastructure available.",
  },
  {
    icon: Globe,
    title: "Geo-Distributed",
    description: "Key shares distributed across regions. Survive datacenter failures, meet compliance requirements.",
  },
  {
    icon: RefreshCw,
    title: "Key Refresh",
    description: "Proactive security share refreshing. Rotate shares without changing the public key.",
  },
  {
    icon: Zap,
    title: "Sub-Second Signing",
    description: "Optimized MPC protocols for low-latency signing. Fast enough for real-time applications.",
  },
  {
    icon: FileCode,
    title: "Policy Engine",
    description: "Define spending limits, whitelists, time locks, and custom rules that execute in encrypted space.",
  },
];

const useCases = [
  {
    title: "Institutional Custody",
    description: "Enterprise-grade key management for funds, exchanges, and asset managers.",
  },
  {
    title: "DAO Treasury",
    description: "Multi-sig alternatives that don't leak governance decisions on-chain.",
  },
  {
    title: "Automated Agents",
    description: "Let AI agents transact within encrypted policy boundaries.",
  },
  {
    title: "Compliance-First Wallets",
    description: "Enforce AML/KYC rules at the cryptographic layer.",
  },
];

const HanzoMPC = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8"
          >
            <Shield className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-purple-400">Next-Gen Key Infrastructure</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-white">MPC + FHE</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Wallets
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-2xl md:text-3xl font-medium text-white mb-4"
          >
            Keys that can't be stolen. Rules that can't be seen.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-neutral-400 mb-8 max-w-3xl mx-auto"
          >
            Multi-Party Computation distributes trust. Fully Homomorphic Encryption keeps policies private.
            Together, they're the future of digital asset security.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto"
          >
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4">
              <div className="text-2xl font-bold text-purple-500">0</div>
              <div className="text-sm text-neutral-400">Single points of failure</div>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4">
              <div className="text-2xl font-bold text-purple-500">M-of-N</div>
              <div className="text-sm text-neutral-400">Threshold schemes</div>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4">
              <div className="text-2xl font-bold text-purple-500">&lt;200ms</div>
              <div className="text-sm text-neutral-400">Signing latency</div>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4">
              <div className="text-2xl font-bold text-purple-500">FHE</div>
              <div className="text-sm text-neutral-400">Encrypted rules</div>
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
              href="https://docs.hanzo.ai/mpc"
              className="inline-flex items-center gap-2 px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-full transition-colors"
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

      {/* How It Works */}
      <section className="py-20 px-4 md:px-8 border-t border-neutral-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How MPC + FHE Works</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Cryptographic security without compromising on speed or flexibility
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                <Key className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">1. Key Generation</h3>
              <p className="text-neutral-400">
                Private key is generated as distributed shares. No single party ever holds the complete key.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">2. Policy Encryption</h3>
              <p className="text-neutral-400">
                Spending rules are encrypted with FHE. Policies can be evaluated without decryption.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">3. Threshold Signing</h3>
              <p className="text-neutral-400">
                Parties collaborate to sign. Transaction is broadcast only if policies pass.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 md:px-8 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Enterprise-Grade Features</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-purple-500/30 transition-colors"
              >
                <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-4 bg-purple-500/10">
                  <feature.icon className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-neutral-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Use Cases</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-neutral-400">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 px-4 md:px-8 border-t border-neutral-800">
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
              <span className="text-xs text-neutral-500 ml-2">mpc-wallet.ts</span>
            </div>
            <pre className="p-4 overflow-x-auto text-sm">
              <code className="text-neutral-300">{`import { HanzoMPC } from "@hanzo/blockchain";

// Create MPC wallet with 2-of-3 threshold
const wallet = await HanzoMPC.createWallet({
  threshold: 2,
  parties: 3,
  network: "ethereum",
});

// Define FHE-encrypted spending policy
await wallet.setPolicy({
  maxDailySpend: "10 ETH",
  whitelistedAddresses: [...],
  requireApprovalAbove: "1 ETH",
  // Policy is encrypted - not visible on-chain
  encrypted: true,
});

// Sign transaction with MPC
const signature = await wallet.sign({
  to: "0x...",
  value: "0.5 ETH",
  // Policy evaluation happens in encrypted space
});

// Broadcast only if policy passes
await wallet.broadcast(signature);`}</code>
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
            className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8 md:p-12 text-center overflow-hidden"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for Next-Gen Security?
            </h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-xl mx-auto">
              MPC + FHE is the future of digital asset custody. Be among the first to adopt.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://docs.hanzo.ai/mpc"
                className="inline-flex items-center gap-2 px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-full transition-colors"
              >
                Read the Docs
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/contact/sales"
                className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-neutral-600 hover:border-neutral-500 text-white font-medium rounded-full transition-colors"
              >
                Talk to an Expert
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HanzoMPC;
