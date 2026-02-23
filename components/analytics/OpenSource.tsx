'use client'


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Star, Download, Users } from "lucide-react";
import { Button } from "@hanzo/ui";

const statsItems = [
  { 
    icon: <Download className="h-6 w-6 text-green-400" />,
    value: 17,
    suffix: "M+",
    label: "Downloads",
    countUpDuration: 2
  },
  { 
    icon: <Star className="h-6 w-6 text-yellow-400" />,
    value: 25,
    suffix: "K+",
    label: "GitHub Stars",
    countUpDuration: 2.2
  },
  { 
    icon: <Users className="h-6 w-6 text-[#ff6b6b]" />,
    value: 280,
    suffix: "+",
    label: "Contributors",
    countUpDuration: 1.8
  }
];

const OpenSource = () => {
  const [isInView, setIsInView] = useState(false);
  
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/20 relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Open Source at Our Core</h2>
            <p className="text-xl text-neutral-300 mb-8">
              Hanzo Analytics is fully open-source, fostering innovation and collaboration among thousands of global developers.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
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
                  className="text-center p-4"
                  onViewportEnter={() => {
                    if (!isInView) {
                      setIsInView(true);
                    }
                  }}
                >
                  <div className="flex justify-center mb-2">{item.icon}</div>
                  <div className="flex justify-center items-baseline">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: item.countUpDuration }}
                      className="text-3xl font-bold"
                    >
                      {isInView ? (
                        <CountUp end={item.value} duration={item.countUpDuration} />
                      ) : (
                        0
                      )}
                    </motion.span>
                    <span className="text-3xl font-bold">{item.suffix}</span>
                  </div>
                  <div className="text-neutral-400 text-sm mt-1">{item.label}</div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="flex items-center gap-2" size="sm">
                <Github className="h-4 w-4" />
                <a href="https://docs.hanzo.ai" target="_blank" rel="noopener noreferrer">
                  View Docs
                </a>
              </Button>
              <Button variant="outline" className="flex items-center gap-2" size="sm">
                <Github className="h-4 w-4" />
                <a href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer">
                  View Repository
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 shadow-xl"
          >
            <div className="flex items-center p-4 bg-gray-900 border-b border-gray-800">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center text-neutral-300 text-sm">analytics.js</div>
            </div>
            
            <div className="p-6 text-left font-mono text-sm text-neutral-400 overflow-x-auto">
              <div className="flex">
                <div className="mr-4 text-neutral-600">1</div>
                <div>
                  <span className="text-[#ffffff]">import</span> <span className="text-green-400">{'{'}</span> <span className="text-yellow-300">HanzoAnalytics</span> <span className="text-green-400">{'}'}</span> <span className="text-[#ffffff]">from</span> <span className="text-orange-400">'hanzo-analytics'</span>;
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 text-neutral-600">2</div>
                <div></div>
              </div>
              <div className="flex">
                <div className="mr-4 text-neutral-600">3</div>
                <div><span className="text-neutral-500">// Initialize analytics with your project ID</span></div>
              </div>
              <div className="flex">
                <div className="mr-4 text-neutral-600">4</div>
                <div>
                  <span className="text-[#ffffff]">const</span> analytics <span className="text-[var(--white)]">=</span> <span className="text-[#ffffff]">new</span> <span className="text-yellow-300">HanzoAnalytics</span><span className="text-[var(--white)]">(</span><span className="text-orange-400">'YOUR_PROJECT_ID'</span><span className="text-[var(--white)]">);</span>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 text-neutral-600">5</div>
                <div></div>
              </div>
              <div className="flex">
                <div className="mr-4 text-neutral-600">6</div>
                <div><span className="text-neutral-500">// Track page views automatically</span></div>
              </div>
              <div className="flex">
                <div className="mr-4 text-neutral-600">7</div>
                <div>
                  <span className="text-[var(--white)]">analytics.trackPageViews();</span>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 text-neutral-600">8</div>
                <div></div>
              </div>
              <div className="flex">
                <div className="mr-4 text-neutral-600">9</div>
                <div><span className="text-neutral-500">// Track custom events</span></div>
              </div>
              <div className="flex">
                <div className="mr-4 text-neutral-600">10</div>
                <div>
                  <span className="text-[var(--white)]">analytics.track(</span><span className="text-orange-400">'button_click'</span><span className="text-[var(--white)]">, {'{'}</span>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 text-neutral-600">11</div>
                <div>
                  <span className="text-[var(--white)]">  buttonId: </span><span className="text-orange-400">'signup_button'</span><span className="text-[var(--white)]">,</span>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 text-neutral-600">12</div>
                <div>
                  <span className="text-[var(--white)]">  page: </span><span className="text-orange-400">'/home'</span>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 text-neutral-600">13</div>
                <div>
                  <span className="text-[var(--white)]">{'}'});</span>
                </div>
              </div>
            </div>
          </motion.div>
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
