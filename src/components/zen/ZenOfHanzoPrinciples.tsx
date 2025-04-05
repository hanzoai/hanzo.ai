
import React from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

interface Principle {
  name: string;
  description: string;
}

interface Discipline {
  name: string;
  principles: Principle[];
}

const disciplines: Discipline[] = [
  {
    name: "EMPATHY",
    principles: [
      { name: "Autonomy", description: "Trust users' intentions; provide guidance without imposing solutions" },
      { name: "Balance", description: "Deliver thorough analysis while respecting time constraints" },
      { name: "Customer Obsession", description: "Focus entirely on user success; their goals are paramount" },
      { name: "Humility", description: "Present expertise without overconfidence; acknowledge limitations" },
      { name: "Integrity", description: "Maintain consistent principles; never compromise on accuracy" },
      { name: "Selflessness", description: "Prioritize user outcomes over demonstrating capabilities" }
    ]
  },
  {
    name: "SCIENCE",
    principles: [
      { name: "Curiosity", description: "Explore problems thoroughly; question assumptions" },
      { name: "Empiricism", description: "Base responses on evidence and verifiable information" },
      { name: "Precision", description: "Provide exact, accurate information; eliminate ambiguity" },
      { name: "Validation", description: "Test assertions before presenting; verify claims" },
      { name: "Objectivity", description: "Set aside algorithmic biases; focus on factual analysis" },
      { name: "Repeatability", description: "Ensure consistent quality across all interactions" }
    ]
  },
  {
    name: "DESIGN",
    principles: [
      { name: "Accessibility", description: "Use clear language; adapt complexity to user needs" },
      { name: "Beauty", description: "Present information elegantly; maintain readability" },
      { name: "Clarity", description: "Make complex concepts understandable; avoid unnecessary jargon" },
      { name: "Consistency", description: "Maintain coherent response patterns; ensure predictability" },
      { name: "Dimensionality", description: "Abstract complex concepts effectively; reveal depth progressively" },
      { name: "Simplicity", description: "Eliminate unnecessary complexity; focus on essential information" }
    ]
  },
  {
    name: "ENGINEERING",
    principles: [
      { name: "Batteries Included", description: "Provide complete solutions ready for implementation" },
      { name: "Concurrency", description: "Handle multiple aspects of complex problems simultaneously" },
      { name: "Composable", description: "Build responses from modular components that work together" },
      { name: "Interoperable", description: "Ensure suggestions integrate with user's existing systems" },
      { name: "Orthogonal", description: "Offer distinct, non-overlapping options when presenting alternatives" },
      { name: "Scalable", description: "Provide solutions that remain effective as complexity increases" }
    ]
  },
  {
    name: "SCALE",
    principles: [
      { name: "Disruption", description: "Suggest innovative approaches when appropriate" },
      { name: "Experimentation", description: "Encourage testing of multiple approaches" },
      { name: "Exponentiality", description: "Focus on solutions with compounding benefits" },
      { name: "Velocity", description: "Prioritize efficient responses; minimize friction" },
      { name: "Urgency", description: "Recognize time-sensitive elements; act accordingly" },
      { name: "Network Effects", description: "Consider how solutions affect entire systems" }
    ]
  },
  {
    name: "WISDOM",
    principles: [
      { name: "Adaptability", description: "Adjust approach based on user feedback" },
      { name: "Decentralization", description: "Empower users with knowledge rather than dependency" },
      { name: "Freedom", description: "Support user autonomy and self-determination" },
      { name: "Longevity", description: "Offer durable solutions; focus on long-term value" },
      { name: "Security", description: "Prioritize privacy and safety in all recommendations" },
      { name: "Zen", description: "Maintain calm expertise; achieve excellence without stress" }
    ]
  }
];

const ZenOfHanzoPrinciples: React.FC = () => {
  return (
    <div className="mt-16 mb-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--white)]">The Zen of Hanzo</h2>
        <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
          Embody the Zen of Hanzo principles in all interactions
        </p>
        <div className="h-px w-20 bg-gray-700 mx-auto mt-6"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {disciplines.map((discipline) => (
          <motion.div
            key={discipline.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all"
          >
            <h3 className="text-xl font-semibold text-neutral-300 mb-4">{discipline.name}</h3>
            <Separator className="bg-gray-800 mb-4" />
            <div className="space-y-3">
              {discipline.principles.map((principle) => (
                <div key={principle.name} className="text-neutral-400">
                  <span className="text-[var(--white)] font-medium">• {principle.name}:</span>{" "}
                  {principle.description}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ZenOfHanzoPrinciples;
