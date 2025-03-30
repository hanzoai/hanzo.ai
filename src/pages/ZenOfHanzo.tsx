
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ZenBackground from "@/components/zen/ZenBackground";
import HeroSection from "@/components/zen/HeroSection";
import HexagramsSection from "@/components/zen/HexagramsSection";
import SenseiMethodSection from "@/components/zen/SenseiMethodSection";
import FinalQuoteSection from "@/components/zen/FinalQuoteSection";

const ZenOfHanzo = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show content immediately, no need for scroll detection in our new design
    setShowContent(true);
    
    // Add a class to the body for this specific page
    document.body.classList.add('zen-page');
    
    return () => {
      document.body.classList.remove('zen-page');
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>The Zen of Hanzo - 88 Principles of AI Engineering</title>
        <meta name="description" content="Our 88 principles that guide everything we build at Hanzo. Simplicity, clarity, elegance—our AI engineering manifesto." />
      </Helmet>
      
      <ZenBackground />
      <Navbar />
      
      <main>
        <HeroSection />
        
        <div className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <HexagramsSection />
          <SenseiMethodSection />
          <FinalQuoteSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ZenOfHanzo;
