
import React from "react";
import { motion } from "framer-motion";
import { BrainCog, Cloud, Server, Database, Monitor, Network, Activity } from "lucide-react";

const CloudInfrastructure = () => {
  return (
    <div className="relative h-64 w-full rounded-xl bg-gradient-to-br from-black to-gray-900 overflow-hidden">
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(rgba(128, 90, 213, 0.07) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}></div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="relative h-20 w-20 rounded-xl bg-gray-900/70 border border-purple-500/30 flex items-center justify-center z-30"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BrainCog className="h-8 w-8 text-purple-400" />
        </motion.div>
        
        {[...Array(6)].map((_, i) => {
          const angle = (i * Math.PI * 2) / 6;
          const distance = 80;
          const x = Math.cos(angle) * distance;
          const y = Math.sin(angle) * distance;
          const icons = [
            <Cloud key={0} className="h-5 w-5 text-purple-400" />,
            <Server key={1} className="h-5 w-5 text-purple-400" />,
            <Database key={2} className="h-5 w-5 text-purple-400" />,
            <Monitor key={3} className="h-5 w-5 text-purple-400" />,
            <Network key={4} className="h-5 w-5 text-purple-400" />,
            <Activity key={5} className="h-5 w-5 text-purple-400" />
          ];
          
          return (
            <motion.div 
              key={i}
              className="absolute h-12 w-12 rounded-lg bg-gray-900/70 border border-gray-700 flex items-center justify-center"
              initial={{ 
                x: 0,
                y: 0,
                opacity: 0
              }}
              animate={{ 
                x,
                y,
                opacity: 1
              }}
              transition={{
                duration: 0.8,
                delay: 0.6 + (i * 0.1),
                ease: "easeOut"
              }}
              style={{
                left: "50%",
                top: "50%",
                marginLeft: -24,
                marginTop: -24
              }}
            >
              {icons[i]}
            </motion.div>
          );
        })}
        
        {/* Connection lines */}
        {[...Array(6)].map((_, i) => {
          const angle = (i * Math.PI * 2) / 6;
          
          return (
            <motion.div
              key={`line-${i}`}
              className="absolute h-0.5 bg-gradient-to-r from-purple-500/60 to-purple-500/10"
              style={{
                width: 80,
                transformOrigin: "left center",
                left: "50%",
                top: "50%",
                transform: `translateY(-0.5px) rotate(${angle}rad)`,
              }}
              initial={{
                scaleX: 0,
                opacity: 0
              }}
              animate={{
                scaleX: 1,
                opacity: 1
              }}
              transition={{
                duration: 0.8,
                delay: 0.5 + (i * 0.05)
              }}
            />
          );
        })}
        
        {/* Data particles */}
        {[...Array(6)].map((_, i) => {
          const angle = (i * Math.PI * 2) / 6;
          const distance =, 80;
          
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute h-1.5 w-1.5 rounded-full bg-purple-400"
              style={{
                left: "50%",
                top: "50%",
              }}
              animate={{
                x: [0, Math.cos(angle) * distance],
                y: [0, Math.sin(angle) * distance],
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5]
              }}
              transition={{
                duration: 2.5,
                delay: 1.2 + (i * 0.3),
                repeat: Infinity,
                repeatDelay: i * 0.5
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CloudInfrastructure;
