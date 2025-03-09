
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickStart from "@/components/QuickStart";
import Features from "@/components/Features";
import CloudServices from "@/components/index3/CloudServices";
import DXPlatform from "@/components/index3/DXPlatform";
import WhyHanzo from "@/components/index3/WhyHanzo";
import CallToAction from "@/components/index3/CallToAction";
import Products from "@/components/Products";
import TeamSlack from "@/components/TeamSlack";
import LastSupper from "@/components/LastSupper";
import TrustedBy from "@/components/platform/TrustedBy";
import Footer from "@/components/Footer";

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
        <title>Hanzo AI - Empowering the Next Era of Intelligent Applications</title>
        <meta name="description" content="Reimagine What's Possible with AI - Hanzo is pioneering the future of software development and operational intelligence with an integrated suite of autonomous AI-powered tools." />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <CloudServices />
        <DXPlatform />
        <Features />
        <WhyHanzo />
        <TrustedBy />
        <TeamSlack />
        <Products />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
