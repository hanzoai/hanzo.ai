'use client'


import React from "react";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import ChromeText from "@/components/ui/chrome-text";

interface CloudHeaderProps {
  mousePosition: { x: number; y: number };
  containerRef: React.RefObject<HTMLElement>;
}

const CloudHeader: React.FC<CloudHeaderProps> = ({ mousePosition, containerRef }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start mb-16">
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-[var(--black)] border border-white/10 text-[var(--white)] text-sm font-medium">
            Infinitely Scalable, Globally Distributed
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ChromeText 
            as="h2" 
            className="text-3xl md:text-5xl font-bold mb-4 text-left"
            style={{
              backgroundPosition: `${(mousePosition.x / (containerRef.current?.offsetWidth || 1)) * 100}% ${(mousePosition.y / (containerRef.current?.offsetHeight || 1)) * 100}%`,
            }}
          >
            AI Cloud
          </ChromeText>
          <p className="text-xl text-neutral-300 mt-4">
            Global, infinitely scalable, sustainable compute infrastructure specifically optimized for AI applications
          </p>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 md:mt-0"
      >
        <Button size="lg" variant="outline" className="text-[var(--white)] border-white/10 bg-[var(--black)] hover:bg-neutral-900 whitespace-nowrap">
          <a href="/cloud">Explore Cloud</a>
        </Button>
      </motion.div>
    </div>
  );
};

export default CloudHeader;
