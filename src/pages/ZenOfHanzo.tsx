
import React from "react";
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
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>The Zen of Hanzo - AI Engineering Manifesto</title>
        <meta name="description" content="Our battle-tested principles that guide everything we build at Hanzo. Simplicity, clarity, elegance—our AI engineering manifesto." />
      </Helmet>
      
      <ZenBackground />
      <Navbar />
      
      <main className="pt-20">
        <HeroSection />
        <StorySection />
        <ManifestoSection />
        <SenseiMethodSection />
        <FinalQuoteSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default ZenOfHanzo;
