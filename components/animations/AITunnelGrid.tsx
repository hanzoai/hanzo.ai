
import React from "react";
import TunnelSegments from "./tunnel/TunnelSegments";
import TunnelStars from "./tunnel/TunnelStars";
import VanishingPoint from "./tunnel/VanishingPoint";

interface AITunnelGridProps {
  mousePosition: { x: number; y: number };
}

const AITunnelGrid: React.FC<AITunnelGridProps> = ({ mousePosition }) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Moving tunnel rings */}
      <TunnelSegments />
      
      {/* Stars flowing to center */}
      <TunnelStars starCount={100} />
      
      {/* Glowing center point (vanishing point) */}
      <VanishingPoint />
    </div>
  );
};

export default AITunnelGrid;
