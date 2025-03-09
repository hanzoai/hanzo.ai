
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "./datastore/HeroSection";
import KeyFeatures from "./datastore/KeyFeatures";
import EfficiencySection from "./datastore/EfficiencySection";
import UseCasesSection from "./datastore/UseCasesSection";
import GetStartedSection from "./datastore/GetStartedSection";

const Datastore = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main>
        <HeroSection />
        <KeyFeatures />
        <EfficiencySection />
        <UseCasesSection />
        <GetStartedSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Datastore;
