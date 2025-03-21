
import React from "react";
import ModelCategoryCard from "./ModelCategoryCard";

interface ModelData {
  name: string;
  provider: string;
  features: string[];
}

interface ModelCategoryProps {
  category: {
    name: string;
    description: string;
    models: ModelData[];
  };
  categoryIndex: number;
}

const ModelCategory = ({ category, categoryIndex }: ModelCategoryProps) => {
  return (
    <div key={categoryIndex} className="mb-20">
      <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
      <p className="text-gray-300 mb-8">{category.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.models.map((model, modelIndex) => (
          <ModelCategoryCard 
            key={modelIndex} 
            model={model} 
            modelIndex={modelIndex} 
          />
        ))}
      </div>
    </div>
  );
};

export default ModelCategory;
