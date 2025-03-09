
import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

type ConnectionPoint = {
  x: number;
  y: number;
  active: boolean;
  size?: number; // For city lights of varying sizes
  intensity?: number; // For pulsing effect
};

// Major city coordinates (simplified for visualization)
const majorCities = [
  { lat: 40.7128, lon: -74.0060, name: "New York", size: 4 },
  { lat: 51.5074, lon: -0.1278, name: "London", size: 4 },
  { lat: 35.6762, lon: 139.6503, name: "Tokyo", size: 4 },
  { lat: 22.3193, lon: 114.1694, name: "Hong Kong", size: 3 },
  { lat: 19.0760, lon: 72.8777, name: "Mumbai", size: 3 },
  { lat: -33.8688, lon: 151.2093, name: "Sydney", size: 3 },
  { lat: 1.3521, lon: 103.8198, name: "Singapore", size: 3 },
  { lat: 55.7558, lon: 37.6173, name: "Moscow", size: 3 },
  { lat: -23.5505, lon: -46.6333, name: "São Paulo", size: 3 },
  { lat: 48.8566, lon: 2.3522, name: "Paris", size: 3 },
  { lat: 37.7749, lon: -122.4194, name: "San Francisco", size: 2 },
  { lat: 39.9042, lon: 116.4074, name: "Beijing", size: 3 },
  { lat: 34.0522, lon: -118.2437, name: "Los Angeles", size: 3 },
  { lat: 41.9028, lon: 12.4964, name: "Rome", size: 2 },
  { lat: 52.5200, lon: 13.4050, name: "Berlin", size: 2 },
  { lat: -34.6037, lon: -58.3816, name: "Buenos Aires", size: 2 },
  { lat: 25.2048, lon: 55.2708, name: "Dubai", size: 3 },
  { lat: -6.2088, lon: 106.8456, name: "Jakarta", size: 2 },
  { lat: 30.0444, lon: 31.2357, name: "Cairo", size: 2 },
  { lat: 31.2304, lon: 121.4737, name: "Shanghai", size: 3 }
];

// Simplified continent outlines for visualization
const continents = [
  // North America (simplified outline)
  [
    { lat: 60, lon: -130 }, { lat: 70, lon: -90 }, { lat: 50, lon: -60 },
    { lat: 30, lon: -80 }, { lat: 25, lon: -100 }, { lat: 35, lon: -120 },
    { lat: 60, lon: -130 }
  ],
  // South America (simplified outline)
  [
    { lat: 10, lon: -80 }, { lat: 0, lon: -60 }, { lat: -20, lon: -40 },
    { lat: -40, lon: -70 }, { lat: -20, lon: -80 }, { lat: 10, lon: -80 }
  ],
  // Europe (simplified outline)
  [
    { lat: 60, lon: -10 }, { lat: 70, lon: 30 }, { lat: 45, lon: 40 },
    { lat: 35, lon: 30 }, { lat: 35, lon: -10 }, { lat: 60, lon: -10 }
  ],
  // Africa (simplified outline)
  [
    { lat: 35, lon: -10 }, { lat: 35, lon: 50 }, { lat: 0, lon: 50 },
    { lat: -35, lon: 20 }, { lat: 0, lon: -10 }, { lat: 35, lon: -10 }
  ],
  // Asia (simplified outline)
  [
    { lat: 70, lon: 30 }, { lat: 70, lon: 180 }, { lat: 0, lon: 110 },
    { lat: 0, lon: 50 }, { lat: 45, lon: 40 }, { lat: 70, lon: 30 }
  ],
  // Australia (simplified outline)
  [
    { lat: -10, lon: 110 }, { lat: -10, lon: 155 }, { lat: -40, lon: 155 },
    { lat: -40, lon: 110 }, { lat: -10, lon: 110 }
  ]
];

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

// Helper to convert lat/lon to x,y on the globe
const latLongToPosition = (lat: number, lon: number, centerX: number, centerY: number, radius: number): {x: number, y: number} => {
  // Convert to radians
  const latRad = (lat * Math.PI) / 180;
  const lonRad = (lon * Math.PI) / 180;
  
  // X coordinate
  const x = centerX + (radius * Math.cos(latRad) * Math.sin(lonRad * 0.5));
  
  // Y coordinate (we're viewing from above, so flatten the view)
  const y = centerY - (radius * Math.sin(latRad) * 0.5);
  
  return { x, y };
};

export const CanvasProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [connectionPoints, setConnectionPoints] = useState<ConnectionPoint[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // These values will be recalculated when dimensions change
  const centerX = dimensions.width / 2;
  const centerY = dimensions.height / 2;
  const globeRadius = Math.min(dimensions.width / 2, dimensions.height / 2) * 0.9;

  const setCanvasContext = useCallback((context: CanvasRenderingContext2D) => {
    setCtx(context);
  }, []);

  const drawGlobe = useCallback(() => {
    if (!ctx) return;
    
    ctx.clearRect(0, 0, dimensions.width, dimensions.height);
    
    // Draw main globe circle - more subtle blue for better visibility
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(100, 120, 255, 0.4)';
    ctx.lineWidth = 1;
    ctx.arc(centerX, centerY, globeRadius, 0, 2 * Math.PI);
    ctx.stroke();
    
    // Draw continents with subtle outlines
    ctx.strokeStyle = 'rgba(180, 190, 255, 0.3)';
    ctx.lineWidth = 1;
    
    continents.forEach(continent => {
      if (continent.length > 0) {
        ctx.beginPath();
        
        // Move to first point
        const firstPoint = latLongToPosition(
          continent[0].lat, 
          continent[0].lon, 
          centerX, 
          centerY, 
          globeRadius
        );
        
        ctx.moveTo(firstPoint.x, firstPoint.y);
        
        // Draw lines to remaining points
        for (let i = 1; i < continent.length; i++) {
          const point = latLongToPosition(
            continent[i].lat, 
            continent[i].lon, 
            centerX, 
            centerY, 
            globeRadius
          );
          ctx.lineTo(point.x, point.y);
        }
        
        ctx.stroke();
        
        // Fill with very subtle color
        ctx.fillStyle = 'rgba(100, 120, 255, 0.05)';
        ctx.fill();
      }
    });
    
    // Draw latitude lines - subtle
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(100, 120, 255, 0.2)';
      ctx.lineWidth = 0.5;
      const latRadius = globeRadius * Math.cos((i * 15 * Math.PI) / 180);
      ctx.arc(centerX, centerY, latRadius, 0, 2 * Math.PI);
      ctx.stroke();
    }
    
    // Draw longitude lines - subtle
    for (let i = 0; i < 12; i++) {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(100, 120, 255, 0.2)';
      ctx.lineWidth = 0.5;
      const angle = (i * Math.PI) / 6;
      ctx.moveTo(centerX, centerY);
      const endX = centerX + globeRadius * Math.cos(angle);
      const endY = centerY + globeRadius * Math.sin(angle);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }
    
    // Draw city lights with pulsing effect
    connectionPoints.forEach(point => {
      if (point.active) {
        const size = point.size || 2;
        const intensity = point.intensity || 1;
        
        // Outer glow
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, size * 3
        );
        gradient.addColorStop(0, `rgba(180, 200, 255, ${0.7 * intensity})`);
        gradient.addColorStop(1, 'rgba(100, 120, 255, 0)');
        
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(point.x, point.y, size * 3, 0, 2 * Math.PI);
        ctx.fill();
        
        // Center point
        ctx.beginPath();
        ctx.fillStyle = `rgba(220, 230, 255, ${0.9 * intensity})`;
        ctx.arc(point.x, point.y, size * 0.7, 0, 2 * Math.PI);
        ctx.fill();
      }
    });
    
    // Draw connection lines between some points
    if (connectionPoints.filter(p => p.active).length >= 2) {
      const activePoints = connectionPoints.filter(p => p.active);
      
      ctx.strokeStyle = 'rgba(140, 180, 255, 0.3)';
      ctx.lineWidth = 0.5;
      ctx.setLineDash([2, 3]);
      
      // Create a pattern of connections
      for (let i = 0; i < activePoints.length; i++) {
        for (let j = i + 1; j < activePoints.length; j++) {
          // Only connect some points (not all-to-all)
          if ((i + j) % 3 === 0) {
            ctx.beginPath();
            ctx.moveTo(activePoints[i].x, activePoints[i].y);
            ctx.lineTo(activePoints[j].x, activePoints[j].y);
            ctx.stroke();
          }
        }
      }
      
      ctx.setLineDash([]);
    }
  }, [ctx, centerX, centerY, globeRadius, connectionPoints, dimensions.width, dimensions.height]);

  const generateConnectionPoints = useCallback((width: number, height: number) => {
    setDimensions({ width, height });
    
    const newCenterX = width / 2;
    const newCenterY = height / 2;
    const newGlobeRadius = Math.min(width / 2, height / 2) * 0.9;
    
    // Create points based on major cities
    const newPoints: ConnectionPoint[] = majorCities.map(city => {
      const position = latLongToPosition(
        city.lat, 
        city.lon, 
        newCenterX, 
        newCenterY, 
        newGlobeRadius
      );
      
      return {
        x: position.x,
        y: position.y,
        active: false,
        size: city.size,
        intensity: Math.random() * 0.5 + 0.5 // Random initial intensity
      };
    });
    
    // Add some random points for smaller cities
    for (let i = 0; i < 30; i++) {
      // Random lat/lon
      const lat = (Math.random() * 140) - 70; // -70 to 70
      const lon = (Math.random() * 360) - 180; // -180 to 180
      
      const position = latLongToPosition(
        lat, 
        lon, 
        newCenterX, 
        newCenterY, 
        newGlobeRadius
      );
      
      newPoints.push({
        x: position.x,
        y: position.y,
        active: false,
        size: Math.random() * 1.5 + 0.5, // Random size for smaller cities
        intensity: Math.random() * 0.5 + 0.5
      });
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
