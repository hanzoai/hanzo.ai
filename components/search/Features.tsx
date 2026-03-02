'use client'

import React from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, GitMerge, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Full-Text Search",
    description:
      "Meilisearch-powered instant search with typo tolerance, faceting, filtering, and sub-50ms response times out of the box.",
  },
  {
    icon: Sparkles,
    title: "Vector Search",
    description:
      "Qdrant-powered semantic search with embeddings from 12+ providers. Find results by meaning, not just keywords.",
  },
  {
    icon: GitMerge,
    title: "Hybrid Search",
    description:
      "Reciprocal Rank Fusion merges keyword and semantic results for the best of both worlds. One query, two engines.",
  },
  {
    icon: MessageSquare,
    title: "RAG Chat",
    description:
      "Ask questions and get AI answers grounded in your content with inline citations. Streaming responses, real sources.",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Four search modes, one API
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full-text, vector, hybrid, and conversational search --
            all from a single endpoint.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-neutral-500 transition-colors"
            >
              <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-4 bg-primary/5">
                <feature.icon className="h-6 w-6 text-foreground/70" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
