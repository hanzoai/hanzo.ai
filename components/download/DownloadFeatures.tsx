'use client'


import React from "react";
import { motion } from "framer-motion";
import { Mic, Headphones } from "lucide-react";

const DownloadFeatures = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--black)]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--white)]">
              Local audio and mic transcription
            </h2>
            <p className="text-xl text-neutral-300 mb-6">
              Automatically capture and share meeting notes, saving hours of manual work
            </p>
            
            <div className="flex items-center space-x-4 text-neutral-400">
              <Mic className="h-6 w-6 text-white" />
              <span>Private, secure, and processed on-device</span>
            </div>
            <div className="flex items-center space-x-4 text-neutral-400 mt-3">
              <Headphones className="h-6 w-6 text-white" />
              <span>Works with all major conferencing apps</span>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-800">
            <div className="relative pb-[120%] h-0 bg-gray-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-neutral-400">Transcription preview</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadFeatures;
