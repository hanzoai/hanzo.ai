
import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureSlideProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  isActive: boolean;
}

const FeatureSlide: React.FC<FeatureSlideProps> = ({
  title,
  description,
  icon: Icon,
  color,
  isActive
}) => {
  return (
    <motion.div 
      className={`h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <div className={`mx-auto mb-6 w-24 h-24 rounded-full flex items-center justify-center ${color}`}>
          <Icon className="h-12 w-12 text-white" />
        </div>
        
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 chrome-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {title}
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default FeatureSlide;
