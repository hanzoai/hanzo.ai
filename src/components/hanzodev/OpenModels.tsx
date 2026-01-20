import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

const BRAND_COLOR = "#fd4444";

const SUPPORTED_PROVIDERS = [
  "OpenAI",
  "Anthropic",
  "Google",
  "Mistral",
  "Cohere",
  "Together AI",
  "Groq",
  "Fireworks",
  "Ollama",
  "LM Studio",
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

          {/* Right: Providers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-neutral-900/80 border border-neutral-800 rounded-xl overflow-hidden"
          >
            <div className="p-4 border-b border-neutral-800">
              <span className="text-sm font-medium text-white">
                Supported Providers
              </span>
            </div>

            <div className="p-4">
              <div className="flex flex-wrap gap-2">
                {SUPPORTED_PROVIDERS.map((provider, index) => (
                  <motion.span
                    key={provider}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    className="px-3 py-1.5 bg-neutral-800 rounded-full text-sm text-neutral-300"
                  >
                    {provider}
                  </motion.span>
                ))}
                <span className="px-3 py-1.5 bg-neutral-800/50 rounded-full text-sm text-neutral-500">
                  + many more
                </span>
              </div>
            </div>

            <div className="p-4 border-t border-neutral-800 text-center">
              <span className="text-xs text-neutral-500">
                Bring your own API keys or use Hanzo Gateway
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OpenModels;
