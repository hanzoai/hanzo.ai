
import React from "react";
import AIEngineeringHeader from "./AIEngineeringHeader";
import AIFeatureCard from "./AIFeatureCard";
import { featureData } from "./featureData";

const AIEngineering = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <AIEngineeringHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {featureData.map((feature, index) => (
            <AIFeatureCard
              key={index}
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

export default AIEngineering;
