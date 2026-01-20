import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/landing/HeroSection";
import TrustedBySection from "@/components/landing/TrustedBySection";
import PlatformOverviewSection from "@/components/landing/PlatformOverviewSection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import DeveloperExperienceSection from "@/components/landing/DeveloperExperienceSection";
import OpenSourceSection from "@/components/landing/OpenSourceSection";
import PricingPreviewSection from "@/components/landing/PricingPreviewSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import { Toaster } from "@/components/ui/toaster";
import ChatWidget from "@/components/chat/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Helmet>
        <title>Hanzo - Frontier AI for Developers</title>
        <meta name="description" content="Build with next-generation AI models. Deploy anywhere with our open-source platform or scale instantly on our AI cloud infrastructure." />
      </Helmet>

      <Navbar />

      <main>
        <HeroSection />
        <TrustedBySection />
        <PlatformOverviewSection />
        <UseCasesSection />
        <DeveloperExperienceSection />
        <OpenSourceSection />
        <PricingPreviewSection />
        <FinalCTASection />
      </main>

      <Footer />
      <Toaster />
      <ChatWidget />
    </div>
  );
};

export default Index;
