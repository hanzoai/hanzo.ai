
import React from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  delay?: number;
  color?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  features,
  delay = 0,
  color = "blue"
}) => {
  const colorClasses: Record<string, { bg: string, text: string, border: string }> = {
    blue: { 
      bg: "bg-blue-900/20", 
      text: "text-blue-400", 
      border: "border-blue-800/50" 
    },
    purple: { 
      bg: "bg-purple-900/20", 
      text: "text-purple-400", 
      border: "border-purple-800/50" 
    },
    green: { 
      bg: "bg-green-900/20", 
      text: "text-green-400", 
      border: "border-green-800/50" 
    },
    amber: { 
      bg: "bg-amber-900/20", 
      text: "text-amber-400", 
      border: "border-amber-800/50" 
    },
    indigo: { 
      bg: "bg-indigo-900/20", 
      text: "text-indigo-400", 
      border: "border-indigo-800/50" 
    },
    cyan: { 
      bg: "bg-cyan-900/20", 
      text: "text-cyan-400", 
      border: "border-cyan-800/50" 
    },
    rose: { 
      bg: "bg-rose-900/20", 
      text: "text-rose-400", 
      border: "border-rose-800/50" 
    },
  };

  const classes = colorClasses[color] || colorClasses.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className={`${classes.bg} border ${classes.border} rounded-lg p-6 h-full`}
    >
      <div className="flex items-center mb-4">
        <div className="mr-3">
          <Icon className={`h-6 w-6 ${classes.text}`} />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className={`mr-2 ${classes.text}`}>•</span>
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FeatureCard;
