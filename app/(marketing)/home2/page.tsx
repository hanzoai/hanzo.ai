'use client'


import React from "react";
import Hero from "@/components/home2/Hero";
import Features from "@/components/home2/Features";
import CTA from "@/components/home2/CTA";
import Testimonials from "@/components/home2/Testimonials";
import { Toaster } from "@hanzo/ui";

const Home2 = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
            
      
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      
      <Toaster />
    </div>
  );
};

export default Home2;
