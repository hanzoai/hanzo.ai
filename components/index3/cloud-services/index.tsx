'use client'


import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CloudHeader from "./CloudHeader";
import CloudServiceGrid from "./CloudServiceGrid";
import GlobalNetwork from "./GlobalNetwork";
import BackgroundEffects from "./BackgroundEffects";
import CloudDeploymentAnimation from "@/components/animations/CloudDeploymentAnimation";

interface CloudServicesProps {
  onDeploymentEvent?: (message: string) => void;
}

const CloudServices: React.FC<CloudServicesProps> = ({ onDeploymentEvent }) => {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [scanPoints, setScanPoints] = useState<Array<{ x: number; y: number; active: boolean }>>([]);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);

  // Initialize grid points
  useEffect(() => {
    const points = [];
    const gridSize = 10;
    
    for (let i = 0; i < 30; i++) {
      points.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        active: false
      });
    }
    
    setScanPoints(points);
    
    // Gradually activate points over time
    points.forEach((_, index) => {
      setTimeout(() => {
        setScanPoints(prevPoints => {
          const newPoints = [...prevPoints];
          if (newPoints[index]) {
            newPoints[index] = { ...newPoints[index], active: true };
          }
          return newPoints;
        });
      }, 300 * index);
    });
  }, []);

  // Track mouse position for header effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top } = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - left,
          y: e.clientY - top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      id="cloud" 
      className="py-32 px-4 sm:px-6 lg:px-8 bg-[var(--black)] relative overflow-hidden"
    >
      <BackgroundEffects scanPoints={scanPoints} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <CloudHeader mousePosition={mousePosition} containerRef={containerRef} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--white)]">
              Intelligent Architecture Canvas
            </h3>
            <p className="text-foreground/80 mb-8 text-lg">
              Visually compose and deploy entire cloud architectures with our drag-and-drop canvas. 
              Connect services, configure dependencies, and deploy with a single click.
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-foreground">•</div>
                <span>Automatic resource provisioning and configuration</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-foreground">•</div>
                <span>Real-time deployment status and monitoring</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-foreground">•</div>
                <span>AI-powered recommendations for optimizing your architecture</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-foreground">•</div>
                <span>Version control and rollback capabilities</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-lg mx-auto">
              <CloudDeploymentAnimation />
            </div>
          </motion.div>
        </div>
        
        <GlobalNetwork />
        
        <CloudServiceGrid isHovered={isHovered} setIsHovered={setIsHovered} />
      </div>
    </section>
  );
};

export default CloudServices;
