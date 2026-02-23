'use client'


import React from "react";
import { motion } from "framer-motion";
import { Crop, MonitorSmartphone } from "lucide-react";

const ScreenCapture = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--black)]/50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-2xl border border-gray-800">
            <div className="relative pb-[120%] h-0 bg-gray-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-muted-foreground">Screen capture preview</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--white)]">
              Use Apps & Your Screen as input
            </h2>
            <p className="text-xl text-foreground/80 mb-6">
              Capture any part of your screen for instant insights and explanations
            </p>
            
            <div className="flex items-center space-x-4 text-muted-foreground">
              <Crop className="h-6 w-6 text-foreground" />
              <span>Select any region of your screen</span>
            </div>
            <div className="flex items-center space-x-4 text-muted-foreground mt-3">
              <MonitorSmartphone className="h-6 w-6 text-foreground" />
              <span>Ask questions without leaving your workflow</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScreenCapture;
