
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BrainCircuit, Zap, Users, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TeamHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-indigo-900/10 opacity-50"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col text-center"
        >
          <Badge 
            variant="outline" 
            className="bg-purple-900/30 border-purple-500/30 text-purple-300 self-center mb-6 px-4 py-1.5 text-sm"
          >
            AI + Human Integration
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Meet your <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">AI Team</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Autonomous AI agents working seamlessly alongside humans. 
            Train them with a simple Zoom call, monitor their work in real-time, 
            and benefit from enterprise-grade security and audit features.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-black/50 border-gray-700 text-white hover:bg-black/80"
            >
              Watch Demo
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 sm:space-x-12 mt-6">
            <div className="flex flex-col items-center">
              <div className="bg-purple-900/30 p-3 rounded-full mb-3">
                <BrainCircuit className="h-6 w-6 text-purple-400" />
              </div>
              <span className="text-sm text-gray-300">AI-Powered</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-900/30 p-3 rounded-full mb-3">
                <Users className="h-6 w-6 text-purple-400" />
              </div>
              <span className="text-sm text-gray-300">Human Integration</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-900/30 p-3 rounded-full mb-3">
                <Zap className="h-6 w-6 text-purple-400" />
              </div>
              <span className="text-sm text-gray-300">Enterprise Ready</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamHero;
