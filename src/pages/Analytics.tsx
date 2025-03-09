
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/analytics/HeroSection";
import TrustedBy from "@/components/analytics/TrustedBy";
import WebAnalytics from "@/components/analytics/WebAnalytics";
import BuildForGrowth from "@/components/analytics/BuildForGrowth";
import CommerceAnalytics from "@/components/analytics/CommerceAnalytics";
import OpenSource from "@/components/analytics/OpenSource";
import DeveloperFirst from "@/components/analytics/DeveloperFirst";
import AIPowered from "@/components/analytics/AIPowered";
import Security from "@/components/analytics/Security";
import Community from "@/components/analytics/Community";
import CallToAction from "@/components/analytics/CallToAction";

const Analytics = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBy />
        <WebAnalytics />
        <BuildForGrowth />
        <CommerceAnalytics />
        <OpenSource />
        <DeveloperFirst />
        <AIPowered />
        <Security />
        <Community />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Analytics;
