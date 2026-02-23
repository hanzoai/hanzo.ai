'use client'

import React from "react";
import HeroSection from "@/components/hanzodev/HeroSection";
import WhyHanzo from "@/components/hanzodev/WhyHanzo";
import Features from "@/components/hanzodev/Features";
import OpenModels from "@/components/hanzodev/OpenModels";
import OpenPricing from "@/components/hanzodev/OpenPricing";
import OpenSource from "@/components/hanzodev/OpenSource";
import FAQSection from "@/components/hanzodev/FAQSection";
import FooterCTA from "@/components/hanzodev/FooterCTA";

const HanzoDev = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
            
      <main>
        <HeroSection />
        <WhyHanzo />
        <Features />
        <OpenModels />
        <OpenPricing />
        <OpenSource />
        <FAQSection />
        <FooterCTA />
      </main>
      
    </div>
  );
};

export default HanzoDev;
