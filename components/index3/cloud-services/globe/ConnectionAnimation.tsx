'use client'


import { useEffect, useRef } from "react";
import { useCanvasContext } from "./CanvasContext";

const ConnectionAnimation = () => {
  const { setConnectionPoints, connectionPoints } = useCanvasContext();
  const animationRef = useRef<number | null>(null);
  const pulseRef = useRef<number | null>(null);
  const trafficRef = useRef<number | null>(null);

  // Activate city lights in sequence - slower and fewer
  useEffect(() => {
    const activatePoints = () => {
      // Start with all points inactive
      setConnectionPoints(prevPoints => 
        prevPoints.map(p => ({ ...p, active: false }))
      );
      
      let activationIndex = 0;
      const totalPoints = connectionPoints.length;
      
      // Limit total number of active points to prevent overcrowding - reduced
      const maxActivePoints = Math.min(8, totalPoints); // Reduced from 10 to 8
      let activeCount = 0;
      
      const activateNextBatch = () => {
        if (activeCount >= maxActivePoints) {
          // When we reach max active points, just maintain and pulse them
          animationRef.current = setTimeout(activateNextBatch, 1500) as unknown as number; // Increased delay
          return;
        }
        
        // Activate one point at a time for cleaner appearance
        const batchSize = 1;
        
        setConnectionPoints(prevPoints => {
          const newPoints = [...prevPoints];
          
          for (let i = 0; i < batchSize; i++) {
            const pointIndex = (activationIndex + i) % totalPoints;
            if (newPoints[pointIndex] && !newPoints[pointIndex].active) {
              newPoints[pointIndex] = { 
                ...newPoints[pointIndex], 
                active: true,
                // Initialize connection properties for the point
                connections: newPoints[pointIndex].connections || []
              };
              activeCount++;
            }
          }
          
          return newPoints;
        });
        
        activationIndex = (activationIndex + batchSize) % totalPoints;
        
        // Continue activation with consistent timing - slower
        const nextDelay = 800; // Increased from 600 to 800ms
        animationRef.current = setTimeout(activateNextBatch, nextDelay) as unknown as number;
      };
      
      // Start activation sequence
      activateNextBatch();
    };
    
    // Start activating points
    activatePoints();
    
    return () => {
      if (animationRef.current !== null) {
        clearTimeout(animationRef.current);
      }
    };
  }, [setConnectionPoints, connectionPoints.length]);

  // Create pulsing effect for active points - slower
  useEffect(() => {
    const updatePulse = () => {
      setConnectionPoints(prevPoints => 
        prevPoints.map(point => {
          if (!point.active) return point;
          
          // Create subtle pulsing effect by varying intensity - gentler variation
          const variation = (Math.sin(Date.now() / 2000 * (Math.random() * 0.15 + 0.15)) + 1) * 0.15 + 0.7; // Slower and less intense
          
          return {
            ...point,
            intensity: variation
          };
        })
      );
      
      pulseRef.current = requestAnimationFrame(updatePulse);
    };
    
    pulseRef.current = requestAnimationFrame(updatePulse);
    
    return () => {
      if (pulseRef.current !== null) {
        cancelAnimationFrame(pulseRef.current);
      }
    };
  }, [setConnectionPoints]);

  // Traffic animation has been completely removed to align with the requirement

  return null;
};

export default ConnectionAnimation;
