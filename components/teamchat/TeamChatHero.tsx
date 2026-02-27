'use client'


import React from "react";
import { motion } from "framer-motion";
import ChromeText from "@/components/ui/chrome-text";

const TeamChatHero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-white/20 to-white/10 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <ChromeText as="h1" className="text-4xl font-bold mb-2">
            Hanzo Chat
          </ChromeText>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Connect with production-grade AI models through our intuitive chat interface.
            Get answers, generate content, and solve problems with natural language.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamChatHero;
