'use client'

import React from "react";
import { motion } from "framer-motion";
import { FileText, Monitor, Braces, Zap, Search, Shield } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "LLM-Ready Output",
    description:
      "Converts any webpage into clean Markdown with structured metadata. Ready for ingestion by any LLM, RAG pipeline, or Hanzo Search index.",
  },
  {
    icon: Monitor,
    title: "JavaScript Rendering",
    description:
      "Full Playwright browser engine handles SPAs, dynamic content, lazy loading, and infinite scroll. See the page exactly as users do.",
  },
  {
    icon: Braces,
    title: "Structured Extraction",
    description:
      "Extract data using CSS selectors, XPath expressions, or LLM-based schemas. Get typed JSON from any page layout.",
  },
  {
    icon: Zap,
    title: "Parallel Crawling",
    description:
      "Crawl thousands of pages concurrently with configurable rate limiting. Respect robots.txt while maximizing throughput.",
  },
  {
    icon: Search,
    title: "Direct Search Integration",
    description:
      "Pipe crawled content directly into Hanzo Search and Hanzo Vector. One pipeline from raw web to searchable, embeddable knowledge.",
  },
  {
    icon: Shield,
    title: "Anti-Detection & Stealth",
    description:
      "Built-in stealth mode with proxy rotation, user-agent management, and fingerprint randomization for reliable large-scale crawls.",
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
            Crawl anything, extract everything
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From static HTML to JavaScript-heavy SPAs --
            get structured, LLM-ready data from any website.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
