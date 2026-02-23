'use client'


import React from "react";
import { motion } from "framer-motion";

interface FeaturePoint {
  text: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  featurePoints: FeaturePoint[];
  delay: number;
  iconBgClass: string;
  iconTextClass: string;
  bulletColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  featurePoints,
  delay,
  iconBgClass,
  iconTextClass,
  bulletColor
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 h-full flex flex-col"
    >
      <div className={`w-12 h-12 rounded-lg ${iconBgClass} flex items-center justify-center mb-4`}>
        <div className={iconTextClass}>{icon}</div>
      </div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-neutral-400 mb-4 flex-grow">{description}</p>
      
      <ul className="space-y-2">
        {featurePoints.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className={`${bulletColor} mr-2 text-lg`}>•</span>
            <span className="text-sm text-neutral-300">{point.text}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FeatureCard;
