
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroBanner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
            AI-Native Platform for Building the Future
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span 
              className="text-gradient-steel block"
              style={{
                backgroundPosition: `${(mousePosition.x / (containerRef.current?.offsetWidth || 1)) * 100}% ${(mousePosition.y / (containerRef.current?.offsetHeight || 1)) * 100}%`,
              }}
            >
              Hanzo
            </span>
            Accelerate your vision. Scale without limits.
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
            Hanzo is the AI-native platform purpose-built to power innovative software companies. From ideation to deployment, Hanzo delivers everything you need to streamline product development, accelerate growth, and scale effortlessly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400 border-none">
            <a href="https://dashboard.hanzo.cloud">Get Started</a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 text-white border-white/20 bg-white/5 hover:bg-white/10">
            <a href="https://docs.hanzo.cloud">Learn More</a>
          </Button>
        </motion.div>
      </div>

      <style>
        {`
        .text-gradient-steel {
          background: linear-gradient(
            90deg,
            rgb(180, 180, 180),
            rgb(240, 240, 240),
            rgb(180, 180, 180)
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: shimmer 6s ease infinite;
          transition: background-position 0.3s ease;
        }
        
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        `}
      </style>
    </section>
  );
};

export default HeroBanner;
