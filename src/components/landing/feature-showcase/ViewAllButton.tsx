
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ViewAllButtonProps {
  href: string;
  text: string;
  hoverColor: string;
}

const ViewAllButton: React.FC<ViewAllButtonProps> = ({ href, text, hoverColor }) => {
  return (
    <div className="flex justify-center mb-12">
      <Button 
        variant="outline" 
        className={`group border-gray-700 hover:border-${hoverColor}-500 hover:bg-${hoverColor}-950/20`}
        asChild
      >
        <a href={href}>
          <span className="mr-2">{text}</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </Button>
    </div>
  );
};

export default ViewAllButton;
