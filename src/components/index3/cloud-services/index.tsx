
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
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
  const { toast } = useToast();

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

  // Show deployment notifications
  useEffect(() => {
    const deploymentEvents = [
      { 
        message: "Backend service deployed via GitHub", 
        delay: 3000,
        title: "Deployment Success" 
      },
      { 
        message: "Redis cache initialized", 
        delay: 5500,
        title: "Service Started" 
      },
      { 
        message: "PostgreSQL database provisioned", 
        delay: 8000,
        title: "Database Ready" 
      },
      { 
        message: "Auto-scaling rules configured",
        delay: 11000,
        title: "Configuration Complete" 
      },
      { 
        message: "Persistent volumes attached",
        delay: 14000,
        title: "Storage Ready" 
      }
    ];

    const timeouts: NodeJS.Timeout[] = [];

    deploymentEvents.forEach(event => {
      const timeout = setTimeout(() => {
        toast({
          title: event.title,
          description: event.message,
          variant: "default",
        });
        if (onDeploymentEvent) {
          onDeploymentEvent(event.message);
        }
      }, event.delay);
      
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [toast, onDeploymentEvent]);

  return (
    <section 
      ref={containerRef}
      id="cloud" 
      className="py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
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
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Intelligent Architecture Canvas
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Visually compose and deploy entire cloud architectures with our drag-and-drop canvas. 
              Connect services, configure dependencies, and deploy with a single click.
            </p>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-purple-400">•</div>
                <span>Automatic resource provisioning and configuration</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-purple-400">•</div>
                <span>Real-time deployment status and monitoring</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-purple-400">•</div>
                <span>AI-powered recommendations for optimizing your architecture</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-purple-400">•</div>
                <span>Version control and rollback capabilities</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CloudDeploymentAnimation />
          </motion.div>
        </div>
        
        <GlobalNetwork />
        
        <CloudServiceGrid isHovered={isHovered} setIsHovered={setIsHovered} />
      </div>
    </section>
  );
};

export default CloudServices;
