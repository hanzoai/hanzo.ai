
import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
  hoverColor?: string;
  link?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  icon, 
  title, 
  description, 
  color = "bg-blue-900/30", 
  hoverColor = "bg-blue-600/40",
  link = "#"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2 }
      }}
      className="bg-gray-900/20 border border-gray-800 rounded-xl p-6 hover:border-gray-700 h-full transition-all group relative overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/90 to-gray-900/70 opacity-50 z-0"></div>
      
      {/* Hover background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
      
      <div className="relative z-10">
        {/* Icon container with dynamic color and hover effect */}
        <div className={cn(
          "w-20 h-20 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300", 
          color,
          `group-hover:${hoverColor}`,
          "group-hover:shadow-lg group-hover:scale-110"
        )}>
          {React.cloneElement(icon as React.ReactElement, { className: "h-10 w-10" })}
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors">{title}</h3>
        <p className="text-gray-400 mb-5 group-hover:text-gray-300 transition-colors">{description}</p>
        
        {/* Learn more button */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20 p-0 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
          asChild
        >
          <a href={link}>
            <span>Learn more</span>
            <ArrowUpRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
