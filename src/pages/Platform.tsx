
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/platform/HeroSection";
import Features from "@/components/platform/Features";
import TrustedBy from "@/components/platform/TrustedBy";
import DeveloperLove from "@/components/platform/DeveloperLove";
import Usage from "@/components/platform/Usage";
import CallToAction from "@/components/platform/CallToAction";

const Platform = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <TrustedBy />
        <DeveloperLove />
        <Usage />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Platform;
