
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
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Hanzo AI - Accelerating AI for a Better Future</title>
        <meta name="description" content="Your AI future belongs in your hands. With Hanzo, pioneer a new era of intelligence with customizable, private, transparent, and trusted AI solutions." />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
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
