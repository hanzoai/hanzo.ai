
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface HeroButtonsProps {
  titleAnimationComplete: boolean;
}

const HeroButtons: React.FC<HeroButtonsProps> = ({ titleAnimationComplete }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
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
        className="text-lg px-8 vercel-button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a href="https://hanzo.app">Start building</a>
      </Button>
      <Button size="lg" variant="outline" className="text-lg px-8 text-white border-white/20 bg-white/5 hover:bg-white/10 docs-button">
        <a href="https://docs.hanzo.sh" className="gradient-text">Read Docs →</a>
      </Button>
    </div>
  );
};

export default HeroButtons;
