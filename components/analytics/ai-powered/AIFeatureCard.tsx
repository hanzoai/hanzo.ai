'use client'


import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AIFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  index: number;
}

const AIFeatureCard = ({ icon, title, description, delay, index }: AIFeatureCardProps) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      key={index}
      variants={itemVariants}
      initial="hidden"
      animate="hidden"
      transition={{ duration: 0.5, delay }}
      className="bg-gradient-to-br from-gray-900/60 to-gray-900/40 rounded-xl p-8 border border-gray-800 hover:border-[#ffffff]/30 transition-colors group"
    >
      <div className="mb-5 transition-transform group-hover:scale-110 duration-300 transform-gpu">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-neutral-400">{description}</p>
    </motion.div>
  );
};

export default AIFeatureCard;
