'use client'

import Link from 'next/link'
import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  CheckCircle,
  Server,
  Activity,
  ArrowRight,
  Clock,
  ExternalLink,
  Bell,
  Globe,
  AlertTriangle,
  XCircle,
  Zap,
  Database,
  Shield,
  Cpu,
  Radio,
  Layers
} from "lucide-react";

const BRAND_COLOR = "#10b981";

type ServiceStatus = "operational" | "degraded" | "outage" | "maintenance";

interface Service {
  name: string;
  status: ServiceStatus;
  uptime: string;
  latency: string;
  icon: React.ElementType;
}

interface ServiceGroup {
  name: string;
  services: Service[];
}

const serviceGroups: ServiceGroup[] = [
  {
    name: "Core Platform",
    services: [
      { name: "API Gateway", status: "operational", uptime: "99.999%", latency: "12ms", icon: Zap },
      { name: "Authentication & API Keys", status: "operational", uptime: "99.999%", latency: "18ms", icon: Shield },
      { name: "Dashboard", status: "operational", uptime: "99.999%", latency: "45ms", icon: Layers },
      { name: "Edge CDN", status: "operational", uptime: "99.999%", latency: "8ms", icon: Globe },
    ],
  },
  {
    name: "Blockchain Infrastructure",
    services: [
      { name: "RPC Proxy (EVM Chains)", status: "operational", uptime: "99.999%", latency: "35ms", icon: Server },
      { name: "RPC Proxy (Non-EVM)", status: "operational", uptime: "99.999%", latency: "42ms", icon: Server },
      { name: "WebSocket Subscriptions", status: "operational", uptime: "99.999%", latency: "15ms", icon: Radio },
      { name: "Multi-Chain Indexer", status: "operational", uptime: "99.999%", latency: "120ms", icon: Database },
    ],
  },
  {
    name: "Enhanced APIs",
    services: [
      { name: "Token API", status: "operational", uptime: "99.999%", latency: "28ms", icon: Cpu },
      { name: "NFT API", status: "operational", uptime: "99.999%", latency: "32ms", icon: Cpu },
      { name: "Transfers API", status: "operational", uptime: "99.999%", latency: "25ms", icon: Cpu },
      { name: "Webhook Delivery", status: "operational", uptime: "99.999%", latency: "50ms", icon: Bell },
    ],
  },
  {
    name: "Account Abstraction",
    services: [
      { name: "ERC-4337 Bundler", status: "operational", uptime: "99.999%", latency: "85ms", icon: Layers },
      { name: "Gas Manager / Paymaster", status: "operational", uptime: "99.999%", latency: "40ms", icon: Zap },
      { name: "Smart Wallet Service", status: "operational", uptime: "99.999%", latency: "55ms", icon: Shield },
    ],
  },
  {
    name: "AI Services",
    services: [
      { name: "LLM Inference", status: "operational", uptime: "99.999%", latency: "110ms", icon: Cpu },
      { name: "Vector Database", status: "operational", uptime: "99.999%", latency: "12ms", icon: Database },
      { name: "Agent Orchestration", status: "operational", uptime: "99.999%", latency: "65ms", icon: Activity },
    ],
  },
];

const regions = [
  { name: "US East", code: "us-east-1", status: "operational" as ServiceStatus, latency: "12ms" },
  { name: "US West", code: "us-west-2", status: "operational" as ServiceStatus, latency: "18ms" },
  { name: "Europe", code: "eu-west-1", status: "operational" as ServiceStatus, latency: "25ms" },
  { name: "Asia Pacific", code: "ap-east-1", status: "operational" as ServiceStatus, latency: "35ms" },
  { name: "Edge Network", code: "edge-global", status: "operational" as ServiceStatus, latency: "8ms" },
];

function generateUptimeBars(): { day: number; status: ServiceStatus }[] {
  return Array.from({ length: 90 }, (_, i) => ({
    day: i,
    status: "operational" as ServiceStatus,
  }));
}

const uptimeBars = generateUptimeBars();

const statusConfig: Record<ServiceStatus, { color: string; bg: string; label: string; icon: React.ElementType }> = {
  operational: { color: "text-green-400", bg: "bg-green-500", label: "Operational", icon: CheckCircle },
  degraded: { color: "text-yellow-400", bg: "bg-yellow-500", label: "Degraded", icon: AlertTriangle },
  outage: { color: "text-red-400", bg: "bg-red-500", label: "Major Outage", icon: XCircle },
  maintenance: { color: "text-orange-400", bg: "bg-orange-500", label: "Maintenance", icon: Clock },
};

const StatusPage = () => {
  const allServices = serviceGroups.flatMap((g) => g.services);
  const allOperational = allServices.every((s) => s.status === "operational");
  const overallStatus: ServiceStatus = allOperational ? "operational" : "degraded";
  const config = statusConfig[overallStatus];
  const StatusIcon = config.icon;

  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      
      

      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15"
              style={{
                background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
                filter: "blur(100px)",
              }}
            />
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                  allOperational
                    ? "bg-green-500/20 text-green-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                <StatusIcon className="w-4 h-4" />
                {config.label}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
              >
                <span className="text-white">System</span>
                <br />
                <span className="text-neutral-400">Status.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base lg:text-lg text-neutral-400 leading-relaxed mb-4 max-w-3xl mx-auto"
              >
                Real-time status of Hanzo AI infrastructure and services.
                99.999% uptime SLA across all services.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.12 }}
                className="text-sm text-neutral-500 mb-10 max-w-3xl mx-auto font-mono"
              >
                Last checked: {new Date().toISOString().replace("T", " ").slice(0, 19)} UTC
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="flex flex-wrap items-center justify-center gap-4"
              >
                <button className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all text-sm bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30">
                  <Bell className="w-4 h-4 mr-2" />
                  Subscribe to Updates
                </button>
                <a
                  href="https://api.hanzo.ai/health"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"
                >
                  API Health Endpoint
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 90-Day Uptime Bar */}
        <section className="py-8 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-neutral-300">90-Day Uptime</h3>
                <span className="text-sm font-mono text-green-400">99.999%</span>
              </div>
              <div className="flex gap-[2px]">
                {uptimeBars.map((bar, i) => (
                  <div
                    key={i}
                    className={`flex-1 h-8 rounded-sm transition-colors ${
                      bar.status === "operational"
                        ? "bg-green-500/80 hover:bg-green-400"
                        : bar.status === "degraded"
                        ? "bg-yellow-500/80 hover:bg-yellow-400"
                        : bar.status === "outage"
                        ? "bg-red-500/80 hover:bg-red-400"
                        : "bg-orange-500/80 hover:bg-orange-400"
                    }`}
                    title={`Day ${90 - i}: ${statusConfig[bar.status].label}`}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between mt-2 text-xs text-neutral-500">
                <span>90 days ago</span>
                <span>Today</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Groups */}
        <section className="py-8 px-4 md:px-8">
          <div className="max-w-6xl mx-auto space-y-4">
            {serviceGroups.map((group, gi) => {
              const groupOperational = group.services.every((s) => s.status === "operational");
              const groupStatus: ServiceStatus = groupOperational ? "operational" : "degraded";
              const gConfig = statusConfig[groupStatus];
              const isExpanded = expandedGroup === group.name;

              return (
                <motion.div
                  key={group.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.05 }}
                  className="bg-neutral-900/80 border border-neutral-800 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedGroup(isExpanded ? null : group.name)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-neutral-800/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <h3 className="text-base font-medium text-white">{group.name}</h3>
                      <span className="text-xs text-neutral-500">
                        {group.services.length} services
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-sm ${gConfig.color}`}>{gConfig.label}</span>
                      <div className={`w-2.5 h-2.5 rounded-full ${gConfig.bg} ${groupOperational ? "" : "animate-pulse"}`} />
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="border-t border-neutral-800 divide-y divide-neutral-800/50">
                      {group.services.map((service) => {
                        const sConfig = statusConfig[service.status];
                        const SIcon = service.icon;
                        return (
                          <div
                            key={service.name}
                            className="px-6 py-3 flex items-center justify-between"
                          >
                            <div className="flex items-center gap-3">
                              <SIcon className="h-4 w-4 text-neutral-500" />
                              <span className="text-sm text-neutral-300">{service.name}</span>
                            </div>
                            <div className="flex items-center gap-6">
                              <span className="text-xs text-neutral-500 hidden sm:block font-mono">
                                {service.latency}
                              </span>
                              <span className="text-xs text-neutral-500 hidden md:block font-mono">
                                {service.uptime}
                              </span>
                              <div className="flex items-center gap-1.5">
                                <div className={`w-2 h-2 rounded-full ${sConfig.bg}`} />
                                <span className={`text-xs ${sConfig.color}`}>{sConfig.label}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Regions */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-black to-neutral-900/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-2">Global Regions</h2>
              <p className="text-neutral-400">Status across all deployment regions</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {regions.map((region, index) => {
                const rConfig = statusConfig[region.status];
                return (
                  <motion.div
                    key={region.code}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-5"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Globe className="h-4 w-4 text-neutral-500" />
                      <span className="font-medium text-white text-sm">{region.name}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-neutral-500 font-mono">{region.latency}</span>
                      <div className="flex items-center gap-1.5">
                        <div className={`w-2 h-2 rounded-full ${rConfig.bg} animate-pulse`} />
                        <span className={`text-xs ${rConfig.color}`}>Active</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Blockchain Networks */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-2">Supported Chains</h2>
              <p className="text-neutral-400">100+ blockchain networks with dedicated RPC endpoints</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3"
            >
              {[
                { name: "Ethereum", networks: ["Mainnet", "Sepolia", "Holesky"] },
                { name: "Polygon", networks: ["PoS", "zkEVM", "Amoy"] },
                { name: "Arbitrum", networks: ["One", "Nova", "Sepolia"] },
                { name: "Optimism", networks: ["Mainnet", "Sepolia"] },
                { name: "Base", networks: ["Mainnet", "Sepolia"] },
                { name: "BNB Chain", networks: ["Mainnet", "Testnet"] },
                { name: "Avalanche", networks: ["C-Chain", "Fuji"] },
                { name: "Solana", networks: ["Mainnet", "Devnet"] },
              ].map((chain) => (
                <div
                  key={chain.name}
                  className="bg-neutral-900/60 border border-neutral-800 rounded-lg p-4 flex items-center justify-between"
                >
                  <div>
                    <span className="text-sm font-medium text-white">{chain.name}</span>
                    <p className="text-xs text-neutral-500 mt-0.5">{chain.networks.join(", ")}</p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-neutral-500 mt-4 text-center"
            >
              Showing 8 of 100+ supported chains.{" "}
              <Link href="/blockchain" className="text-green-400 hover:text-green-300">
                View all chains →
              </Link>
            </motion.p>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-neutral-900/30 to-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-2">Recent Incidents</h2>
              <p className="text-neutral-400">Incident history for the past 90 days</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-8 text-center"
            >
              <Activity className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">No Recent Incidents</h3>
              <p className="text-neutral-400">
                All systems have been operating normally for the past 90 days.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SLA Info */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6"
            >
              <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-green-400 font-mono mb-2">99.999%</p>
                <p className="text-sm text-neutral-400">Uptime SLA</p>
                <p className="text-xs text-neutral-500 mt-1">&lt; 5.26 min downtime/year</p>
              </div>
              <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-white font-mono mb-2">&lt;50ms</p>
                <p className="text-sm text-neutral-400">Median Latency</p>
                <p className="text-xs text-neutral-500 mt-1">Global edge network</p>
              </div>
              <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-white font-mono mb-2">100+</p>
                <p className="text-sm text-neutral-400">Chains Supported</p>
                <p className="text-xs text-neutral-500 mt-1">EVM, Solana, Bitcoin & more</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-black to-neutral-900/30 relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Need help with an issue?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto"
            >
              Our engineering team monitors all services 24/7 with automated alerting and rapid response.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-all hover:opacity-90 text-base bg-green-500 text-white"
              >
                Contact Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="https://docs.hanzo.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-base text-white"
              >
                View Documentation
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default StatusPage;
