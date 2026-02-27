'use client'

import React, { useEffect, useState, useMemo } from "react";
import { Button } from "@hanzo/ui";
import Link from "next/link";
import { Loader2, Search, ChevronDown, ChevronUp, Star, Filter } from "lucide-react";

const PRICING_API = "https://api.hanzo.ai/v1/pricing";

interface HanzoModel {
  name: string;
  fullName: string;
  description: string;
  features: string[];
  tier: string;
  specs: { params: string; arch: string };
  pricing: { input?: number; output?: number; cacheRead?: number | null; cacheWrite?: number | null; perUnit?: number };
  pricingUnit?: string;
  endpoint?: string;
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
  if (val == null) return "N/A";
  if (val === 0) return "Free";
  return `$${val} / MTok`;
};

// Tier badge colors
const TIER_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  "ultra max": { bg: "bg-primary/15", text: "text-foreground", border: "border-white/30" },
  ultra: { bg: "bg-primary/10", text: "text-foreground/60", border: "border-border" },
  "pro max": { bg: "bg-primary/10", text: "text-foreground/70", border: "border-border" },
  pro: { bg: "bg-primary/10", text: "text-foreground/70", border: "border-border" },
};

function TierBadge({ tier }: { tier: string }) {
  const style = TIER_STYLES[tier] || TIER_STYLES.pro;
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full ${style.bg} ${style.text} border ${style.border}`}
    >
      {tier}
    </span>
  );
}

function FreeBadge() {
  return (
    <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-primary/10 text-foreground/70 border border-border">
      Free
    </span>
  );
}

function FeaturedBadge() {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-primary/10 text-foreground/60 border border-border">
      <Star className="w-2.5 h-2.5" />
      Featured
    </span>
  );
}

const UNIT_LABELS: Record<string, string> = {
  image: "/ image",
  step: "/ step",
  minute: "/ minute",
};

const fmtUnit = (val: number | undefined, unit?: string) => {
  if (val == null) return "N/A";
  return `$${val} ${UNIT_LABELS[unit || ""] || ""}`.trim();
};

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
        // Fall back to static data
        import("@/lib/data/pricing.json")
          .then((mod) => { setData(mod.default as unknown as PricingResponse); setLoading(false); })
          .catch(() => { setError("Unable to load pricing data."); setLoading(false); });
      });
  }, []);

  // Derive providers list and filter models
  const providers = useMemo(() => {
    if (!data?.thirdPartyModels) return [];
    const set = new Set(data.thirdPartyModels.map((m) => m.provider));
    return Array.from(set).sort();
  }, [data]);

  const filteredModels = useMemo(() => {
    if (!data?.thirdPartyModels) return [];
    let models = data.thirdPartyModels;

    if (selectedProvider !== "all") {
      models = models.filter((m) => m.provider === selectedProvider);
    }
    if (showFreeOnly) {
      models = models.filter((m) => m.isFree);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      models = models.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.id?.toLowerCase().includes(q) ||
          m.provider?.toLowerCase().includes(q)
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
        <Loader2 className="w-6 h-6 animate-spin mr-2 text-muted-foreground" />
        <span className="text-muted-foreground">Loading live pricing...</span>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="text-center py-24 text-muted-foreground">{error || "Failed to load pricing."}</div>
    );
  }

  const { hanzoModels, tools } = data;
  const summary = data.summary;
  const visibleModels = filteredModels.slice(0, showCount);

  // Group hanzo models by category
  const llmModels = hanzoModels.filter((m: any) => !m.pricingUnit && !m.endpoint);
  const embeddingModels = hanzoModels.filter((m: any) => m.endpoint === "/v1/embeddings");
  const rerankerModels = hanzoModels.filter((m: any) => m.endpoint === "/v1/rerank");
  const imageModels = hanzoModels.filter((m: any) => m.endpoint === "/v1/images/generations");
  const audioModels = hanzoModels.filter((m: any) => m.endpoint === "/v1/audio/transcriptions");

  const HanzoModelCard = ({ model }: { model: HanzoModel }) => (
    <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800/50 mb-4">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h3 className="text-xl font-semibold">{model.fullName || model.name}</h3>
            <TierBadge tier={model.tier} />
          </div>
          {model.description && (
            <p className="text-muted-foreground mb-3">{model.description}</p>
          )}

          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 flex-wrap">
            <span>
              Parameters: <span className="text-foreground/80">{model.specs.params}</span>
            </span>
            <span>
              Architecture: <span className="text-foreground/80">{model.specs.arch}</span>
            </span>
          </div>

          {model.features && (
            <div className="mb-4">
              {model.features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-muted-foreground mb-1.5">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2.5"></span>
                  {feature}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="ml-6 shrink-0">
          <Button
            className="bg-[var(--white)] text-primary-foreground border border-gray-300 hover:bg-transparent hover:text-[var(--white)] hover:border-[var(--white)] transition-all duration-300"
            onClick={() => {
              window.open('https://cloud.hanzo.ai/signup', '_blank');
            }}
          >
            Start Using {model.name}
          </Button>
        </div>
      </div>

      {model.pricingUnit ? (
        <div className="flex items-center gap-4 text-sm bg-background/20 rounded-lg p-4">
          <div>
            <span className="text-muted-foreground block mb-1">Price</span>
            <div className="font-medium text-lg">{fmtUnit(model.pricing.perUnit, model.pricingUnit)}</div>
          </div>
          {model.endpoint && (
            <div className="ml-auto">
              <code className="text-xs text-muted-foreground bg-background/30 rounded px-2 py-1">{model.endpoint}</code>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm bg-background/20 rounded-lg p-4">
          <div>
            <span className="text-muted-foreground block mb-1">Input</span>
            <div className="font-medium text-lg">{fmt(model.pricing.input ?? null)}</div>
          </div>
          <div>
            <span className="text-muted-foreground block mb-1">Output</span>
            <div className="font-medium text-lg">{fmt(model.pricing.output ?? null)}</div>
          </div>
          <div>
            <span className="text-muted-foreground block mb-1">Cache Write</span>
            <div className="font-medium text-lg">{fmt(model.pricing.cacheWrite ?? null)}</div>
          </div>
          <div>
            <span className="text-muted-foreground block mb-1">Cache Read</span>
            <div className="font-medium text-lg">{fmt(model.pricing.cacheRead ?? null)}</div>
          </div>
        </div>
      )}
    </div>
  );

  const ToolCard = ({ tool }: { tool: ToolEntry }) => (
    <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800/50">
      <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
      <div className="text-right">
        <span className="text-muted-foreground">{tool.unit}</span>
        <div className="font-medium">${tool.price}</div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto mb-16">
      {/* Summary Stats */}
      {summary && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {[
            { label: "Zen Models", value: summary.zenModels },
            { label: "Third-Party", value: summary.thirdPartyModels },
            { label: "Total Models", value: summary.totalModels },
            { label: "Providers", value: summary.providers },
            { label: "Featured", value: summary.featuredModels },
            { label: "Free Models", value: summary.freeModels },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-900/30 rounded-xl p-4 border border-gray-800/50 text-center"
            >
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Hanzo Zen Models Section */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-bold">Hanzo Zen Models</h2>
            <p className="text-muted-foreground text-lg mt-2">
              {hanzoModels.length} models across LLM, embedding, reranker, image, and audio
              {data.updated && (
                <span className="ml-2 text-xs text-muted-foreground/60">
                  Updated {new Date(data.updated).toLocaleDateString()}
                </span>
              )}
            </p>
          </div>
          <Link
            to="/zen/models"
            className="inline-flex items-center px-4 py-2 rounded-full font-medium text-sm bg-primary/10 text-foreground border border-border hover:bg-primary/20 transition-colors"
          >
            Full Model Catalog
          </Link>
        </div>

        {/* Tier legend */}
        <div className="flex flex-wrap gap-3 mb-8">
          {Object.keys(TIER_STYLES).map((tier) => (
            <TierBadge key={tier} tier={tier} />
          ))}
        </div>

        {/* LLM Models */}
        <div className="space-y-4 mb-8">
          {llmModels.map((model) => (
            <HanzoModelCard key={model.name} model={model} />
          ))}
        </div>

        <div className="text-sm text-muted-foreground mb-6">
          All Zen LLMs available via OpenAI-compatible API at{" "}
          <code className="text-foreground/80">api.hanzo.ai/v1/chat/completions</code>
        </div>

        {/* Embedding Models */}
        {embeddingModels.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Embedding Models</h3>
            <p className="text-muted-foreground mb-4">High-quality text embeddings via <code className="text-foreground/80">/v1/embeddings</code></p>
            <div className="space-y-4">
              {embeddingModels.map((model) => (
                <HanzoModelCard key={model.name} model={model} />
              ))}
            </div>
          </div>
        )}

        {/* Reranker Models */}
        {rerankerModels.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Reranker Models</h3>
            <p className="text-muted-foreground mb-4">Improve retrieval quality via <code className="text-foreground/80">/v1/rerank</code></p>
            <div className="space-y-4">
              {rerankerModels.map((model) => (
                <HanzoModelCard key={model.name} model={model} />
              ))}
            </div>
          </div>
        )}

        {/* Image Generation Models */}
        {imageModels.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Image Generation</h3>
            <p className="text-muted-foreground mb-4">FLUX, Stable Diffusion, and more via <code className="text-foreground/80">/v1/images/generations</code></p>
            <div className="space-y-4">
              {imageModels.map((model) => (
                <HanzoModelCard key={model.name} model={model} />
              ))}
            </div>
          </div>
        )}

        {/* Audio Transcription Models */}
        {audioModels.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Audio Transcription</h3>
            <p className="text-muted-foreground mb-4">Speech-to-text via <code className="text-foreground/80">/v1/audio/transcriptions</code></p>
            <div className="space-y-4">
              {audioModels.map((model) => (
                <HanzoModelCard key={model.name} model={model} />
              ))}
            </div>
          </div>
        )}

        <div className="text-sm text-muted-foreground mb-6">
          Customers can purchase prioritized API capacity with Priority Tier
        </div>

        <div className="text-sm text-muted-foreground mb-8">
          Prompt caching pricing is for our standard 5-minute TTL;{" "}
          <a href="#" className="text-foreground hover:underline">
            extended prompt caching
          </a>{" "}
          is available at an additional cost
        </div>

        <div className="flex justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-gray-100 px-8 py-3">
            Start building
          </Button>
        </div>
      </div>

      {/* Tools Section */}
      {tools && tools.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Explore pricing for tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {tools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>

          <div className="text-sm text-muted-foreground mb-8">
            *Does not include input and output tokens required to process requests
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-gray-100 px-8 py-3">
              Start building
            </Button>
          </div>
        </div>
      )}

      {/* Featured Third-Party Models */}
      {featuredModels.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Featured Third-Party Models</h2>
          <p className="text-muted-foreground mb-8">
            Top models from leading AI providers — all accessible through one Hanzo API key
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredModels.map((model) => (
              <div
                key={model.id || model.name}
                className="bg-gray-900/30 rounded-xl p-5 border border-gray-800/50 hover:border-border transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">{model.name}</h3>
                      {model.isFree && <FreeBadge />}
                    </div>
                    <span className="text-xs text-muted-foreground">{model.provider}</span>
                  </div>
                  <FeaturedBadge />
                </div>
                {model.features && (
                  <div className="mb-3">
                    {model.features.map((f, i) => (
                      <span key={i} className="text-xs text-muted-foreground mr-3">
                        {f}
                      </span>
                    ))}
                  </div>
                )}
                <div className="grid grid-cols-2 gap-3 text-sm bg-background/20 rounded-lg p-3">
                  <div>
                    <span className="text-muted-foreground text-xs block">Input</span>
                    <span className="font-medium">{fmt(model.pricing.input)}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-xs block">Output</span>
                    <span className="font-medium">{fmt(model.pricing.output)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Third-Party Models — Searchable Table */}
      {data.thirdPartyModels && data.thirdPartyModels.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-2">All Third-Party Models</h2>
          <p className="text-muted-foreground mb-6">
            {data.thirdPartyModels.length} models from {providers.length} providers — dynamically detected and priced
          </p>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {/* Search */}
            <div className="relative flex-1 min-w-[200px] max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search models..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setShowCount(MODELS_PER_PAGE); }}
                className="w-full pl-9 pr-4 py-2 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-ring"
              />
            </div>

            {/* Provider filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
              <select
                value={selectedProvider}
                onChange={(e) => { setSelectedProvider(e.target.value); setShowCount(MODELS_PER_PAGE); }}
                className="pl-8 pr-8 py-2 rounded-lg bg-secondary border border-border text-sm text-foreground appearance-none cursor-pointer focus:outline-none focus:border-ring"
              >
                <option value="all">All Providers ({providers.length})</option>
                {providers.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
            </div>

            {/* Free toggle */}
            <button
              onClick={() => { setShowFreeOnly(!showFreeOnly); setShowCount(MODELS_PER_PAGE); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                showFreeOnly
                  ? "bg-primary/10 text-foreground/70 border-border"
                  : "bg-secondary text-muted-foreground border-border hover:border-neutral-600"
              }`}
            >
              Free Only
            </button>

            {/* Results count */}
            <span className="text-xs text-muted-foreground ml-auto">
              {filteredModels.length} model{filteredModels.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-background border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-secondary/80">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Model
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden sm:table-cell">
                    Provider
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">
                    Context
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Input
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Output
                  </th>
                </tr>
              </thead>
              <tbody>
                {visibleModels.map((model) => (
                  <tr
                    key={model.id || model.name}
                    className={`border-t border-border/50 hover:bg-secondary/50 transition-colors ${
                      model.featured ? "bg-primary/5" : ""
                    }`}
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-medium text-foreground text-sm">{model.name}</span>
                        {model.featured && <FeaturedBadge />}
                        {model.isFree && <FreeBadge />}
                      </div>
                      <span className="text-xs text-muted-foreground sm:hidden">{model.provider}</span>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground hidden sm:table-cell">
                      {model.provider}
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground hidden md:table-cell">
                      {model.contextWindow
                        ? model.contextWindow >= 1_000_000
                          ? `${Math.round(model.contextWindow / 1000)}K`
                          : model.contextWindow >= 1000
                          ? `${Math.round(model.contextWindow / 1000)}K`
                          : model.contextWindow
                        : "N/A"}
                    </td>
                    <td className="px-4 py-3 text-right text-sm">
                      <span className={model.isFree ? "text-foreground/70" : "text-foreground"}>
                        {fmt(model.pricing.input)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right text-sm">
                      <span className={model.isFree ? "text-foreground/70" : "text-foreground"}>
                        {fmt(model.pricing.output)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Show more */}
          {filteredModels.length > showCount && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowCount((c) => c + MODELS_PER_PAGE)}
                className="px-6 py-2 rounded-full text-sm font-medium border border-border bg-transparent hover:bg-secondary text-foreground/80 transition-colors"
              >
                Show more ({filteredModels.length - showCount} remaining)
              </button>
            </div>
          )}

          {filteredModels.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No models match your filters.
            </div>
          )}

          <div className="text-sm text-muted-foreground mt-6">
            Third-party model pricing includes a passthrough markup. Prices update automatically every 6 hours.
            All models accessible via <code className="text-foreground/80">api.hanzo.ai/v1/chat/completions</code> using
            the provider-prefixed model ID (e.g. <code className="text-foreground/80">anthropic/claude-sonnet-4.6</code>).
          </div>
        </div>
      )}
    </div>
  );
};

export default APIPricing;
