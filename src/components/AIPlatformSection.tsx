
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import AITunnelAnimation from "@/components/animations/AITunnelAnimation";
import PlatformHeader from "@/components/platform-section/PlatformHeader";
import PlatformTabs from "@/components/platform-section/PlatformTabs";
import PlatformTabContent from "@/components/platform-section/PlatformTabContent";
import PlatformTechnologies from "@/components/platform-section/PlatformTechnologies";
import PlatformStyles from "@/components/platform-section/styles";
import { featureData } from "@/components/platform-section/PlatformFeatureData";

const AIPlatformSection = () => {
  const [activeTab, setActiveTab] = useState("platform");
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/30 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-900/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-900/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <PlatformHeader />
        
        {/* AI Tunnel Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <AITunnelAnimation 
            title="Accelerating AI Future"
            subtitle="The platform for modern AI applications"
            showButtons={false}
          />
        </motion.div>
        
        {/* Tabs */}
        <div className="mb-12">
          <PlatformTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        
        {/* Tab content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <PlatformTabContent features={featureData[activeTab as keyof typeof featureData]} />
        </motion.div>
        
        {/* Technologies and Keywords */}
        <PlatformTechnologies />
      </div>
      
      <PlatformStyles />
    </section>
  );
};

export default AIPlatformSection;
