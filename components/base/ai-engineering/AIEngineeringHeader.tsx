'use client'


import React from "react";
import { motion } from "framer-motion";

const AIEngineeringHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl font-bold text-[var(--white)] mb-4">Built for AI Engineers</h2>
      <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
        Powerful features specifically designed for AI-powered applications
      </p>
    </motion.div>
  );
};

export default AIEngineeringHeader;
