
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import KonamiCodeDetector from "@/components/easter-eggs/KonamiCodeDetector";
import HeroSection from "@/components/landing/HeroSection";
import FeatureShowcase from "@/components/landing/FeatureShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)] overflow-x-hidden">
      <Helmet>
        <title>Hanzo - AI Cloud & Developer Experience Platform</title>
        <meta name="description" content="Enterprise-grade AI infrastructure and developer tools. Build, deploy, and scale AI applications with unmatched reliability." />
      </Helmet>
      
      <KonamiCodeDetector />
      <Navbar />
      
      <main className="relative z-10">
        <HeroSection />
        <FeatureShowcase />
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
