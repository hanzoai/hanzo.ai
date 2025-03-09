
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HanzoCodeHero from "@/components/hanzocode/HanzoCodeHero";
import HanzoCodeFeatures from "@/components/hanzocode/HanzoCodeFeatures";
import HanzoCodeBenefits from "@/components/hanzocode/HanzoCodeBenefits";
import HanzoCodeFrontier from "@/components/hanzocode/HanzoCodeFrontier";
import HanzoCodeTestimonials from "@/components/hanzocode/HanzoCodeTestimonials";
import HanzoCodeCTA from "@/components/hanzocode/HanzoCodeCTA";
import HanzoCodeCompanies from "@/components/hanzocode/HanzoCodeCompanies";

const HanzoCode = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HanzoCodeHero />
        <HanzoCodeCompanies />
        <HanzoCodeBenefits />
        <HanzoCodeFeatures />
        <HanzoCodeFrontier />
        <HanzoCodeTestimonials />
        <HanzoCodeCTA />
      </main>
      <Footer />
    </div>
  );
};

export default HanzoCode;
