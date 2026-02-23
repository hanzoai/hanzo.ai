
import React from "react";
import { motion } from "framer-motion";

const AIPoweredHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-20"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6">AI-Powered Observability & Monitoring</h2>
      <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
        Proactively identify issues and opportunities with AI-powered insights and monitoring.
      </p>
    </motion.div>
  );
};

export default AIPoweredHeader;
