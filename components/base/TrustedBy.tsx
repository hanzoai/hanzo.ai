'use client'


import React from "react";
import { motion } from "framer-motion";

const TrustedBy = () => {
  const companies = [
    "Mozilla", "GitHub", "1Password", "PwC", "Pika", "Humata", 
    "Krea", "Udio", "LangChain", "Resend", "Loops", "Mobbin", 
    "Gopuff", "Chatbase", "Betashares"
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-semibold text-[var(--white)] mb-2">Trusted Worldwide</h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-4"
        >
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="text-neutral-400 font-medium text-lg transition-colors hover:text-white"
            >
              {company}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
