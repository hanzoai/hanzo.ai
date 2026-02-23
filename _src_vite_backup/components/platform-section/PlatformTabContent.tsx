
import React from "react";
import { motion } from "framer-motion";
import PlatformFeatureCard from "./PlatformFeatureCard";
import { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface PlatformTabContentProps {
  features: Feature[];
}

const PlatformTabContent: React.FC<PlatformTabContentProps> = ({ features }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <PlatformFeatureCard
          key={feature.title}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          index={index}
        />
      ))}
    </div>
  );
};

export default PlatformTabContent;
