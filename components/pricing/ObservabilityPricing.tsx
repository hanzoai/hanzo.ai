'use client'

import React from "react"
import { Button } from "@hanzo/ui"
import { Check } from "lucide-react"

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "For side projects and evaluation",
    features: [
      "10K events/mo",
      "7-day retention",
      "1 project",
      "Basic dashboards",
      "Community support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    description: "For production applications",
    features: [
      "1M events/mo",
      "30-day retention",
      "Unlimited projects",
      "Alerting & webhooks",
      "Custom dashboards",
      "Email support",
      "Trace & span analysis",
      "LLM cost tracking",
    ],
    highlighted: true,
    cta: "Start Free Trial",
  },
  {
    name: "Team",
    price: "$79",
    period: "/mo",
    description: "For growing teams with compliance needs",
    features: [
      "10M events/mo",
      "90-day retention",
      "Unlimited projects",
      "SSO & SAML",
      "Advanced dashboards",
      "Dedicated support",
      "Evaluation pipelines",
      "Annotation queues",
      "Role-based access",
    ],
    highlighted: false,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For mission-critical observability",
    features: [
      "Unlimited events",
      "1-year retention",
      "SLA guarantee (99.9%)",
      "Dedicated support engineer",
      "Audit logs",
      "BYOC / self-hosted",
      "Custom integrations",
      "Volume discounts",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
]

const overage = {
  rate: "$2",
  unit: "/100K events",
  note: "Automatically billed when plan limit exceeded. No hard cutoff.",
}

export default function ObservabilityPricing() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold mb-2">Hanzo Console</h2>
      <p className="text-muted-foreground text-lg mb-8">
        Observability for AI applications. Traces, evals, cost tracking, and prompt management
        for LLM-powered products. Open-source core with enterprise features.
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
                  window.open("https://console.hanzo.ai", "_blank")
                }
              }}
            >
              {tier.cta}
            </Button>
          </div>
        ))}
      </div>

      {/* Overage */}
      <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800/50 inline-block mb-8">
        <h3 className="text-lg font-semibold mb-2">Overage pricing</h3>
        <div className="text-2xl font-bold mb-1">
          {overage.rate}<span className="text-base font-normal text-muted-foreground">{overage.unit}</span>
        </div>
        <p className="text-muted-foreground text-sm">{overage.note}</p>
      </div>

      {/* Included */}
      <div className="bg-gray-900/30 rounded-xl p-8 border border-gray-800/50">
        <h3 className="text-xl font-semibold mb-4">Included with every plan</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
          <div>OpenTelemetry native</div>
          <div>OpenAI SDK integration</div>
          <div>LangChain integration</div>
          <div>REST & SDK ingestion</div>
          <div>Prompt versioning</div>
          <div>Model cost tracking</div>
          <div>Public API</div>
          <div>Self-hosted option</div>
        </div>
      </div>
    </div>
  )
}
