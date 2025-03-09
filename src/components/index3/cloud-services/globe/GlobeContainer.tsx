
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useCanvasContext } from "./CanvasContext";
import Canvas from "./Canvas";
import ConnectionAnimation from "./ConnectionAnimation";

const GlobeContainer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const { generateConnectionPoints, drawGlobe } = useCanvasContext();

  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateDimensions = () => {
      if (!containerRef.current) return;
      
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDimensions({ width, height });
      generateConnectionPoints(width, height);
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [generateConnectionPoints]);

  // Start animation loop
  useEffect(() => {
    const animate = () => {
      drawGlobe();
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [drawGlobe]);

  return (
    <motion.div
      ref={containerRef}
      className="relative h-80 w-full bg-black rounded-lg overflow-hidden mt-16 mb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 opacity-50"></div>
      
      {dimensions.width > 0 && dimensions.height > 0 && (
        <Canvas width={dimensions.width} height={dimensions.height} />
      )}
      
      <ConnectionAnimation />
      
      <div className="absolute inset-0 flex items-center justify-center text-center p-4">
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-white mb-2">Global Network</h3>
          <p className="text-gray-300 text-sm max-w-sm mx-auto">
            Deploy to 35+ regions around the world with 99.99% uptime SLA and automatic failover.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default GlobeContainer;
