'use client'

import React from "react";
import HeroSection from "@/components/hanzoapp/HeroSection";
import WhyHanzoApp from "@/components/hanzoapp/WhyHanzoApp";
import HowItWorks from "@/components/hanzoapp/HowItWorks";
import FAQSection from "@/components/hanzoapp/FAQSection";
import FooterCTA from "@/components/hanzoapp/FooterCTA";

const HanzoApp = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
            
      <main>
        <HeroSection />
        <WhyHanzoApp />
        <HowItWorks />
        <FAQSection />
        <FooterCTA />
      </main>
      
    </div>
  );
};

export default HanzoApp;
