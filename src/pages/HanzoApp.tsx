
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HanzoAppHero from "@/components/hanzoapp/HanzoAppHero";
import HanzoAppFeatures from "@/components/hanzoapp/HanzoAppFeatures";
import HanzoAppUseCases from "@/components/hanzoapp/HanzoAppUseCases";
import HanzoAppPricing from "@/components/hanzoapp/HanzoAppPricing";
import HanzoAppCommunity from "@/components/hanzoapp/HanzoAppCommunity";
import HanzoAppWebinars from "@/components/hanzoapp/HanzoAppWebinars";
import HanzoAppEnterprise from "@/components/hanzoapp/HanzoAppEnterprise";

const HanzoApp = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Navbar />
      <main>
        <HanzoAppHero />
        <HanzoAppFeatures />
        <HanzoAppUseCases />
        <HanzoAppPricing />
        <HanzoAppCommunity />
        <HanzoAppWebinars />
        <HanzoAppEnterprise />
      </main>
      <Footer />
    </div>
  );
};

export default HanzoApp;
