
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
        size="lg" 
        variant="outline" 
        radius="full"
        className="text-lg px-8 py-6 text-white border-white/10 bg-transparent hover:bg-white/5"
      >
        <a href="https://docs.hanzo.sh" className="chrome-text flex items-center">
          Read Docs <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </Button>
      <Button 
        size="lg" 
        radius="full"
        className="text-lg px-8 py-6 bg-white hover:bg-gray-100 text-black border-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a href="https://hanzo.app">Start building</a>
      </Button>
    </div>
  );
};

export default HeroButtons;
