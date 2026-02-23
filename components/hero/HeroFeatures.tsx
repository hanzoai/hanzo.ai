'use client'


import React from "react";
import { motion } from "framer-motion";

interface HeroFeaturesProps {
  titleAnimationComplete: boolean;
}

const HeroFeatures: React.FC<HeroFeaturesProps> = ({ titleAnimationComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: titleAnimationComplete ? 1 : 0,
        y: titleAnimationComplete ? 0 : 20 
      }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      {/* Empty container that maintains the layout spacing */}
    </motion.div>
  );
};

export default HeroFeatures;
