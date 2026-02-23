'use client'


import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { ArrowDown, Apple, Chrome, Terminal } from "lucide-react";

const CallToAction = () => {
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
    <section ref={containerRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--black)] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff]/20 to-[#ff6b6b]/20 opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#ffffff]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#ff6b6b]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-3xl md:text-5xl font-bold mb-6 text-gradient-steel"
            style={{
              backgroundPosition: `${(mousePosition.x / (containerRef.current?.offsetWidth || 1)) * 100}% ${(mousePosition.y / (containerRef.current?.offsetHeight || 1)) * 100}%`,
            }}
          >
            Do everything 100x faster
          </h2>
          
          <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto">
            Hanzo AI lets models understand your desktop activity. Build faster.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button 
              size="sm"
              className="bg-gradient-to-r from-[#ffffff] to-[#ff6b6b] hover:from-[#cccccc] hover:to-[#ffffff] text-[var(--white)] shadow-lg hover:shadow-xl transition-all flex items-center"
            >
              <Apple className="mr-2 h-4 w-4" />
              Download (Apple Silicon)
            </Button>
            <Button 
              size="sm"
              className="bg-gradient-to-r from-[#ffffff] to-[#ff6b6b] hover:from-[#cccccc] hover:to-[#ffffff] text-[var(--white)] shadow-lg hover:shadow-xl transition-all flex items-center"
            >
              <Apple className="mr-2 h-4 w-4" />
              Download (Intel Mac)
            </Button>
            <Button 
              size="sm"
              className="bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400 text-[var(--white)] shadow-lg hover:shadow-xl transition-all flex items-center"
            >
              <ArrowDown className="mr-2 h-4 w-4" />
              Download for Windows
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              size="sm"
              variant="outline"
              className="border-gray-700 text-[var(--white)] hover:bg-gray-800"
            >
              <Chrome className="mr-2 h-4 w-4" />
              Chrome Extension
            </Button>
            <Button 
              size="sm"
              variant="outline"
              className="border-gray-700 text-[var(--white)] hover:bg-gray-800"
            >
              <Chrome className="mr-2 h-4 w-4" />
              Safari Extension
            </Button>
            <Button 
              size="sm"
              variant="outline"
              className="border-gray-700 text-[var(--white)] hover:bg-gray-800"
            >
              <Chrome className="mr-2 h-4 w-4" />
              Firefox Add-on
            </Button>
            <Button 
              size="sm"
              variant="outline"
              className="border-gray-700 text-[var(--white)] hover:bg-gray-800"
            >
              <Chrome className="mr-2 h-4 w-4" />
              Edge Extension
            </Button>
          </div>
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

export default CallToAction;
