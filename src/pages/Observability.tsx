
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/observability/HeroSection";
import TrustedBy from "@/components/observability/TrustedBy";
import Features from "@/components/observability/Features";
import Integrations from "@/components/observability/Integrations";
import OpenSource from "@/components/observability/OpenSource";
import Security from "@/components/observability/Security";
import UnifiedPlatform from "@/components/observability/UnifiedPlatform";
import Benefits from "@/components/observability/Benefits";
import CallToAction from "@/components/observability/CallToAction";

const Observability = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBy />
        <Features />
        <Integrations />
        <OpenSource />
        <Security />
        <UnifiedPlatform />
        <Benefits />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Observability;
