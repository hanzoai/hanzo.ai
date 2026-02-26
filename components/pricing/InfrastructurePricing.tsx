'use client'

import React, { useState } from "react";
import { Button } from "@hanzo/ui";

const InfrastructurePricing = () => {
  const [showAll, setShowAll] = useState(false);

  const cloudPlans = [
    { name: "Starter", vcpus: 1, cpuType: "shared", ram: "1 GB", storage: "20 GB", transfer: "500 GB", maxVMs: 1, price: 5, description: "Side projects, bots, and learning", badge: "Free $5 Credit" },
    { name: "Builder", vcpus: 2, cpuType: "shared", ram: "2 GB", storage: "40 GB", transfer: "1 TB", maxVMs: 5, price: 10, description: "Ship real products and automation" },
    { name: "Dev", vcpus: 2, cpuType: "shared", ram: "8 GB", storage: "25 GB", transfer: "3 TB", maxVMs: 25, price: 15, description: "Full dev environment with room to grow", popular: true },
    { name: "Pro", vcpus: 2, cpuType: "dedicated", ram: "8 GB", storage: "80 GB", transfer: "2 TB", maxVMs: 25, price: 25, description: "Dedicated CPU. Zero noisy neighbors" },
    { name: "Turbo", vcpus: 4, cpuType: "shared", ram: "16 GB", storage: "160 GB", transfer: "4 TB", maxVMs: 25, price: 39, description: "Browser automation and CI/CD" },
    { name: "Turbo Dedicated", vcpus: 4, cpuType: "dedicated", ram: "16 GB", storage: "160 GB", transfer: "4 TB", maxVMs: 25, price: 49, description: "Production-grade performance" },
    { name: "Business", vcpus: 8, cpuType: "dedicated", ram: "32 GB", storage: "240 GB", transfer: "20 TB", maxVMs: 50, price: 219, description: "Team-scale production services" },
    { name: "Enterprise", vcpus: 16, cpuType: "dedicated", ram: "64 GB", storage: "360 GB", transfer: "40 TB", maxVMs: 100, price: 429, description: "Mission-critical infrastructure" },
    { name: "Scale", vcpus: 32, cpuType: "dedicated", ram: "128 GB", storage: "600 GB", transfer: "50 TB", maxVMs: 250, price: 849, description: "Platform-scale global compute" },
    { name: "Mega", vcpus: 48, cpuType: "dedicated", ram: "192 GB", storage: "960 GB", transfer: "60 TB", maxVMs: 500, price: 1299, description: "ML inference and HPC workloads" },
    { name: "Ultra", vcpus: 96, cpuType: "dedicated", ram: "384 GB", storage: "1.9 TB", transfer: "120 TB", maxVMs: 1000, price: 3999, description: "Extreme multi-node compute" },
  ];

  const visiblePlans = showAll ? cloudPlans : cloudPlans.slice(0, 6);

  const cloudRegions = [
    { name: "US East", location: "Ashburn, VA", flag: "us" },
    { name: "US West", location: "Hillsboro, OR", flag: "us" },
    { name: "Europe", location: "Frankfurt, DE", flag: "de" },
    { name: "Asia Pacific", location: "Singapore", flag: "sg" },
  ];

  const computeTiers = [
    { name: "Starter", vcpus: 1, ram: "1 GB", storage: "25 GB SSD", transfer: "1 TB", price: "$8.40/mo", hourly: "$0.0125/hr" },
    { name: "Basic", vcpus: 1, ram: "2 GB", storage: "50 GB SSD", transfer: "2 TB", price: "$14.40/mo", hourly: "$0.0214/hr" },
    { name: "Standard", vcpus: 2, ram: "4 GB", storage: "80 GB SSD", transfer: "4 TB", price: "$28.80/mo", hourly: "$0.0429/hr" },
    { name: "Performance", vcpus: 4, ram: "8 GB", storage: "160 GB SSD", transfer: "5 TB", price: "$57.60/mo", hourly: "$0.0857/hr" },
    { name: "Professional", vcpus: 8, ram: "16 GB", storage: "320 GB SSD", transfer: "6 TB", price: "$115.20/mo", hourly: "$0.1714/hr" },
    { name: "Enterprise", vcpus: 16, ram: "32 GB", storage: "640 GB SSD", transfer: "7 TB", price: "$230.40/mo", hourly: "$0.3429/hr" },
  ];

  const gpuTiers = [
    { name: "GPU Basic", slug: "gpu-h100x1-80gb", gpus: "1x H100", vram: "80 GB", vcpus: 16, ram: "240 GB", price: "$3.48/hr" },
    { name: "GPU Pro", slug: "gpu-h100x2-160gb", gpus: "2x H100", vram: "160 GB", vcpus: 32, ram: "480 GB", price: "$6.96/hr" },
    { name: "GPU Max", slug: "gpu-h100x4-320gb", gpus: "4x H100", vram: "320 GB", vcpus: 64, ram: "960 GB", price: "$13.92/hr" },
  ];

  const managedServices = [
    { name: "Managed PostgreSQL", description: "Fully managed database with automated backups and failover", startingAt: "$18/mo" },
    { name: "Managed Redis", description: "High-performance in-memory caching and message broker", startingAt: "$12/mo" },
    { name: "Managed MongoDB", description: "Document database with replica set and auto-scaling", startingAt: "$18/mo" },
    { name: "Object Storage (S3)", description: "S3-compatible object storage with CDN", startingAt: "$6/mo for 250 GB" },
    { name: "Kubernetes Cluster", description: "Managed K8s with auto-scaling node pools", startingAt: "$14.40/mo per node" },
  ];

  function formatPrice(cents: number) {
    if (cents >= 100) return `$${cents.toLocaleString()}`;
    return `$${cents}`;
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
          From $5/mo to $3,999/mo. 4 global regions. Consistent pricing everywhere.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {visiblePlans.map((plan) => (
            <div key={plan.name} className={`rounded-xl p-6 border transition-colors ${
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
                  {plan.badge && (
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">{plan.badge}</span>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
              <div className="text-2xl font-bold mb-1">{formatPrice(plan.price)}<span className="text-base font-normal text-muted-foreground">/mo</span></div>
              <div className="text-xs text-muted-foreground mb-4">${(plan.price / 720).toFixed(4)}/hr</div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div>{plan.vcpus} {plan.cpuType === "dedicated" ? "dedicated " : ""}vCPU &middot; {plan.ram} RAM</div>
                <div>{plan.storage} SSD &middot; {plan.transfer}</div>
                <div>Up to {plan.maxVMs.toLocaleString()} VM{plan.maxVMs > 1 ? 's' : ''}</div>
              </div>
            </div>
          ))}
        </div>
        {!showAll && cloudPlans.length > 6 && (
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setShowAll(true)}
              className="text-sm text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
            >
              Show all {cloudPlans.length} plans (up to {cloudPlans[cloudPlans.length - 1].vcpus} vCPU / {cloudPlans[cloudPlans.length - 1].ram})
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
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Regions:</span>
          {cloudRegions.map((r) => (
            <span key={r.name} className="bg-gray-900/50 px-3 py-1 rounded-full border border-gray-800/50">
              {r.name} ({r.location})
            </span>
          ))}
        </div>
      </div>

      {/* Block Storage */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-2">Block Storage</h3>
        <p className="text-muted-foreground text-sm mb-6">
          Attach additional SSD volumes to any VM. Resize on the fly.
        </p>
        <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800/50 inline-block">
          <div className="text-3xl font-bold mb-1">$0.08<span className="text-lg font-normal text-muted-foreground">/GB/mo</span></div>
          <p className="text-muted-foreground text-sm">1 GB to 16 TB per volume. SSD-backed, all regions.</p>
        </div>
      </div>

      {/* PaaS Compute */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">PaaS Compute Instances</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-3 px-4 text-muted-foreground font-medium">Tier</th>
                <th className="py-3 px-4 text-muted-foreground font-medium">vCPUs</th>
                <th className="py-3 px-4 text-muted-foreground font-medium">RAM</th>
                <th className="py-3 px-4 text-muted-foreground font-medium">Storage</th>
                <th className="py-3 px-4 text-muted-foreground font-medium">Transfer</th>
                <th className="py-3 px-4 text-muted-foreground font-medium text-right">Monthly</th>
                <th className="py-3 px-4 text-muted-foreground font-medium text-right">Hourly</th>
              </tr>
            </thead>
            <tbody>
              {computeTiers.map((tier) => (
                <tr key={tier.name} className="border-b border-gray-800/50 hover:bg-gray-900/30 transition-colors">
                  <td className="py-4 px-4 font-medium">{tier.name}</td>
                  <td className="py-4 px-4 text-muted-foreground">{tier.vcpus}</td>
                  <td className="py-4 px-4 text-muted-foreground">{tier.ram}</td>
                  <td className="py-4 px-4 text-muted-foreground">{tier.storage}</td>
                  <td className="py-4 px-4 text-muted-foreground">{tier.transfer}</td>
                  <td className="py-4 px-4 text-right font-medium">{tier.price}</td>
                  <td className="py-4 px-4 text-right text-muted-foreground">{tier.hourly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* GPU Instances */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">GPU Instances</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-3 px-4 text-muted-foreground font-medium">Tier</th>
                <th className="py-3 px-4 text-muted-foreground font-medium">GPUs</th>
                <th className="py-3 px-4 text-muted-foreground font-medium">VRAM</th>
                <th className="py-3 px-4 text-muted-foreground font-medium">vCPUs</th>
                <th className="py-3 px-4 text-muted-foreground font-medium">RAM</th>
                <th className="py-3 px-4 text-muted-foreground font-medium text-right">Hourly</th>
              </tr>
            </thead>
            <tbody>
              {gpuTiers.map((tier) => (
                <tr key={tier.slug} className="border-b border-gray-800/50 hover:bg-gray-900/30 transition-colors">
                  <td className="py-4 px-4 font-medium">{tier.name}</td>
                  <td className="py-4 px-4 text-muted-foreground">{tier.gpus}</td>
                  <td className="py-4 px-4 text-muted-foreground">{tier.vram}</td>
                  <td className="py-4 px-4 text-muted-foreground">{tier.vcpus}</td>
                  <td className="py-4 px-4 text-muted-foreground">{tier.ram}</td>
                  <td className="py-4 px-4 text-right font-medium">{tier.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground mt-4">Contact sales for multi-GPU configurations and reserved pricing.</p>
      </div>

      {/* Managed Services */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">Managed Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {managedServices.map((svc) => (
            <div key={svc.name} className="bg-gray-900/30 rounded-xl p-5 border border-gray-800/50">
              <h4 className="font-semibold mb-2">{svc.name}</h4>
              <p className="text-muted-foreground text-sm mb-3">{svc.description}</p>
              <div className="text-lg font-medium">Starting at {svc.startingAt}</div>
            </div>
          ))}
        </div>
      </div>

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
