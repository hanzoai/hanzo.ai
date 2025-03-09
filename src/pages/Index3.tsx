
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Zap, Database, Shield, Server, Cloud, Code, Bot, Terminal, Cpu, BarChart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import HeroBanner from "@/components/index3/HeroBanner";
import DXPlatform from "@/components/index3/DXPlatform";
import CloudServices from "@/components/index3/CloudServices";
import TrustedBy from "@/components/platform/TrustedBy";
import WhyHanzo from "@/components/index3/WhyHanzo";
import CallToAction from "@/components/index3/CallToAction";

const Index3 = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main>
        <HeroBanner />
        <DXPlatform />
        <CloudServices />
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/50">
          <WhyHanzo />
          <TrustedBy />
        </div>
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index3;
