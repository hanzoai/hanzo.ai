import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";
import { Github, Terminal, Download } from "lucide-react";

const HeroSection = () => {
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
    <section 
      ref={containerRef}
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-blue-900/10 opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-green-900/30 border border-green-500/30 text-green-300 text-sm font-medium">
            Open Source
          </span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <ChromeText 
            as="h1" 
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{
              backgroundPosition: `${(mousePosition.x / (containerRef.current?.offsetWidth || 1)) * 100}% ${(mousePosition.y / (containerRef.current?.offsetHeight || 1)) * 100}%`,
            }}
          >
            Hanzo Platform
          </ChromeText>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-8">
            The free, forever, open-source version of our cloud infrastructure.
          </p>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto mb-8">
            Build locally, deploy anywhere. Hanzo Platform gives developers the same powerful experience as our cloud offering, but with the freedom to run it on your own hardware.
          </p>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto mb-12">
            Permissively licensed, community-driven, and built for the modern developer who values sovereignty and control over their stack.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button 
            size="lg"
            className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-[var(--white)] px-8 py-6 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center"
          >
            <Github className="mr-2 h-5 w-5" />
            <a href="https://github.com/hanzo/platform" className="flex-1">Get on GitHub</a>
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="text-[var(--white)] border-gray-700 hover:bg-[var(--white)]/10 px-8 py-6 text-lg rounded-lg font-medium flex items-center"
          >
            <Terminal className="mr-2 h-5 w-5" />
            <span className="flex-1">Quick Start</span>
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="text-[var(--white)] border-gray-700 hover:bg-[var(--white)]/10 px-8 py-6 text-lg rounded-lg font-medium flex items-center"
          >
            <Download className="mr-2 h-5 w-5" />
            <span className="flex-1">Download CLI</span>
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 px-4 py-3 bg-gray-900/50 rounded-lg inline-block"
        >
          <code className="text-sm text-neutral-300">
            npx @hanzo/cli create my-new-project
          </code>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
