
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/open-source/HeroSection";
import CoreProjects from "@/components/open-source/CoreProjects";
import DeveloperTools from "@/components/open-source/DeveloperTools";
import InfrastructureComponents from "@/components/open-source/InfrastructureComponents";
import CommunitySection from "@/components/open-source/CommunitySection";

const OpenSource = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Navbar />
      <main>
        <HeroSection />
        <CoreProjects />
        <DeveloperTools />
        <InfrastructureComponents />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default OpenSource;
