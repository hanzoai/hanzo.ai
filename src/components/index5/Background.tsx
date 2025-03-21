
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
      
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-blue-900/10 opacity-40"></div>
      
      {/* Dynamic blueprint lines */}
      <BlueprintLine orientation="vertical" position="20%" color="rgba(147, 51, 234, 0.1)" />
      <BlueprintLine orientation="vertical" position="80%" color="rgba(147, 51, 234, 0.1)" />
      <BlueprintLine orientation="horizontal" position="25%" color="rgba(37, 99, 235, 0.1)" />
      <BlueprintLine orientation="horizontal" position="75%" color="rgba(37, 99, 235, 0.1)" />
    </div>
  );
};

export default Background;
