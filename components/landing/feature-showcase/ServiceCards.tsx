'use client'


import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ServiceCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
      {/* Hanzo Agency Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-primary/20 border border-white/30 rounded-xl p-8 relative overflow-hidden"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-primary/30 rounded-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground/70">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[var(--white)]">Hanzo Agency</h3>
        </div>
        <p className="text-foreground/80 mb-6">
          Elevate your brand with our AI-powered creative agency. We craft advanced digital experiences that captivate audiences and deliver measurable business results.
        </p>
        <a href="/contact" className="inline-flex items-center text-foreground/70 hover:text-foreground transition-colors group">
          <span className="mr-2">Learn more</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
      
      {/* Sensei Group Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-primary/10 border border-border rounded-xl p-8 relative overflow-hidden"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground/70">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[var(--white)]">Sensei Group</h3>
        </div>
        <p className="text-foreground/80 mb-6">
          Accelerate enterprise transformation with our elite collective of CXOs and technology experts. We guide organizations through digital evolution with strategic implementation.
        </p>
        <a href="/contact" className="inline-flex items-center text-foreground/70 hover:text-foreground/70 transition-colors group">
          <span className="mr-2">Learn more</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </div>
  );
};

export default ServiceCards;
