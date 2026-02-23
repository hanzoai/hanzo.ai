'use client'


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
      'ai-cloud': 'bg-white/20 border-white/30 text-white',
      'dx-platform': 'bg-white/20 border-white/30 text-white'
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
      className="feature-card backdrop-blur-sm bg-[var(--black)]/30 border border-gray-800 p-6 rounded-xl relative group"
      whileHover={{
        y: -5,
        borderColor: "rgba(253, 68, 68, 0.5)",
        boxShadow: "0 10px 25px -5px rgba(253, 68, 68, 0.15)"
      }}
      transition={{ duration: 0.2 }}
    >
      {getCategoryBadge()}
      
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${color} transform transition-transform group-hover:scale-110 duration-300`}>
        <Icon className="h-7 w-7 text-[var(--white)]" />
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-[var(--white)]">{title}</h3>
      
      <p className="text-neutral-300 mb-6">
        {description}
      </p>
      
      <a
        href={link || "#"}
        className="inline-flex items-center text-sm text-white hover:text-white/70 transition-colors"
      >
        Learn More
        <svg 
          className="ml-1 w-4 h-4 transform transition-transform group-hover:translate-x-1 duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </motion.div>
  );
};

export default FeatureSlide;
