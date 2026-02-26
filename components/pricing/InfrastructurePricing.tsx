'use client'

import React from "react";
import { Button } from "@hanzo/ui";

const InfrastructurePricing = () => {
  const cloudPlans = [
    { name: "Nano", vcpus: 1, ram: "1 GB", storage: "20 GB SSD", transfer: "500 GB", maxVMs: 1, price: "$5/mo", hourly: "$0.007/hr", description: "Cheapest single VM for lightweight bots and scripts", highlight: false },
    { name: "Bot", vcpus: 2, ram: "2 GB", storage: "40 GB SSD", transfer: "1 TB", maxVMs: 5, price: "$10/mo", hourly: "$0.014/hr", description: "Standard bot runner for most automation tasks", highlight: false },
    { name: "Standard", vcpus: 2, ram: "8 GB", storage: "25 GB SSD", transfer: "3 TB", maxVMs: 25, price: "$15/mo", hourly: "$0.021/hr", description: "Default plan — run bots, agents, and services", highlight: true },
    { name: "Pro", vcpus: 2, ram: "8 GB", storage: "80 GB SSD", transfer: "2 TB", maxVMs: 25, price: "$25/mo", hourly: "$0.035/hr", description: "Dedicated CPU for consistent performance", highlight: false },
    { name: "Power", vcpus: 4, ram: "16 GB", storage: "160 GB SSD", transfer: "4 TB", maxVMs: 25, price: "$39/mo", hourly: "$0.054/hr", description: "High performance for demanding workloads", highlight: false },
    { name: "Power Dedicated", vcpus: 4, ram: "16 GB", storage: "160 GB SSD", transfer: "4 TB", maxVMs: 25, price: "$49/mo", hourly: "$0.068/hr", description: "Maximum dedicated CPU performance", highlight: false },
  ];

  const cloudRegions = [
    { name: "US East", location: "Ashburn, VA" },
    { name: "US West", location: "Hillsboro, OR" },
    { name: "Europe Central", location: "Germany" },
    { name: "Asia Pacific", location: "Singapore" },
  ];

  const computeTiers = [
    { name: "Starter", slug: "s-1vcpu-1gb", vcpus: 1, ram: "1 GB", storage: "25 GB SSD", transfer: "1 TB", price: "$8.40/mo", hourly: "$0.0125/hr" },
    { name: "Basic", slug: "s-1vcpu-2gb", vcpus: 1, ram: "2 GB", storage: "50 GB SSD", transfer: "2 TB", price: "$14.40/mo", hourly: "$0.0214/hr" },
    { name: "Standard", slug: "s-2vcpu-4gb", vcpus: 2, ram: "4 GB", storage: "80 GB SSD", transfer: "4 TB", price: "$28.80/mo", hourly: "$0.0429/hr" },
    { name: "Performance", slug: "s-4vcpu-8gb", vcpus: 4, ram: "8 GB", storage: "160 GB SSD", transfer: "5 TB", price: "$57.60/mo", hourly: "$0.0857/hr" },
    { name: "Professional", slug: "s-8vcpu-16gb", vcpus: 8, ram: "16 GB", storage: "320 GB SSD", transfer: "6 TB", price: "$115.20/mo", hourly: "$0.1714/hr" },
    { name: "Enterprise", slug: "s-16vcpu-32gb", vcpus: 16, ram: "32 GB", storage: "640 GB SSD", transfer: "7 TB", price: "$230.40/mo", hourly: "$0.3429/hr" },
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

  return (
    <div className="max-w-7xl mx-auto mb-16">
      <div className="mb-4">
        <h2 className="text-3xl font-bold mb-2">Hanzo Infrastructure</h2>
        <p className="text-muted-foreground text-lg mb-8">
          Deploy AI applications, bots, agents, and services on fully managed infrastructure.
          Per-org isolation with zero-trust networking, KMS-managed secrets, and IAM SSO.
        </p>
      </div>

      {/* Cloud VM Plans */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-2">Cloud VMs</h3>
        <p className="text-muted-foreground text-sm mb-6">
          Deploy virtual machines across 4 global regions. Consistent pricing regardless of provider.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {cloudPlans.map((plan) => (
            <div key={plan.name} className={`rounded-xl p-6 border transition-colors ${
              plan.highlight
                ? "bg-primary/5 border-primary/30"
                : "bg-gray-900/30 border-gray-800/50"
            }`}>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-lg">{plan.name}</h4>
                {plan.highlight && (
                  <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">Most Popular</span>
                )}
              </div>
              <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
              <div className="text-2xl font-bold mb-1">{plan.price}</div>
              <div className="text-xs text-muted-foreground mb-4">{plan.hourly}</div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div>{plan.vcpus} vCPU &middot; {plan.ram} RAM</div>
                <div>{plan.storage} &middot; {plan.transfer}</div>
                <div>Up to {plan.maxVMs} VM{plan.maxVMs > 1 ? 's' : ''}</div>
              </div>
            </div>
          ))}
        </div>
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
          Attach additional SSD volumes to any cloud VM. Resize on the fly.
        </p>
        <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800/50 inline-block">
          <div className="text-3xl font-bold mb-1">$0.08<span className="text-lg font-normal text-muted-foreground">/GB/mo</span></div>
          <p className="text-muted-foreground text-sm">1 GB — 16 TB per volume. Attach to any VM. SSD-backed, all regions.</p>
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
                <tr key={tier.slug} className="border-b border-gray-800/50 hover:bg-gray-900/30 transition-colors">
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

      {/* Included with every deployment */}
      <div className="mb-12 bg-gray-900/30 rounded-xl p-8 border border-gray-800/50">
        <h3 className="text-xl font-semibold mb-4">Included with every deployment</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
          <div>Zero-trust networking</div>
          <div>KMS-managed secrets</div>
          <div>IAM SSO authentication</div>
          <div>Automated TLS certificates</div>
          <div>Rolling deployments</div>
          <div>Health monitoring</div>
          <div>Usage metering</div>
          <div>Git-based CI/CD</div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-gray-100 px-8 py-3"
          onClick={() => window.open('https://platform.hanzo.ai', '_blank')}
        >
          Deploy Now
        </Button>
      </div>
    </div>
  );
};

export default InfrastructurePricing;
