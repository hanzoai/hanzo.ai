'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@hanzo/ui";
import { Loader2 } from "lucide-react";

const DATASTORE_API = "https://api.hanzo.ai/v1/pricing/datastore";

interface DatastoreTier {
  id: string;
  name: string;
  tagline: string;
  replicas: number;
  ramGiB: number;
  vcpu: number;
  storageGB: number | null;
  storageLimit: string;
  priceMonthly: number;
  priceHourly: number;
  availabilityZones: number;
  popular?: boolean;
  contactSales?: boolean;
  support: { level: string; responseTime: string; namedEngineer?: boolean; sla?: boolean };
  features: string[];
}

interface UsageRate {
  pricePerGB?: number;
  pricePerGBMonth?: number;
  pricePerTBMonth?: number;
  note?: string;
  label?: string;
}

interface DatastorePricingData {
  trial?: { days: number };
  tiers: DatastoreTier[];
  usage: {
    storage: UsageRate;
    ingestion: UsageRate;
    egress: {
      public_internet: UsageRate;
      cross_region: UsageRate;
      intra_region: { pricePerGB: number; note?: string };
    };
  };
  discounts?: { annual?: { percent: number } };
  included: string[];
  endpoints?: { signup?: string; sales?: string };
}

// Static fallback — mirrors ~/work/hanzo/pricing/datastore.json
const FALLBACK: DatastorePricingData = {
  trial: { days: 30 },
  tiers: [
    {
      id: "basic", name: "Basic", tagline: "For teams getting started with analytics",
      replicas: 1, ramGiB: 8, vcpu: 2, storageGB: 1000, storageLimit: "1 TB",
      priceMonthly: 66.52, priceHourly: 0.0922, availabilityZones: 1,
      support: { level: "standard", responseTime: "next_business_day" },
      features: ["1 replica","8 GiB RAM / 2 vCPU","Up to 1 TB storage","Single availability zone","Async inserts","JSONEachRow + Parquet","HTTP API"],
    },
    {
      id: "scale", name: "Scale", tagline: "For production workloads with high availability",
      replicas: 2, ramGiB: 8, vcpu: 2, storageGB: null, storageLimit: "Unlimited",
      priceMonthly: 499.38, priceHourly: 0.6936, availabilityZones: 2, popular: true,
      support: { level: "priority", responseTime: "1_hour_critical_24x7" },
      features: ["2+ replicas","8 GiB RAM / 2 vCPU (per replica)","Unlimited storage","2 availability zones","Auto-scaling","Read replicas","Private endpoints"],
    },
    {
      id: "enterprise", name: "Enterprise", tagline: "For mission-critical deployments at scale",
      replicas: 2, ramGiB: 32, vcpu: 8, storageGB: 5000, storageLimit: "Unlimited",
      priceMonthly: 2669.40, priceHourly: 3.7075, availabilityZones: 3, contactSales: true,
      support: { level: "enterprise", responseTime: "30_min_critical", namedEngineer: true, sla: true },
      features: ["2+ replicas","32 GiB RAM / 8 vCPU (per replica)","Unlimited storage","3 availability zones","Private VPC / BYOC","HIPAA & PCI DSS","CMEK","SSO & SAML","SLA"],
    },
  ],
  usage: {
    storage: { pricePerGBMonth: 0.0247, pricePerTBMonth: 25.30, note: "Compressed on-disk size" },
    ingestion: { pricePerGB: 0.04, label: "Hanzo Pipes", note: "Kafka, S3, HTTP, Postgres CDC" },
    egress: {
      public_internet: { pricePerGB: 0.1152, note: "Outbound to public internet" },
      cross_region: { pricePerGB: 0.0312, note: "Between Hanzo regions" },
      intra_region: { pricePerGB: 0, note: "Always free" },
    },
  },
  discounts: { annual: { percent: 17 } },
  included: [
    "30-day free trial","Automated backups","End-to-end encryption",
    "SQL-compatible HTTP API","JSONEachRow + Parquet","Async inserts",
    "IAM SSO","KMS-managed secrets","OpenTelemetry native","DDoS protection",
    "Real-time query metrics","Hanzo Console UI",
  ],
  endpoints: { signup: "https://console.hanzo.ai", sales: "/contact/sales" },
};

function supportLabel(r: string) {
  return r
    .replace("next_business_day", "Next business day")
    .replace("1_hour_critical_24x7", "24/7 · 1-hr critical")
    .replace("30_min_critical", "30-min critical · named engineer");
}

export default function DatastorePricing() {
  const router = useRouter();
  const [data, setData] = useState<DatastorePricingData>(FALLBACK);
  const [annual, setAnnual] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(DATASTORE_API)
      .then((r) => r.json())
      .then((d) => { setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const annualDiscount = (data.discounts?.annual?.percent ?? 17) / 100;

  function monthlyPrice(tier: DatastoreTier) {
    return annual ? tier.priceMonthly * (1 - annualDiscount) : tier.priceMonthly;
  }
  function hourlyPrice(tier: DatastoreTier) {
    return annual ? tier.priceHourly * (1 - annualDiscount) : tier.priceHourly;
  }

  const signup = data.endpoints?.signup ?? "https://console.hanzo.ai";
  const sales = data.endpoints?.sales ?? "/contact/sales";

  return (
    <div className="max-w-7xl mx-auto mb-16">
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-2">Hanzo Datastore</h2>
        <p className="text-muted-foreground text-lg mb-6">
          Real-time analytics database as a service.
          Columnar storage, real-time inserts, petabyte-scale queries.
          {data.trial && ` ${data.trial.days}-day free trial, no credit card required.`}
        </p>
        <div className="flex items-center gap-3">
          <span className={`text-sm ${!annual ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-10 h-6 rounded-full transition-colors ${annual ? "bg-primary" : "bg-gray-700"}`}
          >
            <span className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${annual ? "translate-x-4" : ""}`} />
          </button>
          <span className={`text-sm ${annual ? "text-foreground" : "text-muted-foreground"}`}>
            Annual <span className="text-green-400 text-xs ml-1">Save {data.discounts?.annual?.percent ?? 17}%</span>
          </span>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="w-6 h-6 animate-spin mr-2 text-muted-foreground" />
          <span className="text-muted-foreground">Loading pricing...</span>
        </div>
      ) : (
        <>
          {/* Tier cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {data.tiers.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-xl p-7 border flex flex-col ${
                  tier.popular ? "bg-primary/5 border-primary/40" : "bg-gray-900/30 border-gray-800/50"
                }`}
              >
                {tier.popular && (
                  <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full self-start mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <p className="text-muted-foreground text-sm mb-5">{tier.tagline}</p>

                <div className="mb-1">
                  <span className="text-4xl font-bold">
                    ${monthlyPrice(tier).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                  <span className="text-muted-foreground text-sm">/mo</span>
                </div>
                <div className="text-xs text-muted-foreground mb-6">
                  ${hourlyPrice(tier).toFixed(4)}/hr · billed per minute
                </div>

                <ul className="space-y-2 text-sm text-muted-foreground mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>{f}
                    </li>
                  ))}
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    Support: {supportLabel(tier.support.responseTime)}
                  </li>
                </ul>

                <Button
                  size="lg"
                  variant={tier.popular ? "default" : "outline"}
                  className="w-full"
                  onClick={() => tier.contactSales ? router.push(sales) : window.open(signup, "_blank")}
                >
                  {tier.contactSales ? "Book a call" : "Start now"}
                </Button>
              </div>
            ))}
          </div>

          {/* Usage rates */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-2">Usage-based pricing</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Billed on top of your base tier. Metered per minute; no minimums.
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
                  <tr className="border-b border-gray-800/50 hover:bg-gray-900/20 transition-colors">
                    <td className="py-4 px-5 font-medium">Storage</td>
                    <td className="py-4 px-5 text-right font-mono">
                      ${data.usage.storage.pricePerGBMonth?.toFixed(4)}<span className="text-muted-foreground text-xs ml-1">/GB/mo</span>
                    </td>
                    <td className="py-4 px-5 text-muted-foreground text-sm hidden md:table-cell">{data.usage.storage.note}</td>
                  </tr>
                  <tr className="border-b border-gray-800/50 hover:bg-gray-900/20 transition-colors">
                    <td className="py-4 px-5 font-medium">Data ingestion</td>
                    <td className="py-4 px-5 text-right font-mono">
                      ${data.usage.ingestion.pricePerGB?.toFixed(2)}<span className="text-muted-foreground text-xs ml-1">/GB</span>
                    </td>
                    <td className="py-4 px-5 text-muted-foreground text-sm hidden md:table-cell">{data.usage.ingestion.note}</td>
                  </tr>
                  <tr className="border-b border-gray-800/50 hover:bg-gray-900/20 transition-colors">
                    <td className="py-4 px-5 font-medium">Public egress</td>
                    <td className="py-4 px-5 text-right font-mono">
                      ${data.usage.egress.public_internet.pricePerGB?.toFixed(4)}<span className="text-muted-foreground text-xs ml-1">/GB</span>
                    </td>
                    <td className="py-4 px-5 text-muted-foreground text-sm hidden md:table-cell">{data.usage.egress.public_internet.note}</td>
                  </tr>
                  <tr className="border-b border-gray-800/50 hover:bg-gray-900/20 transition-colors">
                    <td className="py-4 px-5 font-medium">Cross-region transfer</td>
                    <td className="py-4 px-5 text-right font-mono">
                      ${data.usage.egress.cross_region.pricePerGB?.toFixed(4)}<span className="text-muted-foreground text-xs ml-1">/GB</span>
                    </td>
                    <td className="py-4 px-5 text-muted-foreground text-sm hidden md:table-cell">{data.usage.egress.cross_region.note}</td>
                  </tr>
                  <tr className="hover:bg-gray-900/20 transition-colors">
                    <td className="py-4 px-5 font-medium">Intra-region</td>
                    <td className="py-4 px-5 text-right font-mono text-green-400">Free</td>
                    <td className="py-4 px-5 text-muted-foreground text-sm hidden md:table-cell">{data.usage.egress.intra_region.note}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Included */}
          <div className="mb-12 bg-gray-900/30 rounded-xl p-8 border border-gray-800/50">
            <h3 className="text-xl font-semibold mb-4">Included with every tier</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
              {data.included.map((item) => <div key={item}>{item}</div>)}
            </div>
          </div>
        </>
      )}

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-gray-100 px-8"
          onClick={() => window.open(signup, "_blank")}
        >
          Start 30-day trial
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="px-8"
          onClick={() => router.push(sales)}
        >
          Book a call
        </Button>
      </div>
    </div>
  );
}
