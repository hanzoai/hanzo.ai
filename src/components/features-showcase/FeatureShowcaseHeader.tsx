
import React from "react";
import { motion } from "framer-motion";

const FeatureShowcaseHeader: React.FC = () => {
  return (
    <div className="text-center mb-12">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-4 text-white chrome-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Our Feature Ecosystem
      </motion.h2>
      <motion.p 
        className="text-lg text-gray-300 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Discover the powerful capabilities that make Hanzo AI the platform of choice for developers and enterprises
      </motion.p>
    </div>
  );
};

export default FeatureShowcaseHeader;
