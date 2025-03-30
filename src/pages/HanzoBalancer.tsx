
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
import PlatformVision from "@/components/balancer/PlatformVision";
import CoreCapabilities from "@/components/balancer/CoreCapabilities";
import EnterpriseSolutions from "@/components/balancer/EnterpriseSolutions";

const HanzoBalancer = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Navbar />
      <HeroSection />
      <FeaturesOverview />
      <PlatformVision />
      <CoreCapabilities />
      <ArchitectureOverview />
      <EnterpriseSolutions />
      <UseCases />
      <Ecosystem />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HanzoBalancer;
