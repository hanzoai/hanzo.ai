'use client'


import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--white)]">{title}</h2>
      <div className="h-1 w-20 bg-[#ffffff] mx-auto mb-6"></div>
      {description && (
        <p className="text-neutral-300 md:text-lg max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
