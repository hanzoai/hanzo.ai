'use client'


import React from "react";
import { motion } from "framer-motion";

const PlatformTechnologies: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-16 text-center"
    >
      <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
        Join the global pioneers who are 100x-ing their capabilities with the world's most comprehensive AI platform.
      </p>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-6">
        <div className="flex items-center justify-center h-8">
          <span className="text-gradient-steel text-sm font-medium">OPEN SOURCE</span>
        </div>
        <div className="flex items-center justify-center h-8">
          <span className="text-gradient-steel text-sm font-medium">INFERENCE</span>
        </div>
        <div className="flex items-center justify-center h-8">
          <span className="text-gradient-steel text-sm font-medium">FINE-TUNING</span>
        </div>
        <div className="flex items-center justify-center h-8">
          <span className="text-gradient-steel text-sm font-medium">PRIVATE CLOUD</span>
        </div>
        <div className="flex items-center justify-center h-8">
          <span className="text-gradient-steel text-sm font-medium">RAG</span>
        </div>
        <div className="flex items-center justify-center h-8">
          <span className="text-gradient-steel text-sm font-medium">MODEL DISTILLATION</span>
        </div>
        <div className="flex items-center justify-center h-8">
          <span className="text-gradient-steel text-sm font-medium">EDGE DEPLOYMENT</span>
        </div>
        <div className="flex items-center justify-center h-8">
          <span className="text-gradient-steel text-sm font-medium">AGENTIC WORKFLOWS</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PlatformTechnologies;
