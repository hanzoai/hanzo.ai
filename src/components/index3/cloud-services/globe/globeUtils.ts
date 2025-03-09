
import { ConnectionPoint, GeoCoordinate } from './types';

// Helper to convert lat/lon to x,y on the globe
export const latLongToPosition = (
  lat: number, 
  lon: number, 
  centerX: number, 
  centerY: number, 
  radius: number,
  verticalScale: number = 1 // For controlling sphere vs ellipse shape
): {x: number, y: number} => {
  // Convert to radians
  const latRad = (lat * Math.PI) / 180;
  const lonRad = (lon * Math.PI) / 180;
  
  // Calculate positions with perfect circle proportions
  // Using full lon range (-180 to +180) for proper hemisphere view
  const x = centerX + (radius * Math.cos(latRad) * Math.sin(lonRad));
  
  // Y coordinate with vertical scaling - when verticalScale is 1, it's a perfect circle
  const y = centerY - (radius * Math.sin(latRad) * verticalScale);
  
  return { x, y };
};

// Helper function to find a point by ID
export const findPointById = (points: ConnectionPoint[], id?: string): ConnectionPoint | undefined => {
  return id ? points.find(p => p.id === id) : undefined;
};
