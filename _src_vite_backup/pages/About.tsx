
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import HistoryTimeline from "@/components/about/HistoryTimeline";
import ZenPrinciples from "@/components/about/ZenPrinciples";
import SenseiMethod from "@/components/about/SenseiMethod";
import OurStory from "@/components/about/OurStory";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>About Hanzo Industries - Our Story and Evolution</title>
        <meta
          name="description"
          content="Learn about Hanzo Industries' journey from a crowd-powered marketing platform to a Techstars-backed AI venture, and our guiding philosophy."
        />
      </Helmet>

      <Navbar />

      <main className="pt-20">
        <AboutHero />
        <OurStory />
        <HistoryTimeline />
        <ZenPrinciples />
        <SenseiMethod />
      </main>

      <Footer />
    </div>
  );
};

export default About;
