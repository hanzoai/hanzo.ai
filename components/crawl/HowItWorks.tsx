'use client'

import React from "react";
import { motion } from "framer-motion";
import { Globe, FileText, Database } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Globe,
    title: "Point at any URL",
    description:
      "Provide a seed URL or sitemap. Hanzo Crawl discovers pages, follows links, and handles pagination. Configure depth limits, URL filters, and concurrency to match your needs.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Extract structured data",
    description:
      "Each page is rendered with a full Playwright browser, then converted to clean Markdown. Use CSS selectors, XPath, or LLM-based schemas to extract typed data from any layout.",
  },
  {
    number: "03",
    icon: Database,
    title: "Index and search",
    description:
      "Push extracted content directly into Hanzo Search for full-text and hybrid search, or into Hanzo Vector for semantic embeddings. One pipeline from raw web to queryable knowledge.",
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
            Three steps from any website to structured, searchable data.
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
            Works with any content source
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Crawl marketing sites, documentation portals, e-commerce catalogs, forums, and more.
            REST API for programmatic control.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Static Sites", "SPAs", "Documentation", "E-Commerce", "Forums", "REST API"].map(
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
