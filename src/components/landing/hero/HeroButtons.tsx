
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { heroData } from "./hero-data";

interface HeroButtonsProps {
  titleAnimationComplete: boolean;
}

const HeroButtons: React.FC<HeroButtonsProps> = ({ titleAnimationComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={titleAnimationComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
    >
      <Button 
        size="lg" 
        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-[var(--white)] px-8 py-6 text-lg rounded-lg"
      >
        <Link to={heroData.primaryButtonLink} className="flex items-center">
          {heroData.primaryButtonText}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
      
      <Button 
        size="lg" 
        variant="outline" 
        className="text-[var(--white)] border-gray-700 hover:bg-[var(--white)]/10 px-8 py-6 text-lg rounded-lg"
      >
        <Link to={heroData.secondaryButtonLink}>
          {heroData.secondaryButtonText}
        </Link>
      </Button>
    </motion.div>
  );
};

export default HeroButtons;
