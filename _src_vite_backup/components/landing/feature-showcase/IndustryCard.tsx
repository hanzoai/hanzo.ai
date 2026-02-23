
import React from "react";
import { motion } from "framer-motion";

interface IndustryCardProps {
  name: string;
  description: string;
  index: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ name, description, index }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-gray-900/20 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all"
    >
      <h3 className="text-xl font-bold mb-3 text-[var(--white)]">{name}</h3>
      <p className="text-neutral-400">{description}</p>
    </motion.div>
  );
};

export default IndustryCard;
