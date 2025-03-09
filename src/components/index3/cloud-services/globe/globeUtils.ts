
import { ConnectionPoint, GeoCoordinate } from './types';

// Helper to convert lat/lon to x,y on the globe
export const latLongToPosition = (
  lat: number, 
  lon: number, 
  centerX: number, 
  centerY: number, 
  radius: number,
  verticalScale: number = 1 // Added parameter for vertical scaling
): {x: number, y: number} => {
  // Convert to radians
  const latRad = (lat * Math.PI) / 180;
  const lonRad = (lon * Math.PI) / 180;
  
  // X coordinate - making visible half of longitude (-90 to +90 degrees)
  // This creates a half-globe effect viewed from one side
  const x = centerX + (radius * Math.cos(latRad) * Math.sin(lonRad * 0.5));
  
  // Y coordinate with vertical scaling for elliptical effect
  const y = centerY - (radius * Math.sin(latRad) * verticalScale);
  
  return { x, y };
};

// Helper function to find a point by ID
export const findPointById = (points: ConnectionPoint[], id?: string): ConnectionPoint | undefined => {
  return id ? points.find(p => p.id === id) : undefined;
};
