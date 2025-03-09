
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/hanzobot/HeroSection";
import Features from "@/components/hanzobot/Features";
import Architecture from "@/components/hanzobot/Architecture";
import UseCases from "@/components/hanzobot/UseCases";
import GettingStarted from "@/components/hanzobot/GettingStarted";
import Documentation from "@/components/hanzobot/Documentation";
import Community from "@/components/hanzobot/Community";

const HanzoBot = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <Architecture />
        <UseCases />
        <GettingStarted />
        <Documentation />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default HanzoBot;
