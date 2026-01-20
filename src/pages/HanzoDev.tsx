import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/hanzodev/HeroSection";
import PricingSection from "@/components/hanzodev/PricingSection";
import CodeOnboardingSection from "@/components/hanzodev/CodeOnboardingSection";
import Testimonials from "@/components/hanzodev/Testimonials";
import MultiAgentSection from "@/components/hanzodev/MultiAgentSection";
import CLISection from "@/components/hanzodev/CLISection";
import FAQSection from "@/components/hanzodev/FAQSection";
import CallToAction from "@/components/hanzodev/CallToAction";

const HanzoDev = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Navbar />
      <main>
        <HeroSection />
        <PricingSection />
        <CodeOnboardingSection />
        <Testimonials />
        <MultiAgentSection />
        <CLISection />
        <FAQSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default HanzoDev;
