'use client'


import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeaturePoint {
  text: string;
}

interface AIFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  featurePoints: FeaturePoint[];
  delay: number;
  iconBgClass: string;
  iconTextClass: string;
  bulletColor: string;
}

const AIFeatureCard = ({
  icon,
  title,
  description,
  featurePoints,
  delay,
  iconBgClass,
  iconTextClass,
  bulletColor,
}: AIFeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: title.includes("Vector") || title.includes("AI-Enhanced") ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-900/20 border border-gray-800 rounded-lg p-6"
    >
      <div className="flex items-center mb-6">
        <div className="flex-shrink-0">
          <div className={`flex items-center justify-center h-12 w-12 rounded-lg ${iconBgClass} ${iconTextClass}`}>
            {icon}
          </div>
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-[var(--white)]">{title}</h3>
        </div>
      </div>
      <p className="text-neutral-300 mb-6">
        {description}
      </p>
      <ul className="space-y-3">
        {featurePoints.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className={`${bulletColor} mr-2`}>•</span>
            <span className="text-neutral-300">{point.text}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default AIFeatureCard;
