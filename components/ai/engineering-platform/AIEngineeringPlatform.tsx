'use client'


import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import CloudInfrastructure from "./CloudInfrastructure";
import PlatformDashboard from "./PlatformDashboard";
import { featureData } from "@/components/base/ai-engineering/featureData";

const AIEngineeringPlatform: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] to-[#ff6b6b]">
            AI Engineering Platform
          </h2>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
            Build, deploy, and scale AI applications with an integrated suite of tools designed for modern engineering teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div>
            <CloudInfrastructure />
          </div>
          <div>
            <PlatformDashboard />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureData.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              featurePoints={feature.featurePoints}
              delay={feature.delay}
              iconBgClass={feature.iconBgClass}
              iconTextClass={feature.iconTextClass}
              bulletColor={feature.bulletColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIEngineeringPlatform;
