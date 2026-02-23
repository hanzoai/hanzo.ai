'use client'


import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import IndustryCard from "./IndustryCard";
import ViewAllButton from "./ViewAllButton";

const IndustriesSection: React.FC = () => {
  const industryCards = [
    {
      name: "Financial Services",
      description: "AI-driven solutions for risk assessment, fraud detection, and personalized banking experiences."
    },
    {
      name: "Healthcare",
      description: "Transform patient care with AI-powered diagnostics, medical research, and operational efficiency."
    },
    {
      name: "Manufacturing",
      description: "Optimize production workflows, predictive maintenance, and quality control with AI automation."
    },
    {
      name: "Retail",
      description: "Enhance customer experiences with intelligent recommendations, inventory management, and pricing."
    },
    {
      name: "Technology",
      description: "Build next-generation products and services with AI-enhanced features and capabilities."
    },
    {
      name: "Energy",
      description: "Improve sustainability and operational efficiency with AI-powered grid management and analytics."
    }
  ];

  return (
    <div className="mb-16">
      <SectionHeader
        badge="Industry Solutions"
        badgeColor="bg-[#ffffff]/20 border border-[#ffffff]/30 text-[#ff6b6b]"
        title="AI-Powered Solutions for Every Industry"
        description="Transform your business operations with tailored AI solutions designed for your industry's unique challenges."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {industryCards.map((industry, index) => (
          <IndustryCard 
            key={index}
            name={industry.name}
            description={industry.description}
            index={index}
          />
        ))}
      </div>

      <ViewAllButton 
        href="/solutions"
        text="View all industries"
        hoverColor="purple"
      />
    </div>
  );
};

export default IndustriesSection;
