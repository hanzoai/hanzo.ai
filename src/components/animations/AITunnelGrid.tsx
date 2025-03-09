
import React from "react";
import PerspectiveRays from "./tunnel/PerspectiveRays";
import TunnelSegments from "./tunnel/TunnelSegments";
import TunnelStars from "./tunnel/TunnelStars";
import VanishingPoint from "./tunnel/VanishingPoint";

interface AITunnelGridProps {
  mousePosition: { x: number; y: number };
}

const AITunnelGrid: React.FC<AITunnelGridProps> = ({ mousePosition }) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Perspective rays - now horizontal converging to center */}
      <PerspectiveRays lineCount={36} />
      
      {/* Moving tunnel rings */}
      <TunnelSegments />
      
      {/* Stars flowing to center */}
      <TunnelStars starCount={80} />
      
      {/* Glowing center point (vanishing point) */}
      <VanishingPoint />
    </div>
  );
};

export default AITunnelGrid;
