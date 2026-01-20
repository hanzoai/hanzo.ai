import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Cpu,
  Code2,
  Eye,
  Sparkles,
  Box,
  Video,
  Music,
  Zap,
  ExternalLink,
  Check,
  Github,
  ChevronDown,
  Brain,
  Layers,
} from "lucide-react";

const BRAND_COLOR = "#fd4444";

// Model data based on zenlm.org and ~/work/zen specifications
const MODEL_FAMILIES = {
  coder: {
    title: "Zen Coder",
    description: "Agentic coding models trained on 8.47B tokens of real programming sessions",
    icon: Code2,
    color: "#10b981",
    models: [
      {
        name: "Zen Coder 4B",
        params: "4B",
        context: "32K tokens",
        vram: "8 GB",
        license: "Apache 2.0",
        base: "Qwen3-4B-Instruct",
        features: [
          "Edge deployment",
          "Real agentic debug sessions",
          "Multi-file refactoring",
          "Tool use patterns",
        ],
        status: "Trained",
        huggingface: "https://huggingface.co/zenlm/zen-coder",
      },
      {
        name: "Zen Coder 24B",
        badge: "FLAGSHIP",
        params: "24B",
        context: "256K tokens",
        vram: "24 GB",
        license: "Apache 2.0",
        base: "Devstral Small 2",
        features: [
          "Production-ready agentic coding",
          "Long context understanding",
          "Real debugging workflows",
          "Professional development patterns",
        ],
        status: "Trained",
        huggingface: "https://huggingface.co/zenlm/zen-coder-24b",
      },
      {
        name: "Zen Coder 123B",
        params: "123B",
        context: "256K tokens",
        vram: "128 GB",
        license: "Apache 2.0",
        base: "Devstral 2",
        features: [
          "Large-scale agentic tasks",
          "Complex multi-step coding",
          "Advanced tool orchestration",
          "Enterprise-grade performance",
        ],
        status: "Training",
        huggingface: "https://huggingface.co/zenlm/zen-coder-123b",
      },
      {
        name: "Zen Coder Max",
        badge: "FRONTIER",
        params: "358B MoE",
        context: "200K tokens",
        vram: "180 GB",
        license: "Apache 2.0",
        base: "GLM-4.7 (MoE)",
        features: [
          "Frontier agentic capability",
          "MoE efficiency",
          "State-of-the-art SWE-bench",
          "Tool calling with glm47 parser",
        ],
        status: "Planned",
        huggingface: "https://huggingface.co/zenlm/zen-coder-max",
      },
      {
        name: "Zen Coder Ultra",
        badge: "1T",
        params: "1T MoE",
        context: "128K tokens",
        vram: "256 GB",
        license: "Apache 2.0",
        base: "Kimi K2 (MoE)",
        features: [
          "Trillion parameter scale",
          "Ultimate agentic reasoning",
          "200-300 sequential tool calls",
          "Heavy mode (8 trajectories)",
        ],
        status: "Planned",
        huggingface: "https://huggingface.co/zenlm/zen-coder-ultra",
      },
    ],
  },
  language: {
    title: "Language Models",
    description: "Efficient general-purpose language understanding",
    icon: Brain,
    color: "#8b5cf6",
    models: [
      {
        name: "zen-nano",
        params: "0.6B",
        context: "40K tokens",
        license: "Apache 2.0",
        base: "Qwen3-0.6B",
        performance: "44K tokens/sec (M3 Max)",
        memory: "0.4-1.2GB",
        features: [
          "Edge deployment",
          "Mobile devices",
          "Embedded systems",
          "On-device AI",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-nano-0.6b",
      },
      {
        name: "zen-eco",
        params: "4B",
        context: "32K tokens",
        license: "Apache 2.0",
        base: "Qwen3-3B",
        performance: "28K tokens/sec (RTX 4090)",
        memory: "2-8GB",
        features: [
          "General-purpose",
          "Instruction following",
          "Thinking variants",
          "Agent variants",
        ],
        status: "In Development",
        huggingface: "https://huggingface.co/zenlm/zen-eco-4b-instruct",
      },
      {
        name: "zen-agent",
        params: "4B",
        context: "32K tokens",
        license: "Apache 2.0",
        base: "Qwen3-3B",
        features: [
          "Tool calling",
          "MCP support",
          "Agentic workflows",
          "Function execution",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-agent-4b",
      },
      {
        name: "zen-omni",
        badge: "MULTIMODAL",
        params: "7B",
        context: "32K tokens",
        license: "Apache 2.0",
        base: "Qwen3-Omni",
        features: [
          "Text + Vision + Audio",
          "Unified multimodal",
          "Cross-modal reasoning",
          "Speech interaction",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-omni",
      },
    ],
  },
  vision: {
    title: "Vision-Language Models",
    description: "Advanced visual understanding and multimodal reasoning",
    icon: Eye,
    color: "#f59e0b",
    models: [
      {
        name: "zen-vl-4b-instruct",
        params: "4B",
        context: "32K (256K expandable)",
        license: "Apache 2.0",
        base: "Qwen3-VL-4B",
        features: [
          "Image analysis",
          "OCR (32 languages)",
          "Multimodal reasoning",
          "Zen persona",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-vl-4b-instruct",
      },
      {
        name: "zen-vl-4b-agent",
        params: "4B",
        context: "32K (256K expandable)",
        license: "Apache 2.0",
        features: [
          "Function calling",
          "GUI interaction",
          "Visual agent",
          "Tool use",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-vl-4b-agent",
      },
      {
        name: "zen-vl-8b-instruct",
        params: "8B",
        context: "256K (1M expandable)",
        license: "Apache 2.0",
        base: "Qwen3-VL-8B",
        features: [
          "Video comprehension",
          "Spatial reasoning",
          "STEM/math/code",
          "Comprehensive analysis",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-vl-8b-instruct",
      },
      {
        name: "zen-vl-8b-agent",
        params: "8B",
        context: "256K (1M expandable)",
        license: "Apache 2.0",
        features: [
          "Function calling",
          "Visual agent",
          "GUI interaction",
          "Tool use",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-vl-8b-agent",
      },
      {
        name: "zen-vl-30b-instruct",
        params: "30B (31B MoE)",
        context: "256K (1M expandable)",
        license: "Apache 2.0",
        base: "Qwen3-VL-30B",
        features: [
          "Comprehensive vision",
          "OCR (32 languages)",
          "STEM reasoning",
          "Video comprehension",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-vl-30b-instruct",
      },
      {
        name: "zen-vl-30b-agent",
        params: "30B (31B MoE)",
        context: "256K (1M expandable)",
        license: "Apache 2.0",
        features: [
          "Function calling",
          "Visual context",
          "Agent tasks",
          "Tool calling",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-vl-30b-agent",
      },
    ],
  },
  generative3d: {
    title: "3D Generation",
    description: "Create 3D assets and worlds from text and images",
    icon: Box,
    color: "#06b6d4",
    models: [
      {
        name: "zen-3d",
        params: "3.3B",
        license: "Apache 2.0",
        features: [
          "Point cloud control",
          "OBJ/GLB/USD/FBX output",
          "~30s per model",
          "10GB memory",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-3d",
      },
      {
        name: "zen-voyager",
        license: "Apache 2.0",
        features: [
          "Image → 3D video",
          "Camera control",
          "RGB + depth output",
          "Point clouds",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-voyager",
      },
      {
        name: "zen-world",
        license: "Apache 2.0",
        features: [
          "City-scale environments",
          "Complete world synthesis",
          "Large-scale generation",
          "24GB+ memory",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-world",
      },
    ],
  },
  video: {
    title: "Video Generation",
    description: "Create videos from text and images",
    icon: Video,
    color: "#ec4899",
    models: [
      {
        name: "zen-director",
        params: "5B",
        license: "Apache 2.0",
        features: [
          "Text/Image to video",
          "Up to 10s, 24 FPS",
          "1280x720 output",
          "~60s generation",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-director-5b",
      },
      {
        name: "zen-video",
        license: "Apache 2.0",
        features: [
          "High-quality video",
          "Professional synthesis",
          "High-resolution",
          "Variable length",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-video",
      },
      {
        name: "zen-video-i2v",
        license: "Apache 2.0",
        features: [
          "Image to video",
          "Animate static images",
          "~45s generation",
          "5 second output",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-video-i2v",
      },
    ],
  },
  audio: {
    title: "Audio Generation",
    description: "Create music and sound effects",
    icon: Music,
    color: "#a855f7",
    models: [
      {
        name: "zen-musician",
        params: "7B",
        license: "Apache 2.0",
        features: [
          "Lyrics → full songs",
          "Vocals + accompaniment",
          "5 languages",
          "~360s for 30s audio",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-musician-7b",
      },
      {
        name: "zen-foley",
        license: "Apache 2.0",
        features: [
          "Video → sound effects",
          "Professional foley",
          "48kHz audio",
          "~15s for 10s audio",
        ],
        status: "Released",
        huggingface: "https://huggingface.co/zenlm/zen-foley",
      },
    ],
  },
};

const ModelCard = ({ model, familyColor }: { model: any; familyColor: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-neutral-900/80 border rounded-xl p-6 ${
        model.badge === "FLAGSHIP"
          ? "border-[#fd4444]/50 ring-1 ring-[#fd4444]/20"
          : "border-neutral-800"
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-bold text-white">{model.name}</h3>
            {model.badge && (
              <span
                className="px-2 py-0.5 text-[10px] font-bold rounded-full"
                style={{
                  backgroundColor:
                    model.badge === "FLAGSHIP"
                      ? `${BRAND_COLOR}20`
                      : model.badge === "FRONTIER"
                      ? "#8b5cf620"
                      : "#06b6d420",
                  color:
                    model.badge === "FLAGSHIP"
                      ? BRAND_COLOR
                      : model.badge === "FRONTIER"
                      ? "#8b5cf6"
                      : "#06b6d4",
                }}
              >
                {model.badge}
              </span>
            )}
            {model.status === "Latest" && (
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-green-500/20 text-green-400">
                NEW
              </span>
            )}
          </div>
          {model.base && (
            <p className="text-xs text-neutral-500">Based on {model.base}</p>
          )}
        </div>
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            model.status === "Released" || model.status === "Latest"
              ? "bg-green-500/20 text-green-400"
              : "bg-yellow-500/20 text-yellow-400"
          }`}
        >
          {model.status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        {model.params && (
          <div>
            <p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">
              Parameters
            </p>
            <p className="text-sm font-medium text-white">{model.params}</p>
          </div>
        )}
        {model.context && (
          <div>
            <p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">
              Context
            </p>
            <p className="text-sm font-medium text-white">{model.context}</p>
          </div>
        )}
        {model.license && (
          <div>
            <p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">
              License
            </p>
            <p className="text-sm font-medium text-white">{model.license}</p>
          </div>
        )}
        {model.performance && (
          <div>
            <p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">
              Performance
            </p>
            <p className="text-sm font-medium text-white">{model.performance}</p>
          </div>
        )}
      </div>

      {model.benchmarks && (
        <div className="mb-4 p-3 bg-neutral-800/50 rounded-lg">
          <p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-2">
            Benchmarks
          </p>
          <div className="grid grid-cols-3 gap-2">
            {Object.entries(model.benchmarks).map(([key, value]) => (
              <div key={key}>
                <p className="text-xs text-neutral-400">{key}</p>
                <p className="text-sm font-bold" style={{ color: familyColor }}>
                  {value as string}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-2 mb-4">
        {model.features.slice(0, isExpanded ? undefined : 3).map((feature: string, idx: number) => (
          <div key={idx} className="flex items-center gap-2">
            <Check className="w-3 h-3" style={{ color: familyColor }} />
            <span className="text-sm text-neutral-300">{feature}</span>
          </div>
        ))}
        {model.features.length > 3 && !isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="text-xs text-neutral-500 hover:text-white flex items-center gap-1"
          >
            +{model.features.length - 3} more
            <ChevronDown className="w-3 h-3" />
          </button>
        )}
      </div>

      {model.huggingface && (
        <a
          href={model.huggingface}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
        >
          <span>View on HuggingFace</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      )}
    </motion.div>
  );
};

const FamilySection = ({
  familyKey,
  family,
}: {
  familyKey: string;
  family: (typeof MODEL_FAMILIES)[keyof typeof MODEL_FAMILIES];
}) => {
  const Icon = family.icon;

  return (
    <section id={familyKey} className="py-16 border-t border-neutral-800 first:border-t-0">
      <div className="flex items-center gap-4 mb-8">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${family.color}20` }}
        >
          <Icon className="w-6 h-6" style={{ color: family.color }} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">{family.title}</h2>
          <p className="text-neutral-400">{family.description}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {family.models.map((model) => (
          <ModelCard key={model.name} model={model} familyColor={family.color} />
        ))}
      </div>
    </section>
  );
};

const ZenModels = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Helmet>
        <title>Zen AI Models - Complete Hypermodal AI Family | Hanzo AI</title>
        <meta
          name="description"
          content="The world's most comprehensive hypermodal AI ecosystem. Code, vision, 3D, video, and audio models. Featuring zen-coder-flash with 59.2% SWE-bench."
        />
      </Helmet>
      <Navbar />

      <main className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
              style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
            >
              <Sparkles className="w-3 h-3" />
              zen-coder-flash is here
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Zen AI Model Family
            </h1>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-8">
              The world's most comprehensive hypermodal AI ecosystem. From edge
              computing to frontier capability, Zen models cover the full
              spectrum of AI.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="https://huggingface.co/zenlm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm"
                style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
              >
                Browse on HuggingFace
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="https://github.com/zenlm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Featured Model - zen-coder-flash */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 p-8 bg-gradient-to-br from-neutral-900 to-neutral-800/50 rounded-2xl border border-[#fd4444]/30 ring-1 ring-[#fd4444]/10"
          >
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-[#fd4444]" />
              <span className="text-sm font-medium text-[#fd4444]">
                FEATURED MODEL
              </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  zen-coder-flash
                </h2>
                <p className="text-neutral-400 mb-6">
                  Our flagship coding model with state-of-the-art performance.
                  31B MoE architecture with only 3B active parameters means
                  frontier capability at efficient cost.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-neutral-800/50 rounded-lg p-4">
                    <p className="text-2xl font-bold text-white">59.2%</p>
                    <p className="text-xs text-neutral-400">SWE-bench Verified</p>
                  </div>
                  <div className="bg-neutral-800/50 rounded-lg p-4">
                    <p className="text-2xl font-bold text-white">131K</p>
                    <p className="text-xs text-neutral-400">Context Window</p>
                  </div>
                  <div className="bg-neutral-800/50 rounded-lg p-4">
                    <p className="text-2xl font-bold text-white">91.6%</p>
                    <p className="text-xs text-neutral-400">AIME 2025</p>
                  </div>
                  <div className="bg-neutral-800/50 rounded-lg p-4">
                    <p className="text-2xl font-bold text-white">MIT</p>
                    <p className="text-xs text-neutral-400">License</p>
                  </div>
                </div>

                <a
                  href="https://huggingface.co/zenlm/zen-coder-flash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm"
                  style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
                >
                  Try zen-coder-flash
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium text-neutral-400 uppercase tracking-wider">
                  Key Features
                </h3>
                <div className="space-y-3">
                  {[
                    "Advanced code generation (59.2% SWE-bench vs 22% Qwen3-30B)",
                    "Tool calling with glm47 parser",
                    "Reasoning mode with glm45 parser",
                    "Speculative decoding (MTP/EAGLE)",
                    "100+ programming languages",
                    "MLX for Apple Silicon",
                    "vLLM & SGLang support",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[#fd4444]" />
                      <span className="text-sm text-neutral-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Nav */}
          <div className="mb-12 flex flex-wrap gap-3 justify-center">
            {Object.entries(MODEL_FAMILIES).map(([key, family]) => {
              const Icon = family.icon;
              return (
                <a
                  key={key}
                  href={`#${key}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 hover:border-neutral-600 transition-colors text-sm text-neutral-400 hover:text-white"
                >
                  <Icon className="w-4 h-4" style={{ color: family.color }} />
                  {family.title}
                </a>
              );
            })}
          </div>

          {/* Model Families */}
          {Object.entries(MODEL_FAMILIES).map(([key, family]) => (
            <FamilySection key={key} familyKey={key} family={family} />
          ))}

          {/* Infrastructure Section */}
          <section className="py-16 border-t border-neutral-800">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Infrastructure
              </h2>
              <p className="text-neutral-400">
                Train and deploy Zen models with our optimized platforms
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Zen Gym</h3>
                </div>
                <p className="text-neutral-400 mb-4">
                  Unified training platform for all Zen models with 2-5x
                  speedup.
                </p>
                <div className="space-y-2 mb-6">
                  {[
                    "LoRA, QLoRA, GRPO, GSPO, DPO, PPO",
                    "Unsloth acceleration",
                    "FlashAttention-2",
                    "Liger Kernel optimization",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-purple-400" />
                      <span className="text-sm text-neutral-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://github.com/zenlm/zen-gym"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300"
                >
                  View on GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-bold text-white">Zen Engine</h3>
                </div>
                <p className="text-neutral-400 mb-4">
                  High-performance inference for all Zen models with
                  OpenAI-compatible API.
                </p>
                <div className="space-y-2 mb-6">
                  {[
                    "44K tokens/sec (M3 Max)",
                    "OpenAI-compatible REST API",
                    "PyTorch, MLX, GGUF formats",
                    "MCP integration",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-cyan-400" />
                      <span className="text-sm text-neutral-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://github.com/zenlm/zen-engine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300"
                >
                  View on GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-16 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to build with Zen?
            </h2>
            <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
              All models are open source under Apache 2.0 or MIT license. Start
              building today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://huggingface.co/zenlm"
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
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ZenModels;
