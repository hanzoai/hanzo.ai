
import React, { useEffect, useRef } from "react";

const ZenBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initialize canvas size
    setCanvasSize();
    
    // Update canvas size on resize
    window.addEventListener('resize', setCanvasSize);
    
    // Grid properties
    const gridSpacing = 50;
    const dotSize = 1;
    
    // Draw the grid
    const drawGrid = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(100, 100, 100, 0.05)';
      
      // Draw horizontal lines
      for (let y = 0; y < canvas.height; y += gridSpacing) {
        for (let x = 0; x < canvas.width; x += gridSpacing) {
          ctx.fillRect(x, y, dotSize, dotSize);
        }
      }
    };
    
    // Initial draw
    drawGrid();
    
    // Resize handler
    const handleResize = () => {
      setCanvasSize();
      drawGrid();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-50"
    />
  );
};

export default ZenBackground;
