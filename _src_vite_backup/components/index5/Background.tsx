
import React from "react";
import { GridLines, BlueprintLine } from "@/components/ui/architectural-elements";

interface BackgroundProps {
  mousePosition: { x: number; y: number };
}

const Background: React.FC<BackgroundProps> = ({ mousePosition }) => {
  return (
    <div className="fixed inset-0 -z-10">
      <div 
        style={{
          transform: `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * 5}deg) rotateY(${(mousePosition.x - 0.5) * -5}deg)`,
          transition: "transform 0.1s ease-out"
        }}
      >
        <GridLines spacing={60} opacity={0.1} />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#fd4444]/10 to-[#ff6b6b]/10 opacity-40"></div>

      {/* Dynamic blueprint lines */}
      <BlueprintLine orientation="vertical" position="20%" color="rgba(253, 68, 68, 0.1)" />
      <BlueprintLine orientation="vertical" position="80%" color="rgba(253, 68, 68, 0.1)" />
      <BlueprintLine orientation="horizontal" position="25%" color="rgba(255, 107, 107, 0.1)" />
      <BlueprintLine orientation="horizontal" position="75%" color="rgba(255, 107, 107, 0.1)" />
    </div>
  );
};

export default Background;
