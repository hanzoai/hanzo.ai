
import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import PhilosophySection from "@/components/landing/PhilosophySection";
import FeatureShowcase from "@/components/landing/FeatureShowcase";
import DemoShowcase from "@/components/landing/DemoShowcase";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CallToAction from "@/components/landing/CallToAction";
import TrustedBy from "@/components/platform/TrustedBy";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { useInView } from "framer-motion";

const Index = () => {
  const philosophyRef = useRef<HTMLDivElement>(null);
  const philosophyInView = useInView(philosophyRef, { once: true, amount: 0.2 });
  
  const featureRef = useRef<HTMLDivElement>(null);
  const featureInView = useInView(featureRef, { once: true, amount: 0.2 });
  
  useEffect(() => {
    // Smooth scroll behavior
    const smoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", smoothScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Helmet>
        <title>Hanzo AI - The Open Source AI Engineering Platform</title>
        <meta name="description" content="Build and deploy AI applications with complete control. An open source platform designed for developers with tools for inference, vector search, chat, edge functions, and more." />
      </Helmet>
      
      {/* Ambient background with animated dots */}
      <div className="ambient-bg">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="ambient-bg-dot"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${100 + Math.random() * 300}px`,
              height: `${100 + Math.random() * 300}px`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + Math.random() * 15}s`
            }}
          />
        ))}
      </div>
      
      <Navbar />
      <main>
        <HeroSection />
        
        <div ref={philosophyRef} className="opacity-0 transition-opacity duration-1000" 
             style={{ opacity: philosophyInView ? 1 : 0 }}>
          <PhilosophySection />
        </div>
        
        <div ref={featureRef} className="opacity-0 transition-opacity duration-1000" 
             style={{ opacity: featureInView ? 1 : 0 }}>
          <FeatureShowcase />
        </div>
        
        <DemoShowcase />
        <TestimonialsSection />
        <CallToAction />
        <TrustedBy />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
