
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
      bg: "bg-[#fd4444]/10",
      text: "text-[#fd4444]",
      border: "border-[#fd4444]/30"
    },
    purple: {
      bg: "bg-[#fd4444]/10",
      text: "text-[#fd4444]",
      border: "border-[#fd4444]/30"
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
      bg: "bg-[#fd4444]/10",
      text: "text-[#fd4444]",
      border: "border-[#fd4444]/30"
    },
    cyan: {
      bg: "bg-[#ff6b6b]/10",
      text: "text-[#ff6b6b]",
      border: "border-[#ff6b6b]/30"
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
        <h3 className="text-xl font-semibold text-[var(--white)]">{title}</h3>
      </div>
      <p className="text-neutral-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className={`mr-2 ${classes.text}`}>•</span>
            <span className="text-neutral-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FeatureCard;
