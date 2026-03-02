'use client'

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

interface PlanProps {
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel: string;
  ctaHref: string;
}

const Plan = ({ name, price, period, features, highlighted, ctaLabel, ctaHref }: PlanProps) => (
  <div
    className={`rounded-xl p-6 flex flex-col ${
      highlighted
        ? "bg-primary/5 border-2 border-foreground/20"
        : "bg-secondary/50 border border-border"
    }`}
  >
    <h3 className="text-xl font-semibold text-foreground mb-1">{name}</h3>
    <div className="mb-6">
      <span className="text-3xl font-bold text-foreground">{price}</span>
      {period && <span className="text-muted-foreground">/{period}</span>}
    </div>
    <ul className="space-y-3 mb-8 flex-1">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
          <Check className="h-4 w-4 text-foreground/70 mt-0.5 flex-shrink-0" />
          {feature}
        </li>
      ))}
    </ul>
    <a
      href={ctaHref}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 font-medium rounded-full transition-colors text-sm ${
        highlighted
          ? "bg-primary/10 hover:bg-primary/20 text-primary-foreground"
          : "bg-transparent border border-border hover:border-neutral-500 text-foreground"
      }`}
    >
      {ctaLabel}
      <ArrowRight className="w-4 h-4" />
    </a>
  </div>
);

const plans: PlanProps[] = [
  {
    name: "Build",
    price: "$29",
    period: "mo",
    features: [
      "1M vectors",
      "Up to 3072 dimensions",
      "10 collections",
      "Cosine, dot, Euclidean",
      "REST API + gRPC",
    ],
    ctaLabel: "Get Started",
    ctaHref: "https://docs.hanzo.ai/vector",
  },
  {
    name: "Scale",
    price: "$299",
    period: "mo",
    highlighted: true,
    features: [
      "10M vectors",
      "Up to 3072 dimensions",
      "100 collections",
      "Quantization + sharding",
      "Priority support",
    ],
    ctaLabel: "Get Started",
    ctaHref: "https://docs.hanzo.ai/vector",
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited vectors",
      "Unlimited dimensions",
      "Unlimited collections",
      "Dedicated clusters",
      "Dedicated support + SLA",
    ],
    ctaLabel: "Contact Sales",
    ctaHref: "/contact",
  },
];

const Pricing = () => {
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
            Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pay for hosted vector storage and search. Self-host Qdrant free forever.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {plans.map((plan) => (
            <Plan key={plan.name} {...plan} />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-sm text-muted-foreground max-w-2xl mx-auto"
        >
          Qdrant is open source (Apache 2.0). Self-host free forever.
          Pay only for our hosted API, managed clusters, and enterprise features.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
