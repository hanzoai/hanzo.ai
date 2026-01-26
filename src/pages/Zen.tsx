import React from "react";
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
  Brain,
  Shield,
  Globe,
  Cpu,
  Layers,
  Clock,
} from "lucide-react";

// Model categories overview
const MODEL_CATEGORIES = [
  {
    icon: Brain,
    title: "Core Language Models",
    count: "6 models",
    description: "0.6B to 32B parameters for edge to cloud deployment. Optimized for real-time instruction following and reasoning.",
  },
  {
    icon: Eye,
    title: "Multimodal Models",
    count: "10 models",
    description: "Vision, audio, video, 3D generation, and spatial understanding. Seamless XR/VR platform integration.",
  },
  {
    icon: Code2,
    title: "Zen Coder",
    count: "5 models",
    description: "4B to 1T parameters trained on 8.47B tokens. State-of-the-art agentic coding and tool use.",
  },
  {
    icon: Shield,
    title: "Specialized Systems",
    count: "8 models",
    description: "Agent frameworks, safety guardrails, embeddings, and IDE tools for production AI.",
  },
];

// Key benefits
const BENEFITS = [
  {
    icon: Clock,
    title: "Real-Time Performance",
    description: "Sub-10ms latency with optimized quantization and edge deployment. Seamless XR integration.",
  },
  {
    icon: Globe,
    title: "Spatial Awareness",
    description: "Native 3D understanding, scene generation, and spatial audio for immersive environments.",
  },
  {
    icon: Layers,
    title: "Multimodal Fusion",
    description: "Unified understanding across vision, language, audio, and 3D. Real-time gesture and voice.",
  },
  {
    icon: Cpu,
    title: "Open Source",
    description: "Fully open models, training code, and infrastructure. Complete control and customization.",
  },
];

const BRAND_COLOR = "#fd4444"; // Brand primary red

// Quick stats for the demo panel
const QUICK_STATS = [
  { label: "Models", value: "30+" },
  { label: "Params", value: "0.6B-1T" },
  { label: "Tokens", value: "8.47B" },
  { label: "Latency", value: "<10ms" },
];

const Zen = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Helmet>
        <title>Zen LM - Open Foundation Models for Agentic AI | Hanzo AI</title>
        <meta
          name="description"
          content="Real-time hyper-modal AI for XR/VR/Robotics. 30+ open models from 0.6B to 1T parameters across language, vision, audio, video, and 3D."
        />
      </Helmet>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
              style={{
                background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
                filter: "blur(100px)",
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mb-6"
                >
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[#fd4444]/10 text-[#fd4444] border border-[#fd4444]/20">
                    <Zap className="w-3 h-3" />
                    Open Source AI
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
                >
                  <span className="text-white">Real-Time Hyper-Modal AI</span>
                  <br />
                  <span className="text-neutral-400">for XR/VR/Robotics</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-base lg:text-lg text-neutral-400 leading-relaxed mb-8 max-w-xl"
                >
                  Zen LM powers next-generation XR/VR applications and robotic systems with real-time multimodal
                  understanding. Sub-10ms latency for seamless human-AI interaction.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="flex flex-wrap items-center gap-4 mb-8"
                >
                  <Link
                    to="/zen/models"
                    className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm"
                    style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
                  >
                    Explore Models
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <a
                    href="https://zenlm.org/research"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Read Research
                  </a>
                </motion.div>

                {/* Quick links */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex flex-wrap gap-3"
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
                    <Globe className="w-4 h-4" />
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

              {/* Right Column: Stats Demo */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                <div className="rounded-xl border border-neutral-700 bg-neutral-900/95 backdrop-blur-sm overflow-hidden shadow-2xl">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-950">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-xs text-neutral-500 font-mono ml-2">zen-models</span>
                  </div>
                  <div className="p-6 bg-neutral-950">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {QUICK_STATS.map((stat) => (
                        <div key={stat.label} className="p-4 bg-neutral-900/50 rounded-lg border border-neutral-800 text-center">
                          <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                          <div className="text-xs text-neutral-500 uppercase tracking-wider">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Brain className="w-4 h-4 text-[#fd4444]" />
                        <span className="text-neutral-300">Language • Vision • Audio • Video • 3D</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Code2 className="w-4 h-4 text-[#fd4444]" />
                        <span className="text-neutral-300">Agentic coding with tool use</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Shield className="w-4 h-4 text-[#fd4444]" />
                        <span className="text-neutral-300">Apache 2.0 • Open weights & training</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Complete AI Stack Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Complete AI Stack for Immersive Computing
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {MODEL_CATEGORIES.map((category, idx) => {
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
                    <div className="mx-auto w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-[#fd4444]/10 border border-[#fd4444]/20">
                      <Icon className="w-6 h-6 text-[#fd4444]" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1">{category.title}</h3>
                    <p className="text-sm text-[#fd4444] mb-2">{category.count}</p>
                    <p className="text-neutral-500 text-sm">{category.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Zen Section */}
        <section className="py-20 px-4 md:px-8 bg-neutral-950/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Why Zen for XR/VR/Robotics?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {BENEFITS.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 bg-black border border-neutral-800 rounded-xl text-center hover:border-[#fd4444]/30 transition-all"
                  >
                    <div className="mx-auto w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-[#fd4444]/10 border border-[#fd4444]/20">
                      <Icon className="w-6 h-6 text-[#fd4444]" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-neutral-400 text-sm">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Get Started</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.a
                href="https://huggingface.co/zenlm"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-neutral-950 border border-neutral-800 rounded-xl text-center hover:border-[#fd4444]/30 transition-all hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">🤗</div>
                <h3 className="text-xl font-semibold text-white mb-2">HuggingFace</h3>
                <p className="text-neutral-400 text-sm">Access all 30+ models via HuggingFace Hub</p>
              </motion.a>

              <motion.a
                href="https://github.com/zenlm"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 bg-neutral-950 border border-neutral-800 rounded-xl text-center hover:border-[#fd4444]/30 transition-all hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">💻</div>
                <h3 className="text-xl font-semibold text-white mb-2">GitHub</h3>
                <p className="text-neutral-400 text-sm">Training code, datasets, and documentation</p>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 bg-neutral-950 border border-neutral-800 rounded-xl text-center hover:border-[#fd4444]/30 transition-all hover:-translate-y-1"
              >
                <Link to="/zen/models" className="block">
                  <div className="text-3xl mb-4">📚</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Models</h3>
                  <p className="text-neutral-400 text-sm">Full catalog with specs and downloads</p>
                </Link>
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to build with Zen?</h2>
              <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
                All models are open source under Apache 2.0 or MIT license. Start building today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/zen/models"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm"
                  style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
                >
                  Explore All Models
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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
    </div>
  );
};

export default Zen;
