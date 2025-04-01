
import React from "react";
import { motion } from "framer-motion";
import { heroData } from "./hero-data";

interface HeroDescriptionProps {
  titleAnimationComplete: boolean;
}

const HeroDescription: React.FC<HeroDescriptionProps> = ({ titleAnimationComplete }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={titleAnimationComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-8"
    >
      {heroData.description}
    </motion.p>
  );
};

export default HeroDescription;
