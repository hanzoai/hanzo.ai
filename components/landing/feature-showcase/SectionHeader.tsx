'use client'


import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ badge, badgeColor, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <div className={`inline-block px-4 py-1 rounded-full ${badgeColor} text-sm font-medium mb-6`}>
        {badge}
      </div>
      <h3 className="text-3xl font-bold text-[var(--white)] mb-6">
        {title}
      </h3>
      <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
};

export default SectionHeader;
