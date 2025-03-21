
import React, { useState, useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import refactored components
import Background from "@/components/index5/Background";
import Hero from "@/components/index5/Hero";
import AICloudSection from "@/components/index5/AICloudSection";
import DXPlatformSection from "@/components/index5/DXPlatformSection";
import DemoSection from "@/components/index5/DemoSection";
import CallToAction from "@/components/index5/CallToAction";

const Index5 = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 0.98, 0.9]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <Helmet>
        <title>Hanzo AI - Cloud & DX Platform | Future of AI Development</title>
        <meta name="description" content="Hanzo AI Cloud & DX Platform - Build, deploy, and scale AI applications with unmatched speed and efficiency." />
      </Helmet>
      
      {/* Dynamic background with 3D grid */}
      <Background mousePosition={mousePosition} />
      
      <Navbar />
      
      <main>
        {/* Hero Section with Parallax */}
        <Hero 
          mousePosition={mousePosition} 
          opacity={opacity} 
          scale={scale} 
        />
        
        {/* Cloud Platform Section */}
        <AICloudSection />
        
        {/* Developer Experience Platform Section */}
        <DXPlatformSection />
        
        {/* Interactive Demo Section */}
        <DemoSection />
        
        {/* Call to Action */}
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index5;
