import React from "react";
import { motion } from "framer-motion";
import {
  RefreshCw,
  Smartphone,
  Eye,
  Rocket,
  Users,
  Brain,
  Keyboard,
  Settings,
  Shield,
  BarChart3,
  CreditCard,
  Copy,
} from "lucide-react";

const BRAND_COLOR = "#fd4444";

const VALUE_PROPS = [
  {
    title: "Stay in your flow",
    subtitle: "The all-in-one agentic engineering platform",
    color: "#f97316",
    features: [
      {
        icon: Smartphone,
        title: "Sync across every interface",
        description:
          "Start a task on your mobile device and finish it in VS Code, JetBrains, or the CLI without missing a beat.",
      },
      {
        icon: RefreshCw,
        title: "Persist your context",
        description:
          "Never lose state. Your session history, active agents, and variables follow you automatically across devices and environments.",
      },
      {
        icon: Eye,
        title: "Open the black box",
        description:
          "Hanzo is open source so you can inspect, customize, and integrate to meet your specific needs.",
      },
      {
        icon: Rocket,
        title: "Ship without friction",
        description:
          'Move from "commit" to "live" in one motion. Get AI code reviews and deployments without leaving your IDE.',
      },
    ],
  },
  {
    title: "1000x every dev",
    subtitle: "Multiply your engineering output",
    color: "#10b981",
    features: [
      {
        icon: Users,
        title: "Multiply your output",
        description:
          "Use Orchestrator Mode and Code Review to plan, build, and audit simultaneously. Be everywhere at once.",
      },
      {
        icon: Brain,
        title: "Externalize your context",
        description:
          "Stop repeating yourself. Use Memory Bank to store architectural decisions and onboard the team automatically.",
      },
      {
        icon: Keyboard,
        title: "Code at thought speed",
        description:
          "Eliminate boilerplate. Use intelligent Tab Autocomplete to ship PRs faster than you can type them.",
      },
      {
        icon: Settings,
        title: "Use the best model for the job",
        description:
          "With 500+ models, you can control the right tradeoffs between latency, cost, context, and reasoning for each task.",
      },
    ],
  },
  {
    title: "Accelerate AI ROI",
    subtitle: "Enterprise-grade AI management",
    color: "#fd4444",
    features: [
      {
        icon: Shield,
        title: "Stop AI sprawl",
        description:
          "Centralize usage to prevent shadow IT, security risks, and wasted credits before they spiral.",
      },
      {
        icon: BarChart3,
        title: "Track and improve velocity",
        description:
          "Use the AI Management Dashboard to track adoption rates, measure new hire speed, and prove ROI.",
      },
      {
        icon: CreditCard,
        title: "Centralize management",
        description:
          "Simplify administration with pooled credits, unified billing, and enterprise-grade data privacy controls.",
      },
      {
        icon: Copy,
        title: "Duplicate your best devs",
        description:
          'Build a managed index to speed up onboarding. Capture individual "superpowers" into custom modes the whole team can use.',
      },
    ],
  },
];

const WhyHanzo = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Hanzo
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            The all-in-one agentic engineering platform
          </p>
        </motion.div>

        {/* Value Props */}
        <div className="space-y-20">
          {VALUE_PROPS.map((prop, propIndex) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: propIndex * 0.1 }}
            >
              {/* Prop Header */}
              <div className="mb-8">
                <h3
                  className="text-2xl md:text-3xl font-bold mb-2"
                  style={{ color: prop.color }}
                >
                  {prop.title}
                </h3>
                <p className="text-neutral-400">{prop.subtitle}</p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {prop.features.map((feature, featureIndex) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: featureIndex * 0.05 }}
                      className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${prop.color}20` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: prop.color }} />
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-neutral-400">
                        {feature.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHanzo;
