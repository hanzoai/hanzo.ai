
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/landing/HeroSection";
import PrinciplesPreview from "@/components/zen/PrinciplesPreview";
import ProductsOverview from "@/components/zen/ProductsOverview";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)] overflow-x-hidden">
      <Helmet>
        <title>Hanzo - Frontier AI for Developers</title>
        <meta name="description" content="Build with next-generation AI models. Deploy anywhere with our open-source platform or scale instantly on our AI cloud infrastructure." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <PrinciplesPreview />
        <ProductsOverview />
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
