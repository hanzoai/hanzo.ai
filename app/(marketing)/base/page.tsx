'use client'


import React from "react";
import HeroSection from "@/components/base/HeroSection";
import TrustedBy from "@/components/base/TrustedBy";
import CoreFeatures from "@/components/base/CoreFeatures";
import Templates from "@/components/base/Templates";
import DeveloperExperience from "@/components/base/DeveloperExperience";
import Infrastructure from "@/components/base/Infrastructure";
import AIEngineering from "@/components/base/AIEngineering";
import CallToAction from "@/components/base/CallToAction";
import Community from "@/components/base/Community";
import Compliance from "@/components/base/Compliance";

const Base = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
            
      <main>
        <HeroSection />
        <TrustedBy />
        <CoreFeatures />
        <Templates />
        <DeveloperExperience />
        <Infrastructure />
        <AIEngineering />
        <Compliance />
        <CallToAction />
        <Community />
      </main>
      
    </div>
  );
};

export default Base;
