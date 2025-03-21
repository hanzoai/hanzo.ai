
import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureSlideProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  link: string;
}

const FeatureSlide: React.FC<FeatureSlideProps> = ({
  title,
  description,
  icon: Icon,
  color,
  link
}) => {
  return (
    <div className="feature-card h-full w-full flex flex-col items-center p-6 rounded-2xl border border-gray-800 bg-black/50 backdrop-blur-sm">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${color}`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-white text-center">{title}</h3>
      
      <p className="text-gray-300 text-center mb-6 flex-grow">
        {description}
      </p>
      
      <a href={link} className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm bg-black/50 border border-white/20 text-white hover:bg-white/10 transition-colors">
        Learn More
      </a>
    </div>
  );
};

export default FeatureSlide;
