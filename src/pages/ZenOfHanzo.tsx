
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
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setShowContent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>The Zen of Hanzo - 64 Principles of AI Engineering</title>
        <meta name="description" content="Our 64 principles that guide everything we build at Hanzo. Simplicity, clarity, elegance—our AI engineering manifesto." />
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
