
import React from "react";
import { motion } from "framer-motion";
import ChromeText from "@/components/ui/chrome-text";

const FeatureShowcaseHeader: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <motion.div 
        className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Open Source AI Engineering
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-4xl mx-auto"
      >
        <ChromeText as="span" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Build the Future with AI
        </ChromeText>
      </motion.h2>
      
      <motion.p 
        className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        A complete platform for developers to build, deploy, and scale AI applications
        with unprecedented speed and complete control
      </motion.p>
    </div>
  );
};

export default FeatureShowcaseHeader;
