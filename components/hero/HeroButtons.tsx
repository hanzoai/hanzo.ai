'use client'

import React, { useState } from "react";
import { Button } from "@hanzo/ui";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

interface HeroButtonsProps {
  titleAnimationComplete: boolean;
}

const HeroButtons: React.FC<HeroButtonsProps> = ({ titleAnimationComplete }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="mt-12 flex flex-col sm:flex-row gap-5 justify-center"
      style={{
        opacity: titleAnimationComplete ? 1 : 0,
        transform: titleAnimationComplete ? "translateY(0)" : "translateY(20px)",
        filter: titleAnimationComplete ? "blur(0px)" : "blur(8px)",
        transition: "opacity 0.4s ease, transform 0.4s ease, filter 0.4s ease",
        transitionDelay: "0.35s"
      }}
    >
      <Button 
        size="sm" 
        variant="outline" 
        radius="full"
        className="text-foreground border-border bg-transparent hover:bg-primary/5 h-10 min-w-[140px]"
      >
        <a href="/ai" className="chrome-text flex items-center">
          <Sparkles className="mr-2 h-4 w-4" />
          Our models
        </a>
      </Button>
      <Button 
        size="sm" 
        radius="full"
        className="bg-primary text-primary-foreground border border-gray-300 hover:bg-gray-100 hover:text-primary-foreground hover:border-gray-400 transition-all duration-300 h-10 min-w-[140px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a href="/zen" className="flex items-center">
          <Zap className="mr-2 h-4 w-4" />
          Our principles
        </a>
      </Button>
    </div>
  );
};

export default HeroButtons;