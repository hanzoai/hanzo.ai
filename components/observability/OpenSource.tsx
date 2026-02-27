'use client'


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Star, Download, Users } from "lucide-react";
import { Button } from "@hanzo/ui";

const statsItems = [
  { 
    icon: <Download className="h-6 w-6 text-foreground/70" />,
    value: 17,
    suffix: "M+",
    label: "Downloads",
    countUpDuration: 2
  },
  { 
    icon: <Star className="h-6 w-6 text-foreground/60" />,
    value: 25,
    suffix: "K+",
    label: "GitHub Stars",
    countUpDuration: 2.2
  },
  { 
    icon: <Users className="h-6 w-6 text-foreground/70" />,
    value: 280,
    suffix: "+",
    label: "Contributors",
    countUpDuration: 1.8
  }
];

const OpenSource = () => {
  const [isInView, setIsInView] = useState(false);
  
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/20 to-background relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-6 bg-primary/10 p-3 rounded-full">
            <Github className="h-7 w-7 text-foreground" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Proudly Open Source</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Transparency is at the core of Hanzo Observability. Deploy it locally, self-host on your own infrastructure, or use our managed cloud solution.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-3 gap-6 mb-12">
          {statsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.1
                }
              }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800"
              onViewportEnter={() => {
                if (!isInView) {
                  setIsInView(true);
                }
              }}
            >
              <div className="flex justify-center mb-3">{item.icon}</div>
              <div className="flex justify-center items-baseline">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: item.countUpDuration }}
                  className="text-4xl font-bold"
                >
                  {isInView ? (
                    <CountUp end={item.value} duration={item.countUpDuration} />
                  ) : (
                    0
                  )}
                </motion.span>
                <span className="text-4xl font-bold">{item.suffix}</span>
              </div>
              <div className="text-muted-foreground mt-2">{item.label}</div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="lg" className="text-[var(--white)] border-border hover:bg-[var(--white)]/10">
            <Github className="mr-2 h-5 w-5" /> Read Documentation
          </Button>
          <Button variant="outline" size="lg" className="text-[var(--white)] border-border hover:bg-[var(--white)]/10">
            <Github className="mr-2 h-5 w-5" /> View GitHub Repository
          </Button>
        </div>
      </div>
    </section>
  );
};

// Simple CountUp component
const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration]);
  
  return <>{count}</>;
};

export default OpenSource;
