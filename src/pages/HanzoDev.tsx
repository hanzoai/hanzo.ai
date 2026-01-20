import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/hanzodev/HeroSection";
import HowItWorks from "@/components/hanzodev/HowItWorks";
import WhyHanzo from "@/components/hanzodev/WhyHanzo";
import FAQSection from "@/components/hanzodev/FAQSection";
import FooterCTA from "@/components/hanzodev/FooterCTA";

const HanzoDev = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <WhyHanzo />
        <FAQSection />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
};

export default HanzoDev;
