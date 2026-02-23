'use client'


import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PlatformFeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

const PlatformFeatureCard: React.FC<PlatformFeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  index,
}) => {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
      className="bg-gray-900/20 border border-gray-800 rounded-xl p-6"
    >
      <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-foreground" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-[var(--white)]">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default PlatformFeatureCard;
