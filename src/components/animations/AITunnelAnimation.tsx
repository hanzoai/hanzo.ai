
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import AITunnelGrid from "./AITunnelGrid";
import AITunnelParticles from "./AITunnelParticles";
import AITunnelContent from "./AITunnelContent";

interface AITunnelAnimationProps {
  title?: string;
  subtitle?: string;
  showButtons?: boolean;
}

const AITunnelAnimation: React.FC<AITunnelAnimationProps> = ({
  title = "Accelerating AI Future",
  subtitle = "The platform for modern AI applications",
  showButtons = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [rotationOffset, setRotationOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        
        // Calculate normalized position (0-1) within container
        const normalizedX = (e.clientX - rect.left) / rect.width;
        const normalizedY = (e.clientY - rect.top) / rect.height;
        
        setMousePosition({ x: normalizedX, y: normalizedY });
        
        // Update rotation if dragging
        if (isDragging) {
          setRotationOffset(prev => ({
            x: prev.x + e.movementY * 0.1,
            y: prev.y - e.movementX * 0.1
          }));
        }
      }
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-black"
      style={{ perspective: "1000px", cursor: isDragging ? "grabbing" : "grab" }}
    >
      {/* 3D Container */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          transformStyle: "preserve-3d",
          rotateX: rotationOffset.x,
          rotateY: rotationOffset.y,
          translateZ: "-500px"
        }}
        animate={{ 
          translateZ: [-500, -400], 
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        {/* Background Grid */}
        <AITunnelGrid mousePosition={mousePosition} />
        
        {/* Floating Particles */}
        <AITunnelParticles />
        
        {/* Centered Content */}
        <AITunnelContent 
          title={title}
          subtitle={subtitle}
          showButtons={showButtons}
        />
      </motion.div>
    </div>
  );
};

export default AITunnelAnimation;
