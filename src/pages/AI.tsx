
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/ai/HeroSection";
import Features from "@/components/ai/Features";
import AIEngineeringPlatform from "@/components/ai/EngineeringPlatform";
import UseCases from "@/components/ai/UseCases";
import TrustedBy from "@/components/ai/TrustedBy";
import Testimonials from "@/components/ai/Testimonials";
import CallToAction from "@/components/ai/CallToAction";

const AI = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <AIEngineeringPlatform />
        <UseCases />
        <TrustedBy />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default AI;
