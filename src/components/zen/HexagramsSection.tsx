
import React from "react";
import { motion } from "framer-motion";
import SixtyFourPrinciples from "./SixtyFourPrinciples";
import ZenPrinciplesList from "./ZenPrinciplesList";
import { principles } from "./data/zenPrinciples";

const HexagramsSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative" id="principles">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/70">
            The Zen of Hanzo
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Our 36 guiding principles, organized into 6 disciplines
          </p>
        </motion.div>
        
        {/* Display Zen Principles (6 categories x 6 principles) */}
        <div className="mb-32">
          <ZenPrinciplesList principles={principles} groupByDiscipline={true} />
        </div>
        
        {/* Display 64 I Ching Hexagrams */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-32"
        >
          <SixtyFourPrinciples 
            title="The 64 Iching Principles" 
            description="The complete set of 64 principles, based on the ancient Book of Changes. Click to flip and reveal each principle."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HexagramsSection;
