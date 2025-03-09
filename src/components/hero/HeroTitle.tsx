
import React, { useRef } from "react";
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
  onTitleAnimationComplete
}) => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  const titleVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.15
      }
    }
  };
  
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.25,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
          AI Engineering Platform
        </div>
      </motion.div>
      
      <motion.h1 
        ref={headingRef}
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans tracking-tight text-white" 
        initial="hidden" 
        animate="visible" 
        variants={titleVariants} 
        onAnimationComplete={onAnimationComplete}
        style={{
          backgroundPosition: `${(mousePosition.x / (containerRef.current?.offsetWidth || 1)) * 100}% ${(mousePosition.y / (containerRef.current?.offsetHeight || 1)) * 100}%`,
        }}
      >
        <motion.span className="inline-flex items-center chrome-text">
          Accelerating AI
        </motion.span>
        
        <motion.span 
          className="block text-white pb-3 overflow-visible chrome-text" 
          initial="hidden" 
          animate={animationComplete ? "visible" : "hidden"} 
          variants={titleVariants} 
          onAnimationComplete={onTitleAnimationComplete}
        >
          For a Better Future
        </motion.span>
      </motion.h1>
    </>
  );
};

export default HeroTitle;
