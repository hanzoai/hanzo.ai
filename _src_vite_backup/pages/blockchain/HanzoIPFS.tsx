import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Database,
  Globe,
  Zap,
  Shield,
  ArrowRight,
  Check,
  Server,
  Lock,
  RefreshCw,
  FileCode,
  Layers,
  Cloud,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Pin & Retrieve",
    description: "Pin content to IPFS with a single API call. Retrieve via your dedicated gateway.",
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Content delivered from edge nodes worldwide. Sub-100ms latency globally.",
  },
  {
    icon: Shield,
    title: "Permanent Storage",
    description: "Content-addressed storage with optional Filecoin backup for long-term persistence.",
  },
  {
    icon: RefreshCw,
    title: "Auto-Replication",
    description: "Data replicated across 3+ nodes automatically. Geographic redundancy included.",
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Private gateways with authentication. Token-gated content supported.",
  },
  {
    icon: Server,
    title: "Dedicated Nodes",
    description: "Enterprise: dedicated IPFS nodes with custom configuration and SLAs.",
  },
];

const useCases = [
  { name: "NFT Metadata", description: "Store NFT images, animations, and metadata" },
  { name: "dApp Assets", description: "Host frontend assets for decentralized apps" },
  { name: "Data Archives", description: "Permanent storage for DAOs and protocols" },
  { name: "Media Streaming", description: "Video and audio content delivery" },
];

const HanzoIPFS = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8"
          >
            <Database className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-400">Decentralized Storage</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-white">Hanzo</span>{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-400 bg-clip-text text-transparent">
              IPFS
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-2xl md:text-3xl font-medium text-white mb-4"
          >
            Managed IPFS Pinning & Gateway
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-neutral-400 mb-12 max-w-3xl mx-auto"
          >
            Pin content to IPFS with a single API call. Dedicated gateways with global CDN.
            No infrastructure to manage.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://cloud.hanzo.ai/ipfs"
              className="inline-flex items-center gap-2 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://docs.hanzo.ai/ipfs"
              className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-neutral-700 hover:border-neutral-500 text-white font-medium rounded-full transition-colors"
            >
              Documentation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 md:px-8 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-orange-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-neutral-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 px-4 md:px-8 bg-neutral-950">
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
              <span className="text-xs text-neutral-500 ml-2">ipfs.ts</span>
            </div>
            <pre className="p-4 overflow-x-auto text-sm">
              <code className="text-neutral-300">{`import { HanzoIPFS } from "@hanzo/storage";

const ipfs = new HanzoIPFS({
  apiKey: process.env.HANZO_API_KEY,
});

// Pin a file
const { cid } = await ipfs.pin({
  file: Buffer.from("Hello IPFS!"),
  name: "hello.txt",
});
// cid: QmT78zSuBmuS4z925WZfrqQ1qHaJ56DQaTfyMUF7F8ff5o

// Pin JSON (NFT metadata)
const metadata = await ipfs.pinJSON({
  name: "Cool NFT #1",
  description: "A very cool NFT",
  image: "ipfs://QmXxx...",
  attributes: [
    { trait_type: "Background", value: "Blue" },
  ],
});

// Retrieve via your gateway
const url = ipfs.gatewayURL(cid);
// https://your-gateway.hanzo.network/ipfs/QmT78z...

// Pin from URL
await ipfs.pinFromURL("https://example.com/image.png");

// Unpin when done
await ipfs.unpin(cid);`}</code>
            </pre>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Use Cases</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5"
              >
                <h3 className="font-semibold text-white mb-1">{useCase.name}</h3>
                <p className="text-sm text-neutral-400">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-orange-500/20 to-transparent border border-orange-500/30 rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Store Forever, Serve Instantly
            </h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-xl mx-auto">
              1GB free. Pay only for what you pin. No egress fees.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://cloud.hanzo.ai/signup"
                className="inline-flex items-center gap-2 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition-colors"
              >
                Start Free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/pricing?tab=storage"
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

export default HanzoIPFS;
