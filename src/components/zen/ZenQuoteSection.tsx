
import React from "react";
import { motion } from "framer-motion";
import TaijiSymbol from "./svg/TaijiSymbol";

interface ZenQuoteSectionProps {
  quote: string;
  attribution?: string;
}

const ZenQuoteSection: React.FC<ZenQuoteSectionProps> = ({ quote, attribution }) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="relative p-12 bg-gradient-to-br from-gray-900/40 to-black backdrop-blur-lg border border-gray-800/30 rounded-lg">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <TaijiSymbol size={48} className="text-white/80" animate={true} />
            </div>
            
            <p className="text-gray-300 md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              "{quote}"
            </p>
            
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mx-auto mb-4"></div>
            
            {attribution && (
              <p className="text-gray-500 text-sm italic">
                {attribution}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ZenQuoteSection;
