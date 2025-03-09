
import React from "react";
import { motion } from "framer-motion";
import { Bot, Search, BrainCircuit, Image, FileText, Tag } from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";
import AnimatedSection, { AnimatedHeading, AnimatedStaggerContainer } from "@/components/ui/animated-section";
import { createAnimationVariant, curves } from "@/components/ui/animation-variants";

const useCaseVariant = createAnimationVariant("fadeInBlur", {
  duration: 0.35,
  curve: curves.smooth,
  distance: 15,
  blur: 5
});

const iconVariant = createAnimationVariant("popIn", {
  duration: 0.35,
  curve: curves.bouncy,
  blur: 3
});

interface UseCaseProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const UseCase = ({ icon, title, description }: UseCaseProps) => (
  <motion.div
    variants={useCaseVariant}
    className="p-6"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    <motion.div 
      variants={iconVariant}
      className="h-14 w-14 rounded-full bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center mb-4 mx-auto"
    >
      {icon}
    </motion.div>
    <h3 className="text-xl font-bold text-white text-center mb-2">{title}</h3>
    <p className="text-gray-400 text-center">{description}</p>
  </motion.div>
);

const UseCases = () => {
  const useCases = [
    {
      icon: <Bot className="h-6 w-6 text-indigo-400" />,
      title: "Chatbots & RAG",
      description: "Build powerful retrieval-augmented generation systems that search across your knowledge base."
    },
    {
      icon: <Search className="h-6 w-6 text-indigo-400" />,
      title: "Semantic Search",
      description: "Implement intuitive search that understands user intent beyond simple keyword matching."
    },
    {
      icon: <BrainCircuit className="h-6 w-6 text-indigo-400" />,
      title: "Recommendation Systems",
      description: "Create personalized recommendations based on user preferences and behavior."
    },
    {
      icon: <Image className="h-6 w-6 text-indigo-400" />,
      title: "Visual Search",
      description: "Enable users to search for visually similar images or products in your catalog."
    },
    {
      icon: <FileText className="h-6 w-6 text-indigo-400" />,
      title: "Document Intelligence",
      description: "Extract insights from documents and connect related information across sources."
    },
    {
      icon: <Tag className="h-6 w-6 text-indigo-400" />,
      title: "Automated Tagging",
      description: "Automatically categorize and tag content based on semantic understanding."
    }
  ];

  return (
    <AnimatedSection 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 to-black"
      viewportAmount={0.1}
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedHeading className="text-center mb-16">
          <ChromeText as="h2" className="text-3xl md:text-5xl font-bold mb-4">
            Use Cases
          </ChromeText>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Powering AI applications across industries
          </p>
        </AnimatedHeading>
        
        <AnimatedStaggerContainer 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          delayFactor={0.07}
        >
          {useCases.map((useCase, index) => (
            <UseCase
              key={index}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
            />
          ))}
        </AnimatedStaggerContainer>
      </div>
    </AnimatedSection>
  );
};

export default UseCases;
