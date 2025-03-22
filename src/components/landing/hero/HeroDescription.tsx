
import React from "react";
import { motion } from "framer-motion";

interface HeroDescriptionProps {
  titleAnimationComplete: boolean;
}

const HeroDescription: React.FC<HeroDescriptionProps> = ({ titleAnimationComplete }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: titleAnimationComplete ? 1 : 0, y: titleAnimationComplete ? 0 : 20 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-xl text-gray-300 max-w-3xl mx-auto mt-6"
    >
      A complete platform for developers to build, deploy, and scale AI applications
      with enterprise-grade reliability and open-source transparency.
    </motion.p>
  );
};

export default HeroDescription;
