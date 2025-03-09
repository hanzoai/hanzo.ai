
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/commerce/HeroSection";
import Features from "@/components/commerce/Features";
import APIEndpoints from "@/components/commerce/APIEndpoints";
import UseCases from "@/components/commerce/UseCases";
import TechStack from "@/components/commerce/TechStack";
import Integrations from "@/components/commerce/Integrations";
import CallToAction from "@/components/commerce/CallToAction";

const Commerce = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <APIEndpoints />
        <UseCases />
        <Integrations />
        <TechStack />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Commerce;
