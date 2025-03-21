
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Check } from "lucide-react";

interface ModelFeature {
  name: string;
}

interface ModelData {
  name: string;
  provider: string;
  features: string[];
}

interface ModelCategoryCardProps {
  model: ModelData;
  modelIndex: number;
}

const ModelCategoryCard = ({ model, modelIndex }: ModelCategoryCardProps) => {
  return (
    <motion.div
      key={modelIndex}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: modelIndex * 0.1 }}
      className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 hover:bg-purple-900/30 transition-colors"
    >
      <div className="flex items-center mb-3">
        <Cpu className="h-5 w-5 text-purple-400 mr-2" />
        <h4 className="text-xl font-semibold text-white">{model.name}</h4>
      </div>
      <p className="text-sm text-gray-400 mb-4">via {model.provider}</p>
      
      <ul className="space-y-2 mb-6">
        {model.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ModelCategoryCard;
