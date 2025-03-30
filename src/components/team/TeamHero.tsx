import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BrainCircuit, Zap, Users, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TeamHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[var(--black)] z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-indigo-900/10 opacity-50"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px' 
          }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge 
              variant="outline" 
              className="bg-purple-900/30 border-purple-500/30 text-purple-300 self-center mb-6 px-4 py-1.5 text-sm"
            >
              AI + Human Integration
            </Badge>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Meet your <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">AI Team</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl text-neutral-300 max-w-3xl mx-auto mb-10"
          >
            Autonomous AI agents working seamlessly alongside humans. 
            Train them with a simple Zoom call, monitor their work in real-time, 
            and benefit from enterprise-grade security and audit features.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-xl"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-[var(--black)]/50 border-gray-700 text-[var(--white)] hover:bg-[var(--white)]/10 rounded-xl"
            >
              Watch Demo
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center space-x-4 sm:space-x-12 mt-8"
          >
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-purple-900/30 p-3 rounded-full mb-3 border border-purple-500/20">
                <BrainCircuit className="h-6 w-6 text-purple-400" />
              </div>
              <span className="text-sm text-neutral-300">AI-Powered</span>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-purple-900/30 p-3 rounded-full mb-3 border border-purple-500/20">
                <Users className="h-6 w-6 text-purple-400" />
              </div>
              <span className="text-sm text-neutral-300">Human Integration</span>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-purple-900/30 p-3 rounded-full mb-3 border border-purple-500/20">
                <Zap className="h-6 w-6 text-purple-400" />
              </div>
              <span className="text-sm text-neutral-300">Enterprise Ready</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-1 h-8 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-full opacity-70"
        />
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 0.2,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-1 h-6 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-full opacity-40"
        />
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 0.4,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-1 h-4 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-full opacity-20"
        />
      </div>
    </section>
  );
};

export default TeamHero;