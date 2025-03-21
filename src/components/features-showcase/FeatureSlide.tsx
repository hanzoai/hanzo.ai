
import React from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureSlideProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  link: string;
  category?: 'ai-cloud' | 'dx-platform';
}

const FeatureSlide: React.FC<FeatureSlideProps> = ({
  title,
  description,
  icon: Icon,
  color,
  link,
  category
}) => {
  // Define category badge styles
  const getCategoryBadge = () => {
    if (!category) return null;
    
    const badgeStyles = {
      'ai-cloud': 'bg-blue-900/30 border-blue-500/30 text-blue-300',
      'dx-platform': 'bg-emerald-900/30 border-emerald-500/30 text-emerald-300'
    };
    
    const badgeText = {
      'ai-cloud': 'AI Cloud',
      'dx-platform': 'DX Platform'
    };
    
    return (
      <div className={`absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-medium border ${badgeStyles[category]}`}>
        {badgeText[category]}
      </div>
    );
  };

  return (
    <motion.div 
      className="feature-card h-full w-full flex flex-col items-center p-6 rounded-xl border border-gray-800 bg-black/50 backdrop-blur-sm relative"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      {getCategoryBadge()}
      
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${color}`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-white text-center">{title}</h3>
      
      <p className="text-gray-300 text-center mb-6 flex-grow">
        {description}
      </p>
      
      <a href={link} className="inline-flex items-center justify-center rounded-full px-6 py-2 text-sm bg-black/50 border border-white/20 text-white hover:bg-white/10 transition-colors">
        Learn More
      </a>
    </motion.div>
  );
};

export default FeatureSlide;
