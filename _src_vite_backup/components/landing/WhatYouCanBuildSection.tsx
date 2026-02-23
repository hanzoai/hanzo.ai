import React from "react";
import { motion } from "framer-motion";
import { Bot, Globe, Link2, ArrowRight } from "lucide-react";

interface BuildCard {
  icon: React.ElementType;
  title: string;
  sentence: string;
  bullets: string[];
  linkText: string;
  linkHref: string;
}

const buildCards: BuildCard[] = [
  {
    icon: Bot,
    title: "AI Apps",
    sentence: "Build intelligent applications with cutting-edge AI.",
    bullets: ["RAG APIs", "Agent backends", "Multimodal pipelines"],
    linkText: "View templates",
    linkHref: "/templates?category=ai",
  },
  {
    icon: Globe,
    title: "Modern Web Apps",
    sentence: "Ship full-stack apps with auth, data, and realtime.",
    bullets: ["Authentication + data", "Realtime subscriptions", "Edge deployment"],
    linkText: "View templates",
    linkHref: "/templates?category=web",
  },
  {
    icon: Link2,
    title: "Web3 Apps",
    sentence: "Build decentralized apps with identity and proofs.",
    bullets: ["Wallet integration", "Chain deployments", "Indexing + proofs"],
    linkText: "View templates",
    linkHref: "/templates?category=web3",
  },
];

const WhatYouCanBuildSection: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-4">
            What you can build
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Templates and primitives for any stack.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {buildCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl border border-neutral-800 bg-neutral-950 hover:bg-neutral-900/50 transition-all duration-300 hover:border-neutral-700">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: "rgba(253, 68, 68, 0.1)" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: "#fd4444" }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {card.title}
                  </h3>

                  {/* Sentence */}
                  <p className="text-neutral-400 mb-6 leading-relaxed">
                    {card.sentence}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-8">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3 text-sm">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "#fd4444" }}
                        />
                        <span className="text-neutral-300">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <a
                    href={card.linkHref}
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                    style={{ color: "#fd4444" }}
                  >
                    {card.linkText}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatYouCanBuildSection;
