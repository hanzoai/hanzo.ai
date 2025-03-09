
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
      
      // Limit total number of active points to prevent overcrowding
      const maxActivePoints = Math.min(10, totalPoints);
      let activeCount = 0;
      
      const activateNextBatch = () => {
        if (activeCount >= maxActivePoints) {
          // When we reach max active points, just maintain and pulse them
          animationRef.current = setTimeout(activateNextBatch, 1000) as unknown as number;
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
        
        // Continue activation with consistent timing
        const nextDelay = 300;
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
          const variation = (Math.sin(Date.now() / 1000 * (Math.random() * 0.3 + 0.3)) + 1) * 0.25 + 0.5;
          
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
        
        // Randomly create new connections - reduced probability
        if (Math.random() < 0.02) { // 2% chance each frame to create a new connection
          // Select random source and target
          const sourceIndex = Math.floor(Math.random() * activePoints.length);
          let targetIndex;
          do {
            targetIndex = Math.floor(Math.random() * activePoints.length);
          } while (targetIndex === sourceIndex);
          
          const source = activePoints[sourceIndex];
          const target = activePoints[targetIndex];
          
          // Limit maximum connections per point to prevent overcrowding
          if (source.connections && source.connections.length >= 2) {
            return prevPoints;
          }
          
          // Create a new traffic particle with blue colors
          const newTraffic = {
            id: `traffic-${Date.now()}-${Math.random()}`,
            sourceId: source.id,
            targetId: target.id,
            progress: 0,
            speed: Math.random() * 0.008 + 0.004, // Slightly slower for smoother animation
            color: Math.random() > 0.5 
              ? 'rgba(120, 180, 230, 0.7)' // Light blue
              : 'rgba(100, 170, 255, 0.7)',  // Bright blue
            size: Math.random() * 1 + 0.6
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
