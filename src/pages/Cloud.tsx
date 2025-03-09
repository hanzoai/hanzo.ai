
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
import CloudDeploymentAnimation from "@/components/animations/CloudDeploymentAnimation";

const Cloud = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Cloud Deployment Architecture</h2>
            <div className="max-w-4xl mx-auto">
              <CloudDeploymentAnimation />
            </div>
          </div>
        </section>
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
