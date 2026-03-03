'use client'

import React from "react"
import { Button } from "@hanzo/ui"
import { Check } from "lucide-react"

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "For prototyping and small-scale search",
    features: [
      "1M vectors",
      "256 dimensions",
      "1 GB RAM",
      "1 collection",
      "Community support",
      "Shared cluster",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$25",
    period: "/mo + usage",
    description: "For production search and retrieval workloads",
    features: [
      "100M vectors",
      "Up to 2,048 dimensions",
      "8 GB RAM",
      "Unlimited collections",
      "Email support",
      "Dedicated endpoints",
      "HNSW + quantization",
      "Snapshots & backups",
    ],
    highlighted: true,
    cta: "Start Free Trial",
  },
  {
    name: "Business",
    price: "$99",
    period: "/mo + usage",
    description: "For large-scale AI applications",
    features: [
      "Unlimited vectors",
      "Unlimited dimensions",
      "32 GB RAM",
      "Unlimited collections",
      "Dedicated support",
      "Private endpoints",
      "Multi-tenant isolation",
      "Custom sharding",
      "Priority indexing",
    ],
    highlighted: false,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For mission-critical deployments",
    features: [
      "Dedicated cluster",
      "Custom RAM & storage",
      "SSO & SAML",
      "Audit logs",
      "SLA guarantee (99.99%)",
      "Named engineer",
      "BYOC / on-premise",
      "Volume discounts",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
]

const usageRates = [
  { resource: "Vectors stored", rate: "$0.015", unit: "/1K vectors/mo", note: "Billed monthly on peak count" },
  { resource: "Search queries", rate: "$0.10", unit: "/1M queries", note: "Includes filtering & hybrid search" },
  { resource: "RAM overage", rate: "$0.25", unit: "/GB/hr", note: "Over plan allocation" },
]

export default function VectorPricing() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold mb-2">Hanzo Vector</h2>
      <p className="text-muted-foreground text-lg mb-8">
        Managed vector database for semantic search, RAG, and recommendation systems.
        S3-compatible snapshots. Zero-downtime scaling.
      </p>

      {/* Tier cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-xl p-6 border flex flex-col ${
              tier.highlighted
                ? "border-white bg-primary/5"
                : "border-gray-800 bg-gray-900/30"
            }`}
          >
            {tier.highlighted && (
              <span className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
            <p className="text-muted-foreground text-sm mb-4">{tier.description}</p>

            <div className="mb-6">
              <span className="text-3xl font-bold">{tier.price}</span>
              <span className="text-muted-foreground">{tier.period}</span>
            </div>

            <ul className="space-y-3 mb-6 flex-1">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-foreground shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              className={`w-full ${
                tier.highlighted
                  ? "bg-primary hover:bg-[#cccccc] text-primary-foreground"
                  : "bg-primary text-primary-foreground hover:bg-gray-100"
              }`}
              onClick={() => {
                if (tier.price === "Custom") {
                  window.location.href = "/contact/sales"
                } else {
                  window.open("https://cloud.hanzo.ai/signup", "_blank")
                }
              }}
            >
              {tier.cta}
            </Button>
          </div>
        ))}
      </div>

      {/* Usage-based pricing */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Usage-based pricing</h3>
        <p className="text-muted-foreground text-sm mb-6">
          Metered on top of your base tier. Pro and Business plans include generous free allocations.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-800/50">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-800 bg-gray-900/30">
                <th className="py-3 px-5 text-muted-foreground font-medium">Resource</th>
                <th className="py-3 px-5 text-muted-foreground font-medium text-right">Rate</th>
                <th className="py-3 px-5 text-muted-foreground font-medium hidden md:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody>
              {usageRates.map((row) => (
                <tr key={row.resource} className="border-b border-gray-800/50 hover:bg-gray-900/20 transition-colors">
                  <td className="py-4 px-5 font-medium">{row.resource}</td>
                  <td className="py-4 px-5 text-right font-mono">
                    {row.rate}<span className="text-muted-foreground text-xs ml-1">{row.unit}</span>
                  </td>
                  <td className="py-4 px-5 text-muted-foreground text-sm hidden md:table-cell">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
