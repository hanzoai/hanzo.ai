'use client'


import React from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  delay?: number;
  color?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  features,
  delay = 0,
  color = "blue"
}) => {
  const colorClasses: Record<string, { bg: string, text: string, border: string }> = {
    blue: {
      bg: "bg-white/10",
      text: "text-white",
      border: "border-white/30"
    },
    purple: {
      bg: "bg-white/10",
      text: "text-white",
      border: "border-white/30"
    },
    green: {
      bg: "bg-white/10",
      text: "text-white/70",
      border: "border-white/20"
    },
    amber: {
      bg: "bg-white/10",
      text: "text-white/60",
      border: "border-white/20"
    },
    indigo: {
      bg: "bg-white/10",
      text: "text-white",
      border: "border-white/30"
    },
    cyan: {
      bg: "bg-white/10",
      text: "text-white/70",
      border: "border-white/30"
    },
    rose: {
      bg: "bg-white/10",
      text: "text-white/70",
      border: "border-white/20"
    },
  };

  const classes = colorClasses[color] || colorClasses.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className={`${classes.bg} border ${classes.border} rounded-lg p-6 h-full`}
    >
      <div className="flex items-center mb-4">
        <div className="mr-3">
          <Icon className={`h-6 w-6 ${classes.text}`} />
        </div>
        <h3 className="text-xl font-semibold text-[var(--white)]">{title}</h3>
      </div>
      <p className="text-neutral-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className={`mr-2 ${classes.text}`}>•</span>
            <span className="text-neutral-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FeatureCard;
