
import React from "react";
import { motion } from "framer-motion";
import { heroData } from "./hero-data";

interface HeroFeaturesProps {
  titleAnimationComplete: boolean;
}

const HeroFeatures: React.FC<HeroFeaturesProps> = ({ titleAnimationComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={titleAnimationComplete ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
    >
      {heroData.stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={titleAnimationComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
          className="bg-[var(--white)]/5 backdrop-blur-sm border border-[var(--white)]/10 rounded-xl p-4 text-center"
        >
          <div className="text-2xl md:text-3xl font-bold text-[var(--white)]">{stat.value}</div>
          <div className="text-sm text-neutral-400">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroFeatures;
