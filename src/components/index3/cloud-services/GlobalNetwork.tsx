
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const GlobalNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Function declarations first, before they're used
  const drawGlobe = () => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    
    // Set colors and styles
    ctx.strokeStyle = '#8a50ff';
    ctx.lineWidth = 0.5;
    
    // Simple circular globe representation
    const centerX = canvasRef.current.width / 2;
    const centerY = canvasRef.current.height / 2;
    const radius = Math.min(centerX, centerY) * 0.6;
    
    // Draw the globe outline
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke();
    
    // Draw some latitude/longitude lines
    for (let i = 0; i < 5; i++) {
      // Latitude
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, radius, radius * 0.3 * (i/4), 0, 0, 2 * Math.PI);
      ctx.stroke();
      
      // Longitude
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, radius * 0.3 * (i/4), radius, Math.PI/2, 0, 2 * Math.PI);
      ctx.stroke();
    }
    
    // Add some connection points
    const points = [
      { x: centerX - radius * 0.7, y: centerY - radius * 0.2 },
      { x: centerX + radius * 0.5, y: centerY - radius * 0.5 },
      { x: centerX + radius * 0.7, y: centerY + radius * 0.3 },
      { x: centerX - radius * 0.4, y: centerY + radius * 0.6 },
    ];
    
    // Draw points
    points.forEach(point => {
      ctx.beginPath();
      ctx.fillStyle = '#9b87f5';
      ctx.arc(point.x, point.y, 3, 0, 2 * Math.PI);
      ctx.fill();
    });
    
    // Draw connections between points
    ctx.strokeStyle = '#9b87f5';
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 2]);
    
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        ctx.beginPath();
        ctx.moveTo(points[i].x, points[i].y);
        ctx.lineTo(points[j].x, points[j].y);
        ctx.stroke();
      }
    }
  };

  const setCanvasDimensions = () => {
    if (!canvasRef.current || !containerRef.current) return;
    
    const { width, height } = containerRef.current.getBoundingClientRect();
    
    canvasRef.current.width = width;
    canvasRef.current.height = height;
    
    // Now we can safely call drawGlobe since it's defined above
    drawGlobe();
  };

  // Initial setup and resize handling
  useEffect(() => {
    if (!canvasRef.current) return;
    
    setCanvasDimensions();
    setIsLoaded(true);
    
    const handleResize = () => {
      setCanvasDimensions();
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="mt-16 mb-12">
      <motion.div
        ref={containerRef}
        className="relative h-64 sm:h-96 w-full bg-black rounded-lg overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 opacity-50"></div>
        
        {/* Canvas for globe visualization */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full"
        />
        
        {/* Overlay text */}
        <div className="absolute inset-0 flex items-center justify-center text-center p-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Global Network</h3>
            <p className="text-gray-300 text-sm max-w-sm mx-auto">
              Deploy to 35+ regions around the world with 99.99% uptime SLA and automatic failover.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GlobalNetwork;
