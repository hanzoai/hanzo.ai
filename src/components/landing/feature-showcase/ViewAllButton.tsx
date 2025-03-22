
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
      bg: "hover:bg-blue-900/20",
      border: "hover:border-blue-500",
      text: "text-blue-400 hover:text-blue-300"
    },
    purple: {
      bg: "hover:bg-purple-900/20",
      border: "hover:border-purple-500",
      text: "text-purple-400 hover:text-purple-300"
    },
    green: {
      bg: "hover:bg-green-900/20",
      border: "hover:border-green-500",
      text: "text-green-400 hover:text-green-300"
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
          size="lg"
          className={cn(
            "group border-gray-700 transition-all duration-300",
            colorClasses.bg,
            colorClasses.border,
            colorClasses.text
          )}
          asChild
        >
          <a href={href} className="flex items-center gap-2">
            <span>{text}</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </motion.div>
    </div>
  );
};

export default ViewAllButton;
