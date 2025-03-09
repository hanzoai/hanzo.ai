
import React from "react";
import Trail from "./Trail";

interface TrailGeneratorProps {
  trailCount: number;
}

const TrailGenerator: React.FC<TrailGeneratorProps> = ({ trailCount }) => {
  const trails = [];
  
  for (let i = 0; i < trailCount; i++) {
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const startZ = -2000;
    
    const endX = 50 + (Math.random() * 20 - 10); // Converging toward center
    const endY = 50 + (Math.random() * 20 - 10); // Converging toward center
    const endZ = 500;
    
    // Calculate length based on distance from center to create a star-field effect
    const distanceFromCenter = Math.sqrt(
      Math.pow((startX - 50), 2) + 
      Math.pow((startY - 50), 2)
    );
    
    const length = 100 + distanceFromCenter * 2; // Longer trails
    const opacity = 0.2 + Math.random() * 0.6; // Brighter trails
    const width = Math.random() * 2 + 0.5; // Varying widths
    
    trails.push(
      <Trail
        key={`trail-generator-${i}`}
        startX={startX}
        startY={startY}
        startZ={startZ}
        endX={endX}
        endY={endY}
        endZ={endZ}
        length={length}
        opacity={opacity}
        width={width}
        index={i}
      />
    );
  }
  
  return <>{trails}</>;
};

export default TrailGenerator;
