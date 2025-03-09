
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/balancer/HeroSection";
import FeaturesOverview from "@/components/balancer/FeaturesOverview";
import ArchitectureOverview from "@/components/balancer/ArchitectureOverview";
import UseCases from "@/components/balancer/UseCases";
import Ecosystem from "@/components/balancer/Ecosystem";
import Testimonials from "@/components/balancer/Testimonials";
import CallToAction from "@/components/balancer/CallToAction";

const HanzoBalancer = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <FeaturesOverview />
      <ArchitectureOverview />
      <UseCases />
      <Ecosystem />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HanzoBalancer;
