
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
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto features-highlights backdrop-blur-xl bg-black/40 py-5 px-4 rounded-xl border border-white/5"
    >
      <div className="text-center">
        <p className="text-sm font-medium text-purple-300">Customizable</p>
        <p className="text-xs text-gray-500">Pre-training to reality</p>
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-blue-300">Private</p>
        <p className="text-xs text-gray-500">Deploy anywhere</p>
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-emerald-300">Transparent</p>
        <p className="text-xs text-gray-500">Open-source focused</p>
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-amber-300">Trustworthy</p>
        <p className="text-xs text-gray-500">Human-centered AI</p>
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-rose-300">Engaging</p>
        <p className="text-xs text-gray-500">Hands-on solutions</p>
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-indigo-300">Delightful</p>
        <p className="text-xs text-gray-500">Beautiful interfaces</p>
      </div>
    </motion.div>
  );
};

export default HeroFeatures;
