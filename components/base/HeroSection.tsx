'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Database,
  Lock,
  Zap,
  Globe,
  HardDrive,
  Radio,
  Check,
  Copy,
  ExternalLink,
} from "lucide-react";

const BRAND_COLOR = "#ffffff";

const FEATURES = [
  { id: "database", label: "Database", icon: Database },
  { id: "auth", label: "Auth", icon: Lock },
  { id: "functions", label: "Functions", icon: Zap },
  { id: "storage", label: "Storage", icon: HardDrive },
  { id: "realtime", label: "Realtime", icon: Radio },
];

const FeatureDemo = ({ activeTab }: { activeTab: string }) => {
  const demos: Record<string, { title: string; code: string }> = {
    database: {
      title: "PostgreSQL + pgvector",
      code: `const { data, error } = await hanzo
  .from('products')
  .select('*')
  .textSearch('name', 'coffee')
  .limit(10)

// Vector similarity search
const similar = await hanzo.rpc('match_documents', {
  query_embedding: embedding,
  match_threshold: 0.8
})`,
    },
    auth: {
      title: "Authentication",
      code: `// Sign up with email
const { user } = await hanzo.auth.signUp({
  email: 'user@example.com',
  password: 'secure-password'
})

// OAuth providers
await hanzo.auth.signInWithOAuth({
  provider: 'github'
})`,
    },
    functions: {
      title: "Edge Functions",
      code: `// Deno-powered edge functions
Deno.serve(async (req) => {
  const { name } = await req.json()

  return new Response(
    JSON.stringify({ message: \`Hello \${name}!\` }),
    { headers: { 'Content-Type': 'application/json' } }
  )
})`,
    },
    storage: {
      title: "Object Storage",
      code: `// Upload file
const { data } = await hanzo.storage
  .from('avatars')
  .upload('user-123/avatar.png', file)

// Get public URL
const { publicUrl } = hanzo.storage
  .from('avatars')
  .getPublicUrl('user-123/avatar.png')`,
    },
    realtime: {
      title: "Realtime Subscriptions",
      code: `// Subscribe to changes
const channel = hanzo
  .channel('room-1')
  .on('postgres_changes',
    { event: '*', schema: 'public', table: 'messages' },
    (payload) => console.log(payload)
  )
  .subscribe()

// Broadcast presence
channel.track({ user: 'user-123', online: true })`,
    },
  };

  const demo = demos[activeTab];

  return (
    <div className="rounded-xl border border-neutral-700 bg-neutral-900/95 backdrop-blur-sm overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-950">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
        </div>
        <AnimatePresence mode="wait">
          <motion.span
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-xs text-neutral-500 font-mono ml-2"
          >
            {demo.title}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="p-4 bg-neutral-950">
        <AnimatePresence mode="wait">
          <motion.pre
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="text-sm font-mono text-neutral-300 overflow-x-auto"
          >
            <code>{demo.code}</code>
          </motion.pre>
        </AnimatePresence>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("database");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx hanzo init");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15"
          style={{
            background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
              style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
            >
              Open Source • Self-Hostable • Scalable
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
            >
              <span className="text-white">Backend for</span>
              <br />
              <span className="text-neutral-400">modern apps.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base lg:text-lg text-neutral-400 leading-relaxed mb-8 max-w-xl"
            >
              PostgreSQL database, authentication, edge functions, realtime subscriptions, and storage. Everything you need, nothing you don't.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex flex-wrap items-center gap-4 mb-6"
            >
              <Link
                href="/signup"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm"
                style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
              >
                Start building
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="https://docs.hanzo.ai/base"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"
              >
                Documentation
              </a>
            </motion.div>

            {/* Install command */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800">
                <code className="text-sm font-mono text-neutral-300">npx hanzo init</code>
                <button
                  onClick={handleCopy}
                  className="text-neutral-500 hover:text-white transition-colors"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-white/70" /> : <Copy className="h-3.5 w-3.5" />}
                </button>
              </div>
            </motion.div>

            {/* Feature tabs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="flex flex-wrap gap-2"
            >
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                const isActive = activeTab === feature.id;
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveTab(feature.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      isActive
                        ? "bg-white text-white"
                        : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {feature.label}
                  </button>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Code Demo */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <FeatureDemo activeTab={activeTab} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
