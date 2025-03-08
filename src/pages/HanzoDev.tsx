
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/hanzodev/HeroSection";
import HowItWorks from "@/components/hanzodev/HowItWorks";
import UseCases from "@/components/hanzodev/UseCases";
import Features from "@/components/hanzodev/Features";
import Testimonials from "@/components/hanzodev/Testimonials";
import CallToAction from "@/components/hanzodev/CallToAction";
import PRAgent from "@/components/hanzodev/PRAgent";

const HanzoDev = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <UseCases />
        <Features />
        <PRAgent />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default HanzoDev;
