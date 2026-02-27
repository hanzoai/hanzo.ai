'use client'


import React from "react";
import { motion } from "framer-motion";
import { Cpu, Clock, Users, LineChart } from "lucide-react";

const UnifiedPlatform = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-gray-900/20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center justify-center mb-6 bg-primary/10 p-3 rounded-full">
            <Cpu className="h-7 w-7 text-foreground" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Unified Intelligence Platform</h2>
          <p className="text-xl text-foreground/80">
            Bring all your AI observability needs under one unified platform. Hanzo integrates monitoring, analytics, debugging, and evaluation into a single powerful toolkit.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Clock className="h-7 w-7 text-foreground" />,
              title: "Real-time System Tracing",
              description: "Capture and analyze every event in your AI system with microsecond precision."
            },
            {
              icon: <Users className="h-7 w-7 text-foreground/70" />,
              title: "Cross-team Collaboration",
              description: "Unite your engineering, data science, and product teams with role-based views and controls."
            },
            {
              icon: <LineChart className="h-7 w-7 text-foreground" />,
              title: "Intelligent Event Analytics",
              description: "Reveal patterns and insights that would otherwise remain hidden in your operational data."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-background/80 rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 relative h-80 overflow-hidden rounded-xl border border-gray-800"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-4 gap-4 w-full p-8">
              {Array.from({ length: 12 }).map((_, idx) => (
                <div 
                  key={idx} 
                  className="h-20 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-lg border border-gray-700/30 opacity-60"
                  style={{ 
                    opacity: Math.random() * 0.5 + 0.3,
                    transform: `scale(${Math.random() * 0.3 + 0.8})` 
                  }}
                />
              ))}
            </div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Everything in One Place</h3>
              <p className="text-foreground/80 max-w-md">
                End fragmentation in your AI operations with Hanzo's all-in-one observability platform
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UnifiedPlatform;
