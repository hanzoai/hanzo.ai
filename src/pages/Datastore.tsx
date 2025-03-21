
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/pages/datastore/HeroSection";
import KeyFeatures from "@/pages/datastore/KeyFeatures";
import EfficiencySection from "@/pages/datastore/EfficiencySection";
import UseCasesSection from "@/pages/datastore/UseCasesSection";
import GetStartedSection from "@/pages/datastore/GetStartedSection";

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
