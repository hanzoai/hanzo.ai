'use client'

import React from "react";
import { Button } from "@hanzo/ui";
import { ShoppingCart, ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      
      {/* Background effect */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-br from-amber-400/10 via-amber-600/5 to-transparent z-0" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 mb-4 border border-amber-500/30 rounded-full bg-amber-500/10 text-amber-400 text-sm">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Headless E-commerce Platform
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-[var(--white)]">Hanzo</span>
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"> Commerce</span>
          </h1>
          
          <p className="text-neutral-300 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            A powerful headless e-commerce platform with API-first architecture. 
            Build custom shopping experiences with modular components that scale.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-amber-500 hover:bg-amber-600 text-black"
              onClick={() => window.open('https://docs.hanzo.ai/commerce', '_blank')}
            >
              Get Started
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-600 text-[var(--white)] hover:bg-[var(--white)]/10"
              onClick={() => window.open('https://console.hanzo.ai', '_blank')}
            >
              Console
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
