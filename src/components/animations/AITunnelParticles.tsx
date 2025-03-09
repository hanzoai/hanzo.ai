
import React from "react";
import TrailGenerator from "./tunnel/TrailGenerator";
import ParticleGenerator from "./tunnel/ParticleGenerator";

const AITunnelParticles: React.FC = () => {
  // Configuration values
  const trailCount = 80; // Increased number of trails for denser effect
  const particleCount = 40; // More particles
  
  return (
    <div className="absolute inset-0 w-full h-full">
      <TrailGenerator trailCount={trailCount} />
      <ParticleGenerator particleCount={particleCount} />
    </div>
  );
};

export default AITunnelParticles;
