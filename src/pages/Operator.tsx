
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import OperativeHero from "@/components/operator/OperativeHero";
import OperativeFeatures from "@/components/operator/OperativeFeatures";
import OperativeDemo from "@/components/operator/OperativeDemo";
import OperativeUsage from "@/components/operator/OperativeUsage";
import OperativeModels from "@/components/operator/OperativeModels";
import OperativeCTA from "@/components/operator/OperativeCTA";

const Operator = () => {
  return (
    <>
      <Helmet>
        <title>Hanzo Operative - Self-Operating Computer Framework</title>
        <meta 
          name="description" 
          content="A framework to enable multimodal AI models to operate a computer using the same inputs and outputs as a human operator."
        />
      </Helmet>
      
      <Navbar />
      
      <main className="bg-[var(--black)] pt-16">
        <OperativeHero />
        <OperativeFeatures />
        <OperativeDemo />
        <OperativeUsage />
        <OperativeModels />
        <OperativeCTA />
      </main>
      
      <Footer />
    </>
  );
};

export default Operator;
