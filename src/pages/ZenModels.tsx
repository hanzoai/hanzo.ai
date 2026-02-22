import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
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
} from "lucide-react";

const BRAND_COLOR = "#fd4444";

// Derive context window from features string (e.g. "202k context window" -> "202K")
function extractContext(features: string[]): string {
  const ctx = features.find((f) => f.toLowerCase().includes("context"));
  if (!ctx) return "N/A";
  const match = ctx.match(/(\d+[kK]?)/);
  return match ? match[1].toUpperCase() : ctx;
}

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

const fmt = (val: number | null) => {
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
  upstream: { params: string; arch: string };
  pricing: { input: number; output: number; cacheRead: number | null; cacheWrite: number | null };
}

interface ModelGroup {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  models: HanzoModel[];
}

function groupModels(models: HanzoModel[]): ModelGroup[] {
  const zen4General = models.filter(
    (m) =>
      m.name.startsWith("zen4") &&
      !m.name.includes("coder") &&
      !m.name.includes("thinking")
  );
  const zen4Thinking = models.filter((m) => m.name === "zen4-thinking");
  const zen4Coder = models.filter((m) => m.name.startsWith("zen4-coder"));
  const zen3 = models.filter((m) => m.name.startsWith("zen3"));

  return [
    {
      id: "zen4",
      title: "Zen4 -- Flagship Language Models",
      description:
        "Flagship and high-capability language models for general reasoning, analysis, and generation.",
      icon: Brain,
      models: [...zen4General, ...zen4Thinking],
    },
    {
      id: "zen4-coder",
      title: "Zen4 Coder -- Code Generation",
      description:
        "Specialized code models for generation, review, debugging, and full-precision analysis.",
      icon: Code2,
      models: zen4Coder,
    },
    {
      id: "zen3",
      title: "Zen3 -- Multimodal & Specialized",
      description:
        "Multimodal, vision-language, edge, safety, and embedding models.",
      icon: Eye,
      models: zen3,
    },
  ];
}

const ModelRow = ({ model }: { model: HanzoModel }) => {
  const [expanded, setExpanded] = useState(false);
  const isUltraMax = model.tier === "ultra max";

  return (
    <>
      <tr
        className={`border-t border-neutral-800 hover:bg-neutral-900/50 transition-colors cursor-pointer ${
          isUltraMax ? "bg-[#fd4444]/5" : ""
        }`}
        onClick={() => setExpanded(!expanded)}
      >
        <td className="px-4 md:px-6 py-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-white text-sm md:text-base">
              {model.fullName?.split(" -- ")[0] || model.name}
            </span>
            <TierBadge tier={model.tier} />
          </div>
          <p className="text-xs text-neutral-500 mt-1 hidden md:block">
            {model.description}
          </p>
        </td>
        <td className="px-4 md:px-6 py-4 text-neutral-300 text-sm">
          {model.upstream.params}
        </td>
        <td className="px-4 md:px-6 py-4 text-neutral-300 text-sm hidden md:table-cell">
          {extractContext(model.features)}
        </td>
        <td className="px-4 md:px-6 py-4 text-neutral-300 text-sm hidden lg:table-cell">
          {model.upstream.arch}
        </td>
        <td className="px-4 md:px-6 py-4 text-right text-sm">
          <span className="text-white font-medium">
            {fmt(model.pricing.input)}
          </span>
          <span className="text-neutral-500"> / </span>
          <span className="text-white font-medium">
            {fmt(model.pricing.output)}
          </span>
        </td>
        <td className="px-2 py-4 text-neutral-500">
          {expanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </td>
      </tr>
      {expanded && (
        <tr className="border-t border-neutral-800/50">
          <td colSpan={6} className="px-4 md:px-6 py-4 bg-neutral-950/80">
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="text-[10px] text-neutral-500 uppercase tracking-wider mb-2">
                  Architecture
                </h4>
                <p className="text-neutral-300">
                  <span className="text-white font-medium">
                    {model.upstream.params}
                  </span>
                </p>
                <p className="text-neutral-500">{model.upstream.arch}</p>
              </div>
              <div>
                <h4 className="text-[10px] text-neutral-500 uppercase tracking-wider mb-2">
                  Features
                </h4>
                <div className="space-y-1">
                  {model.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#fd4444]" />
                      <span className="text-neutral-300">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-[10px] text-neutral-500 uppercase tracking-wider mb-2">
                  Pricing per MTok
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 bg-neutral-900 rounded border border-neutral-800">
                    <span className="text-[10px] text-neutral-500 block">
                      Input
                    </span>
                    <span className="text-white font-medium">
                      {fmt(model.pricing.input)}
                    </span>
                  </div>
                  <div className="p-2 bg-neutral-900 rounded border border-neutral-800">
                    <span className="text-[10px] text-neutral-500 block">
                      Output
                    </span>
                    <span className="text-white font-medium">
                      {fmt(model.pricing.output)}
                    </span>
                  </div>
                </div>
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

  return (
    <section id={group.id} className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#fd4444]/10 border border-[#fd4444]/20">
          <Icon className="w-6 h-6 text-[#fd4444]" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">{group.title}</h2>
          <p className="text-neutral-400 text-sm">{group.description}</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-black border border-neutral-800 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-neutral-900/80">
              <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Model
              </th>
              <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Params
              </th>
              <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-neutral-400 uppercase tracking-wider hidden md:table-cell">
                Context
              </th>
              <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-neutral-400 uppercase tracking-wider hidden lg:table-cell">
                Arch
              </th>
              <th className="px-4 md:px-6 py-3 text-right text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Input / Output
              </th>
              <th className="px-2 py-3 w-8"></th>
            </tr>
          </thead>
          <tbody>
            {group.models.map((model) => (
              <ModelRow key={model.name} model={model} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

const ZenModels = () => {
  const [hanzoModels, setHanzoModels] = useState<HanzoModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(PRICING_API)
      .then((res) => res.json())
      .then((data) => { setHanzoModels(data.hanzoModels || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const groups = groupModels(hanzoModels);
  const totalModels = hanzoModels.length;
  const minPrice = hanzoModels.length > 0 ? Math.min(...hanzoModels.map((m) => m.pricing.input)) : 0.30;
  const maxCtx = "262K";

  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Helmet>
        <title>
          Hanzo Zen Models -- Foundation Models for AI | Hanzo AI
        </title>
        <meta
          name="description"
          content="Complete Hanzo Zen model catalog. 14 foundation models from 4B to 1T+ parameters across language, code, vision, and specialized tasks. Zen MoDE architecture."
        />
      </Helmet>
      <Navbar />

      <main>
        {/* Hero Section */}
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

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6 text-center"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[#fd4444]/10 text-[#fd4444] border border-[#fd4444]/20">
                <Zap className="w-3 h-3" />
                {totalModels} Models -- Zen3 & Zen4
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6 text-center"
            >
              <span className="text-white">Hanzo Zen Models</span>
              <br />
              <span className="text-neutral-400">Complete API Catalog</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base lg:text-lg text-neutral-400 leading-relaxed mb-8 max-w-3xl mx-auto text-center"
            >
              {totalModels} foundation models across language, code, vision,
              multimodal, and specialized tasks. Zen MoDE (Mixture of Distilled
              Experts) architecture. From ${minPrice}/MTok.
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
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider">
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
                href="#zen4"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm"
                style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
              >
                Explore Models
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <Link
                to="/pricing"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"
              >
                Full Pricing
              </Link>
              <a
                href="https://cloud.hanzo.ai/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"
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
                <Loader2 className="w-6 h-6 animate-spin mr-2 text-neutral-400" />
                <span className="text-neutral-400">Loading live pricing...</span>
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 hover:border-[#fd4444]/30 transition-colors text-sm text-neutral-400 hover:text-white"
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
        <section className="py-16 px-4 md:px-8 bg-neutral-950/50 border-t border-neutral-800">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Quick Start
              </h2>
              <p className="text-neutral-400">
                Drop-in OpenAI-compatible API. Switch models with one line.
              </p>
            </motion.div>

            <div className="rounded-xl border border-neutral-700 bg-neutral-900/95 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-950">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-neutral-500 font-mono ml-2">
                  python
                </span>
              </div>
              <pre className="p-6 text-sm font-mono text-neutral-300 overflow-x-auto">
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
        <section className="py-20 px-4 md:px-8 border-t border-neutral-800">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to build with Zen?
              </h2>
              <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
                All {totalModels} Zen models available via OpenAI-compatible
                API. Start building today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://cloud.hanzo.ai/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm"
                  style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link
                  to="/dev"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"
                >
                  Try Hanzo Dev
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ZenModels;
