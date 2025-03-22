
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
      className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
    >
      <Button 
        size="lg" 
        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-8 py-7 text-lg"
        onClick={() => navigate('/signup')}
      >
        Get Started
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      
      <Button 
        size="lg" 
        variant="outline" 
        className="text-white border-gray-700 hover:bg-white/10 rounded-full px-8 py-7 text-lg"
        onClick={() => window.open('https://github.com/hanzoai', '_blank')}
      >
        <Github className="mr-2 h-5 w-5" />
        Star on GitHub
      </Button>
    </motion.div>
  );
};

export default HeroButtons;
