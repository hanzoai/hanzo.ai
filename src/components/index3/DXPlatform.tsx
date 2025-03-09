
import React, { useState } from "react";
import { motion } from "framer-motion";
import ChromeText from "@/components/ui/chrome-text";
import DXPlatformGrid from "./dx-platform/DXPlatformGrid";

const DXPlatform = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-blue-900/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-purple-900/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium">
              Developer Experience
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
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              The DX Platform
            </ChromeText>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unify your development workflow with tools designed to increase productivity, enable collaboration, and accelerate innovation.
            </p>
          </motion.div>
        </div>
        
        <DXPlatformGrid isHovered={isHovered} setIsHovered={setIsHovered} />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-6 max-w-3xl mx-auto">
            Join thousands of developers who build faster and ship more reliable software with the Hanzo DX Platform.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DXPlatform;
