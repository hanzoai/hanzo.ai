'use client'

import React, { useEffect, useState, useMemo } from "react";
import { Button } from "@hanzo/ui";
import Link from "next/link";
import { Loader2, Search, ChevronDown, Star, Filter } from "lucide-react";

const PRICING_API = "https://api.hanzo.ai/v1/pricing";

interface HanzoModel {
  name: string;
  fullName: string;
  description: string;
  features: string[];
  tier: string;
  specs: { params: string; arch: string };
  pricing: { input: number; output: number; cacheRead: number | null; cacheWrite: number | null };
}

interface ThirdPartyModel {
  id: string;
  name: string;
  provider: string;
  features: string[];
  contextWindow: number;
  isFree: boolean;
  featured?: boolean;
  pricing: { input: number; output: number; cacheRead: number | null; cacheWrite: number | null };
}

interface ToolEntry {
  name: string;
  unit: string;
  price: number;
}

interface PricingSummary {
  zenModels: number;
  thirdPartyModels: number;
  freeModels: number;
  featuredModels: number;
  providers: number;
  totalModels: number;
}

interface PricingResponse {
  updated: string;
  summary?: PricingSummary;
  hanzoModels: HanzoModel[];
  thirdPartyModels: ThirdPartyModel[];
  tools: ToolEntry[];
  providers?: Record<string, { total: number; free: number; paid: number }>;
}

const fmt = (val: number | null) => {
  if (val == null) return "—";
  if (val === 0) return "Free";
  return `$${val}`;
};

function TierBadge({ tier }: { tier: string }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider rounded bg-neutral-800 text-neutral-400 border border-neutral-700">
      {tier}
    </span>
  );
}

function FreeBadge() {
  return (
    <span className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider rounded bg-neutral-800 text-neutral-400 border border-neutral-700">
      Free
    </span>
  );
}

function FeaturedBadge() {
  return (
    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
      <Star className="w-2.5 h-2.5" />
      Featured
    </span>
  );
}

/** Zen cache pricing: 50% discount on input for cache reads */
function zenCacheRead(input: number | null): number | null {
  if (input == null || input === 0) return null;
  const val = input * 0.5;
  if (val >= 1) return Math.round(val * 100) / 100;
  if (val >= 0.01) return Math.round(val * 1000) / 1000;
  return Math.round(val * 10000) / 10000;
}

function zenCacheWrite(input: number | null): number | null {
  return input; // cache write = same as input
}

const MODELS_PER_PAGE = 50;

const APIPricing = () => {
  const [data, setData] = useState<PricingResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Third-party filters
  const [search, setSearch] = useState("");
  const [selectedProvider, setSelectedProvider] = useState<string>("all");
  const [showFreeOnly, setShowFreeOnly] = useState(false);
  const [showCount, setShowCount] = useState(MODELS_PER_PAGE);

  useEffect(() => {
    fetch(PRICING_API)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((d) => { setData(d); setLoading(false); })
      .catch((err) => {
        console.error("Failed to fetch pricing:", err);
        import("@/lib/data/pricing.json")
          .then((mod) => { setData(mod.default as unknown as PricingResponse); setLoading(false); })
          .catch(() => { setError("Unable to load pricing data."); setLoading(false); });
      });
  }, []);

  const providers = useMemo(() => {
    if (!data?.thirdPartyModels) return [];
    const set = new Set(data.thirdPartyModels.map((m) => m.provider));
    return Array.from(set).sort();
  }, [data]);

  const filteredModels = useMemo(() => {
    if (!data?.thirdPartyModels) return [];
    let models = data.thirdPartyModels;
    if (selectedProvider !== "all") models = models.filter((m) => m.provider === selectedProvider);
    if (showFreeOnly) models = models.filter((m) => m.isFree);
    if (search.trim()) {
      const q = search.toLowerCase();
      models = models.filter((m) =>
        m.name.toLowerCase().includes(q) || m.id?.toLowerCase().includes(q) || m.provider?.toLowerCase().includes(q)
      );
    }
    return models;
  }, [data, selectedProvider, showFreeOnly, search]);

  const featuredModels = useMemo(() => {
    if (!data?.thirdPartyModels) return [];
    return data.thirdPartyModels.filter((m) => m.featured);
  }, [data]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="w-5 h-5 animate-spin mr-2 text-neutral-500" />
        <span className="text-neutral-500 text-sm">Loading pricing...</span>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="text-center py-24 text-neutral-500">{error || "Failed to load pricing."}</div>
    );
  }

  const { hanzoModels, tools } = data;
  const summary = data.summary;
  const visibleModels = filteredModels.slice(0, showCount);

  return (
    <div className="max-w-5xl mx-auto mb-16">
      {/* Summary Stats */}
      {summary && (
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-px mb-12 border border-neutral-800 rounded-lg overflow-hidden">
          {[
            { label: "Zen Models", value: summary.zenModels },
            { label: "Third-Party", value: summary.thirdPartyModels },
            { label: "Total", value: summary.totalModels },
            { label: "Providers", value: summary.providers },
            { label: "Featured", value: summary.featuredModels },
            { label: "Free", value: summary.freeModels },
          ].map((stat) => (
            <div key={stat.label} className="bg-neutral-900/50 p-4 text-center">
              <div className="text-2xl font-semibold text-white tabular-nums">{stat.value}</div>
              <div className="text-[11px] text-neutral-500 uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Hanzo Zen Models */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Zen Models</h2>
            <p className="text-neutral-500 text-sm mt-1">
              {hanzoModels.length} foundation models &middot; Zen MoDE architecture
              {data.updated && (
                <span className="ml-2 text-neutral-600">
                  &middot; Updated {new Date(data.updated).toLocaleDateString()}
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Zen table */}
        <div className="border border-neutral-800 rounded-lg overflow-hidden mb-6">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-800">
                <th className="px-4 py-3 text-left text-[11px] font-medium text-neutral-500 uppercase tracking-wider">Model</th>
                <th className="px-4 py-3 text-left text-[11px] font-medium text-neutral-500 uppercase tracking-wider hidden md:table-cell">Tier</th>
                <th className="px-4 py-3 text-right text-[11px] font-medium text-neutral-500 uppercase tracking-wider">Input</th>
                <th className="px-4 py-3 text-right text-[11px] font-medium text-neutral-500 uppercase tracking-wider">Output</th>
                <th className="px-4 py-3 text-right text-[11px] font-medium text-neutral-500 uppercase tracking-wider hidden sm:table-cell">Cache Write</th>
                <th className="px-4 py-3 text-right text-[11px] font-medium text-neutral-500 uppercase tracking-wider hidden sm:table-cell">
                  Cache Read
                  <span className="ml-1 text-[9px] text-neutral-600 normal-case">50% off</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {hanzoModels.map((model, i) => {
                const cr = model.pricing.cacheRead ?? zenCacheRead(model.pricing.input);
                const cw = model.pricing.cacheWrite ?? zenCacheWrite(model.pricing.input);
                return (
                  <tr key={model.name} className={`border-t border-neutral-800/50 hover:bg-neutral-900/50 transition-colors ${i === 0 ? 'border-t-0' : ''}`}>
                    <td className="px-4 py-3">
                      <div className="font-medium text-white text-sm">{model.fullName || model.name}</div>
                      <div className="text-[11px] text-neutral-500 mt-0.5">
                        {model.specs.params} &middot; {model.specs.arch}
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <TierBadge tier={model.tier} />
                    </td>
                    <td className="px-4 py-3 text-right text-sm tabular-nums text-white">{fmt(model.pricing.input)}</td>
                    <td className="px-4 py-3 text-right text-sm tabular-nums text-white">{fmt(model.pricing.output)}</td>
                    <td className="px-4 py-3 text-right text-sm tabular-nums text-neutral-400 hidden sm:table-cell">{fmt(cw)}</td>
                    <td className="px-4 py-3 text-right text-sm tabular-nums text-neutral-400 hidden sm:table-cell">{fmt(cr)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-neutral-600 mb-2">
          All prices per million tokens (MTok). Cache read is 50% of input price with standard 5-minute TTL.
        </p>
        <p className="text-xs text-neutral-600 mb-6">
          All models available via <code className="text-neutral-500">api.hanzo.ai/v1/chat/completions</code>
        </p>
      </div>

      {/* Tools */}
      {tools && tools.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">Tools</h2>
          <div className="border border-neutral-800 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-800">
                  <th className="px-4 py-3 text-left text-[11px] font-medium text-neutral-500 uppercase tracking-wider">Tool</th>
                  <th className="px-4 py-3 text-right text-[11px] font-medium text-neutral-500 uppercase tracking-wider">Unit</th>
                  <th className="px-4 py-3 text-right text-[11px] font-medium text-neutral-500 uppercase tracking-wider">Price</th>
                </tr>
              </thead>
              <tbody>
                {tools.map((tool, i) => (
                  <tr key={tool.name} className={`border-t border-neutral-800/50 hover:bg-neutral-900/50 transition-colors ${i === 0 ? 'border-t-0' : ''}`}>
                    <td className="px-4 py-3 font-medium text-white text-sm">{tool.name}</td>
                    <td className="px-4 py-3 text-right text-sm text-neutral-500">{tool.unit}</td>
                    <td className="px-4 py-3 text-right text-sm tabular-nums text-white">${tool.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Featured Third-Party */}
      {featuredModels.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-1">Featured Third-Party Models</h2>
          <p className="text-neutral-500 text-sm mb-6">
            Top models from leading providers — one Hanzo API key
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-neutral-800 rounded-lg overflow-hidden">
            {featuredModels.map((model) => (
              <div key={model.id || model.name} className="bg-neutral-950 p-5 hover:bg-neutral-900/50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-medium text-white text-sm">{model.name}</h3>
                    <span className="text-[11px] text-neutral-500">{model.provider}</span>
                  </div>
                  {model.isFree ? <FreeBadge /> : null}
                </div>
                <div className="flex items-baseline gap-6 mt-3 text-sm">
                  <div>
                    <span className="text-[11px] text-neutral-600 mr-1">In</span>
                    <span className="tabular-nums text-white">{fmt(model.pricing.input)}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-600 mr-1">Out</span>
                    <span className="tabular-nums text-white">{fmt(model.pricing.output)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Third-Party Models */}
      {data.thirdPartyModels && data.thirdPartyModels.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-1">All Third-Party Models</h2>
          <p className="text-neutral-500 text-sm mb-6">
            {data.thirdPartyModels.length} models &middot; {providers.length} providers &middot; dynamically priced
          </p>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <div className="relative flex-1 min-w-[200px] max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-600" />
              <input
                type="text"
                placeholder="Search models..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setShowCount(MODELS_PER_PAGE); }}
                className="w-full pl-9 pr-3 py-1.5 rounded-md bg-transparent border border-neutral-800 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600"
              />
            </div>

            <div className="relative">
              <select
                value={selectedProvider}
                onChange={(e) => { setSelectedProvider(e.target.value); setShowCount(MODELS_PER_PAGE); }}
                className="pl-3 pr-7 py-1.5 rounded-md bg-transparent border border-neutral-800 text-sm text-neutral-400 appearance-none cursor-pointer focus:outline-none focus:border-neutral-600"
              >
                <option value="all">All Providers</option>
                {providers.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-neutral-600 pointer-events-none" />
            </div>

            <button
              onClick={() => { setShowFreeOnly(!showFreeOnly); setShowCount(MODELS_PER_PAGE); }}
              className={`px-3 py-1.5 rounded-md text-sm border transition-colors ${
                showFreeOnly
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-neutral-500 border-neutral-800 hover:border-neutral-600"
              }`}
            >
              Free
            </button>

            <span className="text-[11px] text-neutral-600 ml-auto tabular-nums">
              {filteredModels.length} models
            </span>
          </div>

          {/* Table */}
          <div className="border border-neutral-800 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-800">
                  <th className="px-4 py-3 text-left text-[11px] font-medium text-neutral-500 uppercase tracking-wider">Model</th>
                  <th className="px-4 py-3 text-left text-[11px] font-medium text-neutral-500 uppercase tracking-wider hidden sm:table-cell">Provider</th>
                  <th className="px-4 py-3 text-left text-[11px] font-medium text-neutral-500 uppercase tracking-wider hidden md:table-cell">Context</th>
                  <th className="px-4 py-3 text-right text-[11px] font-medium text-neutral-500 uppercase tracking-wider">Input</th>
                  <th className="px-4 py-3 text-right text-[11px] font-medium text-neutral-500 uppercase tracking-wider">Output</th>
                </tr>
              </thead>
              <tbody>
                {visibleModels.map((model, i) => (
                  <tr
                    key={model.id || model.name}
                    className={`border-t border-neutral-800/50 hover:bg-neutral-900/50 transition-colors ${i === 0 ? 'border-t-0' : ''}`}
                  >
                    <td className="px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-white text-sm">{model.name}</span>
                        {model.isFree && <FreeBadge />}
                      </div>
                      <span className="text-[11px] text-neutral-600 sm:hidden">{model.provider}</span>
                    </td>
                    <td className="px-4 py-2.5 text-sm text-neutral-500 hidden sm:table-cell">{model.provider}</td>
                    <td className="px-4 py-2.5 text-sm text-neutral-500 tabular-nums hidden md:table-cell">
                      {model.contextWindow
                        ? model.contextWindow >= 1000 ? `${Math.round(model.contextWindow / 1000)}K` : model.contextWindow
                        : "—"}
                    </td>
                    <td className="px-4 py-2.5 text-right text-sm tabular-nums text-white">{fmt(model.pricing.input)}</td>
                    <td className="px-4 py-2.5 text-right text-sm tabular-nums text-white">{fmt(model.pricing.output)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredModels.length > showCount && (
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setShowCount((c) => c + MODELS_PER_PAGE)}
                className="px-4 py-1.5 rounded-md text-sm border border-neutral-800 text-neutral-400 hover:bg-neutral-900 transition-colors"
              >
                Show more ({filteredModels.length - showCount} remaining)
              </button>
            </div>
          )}

          {filteredModels.length === 0 && (
            <div className="text-center py-12 text-neutral-600 text-sm">No models match your filters.</div>
          )}

          <p className="text-xs text-neutral-600 mt-4">
            Prices per MTok with passthrough markup. Updated every 6 hours.
            Use provider-prefixed model IDs (e.g. <code className="text-neutral-500">anthropic/claude-sonnet-4.6</code>).
          </p>
        </div>
      )}
    </div>
  );
};

export default APIPricing;
