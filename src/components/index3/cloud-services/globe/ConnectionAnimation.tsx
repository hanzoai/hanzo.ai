
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
        const nextDelay = 600; // Increased from 300 to 600ms
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
          const variation = (Math.sin(Date.now() / 1500 * (Math.random() * 0.2 + 0.2)) + 1) * 0.2 + 0.6; // Slower and less intense
          
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

  // Create traffic animation between cities - reduced frequency
  useEffect(() => {
    // Only start traffic animation when we have at least a few active points
    if (connectionPoints.filter(p => p.active).length < 3) return;
    
    const updateTraffic = () => {
      setConnectionPoints(prevPoints => {
        // Get all active points
        const activePoints = prevPoints.filter(p => p.active);
        if (activePoints.length < 3) return prevPoints;
        
        // Randomly create new connections - further reduced probability
        if (Math.random() < 0.01) { // Reduced from 0.02 to 0.01 (1% chance per frame)
          // Select random source and target
          const sourceIndex = Math.floor(Math.random() * activePoints.length);
          let targetIndex;
          do {
            targetIndex = Math.floor(Math.random() * activePoints.length);
          } while (targetIndex === sourceIndex);
          
          const source = activePoints[sourceIndex];
          const target = activePoints[targetIndex];
          
          // Limit maximum connections per point to prevent overcrowding - reduced
          if (source.connections && source.connections.length >= 1) { // Reduced from 2 to 1
            return prevPoints;
          }
          
          // Create a new traffic particle with blue colors - reduced opacity
          const newTraffic = {
            id: `traffic-${Date.now()}-${Math.random()}`,
            sourceId: source.id,
            targetId: target.id,
            progress: 0,
            speed: Math.random() * 0.006 + 0.003, // Slower speed
            color: Math.random() > 0.5 
              ? 'rgba(120, 180, 230, 0.4)' // Reduced opacity
              : 'rgba(100, 170, 255, 0.4)',  // Reduced opacity
            size: Math.random() * 0.8 + 0.5 // Smaller size
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
