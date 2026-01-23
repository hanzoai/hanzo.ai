import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ZapHero,
  ZapFeatures,
  ZapCodeExample,
  ZapArchitecture,
  ZapCTA,
} from "@/components/zap";

const Zap = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Navbar />
      <main>
        <ZapHero />
        <ZapFeatures />
        <ZapCodeExample />
        <ZapArchitecture />
        <ZapCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Zap;
