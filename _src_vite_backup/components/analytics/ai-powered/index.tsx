
import React from "react";
import AIPoweredHeader from "./AIPoweredHeader";
import AIFeatureList from "./AIFeatureList";
import AIAnalysisDemo from "./AIAnalysisDemo";

const AIPowered = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/20 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#fd4444]/10 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <AIPoweredHeader />
        <AIFeatureList />
        <AIAnalysisDemo />
      </div>
    </section>
  );
};

export default AIPowered;
