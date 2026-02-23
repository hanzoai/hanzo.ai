'use client'


import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ViewAllButtonProps {
  href: string;
  text: string;
  hoverColor: string;
}

const ViewAllButton: React.FC<ViewAllButtonProps> = ({ href, text, hoverColor }) => {
  // Map hover colors to Tailwind classes
  const hoverColorMap: Record<string, { bg: string, border: string, text: string }> = {
    blue: {
      bg: "hover:bg-[#ffffff]/20",
      border: "hover:border-[#ffffff]",
      text: "text-[#ffffff] hover:text-[#ff6b6b]"
    },
    purple: {
      bg: "hover:bg-[#ffffff]/20",
      border: "hover:border-[#ffffff]",
      text: "text-[#ffffff] hover:text-[#ff6b6b]"
    },
    green: {
      bg: "hover:bg-[#ffffff]/20",
      border: "hover:border-[#ffffff]",
      text: "text-[#ffffff] hover:text-[#ff6b6b]"
    }
  };
  
  const colorClasses = hoverColorMap[hoverColor] || hoverColorMap.blue;
  
  return (
    <div className="flex justify-center mb-12">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Button 
          variant="outline" 
          size="sm"
          className={cn(
            "group border-gray-700 transition-all duration-300",
            colorClasses.bg,
            colorClasses.border,
            colorClasses.text
          )}
          asChild
        >
          <a href={href || "#"} className="flex items-center gap-2">
            <span>{text}</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </motion.div>
    </div>
  );
};

export default ViewAllButton;
