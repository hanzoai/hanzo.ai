'use client'


import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AlertTriangle, Eye, Zap } from "lucide-react";
import AIFeatureCard from "./AIFeatureCard";

const AIFeatureList = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const features = [
    {
      icon: <Eye className="h-10 w-10 text-foreground" />,
      title: "Real-time anomaly detection",
      description: "Automatically identify unusual patterns and potential issues before they impact your business.",
      delay: 0
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-foreground/70" />,
      title: "Predictive alerts and proactive monitoring",
      description: "Get alerted about potential problems before they occur with AI-powered predictive monitoring.",
      delay: 0.1
    },
    {
      icon: <Zap className="h-10 w-10 text-foreground/70" />,
      title: "Deep integration with Hanzo Cloud and Base",
      description: "Connect your analytics with your entire infrastructure for comprehensive visibility.",
      delay: 0.2
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16" ref={ref}>
      {features.map((feature, index) => (
        <AIFeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          delay={feature.delay}
          index={index}
        />
      ))}
    </div>
  );
};

export default AIFeatureList;
