'use client'

import React from "react";
import { motion } from "framer-motion";
import { Upload, Sparkles, Search } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Store your embeddings",
    description:
      "Create a collection with your chosen distance metric and dimensions. Push vector embeddings from any provider -- OpenAI, Cohere, HuggingFace, or your own models. Attach JSON metadata as payload.",
  },
  {
    number: "02",
    icon: Search,
    title: "Query with precision",
    description:
      "Search by vector similarity, filter by metadata, or combine both in a single request. Quantization keeps queries fast even at massive scale. Results return in under 10ms.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Power your AI stack",
    description:
      "Use Hanzo Vector as the retrieval layer for RAG pipelines, recommendation engines, or semantic search. Integrates directly with Hanzo Search and Hanzo Crawl for end-to-end workflows.",
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
            Three steps from raw embeddings to production-grade semantic search.
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
            Works with any embedding provider
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Native support for OpenAI, Cohere, HuggingFace, and Sentence Transformers.
            REST API and gRPC for everything else.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["OpenAI", "Cohere", "HuggingFace", "LangChain", "LlamaIndex", "REST API"].map(
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
