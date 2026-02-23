'use client'


import React from "react";
import { motion } from "framer-motion";
import ChromeText from "@/components/ui/chrome-text";

const ModelHeader = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <ChromeText as="h2" className="text-3xl md:text-4xl font-bold mb-6">
          Unified Model Access
        </ChromeText>
        <p className="text-xl text-foreground/80">
          Access thousands of AI models through a single, unified API with consistent interfaces
          and predictable pricing
        </p>
      </motion.div>
    </div>
  );
};

export default ModelHeader;
