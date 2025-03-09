
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CloudServices from "@/components/index3/cloud-services";
import DXPlatform from "@/components/index3/DXPlatform";
import AIPlatformSection from "@/components/AIPlatformSection";
import CallToAction from "@/components/index3/CallToAction";
import TrustedBy from "@/components/platform/TrustedBy";
import Footer from "@/components/Footer";
import Karma from "@/components/index3/Karma";
import { Toaster } from "@/components/ui/toaster";
import ZenPrinciples from "@/components/zen/ZenPrinciples";
import JapaneseWave from "@/components/zen/JapaneseWave";

const Index = () => {
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
        <title>Hanzo AI - Accelerating AI for a Better Future</title>
        <meta name="description" content="Your AI future belongs in your hands. With Hanzo, pioneer a new era of intelligence with customizable, private, transparent, and trusted AI solutions." />
      </Helmet>
      
      {/* Background effects inspired by Zen principles */}
      <div className="fixed inset-0 -z-10">
        <JapaneseWave 
          color="#9b87f5" 
          height={400} 
          opacity={0.02} 
          speed={40} 
          className="absolute bottom-0"
        />
        <JapaneseWave 
          color="#6E59A5" 
          height={400} 
          delay={5} 
          opacity={0.01} 
          speed={50} 
          className="absolute bottom-40"
        />
      </div>
      
      <Navbar />
      <main>
        <Hero />
        
        {/* Zen Principles Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
                The Zen of Hanzo
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Principles that Guide Us</h2>
              <p className="text-gray-300 md:text-lg max-w-3xl mx-auto">
                Our engineering philosophy distilled into core principles that inform everything we build.
                Simplicity, clarity, elegance—our AI engineering manifesto guiding every decision we make.
              </p>
            </div>
            
            <ZenPrinciples />
          </div>
        </section>
        
        <AIPlatformSection />
        <CloudServices />
        <DXPlatform />
        <Karma />
        <TrustedBy />
        <CallToAction />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
