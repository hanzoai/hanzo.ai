
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, Zap } from "lucide-react";

const GlobalNetwork: React.FC = () => {
  const globeRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Locations with coordinates [longitude, latitude]
  const locations = [
    { name: "Vancouver", coords: [-123.1207, 49.2827], active: true },
    { name: "Kansas City", coords: [-94.5786, 39.0997], active: true },
    { name: "Los Angeles", coords: [-118.2437, 34.0522], active: true },
    { name: "New York", coords: [-74.0060, 40.7128], active: true },
    { name: "London", coords: [-0.1278, 51.5074], active: true },
    { name: "Paris", coords: [2.3522, 48.8566], active: true },
    { name: "Berlin", coords: [13.4050, 52.5200], active: true },
    { name: "Lagos", coords: [3.3792, 6.5244], active: true },
    { name: "Cairo", coords: [31.2357, 30.0444], active: true },
    { name: "Tokyo", coords: [139.6917, 35.6895], active: true },
    { name: "Singapore", coords: [103.8198, 1.3521], active: true },
    { name: "Sydney", coords: [151.2093, -33.8688], active: true },
  ];

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (globeRef.current && canvas) {
        const { width, height } = globeRef.current.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        drawGlobe();
      }
    };

    window.addEventListener('resize', setCanvasDimensions);
    setCanvasDimensions();

    // Convert lat/long to x,y coordinates on canvas
    const projectToXY = (lat: number, long: number, radius: number, rotation: number) => {
      // Convert from degrees to radians
      const latitude = (lat * Math.PI) / 180;
      // Adjust longitude based on rotation
      const longitude = ((long + rotation) * Math.PI) / 180;
      
      // Project the point from the sphere onto a plane
      const x = radius * Math.cos(latitude) * Math.sin(longitude);
      const y = radius * Math.sin(latitude);
      const z = radius * Math.cos(latitude) * Math.cos(longitude);
      
      // Only return the point if it's on the visible side of the globe
      return { x, y, z, visible: z > 0 };
    };

    // Draw a point on the globe
    const drawPoint = (x: number, y: number, size: number = 2, color: string = 'rgba(255, 255, 255, 0.8)') => {
      if (!ctx) return;
      
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      
      // Add a subtle glow effect
      ctx.beginPath();
      ctx.arc(x, y, size * 2, 0, Math.PI * 2);
      ctx.fillStyle = color.replace(')', ', 0.3)');
      ctx.fill();
    };

    // Draw connections between points
    const drawConnection = (x1: number, y1: number, x2: number, y2: number, z1: number, z2: number) => {
      if (!ctx) return;
      
      // Calculate opacity based on z-position (further back = more transparent)
      const avgZ = (z1 + z2) / 2;
      const opacity = Math.max(0.1, avgZ / 300);
      
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      
      // Create an arc between points
      const midX = (x1 + x2) / 2;
      const midY = (y1 + y2) / 2 - 20; // Curve the line upward
      
      ctx.quadraticCurveTo(midX, midY, x2, y2);
      ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Add data particles along the connection
      const numParticles = 3;
      for (let i = 0; i < numParticles; i++) {
        const t = (Date.now() / 1000 + i / numParticles) % 1;
        const tx = (1 - t) * (1 - t) * x1 + 2 * (1 - t) * t * midX + t * t * x2;
        const ty = (1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * midY + t * t * y2;
        drawPoint(tx, ty, 1, `rgba(139, 92, 246, ${opacity * 1.5})`);
      }
    };

    // Main globe drawing function
    const drawGlobe = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) * 0.8;
      
      // Calculate rotation based on time
      const rotation = (Date.now() / 300) % 360;
      
      // Draw globe outline
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Draw a few longitude lines
      for (let i = 0; i < 360; i += 30) {
        const angle = (i * Math.PI) / 180;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, angle, angle);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
      
      // Draw a few latitude lines
      for (let i = -60; i <= 60; i += 30) {
        const latRadius = radius * Math.cos((i * Math.PI) / 180);
        const y = centerY + radius * Math.sin((i * Math.PI) / 180);
        
        ctx.beginPath();
        ctx.arc(centerX, y, latRadius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
      
      // Project locations to 2D coordinates
      const projectedLocations = locations.map(loc => {
        const projected = projectToXY(loc.coords[1], loc.coords[0], radius, rotation);
        return {
          ...loc,
          ...projected,
          screenX: centerX + projected.x,
          screenY: centerY - projected.y,
        };
      });
      
      // Draw connections between active locations (only if both are visible)
      for (let i = 0; i < projectedLocations.length; i++) {
        const loc1 = projectedLocations[i];
        if (!loc1.active || !loc1.visible) continue;
        
        for (let j = i + 1; j < projectedLocations.length; j++) {
          const loc2 = projectedLocations[j];
          if (!loc2.active || !loc2.visible) continue;
          
          // Draw connection between visible points
          drawConnection(loc1.screenX, loc1.screenY, loc2.screenX, loc2.screenY, loc1.z, loc2.z);
        }
      }
      
      // Draw location points
      projectedLocations.forEach(loc => {
        if (loc.visible && loc.active) {
          // Use purple color for active locations
          drawPoint(loc.screenX, loc.screenY, 3, 'rgba(139, 92, 246, 0.8)');
        }
      });
    };

    // Animation loop
    let animationFrame: number;
    const animate = () => {
      drawGlobe();
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Clean up
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Global Network</h3>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Deploy AI workloads across our planetary-scale infrastructure with over 12 global locations, 
          ensuring low-latency access and regional data compliance.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12">
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-80 rounded-xl overflow-hidden bg-gray-900/20 border border-gray-800"
            ref={globeRef}
          >
            <canvas 
              ref={canvasRef} 
              className="absolute inset-0 w-full h-full"
            />
          </motion.div>
        </div>
        
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="mr-3 mt-1 p-1.5 rounded-lg bg-purple-900/30">
                  <Globe className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Edge-Optimized Routing</h4>
                  <p className="text-gray-400 text-sm">Automatic routing to the nearest edge location for minimal latency</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="mr-3 mt-1 p-1.5 rounded-lg bg-purple-900/30">
                  <Zap className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Private Global Network</h4>
                  <p className="text-gray-400 text-sm">Zero-config private networking between all regions</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="mr-3 mt-1 p-1.5 rounded-lg bg-purple-900/30">
                  <Zap className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Data Sovereignty</h4>
                  <p className="text-gray-400 text-sm">Regional deployment options for regulatory compliance</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center"
      >
        {locations.map((location, index) => (
          <div 
            key={location.name}
            className="p-3 bg-gray-900/20 border border-gray-800 rounded-lg"
          >
            <p className="text-gray-300 font-medium">{location.name}</p>
            <p className="text-xs text-gray-500">
              {location.coords[1].toFixed(2)}°, {location.coords[0].toFixed(2)}°
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default GlobalNetwork;
