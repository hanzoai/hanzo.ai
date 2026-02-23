'use client'


import React from "react";
import HeroSection from "@/components/vector/HeroSection";
import TrustedBy from "@/components/vector/TrustedBy";
import Features from "@/components/vector/Features";
import DeploymentOptions from "@/components/vector/DeploymentOptions";
import Integrations from "@/components/vector/Integrations";
import UseCases from "@/components/vector/UseCases";
import Testimonials from "@/components/vector/Testimonials";
import ScalabilitySection from "@/components/vector/ScalabilitySection";
import CallToAction from "@/components/vector/CallToAction";

const Vector = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      
      <main>
        <HeroSection />
        <TrustedBy />
        <Features />
        <DeploymentOptions />
        <Integrations />
        <UseCases />
        <Testimonials />
        <ScalabilitySection />
        <CallToAction />
      </main>
      
    </div>
  );
};

export default Vector;
