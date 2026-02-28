'use client'


import React from "react";
import HeroSection from "@/components/hanzobot/HeroSection";
import Features from "@/components/hanzobot/Features";
import Architecture from "@/components/hanzobot/Architecture";
import UseCases from "@/components/hanzobot/UseCases";
import GettingStarted from "@/components/hanzobot/GettingStarted";
import Documentation from "@/components/hanzobot/Documentation";
import Community from "@/components/hanzobot/Community";
import OSSComputeDividends from "@/components/oss/OSSComputeDividends";
import { OSSRevenueBanner } from "@/components/oss/OSSRevenueBanner";

const HanzoBot = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      
      <main>
        <HeroSection />
        <Features />
        <Architecture />
        <UseCases />
        <GettingStarted />
        <Documentation />
        <OSSRevenueBanner upstreamName="LibreChat" />
        <OSSComputeDividends variant="banner" />
        <Community />
      </main>
      
    </div>
  );
};

export default HanzoBot;
