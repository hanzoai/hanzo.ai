
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ZenBackground from "@/components/zen/ZenBackground";
import HeroSection from "@/components/zen/HeroSection";
import HexagramsSection from "@/components/zen/HexagramsSection";
import SenseiMethodSection from "@/components/zen/SenseiMethodSection";
import FinalQuoteSection from "@/components/zen/FinalQuoteSection";

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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Helmet>
        <title>The Zen of Hanzo - Principles of AI Engineering</title>
        <meta name="description" content="Our guiding principles that shape everything we build. Simplicity, clarity, elegance—our AI engineering manifesto." />
      </Helmet>
      
      <ZenBackground />
      <Navbar />
      
      <main>
        <HeroSection />
        
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <HexagramsSection />
              <SenseiMethodSection />
              <FinalQuoteSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
};

export default ZenOfHanzo;
