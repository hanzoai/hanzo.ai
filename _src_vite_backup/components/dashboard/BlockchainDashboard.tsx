import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Activity,
  Key,
  Copy,
  Check,
  ExternalLink,
  Zap,
  Globe,
  Webhook,
  TrendingUp,
  Shield,
  Clock,
  Server
} from "lucide-react";

interface ChainStatus {
  name: string;
  chainId: number;
  status: "operational" | "degraded" | "down";
  latency: number;
  blockHeight: number;
}

interface ApiKey {
  id: string;
  name: string;
  prefix: string;
  created: string;
  lastUsed: string;
  requests: number;
}

const BlockchainDashboard = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Mock data - would come from API
  const usage = {
    currentPeriod: {
      computeUnits: 145_234_567,
      limit: 300_000_000,
      requests: 892_341,
      webhookDeliveries: 12_456,
    },
    percentUsed: 48,
  };

  const chains: ChainStatus[] = [
    { name: "Ethereum", chainId: 1, status: "operational", latency: 45, blockHeight: 19_234_567 },
    { name: "Polygon", chainId: 137, status: "operational", latency: 32, blockHeight: 54_123_456 },
    { name: "Arbitrum", chainId: 42161, status: "operational", latency: 28, blockHeight: 187_654_321 },
    { name: "Base", chainId: 8453, status: "operational", latency: 35, blockHeight: 12_345_678 },
    { name: "Solana", chainId: 0, status: "operational", latency: 120, blockHeight: 245_678_901 },
    { name: "Optimism", chainId: 10, status: "degraded", latency: 89, blockHeight: 115_234_567 },
  ];

  const apiKeys: ApiKey[] = [
    { id: "1", name: "Production", prefix: "hnz_prod_", created: "2026-01-15", lastUsed: "2 min ago", requests: 234_567 },
    { id: "2", name: "Development", prefix: "hnz_dev_", created: "2026-01-10", lastUsed: "1 hour ago", requests: 45_678 },
    { id: "3", name: "Staging", prefix: "hnz_stg_", created: "2026-01-20", lastUsed: "3 days ago", requests: 12_345 },
  ];

  const copyToClipboard = (key: string) => {
    navigator.clipboard.writeText(`${key}****************************`);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const formatNumber = (num: number) => {
    if (num >= 1_000_000_000) return `${(num / 1_000_000_000).toFixed(1)}B`;
    if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
    if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Blockchain Infrastructure</h2>
          <p className="text-neutral-400 text-sm">RPC, APIs, and Web3 services</p>
        </div>
        <Button className="bg-[#fd4444] hover:bg-[#e03e3e] text-white">
          <Key className="w-4 h-4 mr-2" />
          Create API Key
        </Button>
      </div>

      {/* Usage Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-[#fd4444]" />
            <span className="text-sm text-neutral-400">Compute Units</span>
          </div>
          <p className="text-2xl font-bold">{formatNumber(usage.currentPeriod.computeUnits)}</p>
          <div className="mt-2 h-2 bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#fd4444] rounded-full transition-all"
              style={{ width: `${usage.percentUsed}%` }}
            />
          </div>
          <p className="text-xs text-neutral-500 mt-1">{usage.percentUsed}% of {formatNumber(usage.limit)} limit</p>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4 text-[#fd4444]" />
            <span className="text-sm text-neutral-400">Total Requests</span>
          </div>
          <p className="text-2xl font-bold">{formatNumber(usage.currentPeriod.requests)}</p>
          <p className="text-xs text-neutral-500 mt-1">This billing period</p>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Webhook className="w-4 h-4 text-[#fd4444]" />
            <span className="text-sm text-neutral-400">Webhook Deliveries</span>
          </div>
          <p className="text-2xl font-bold">{formatNumber(usage.currentPeriod.webhookDeliveries)}</p>
          <p className="text-xs text-neutral-500 mt-1">99.8% delivery rate</p>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-sm text-neutral-400">Avg Latency</span>
          </div>
          <p className="text-2xl font-bold">42ms</p>
          <p className="text-xs text-green-500 mt-1">-12% vs last week</p>
        </div>
      </div>

      {/* Chain Status */}
      <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#fd4444]" />
            Chain Status
          </h3>
          <a href="/status" className="text-sm text-[#fd4444] hover:underline flex items-center gap-1">
            View all <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {chains.map((chain) => (
            <div
              key={chain.chainId}
              className="bg-neutral-800/50 rounded-lg p-3 border border-neutral-700/50"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-sm">{chain.name}</span>
                <span className={`w-2 h-2 rounded-full ${
                  chain.status === "operational" ? "bg-green-500" :
                  chain.status === "degraded" ? "bg-yellow-500" : "bg-red-500"
                }`} />
              </div>
              <div className="text-xs text-neutral-400">
                <div className="flex justify-between">
                  <span>Latency</span>
                  <span className="text-white">{chain.latency}ms</span>
                </div>
                <div className="flex justify-between">
                  <span>Block</span>
                  <span className="text-white">{formatNumber(chain.blockHeight)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* API Keys */}
      <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold flex items-center gap-2">
            <Key className="w-4 h-4 text-[#fd4444]" />
            API Keys
          </h3>
          <Button variant="outline" size="sm" className="border-neutral-700">
            Manage Keys
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-800 text-neutral-400">
                <th className="text-left py-2 font-medium">Name</th>
                <th className="text-left py-2 font-medium">Key</th>
                <th className="text-left py-2 font-medium">Created</th>
                <th className="text-left py-2 font-medium">Last Used</th>
                <th className="text-right py-2 font-medium">Requests</th>
                <th className="text-right py-2 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {apiKeys.map((key) => (
                <tr key={key.id} className="border-b border-neutral-800/50">
                  <td className="py-3 font-medium">{key.name}</td>
                  <td className="py-3">
                    <code className="bg-neutral-800 px-2 py-1 rounded text-xs">
                      {key.prefix}****
                    </code>
                  </td>
                  <td className="py-3 text-neutral-400">{key.created}</td>
                  <td className="py-3 text-neutral-400">{key.lastUsed}</td>
                  <td className="py-3 text-right">{formatNumber(key.requests)}</td>
                  <td className="py-3 text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(key.prefix)}
                    >
                      {copiedKey === key.prefix ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a href="/blockchain/chains" className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 hover:border-[#fd4444]/50 transition-colors group">
          <Server className="w-6 h-6 text-[#fd4444] mb-2" />
          <h4 className="font-medium mb-1">RPC Endpoints</h4>
          <p className="text-sm text-neutral-400">Configure chain connections and endpoints</p>
        </a>
        <a href="/blockchain/webhooks" className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 hover:border-[#fd4444]/50 transition-colors group">
          <Webhook className="w-6 h-6 text-[#fd4444] mb-2" />
          <h4 className="font-medium mb-1">Webhooks</h4>
          <p className="text-sm text-neutral-400">Set up event notifications</p>
        </a>
        <a href="/blockchain/wallets" className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 hover:border-[#fd4444]/50 transition-colors group">
          <Shield className="w-6 h-6 text-[#fd4444] mb-2" />
          <h4 className="font-medium mb-1">Smart Wallets</h4>
          <p className="text-sm text-neutral-400">ERC-4337 account abstraction</p>
        </a>
      </div>
    </div>
  );
};

export default BlockchainDashboard;
