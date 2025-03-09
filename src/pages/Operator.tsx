
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import OperatorHero from "@/components/operator/OperatorHero";
import OperatorFeatures from "@/components/operator/OperatorFeatures";
import OperatorDemo from "@/components/operator/OperatorDemo";
import OperatorUsage from "@/components/operator/OperatorUsage";
import OperatorModels from "@/components/operator/OperatorModels";
import OperatorCTA from "@/components/operator/OperatorCTA";

const Operator = () => {
  return (
    <>
      <Helmet>
        <title>Hanzo Operator - Self-Operating Computer Framework</title>
        <meta 
          name="description" 
          content="A framework to enable multimodal AI models to operate a computer using the same inputs and outputs as a human operator."
        />
      </Helmet>
      
      <Navbar />
      
      <main className="bg-black pt-16">
        <OperatorHero />
        <OperatorFeatures />
        <OperatorDemo />
        <OperatorUsage />
        <OperatorModels />
        <OperatorCTA />
      </main>
      
      <Footer />
    </>
  );
};

export default Operator;
