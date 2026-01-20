
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/base/HeroSection";
import TrustedBy from "@/components/base/TrustedBy";
import CoreFeatures from "@/components/base/CoreFeatures";
import Templates from "@/components/base/Templates";
import DeveloperExperience from "@/components/base/DeveloperExperience";
import Infrastructure from "@/components/base/Infrastructure";
import AIEngineering from "@/components/base/AIEngineering";
import CallToAction from "@/components/base/CallToAction";
import Community from "@/components/base/Community";
import Compliance from "@/components/base/Compliance";

const Base = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Helmet>
        <title>Hanzo Base - Open Source Backend for Modern Apps | Hanzo AI</title>
        <meta
          name="description"
          content="PostgreSQL database, authentication, edge functions, realtime subscriptions, and storage. Everything you need to build modern applications."
        />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBy />
        <CoreFeatures />
        <Templates />
        <DeveloperExperience />
        <Infrastructure />
        <AIEngineering />
        <Compliance />
        <CallToAction />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default Base;
