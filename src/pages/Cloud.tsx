
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/cloud/HeroSection";
import Features from "@/components/cloud/Features";
import TechStack from "@/components/cloud/TechStack";
import Security from "@/components/cloud/Security";
import Regions from "@/components/cloud/Regions";
import EnterpriseFeatures from "@/components/cloud/EnterpriseFeatures";
import CallToAction from "@/components/cloud/CallToAction";

const Cloud = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <Regions />
        <Security />
        <EnterpriseFeatures />
        <TechStack />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Cloud;
