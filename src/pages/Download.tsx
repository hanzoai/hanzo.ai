
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DownloadHero from "@/components/download/DownloadHero";
import DownloadFeatures from "@/components/download/DownloadFeatures";
import VoiceFeature from "@/components/download/VoiceFeature";
import TextInteraction from "@/components/download/TextInteraction";
import ScreenCapture from "@/components/download/ScreenCapture";
import Customization from "@/components/download/Customization";
import Integrations from "@/components/download/Integrations";
import Extensions from "@/components/download/Extensions";
import FAQ from "@/components/download/FAQ";
import CallToAction from "@/components/download/CallToAction";

const Download = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <DownloadHero />
        <DownloadFeatures />
        <VoiceFeature />
        <TextInteraction />
        <ScreenCapture />
        <Customization />
        <Extensions />
        <Integrations />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Download;
