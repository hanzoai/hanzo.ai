
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ZenBackground from "@/components/zen/ZenBackground";
import HeroSection from "@/components/zen/HeroSection";
import StorySection from "@/components/zen/StorySection";
import ManifestoSection from "@/components/zen/ManifestoSection";
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
        <title>The Zen of Hanzo - AI Engineering Manifesto</title>
        <meta name="description" content="Our battle-tested principles that guide everything we build at Hanzo. Simplicity, clarity, elegance—our AI engineering manifesto." />
      </Helmet>
      
      <ZenBackground />
      <Navbar />
      
      <main>
        <HeroSection />
        
        <div id="manifesto" className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <StorySection />
          <ManifestoSection />
          <SenseiMethodSection />
          <FinalQuoteSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ZenOfHanzo;
