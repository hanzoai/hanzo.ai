
import React from "react";
import { motion } from "framer-motion";

interface HeroDescriptionProps {
  titleAnimationComplete: boolean;
}

const HeroDescription: React.FC<HeroDescriptionProps> = ({ titleAnimationComplete }) => {
  return (
    <motion.p 
      initial={{
        opacity: 0,
        y: 20,
        filter: "blur(8px)"
      }} 
      animate={{
        opacity: titleAnimationComplete ? 1 : 0,
        y: titleAnimationComplete ? 0 : 20,
        filter: titleAnimationComplete ? "blur(0px)" : "blur(8px)"
      }} 
      transition={{
        duration: 0.4,
        delay: 0.25
      }} 
      className="mt-8 text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed tracking-wide"
    >
      Your AI future belongs in your hands. With Hanzo, pioneer a new era of intelligence with customizable, 
      private, transparent, and trusted AI solutions that empower all humans to build what was once impossible.
    </motion.p>
  );
};

export default HeroDescription;
