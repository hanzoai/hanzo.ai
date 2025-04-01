
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ZenHero from "@/components/zen/ZenHero";
import ZenOfHanzoPrinciples from "@/components/zen/ZenOfHanzoPrinciples";
import HexagramsGrid from "@/components/zen/HexagramsGrid";
import ZenBackground from "@/components/zen/ZenBackground";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)] overflow-x-hidden">
      <Helmet>
        <title>Hanzo - Engineering Enlightenment</title>
        <meta name="description" content="Forge software with wisdom. Build products aligned with the principles of engineering enlightenment." />
      </Helmet>
      
      <ZenBackground />
      <Navbar />
      
      <main className="relative z-10">
        <ZenHero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ZenOfHanzoPrinciples />
          <div className="mt-24 mb-20">
            <HexagramsGrid 
              title="The 64 Hexagrams" 
              description="Ancient wisdom mapped to modern AI engineering principles"
            />
          </div>
        </div>
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
