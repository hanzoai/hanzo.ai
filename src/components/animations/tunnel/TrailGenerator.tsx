
import React from "react";
import Trail from "./Trail";

interface TrailGeneratorProps {
  trailCount: number;
}

const TrailGenerator: React.FC<TrailGeneratorProps> = ({ trailCount }) => {
  const trails = [];
  
  // Center point (vanishing point)
  const centerX = 50;
  const centerY = 50;
  
  for (let i = 0; i < trailCount; i++) {
    // Generate points around the edges of the viewport
    const angle = Math.random() * Math.PI * 2;
    const edgeDistance = 110; // Slightly beyond the viewport
    
    // Calculate start position at the edge of viewport
    const startX = centerX + Math.cos(angle) * edgeDistance;
    const startY = centerY + Math.sin(angle) * edgeDistance;
    const startZ = -2000;
    
    // All trails converge to the center (vanishing point)
    const endX = centerX;
    const endY = centerY;
    const endZ = 500;
    
    // Calculate length based on distance from center
    const distanceFromCenter = Math.sqrt(
      Math.pow((startX - centerX), 2) + 
      Math.pow((startY - centerY), 2)
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
