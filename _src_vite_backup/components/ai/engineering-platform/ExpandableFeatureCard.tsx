
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FeaturePoint {
  text: string;
}

interface ExpandableFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  featurePoints: FeaturePoint[];
  delay: number;
  iconBgClass: string;
  iconTextClass: string;
  bulletColor: string;
}

const ExpandableFeatureCard: React.FC<ExpandableFeatureCardProps> = ({
  icon,
  title,
  description,
  featurePoints,
  delay,
  iconBgClass,
  iconTextClass,
  bulletColor
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-900/20 border border-gray-800 rounded-2xl p-6 h-full"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className={`w-12 h-12 rounded-xl ${iconBgClass} flex items-center justify-center mr-4`}>
            <div className={iconTextClass}>{icon}</div>
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <button 
          onClick={toggleExpand}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isExpanded ? 'bg-[#fd4444]/20' : 'bg-gray-800/50 hover:bg-gray-700/50'}`}
        >
          {isExpanded ? (
            <Minus className="h-4 w-4 text-[#ff6b6b]" />
          ) : (
            <Plus className="h-4 w-4 text-neutral-300" />
          )}
        </button>
      </div>
      
      <p className="text-neutral-300 mb-4">{description}</p>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-2 border-t border-gray-800">
              <h4 className="font-medium text-[var(--white)] mb-3 mt-3">Key Features:</h4>
              <ul className="space-y-2">
                {featurePoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`${bulletColor} mr-2 text-lg`}>•</span>
                    <span className="text-sm text-neutral-300">{point.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ExpandableFeatureCard;
