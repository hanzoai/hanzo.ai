
import React from "react";
import TrailGenerator from "./tunnel/TrailGenerator";
import ParticleGenerator from "./tunnel/ParticleGenerator";

const AITunnelParticles: React.FC = () => {
  // Adjusted configuration values for better performance and smoother rendering
  const trailCount = 200; // Slightly reduced for better performance
  const particleCount = 140; // Slightly reduced for better performance
  
  return (
    <div className="absolute inset-0 w-full h-full">
      <TrailGenerator trailCount={trailCount} />
      <ParticleGenerator particleCount={particleCount} />
    </div>
  );
};

export default AITunnelParticles;
