'use client'


import { useCallback } from 'react';
import { ConnectionPoint } from './types';
import { majorCities } from './globeData';
import { latLongToPosition } from './globeUtils';

export function useConnectionPoints() {
  // Generate connection points based on the canvas dimensions
  const generateConnectionPoints = useCallback((
    width: number, 
    height: number,
    newCenterX: number,
    newCenterY: number,
    newGlobeRadius: number
  ): ConnectionPoint[] => {
    // Create points based on major cities
    const newPoints: ConnectionPoint[] = majorCities.map((city, index) => {
      const position = latLongToPosition(
        city.lat, 
        city.lon, 
        newCenterX, 
        newCenterY, 
        newGlobeRadius
      );
      
      return {
        id: `city-${index}`,
        x: position.x,
        y: position.y,
        active: false,
        size: city.size,
        intensity: Math.random() * 0.5 + 0.5, // Random initial intensity
        connections: []
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
        id: `random-${i}`,
        x: position.x,
        y: position.y,
        active: false,
        size: Math.random() * 1.5 + 0.5, // Random size for smaller cities
        intensity: Math.random() * 0.5 + 0.5,
        connections: []
      });
    }
    
    return newPoints;
  }, []);

  return { generateConnectionPoints };
}
