'use client'

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Bot, Cloud, Rocket, Database, ArrowRight } from "lucide-react";

const entryPoints = [
  {
    icon: Bot,
    title: "Hanzo Dev",
    tagline: "AI engineer",
    description: "Ship code with an AI agent that respects your policies.",
    link: "/products/apps/agent",
  },
  {
    icon: Cloud,
    title: "Hanzo Cloud",
    tagline: "UI + control plane",
    description: "Manage your entire stack from one dashboard.",
    link: "/products/apps/cloud",
  },
  {
    icon: Rocket,
    title: "Deploy Anywhere",
    tagline: "k8s / cloud / edge",
    description: "One command to deploy to any target.",
    link: "/products/platform/platform",
  },
  {
    icon: Database,
    title: "Data & Vector",
    tagline: "RAG-ready",
    description: "SQL, Vector, KV—everything for AI data.",
    link: "/products/data",
  },
];

const CuratedEntryPointsSection = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-black relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at center, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-4">
            Start building
          </h2>
          <p className="text-lg text-neutral-400">
            Four paths into the platform.
          </p>
        </motion.div>

        {/* Entry Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {entryPoints.map((entry, index) => {
            const Icon = entry.icon;
            return (
              <motion.div
                key={entry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link href={entry.link || "#"} className="block h-full group">
                  <motion.div
                    className="h-full p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-white/30/50 transition-all duration-300 relative overflow-hidden"
                    whileHover={{
                      y: -4,
                      boxShadow: "0 0 40px -10px rgba(255, 255, 255, 0.15)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: "#ffffff" }}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-white transition-colors">
                      {entry.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs font-medium text-neutral-500 mb-3">
                      {entry.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {entry.description}
                    </p>

                    {/* Hover accent line */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] rounded-full"
                      style={{ backgroundColor: "#ffffff" }}
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Products Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
          >
            View all products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CuratedEntryPointsSection;
