
import { useCallback } from 'react';
import { ConnectionPoint } from './types';
import { continents } from './globeData';
import { latLongToPosition, findPointById } from './globeUtils';

export function useGlobeDrawing() {
  // Draw the globe and all its elements
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
    
    // Draw main globe circle - using soft blue
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(100, 150, 200, 0.4)';
    ctx.lineWidth = 1;
    ctx.arc(centerX, centerY, globeRadius, 0, 2 * Math.PI);
    ctx.stroke();
    
    // Draw continents with subtle outlines - using a neutral gray-blue
    ctx.strokeStyle = 'rgba(140, 160, 190, 0.3)';
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
        
        // Fill with very subtle blue-gray color
        ctx.fillStyle = 'rgba(120, 140, 180, 0.05)';
        ctx.fill();
      }
    });
    
    // Draw latitude lines - subtle gray-blue
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(130, 150, 180, 0.2)';
      ctx.lineWidth = 0.5;
      const latRadius = globeRadius * Math.cos((i * 15 * Math.PI) / 180);
      ctx.arc(centerX, centerY, latRadius, 0, 2 * Math.PI);
      ctx.stroke();
    }
    
    // Draw longitude lines - subtle gray-blue
    for (let i = 0; i < 12; i++) {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(130, 150, 180, 0.2)';
      ctx.lineWidth = 0.5;
      const angle = (i * Math.PI) / 6;
      ctx.moveTo(centerX, centerY);
      const endX = centerX + globeRadius * Math.cos(angle);
      const endY = centerY + globeRadius * Math.sin(angle);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }
    
    // Draw city lights with pulsing effect - using cyan-blue
    connectionPoints.forEach(point => {
      if (point.active) {
        const size = point.size || 2;
        const intensity = point.intensity || 1;
        
        // Outer glow - blue
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, size * 3
        );
        gradient.addColorStop(0, `rgba(140, 200, 230, ${0.7 * intensity})`);
        gradient.addColorStop(1, 'rgba(100, 150, 200, 0)');
        
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(point.x, point.y, size * 3, 0, 2 * Math.PI);
        ctx.fill();
        
        // Center point - brighter blue
        ctx.beginPath();
        ctx.fillStyle = `rgba(160, 220, 255, ${0.9 * intensity})`;
        ctx.arc(point.x, point.y, size * 0.7, 0, 2 * Math.PI);
        ctx.fill();
      }
    });
    
    // Draw traffic lines between cities
    connectionPoints.forEach(point => {
      if (point.connections && point.connections.length > 0) {
        point.connections.forEach(conn => {
          const target = findPointById(connectionPoints, conn.targetId);
          if (!target) return;
          
          // Draw traffic animation
          ctx.beginPath();
          
          // Calculate current position based on progress
          const currentX = point.x + (target.x - point.x) * conn.progress;
          const currentY = point.y + (target.y - point.y) * conn.progress;
          
          // Draw trail
          const trailLength = Math.min(conn.progress, 0.2); // Trail length is 20% of the total line
          const trailStartProgress = Math.max(0, conn.progress - trailLength);
          const trailStartX = point.x + (target.x - point.x) * trailStartProgress;
          const trailStartY = point.y + (target.y - point.y) * trailStartProgress;
          
          // Create gradient for trail
          const gradient = ctx.createLinearGradient(trailStartX, trailStartY, currentX, currentY);
          gradient.addColorStop(0, 'rgba(100, 150, 200, 0)');
          gradient.addColorStop(1, conn.color || 'rgba(140, 200, 230, 0.7)');
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = conn.size || 1;
          ctx.moveTo(trailStartX, trailStartY);
          ctx.lineTo(currentX, currentY);
          ctx.stroke();
          
          // Draw leading dot
          ctx.beginPath();
          ctx.fillStyle = conn.color || 'rgba(140, 200, 230, 0.7)';
          ctx.arc(currentX, currentY, (conn.size || 1) * 1.5, 0, 2 * Math.PI);
          ctx.fill();
          
          // Draw faint line for the full path
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(130, 150, 180, 0.1)';
          ctx.lineWidth = 0.5;
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();
        });
      }
    });
    
  }, []);

  return { drawGlobe };
}
