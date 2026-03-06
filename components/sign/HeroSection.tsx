'use client'

import React from "react";
import { Button } from "@hanzo/ui";
import { PenLine, ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-gray-900/50 to-background" />
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-br from-white/20 via-white/15 to-transparent z-0" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 mb-4 border border-border rounded-full bg-primary/5 text-foreground/60 text-sm">
            <PenLine className="mr-2 h-4 w-4" />
            Document Signing Platform
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-[var(--white)]">Hanzo</span>
            <span className="bg-gradient-to-r from-white/20 to-white/10 bg-clip-text text-transparent"> Sign</span>
          </h1>

          <p className="text-foreground/80 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Secure, legally binding electronic signatures for teams. Create reusable templates,
            add signing fields, and manage the entire signing workflow.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-primary/10 hover:bg-primary/10 text-primary-foreground"
              onClick={() => window.open('https://sign.hanzo.ai', '_blank')}
            >
              Get Started
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-[var(--white)] hover:bg-[var(--white)]/10"
              onClick={() => window.open('https://docs.hanzo.ai/docs/services/sign', '_blank')}
            >
              Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
