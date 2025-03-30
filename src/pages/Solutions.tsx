
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionsHero from "@/components/solutions/Hero";
import MainCards from "@/components/solutions/MainCards";
import UnifiedAICloud from "@/components/solutions/UnifiedAICloud";
import ExpertServices from "@/components/solutions/ExpertServices";
import CallToAction from "@/components/index3/CallToAction";

const Solutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SolutionsHero />
          <MainCards />
          <UnifiedAICloud />
          <ExpertServices />
          <CallToAction />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Solutions;
