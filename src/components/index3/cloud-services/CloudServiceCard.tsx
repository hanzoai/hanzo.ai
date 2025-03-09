
import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";

interface CloudServiceCardProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  isHovered: string | null;
  setIsHovered: (id: string | null) => void;
}

const CloudServiceCard: React.FC<CloudServiceCardProps> = ({
  id,
  title,
  description,
  features,
  icon: Icon,
  isHovered,
  setIsHovered,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="bg-gray-900/20 border border-gray-800 rounded-xl p-8 group hover:bg-gray-900/30 transition-colors"
      onMouseEnter={() => setIsHovered(id)}
      onMouseLeave={() => setIsHovered(null)}
    >
      <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${isHovered === id ? "bg-purple-600/30" : "bg-purple-900/30"}`}>
        <Icon className={`h-6 w-6 transition-colors duration-300 ${isHovered === id ? "text-purple-300" : "text-purple-400"}`} />
      </div>
      <ChromeText as="h3" className="text-2xl font-bold mb-4">
        {title}
      </ChromeText>
      <p className="text-gray-300 mb-4">
        {description}
      </p>
      <ul className="text-gray-400 space-y-2">
        {features.map((feature, index) => (
          <li key={`${id}-feature-${index}`} className="flex items-start">
            <span className="mr-2">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default CloudServiceCard;
