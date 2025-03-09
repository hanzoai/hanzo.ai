
import { useCallback } from 'react';
import { ConnectionPoint } from './types';
import { continents } from './globeData';
import { latLongToPosition, findPointById } from './globeUtils';

export function useGlobeDrawing() {
  // Draw the globe and all its elements with reduced intensity
  const drawGlobe = useCallback((
    ctx: CanvasRenderingContext2D | null, 
    dimensions: { width: number, height: number }, 
    connectionPoints: ConnectionPoint[],
    centerX: number,
    centerY: number,
    globeRadius: number
  ) => {
    if (!ctx) return;
    
    ctx.clearRect(0, 0, dimensions.width, dimensions.height);
    
    // Draw main globe circle - perfectly round top hemisphere
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(100, 150, 200, 0.15)'; // Reduced opacity
    ctx.lineWidth = 0.8; // Thinner line
    
    // Draw semi-circle for top hemisphere (perfectly round)
    ctx.arc(centerX, centerY, globeRadius, 0, Math.PI, true);
    ctx.stroke();
    
    // Draw continents with subtle outlines - using a neutral gray-blue with reduced opacity
    ctx.strokeStyle = 'rgba(140, 160, 190, 0.12)'; // Reduced opacity
    ctx.lineWidth = 0.5; // Thinner line
    
    continents.forEach(continent => {
      if (continent.length > 0) {
        ctx.beginPath();
        
        // Move to first point - only include points in top hemisphere
        const firstPoint = latLongToPosition(
          continent[0].lat, 
          continent[0].lon, 
          centerX, 
          centerY, 
          globeRadius,
          1 // Use 1 for perfect circle
        );
        
        // Only draw if point is in top hemisphere (y < centerY)
        if (firstPoint.y <= centerY) {
          ctx.moveTo(firstPoint.x, firstPoint.y);
          
          // Draw lines to remaining points
          for (let i = 1; i < continent.length; i++) {
            const point = latLongToPosition(
              continent[i].lat, 
              continent[i].lon, 
              centerX, 
              centerY, 
              globeRadius,
              1 // Use 1 for perfect circle
            );
            
            // Only connect if the point is in top hemisphere
            if (point.y <= centerY) {
              ctx.lineTo(point.x, point.y);
            }
          }
          
          ctx.stroke();
          
          // Fill with very subtle blue-gray color - even more subtle
          ctx.fillStyle = 'rgba(120, 140, 180, 0.015)'; // Reduced opacity
          ctx.fill();
        }
      }
    });
    
    // Draw fewer latitude lines for cleaner look - more subtle
    for (let i = 0; i < 2; i++) { // Reduced from 3 to 2 lines
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(130, 150, 180, 0.08)'; // Reduced opacity
      ctx.lineWidth = 0.4; // Thinner line
      
      // Only draw latitude lines in top hemisphere
      const latRadius = globeRadius * Math.cos((i * 30 * Math.PI) / 180);
      // Arc from 0 to PI (half circle for top hemisphere)
      ctx.arc(centerX, centerY, latRadius, 0, Math.PI, true);
      ctx.stroke();
    }
    
    // Draw fewer longitude lines for cleaner look - more subtle
    for (let i = 0; i < 5; i++) { // Reduced from 6 to 5 lines
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(130, 150, 180, 0.08)'; // Reduced opacity
      ctx.lineWidth = 0.4; // Thinner line
      
      const angle = (i * Math.PI) / 4;
      // Only draw line segments in top hemisphere
      const startX = centerX + globeRadius * Math.cos(angle);
      const startY = centerY - globeRadius * Math.sin(angle);
      
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(startX, startY);
      ctx.stroke();
    }
    
    // Draw city lights with pulsing effect - more subtle
    connectionPoints.forEach(point => {
      // Only draw points in top hemisphere (y < centerY)
      if (point.active && point.y <= centerY) {
        const size = (point.size || 2) * 0.7; // Slightly smaller
        const intensity = (point.intensity || 1) * 0.5; // Reduced intensity
        
        // Outer glow - blue with reduced opacity
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, size * 2
        );
        gradient.addColorStop(0, `rgba(140, 200, 230, ${0.3 * intensity})`); // Reduced opacity
        gradient.addColorStop(1, 'rgba(100, 150, 200, 0)');
        
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(point.x, point.y, size * 2, 0, 2 * Math.PI);
        ctx.fill();
        
        // Center point - brighter blue with reduced opacity
        ctx.beginPath();
        ctx.fillStyle = `rgba(160, 220, 255, ${0.5 * intensity})`; // Reduced opacity
        ctx.arc(point.x, point.y, size * 0.5, 0, 2 * Math.PI);
        ctx.fill();
      }
    });
    
    // Traffic lines have been completely removed to align with the ConnectionLines component change
    
  }, []);

  return { drawGlobe };
}
