
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ZenHero from "@/components/zen/ZenHero";
import PrinciplesPreview from "@/components/zen/PrinciplesPreview";
import ProductsOverview from "@/components/zen/ProductsOverview";
import ZenBackground from "@/components/zen/ZenBackground";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Helmet>
        <title>Hanzo - Engineering Enlightenment</title>
        <meta name="description" content="Forge software with wisdom. Build products aligned with the 88 principles of engineering enlightenment." />
      </Helmet>
      
      <ZenBackground />
      <Navbar />
      
      <main>
        <ZenHero />
        <PrinciplesPreview />
        <ProductsOverview />
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
