
import React from "react";
import { motion } from "framer-motion";
import ChromeText from "@/components/ui/chrome-text";

const FeatureShowcaseHeader: React.FC = () => {
  return (
    <div className="text-center mb-10">
      <motion.div 
        className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Developer-First Platform
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <ChromeText as="span" className="text-3xl md:text-4xl font-bold mb-4">
          AI Tools For Every Developer
        </ChromeText>
      </motion.h2>
      
      <motion.p 
        className="text-lg text-gray-300 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        From cloud services to development tools, our open source ecosystem empowers 
        developers to build intelligent applications with complete control and flexibility
      </motion.p>
    </div>
  );
};

export default FeatureShowcaseHeader;
