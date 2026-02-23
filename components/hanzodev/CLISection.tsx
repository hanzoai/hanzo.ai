'use client'

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Terminal, Sparkles, Bug, Rocket, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const BRAND_COLOR = "#ffffff";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Code Generation",
    description: "Generate APIs, scripts, components, and features directly from your terminal using simple natural-language prompts.",
  },
  {
    icon: Bug,
    title: "Smart Debugging & Fixes",
    description: "Identify bugs, understand errors, and apply AI-generated fixes automatically without leaving the CLI.",
  },
  {
    icon: Rocket,
    title: "End-to-End Project Automation",
    description: "Set up projects, generate tests, configure CI/CD, and manage deployments — all from one CLI.",
  },
  {
    icon: Layers,
    title: "Works Across Any Stack",
    description: "Use the CLI with Python, JavaScript, React, Node.js, databases, and more — no framework lock-in.",
  },
];

const tools = [
  "Ramp", "Cred", "Zapier", "GitHub", "Docker", "Kubernetes",
  "AWS", "GCP", "Azure", "Terraform", "Ansible", "Jenkins",
];

const CLISection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-neutral-900/30 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
            style={{ borderColor: `${BRAND_COLOR}4d` }}
          >
            <Terminal className="w-4 h-4" style={{ color: BRAND_COLOR }} />
            <span className="text-sm" style={{ color: BRAND_COLOR }}>Hanzo CLI</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            AI-powered development,
            <br />
            right from your terminal.
          </h2>
          <Button
            size="lg"
            className="mt-4 text-black"
            style={{ backgroundColor: BRAND_COLOR }}
            asChild
          >
            <Link href="/download">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-white/30 transition-colors"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${BRAND_COLOR}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: BRAND_COLOR }} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Connects with your favorite command line tools
          </h3>
          <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
            Your terminal is where real work happens. Hanzo Dev connects with the tools that power development—deployment, databases, monitoring, version control. Rather than adding another interface to juggle, it enhances your existing stack.
          </p>

          {/* Tool logos marquee */}
          <div className="flex justify-center gap-6 flex-wrap">
            {tools.map((tool) => (
              <div
                key={tool}
                className="px-4 py-2 bg-neutral-900/50 border border-neutral-800 rounded-lg text-neutral-400 text-sm"
              >
                {tool}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CLISection;
