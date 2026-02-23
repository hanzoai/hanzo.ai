
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
  
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {trails}
    </div>
  );
};

export default TrailGenerator;
