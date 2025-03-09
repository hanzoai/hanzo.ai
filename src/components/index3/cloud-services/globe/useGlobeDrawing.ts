
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
    
    // Draw main globe circle with only half visible (viewed from angle) - more subtle
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(100, 150, 200, 0.2)'; // Reduced opacity
    ctx.lineWidth = 0.8; // Thinner line
    // Draw ellipse to represent 3D perspective of a globe
    ctx.ellipse(centerX, centerY, globeRadius, globeRadius * 0.6, 0, 0, Math.PI * 2);
    ctx.stroke();
    
    // Draw continents with subtle outlines - using a neutral gray-blue with reduced opacity
    ctx.strokeStyle = 'rgba(140, 160, 190, 0.15)'; // Reduced opacity
    ctx.lineWidth = 0.6; // Thinner line
    
    continents.forEach(continent => {
      if (continent.length > 0) {
        ctx.beginPath();
        
        // Move to first point
        const firstPoint = latLongToPosition(
          continent[0].lat, 
          continent[0].lon, 
          centerX, 
          centerY, 
          globeRadius,
          0.6 // Add vertical scale factor to create ellipse effect
        );
        
        ctx.moveTo(firstPoint.x, firstPoint.y);
        
        // Draw lines to remaining points
        for (let i = 1; i < continent.length; i++) {
          const point = latLongToPosition(
            continent[i].lat, 
            continent[i].lon, 
            centerX, 
            centerY, 
            globeRadius,
            0.6 // Add vertical scale factor to create ellipse effect
          );
          ctx.lineTo(point.x, point.y);
        }
        
        ctx.stroke();
        
        // Fill with very subtle blue-gray color - even more subtle
        ctx.fillStyle = 'rgba(120, 140, 180, 0.02)'; // Reduced opacity
        ctx.fill();
      }
    });
    
    // Draw fewer latitude lines for cleaner look - more subtle
    for (let i = 0; i < 2; i++) { // Reduced from 3 to 2 lines
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(130, 150, 180, 0.1)'; // Reduced opacity
      ctx.lineWidth = 0.4; // Thinner line
      const latRadius = globeRadius * Math.cos((i * 30 * Math.PI) / 180);
      ctx.ellipse(centerX, centerY, latRadius, latRadius * 0.6, 0, 0, Math.PI * 2);
      ctx.stroke();
    }
    
    // Draw fewer longitude lines for cleaner look - more subtle
    for (let i = 0; i < 6; i++) { // Reduced from 8 to 6 lines
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(130, 150, 180, 0.1)'; // Reduced opacity
      ctx.lineWidth = 0.4; // Thinner line
      const angle = (i * Math.PI) / 3;
      const startX = centerX + globeRadius * Math.cos(angle);
      const startY = centerY + (globeRadius * 0.6) * Math.sin(angle);
      const endX = centerX - globeRadius * Math.cos(angle);
      const endY = centerY - (globeRadius * 0.6) * Math.sin(angle);
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }
    
    // Draw city lights with pulsing effect - more subtle
    connectionPoints.forEach(point => {
      if (point.active) {
        const size = (point.size || 2) * 0.8; // Slightly smaller
        const intensity = (point.intensity || 1) * 0.7; // Reduced intensity
        
        // Outer glow - blue with reduced opacity
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, size * 2.5 // Smaller radius
        );
        gradient.addColorStop(0, `rgba(140, 200, 230, ${0.4 * intensity})`); // Reduced opacity
        gradient.addColorStop(1, 'rgba(100, 150, 200, 0)');
        
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(point.x, point.y, size * 2.5, 0, 2 * Math.PI);
        ctx.fill();
        
        // Center point - brighter blue with reduced opacity
        ctx.beginPath();
        ctx.fillStyle = `rgba(160, 220, 255, ${0.6 * intensity})`; // Reduced opacity
        ctx.arc(point.x, point.y, size * 0.6, 0, 2 * Math.PI);
        ctx.fill();
      }
    });
    
    // Draw traffic lines between cities - with reduced opacity
    connectionPoints.forEach(point => {
      if (point.connections && point.connections.length > 0) {
        // Limit to fewer visible connections at once
        const visibleConnections = point.connections.slice(0, 1); // Only one visible connection per point
        
        visibleConnections.forEach(conn => {
          const target = findPointById(connectionPoints, conn.targetId);
          if (!target) return;
          
          // Draw traffic animation with reduced opacity
          ctx.beginPath();
          
          // Calculate current position based on progress
          const currentX = point.x + (target.x - point.x) * conn.progress;
          const currentY = point.y + (target.y - point.y) * conn.progress;
          
          // Draw trail with improved opacity
          const trailLength = Math.min(conn.progress, 0.15); // Shorter trail (15% of total)
          const trailStartProgress = Math.max(0, conn.progress - trailLength);
          const trailStartX = point.x + (target.x - point.x) * trailStartProgress;
          const trailStartY = point.y + (target.y - point.y) * trailStartProgress;
          
          // Create gradient for trail with reduced opacity
          const gradient = ctx.createLinearGradient(trailStartX, trailStartY, currentX, currentY);
          gradient.addColorStop(0, 'rgba(100, 150, 200, 0)');
          
          // Softer colors with reduced opacity
          const color = conn.color || 'rgba(140, 200, 230, 0.4)'; // Reduced opacity
          gradient.addColorStop(1, color);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = (conn.size || 1) * 0.8; // Thinner line
          ctx.moveTo(trailStartX, trailStartY);
          ctx.lineTo(currentX, currentY);
          ctx.stroke();
          
          // Draw leading dot with reduced size and opacity
          ctx.beginPath();
          ctx.fillStyle = color;
          ctx.arc(currentX, currentY, (conn.size || 1) * 1.2, 0, 2 * Math.PI); // Smaller dot
          ctx.fill();
          
          // Draw very faint line for the full path - further reduced opacity
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(130, 150, 180, 0.03)'; // Reduced opacity
          ctx.lineWidth = 0.3; // Thinner line
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();
        });
      }
    });
    
  }, []);

  return { drawGlobe };
}
