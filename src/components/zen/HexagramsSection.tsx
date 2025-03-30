
import React from "react";
import { motion } from "framer-motion";
import HexagramsGrid from "./HexagramsGrid";

const HexagramsSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" id="principles">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/70">
            The I Ching Principles
          </h2>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
            Ancient wisdom reimagined for modern AI engineering
          </p>
        </motion.div>
        
        <HexagramsGrid />
      </div>
    </section>
  );
};

export default HexagramsSection;
