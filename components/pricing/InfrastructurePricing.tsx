'use client'

import React, { useEffect, useState } from "react";
import { Button } from "@hanzo/ui";
import { Loader2 } from "lucide-react";

const CLOUD_API = "https://pricing.hanzo.ai/v1/cloud";
const GPU_API = "https://pricing.hanzo.ai/v1/gpu";

interface CloudPlan {
  id: string;
  name: string;
  description: string;
  vcpus: number;
  memoryGB: number;
  diskGB: number;
  cpuType: string;
  maxVMs: number;
  priceMonthly: number;
  priceHourly: number;
  features: string[];
  popular?: boolean;
  freeTier?: boolean;
}

interface Region {
  id: string;
  name: string;
  location: string;
  flag: string;
}

interface BlockStorage {
  pricePerGBMonthly: number;
  minSizeGB: number;
  maxSizeGB: number;
}

interface GpuTier {
  name: string;
  gpu: string;
  vram: string;
  price: number;
}

interface CloudData {
  plans: CloudPlan[];
  regions: Region[];
  blockStorage: BlockStorage;
}

const InfrastructurePricing = () => {
  const [showAll, setShowAll] = useState(false);
  const [cloudData, setCloudData] = useState<CloudData | null>(null);
  const [gpuTiers, setGpuTiers] = useState<GpuTier[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(CLOUD_API).then((r) => r.json()),
      fetch(GPU_API).then((r) => r.json()),
    ])
      .then(([cloud, gpu]) => {
        setCloudData(cloud);
        setGpuTiers(gpu.tiers || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch infrastructure pricing:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="w-6 h-6 animate-spin mr-2 text-muted-foreground" />
        <span className="text-muted-foreground">Loading infrastructure pricing...</span>
      </div>
    );
  }

  if (!cloudData || !cloudData.plans?.length) {
    return (
      <div className="text-center py-24 text-muted-foreground">Failed to load infrastructure pricing.</div>
    );
  }

  const { plans, regions, blockStorage } = cloudData;
  const visiblePlans = showAll ? plans : plans.slice(0, 6);

  function formatPrice(price: number) {
    if (price >= 100) return `$${price.toLocaleString()}`;
    return `$${price}`;
  }

  function formatMemory(gb: number) {
    if (gb >= 1024) return `${(gb / 1024).toFixed(1)} TB`;
    return `${gb} GB`;
  }

  function formatDisk(gb: number) {
    if (gb >= 1024) return `${(gb / 1024).toFixed(1)} TB`;
    return `${gb} GB`;
  }

  return (
    <div className="max-w-7xl mx-auto mb-16">
      <div className="mb-4">
        <h2 className="text-3xl font-bold mb-2">Hanzo Cloud</h2>
        <p className="text-muted-foreground text-lg mb-8">
          The developer cloud that doesn't nickel-and-dime you.
          No egress fees. No hidden costs. DDoS protection included.
        </p>
      </div>

      {/* Cloud VM Plans */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-2">Cloud Compute</h3>
        <p className="text-muted-foreground text-sm mb-6">
          From ${plans[0]?.priceMonthly}/mo to ${plans[plans.length - 1]?.priceMonthly.toLocaleString()}/mo. {regions.length} global regions. Consistent pricing everywhere.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {visiblePlans.map((plan) => (
            <div key={plan.id} className={`rounded-xl p-6 border transition-colors ${
              plan.popular
                ? "bg-primary/5 border-primary/30"
                : "bg-gray-900/30 border-gray-800/50"
            }`}>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-lg">{plan.name}</h4>
                <div className="flex gap-1.5">
                  {plan.popular && (
                    <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">Most Popular</span>
                  )}
                  {plan.freeTier && (
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">Free ${plan.priceMonthly} Credit</span>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
              <div className="text-2xl font-bold mb-1">{formatPrice(plan.priceMonthly)}<span className="text-base font-normal text-muted-foreground">/mo</span></div>
              <div className="text-xs text-muted-foreground mb-4">${plan.priceHourly.toFixed(4)}/hr</div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div>{plan.vcpus} {plan.cpuType === "dedicated" ? "dedicated " : ""}vCPU &middot; {formatMemory(plan.memoryGB)} RAM</div>
                <div>{formatDisk(plan.diskGB)} SSD</div>
                <div>Up to {plan.maxVMs.toLocaleString()} VM{plan.maxVMs > 1 ? 's' : ''}</div>
              </div>
            </div>
          ))}
        </div>
        {!showAll && plans.length > 6 && (
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setShowAll(true)}
              className="text-sm text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
            >
              Show all {plans.length} plans (up to {plans[plans.length - 1].vcpus} vCPU / {formatMemory(plans[plans.length - 1].memoryGB)})
            </button>
          </div>
        )}
        {showAll && (
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setShowAll(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              Show fewer plans
            </button>
          </div>
        )}
        {regions.length > 0 && (
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Regions:</span>
            {regions.map((r) => (
              <span key={r.id} className="bg-gray-900/50 px-3 py-1 rounded-full border border-gray-800/50">
                {r.name} ({r.location})
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Block Storage */}
      {blockStorage && blockStorage.pricePerGBMonthly > 0 && (
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-2">Block Storage</h3>
          <p className="text-muted-foreground text-sm mb-6">
            Attach additional SSD volumes to any VM. Resize on the fly.
          </p>
          <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800/50 inline-block">
            <div className="text-3xl font-bold mb-1">${blockStorage.pricePerGBMonthly}<span className="text-lg font-normal text-muted-foreground">/GB/mo</span></div>
            <p className="text-muted-foreground text-sm">{blockStorage.minSizeGB} GB to {formatDisk(blockStorage.maxSizeGB)} per volume. SSD-backed, all regions.</p>
          </div>
        </div>
      )}

      {/* GPU Instances */}
      {gpuTiers.length > 0 && (
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">GPU Instances</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="py-3 px-4 text-muted-foreground font-medium">Tier</th>
                  <th className="py-3 px-4 text-muted-foreground font-medium">GPUs</th>
                  <th className="py-3 px-4 text-muted-foreground font-medium">VRAM</th>
                  <th className="py-3 px-4 text-muted-foreground font-medium text-right">Hourly</th>
                </tr>
              </thead>
              <tbody>
                {gpuTiers.map((tier) => (
                  <tr key={tier.name} className="border-b border-gray-800/50 hover:bg-gray-900/30 transition-colors">
                    <td className="py-4 px-4 font-medium">{tier.name}</td>
                    <td className="py-4 px-4 text-muted-foreground">{tier.gpu}</td>
                    <td className="py-4 px-4 text-muted-foreground">{tier.vram}</td>
                    <td className="py-4 px-4 text-right font-medium">${tier.price.toFixed(2)}/hr</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">Contact sales for multi-GPU configurations and reserved pricing.</p>
        </div>
      )}

      {/* Included */}
      <div className="mb-12 bg-gray-900/30 rounded-xl p-8 border border-gray-800/50">
        <h3 className="text-xl font-semibold mb-4">Included with every deployment</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
          <div>DDoS protection</div>
          <div>Automated backups</div>
          <div>IPv4 + IPv6</div>
          <div>Zero-trust networking</div>
          <div>KMS-managed secrets</div>
          <div>IAM SSO authentication</div>
          <div>Automated TLS certificates</div>
          <div>Git-based CI/CD</div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-gray-100 px-8 py-3"
          onClick={() => window.open('https://cloud.hanzo.ai', '_blank')}
        >
          Deploy Now
        </Button>
      </div>
    </div>
  );
};

export default InfrastructurePricing;
