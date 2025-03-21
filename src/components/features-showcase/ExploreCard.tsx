
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ExploreCardProps {
  title: string;
  description: string;
  link: string;
}

const ExploreCard: React.FC<ExploreCardProps> = ({
  title,
  description,
  link
}) => {
  return (
    <motion.div 
      className="feature-card h-full w-full flex flex-col items-center p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <ArrowRight className="h-8 w-8 text-white" />
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-white text-center">{title}</h3>
      
      <p className="text-gray-300 text-center mb-6 flex-grow">
        {description}
      </p>
      
      <a 
        href={link} 
        className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-2 text-sm bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 transition-colors"
      >
        Explore Platform
        <ArrowRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
};

export default ExploreCard;
