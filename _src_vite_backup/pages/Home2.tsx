
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home2/Hero";
import Features from "@/components/home2/Features";
import CTA from "@/components/home2/CTA";
import Testimonials from "@/components/home2/Testimonials";
import { Toaster } from "@/components/ui/toaster";

const Home2 = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Helmet>
        <title>Hanzo AI - Enterprise AI Engineering Platform</title>
        <meta name="description" content="Build, deploy, and scale AI applications with enterprise-grade reliability. The complete platform for AI engineering teams." />
      </Helmet>
      
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Home2;
