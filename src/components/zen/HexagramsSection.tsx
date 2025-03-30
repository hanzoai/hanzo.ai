
import React, { useState } from "react";
import { motion } from "framer-motion";
import ZenOfHanzoPrinciples from "./ZenOfHanzoPrinciples";
import IChingPrinciplesGrid from "./IChingPrinciplesGrid";

const HexagramsSection: React.FC = () => {
  return (
    <section id="principles" className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Principles of Wisdom</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ancient wisdom guides modern innovation - frameworks for creative, design, and engineering excellence.
          </p>
          <div className="h-px w-20 bg-gray-700 mx-auto mt-8"></div>
        </motion.div>
        
        {/* First show the Zen of Hanzo 6x6 principles */}
        <ZenOfHanzoPrinciples />
        
        {/* Then show the 88 I Ching principles */}
        <IChingPrinciplesGrid />
      </div>
    </section>
  );
};

export default HexagramsSection;
