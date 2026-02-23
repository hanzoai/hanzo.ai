
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/shadcn-v4/HeroSection";
import FeaturesSection from "@/components/shadcn-v4/FeaturesSection";
import CodeExamplesSection from "@/components/shadcn-v4/CodeExamplesSection";
import MigrationStepsSection from "@/components/shadcn-v4/MigrationStepsSection";
import DemoComponentsSection from "@/components/shadcn-v4/DemoComponentsSection";
import CallToAction from "@/components/shadcn-v4/CallToAction";

const ShadcnV4Page = () => {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Helmet>
        <title>Shadcn/UI with Tailwind v4 and React 19 | Hanzo</title>
        <meta name="description" content="Learn how to use shadcn/ui with Tailwind v4 and React 19. Discover the latest features, improvements, and migration steps." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <CodeExamplesSection />
        <MigrationStepsSection />
        <DemoComponentsSection />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default ShadcnV4Page;
