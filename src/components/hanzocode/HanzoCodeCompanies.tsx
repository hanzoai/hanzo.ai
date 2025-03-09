
import React from "react";
import { motion } from "framer-motion";

const HanzoCodeCompanies = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black/60">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-xl text-gray-400">Trusted by engineers at</p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {/* Replace these placeholders with actual company logos */}
          <div className="h-8 w-24 bg-gray-800/50 rounded"></div>
          <div className="h-8 w-24 bg-gray-800/50 rounded"></div>
          <div className="h-8 w-24 bg-gray-800/50 rounded"></div>
          <div className="h-8 w-24 bg-gray-800/50 rounded"></div>
          <div className="h-8 w-24 bg-gray-800/50 rounded"></div>
        </div>
      </div>
    </section>
  );
};

export default HanzoCodeCompanies;
