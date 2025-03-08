
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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
    <section ref={containerRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      
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
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Hanzo AI lets models understand your desktop activity. Build faster.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-8 py-6 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              <Apple className="mr-2 h-5 w-5" />
              Download (Apple Silicon)
            </Button>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-6 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              <Apple className="mr-2 h-5 w-5" />
              Download (Intel Mac)
            </Button>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400 text-white px-8 py-6 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              <ArrowDown className="mr-2 h-5 w-5" />
              Download for Windows
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              size="lg"
              variant="outline"
              className="border-gray-700 text-white hover:bg-gray-800"
            >
              <Chrome className="mr-2 h-5 w-5" />
              Chrome Extension
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-gray-700 text-white hover:bg-gray-800"
            >
              <Chrome className="mr-2 h-5 w-5" />
              Safari Extension
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-gray-700 text-white hover:bg-gray-800"
            >
              <Chrome className="mr-2 h-5 w-5" />
              Firefox Add-on
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-gray-700 text-white hover:bg-gray-800"
            >
              <Chrome className="mr-2 h-5 w-5" />
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
