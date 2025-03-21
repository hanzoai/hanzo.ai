
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Background from "@/components/index6/Background";
import HeroSection from "@/components/index6/HeroSection";
import FeaturesGrid from "@/components/index6/FeaturesGrid";
import CallToAction from "@/components/index6/CallToAction";

const Index6 = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  const handleTitleAnimationComplete = () => {
    setTitleAnimationComplete(true);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Background />
      
      <Navbar />
      
      <main>
        <HeroSection 
          onAnimationComplete={handleAnimationComplete}
          animationComplete={animationComplete}
          onTitleAnimationComplete={handleTitleAnimationComplete}
          titleAnimationComplete={titleAnimationComplete}
        />
        
        <FeaturesGrid />

        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index6;
