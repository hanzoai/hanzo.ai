"use client"

import { motion } from "framer-motion"
import {
  Database,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Layers,
  Radio,
  Server,
} from "lucide-react"
import { OSSRevenueBanner } from "@/components/oss/OSSRevenueBanner"
import OSSComputeDividends from "@/components/oss/OSSComputeDividends"

export default function KVPage() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)", filter: "blur(100px)" }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-border mb-8">
            <Database className="w-4 h-4 text-foreground" />
            <span className="text-sm font-medium text-foreground/80">Managed Valkey</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Hanzo</span>{" "}
            <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">KV</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-2xl md:text-3xl font-medium text-foreground mb-4">
            In-memory key-value store
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Managed Redis/Valkey for caching, sessions, rate limiting, and pub/sub. Sub-millisecond latency. Persistent storage. Fully Redis-compatible.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
            <div className="bg-secondary/50 border border-border rounded-xl p-4"><div className="text-2xl font-bold text-foreground">&lt;1ms</div><div className="text-sm text-muted-foreground">Latency</div></div>
            <div className="bg-secondary/50 border border-border rounded-xl p-4"><div className="text-2xl font-bold text-foreground">Redis</div><div className="text-sm text-muted-foreground">Compatible</div></div>
            <div className="bg-secondary/50 border border-border rounded-xl p-4"><div className="text-2xl font-bold text-foreground">AOF</div><div className="text-sm text-muted-foreground">Persistence</div></div>
            <div className="bg-secondary/50 border border-border rounded-xl p-4"><div className="text-2xl font-bold text-foreground">Cluster</div><div className="text-sm text-muted-foreground">Mode</div></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-wrap justify-center gap-4">
            <a href="https://docs.hanzo.ai/kv" className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-accent text-primary-foreground font-medium rounded-full transition-colors">Get Started <ArrowRight className="w-4 h-4" /></a>
            <a href="https://github.com/hanzoai/kv" className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-border hover:border-neutral-500 text-foreground font-medium rounded-full transition-colors">GitHub</a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Redis You Don&apos;t Have to Manage</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Drop-in Redis replacement. Automated failover, backups, and scaling.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Sub-Millisecond", description: "In-memory reads and writes under 1ms. Pipelining and connection pooling built in." },
              { icon: Layers, title: "All Data Structures", description: "Strings, hashes, lists, sets, sorted sets, streams, bitmaps, HyperLogLog, and geospatial." },
              { icon: Radio, title: "Pub/Sub", description: "Real-time pub/sub messaging. Pattern subscriptions. Keyspace notifications." },
              { icon: Clock, title: "TTL & Eviction", description: "Automatic key expiration. LRU, LFU, and volatile eviction policies. Memory management." },
              { icon: Server, title: "Persistence", description: "AOF and RDB snapshots. Automatic backups. Point-in-time recovery." },
              { icon: Shield, title: "ACL & TLS", description: "User-level ACLs with command restrictions. TLS encryption. Password auth or IAM." },
            ].map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-neutral-600 transition-colors">
                <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-4 bg-primary/10"><feature.icon className="h-6 w-6 text-foreground" /></div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Use Any Redis Client</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-secondary border border-border rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border"><div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-neutral-700" /><div className="w-3 h-3 rounded-full bg-neutral-700" /><div className="w-3 h-3 rounded-full bg-neutral-700" /></div><span className="text-xs text-muted-foreground ml-2">cache.ts</span></div>
            <pre className="p-4 overflow-x-auto text-sm"><code className="text-foreground/80">{`import Redis from "ioredis"

const kv = new Redis("redis://kv.hanzo.ai:6379")

// Caching
await kv.set("user:123", JSON.stringify(user), "EX", 3600)
const cached = await kv.get("user:123")

// Rate limiting
const count = await kv.incr("ratelimit:api:usr_123")
await kv.expire("ratelimit:api:usr_123", 60)

// Pub/Sub
kv.subscribe("events")
kv.on("message", (channel, message) => {
  console.log(channel, message)
})`}</code></pre>
          </motion.div>
        </div>
      </section>

      <OSSRevenueBanner upstreamName="Valkey" />
      <OSSComputeDividends variant="banner" />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative bg-secondary/50 border border-border rounded-2xl p-8 md:p-12 text-center overflow-hidden">
            <div className="absolute inset-0 overflow-hidden"><div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" /><div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" /></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Cache Everything. Miss Nothing.</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">Free tier includes 256 MB. Provision in seconds.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://docs.hanzo.ai/kv" className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-accent text-primary-foreground font-medium rounded-full transition-colors">Get Started <ArrowRight className="w-4 h-4" /></a>
                <a href="https://github.com/hanzoai/kv" className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-border hover:border-neutral-500 text-foreground font-medium rounded-full transition-colors">View on GitHub</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
