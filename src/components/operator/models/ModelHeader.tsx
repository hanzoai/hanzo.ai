
import React from "react";
import { motion } from "framer-motion";

const ModelHeader = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Supported Models
        </h2>
        <p className="text-xl text-gray-300">
          Hanzo Operator works with multiple multimodal AI models, 
          each with different capabilities and strengths
        </p>
      </motion.div>
    </div>
  );
};

export default ModelHeader;
