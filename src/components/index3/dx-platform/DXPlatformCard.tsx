
import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";
import { Link } from "react-router-dom";

interface DXPlatformCardProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  isHovered: string | null;
  setIsHovered: (id: string | null) => void;
  color?: string;
}

const getColorClasses = (color: string = "indigo", isHovered: boolean) => {
  const colorMap: Record<string, { bg: string, hoverBg: string, text: string, hoverText: string }> = {
    indigo: { 
      bg: "bg-indigo-900/30", 
      hoverBg: "bg-indigo-600/30", 
      text: "text-indigo-400", 
      hoverText: "text-indigo-300" 
    },
    purple: { 
      bg: "bg-purple-900/30", 
      hoverBg: "bg-purple-600/30", 
      text: "text-purple-400", 
      hoverText: "text-purple-300" 
    },
    blue: { 
      bg: "bg-blue-900/30", 
      hoverBg: "bg-blue-600/30", 
      text: "text-blue-400", 
      hoverText: "text-blue-300" 
    },
    green: { 
      bg: "bg-green-900/30", 
      hoverBg: "bg-green-600/30", 
      text: "text-green-400", 
      hoverText: "text-green-300" 
    },
    amber: { 
      bg: "bg-amber-900/30", 
      hoverBg: "bg-amber-600/30", 
      text: "text-amber-400", 
      hoverText: "text-amber-300" 
    },
    teal: { 
      bg: "bg-teal-900/30", 
      hoverBg: "bg-teal-600/30", 
      text: "text-teal-400", 
      hoverText: "text-teal-300" 
    },
    rose: { 
      bg: "bg-rose-900/30", 
      hoverBg: "bg-rose-600/30", 
      text: "text-rose-400", 
      hoverText: "text-rose-300" 
    },
    cyan: { 
      bg: "bg-cyan-900/30", 
      hoverBg: "bg-cyan-600/30", 
      text: "text-cyan-400", 
      hoverText: "text-cyan-300" 
    },
    gray: { 
      bg: "bg-gray-900/30", 
      hoverBg: "bg-gray-700/30", 
      text: "text-gray-400", 
      hoverText: "text-gray-300" 
    }
  };

  const colorClasses = colorMap[color] || colorMap.indigo;
  
  return {
    bgClass: isHovered ? colorClasses.hoverBg : colorClasses.bg,
    textClass: isHovered ? colorClasses.hoverText : colorClasses.text
  };
};

const DXPlatformCard: React.FC<DXPlatformCardProps> = ({
  id,
  title,
  description,
  features,
  icon: Icon,
  isHovered,
  setIsHovered,
  color = "indigo"
}) => {
  const isHoveredState = isHovered === id;
  const { bgClass, textClass } = getColorClasses(color, isHoveredState);

  const CardContent = (
    <>
      <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${bgClass}`}>
        <Icon className={`h-6 w-6 transition-colors duration-300 ${textClass}`} />
      </div>
      <ChromeText as="h3" className="text-xl font-bold mb-2">
        {title}
      </ChromeText>
      <p className="text-gray-300 mb-4 text-sm">
        {description}
      </p>
      <ul className="text-gray-400 space-y-2 text-xs mt-auto hidden lg:block">
        {features.slice(0, 2).map((feature, index) => (
          <li key={`${id}-feature-${index}`} className="flex items-start">
            <span className="mr-2">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </>
  );

  const containerClasses = "bg-gray-900/20 border border-gray-800 rounded-xl p-6 group hover:bg-gray-900/30 transition-colors h-full flex flex-col";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 }}
      onMouseEnter={() => setIsHovered(id)}
      onMouseLeave={() => setIsHovered(null)}
    >
      {id === "more" ? (
        <Link to="/platform" className={containerClasses}>
          {CardContent}
        </Link>
      ) : (
        <Link to={`/${id}`} className={containerClasses}>
          {CardContent}
        </Link>
      )}
    </motion.div>
  );
};

export default DXPlatformCard;
