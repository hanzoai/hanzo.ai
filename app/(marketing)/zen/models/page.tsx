'use client'

import Link from 'next/link'

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { Loader2 } from "lucide-react";

const PRICING_API = "https://api.hanzo.ai/v1/pricing";
import {
  ArrowRight,
  Code2,
  Zap,
  ExternalLink,
  Brain,
  Globe,
  BookOpen,
  Terminal,
  Download,
  Eye,
  Shield,
  Cpu,
  Search,
  ChevronDown,
  ChevronUp,
  Image,
  Mic,
  Volume2,
  Sparkles,
} from "lucide-react";

// Derive context window from features string (e.g. "202k context window" -> "202K")
function extractContext(features: string[]): string {
  const ctx = features.find((f) => f.toLowerCase().includes("context"));
  if (!ctx) return "N/A";
  const match = ctx.match(/(\d+[kKmM]+)/);
  return match ? match[1].toUpperCase() : ctx;
}

// Tier badge colors
const TIER_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  "ultra max": { bg: "bg-primary/15", text: "text-foreground", border: "border-white/30" },
  ultra: { bg: "bg-primary/10", text: "text-foreground/60", border: "border-border" },
  "pro max": { bg: "bg-primary/10", text: "text-foreground/70", border: "border-border" },
  pro: { bg: "bg-primary/10", text: "text-foreground/70", border: "border-border" },
  starter: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/20" },
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

const fmt = (val: number | null | undefined) => {
  if (val == null) return "N/A";
  return `$${val}`;
};

// Group models by generation + purpose
interface HanzoModel {
  name: string;
  fullName: string;
  description: string;
  features: string[];
  tier: string;
  specs: { params: string; arch: string };
  pricing: { input: number | null; output: number | null; cacheRead: number | null; cacheWrite: number | null; perUnit?: number } | null;
  pricingUnit?: string;
  endpoint?: string;
  contactSales?: boolean;
}

interface ModelGroup {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  models: HanzoModel[];
  pricingMode?: "token" | "unit" | "contact";
}

function groupModels(models: HanzoModel[]): ModelGroup[] {
  const zen5 = models.filter((m) => m.name.startsWith("zen5"));
  const zen4General = models.filter(
    (m) =>
      (m.name.startsWith("zen4") || m.name.startsWith("zen4.")) &&
      !m.name.includes("coder") &&
      !m.name.includes("thinking")
  );
  const zen4Thinking = models.filter((m) => m.name === "zen4-thinking");
  const zen4Coder = models.filter((m) => m.name.startsWith("zen4-coder"));
  const zen3Core = models.filter(
    (m) =>
      m.name.startsWith("zen3") &&
      !m.name.includes("image") &&
      !m.name.includes("audio") &&
      !m.name.includes("asr") &&
      !m.name.includes("tts") &&
      !m.name.includes("embedding") &&
      !m.name.includes("reranker")
  );
  const zen3Image = models.filter((m) => m.name.startsWith("zen3-image"));
  const zen3Audio = models.filter(
    (m) =>
      m.name.startsWith("zen3-audio") ||
      m.name.startsWith("zen3-asr") ||
      m.name.startsWith("zen3-tts")
  );
  const zen3Retrieval = models.filter(
    (m) =>
      m.name.startsWith("zen3-embedding") ||
      m.name.startsWith("zen3-reranker")
  );

  const groups: ModelGroup[] = [];

  if (zen5.length > 0) {
    groups.push({
      id: "zen5",
      title: "Zen5 -- Next Generation",
      description: "Agentic frontier models trained on 10B+ tokens of real-world tool use and multi-step reasoning.",
      icon: Sparkles,
      models: zen5,
      pricingMode: "contact",
    });
  }

  if (zen4General.length > 0 || zen4Thinking.length > 0) {
    groups.push({
      id: "zen4",
      title: "Zen4 -- Flagship Language Models",
      description: "Flagship and high-capability language models for general reasoning, analysis, and generation.",
      icon: Brain,
      models: [...zen4General, ...zen4Thinking],
    });
  }

  if (zen4Coder.length > 0) {
    groups.push({
      id: "zen4-coder",
      title: "Zen4 Coder -- Code Generation",
      description: "Specialized code models for generation, review, debugging, and full-precision analysis.",
      icon: Code2,
      models: zen4Coder,
    });
  }

  if (zen3Core.length > 0) {
    groups.push({
      id: "zen3",
      title: "Zen3 -- Multimodal & Specialized",
      description: "Multimodal, vision-language, edge, and safety models.",
      icon: Eye,
      models: zen3Core,
    });
  }

  if (zen3Image.length > 0) {
    groups.push({
      id: "zen3-image",
      title: "Zen3 Image -- Generation",
      description: "Text-to-image generation from fast prototyping to broadcast quality.",
      icon: Image,
      models: zen3Image,
      pricingMode: "unit",
    });
  }

  if (zen3Audio.length > 0) {
    groups.push({
      id: "zen3-audio",
      title: "Zen3 Audio -- Speech & Voice",
      description: "Speech-to-text, text-to-speech, and real-time streaming ASR.",
      icon: Volume2,
      models: zen3Audio,
      pricingMode: "unit",
    });
  }

  if (zen3Retrieval.length > 0) {
    groups.push({
      id: "zen3-retrieval",
      title: "Zen3 Retrieval -- Embedding & Reranking",
      description: "High-quality embeddings and rerankers for RAG, search, and classification.",
      icon: Search,
      models: zen3Retrieval,
    });
  }

  return groups;
}

const ModelRow = ({ model, pricingMode }: { model: HanzoModel; pricingMode?: string }) => {
  const [expanded, setExpanded] = useState(false);
  const isUltraMax = model.tier === "ultra max";

  const renderPricing = () => {
    if (model.contactSales || model.pricing == null) {
      return <span className="text-muted-foreground text-xs italic">Contact Sales</span>;
    }
    if (pricingMode === "unit" && model.pricing.perUnit != null) {
      return (
        <span className="text-foreground font-medium">
          ${model.pricing.perUnit}
          <span className="text-muted-foreground text-xs">/{model.pricingUnit || "unit"}</span>
        </span>
      );
    }
    return (
      <>
        <span className="text-foreground font-medium">{fmt(model.pricing.input)}</span>
        <span className="text-muted-foreground"> / </span>
        <span className="text-foreground font-medium">{fmt(model.pricing.output)}</span>
      </>
    );
  };

  return (
    <>
      <tr
        className={`border-t border-border hover:bg-secondary/50 transition-colors cursor-pointer ${
          isUltraMax ? "bg-primary/5" : ""
        }`}
        onClick={() => setExpanded(!expanded)}
      >
        <td className="px-4 md:px-6 py-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-foreground text-sm md:text-base">
              {model.fullName?.split(" — ")[0] || model.fullName?.split(" -- ")[0] || model.name}
            </span>
            <TierBadge tier={model.tier} />
            {model.contactSales && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/20 text-primary font-medium">Research Preview</span>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-1 hidden md:block">
            {model.description}
          </p>
        </td>
        <td className="px-4 md:px-6 py-4 text-foreground/80 text-sm">
          {model.specs.params}
        </td>
        <td className="px-4 md:px-6 py-4 text-foreground/80 text-sm hidden md:table-cell">
          {extractContext(model.features)}
        </td>
        <td className="px-4 md:px-6 py-4 text-foreground/80 text-sm hidden lg:table-cell">
          {model.specs.arch}
        </td>
        <td className="px-4 md:px-6 py-4 text-right text-sm">
          {renderPricing()}
        </td>
        <td className="px-2 py-4 text-muted-foreground">
          {expanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </td>
      </tr>
      {expanded && (
        <tr className="border-t border-border/50">
          <td colSpan={6} className="px-4 md:px-6 py-4 bg-background/80">
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">
                  Architecture
                </h4>
                <p className="text-foreground/80">
                  <span className="text-foreground font-medium">
                    {model.specs.params}
                  </span>
                </p>
                <p className="text-muted-foreground">{model.specs.arch}</p>
                {model.endpoint && (
                  <p className="text-muted-foreground mt-1 font-mono text-xs">{model.endpoint}</p>
                )}
              </div>
              <div>
                <h4 className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">
                  Features
                </h4>
                <div className="space-y-1">
                  {model.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-foreground/80">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">
                  Pricing
                </h4>
                {model.contactSales || model.pricing == null ? (
                  <p className="text-muted-foreground italic">Contact sales for pricing</p>
                ) : pricingMode === "unit" && model.pricing.perUnit != null ? (
                  <div className="p-2 bg-secondary rounded border border-border">
                    <span className="text-[10px] text-muted-foreground block">
                      Per {model.pricingUnit || "unit"}
                    </span>
                    <span className="text-foreground font-medium">
                      ${model.pricing.perUnit}
                    </span>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 bg-secondary rounded border border-border">
                      <span className="text-[10px] text-muted-foreground block">Input</span>
                      <span className="text-foreground font-medium">{fmt(model.pricing.input)}</span>
                    </div>
                    <div className="p-2 bg-secondary rounded border border-border">
                      <span className="text-[10px] text-muted-foreground block">Output</span>
                      <span className="text-foreground font-medium">{fmt(model.pricing.output)}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

const ModelGroupSection = ({ group }: { group: ModelGroup }) => {
  const Icon = group.icon;
  const pricingLabel = group.pricingMode === "unit" ? "Price" : group.pricingMode === "contact" ? "Availability" : "Input / Output";

  return (
    <section id={group.id} className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 border border-border">
          <Icon className="w-6 h-6 text-foreground" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">{group.title}</h2>
          <p className="text-muted-foreground text-sm">{group.description}</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-background border border-border rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-secondary/80">
              <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Model
              </th>
              <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Params
              </th>
              <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">
                Context
              </th>
              <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden lg:table-cell">
                Arch
              </th>
              <th className="px-4 md:px-6 py-3 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {pricingLabel}
              </th>
              <th className="px-2 py-3 w-8"></th>
            </tr>
          </thead>
          <tbody>
            {group.models.map((model) => (
              <ModelRow key={model.name} model={model} pricingMode={group.pricingMode} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

// Static fallback data — matches API schema exactly
const FALLBACK_MODELS: HanzoModel[] = [
  { name: "zen4", fullName: "Zen4 \u2014 Flagship", description: "Flagship MoE model for complex reasoning and multi-domain tasks.", features: ["202K context window", "Flagship intelligence", "100+ languages"], tier: "ultra max", specs: { params: "744B (40B active)", arch: "MoE" }, pricing: { input: 3, output: 9.6, cacheRead: null, cacheWrite: null } },
  { name: "zen4-ultra", fullName: "Zen4 Ultra \u2014 Maximum Reasoning", description: "Maximum reasoning capability with extended chain-of-thought on MoE architecture.", features: ["262K context window", "Deep reasoning", "Chain-of-thought"], tier: "ultra max", specs: { params: "744B (40B active)", arch: "MoE + CoT" }, pricing: { input: 2.7, output: 2.7, cacheRead: null, cacheWrite: null } },
  { name: "zen4-pro", fullName: "Zen4 Pro \u2014 High Capability", description: "Efficient MoE model for demanding workloads with strong reasoning at production-grade cost.", features: ["131K context window", "MoE architecture"], tier: "ultra", specs: { params: "80B (3B active)", arch: "MoE" }, pricing: { input: 3.6, output: 3.6, cacheRead: null, cacheWrite: null } },
  { name: "zen4-max", fullName: "Zen4 Max \u2014 Maximum Intelligence", description: "Most capable model for complex reasoning, analysis, and agentic tasks. 1M token context window.", features: ["1M context window", "Maximum intelligence", "Agentic coding"], tier: "ultra max", specs: { params: "N/A", arch: "Dense" }, pricing: { input: 15, output: 75, cacheRead: null, cacheWrite: null } },
  { name: "zen4.6", fullName: "Zen4.6 \u2014 Extended Context", description: "High-performance 1M context model for long-document analysis, large codebase reasoning, and agentic workflows.", features: ["1M context window", "Agentic coding", "Long-document analysis", "Cost efficient"], tier: "ultra", specs: { params: "N/A", arch: "Dense" }, pricing: { input: 5, output: 25, cacheRead: null, cacheWrite: null } },
  { name: "zen4-mini", fullName: "Zen4 Mini \u2014 Fast & Efficient", description: "Ultra-fast lightweight model optimized for speed and cost efficiency. Ideal for free tier.", features: ["128K context window", "Ultra-fast inference", "Free tier"], tier: "starter", specs: { params: "N/A", arch: "Dense" }, pricing: { input: 0.15, output: 1.2, cacheRead: null, cacheWrite: null } },
  { name: "zen4-thinking", fullName: "Zen4 Thinking \u2014 Deep Reasoning", description: "Dedicated reasoning model with explicit chain-of-thought capabilities.", features: ["131K context window", "Chain-of-thought"], tier: "pro max", specs: { params: "80B (3B active)", arch: "MoE + CoT" }, pricing: { input: 2.7, output: 2.7, cacheRead: null, cacheWrite: null } },
  { name: "zen4-coder", fullName: "Zen4 Coder \u2014 Code Generation", description: "Code-specialized MoE model for generation, review, debugging, and agentic programming.", features: ["163K context window", "All major languages"], tier: "ultra", specs: { params: "480B (35B active)", arch: "MoE" }, pricing: { input: 2.7, output: 2.7, cacheRead: null, cacheWrite: null } },
  { name: "zen4-coder-pro", fullName: "Zen4 Coder Pro \u2014 Premium Code", description: "Full-precision BF16 code model for maximum accuracy on complex codebases.", features: ["131K context window", "BF16 full precision"], tier: "ultra max", specs: { params: "480B", arch: "Dense BF16" }, pricing: { input: 2.7, output: 2.7, cacheRead: null, cacheWrite: null } },
  { name: "zen4-coder-flash", fullName: "Zen4 Coder Flash \u2014 Fast Code", description: "Lightweight code model optimized for speed and inline completions.", features: ["262K context window", "Fast inference"], tier: "pro max", specs: { params: "30B (3B active)", arch: "MoE" }, pricing: { input: 2.7, output: 2.7, cacheRead: null, cacheWrite: null } },
  { name: "zen3-omni", fullName: "Zen3 Omni \u2014 Hypermodal", description: "Multimodal model supporting text, vision, audio, and structured output.", features: ["202K context window", "Text + Vision + Audio"], tier: "pro max", specs: { params: "~200B", arch: "Dense Multimodal" }, pricing: { input: 1.8, output: 6.6, cacheRead: null, cacheWrite: null } },
  { name: "zen3-vl", fullName: "Zen3 VL \u2014 Vision-Language", description: "Vision-language model for image understanding and visual reasoning.", features: ["262K context window", "Vision + Language"], tier: "pro max", specs: { params: "30B (3B active)", arch: "MoE Vision-Language" }, pricing: { input: 0.45, output: 1.8, cacheRead: null, cacheWrite: null } },
  { name: "zen3-nano", fullName: "Zen3 Nano \u2014 Edge", description: "Ultra-lightweight model for edge deployment and low-latency tasks. Available on free tier.", features: ["128K context window", "8B parameters", "Free tier"], tier: "starter", specs: { params: "8B", arch: "Dense" }, pricing: { input: 0.6, output: 0.6, cacheRead: null, cacheWrite: null } },
  { name: "zen3-guard", fullName: "Zen3 Guard \u2014 Content Safety", description: "Content safety classifier for moderation and guardrails. 9 safety categories, 119 languages.", features: ["65K context window", "Safety classifier"], tier: "pro", specs: { params: "4B", arch: "Dense" }, pricing: { input: 3.6, output: 3.6, cacheRead: null, cacheWrite: null } },
  { name: "zen3-embedding", fullName: "Zen3 Embedding", description: "High-quality text embeddings for RAG, search, and classification.", features: ["8K context window", "3072 dimensions"], tier: "pro max", specs: { params: "N/A", arch: "Embedding" }, endpoint: "/v1/embeddings", pricing: { input: 0.39, output: 0.39, cacheRead: null, cacheWrite: null } },
  { name: "zen3-embedding-medium", fullName: "Zen3 Embedding Medium", description: "Balanced embedding model for cost-effective retrieval workloads.", features: ["40K context window", "4B parameters"], tier: "pro", specs: { params: "4B", arch: "Embedding" }, endpoint: "/v1/embeddings", pricing: { input: null, output: null, cacheRead: null, cacheWrite: null } },
  { name: "zen3-embedding-small", fullName: "Zen3 Embedding Small", description: "Lightweight embedding model for high-throughput, low-cost applications.", features: ["32K context window", "0.6B parameters"], tier: "starter", specs: { params: "0.6B", arch: "Embedding" }, endpoint: "/v1/embeddings", pricing: { input: null, output: null, cacheRead: null, cacheWrite: null } },
  { name: "zen3-embedding-openai", fullName: "Zen3 Embedding \u2014 OpenAI Compatible", description: "OpenAI-compatible embedding endpoint for drop-in migration.", features: ["8K context window", "3072 dimensions"], tier: "pro max", specs: { params: "N/A", arch: "Embedding" }, endpoint: "/v1/embeddings", pricing: { input: null, output: null, cacheRead: null, cacheWrite: null } },
  { name: "zen3-reranker", fullName: "Zen3 Reranker", description: "High-quality reranker for improving retrieval accuracy in RAG pipelines.", features: ["40K context window", "8B parameters"], tier: "pro max", specs: { params: "8B", arch: "Reranker" }, endpoint: "/v1/rerank", pricing: { input: null, output: null, cacheRead: null, cacheWrite: null } },
  { name: "zen3-reranker-medium", fullName: "Zen3 Reranker Medium", description: "Balanced reranker for cost-effective retrieval quality improvement.", features: ["40K context window", "4B parameters"], tier: "pro", specs: { params: "4B", arch: "Reranker" }, endpoint: "/v1/rerank", pricing: { input: null, output: null, cacheRead: null, cacheWrite: null } },
  { name: "zen3-reranker-small", fullName: "Zen3 Reranker Small", description: "Lightweight reranker for high-throughput reranking at minimal cost.", features: ["40K context window", "0.6B parameters"], tier: "starter", specs: { params: "0.6B", arch: "Reranker" }, endpoint: "/v1/rerank", pricing: { input: null, output: null, cacheRead: null, cacheWrite: null } },
  { name: "zen3-image", fullName: "Zen3 Image", description: "Best general-purpose image generation.", features: ["Text-to-image", "Image editing"], tier: "pro max", specs: { params: "N/A", arch: "Diffusion" }, endpoint: "/v1/images/generations", pricingUnit: "image", pricing: { input: null, output: null, cacheRead: null, cacheWrite: null, perUnit: 0.04 } },
  { name: "zen3-image-max", fullName: "Zen3 Image Max", description: "Maximum quality image generation for professional creative work.", features: ["Text-to-image", "Maximum quality"], tier: "ultra max", specs: { params: "N/A", arch: "Diffusion" }, endpoint: "/v1/images/generations", pricingUnit: "image", pricing: { input: null, output: null, cacheRead: null, cacheWrite: null, perUnit: 0.08 } },
  { name: "zen3-image-dev", fullName: "Zen3 Image Dev", description: "Development model for experimentation and iteration.", features: ["Text-to-image", "Development"], tier: "pro", specs: { params: "N/A", arch: "Diffusion" }, endpoint: "/v1/images/generations", pricingUnit: "step", pricing: { input: null, output: null, cacheRead: null, cacheWrite: null, perUnit: 0.0005 } },
  { name: "zen3-image-fast", fullName: "Zen3 Image Fast", description: "Fastest image model for real-time generation.", features: ["Text-to-image", "Ultra-fast"], tier: "pro", specs: { params: "N/A", arch: "Diffusion" }, endpoint: "/v1/images/generations", pricingUnit: "step", pricing: { input: null, output: null, cacheRead: null, cacheWrite: null, perUnit: 0.00035 } },
  { name: "zen3-image-sdxl", fullName: "Zen3 Image SDXL", description: "High-resolution image generation at 1024px.", features: ["Text-to-image", "1024px"], tier: "pro", specs: { params: "N/A", arch: "Diffusion" }, endpoint: "/v1/images/generations", pricingUnit: "step", pricing: { input: null, output: null, cacheRead: null, cacheWrite: null, perUnit: 0.00013 } },
  { name: "zen3-image-playground", fullName: "Zen3 Image Playground", description: "Aesthetic model for artistic image generation.", features: ["Text-to-image", "Aesthetic"], tier: "pro", specs: { params: "N/A", arch: "Diffusion" }, endpoint: "/v1/images/generations", pricingUnit: "step", pricing: { input: null, output: null, cacheRead: null, cacheWrite: null, perUnit: 0.00013 } },
  { name: "zen3-image-ssd", fullName: "Zen3 Image SSD", description: "Fastest diffusion model for real-time generation.", features: ["Text-to-image", "Fastest"], tier: "starter", specs: { params: "1B", arch: "Diffusion" }, endpoint: "/v1/images/generations", pricingUnit: "step", pricing: { input: null, output: null, cacheRead: null, cacheWrite: null, perUnit: 0.00013 } },
  { name: "zen3-image-jp", fullName: "Zen3 Image JP", description: "Japanese-specialized image generation model.", features: ["Text-to-image", "Japanese"], tier: "pro", specs: { params: "N/A", arch: "Diffusion" }, endpoint: "/v1/images/generations", pricingUnit: "step", pricing: { input: null, output: null, cacheRead: null, cacheWrite: null, perUnit: 0.00013 } },
  { name: "zen3-audio", fullName: "Zen3 Audio", description: "Best quality speech-to-text transcription. 100+ languages.", features: ["Multi-language", "Best accuracy", "100+ languages"], tier: "pro max", specs: { params: "1.5B", arch: "ASR" }, endpoint: "/v1/audio/transcriptions", pricingUnit: "minute", pricing: { input: null, output: null, cacheRead: null, cacheWrite: null, perUnit: 0.002 } },
  { name: "zen3-audio-fast", fullName: "Zen3 Audio Fast", description: "Fastest speech-to-text transcription for high-throughput workloads.", features: ["Multi-language", "Fastest", "Batch optimized"], tier: "pro", specs: { params: "809M", arch: "ASR" }, endpoint: "/v1/audio/transcriptions", pricingUnit: "minute", pricing: { input: null, output: null, cacheRead: null, cacheWrite: null, perUnit: 0.0012 } },
  { name: "zen3-asr", fullName: "Zen3 ASR", description: "Real-time streaming speech recognition for live transcription and voice agents.", features: ["Streaming", "Real-time", "Sub-500ms latency"], tier: "pro max", specs: { params: "N/A", arch: "Streaming ASR" }, endpoint: "/v1/audio/transcriptions", pricingUnit: "minute", pricing: { input: null, output: null, cacheRead: null, cacheWrite: null, perUnit: 0.004 } },
  { name: "zen3-asr-v1", fullName: "Zen3 ASR v1", description: "First-generation streaming ASR for legacy compatibility.", features: ["Streaming", "Legacy"], tier: "pro", specs: { params: "N/A", arch: "Streaming ASR" }, endpoint: "/v1/audio/transcriptions", pricingUnit: "minute", pricing: { input: null, output: null, cacheRead: null, cacheWrite: null, perUnit: 0.0035 } },
  { name: "zen3-tts", fullName: "Zen3 TTS", description: "High-quality text-to-speech with natural prosody. 40+ voices, 8 languages.", features: ["40+ voices", "8 languages", "Natural prosody"], tier: "pro max", specs: { params: "82M", arch: "TTS" }, endpoint: "/v1/audio/speech", pricingUnit: "1M characters", pricing: { input: null, output: null, cacheRead: null, cacheWrite: null, perUnit: 5 } },
  { name: "zen3-tts-hd", fullName: "Zen3 TTS HD", description: "Maximum fidelity text-to-speech for broadcast-quality audio production.", features: ["HD quality", "Broadcast-grade", "48kHz output"], tier: "ultra max", specs: { params: "N/A", arch: "TTS HD" }, endpoint: "/v1/audio/speech", pricingUnit: "1M characters", pricing: { input: null, output: null, cacheRead: null, cacheWrite: null, perUnit: 15 } },
  { name: "zen3-tts-fast", fullName: "Zen3 TTS Fast", description: "Low-latency text-to-speech for real-time voice agents and interactive applications.", features: ["Low latency", "Real-time", "Voice agents"], tier: "pro", specs: { params: "82M", arch: "TTS" }, endpoint: "/v1/audio/speech", pricingUnit: "1M characters", pricing: { input: null, output: null, cacheRead: null, cacheWrite: null, perUnit: 2 } },
  { name: "zen5", fullName: "Zen5 \u2014 Next Generation", description: "Next-generation agentic frontier model trained on 10B+ tokens of real-world tool use, multi-step reasoning, and production workflows.", features: ["1M+ context window", "Agentic-trained", "Native CoT", "Tool use", "Multimodal native"], tier: "ultra max", specs: { params: "TBA", arch: "MoDE + CoT" }, contactSales: true, pricing: null },
  { name: "zen5-pro", fullName: "Zen5 Pro \u2014 Advanced", description: "High-throughput agentic model for demanding production workloads.", features: ["512K context window", "Agentic-trained", "Native CoT", "Production optimized"], tier: "ultra", specs: { params: "TBA", arch: "MoDE + CoT" }, contactSales: true, pricing: null },
  { name: "zen5-max", fullName: "Zen5 Max \u2014 Extended", description: "Maximum context agentic model for document-scale analysis.", features: ["2M context window", "Agentic-trained", "Extended CoT", "Document-scale"], tier: "ultra max", specs: { params: "TBA", arch: "MoDE + CoT" }, contactSales: true, pricing: null },
  { name: "zen5-ultra", fullName: "Zen5 Ultra \u2014 Deep Reasoning", description: "Deepest reasoning model in the Zen family. Multi-pass chain-of-thought with self-verification.", features: ["1M context window", "Agentic-trained", "Deep CoT", "Self-verification", "Multi-pass reasoning"], tier: "ultra max", specs: { params: "TBA", arch: "MoDE + Deep CoT" }, contactSales: true, pricing: null },
  { name: "zen5-mini", fullName: "Zen5 Mini \u2014 Efficient", description: "Efficient agentic model delivering zen5-class intelligence at a fraction of the cost.", features: ["256K context window", "Agentic-trained", "Native CoT", "Cost efficient", "Fast inference"], tier: "pro", specs: { params: "TBA", arch: "MoDE + CoT" }, contactSales: true, pricing: null },
];

const ZenModels = () => {
  const [hanzoModels, setHanzoModels] = useState<HanzoModel[]>(FALLBACK_MODELS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(PRICING_API)
      .then((res) => res.json())
      .then((data) => {
        const models = data.hanzoModels || [];
        if (models.length > 0) setHanzoModels(models);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const groups = groupModels(hanzoModels);
  const totalModels = hanzoModels.length;
  const tokenModels = hanzoModels.filter((m) => m.pricing?.input != null && m.pricing.input > 0);
  const minPrice = tokenModels.length > 0 ? Math.min(...tokenModels.map((m) => m.pricing!.input!)) : 0.15;
  const maxCtx = "2M";

  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15"
              style={{
                background: `radial-gradient(circle, var(--primary) 0%, transparent 70%)`,
                filter: "blur(100px)",
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6 text-center"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-foreground border border-border">
                <Zap className="w-3 h-3" />
                {totalModels} Models — Zen3, Zen4 & Zen5
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6 text-center"
            >
              <span className="text-foreground">Hanzo Zen Models</span>
              <br />
              <span className="text-muted-foreground">Complete API Catalog</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto text-center"
            >
              {totalModels} foundation models across language, code, vision, image, audio, and retrieval.
              Zen MoDE (Mixture of Distilled Experts) architecture. From ${minPrice}/MTok.
            </motion.p>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex flex-wrap justify-center gap-6 mb-8"
            >
              {[
                { label: "Models", value: String(totalModels) },
                { label: "Max Context", value: maxCtx },
                { label: "From", value: `$${minPrice}/MTok` },
                { label: "Architectures", value: "MoE + Dense" },
                { label: "Modalities", value: "7" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Tier legend */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {Object.keys(TIER_STYLES).map((tier) => (
                <TierBadge key={tier} tier={tier} />
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="flex flex-wrap justify-center items-center gap-4"
            >
              <a
                href="#zen5"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm bg-primary text-primary-foreground"
              >
                Explore Models
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-secondary text-sm text-foreground"
              >
                Full Pricing
              </Link>
              <a
                href="https://cloud.hanzo.ai/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-secondary text-sm text-foreground"
              >
                <Terminal className="mr-2 h-4 w-4" />
                Get API Key
              </a>
            </motion.div>
          </div>
        </section>

        {/* Model Groups */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            {loading ? (
              <div className="flex items-center justify-center py-24">
                <Loader2 className="w-6 h-6 animate-spin mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">Loading live pricing...</span>
              </div>
            ) : (
            <>
            {/* Quick nav */}
            <div className="mb-12 flex flex-wrap gap-3 justify-center">
              {groups.map((group) => {
                const Icon = group.icon;
                return (
                  <a
                    key={group.id}
                    href={`#${group.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-white/30 transition-colors text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Icon className="w-4 h-4" />
                    {group.title.split(" -- ")[0]}
                  </a>
                );
              })}
            </div>

            {groups.map((group) => (
              <ModelGroupSection key={group.id} group={group} />
            ))}
            </>
            )}
          </div>
        </section>

        {/* API Usage Example */}
        <section className="py-16 px-4 md:px-8 bg-background/50 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Quick Start
              </h2>
              <p className="text-muted-foreground">
                Drop-in OpenAI-compatible API. Switch models with one line.
              </p>
            </motion.div>

            <div className="rounded-xl border border-border bg-secondary/95 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-primary/10" />
                  <div className="w-3 h-3 rounded-full bg-primary/10" />
                  <div className="w-3 h-3 rounded-full bg-primary/10" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-2">
                  python
                </span>
              </div>
              <pre className="p-6 text-sm font-mono text-foreground/80 overflow-x-auto">
                <code>{`from hanzoai import Hanzo

client = Hanzo()

# Use any Zen model
response = client.chat.completions.create(
    model="zen4",           # or zen4-coder, zen3-vl, etc.
    messages=[{"role": "user", "content": "Hello!"}],
)
print(response.choices[0].message.content)`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-8 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to build with Zen?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                All {totalModels} Zen models available via OpenAI-compatible
                API. Start building today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://cloud.hanzo.ai/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm bg-primary text-primary-foreground"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link
                  href="/dev"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-secondary text-sm text-foreground"
                >
                  Try Hanzo Dev
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-secondary text-sm text-foreground"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default ZenModels;
