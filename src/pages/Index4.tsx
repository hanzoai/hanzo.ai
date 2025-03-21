
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/index4/Hero";
import FeatureCards from "@/components/index4/FeatureCards";
import TerminalDemo from "@/components/index4/TerminalDemo";
import CallToAction from "@/components/index4/CallToAction";
import Background from "@/components/index4/Background";
import ScrollToTopButton from "@/components/index4/ScrollToTopButton";

const Index4 = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <Background />
      
      <Navbar />

      <main className="pt-24 pb-16 px-4 md:px-8 relative z-10">
        <Hero />
        <FeatureCards />
        <TerminalDemo />
        <CallToAction />
      </main>

      <Footer />
      
      <ScrollToTopButton scrolled={scrolled} />
    </div>
  );
};

export default Index4;
