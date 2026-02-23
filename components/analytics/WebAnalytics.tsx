'use client'


import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { LineChart, Users, Filter, Layers, Activity } from "lucide-react";

const features = [
  { 
    icon: <Activity />,
    title: "Real-Time Data", 
    description: "Instantly track live user actions and site performance."
  },
  { 
    icon: <Users />,
    title: "User Journeys", 
    description: "Visualize complete paths users take within your site or app."
  },
  {
    icon: <Layers />,
    title: "Funnels & Retention", 
    description: "Analyze user conversion and retention metrics with clarity."
  },
  { 
    icon: <LineChart />,
    title: "Event Tracking", 
    description: "Capture user interactions, from clicks to complex events."
  },
  { 
    icon: <Filter />,
    title: "Powerful Segmentation", 
    description: "Deeply filter and segment your data by geography, platform, and more."
  }
];

const WebAnalytics = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationTriggered) {
          controls.start("animate");
          setAnimationTriggered(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (chartRef.current) {
      observer.observe(chartRef.current);
    }
    
    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, [controls, animationTriggered]);

  const lineVariants = {
    initial: {
      pathLength: 0
    },
    animate: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const dataPointVariants = {
    initial: {
      opacity: 0,
      scale: 0
    },
    animate: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.5 + i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[var(--black)] relative">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Comprehensive Web Analytics</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Hanzo Analytics delivers real-time insights into every interaction, from clicks to conversions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <div className="mr-4 mt-1 bg-white/10 p-2 rounded-lg text-white">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--white)] mb-2">{feature.title}</h3>
                  <p className="text-neutral-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
            ref={chartRef}
          >
            <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Live User Activity</h3>
                <div className="bg-white/10 animate-pulse h-2 w-2 rounded-full"></div>
              </div>
              
              <div className="h-80 w-full relative">
                {/* Chart grid */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-5">
                  {Array(30).fill(0).map((_, i) => (
                    <div key={i} className="border-b border-r border-gray-800 opacity-30"></div>
                  ))}
                </div>
                
                {/* Chart area */}
                <div className="absolute inset-0 p-4">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Chart lines */}
                    <motion.path
                      d="M0,80 C10,70 20,85 30,60 C40,40 50,55 60,30 C70,40 80,20 90,10 L100,20"
                      stroke="#ffffff"
                      strokeWidth="2"
                      fill="none"
                      variants={lineVariants}
                      initial="initial"
                      animate={controls}
                    />
                    <motion.path
                      d="M0,90 C15,80 25,75 35,70 C45,65 55,60 65,50 C75,70 85,60 95,40 L100,50"
                      stroke="#ff6b6b"
                      strokeWidth="2"
                      fill="none"
                      variants={lineVariants}
                      initial="initial"
                      animate={controls}
                    />
                    
                    {/* Data points */}
                    {[
                      { x: 30, y: 60, color: "#ffffff" },
                      { x: 60, y: 30, color: "#ffffff" },
                      { x: 90, y: 10, color: "#ffffff" },
                      { x: 35, y: 70, color: "#ff6b6b" },
                      { x: 65, y: 50, color: "#ff6b6b" },
                      { x: 95, y: 40, color: "#ff6b6b" }
                    ].map((point, i) => (
                      <motion.circle
                        key={i}
                        cx={point.x}
                        cy={point.y}
                        r="2"
                        fill={point.color}
                        custom={i}
                        variants={dataPointVariants}
                        initial="initial"
                        animate={controls}
                      />
                    ))}
                  </svg>
                </div>
                
                {/* Tooltip */}
                <motion.div
                  className="absolute bg-gray-800 rounded p-2 text-xs w-32 shadow-lg border border-gray-700"
                  style={{ top: "30%", left: "60%" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={controls}
                  variants={{
                    animate: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: 2, duration: 0.3 }
                    }
                  }}
                >
                  <div className="flex justify-between">
                    <span>Pageviews</span>
                    <span className="font-bold">1,240</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span>Users</span>
                    <span className="font-bold">876</span>
                  </div>
                  <div className="text-white/70 text-right mt-1">+24.5%</div>
                </motion.div>
              </div>
              
              <div className="flex justify-between text-sm text-neutral-400 mt-2">
                <span>00:00</span>
                <span>06:00</span>
                <span>12:00</span>
                <span>18:00</span>
                <span>24:00</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebAnalytics;
