'use client'


import React from "react";
import { motion } from "framer-motion";
import AnimatedSection, { AnimatedHeading, AnimatedStaggerContainer } from "@/components/ui/animated-section";
import { createAnimationVariant, curves } from "@/components/ui/animation-variants";

const companyItemVariant = createAnimationVariant("fadeInBlur", {
  duration: 0.3,
  curve: curves.snappy,
  distance: 10,
  blur: 4
});

const TrustedBy = () => {
  const companies = [
    "OpenAI", "Anthropic", "HuggingFace", "LangChain", "LlamaIndex", 
    "Replit", "Vercel", "GitHub", "Stripe", "Shopify", 
    "Microsoft", "Snap", "Bloomberg", "Twilio", "Intel"
  ];

  return (
    <AnimatedSection 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-950"
      viewportAmount={0.3}
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedHeading className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-[var(--white)] mb-2">Trusted By AI Innovators</h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </AnimatedHeading>
        
        <AnimatedStaggerContainer className="flex flex-wrap justify-center gap-x-8 gap-y-6" delayFactor={0.03}>
          {companies.map((company, index) => (
            <motion.div 
              key={index}
              variants={companyItemVariant}
              className="text-neutral-400 font-medium text-lg transition-colors hover:text-white"
              whileHover={{ scale: 1.05, color: "#ffffff" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {company}
            </motion.div>
          ))}
        </AnimatedStaggerContainer>
      </div>
    </AnimatedSection>
  );
};

export default TrustedBy;
