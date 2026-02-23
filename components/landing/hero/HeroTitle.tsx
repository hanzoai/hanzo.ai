'use client'


import React from "react";
import { motion } from "framer-motion";

interface HeroTitleProps {
  mousePosition: { x: number; y: number };
  containerRef: React.RefObject<HTMLDivElement>;
  onAnimationComplete: () => void;
  animationComplete: boolean;
  onTitleAnimationComplete: () => void;
}

const HeroTitle: React.FC<HeroTitleProps> = ({
  mousePosition,
  containerRef,
  onAnimationComplete,
  animationComplete,
  onTitleAnimationComplete,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onAnimationComplete={() => {
        onAnimationComplete();
        onTitleAnimationComplete();
      }}
    >
      <div className="inline-block px-4 py-1 rounded-full bg-white/20 border border-white/30 text-white/70 text-sm font-medium mb-6">
        Open Source AI Engineering Platform
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
          Build As Fast
        </span>
        <br />
        <span 
          className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/15 to-white"
          style={{
            backgroundPosition: `${(mousePosition.x / (containerRef.current?.offsetWidth || 1)) * 100}% ${(mousePosition.y / (containerRef.current?.offsetHeight || 1)) * 100}%`,
          }}
        >
          As You Think
        </span>
      </h1>
    </motion.div>
  );
};

export default HeroTitle;
