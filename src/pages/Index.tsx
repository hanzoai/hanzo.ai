
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CloudServices from "@/components/index3/cloud-services";
import AIPlatformSection from "@/components/AIPlatformSection";
import CallToAction from "@/components/index3/CallToAction";
import TrustedBy from "@/components/platform/TrustedBy";
import Footer from "@/components/Footer";
import Karma from "@/components/index3/Karma";
import { Toaster } from "@/components/ui/toaster";
import JapaneseWave from "@/components/zen/JapaneseWave";
import { GridLines, BlueprintLine } from "@/components/ui/architectural-elements";
import ReferralBanner from "@/components/referrals/ReferralBanner";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
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

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Helmet>
        <title>Hanzo AI - Accelerating AI for a Better Future</title>
        <meta name="description" content="Your AI future belongs in your hands. With Hanzo, pioneer a new era of intelligence with customizable, private, transparent, and trusted AI solutions." />
      </Helmet>
      
      {/* Main architectural grid for the entire page - with reduced opacity */}
      <div className="fixed inset-0 -z-10">
        <GridLines spacing={80} opacity={0.07} />
        <BlueprintLine orientation="vertical" position="10%" color="rgba(147, 51, 234, 0.1)" />
        <BlueprintLine orientation="vertical" position="90%" color="rgba(147, 51, 234, 0.1)" />
        <BlueprintLine orientation="horizontal" position="10%" color="rgba(37, 99, 235, 0.1)" />
        <BlueprintLine orientation="horizontal" position="90%" color="rgba(37, 99, 235, 0.1)" />
        
        <JapaneseWave 
          color="#9b87f5" 
          height={400} 
          opacity={0.01} 
          speed={50} 
          className="absolute bottom-0"
        />
        <JapaneseWave 
          color="#6E59A5" 
          height={400} 
          delay={5} 
          opacity={0.008} 
          speed={60} 
          className="absolute bottom-40"
        />
      </div>
      
      <Navbar />
      <main>
        <Hero />
        <div className="max-w-5xl mx-auto px-4 text-center mt-8 mb-8">
          <Button 
            size="lg" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg"
            onClick={handleSignUp}
          >
            Get Started for Free <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <ReferralBanner />
        <CloudServices />
        <AIPlatformSection />
        <CallToAction />
        <Karma />
        <TrustedBy />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
