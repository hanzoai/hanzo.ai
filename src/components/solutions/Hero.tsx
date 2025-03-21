
import React from "react";
import { motion } from "framer-motion";
import ChromeText from "@/components/ui/chrome-text";

const SolutionsHero: React.FC = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <ChromeText as="h1" className="text-4xl sm:text-5xl font-bold mb-6">
        Enterprise Solutions
      </ChromeText>
      <p className="text-gray-400 text-lg">
        Hanzo delivers a unified ecosystem of AI Cloud infrastructure, developer platforms, and expert consulting 
        to transform how enterprises build, deploy, and scale next-generation applications.
      </p>
    </div>
  );
};

export default SolutionsHero;
