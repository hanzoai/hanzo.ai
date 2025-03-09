
import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

type ConnectionPoint = {
  x: number;
  y: number;
  active: boolean;
};

interface CanvasContextProps {
  connectionPoints: ConnectionPoint[];
  setConnectionPoints: React.Dispatch<React.SetStateAction<ConnectionPoint[]>>;
  globeRadius: number;
  centerX: number;
  centerY: number;
  setCanvasContext: (ctx: CanvasRenderingContext2D) => void;
  drawGlobe: () => void;
  generateConnectionPoints: (width: number, height: number) => void;
}

const CanvasContext = createContext<CanvasContextProps | undefined>(undefined);

export const useCanvasContext = () => {
  const context = useContext(CanvasContext);
  if (!context) {
    throw new Error("useCanvasContext must be used within a CanvasProvider");
  }
  return context;
};

export const CanvasProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [connectionPoints, setConnectionPoints] = useState<ConnectionPoint[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // These values will be recalculated when dimensions change
  const centerX = dimensions.width / 2;
  const globeRadius = Math.min(dimensions.width / 2, dimensions.height * 3);
  const centerY = dimensions.height + (globeRadius * 0.6);

  const setCanvasContext = useCallback((context: CanvasRenderingContext2D) => {
    setCtx(context);
  }, []);

  const drawGlobe = useCallback(() => {
    if (!ctx) return;
    
    ctx.clearRect(0, 0, dimensions.width, dimensions.height);
    
    ctx.strokeStyle = '#8a50ff';
    ctx.lineWidth = 0.5;
    
    // Draw main globe circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, globeRadius, 0, 2 * Math.PI);
    ctx.stroke();
    
    // Draw latitude lines - only a few at the top of the globe
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      const latRadius = globeRadius * (0.9 - i * 0.15);
      // Ensure radius is always positive
      if (latRadius > 0) {
        ctx.ellipse(centerX, centerY, latRadius, Math.max(0.1, latRadius * 0.2), 0, -Math.PI, 0);
        ctx.stroke();
      }
    }
    
    // Draw longitude lines - only visible at the top
    for (let i = 0; i < 12; i++) {
      ctx.beginPath();
      const angle = (i / 12) * Math.PI;
      const cosAngle = Math.cos(angle);
      // Ensure both radiuses are positive
      const xRadius = Math.max(0.1, globeRadius * cosAngle);
      const yRadius = Math.max(0.1, globeRadius);
      
      ctx.ellipse(
        centerX, 
        centerY, 
        xRadius, 
        yRadius, 
        0, 
        -Math.PI/2, 
        Math.PI/2
      );
      ctx.stroke();
    }
    
    // Draw connection points
    connectionPoints.forEach(point => {
      if (point.active) {
        ctx.beginPath();
        ctx.fillStyle = '#9b87f5';
        ctx.arc(point.x, point.y, 3, 0, 2 * Math.PI);
        ctx.fill();
      }
    });
    
    // Draw connections between active points
    const activePoints = connectionPoints.filter(p => p.active);
    
    ctx.strokeStyle = '#9b87f5';
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 2]);
    
    for (let i = 0; i < activePoints.length; i++) {
      for (let j = i + 1; j < activePoints.length; j++) {
        const dx = activePoints[i].x - activePoints[j].x;
        const dy = activePoints[i].y - activePoints[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < globeRadius) {
          ctx.beginPath();
          ctx.moveTo(activePoints[i].x, activePoints[i].y);
          ctx.lineTo(activePoints[j].x, activePoints[j].y);
          ctx.stroke();
        }
      }
    }
  }, [ctx, centerX, centerY, globeRadius, connectionPoints, dimensions.width, dimensions.height]);

  const generateConnectionPoints = useCallback((width: number, height: number) => {
    setDimensions({ width, height });
    
    const newCenterX = width / 2;
    const newGlobeRadius = Math.min(width / 2, height * 3);
    const newCenterY = height + (newGlobeRadius * 0.6);
    
    const numPoints = 24;
    const newPoints: ConnectionPoint[] = [];
    
    // Create points only in the visible top portion of the globe
    for (let i = 0; i < numPoints; i++) {
      // Limit angle to the top portion of the circle (-π/2 to π/2)
      const angle = (Math.random() * Math.PI) - Math.PI/2;
      // Limit to the top portion of the visible globe area
      const r = Math.random() * newGlobeRadius * 0.5;
      const x = newCenterX + r * Math.cos(angle);
      const y = newCenterY + r * Math.sin(angle);
      
      // Only add points that would be visible
      if (y > 0 && y < height) {
        newPoints.push({
          x, 
          y,
          active: false
        });
      }
    }
    
    setConnectionPoints(newPoints);
  }, []);

  const value = {
    connectionPoints,
    setConnectionPoints,
    globeRadius,
    centerX,
    centerY,
    setCanvasContext,
    drawGlobe,
    generateConnectionPoints
  };

  return (
    <CanvasContext.Provider value={value}>
      {children}
    </CanvasContext.Provider>
  );
};
