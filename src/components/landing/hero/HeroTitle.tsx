
import React from "react";
import { motion } from "framer-motion";
import ChromeText from "@/components/ui/chrome-text";
import { heroData } from "./hero-data";

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
  onTitleAnimationComplete
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={onAnimationComplete}
      className="mb-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6"
      >
        Enterprise-Grade · Open Source · AI-Native
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={onTitleAnimationComplete}
      >
        <ChromeText 
          as="h1" 
          className="text-5xl md:text-7xl font-bold mb-6"
          style={{
            backgroundPosition: `${(mousePosition.x / (containerRef.current?.offsetWidth || 1)) * 100}% ${(mousePosition.y / (containerRef.current?.offsetHeight || 1)) * 100}%`,
          }}
        >
          {heroData.title}
        </ChromeText>
      </motion.div>
    </motion.div>
  );
};

export default HeroTitle;
