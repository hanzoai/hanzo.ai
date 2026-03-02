'use client'

import React from "react";
import { Button } from "@hanzo/ui";
import { Check, Search, Globe, Database, ArrowRight } from "lucide-react";
import Link from "next/link";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  popular?: boolean;
  contactSales?: boolean;
}

function TierCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={`rounded-xl p-7 border flex flex-col h-full ${
        tier.popular
          ? "bg-primary/5 border-primary/40"
          : "bg-gray-900/30 border-gray-800/50"
      }`}
    >
      {tier.popular && (
        <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full self-start mb-3">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
      <p className="text-muted-foreground text-sm mb-5">{tier.description}</p>

      <div className="mb-1">
        <span className="text-4xl font-bold">{tier.price}</span>
        {tier.period && (
          <span className="text-muted-foreground text-sm">{tier.period}</span>
        )}
      </div>

      <ul className="space-y-2 text-sm text-muted-foreground my-6 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <Button
        size="lg"
        variant={tier.popular ? "default" : "outline"}
        className="w-full"
        asChild
      >
        {tier.contactSales ? (
          <Link href="/contact">{tier.cta}</Link>
        ) : (
          <a href={tier.ctaHref} target="_blank" rel="noopener noreferrer">
            {tier.cta}
          </a>
        )}
      </Button>
    </div>
  );
}

const searchTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    description: "For small docs sites and blogs getting started with search.",
    features: [
      "Up to 10,000 documents",
      "50,000 searches/mo",
      "1,000 AI chat sessions/mo",
      "Hybrid fulltext + vector search",
      "Publishable key (pk-*) for browser use",
      "Standard support",
    ],
    cta: "Start Free Trial",
    ctaHref: "https://cloud.hanzo.ai/signup",
  },
  {
    name: "Growth",
    price: "$499",
    period: "/mo",
    description: "For growing documentation platforms and SaaS products.",
    popular: true,
    features: [
      "Up to 100,000 documents",
      "500,000 searches/mo",
      "10,000 AI chat sessions/mo",
      "Hybrid fulltext + vector search",
      "Custom branding and domains",
      "Analytics dashboard",
      "Priority support",
    ],
    cta: "Start Free Trial",
    ctaHref: "https://cloud.hanzo.ai/signup",
  },
  {
    name: "Scale",
    price: "$2,499",
    period: "/mo",
    description: "For large-scale deployments with high availability.",
    features: [
      "Up to 1,000,000 documents",
      "Unlimited searches/mo",
      "100,000 AI chat sessions/mo",
      "Hybrid fulltext + vector search",
      "Dedicated infrastructure",
      "SSO / SAML authentication",
      "SLA with 99.99% uptime",
      "24/7 priority support",
    ],
    cta: "Start Free Trial",
    ctaHref: "https://cloud.hanzo.ai/signup",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations requiring unlimited scale and custom SLAs.",
    contactSales: true,
    features: [
      "Unlimited documents",
      "Unlimited searches/mo",
      "Unlimited AI chat sessions/mo",
      "Hybrid fulltext + vector search",
      "Dedicated infrastructure",
      "Custom model fine-tuning",
      "On-premise / VPC deployment",
      "Named account engineer",
      "Custom SLA",
    ],
    cta: "Contact Sales",
    ctaHref: "/contact",
  },
];

const crawlTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    description: "For crawling and indexing small to medium websites.",
    features: [
      "Up to 10,000 pages/mo",
      "Scheduled crawls (daily)",
      "JavaScript rendering",
      "Structured data extraction",
      "Webhook notifications",
      "Standard support",
    ],
    cta: "Start Free Trial",
    ctaHref: "https://cloud.hanzo.ai/signup",
  },
  {
    name: "Growth",
    price: "$499",
    period: "/mo",
    description: "For large-scale web crawling with advanced extraction.",
    popular: true,
    features: [
      "Up to 500,000 pages/mo",
      "Scheduled crawls (hourly)",
      "JavaScript rendering",
      "AI-powered content extraction",
      "Custom extraction rules",
      "Sitemap auto-discovery",
      "Priority support",
    ],
    cta: "Start Free Trial",
    ctaHref: "https://cloud.hanzo.ai/signup",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For unlimited crawling with custom infrastructure.",
    contactSales: true,
    features: [
      "Unlimited pages/mo",
      "Real-time crawling",
      "JavaScript rendering",
      "AI-powered content extraction",
      "Custom extraction pipelines",
      "Dedicated proxy infrastructure",
      "On-premise deployment",
      "Named account engineer",
      "Custom SLA",
    ],
    cta: "Contact Sales",
    ctaHref: "/contact",
  },
];

const vectorTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    description: "For small-scale vector search and RAG applications.",
    features: [
      "Up to 1M vectors",
      "10 collections",
      "128 to 4096 dimensions",
      "HNSW + quantization",
      "REST and gRPC APIs",
      "Standard support",
    ],
    cta: "Start Free Trial",
    ctaHref: "https://cloud.hanzo.ai/signup",
  },
  {
    name: "Growth",
    price: "$299",
    period: "/mo",
    description: "For production RAG pipelines and semantic search at scale.",
    popular: true,
    features: [
      "Up to 100M vectors",
      "Unlimited collections",
      "128 to 4096 dimensions",
      "HNSW + quantization",
      "Hybrid sparse + dense search",
      "Multi-tenancy with payload filtering",
      "Snapshots and backups",
      "Priority support",
    ],
    cta: "Start Free Trial",
    ctaHref: "https://cloud.hanzo.ai/signup",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For mission-critical vector workloads at any scale.",
    contactSales: true,
    features: [
      "Unlimited vectors",
      "Unlimited collections",
      "Distributed clusters",
      "HNSW + quantization",
      "Hybrid sparse + dense search",
      "Sharding and replication",
      "VPC / on-premise deployment",
      "Named account engineer",
      "Custom SLA with 99.99% uptime",
    ],
    cta: "Contact Sales",
    ctaHref: "/contact",
  },
];

interface ProductSectionProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  tiers: PricingTier[];
}

function ProductSection({ title, subtitle, icon, tiers }: ProductSectionProps) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <p className="text-muted-foreground text-lg mb-8">{subtitle}</p>

      <div
        className={`grid grid-cols-1 gap-6 ${
          tiers.length === 4
            ? "md:grid-cols-2 lg:grid-cols-4"
            : "md:grid-cols-3"
        }`}
      >
        {tiers.map((tier) => (
          <TierCard key={tier.name} tier={tier} />
        ))}
      </div>
    </div>
  );
}

export default function SearchDataPricing() {
  return (
    <div className="max-w-7xl mx-auto mb-16">
      <ProductSection
        title="Hanzo Search"
        subtitle="AI-powered hybrid search for documentation, help centers, and knowledge bases. Deploy with a single publishable key."
        icon={<Search className="h-8 w-8 text-foreground" />}
        tiers={searchTiers}
      />

      <ProductSection
        title="Hanzo Crawl"
        subtitle="Web crawling and content extraction with AI-powered structured data pipelines."
        icon={<Globe className="h-8 w-8 text-foreground" />}
        tiers={crawlTiers}
      />

      <ProductSection
        title="Hanzo Vector"
        subtitle="Managed vector database for embeddings, semantic search, and RAG applications."
        icon={<Database className="h-8 w-8 text-foreground" />}
        tiers={vectorTiers}
      />

      {/* Integration note */}
      <div className="bg-gray-900/30 rounded-xl p-8 border border-gray-800/50 mb-12">
        <h3 className="text-xl font-semibold mb-4">
          All products work together
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          Crawl your docs with Hanzo Crawl, store embeddings in Hanzo Vector,
          and serve instant search results with Hanzo Search. All managed through
          a single API key and dashboard.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
          <div>IAM SSO authentication</div>
          <div>Usage-based billing via Commerce</div>
          <div>Publishable keys for browser use</div>
          <div>KMS-managed secrets</div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-gray-100 px-8"
          asChild
        >
          <a
            href="https://cloud.hanzo.ai/signup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
        <Button size="lg" variant="outline" className="px-8" asChild>
          <Link href="/contact">Talk to Sales</Link>
        </Button>
      </div>
    </div>
  );
}
