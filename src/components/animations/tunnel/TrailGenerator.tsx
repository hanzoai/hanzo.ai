
import React from "react";
import Trail from "./Trail";

interface TrailGeneratorProps {
  trailCount: number;
}

const TrailGenerator: React.FC<TrailGeneratorProps> = ({ trailCount }) => {
  const trails = [];
  
  for (let i = 0; i < trailCount; i++) {
    trails.push(<Trail key={`trail-${i}`} index={i} />);
  }
  
  return <>{trails}</>;
};

export default TrailGenerator;
