'use client'


import React from "react";
import HeroSection from "@/components/realtime/HeroSection";
import Features from "@/components/realtime/Features";
import UseCases from "@/components/realtime/UseCases";
import Integration from "@/components/realtime/Integration";
import Scaling from "@/components/realtime/Scaling";
import CallToAction from "@/components/realtime/CallToAction";

const Realtime = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      
      <main>
        <HeroSection />
        <Features />
        <UseCases />
        <Integration />
        <Scaling />
        <CallToAction />
      </main>
      
    </div>
  );
};

export default Realtime;
