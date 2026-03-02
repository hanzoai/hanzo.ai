'use client'

import React from "react";
import { motion } from "framer-motion";
import { Database, Globe, MessageCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Database,
    title: "Index your content",
    description:
      "Push documents at build time or via the REST API. Meilisearch indexes text fields instantly. Qdrant stores vector embeddings from your chosen provider.",
  },
  {
    number: "02",
    icon: Globe,
    title: "Search from any frontend",
    description:
      "Use the React hook for instant UI, the REST API for custom integrations, or the MCP tool for agent workflows. One index, many surfaces.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Chat with your docs",
    description:
      "Enable RAG chat and users can ask natural-language questions. Streaming AI answers cite your content with source links.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three steps from content to searchable, conversational knowledge.
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-6 bg-secondary/50 border border-border rounded-xl p-6"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center">
                <step.icon className="h-6 w-6 text-foreground/70" />
              </div>
              <div>
                <div className="text-xs font-mono text-muted-foreground mb-1">
                  Step {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integrations note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Works with any docs framework
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Native support for Hanzo Docs, Fumadocs, Nextra, and Docusaurus.
            REST API for everything else.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Hanzo Docs", "Fumadocs", "Nextra", "Docusaurus", "REST API"].map(
              (name) => (
                <span
                  key={name}
                  className="px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm text-foreground/70"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
