'use client'


import React from "react";
import HeroSection from "@/components/hanzobot/HeroSection";
import Features from "@/components/hanzobot/Features";
import Architecture from "@/components/hanzobot/Architecture";
import UseCases from "@/components/hanzobot/UseCases";
import GettingStarted from "@/components/hanzobot/GettingStarted";
import Documentation from "@/components/hanzobot/Documentation";
import Community from "@/components/hanzobot/Community";

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
        <Community />
      </main>
      
    </div>
  );
};

export default HanzoBot;
