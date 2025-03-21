
import React from "react";
import ModelHeader from "./models/ModelHeader";
import ModelCard from "./models/ModelCard";
import ModelFooter from "./models/ModelFooter";
import { operatorModels } from "./models/operatorModelData";

const OperatorModels = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-black"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ModelHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {operatorModels.map((model, index) => (
            <ModelCard 
              key={index}
              model={model} 
              index={index} 
            />
          ))}
        </div>
        
        <ModelFooter />
      </div>
    </section>
  );
};

export default OperatorModels;
