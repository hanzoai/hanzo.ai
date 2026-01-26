import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Eye,
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
  Database,
  Shield,
  Globe,
  BookOpen,
  Terminal,
  Download,
} from "lucide-react";

// Zen Coder lineup from zenlm.org
const ZEN_CODER_MODELS = [
  {
    name: "Zen Coder 4B",
    size: "4B",
    base: "Qwen3-4B-Instruct",
    vram: "8 GB",
    context: "32K",
    status: "Trained",
  },
  {
    name: "Zen Coder 24B",
    size: "24B",
    base: "Devstral Small 2",
    vram: "24 GB",
    context: "256K",
    status: "Trained",
    flagship: true,
  },
  {
    name: "Zen Coder 123B",
    size: "123B",
    base: "Devstral 2",
    vram: "128 GB",
    context: "256K",
    status: "Training",
  },
  {
    name: "Zen Coder Max",
    size: "358B",
    base: "GLM-4.7 (MoE)",
    vram: "180 GB",
    context: "200K",
    status: "Planned",
    frontier: true,
  },
  {
    name: "Zen Coder Ultra",
    size: "1T",
    base: "Kimi K2 (MoE)",
    vram: "256 GB",
    context: "128K",
    status: "Planned",
  },
];

// Dataset stats from zenlm.org
const DATASET_STATS = [
  { value: "8.47B", label: "Tokens", description: "Total training tokens across all data sources" },
  { value: "3.35M", label: "Samples", description: "Training samples with conversation context" },
  { value: "1,452", label: "Repositories", description: "Open source and private codebases" },
  { value: "15yr", label: "History", description: "Years of development history (2010-2025)" },
];

// AI Ecosystem categories from zenlm.org
const ECOSYSTEM_CATEGORIES = [
  {
    icon: Brain,
    title: "Language Models",
    description: "6 core models from 0.6B to 32B. zen-nano for edge, zen-eco for efficiency, zen-omni for multimodal, zen-next for frontier reasoning.",
  },
  {
    icon: Code2,
    title: "Zen Coder",
    description: "5 coding models from 4B to 1T trained on 8.47B tokens of agentic programming data. State-of-the-art on tool use and multi-step coding.",
  },
  {
    icon: Eye,
    title: "Vision & Multimodal",
    description: "zen-vl for vision-language, zen-designer for visual understanding, zen-artist for image generation, zen-omni for unified multimodal.",
  },
  {
    icon: Video,
    title: "Video & 3D",
    description: "zen-director for video generation, zen-video for high-quality synthesis, zen-3d for 3D assets, zen-world for world simulation.",
  },
  {
    icon: Music,
    title: "Audio",
    description: "zen-musician for music generation, zen-foley for sound effects, zen-scribe for transcription, zen-dub for voice dubbing.",
  },
  {
    icon: Shield,
    title: "Specialized",
    description: "zen-guard for safety, zen-embedding for vectors, zen-reranker for search, zen-translator for translation, zen-agent for tool use.",
  },
];

// Model families with full details
const MODEL_FAMILIES = {
  coder: {
    title: "Zen Coder",
    description: "Agentic coding models trained on 8.47B tokens of real programming sessions",
    icon: Code2,
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
    ],
  },
  generative3d: {
    title: "3D Generation",
    description: "Create 3D assets and worlds from text and images",
    icon: Box,
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

interface ZenModel {
  name: string;
  params?: string;
  context?: string;
  vram?: string;
  license?: string;
  base?: string;
  badge?: string;
  status: string;
  features?: string[];
  performance?: string;
  memory?: string;
  huggingface?: string;
}

const ModelCard = ({ model }: { model: ZenModel }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-neutral-950 border rounded-xl p-6 ${
        model.badge === "FLAGSHIP"
          ? "border-white/30 ring-1 ring-white/10"
          : "border-neutral-800"
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-bold text-white">{model.name}</h3>
            {model.badge && (
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-white/10 text-white border border-white/20">
                {model.badge}
              </span>
            )}
          </div>
          {model.base && (
            <p className="text-xs text-neutral-500">Based on {model.base}</p>
          )}
        </div>
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            model.status === "Released" || model.status === "Latest" || model.status === "Trained"
              ? "bg-white/10 text-white border border-white/20"
              : model.status === "Training"
              ? "bg-neutral-800 text-neutral-300 border border-neutral-700"
              : "bg-neutral-900 text-neutral-400 border border-neutral-800"
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

      <div className="space-y-2 mb-4">
        {model.features.slice(0, isExpanded ? undefined : 3).map((feature: string, idx: number) => (
          <div key={idx} className="flex items-center gap-2">
            <Check className="w-3 h-3 text-neutral-400" />
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
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">{family.title}</h2>
          <p className="text-neutral-400">{family.description}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {family.models.map((model) => (
          <ModelCard key={model.name} model={model} />
        ))}
      </div>
    </section>
  );
};

const BRAND_COLOR = "#fd4444"; // Brand primary red

const ZenModels = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Helmet>
        <title>Zen LM - Open Foundation Models for Agentic AI | Hanzo AI</title>
        <meta
          name="description"
          content="30+ models from 0.6B to 1T parameters across language, vision, audio, video, and 3D. Production-ready AI models for agentic coding, multimodal understanding, and creative generation."
        />
      </Helmet>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden">
          {/* Background gradient */}
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
                <Code2 className="w-3 h-3" />
                30+ Open Models
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6 text-center"
            >
              <span className="text-white">Open Foundation Models</span>
              <br />
              <span className="text-neutral-400">for Agentic AI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base lg:text-lg text-neutral-400 leading-relaxed mb-8 max-w-3xl mx-auto text-center"
            >
              Zen LM provides production-ready AI models for agentic coding, multimodal understanding,
              and creative generation. Our flagship Zen Coder models are trained on 8.47B tokens
              of real programming sessions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex flex-wrap justify-center items-center gap-4 mb-8"
            >
              <a
                href="#models"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm"
                style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
              >
                Explore Models
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#dataset"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"
              >
                <Database className="mr-2 h-4 w-4" />
                Training Data
              </a>
              <a
                href="https://zenlm.org/research"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Research Papers
              </a>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3"
            >
              <a
                href="https://huggingface.co/zenlm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all"
              >
                🤗 HuggingFace
              </a>
              <a
                href="https://github.com/zenlm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://zenlm.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all"
              >
                <Globe className="w-4 h-4" />
                zenlm.org
              </a>
            </motion.div>
          </div>
        </section>

        {/* Zen Coder Feature Section */}
        <section id="zen-coder" className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto py-12 px-8 rounded-2xl bg-neutral-950 border border-neutral-800">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Zen Coder - Agentic Coding Models
              </h2>
              <p className="text-neutral-400 text-lg">
                Fine-tuned on 8.47B tokens of real programming sessions
              </p>
            </motion.div>

            {/* Models Table */}
            <div className="overflow-x-auto mb-10">
              <table className="w-full border-collapse bg-black border border-neutral-800 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-neutral-900/80">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-400 uppercase tracking-wider">Model</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-400 uppercase tracking-wider">Size</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-400 uppercase tracking-wider">Base</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-400 uppercase tracking-wider">VRAM</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-400 uppercase tracking-wider">Context</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-400 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {ZEN_CODER_MODELS.map((model) => (
                    <tr
                      key={model.name}
                      className={`border-t border-neutral-800 hover:bg-neutral-900/50 transition-colors ${model.flagship ? "bg-white/5" : ""}`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-white">{model.name}</span>
                          {model.flagship && (
                            <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-white/10 text-white border border-white/20">
                              FLAGSHIP
                            </span>
                          )}
                          {model.frontier && (
                            <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-white/10 text-white border border-white/20">
                              FRONTIER
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-neutral-300">{model.size}</td>
                      <td className="px-6 py-4 text-neutral-300">{model.base}</td>
                      <td className="px-6 py-4 text-neutral-300">{model.vram}</td>
                      <td className="px-6 py-4 text-neutral-300">{model.context}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block px-3 py-1 text-xs font-semibold rounded-full uppercase ${
                            model.status === "Trained"
                              ? "bg-white/10 text-white border border-white/20"
                              : model.status === "Training"
                              ? "bg-neutral-800 text-neutral-300 border border-neutral-700"
                              : "bg-neutral-900 text-neutral-400 border border-neutral-800"
                          }`}
                          style={model.status === "Training" ? { animation: "pulse 2s infinite" } : {}}
                        >
                          {model.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Coder Features Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-black border border-neutral-800 rounded-xl hover:border-neutral-600 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-2">Real Agentic Data</h3>
                <p className="text-neutral-400 text-sm">
                  Trained on actual agentic debug sessions - not synthetic data. Real debugging workflows,
                  multi-file refactoring, and tool use patterns.
                </p>
              </div>
              <div className="p-6 bg-black border border-neutral-800 rounded-xl hover:border-neutral-600 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-2">Production Code</h3>
                <p className="text-neutral-400 text-sm">
                  15 years of professional development across AI, Web3, cryptography, and modern software
                  engineering from 1,452 repositories.
                </p>
              </div>
              <div className="p-6 bg-black border border-neutral-800 rounded-xl hover:border-neutral-600 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-2">Open Training</h3>
                <p className="text-neutral-400 text-sm">
                  Use{" "}
                  <a
                    href="https://github.com/zenlm/zen-trainer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-white hover:text-neutral-300"
                  >
                    zen-trainer
                  </a>
                  {" "}to fine-tune on your own data. Supports MLX (Apple Silicon), Unsloth, and DeepSpeed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Complete AI Model Ecosystem */}
        <section id="overview" className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Complete AI Model Ecosystem
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ECOSYSTEM_CATEGORIES.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 bg-neutral-950 border border-neutral-800 rounded-xl text-center hover:border-[#fd4444]/30 transition-all hover:-translate-y-1"
                  >
                    <div className="text-4xl mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-xl bg-[#fd4444]/10 border border-[#fd4444]/20">
                      <Icon className="w-8 h-8 text-[#fd4444]" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{category.title}</h3>
                    <p className="text-neutral-400 text-sm">{category.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Dataset Section */}
        <section id="dataset" className="py-20 px-4 md:px-8 bg-neutral-950/50">
          <div className="max-w-7xl mx-auto py-12 px-8 rounded-2xl bg-neutral-950 border border-neutral-800">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Zen Agentic Dataset
              </h2>
              <p className="text-neutral-400 text-lg">
                8.47 Billion Tokens of Real-World Agentic Programming
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {DATASET_STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-black border border-neutral-800 rounded-xl text-center hover:border-neutral-600 transition-all"
                >
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-300 mb-1">{stat.label}</h3>
                  <p className="text-neutral-500 text-sm">{stat.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-neutral-400 mb-6">Available for research and commercial licensing.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:z@hanzo.ai"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm"
                  style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
                >
                  Request Access
                </a>
                <a
                  href="https://huggingface.co/datasets/hanzoai/zen-agentic-dataset"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 text-white hover:bg-neutral-900 text-sm"
                >
                  View on HuggingFace
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Model Families Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Quick Nav */}
            <div id="models" className="mb-12 flex flex-wrap gap-3 justify-center">
              {Object.entries(MODEL_FAMILIES).map(([key, family]) => {
                const Icon = family.icon;
                return (
                  <a
                    key={key}
                    href={`#${key}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 hover:border-[#fd4444]/30 transition-colors text-sm text-neutral-400 hover:text-white"
                  >
                    <Icon className="w-4 h-4" />
                    {family.title}
                  </a>
                );
              })}
            </div>

            {/* Model Families */}
            {Object.entries(MODEL_FAMILIES).map(([key, family]) => (
              <FamilySection key={key} familyKey={key} family={family} />
            ))}
          </div>
        </section>

        {/* Get Started Section */}
        <section id="downloads" className="py-20 px-4 md:px-8 border-t border-neutral-800">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Get Started
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-neutral-950 border border-neutral-800 rounded-xl text-center hover:border-[#fd4444]/30 transition-all hover:-translate-y-1"
              >
                <Download className="w-8 h-8 mx-auto mb-4 text-[#fd4444]" />
                <h3 className="text-xl font-semibold text-white mb-2">HuggingFace</h3>
                <p className="text-neutral-400 text-sm mb-4">Access all 30+ models via HuggingFace Hub</p>
                <a
                  href="https://huggingface.co/zenlm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-full font-medium transition-all hover:opacity-90 text-sm"
                  style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
                >
                  Visit HuggingFace
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 bg-neutral-950 border border-neutral-800 rounded-xl text-center hover:border-[#fd4444]/30 transition-all hover:-translate-y-1"
              >
                <Github className="w-8 h-8 mx-auto mb-4 text-[#fd4444]" />
                <h3 className="text-xl font-semibold text-white mb-2">GitHub</h3>
                <p className="text-neutral-400 text-sm mb-4">Training code, documentation, and source</p>
                <a
                  href="https://github.com/zenlm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-full font-medium transition-all hover:opacity-90 text-sm"
                  style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
                >
                  View on GitHub
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 bg-neutral-950 border border-neutral-800 rounded-xl text-center hover:border-[#fd4444]/30 transition-all hover:-translate-y-1"
              >
                <Terminal className="w-8 h-8 mx-auto mb-4 text-[#fd4444]" />
                <h3 className="text-xl font-semibold text-white mb-2">zen-trainer</h3>
                <p className="text-neutral-400 text-sm mb-4">Fine-tune models on your own data</p>
                <div className="bg-black border border-neutral-800 rounded-lg p-3">
                  <code className="text-sm text-white">pip install zen-trainer</code>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-6 bg-neutral-950 border border-neutral-800 rounded-xl text-center hover:border-[#fd4444]/30 transition-all hover:-translate-y-1"
              >
                <BookOpen className="w-8 h-8 mx-auto mb-4 text-[#fd4444]" />
                <h3 className="text-xl font-semibold text-white mb-2">Research</h3>
                <p className="text-neutral-400 text-sm mb-4">Technical papers and whitepapers</p>
                <a
                  href="https://zenlm.org/research"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-full font-medium transition-all hover:opacity-90 text-sm"
                  style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
                >
                  Read Papers
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Infrastructure Section */}
        <section className="py-20 px-4 md:px-8 bg-neutral-950/50 border-t border-neutral-800">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
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
                className="bg-black border border-neutral-800 rounded-xl p-8 hover:border-[#fd4444]/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="w-6 h-6 text-[#fd4444]" />
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
                      <Check className="w-3 h-3 text-[#fd4444]" />
                      <span className="text-sm text-neutral-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://github.com/zenlm/zen-gym"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
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
                className="bg-black border border-neutral-800 rounded-xl p-8 hover:border-[#fd4444]/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-[#fd4444]" />
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
                      <Check className="w-3 h-3 text-[#fd4444]" />
                      <span className="text-sm text-neutral-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://github.com/zenlm/zen-engine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  View on GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
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
                <a
                  href="https://zenlm.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"
                >
                  <Globe className="mr-2 h-4 w-4" />
                  Visit zenlm.org
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Add pulse animation for training status */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
};

export default ZenModels;
