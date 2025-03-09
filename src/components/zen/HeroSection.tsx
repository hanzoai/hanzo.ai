
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          The Zen of <span className="text-purple-400">Hanzo</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          We are Hanzo. Founded in Kansas City in 2013, forged through a hundred groundbreaking launches, 
          Techstars-funded, and proven in the fires of rapid iteration—our principles shape the future we build.
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
