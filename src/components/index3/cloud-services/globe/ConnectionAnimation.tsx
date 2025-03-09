
import { useEffect, useRef } from "react";
import { useCanvasContext } from "./CanvasContext";

const ConnectionAnimation = () => {
  const { setConnectionPoints, connectionPoints } = useCanvasContext();
  const animationRef = useRef<number | null>(null);
  const pulseRef = useRef<number | null>(null);

  // Activate city lights in sequence
  useEffect(() => {
    const activatePoints = () => {
      // Start with all points inactive
      setConnectionPoints(prevPoints => 
        prevPoints.map(p => ({ ...p, active: false }))
      );
      
      let activationIndex = 0;
      const totalPoints = connectionPoints.length;
      
      const activateNextBatch = () => {
        // Activate points in small batches
        const batchSize = Math.floor(Math.random() * 3) + 1;
        
        setConnectionPoints(prevPoints => {
          const newPoints = [...prevPoints];
          
          for (let i = 0; i < batchSize; i++) {
            const pointIndex = (activationIndex + i) % totalPoints;
            if (newPoints[pointIndex]) {
              newPoints[pointIndex] = { ...newPoints[pointIndex], active: true };
            }
          }
          
          return newPoints;
        });
        
        activationIndex = (activationIndex + batchSize) % totalPoints;
        
        // Continue activation with varied timing
        const nextDelay = Math.random() * 200 + 100;
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

  // Create pulsing effect for active points
  useEffect(() => {
    const updatePulse = () => {
      setConnectionPoints(prevPoints => 
        prevPoints.map(point => {
          if (!point.active) return point;
          
          // Create subtle pulsing effect by varying intensity
          const newIntensity = point.intensity || 1;
          const variation = (Math.sin(Date.now() / 1000 * (Math.random() + 0.5)) + 1) * 0.25 + 0.5;
          
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

  return null;
};

export default ConnectionAnimation;
