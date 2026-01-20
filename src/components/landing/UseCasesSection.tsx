import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Bot, Globe, Coins, ArrowRight } from "lucide-react";

const useCases = [
  {
    icon: Bot,
    title: "AI Apps",
    subtitle: "Intelligent applications",
    description:
      "Build RAG pipelines, chatbots, and autonomous agents with our unified AI gateway. Access 100+ models through a single API.",
    features: [
      "Vector search & embeddings",
      "Multi-model orchestration",
      "Agent frameworks",
      "Memory & context management",
    ],
    color: "#fd4444",
    link: "/ai",
  },
  {
    icon: Globe,
    title: "Web Apps",
    subtitle: "Full-stack applications",
    description:
      "Deploy full-stack applications with built-in auth, databases, edge functions, and global CDN. Zero config, infinite scale.",
    features: [
      "Edge-first architecture",
      "Built-in authentication",
      "Serverless functions",
      "Global CDN",
    ],
    color: "#3b82f6",
    link: "/cloud",
  },
  {
    icon: Coins,
    title: "Web3 Apps",
    subtitle: "Decentralized applications",
    description:
      "Build smart contracts, DeFi protocols, and NFT marketplaces. Seamlessly integrate blockchain with traditional infrastructure.",
    features: [
      "Multi-chain support",
      "Smart contract templates",
      "Wallet integration",
      "On-chain analytics",
    ],
    color: "#8b5cf6",
    link: "/commerce",
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="inline-flex text-xs font-medium rounded-full px-4 py-2 border mb-6"
            style={{ color: "#fd4444", borderColor: "rgba(253, 68, 68, 0.3)" }}
          >
            Use Cases
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">
            Build anything
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            From AI-powered applications to decentralized protocols. One platform, endless possibilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="h-full p-8 rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/60 transition-all duration-300 hover:border-neutral-700">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${useCase.color}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: useCase.color }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-white mb-1">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mb-4">{useCase.subtitle}</p>

                  {/* Description */}
                  <p className="text-neutral-400 mb-6 leading-relaxed">
                    {useCase.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {useCase.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: useCase.color }}
                        />
                        <span className="text-neutral-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to={useCase.link}
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                    style={{ color: useCase.color }}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
