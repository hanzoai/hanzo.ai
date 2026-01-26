
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import GlobeThreeJs from "./GlobeThreeJs";

const GlobeContainer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateDimensions = () => {
      if (!containerRef.current) return;
      
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full h-[500px] bg-[var(--black)] rounded-lg overflow-hidden mt-8 mb-12 border border-[#fd4444]/20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fd4444]/10 to-[#ff6b6b]/10 opacity-50"></div>
      
      {dimensions.width > 0 && dimensions.height > 0 && (
        <GlobeThreeJs width={dimensions.width} height={dimensions.height} />
      )}
      
      <div className="absolute inset-0 flex items-center justify-center text-center p-4 pointer-events-none">
        <div className="mt-8 bg-[var(--black)]/30 backdrop-blur-sm rounded-xl p-4 border border-[#fd4444]/20">
          <h3 className="text-2xl font-semibold text-[var(--white)] mb-2">Global Network</h3>
          <p className="text-neutral-300 text-sm max-w-md mx-auto">
            Deploy to 35+ regions around the world with 99.99% uptime SLA and automatic failover.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default GlobeContainer;
