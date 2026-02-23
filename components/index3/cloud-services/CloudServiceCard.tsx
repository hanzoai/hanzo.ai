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
      bg: "bg-[#ffffff]/20",
      hoverBg: "bg-[#cccccc]/30",
      text: "text-[#ffffff]",
      hoverText: "text-[#ff6b6b]"
    },
    purple: {
      bg: "bg-[#ffffff]/20",
      hoverBg: "bg-[#cccccc]/30",
      text: "text-[#ffffff]",
      hoverText: "text-[#ff6b6b]"
    },
    blue: {
      bg: "bg-[#ff6b6b]/20",
      hoverBg: "bg-[#ffffff]/30",
      text: "text-[#ff6b6b]",
      hoverText: "text-[#ffffff]"
    },
    green: {
      bg: "bg-green-900/30",
      hoverBg: "bg-green-600/30",
      text: "text-green-400",
      hoverText: "text-green-300"
    },
    teal: {
      bg: "bg-[#ffffff]/20",
      hoverBg: "bg-[#cccccc]/30",
      text: "text-[#ffffff]",
      hoverText: "text-[#ff6b6b]"
    },
    amber: {
      bg: "bg-amber-900/30",
      hoverBg: "bg-amber-600/30",
      text: "text-amber-400",
      hoverText: "text-amber-300"
    },
    indigo: {
      bg: "bg-[#ffffff]/20",
      hoverBg: "bg-[#cccccc]/30",
      text: "text-[#ffffff]",
      hoverText: "text-[#ff6b6b]"
    },
    rose: {
      bg: "bg-[#ffffff]/20",
      hoverBg: "bg-[#cccccc]/30",
      text: "text-[#ffffff]",
      hoverText: "text-[#ff6b6b]"
    },
    cyan: {
      bg: "bg-[#ff6b6b]/20",
      hoverBg: "bg-[#ffffff]/30",
      text: "text-[#ff6b6b]",
      hoverText: "text-[#ffffff]"
    },
    gray: {
      bg: "bg-gray-900/30",
      hoverBg: "bg-gray-700/30",
      text: "text-neutral-400",
      hoverText: "text-neutral-300"
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
      <p className="text-neutral-300 mb-4 text-sm">
        {description}
      </p>
      <ul className="text-neutral-400 space-y-2 text-xs mt-auto hidden lg:block">
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
