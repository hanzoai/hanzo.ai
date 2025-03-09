
import { useEffect, useRef } from "react";
import { useCanvasContext } from "./CanvasContext";

const ConnectionAnimation = () => {
  const { setConnectionPoints, connectionPoints } = useCanvasContext();
  const animationRef = useRef<number | null>(null);
  const pulseRef = useRef<number | null>(null);
  const trafficRef = useRef<number | null>(null);

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
              newPoints[pointIndex] = { 
                ...newPoints[pointIndex], 
                active: true,
                // Initialize connection properties for the point
                connections: newPoints[pointIndex].connections || []
              };
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

  // Create traffic animation between cities
  useEffect(() => {
    // Only start traffic animation when we have at least a few active points
    if (connectionPoints.filter(p => p.active).length < 3) return;
    
    const updateTraffic = () => {
      setConnectionPoints(prevPoints => {
        // Get all active points
        const activePoints = prevPoints.filter(p => p.active);
        if (activePoints.length < 3) return prevPoints;
        
        // Randomly create new connections
        if (Math.random() < 0.05) { // 5% chance each frame to create a new connection
          // Select random source and target
          const sourceIndex = Math.floor(Math.random() * activePoints.length);
          let targetIndex;
          do {
            targetIndex = Math.floor(Math.random() * activePoints.length);
          } while (targetIndex === sourceIndex);
          
          const source = activePoints[sourceIndex];
          const target = activePoints[targetIndex];
          
          // Create a new traffic particle with blue colors
          const newTraffic = {
            id: `traffic-${Date.now()}-${Math.random()}`,
            sourceId: source.id,
            targetId: target.id,
            progress: 0,
            speed: Math.random() * 0.01 + 0.005, // Random speed
            // Using blue colors instead of purple
            color: Math.random() > 0.5 
              ? 'rgba(120, 180, 230, 0.7)' // Light blue
              : 'rgba(100, 170, 255, 0.7)',  // Bright blue
            size: Math.random() * 1.2 + 0.8
          };
          
          // Add traffic to the source point's connections
          return prevPoints.map(p => {
            if (p.id === source.id) {
              return {
                ...p,
                connections: [...(p.connections || []), newTraffic]
              };
            }
            return p;
          });
        }
        
        // Update existing traffic connections
        return prevPoints.map(point => {
          if (!point.connections || point.connections.length === 0) return point;
          
          // Update progress of each connection
          const updatedConnections = point.connections.filter(conn => {
            // Remove completed traffic
            return conn.progress < 1;
          }).map(conn => ({
            ...conn,
            progress: conn.progress + conn.speed
          }));
          
          return {
            ...point,
            connections: updatedConnections
          };
        });
      });
      
      trafficRef.current = requestAnimationFrame(updateTraffic);
    };
    
    trafficRef.current = requestAnimationFrame(updateTraffic);
    
    return () => {
      if (trafficRef.current !== null) {
        cancelAnimationFrame(trafficRef.current);
      }
    };
  }, [connectionPoints, setConnectionPoints]);

  return null;
};

export default ConnectionAnimation;
