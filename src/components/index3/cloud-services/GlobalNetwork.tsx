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
    
    const centerX = canvasRef.current.width / 2;
    const globeRadius = Math.min(canvasRef.current.width / 3, canvasRef.current.height * 1.5);
    const centerY = canvasRef.current.height + globeRadius * 0.65;
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, globeRadius, 0, 2 * Math.PI);
    ctx.stroke();
    
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      const latRadius = globeRadius * (0.75 - i * 0.15);
      if (latRadius > 0) {
        ctx.ellipse(centerX, centerY, latRadius, latRadius * 0.3, 0, -Math.PI, 0);
        ctx.stroke();
      }
    }
    
    for (let i = 0; i < 8; i++) {
      ctx.beginPath();
      const angle = (i / 8) * Math.PI;
      ctx.ellipse(
        centerX, 
        centerY, 
        globeRadius * Math.cos(angle), 
        globeRadius, 
        0, 
        -Math.PI/2, 
        Math.PI/2
      );
      ctx.stroke();
    }
    
    connectionPoints.forEach(point => {
      if (point.active) {
        ctx.beginPath();
        ctx.fillStyle = '#9b87f5';
        ctx.arc(point.x, point.y, 3, 0, 2 * Math.PI);
        ctx.fill();
      }
    });
    
    const activePoints = connectionPoints.filter(p => p.active);
    
    ctx.strokeStyle = '#9b87f5';
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 2]);
    
    for (let i = 0; i < activePoints.length; i++) {
      for (let j = i + 1; j < activePoints.length; j++) {
        const dx = activePoints[i].x - activePoints[j].x;
        const dy = activePoints[i].y - activePoints[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < globeRadius * 0.8) {
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
    
    const numPoints = 12;
    const newPoints = [];
    
    const centerX = width / 2;
    const globeRadius = Math.min(width / 3, height * 1.5);
    const centerY = height + globeRadius * 0.65;
    
    for (let i = 0; i < numPoints; i++) {
      const angle = (Math.random() * Math.PI) - Math.PI/2;
      const r = Math.random() * globeRadius * 0.75;
      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);
      
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
        animationRef.current = setTimeout(activatePoints, 300) as unknown as number;
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
        className="relative h-48 w-full bg-black rounded-lg overflow-hidden"
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
