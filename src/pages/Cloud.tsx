
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ZenBackground from "@/components/zen/ZenBackground";
import ZenQuoteSection from "@/components/zen/ZenQuoteSection";
import CloudHero from "@/components/cloud/CloudHero";
import { Toaster } from "@/components/ui/toaster";

const Cloud = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)] overflow-x-hidden">
      <Helmet>
        <title>Hanzo Cloud - Harmonious Infrastructure</title>
        <meta name="description" content="Infrastructure that scales with intention. Deploy with simplicity, scale with wisdom." />
      </Helmet>
      
      <ZenBackground />
      <Navbar />
      
      <main>
        <CloudHero />
        <ZenQuoteSection 
          quote="The engineer who masters the cloud sees no distinction between the physical and the virtual."
          attribution="Principle 27"
        />
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
};

export default Cloud;
