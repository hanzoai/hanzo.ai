
import React, { useState, useEffect, useRef } from "react";
import CloudHeader from "./CloudHeader";
import GlobalNetwork from "./GlobalNetwork";
import CloudServiceGrid from "./CloudServiceGrid";
import BackgroundEffects from "./BackgroundEffects";

const CloudServices = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [scanPoints, setScanPoints] = useState<Array<{ x: number; y: number; active: boolean }>>([]);
  
  // Initialize grid points for the scanning effect
  useEffect(() => {
    const points = [];
    const gridSize = 8;
    const cellSize = 100 / gridSize;
    
    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        // Skip some points to create a less uniform pattern
        if (Math.random() > 0.6) continue;
        
        points.push({
          x: x * cellSize + (Math.random() * cellSize * 0.6),
          y: y * cellSize + (Math.random() * cellSize * 0.6),
          active: false
        });
      }
    }
    
    setScanPoints(points);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Activate points sequentially for visual effect
  useEffect(() => {
    const activationSteps = [
      { delay: 1000, count: 5 },
      { delay: 2000, count: 12 },
      { delay: 3000, count: 20 },
      { delay: 4000, count: Number.MAX_SAFE_INTEGER } // activate all remaining
    ];

    activationSteps.forEach(({ delay, count }) => {
      setTimeout(() => {
        setScanPoints(prev => 
          prev.map((point, idx) => ({
            ...point,
            active: idx < count ? true : point.active
          }))
        );
      }, delay);
    });
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/50 relative overflow-hidden">
      <BackgroundEffects scanPoints={scanPoints} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <CloudHeader 
          mousePosition={mousePosition} 
          containerRef={containerRef} 
        />
        <GlobalNetwork />
        <CloudServiceGrid 
          isHovered={isHovered} 
          setIsHovered={setIsHovered} 
        />
      </div>
    </section>
  );
};

export default CloudServices;
