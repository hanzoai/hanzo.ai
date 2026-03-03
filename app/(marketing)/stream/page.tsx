"use client"

import { motion } from "framer-motion"
import {
  Radio,
  ArrowRight,
  Zap,
  Shield,
  Server,
  GitBranch,
  BarChart3,
  Layers,
} from "lucide-react"

export default function StreamPage() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)",
              filter: "blur(100px)",
            }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-border mb-8">
            <Radio className="w-4 h-4 text-foreground" />
            <span className="text-sm font-medium text-foreground/80">Kafka Wire Protocol</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Hanzo</span>{" "}
            <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">Stream</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-2xl md:text-3xl font-medium text-foreground mb-4">
            Kafka clients, JetStream durability
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Use standard Kafka producers and consumers with NATS JetStream as the backend. No ZooKeeper, no broker management, no JVM tuning. Just durable event streaming.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
            <div className="bg-secondary/50 border border-border rounded-xl p-4"><div className="text-2xl font-bold text-foreground">Kafka</div><div className="text-sm text-muted-foreground">Wire protocol</div></div>
            <div className="bg-secondary/50 border border-border rounded-xl p-4"><div className="text-2xl font-bold text-foreground">NATS</div><div className="text-sm text-muted-foreground">JetStream</div></div>
            <div className="bg-secondary/50 border border-border rounded-xl p-4"><div className="text-2xl font-bold text-foreground">0</div><div className="text-sm text-muted-foreground">JVM overhead</div></div>
            <div className="bg-secondary/50 border border-border rounded-xl p-4"><div className="text-2xl font-bold text-foreground">Durable</div><div className="text-sm text-muted-foreground">At-least-once</div></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-wrap justify-center gap-4">
            <a href="https://docs.hanzo.ai/stream" className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-accent text-primary-foreground font-medium rounded-full transition-colors">Get Started <ArrowRight className="w-4 h-4" /></a>
            <a href="https://github.com/hanzoai/stream" className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-border hover:border-neutral-500 text-foreground font-medium rounded-full transition-colors">GitHub</a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Kafka Without the Pain</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Keep your Kafka clients. Drop the operational burden.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Layers, title: "Kafka Compatible", description: "Standard Kafka wire protocol. Use kafka-python, sarama, confluent-kafka, or any Kafka client library." },
              { icon: Zap, title: "JetStream Backend", description: "NATS JetStream provides durable, replicated storage with at-least-once delivery guarantees." },
              { icon: Server, title: "Zero JVM", description: "No Java, no ZooKeeper, no broker tuning. Single Go binary with minimal resource usage." },
              { icon: GitBranch, title: "Consumer Groups", description: "Full consumer group support with automatic partition rebalancing and offset management." },
              { icon: BarChart3, title: "Topic Management", description: "Create, list, and delete topics via Kafka admin API. Retention policies and compaction." },
              { icon: Shield, title: "TLS & Auth", description: "SASL/PLAIN and SASL/SCRAM authentication. TLS encryption in transit. ACL support." },
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Drop-In Kafka Replacement</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-secondary border border-border rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border"><div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-neutral-700" /><div className="w-3 h-3 rounded-full bg-neutral-700" /><div className="w-3 h-3 rounded-full bg-neutral-700" /></div><span className="text-xs text-muted-foreground ml-2">producer.py</span></div>
            <pre className="p-4 overflow-x-auto text-sm"><code className="text-foreground/80">{`from kafka import KafkaProducer, KafkaConsumer

# Just change the bootstrap server
producer = KafkaProducer(
    bootstrap_servers=["stream.hanzo.ai:9092"],
    value_serializer=lambda v: json.dumps(v).encode(),
)

producer.send("events", {"type": "user.signup", "user_id": "usr_123"})

# Consumer groups work identically
consumer = KafkaConsumer(
    "events",
    bootstrap_servers=["stream.hanzo.ai:9092"],
    group_id="my-service",
    auto_offset_reset="earliest",
)

for message in consumer:
    process(message.value)`}</code></pre>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative bg-secondary/50 border border-border rounded-2xl p-8 md:p-12 text-center overflow-hidden">
            <div className="absolute inset-0 overflow-hidden"><div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" /><div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" /></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Stream Events at Scale</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">Migrate from Kafka in minutes. Keep your existing code.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://docs.hanzo.ai/stream" className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-accent text-primary-foreground font-medium rounded-full transition-colors">Read the Docs <ArrowRight className="w-4 h-4" /></a>
                <a href="https://github.com/hanzoai/stream" className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-border hover:border-neutral-500 text-foreground font-medium rounded-full transition-colors">View on GitHub</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
