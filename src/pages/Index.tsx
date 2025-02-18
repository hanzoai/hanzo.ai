import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickStart from "@/components/QuickStart";
import Features from "@/components/Features";
import Analytics from "@/components/sections/Analytics";
import Base from "@/components/sections/Base";
import Commerce from "@/components/sections/Commerce";
import Network from "@/components/sections/Network";
import Code from "@/components/sections/Code";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import HeroPoem from "@/components/HeroPoem";
import TeamSlack from "@/components/TeamSlack";
import LastSupper from "@/components/LastSupper";

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
      <Navbar />
      <main>
        <Hero />
        <QuickStart />
        <Features />
        <TeamSlack />
        <Analytics />
        <Base />
        <Commerce />
        <Network />
        <Code />
        <Testimonials />
        <LastSupper members={[]} />
        <HeroPoem />
        <Products />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
