'use client'

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { ArrowRight, Github } from "lucide-react";
import { useRouter } from "next/navigation";

interface HeroButtonsProps {
  titleAnimationComplete: boolean;
}

const HeroButtons: React.FC<HeroButtonsProps> = ({ titleAnimationComplete }) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: titleAnimationComplete ? 1 : 0, y: titleAnimationComplete ? 0 : 20 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex flex-col sm:flex-row justify-center mt-6"
    >
      <Button 
        size="sm" 
        className="bg-white hover:bg-[#cccccc] text-[var(--white)] rounded-full px-4 py-2 h-10 min-w-[120px]"
        onClick={() => router.push('/signup')}
      >
        Get Started
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      
      <Button 
        size="sm" 
        variant="outline" 
        className="text-[var(--white)] border-gray-700 hover:bg-[var(--white)]/10 rounded-full px-4 py-2 h-10 min-w-[120px]"
        onClick={() => router.push('/philosophy')}
      >
        Zen of Hanzo
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      
      <Button 
        size="sm" 
        variant="outline" 
        className="text-[var(--white)] border-gray-700 hover:bg-[var(--white)]/10 rounded-full px-4 py-2 h-10 min-w-[120px]"
        onClick={() => window.open('https://github.com/hanzoai', '_blank')}
      >
        Star on GitHub
        <Github className="ml-2 h-4 w-4" />
      </Button>
    </motion.div>
  );
};

export default HeroButtons;