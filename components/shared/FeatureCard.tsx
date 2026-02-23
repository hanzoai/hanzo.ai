'use client'

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { BrandColor } from "@/lib/constants/brand";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: BrandColor;
  delay?: number;
  className?: string;
}

/**
 * Reusable feature card with consistent brand styling.
 * Use this instead of duplicating card patterns across components.
 */
const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  color = "primary",
  delay = 0,
  className = "",
}) => {
  const isPrimary = color === "primary";

  const cardClass = isPrimary
    ? "bg-gradient-to-br from-white/20 to-white/5 border border-white/20 hover:border-white/40"
    : "bg-gradient-to-br from-white/20 to-white/10 border border-white/20 hover:border-white/40";

  const iconWrapperClass = isPrimary
    ? "bg-white/10"
    : "bg-white/10";

  const iconClass = isPrimary ? "text-white" : "text-white/70";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={`p-6 rounded-xl ${cardClass} transition-all duration-300 ${className}`}
    >
      <div className={`${iconWrapperClass} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
        <Icon className={`h-6 w-6 ${iconClass}`} />
      </div>
      <h3 className="text-xl font-bold mb-2 text-[var(--white)]">{title}</h3>
      <p className="text-neutral-300">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;

// Grid wrapper for consistent feature card layouts
interface FeatureGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  children,
  columns = 3,
  className = "",
}) => {
  const gridClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div className={`grid ${gridClass} gap-6 ${className}`}>
      {children}
    </div>
  );
};

// Feature list item (for inline feature lists)
interface FeatureListItemProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const FeatureListItem: React.FC<FeatureListItemProps> = ({
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div className="flex items-start">
      <div className="p-2 bg-white/10 rounded-lg mr-4">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
