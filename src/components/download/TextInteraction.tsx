
import React from "react";
import { motion } from "framer-motion";
import { MousePointer, FileText } from "lucide-react";

const TextInteraction = () => {
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
              Follows your actions on any app
            </h2>
            <p className="text-xl text-neutral-300 mb-6">
              Select text anywhere and instantly summarize, translate, or analyze it
            </p>
            
            <div className="flex items-center space-x-4 text-neutral-400">
              <MousePointer className="h-6 w-6 text-[#fd4444]" />
              <span>Works with any selectable text</span>
            </div>
            <div className="flex items-center space-x-4 text-neutral-400 mt-3">
              <FileText className="h-6 w-6 text-[#fd4444]" />
              <span>Instant insights across applications</span>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-800">
            <div className="relative pb-[120%] h-0 bg-gray-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-neutral-400">Text interaction preview</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TextInteraction;
