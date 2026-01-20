import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

const BRAND_COLOR = "#fd4444";

const TOP_MODELS = [
  { rank: 1, name: "grok-code-fast-1", tokens: "37.6B" },
  { rank: 2, name: "glm-4.7", tokens: "19.6B" },
  { rank: 3, name: "claude-sonnet-4.5", tokens: "13.3B" },
  { rank: 4, name: "claude-opus-4.5", tokens: "12.0B" },
  { rank: 5, name: "qwen3-coder-plus", tokens: "11.6B" },
  { rank: 6, name: "gemini-3-flash-preview", tokens: "8.4B" },
  { rank: 7, name: "giga-potato", tokens: "5.8B" },
  { rank: 8, name: "gpt-5.2", tokens: "5.5B" },
  { rank: 9, name: "gemini-3-pro-preview", tokens: "5.4B" },
  { rank: 10, name: "minimax-m2.1", tokens: "4.6B" },
];

const OpenModels = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Models
            </h2>
            <p className="text-xl text-neutral-300 mb-6">
              Switch between 500+ custom, local, and frontier LLMs.
            </p>
            <p className="text-neutral-400 mb-8">
              Hanzo is the best gateway to discover and compare models. Use new
              models the day they come out and try stealth models for free.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://hanzo.ai/leaderboard"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center px-5 py-2.5 rounded-full font-medium transition-all hover:opacity-90 text-sm"
                style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
              >
                View leaderboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="https://hanzo.ai/models/compare"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center px-5 py-2.5 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"
              >
                Compare models
              </a>
            </div>
          </motion.div>

          {/* Right: Leaderboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-neutral-900/80 border border-neutral-800 rounded-xl overflow-hidden"
          >
            <div className="p-4 border-b border-neutral-800">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-white">
                  Model Leaderboard
                </span>
                <span className="text-xs text-neutral-500">
                  Daily real-world usage from 1M+ Hanzo Devrs
                </span>
              </div>
            </div>

            <div className="divide-y divide-neutral-800/50">
              {TOP_MODELS.map((model, index) => (
                <motion.div
                  key={model.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="flex items-center justify-between px-4 py-3 hover:bg-neutral-800/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold ${
                        model.rank <= 3
                          ? "bg-[#fd4444]/20 text-[#fd4444]"
                          : "bg-neutral-800 text-neutral-400"
                      }`}
                    >
                      {model.rank}
                    </span>
                    <span className="text-sm text-white font-mono">
                      {model.name}
                    </span>
                  </div>
                  <span className="text-sm text-neutral-500 font-mono">
                    {model.tokens}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="p-4 border-t border-neutral-800 text-center">
              <span className="text-xs text-neutral-500">
                Want your model to take flight?{" "}
                <a
                  href="mailto:models@hanzo.ai"
                  className="text-[#fd4444] hover:underline"
                >
                  Get in touch
                </a>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OpenModels;
