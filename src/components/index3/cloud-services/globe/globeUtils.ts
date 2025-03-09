
import { ConnectionPoint, GeoCoordinate } from './types';

// Helper to convert lat/lon to x,y on the globe
export const latLongToPosition = (
  lat: number, 
  lon: number, 
  centerX: number, 
  centerY: number, 
  radius: number
): {x: number, y: number} => {
  // Convert to radians
  const latRad = (lat * Math.PI) / 180;
  const lonRad = (lon * Math.PI) / 180;
  
  // X coordinate
  const x = centerX + (radius * Math.cos(latRad) * Math.sin(lonRad * 0.5));
  
  // Y coordinate (we're viewing from above, so flatten the view)
  const y = centerY - (radius * Math.sin(latRad) * 0.5);
  
  return { x, y };
};

// Helper function to find a point by ID
export const findPointById = (points: ConnectionPoint[], id?: string): ConnectionPoint | undefined => {
  return id ? points.find(p => p.id === id) : undefined;
};
