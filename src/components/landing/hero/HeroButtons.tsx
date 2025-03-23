
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroButtonsProps {
  titleAnimationComplete: boolean;
}

const HeroButtons: React.FC<HeroButtonsProps> = ({ titleAnimationComplete }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: titleAnimationComplete ? 1 : 0, y: titleAnimationComplete ? 0 : 20 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex flex-col sm:flex-row gap-golden-4 justify-center mt-golden-6"
    >
      <Button 
        size="sm" 
        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-golden-4 py-golden-2 h-10 min-w-[152px]"
        onClick={() => navigate('/signup')}
      >
        Get Started
        <ArrowRight className="ml-golden-2 h-4 w-4" />
      </Button>
      
      <Button 
        size="sm" 
        variant="outline" 
        className="text-white border-gray-700 hover:bg-white/10 rounded-full px-golden-4 py-golden-2 h-10 min-w-[152px]"
        onClick={() => window.open('https://github.com/hanzoai', '_blank')}
      >
        <Github className="mr-golden-2 h-4 w-4" />
        Star on GitHub
      </Button>
    </motion.div>
  );
};

export default HeroButtons;
