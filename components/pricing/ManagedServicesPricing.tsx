'use client'

import React from "react"
import { Button } from "@hanzo/ui"

const services = [
  {
    name: "KV (Valkey/Redis)",
    description: "In-memory cache and message broker",
    freeTier: "256 MB shared",
    pro: "$15/mo per GB",
    note: "Shared or dedicated. Persistence optional.",
  },
  {
    name: "SQL (PostgreSQL)",
    description: "Managed relational database with pgvector",
    freeTier: "1 GB storage",
    pro: "$25/mo starter",
    note: "Connection pooling included. Daily backups.",
  },
  {
    name: "Search (Meilisearch)",
    description: "Instant full-text and faceted search",
    freeTier: "100K documents",
    pro: "$20/mo per index",
    note: "Typo-tolerant. Sub-50ms p99.",
  },
  {
    name: "MQ (Message Queue)",
    description: "Durable job queues with priority scheduling",
    freeTier: "10K jobs/mo",
    pro: "$15/mo per 1M jobs",
    note: "Priority queues. Dead-letter support.",
  },
  {
    name: "S3 / Storage",
    description: "S3-compatible object storage",
    freeTier: "5 GB",
    pro: "$0.02/GB/mo",
    note: "S3 API. CDN edge caching available.",
  },
  {
    name: "Stream (Kafka)",
    description: "Event streaming with Kafka wire protocol",
    freeTier: "1M messages/mo",
    pro: "$25/mo per topic",
    note: "NATS JetStream backend. Exactly-once delivery.",
  },
]

export default function ManagedServicesPricing() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold mb-2">Managed Services</h2>
      <p className="text-muted-foreground text-lg mb-8">
        Fully managed infrastructure services. One-click provisioning, automated backups,
        and zero-downtime scaling. All services include IAM SSO and KMS-managed secrets.
      </p>

      <div className="overflow-x-auto rounded-xl border border-gray-800/50">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-800 bg-gray-900/30">
              <th className="py-3 px-5 text-muted-foreground font-medium">Service</th>
              <th className="py-3 px-5 text-muted-foreground font-medium">Free Tier</th>
              <th className="py-3 px-5 text-muted-foreground font-medium">Pro</th>
              <th className="py-3 px-5 text-muted-foreground font-medium hidden md:table-cell">Notes</th>
            </tr>
          </thead>
          <tbody>
            {services.map((svc) => (
              <tr key={svc.name} className="border-b border-gray-800/50 hover:bg-gray-900/20 transition-colors">
                <td className="py-4 px-5">
                  <div className="font-medium">{svc.name}</div>
                  <div className="text-xs text-muted-foreground">{svc.description}</div>
                </td>
                <td className="py-4 px-5 text-sm text-green-400 font-medium">{svc.freeTier}</td>
                <td className="py-4 px-5 text-sm font-mono">{svc.pro}</td>
                <td className="py-4 px-5 text-muted-foreground text-sm hidden md:table-cell">{svc.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-muted-foreground mt-6">
        All managed services run on Hanzo Cloud with automated failover, end-to-end encryption,
        and multi-region replication available on Business and Enterprise plans.
      </p>

      <div className="flex justify-center mt-8">
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-gray-100 px-8 py-3"
          onClick={() => window.open("https://cloud.hanzo.ai", "_blank")}
        >
          Deploy Now
        </Button>
      </div>
    </div>
  )
}
