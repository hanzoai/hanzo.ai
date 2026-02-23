'use client'


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ZenBackground from "@/components/zen/ZenBackground";
import HeroSection from "@/components/zen/HeroSection";

import SenseiMethodSection from "@/components/zen/SenseiMethodSection";
import FinalQuoteSection from "@/components/zen/FinalQuoteSection";
import ZenOfHanzoPrinciples from "@/components/zen/ZenOfHanzoPrinciples";

const ZenOfHanzo = () => {
  const [showContent, setShowContent] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Show content with a slight delay for a more elegant loading experience
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);
    
    // Add a class to the body for this specific page
    document.body.classList.add('zen-page');
    
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.body.classList.remove('zen-page');
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)] overflow-x-hidden">
            
      <ZenBackground />
      
      
      <main>
        <HeroSection />
        
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <ZenOfHanzoPrinciples />
              <SenseiMethodSection />
              <FinalQuoteSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
      
    </div>
  );
};

export default ZenOfHanzo;
