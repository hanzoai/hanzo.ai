
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";

const HanzoCodeHero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-blue-900/10 opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <ChromeText
            as="h1"
            className="text-4xl md:text-6xl font-bold mb-6"
            gradient="from-purple-400 to-pink-400"
          >
            The Ultimate AI-Powered Code Editor
          </ChromeText>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-12">
            Beyond Cursor and Windsurf, Hanzo Code supercharges your favorite VS Code-compatible editor 
            with autonomous agents that transform how you build software.
          </p>
          
          <div className="mb-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-[var(--white)] px-8 py-6 rounded-lg text-lg font-medium"
            >
              <a href="#" className="flex items-center">
                Get Hanzo Code
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HanzoCodeHero;
