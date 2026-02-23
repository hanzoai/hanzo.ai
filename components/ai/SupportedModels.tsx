
import React from "react";
import ModelHeader from "./models/ModelHeader";
import ModelCategory from "./models/ModelCategory";
import AdditionalFeatures from "./models/AdditionalFeatures";
import modelCategories from "./models/data/modelData";

const SupportedModels = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ModelHeader />

        {/* Model Categories */}
        {modelCategories.map((category, categoryIndex) => (
          <ModelCategory 
            key={categoryIndex} 
            category={category} 
            categoryIndex={categoryIndex} 
          />
        ))}

        {/* Additional Features Section */}
        <AdditionalFeatures />
      </div>
    </section>
  );
};

export default SupportedModels;
