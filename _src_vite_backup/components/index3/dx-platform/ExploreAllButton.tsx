
import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const ExploreAllButton: React.FC = () => {
  return (
    <div className="text-center mt-8">
      <Button 
        variant="outline" 
        className="group px-6" 
        radius="full"
        asChild
      >
        <Link to="/platform">
          Explore All Platform Tools
          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </div>
  );
};

export default ExploreAllButton;
