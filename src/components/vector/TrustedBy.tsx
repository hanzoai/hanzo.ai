
import React from "react";
import { motion } from "framer-motion";

const TrustedBy = () => {
  const companies = [
    "OpenAI", "Anthropic", "HuggingFace", "LangChain", "LlamaIndex", 
    "Replit", "Vercel", "GitHub", "Stripe", "Shopify", 
    "Microsoft", "Snap", "Bloomberg", "Twilio", "Intel"
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-semibold text-white mb-2">Trusted By AI Innovators</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-6"
        >
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="text-gray-400 font-medium text-lg transition-colors hover:text-indigo-400"
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
