
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const GlobalNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [connectionPoints, setConnectionPoints] = useState<{x: number, y: number, active: boolean}[]>([]);
  const animationRef = useRef<number | null>(null);

  const drawGlobe = () => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    
    ctx.strokeStyle = '#8a50ff';
    ctx.lineWidth = 0.5;
    
    // Only show the top 33% of the globe by positioning it lower
    const centerX = canvasRef.current.width / 2;
    const globeRadius = Math.min(canvasRef.current.width / 2, canvasRef.current.height * 3);
    // Position globe lower to only show top portion
    const centerY = canvasRef.current.height + (globeRadius * 0.6);
    
    // Draw main globe circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, globeRadius, 0, 2 * Math.PI);
    ctx.stroke();
    
    // Draw latitude lines - only a few at the top of the globe
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      const latRadius = globeRadius * (0.9 - i * 0.15);
      // Ensure radius is always positive
      if (latRadius > 0) {
        ctx.ellipse(centerX, centerY, latRadius, Math.max(0.1, latRadius * 0.2), 0, -Math.PI, 0);
        ctx.stroke();
      }
    }
    
    // Draw longitude lines - only visible at the top
    for (let i = 0; i < 12; i++) {
      ctx.beginPath();
      const angle = (i / 12) * Math.PI;
      const cosAngle = Math.cos(angle);
      // Ensure both radiuses are positive
      const xRadius = Math.max(0.1, globeRadius * cosAngle);
      const yRadius = Math.max(0.1, globeRadius);
      
      ctx.ellipse(
        centerX, 
        centerY, 
        xRadius, 
        yRadius, 
        0, 
        -Math.PI/2, 
        Math.PI/2
      );
      ctx.stroke();
    }
    
    // Draw connection points
    connectionPoints.forEach(point => {
      if (point.active) {
        ctx.beginPath();
        ctx.fillStyle = '#9b87f5';
        ctx.arc(point.x, point.y, 3, 0, 2 * Math.PI);
        ctx.fill();
      }
    });
    
    // Draw connections between active points
    const activePoints = connectionPoints.filter(p => p.active);
    
    ctx.strokeStyle = '#9b87f5';
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 2]);
    
    for (let i = 0; i < activePoints.length; i++) {
      for (let j = i + 1; j < activePoints.length; j++) {
        const dx = activePoints[i].x - activePoints[j].x;
        const dy = activePoints[i].y - activePoints[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < globeRadius) {
          ctx.beginPath();
          ctx.moveTo(activePoints[i].x, activePoints[i].y);
          ctx.lineTo(activePoints[j].x, activePoints[j].y);
          ctx.stroke();
        }
      }
    }
  };

  const setCanvasDimensions = () => {
    if (!canvasRef.current || !containerRef.current) return;
    
    const { width, height } = containerRef.current.getBoundingClientRect();
    
    canvasRef.current.width = width;
    canvasRef.current.height = height;
    
    const numPoints = 24; // More connection points for a busier network
    const newPoints = [];
    
    const centerX = width / 2;
    // Larger globe radius to ensure it fills the width
    const globeRadius = Math.min(width / 2, height * 3);
    // Position globe lower to only show top portion
    const centerY = height + (globeRadius * 0.6);
    
    // Create points only in the visible top portion of the globe
    for (let i = 0; i < numPoints; i++) {
      // Limit angle to the top portion of the circle (-π/2 to π/2)
      const angle = (Math.random() * Math.PI) - Math.PI/2;
      // Limit to the top portion of the visible globe area
      const r = Math.random() * globeRadius * 0.5;
      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);
      
      // Only add points that would be visible
      if (y > 0 && y < height) {
        newPoints.push({
          x, 
          y,
          active: false
        });
      }
    }
    
    setConnectionPoints(newPoints);
    drawGlobe();
  };

  const animateConnections = () => {
    let activationIndex = 0;
    
    const activatePoints = () => {
      if (activationIndex < connectionPoints.length) {
        setConnectionPoints(prevPoints => {
          const newPoints = [...prevPoints];
          if (newPoints[activationIndex]) {
            newPoints[activationIndex] = { ...newPoints[activationIndex], active: true };
          }
          return newPoints;
        });
        
        activationIndex++;
        animationRef.current = setTimeout(activatePoints, 200) as unknown as number;
      } else {
        setTimeout(() => {
          setConnectionPoints(prevPoints => prevPoints.map(p => ({ ...p, active: false })));
          activationIndex = 0;
          animationRef.current = setTimeout(activatePoints, 1000) as unknown as number;
        }, 3000);
      }
    };
    
    animationRef.current = setTimeout(activatePoints, 500) as unknown as number;
  };

  useEffect(() => {
    if (!canvasRef.current) return;
    
    setCanvasDimensions();
    setIsLoaded(true);
    
    const handleResize = () => {
      setCanvasDimensions();
    };
    
    window.addEventListener('resize', handleResize);
    
    animateConnections();
    
    // Animation loop to continuously redraw
    const animate = () => {
      drawGlobe();
      requestAnimationFrame(animate);
    };
    
    requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current !== null) {
        clearTimeout(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    drawGlobe();
  }, [connectionPoints]);

  return (
    <div className="my-16">
      <motion.div
        ref={containerRef}
        className="relative h-56 w-full bg-black rounded-lg overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 opacity-50"></div>
        
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full"
        />
        
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
