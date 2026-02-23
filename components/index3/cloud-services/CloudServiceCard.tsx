'use client'


import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import ChromeText from "@/components/ui/chrome-text";

interface CloudServiceCardProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  isHovered: string | null;
  setIsHovered: (id: string | null) => void;
  color?: string;
}

const getColorClasses = (color: string = "brand", isHovered: boolean) => {
  const colorMap: Record<string, { bg: string, hoverBg: string, text: string, hoverText: string }> = {
    brand: {
      bg: "bg-primary/20",
      hoverBg: "bg-[#cccccc]/30",
      text: "text-foreground",
      hoverText: "text-foreground/70"
    },
    purple: {
      bg: "bg-primary/20",
      hoverBg: "bg-[#cccccc]/30",
      text: "text-foreground",
      hoverText: "text-foreground/70"
    },
    blue: {
      bg: "bg-primary/20",
      hoverBg: "bg-primary/30",
      text: "text-foreground/70",
      hoverText: "text-foreground"
    },
    green: {
      bg: "bg-primary/10",
      hoverBg: "bg-primary/10",
      text: "text-foreground/70",
      hoverText: "text-foreground/70"
    },
    teal: {
      bg: "bg-primary/20",
      hoverBg: "bg-[#cccccc]/30",
      text: "text-foreground",
      hoverText: "text-foreground/70"
    },
    amber: {
      bg: "bg-primary/10",
      hoverBg: "bg-primary/10",
      text: "text-foreground/60",
      hoverText: "text-foreground/60"
    },
    indigo: {
      bg: "bg-primary/20",
      hoverBg: "bg-[#cccccc]/30",
      text: "text-foreground",
      hoverText: "text-foreground/70"
    },
    rose: {
      bg: "bg-primary/20",
      hoverBg: "bg-[#cccccc]/30",
      text: "text-foreground",
      hoverText: "text-foreground/70"
    },
    cyan: {
      bg: "bg-primary/20",
      hoverBg: "bg-primary/30",
      text: "text-foreground/70",
      hoverText: "text-foreground"
    },
    gray: {
      bg: "bg-gray-900/30",
      hoverBg: "bg-gray-700/30",
      text: "text-muted-foreground",
      hoverText: "text-foreground/80"
    }
  };

  const colorClasses = colorMap[color] || colorMap.brand;
  
  return {
    bgClass: isHovered ? colorClasses.hoverBg : colorClasses.bg,
    textClass: isHovered ? colorClasses.hoverText : colorClasses.text
  };
};

const CloudServiceCard: React.FC<CloudServiceCardProps> = ({
  id,
  title,
  description,
  features,
  icon: Icon,
  isHovered,
  setIsHovered,
  color = "brand"
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
      <p className="text-foreground/80 mb-4 text-sm">
        {description}
      </p>
      <ul className="text-muted-foreground space-y-2 text-xs mt-auto hidden lg:block">
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
        <Link href="/cloud" className={containerClasses}>
          {CardContent}
        </Link>
      ) : (
        <Link href={`/${id}`} className={containerClasses}>
          {CardContent}
        </Link>
      )}
    </motion.div>
  );
};

export default CloudServiceCard;
