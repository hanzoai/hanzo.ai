import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";

const PRICING_API = "https://api.hanzo.ai/v1/pricing";

interface HanzoModel {
  name: string;
  fullName: string;
  description: string;
  features: string[];
  tier: string;
  upstream: { params: string; arch: string };
  pricing: { input: number; output: number; cacheRead: number | null; cacheWrite: number | null };
}

interface ThirdPartyModel {
  name: string;
  features: string[];
  contextWindow: number;
  pricing: { input: number; output: number; cacheRead: number | null; cacheWrite: number | null };
}

interface ToolEntry {
  name: string;
  unit: string;
  price: number;
}

interface PricingResponse {
  updated: string;
  hanzoModels: HanzoModel[];
  thirdPartyModels: ThirdPartyModel[];
  tools: ToolEntry[];
}

const fmt = (val: number | null) => {
  if (val == null) return "N/A";
  return `$${val} / MTok`;
};

// Tier badge colors
const TIER_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  "ultra max": { bg: "bg-[#fd4444]/15", text: "text-[#fd4444]", border: "border-[#fd4444]/30" },
  ultra: { bg: "bg-amber-500/15", text: "text-amber-400", border: "border-amber-500/30" },
  "pro max": { bg: "bg-violet-500/15", text: "text-violet-400", border: "border-violet-500/30" },
  pro: { bg: "bg-sky-500/15", text: "text-sky-400", border: "border-sky-500/30" },
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

const APIPricing = () => {
  const [data, setData] = useState<PricingResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(PRICING_API)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((d) => { setData(d); setLoading(false); })
      .catch((err) => {
        console.error("Failed to fetch pricing:", err);
        setError("Unable to load live pricing.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="w-6 h-6 animate-spin mr-2 text-neutral-400" />
        <span className="text-neutral-400">Loading live pricing...</span>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="text-center py-24 text-neutral-500">{error || "Failed to load pricing."}</div>
    );
  }

  const { hanzoModels, thirdPartyModels, tools } = data;

  const HanzoModelCard = ({ model }: { model: HanzoModel }) => (
    <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800/50 mb-4">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h3 className="text-xl font-semibold">{model.fullName || model.name}</h3>
            <TierBadge tier={model.tier} />
          </div>
          {model.description && (
            <p className="text-neutral-400 mb-3">{model.description}</p>
          )}

          {/* Architecture info (public specs only, no upstream model names) */}
          <div className="flex items-center gap-4 text-xs text-neutral-500 mb-3 flex-wrap">
            <span>
              Parameters: <span className="text-neutral-300">{model.upstream.params}</span>
            </span>
            <span>
              Architecture: <span className="text-neutral-300">{model.upstream.arch}</span>
            </span>
          </div>

          {model.features && (
            <div className="mb-4">
              {model.features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-neutral-400 mb-1.5">
                  <span className="w-1.5 h-1.5 bg-[#fd4444] rounded-full mr-2.5"></span>
                  {feature}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="ml-6 shrink-0">
          <Button
            className="bg-[var(--white)] text-black border border-gray-300 hover:bg-transparent hover:text-[var(--white)] hover:border-[var(--white)] transition-all duration-300"
            onClick={() => {
              window.open('https://cloud.hanzo.ai/signup', '_blank');
            }}
          >
            Start Using {model.name}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm bg-black/20 rounded-lg p-4">
        <div>
          <span className="text-neutral-500 block mb-1">Input</span>
          <div className="font-medium text-lg">{fmt(model.pricing.input)}</div>
        </div>
        <div>
          <span className="text-neutral-500 block mb-1">Output</span>
          <div className="font-medium text-lg">{fmt(model.pricing.output)}</div>
        </div>
        <div>
          <span className="text-neutral-500 block mb-1">Cache Write</span>
          <div className="font-medium text-lg">{fmt(model.pricing.cacheWrite)}</div>
        </div>
        <div>
          <span className="text-neutral-500 block mb-1">Cache Read</span>
          <div className="font-medium text-lg">{fmt(model.pricing.cacheRead)}</div>
        </div>
      </div>
    </div>
  );

  const ThirdPartyModelCard = ({ model }: { model: ThirdPartyModel }) => (
    <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800/50">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{model.name}</h3>

          {model.features && (
            <div className="mb-4">
              {model.features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-neutral-400 mb-1.5">
                  <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mr-2.5"></span>
                  {feature}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="ml-6 shrink-0">
          <Button
            className="bg-[var(--white)] text-black border border-gray-300 hover:bg-transparent hover:text-[var(--white)] hover:border-[var(--white)] transition-all duration-300"
            onClick={() => {
              window.open('https://cloud.hanzo.ai/signup', '_blank');
            }}
          >
            Start Using {model.name}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm bg-black/20 rounded-lg p-4">
        <div>
          <span className="text-neutral-500 block mb-1">Input</span>
          <div className="font-medium text-lg">{fmt(model.pricing.input)}</div>
        </div>
        <div>
          <span className="text-neutral-500 block mb-1">Output</span>
          <div className="font-medium text-lg">{fmt(model.pricing.output)}</div>
        </div>
        <div>
          <span className="text-neutral-500 block mb-1">Cache Write</span>
          <div className="font-medium text-lg">{fmt(model.pricing.cacheWrite)}</div>
        </div>
        <div>
          <span className="text-neutral-500 block mb-1">Cache Read</span>
          <div className="font-medium text-lg">{fmt(model.pricing.cacheRead)}</div>
        </div>
      </div>
    </div>
  );

  const ToolCard = ({ tool }: { tool: ToolEntry }) => (
    <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800/50">
      <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
      <div className="text-right">
        <span className="text-neutral-500">{tool.unit}</span>
        <div className="font-medium">${tool.price}</div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto mb-16">
      {/* Hanzo Zen Models Section */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-bold">Hanzo Zen Models</h2>
            <p className="text-neutral-400 text-lg mt-2">
              {hanzoModels.length} foundation models across 4 tiers -- Zen MoDE architecture
              {data.updated && (
                <span className="ml-2 text-xs text-neutral-600">
                  Updated {new Date(data.updated).toLocaleDateString()}
                </span>
              )}
            </p>
          </div>
          <Link
            to="/zen/models"
            className="inline-flex items-center px-4 py-2 rounded-full font-medium text-sm bg-[#fd4444]/10 text-[#fd4444] border border-[#fd4444]/20 hover:bg-[#fd4444]/20 transition-colors"
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

        <div className="space-y-4 mb-8">
          {hanzoModels.map((model) => (
            <HanzoModelCard key={model.name} model={model} />
          ))}
        </div>

        <div className="text-sm text-neutral-500 mb-6">
          All Zen models available via OpenAI-compatible API at{" "}
          <code className="text-neutral-300">api.hanzo.ai/v1/chat/completions</code>
        </div>

        <div className="text-sm text-neutral-500 mb-6">
          Customers can purchase prioritized API capacity with Priority Tier
        </div>

        <div className="text-sm text-neutral-500 mb-8">
          Prompt caching pricing is for our standard 5-minute TTL;{" "}
          <a href="#" className="text-[#fd4444] hover:underline">
            extended prompt caching
          </a>{" "}
          is available at an additional cost
        </div>

        <div className="flex justify-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3">
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

          <div className="text-sm text-neutral-500 mb-8">
            *Does not include input and output tokens required to process requests
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3">
              Start building
            </Button>
          </div>
        </div>
      )}

      {/* Third-party Models Section */}
      {thirdPartyModels && thirdPartyModels.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Explore third-party models</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {thirdPartyModels.map((model) => (
              <ThirdPartyModelCard key={model.name} model={model} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default APIPricing;
