'use client'


import React from "react";
import { motion } from "framer-motion";

interface MainSectionProps {
  children: React.ReactNode;
}

const MainSection: React.FC<MainSectionProps> = ({ children }) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-primary/20 border border-white/30 text-foreground/70 text-sm font-medium mb-6">
              Open Source AI Engineering
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--white)] mb-6">
              Build the Future with AI
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-10">
              A complete platform for developers to build, deploy, and scale AI
              applications with unprecedented speed and complete control.
            </p>
          </motion.div>
        </div>

        {children}
      </div>
    </section>
  );
};

export default MainSection;
