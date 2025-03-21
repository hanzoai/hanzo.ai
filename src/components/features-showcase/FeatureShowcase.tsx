
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import FeatureShowcaseHeader from "./FeatureShowcaseHeader";
import FeatureShowcaseSlider from "./FeatureShowcaseSlider";
import { features, aiCloudFeatures_export, dxPlatformFeatures_export } from "./data/features";
import { Button } from "@/components/ui/button";

const FeatureShowcase: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [maxScrollDistance, setMaxScrollDistance] = useState(0);
  const [activeTab, setActiveTab] = useState<'all' | 'ai-cloud' | 'dx-platform'>('all');
  const [activeFeatures, setActiveFeatures] = useState(features);

  useEffect(() => {
    // Update displayed features based on selected tab
    switch (activeTab) {
      case 'ai-cloud':
        setActiveFeatures([...aiCloudFeatures_export, features[features.length - 1]]);
        break;
      case 'dx-platform':
        setActiveFeatures([...dxPlatformFeatures_export, features[features.length - 1]]);
        break;
      default:
        setActiveFeatures(features);
    }
  }, [activeTab]);

  useEffect(() => {
    const calculateMaxScroll = () => {
      // Calculate the total width of all cards (including gap) minus the visible area
      // Adding extra buffer space to ensure all cards are visible
      const totalWidth = (activeFeatures.length * 350) + 100; // Each card is 350px wide + extra buffer
      const visibleWidth = window.innerWidth - 100; // Subtract some padding
      const newMaxScroll = Math.max(0, totalWidth - visibleWidth);
      setMaxScrollDistance(newMaxScroll);
    };

    calculateMaxScroll();
    window.addEventListener('resize', calculateMaxScroll);
    
    return () => {
      window.removeEventListener('resize', calculateMaxScroll);
    };
  }, [activeFeatures]);

  // Scroll animation values
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);
  
  // Modified horizontal scroll to show full content
  // Use a lower end value to prevent scrolling too far
  const x = useTransform(
    scrollYProgress, 
    [0.2, 0.8], 
    [0, -maxScrollDistance * 0.85] // Only scroll to 85% of max to ensure more content is visible
  ); 

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="features-showcase" ref={scrollRef}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-black/80"></div>
      </div>
      
      <motion.div 
        className="container px-4 mx-auto"
        style={{ opacity, y }}
      >
        <FeatureShowcaseHeader />
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full bg-gray-900/50 p-1.5 backdrop-blur-sm">
            <Button
              variant={activeTab === 'all' ? 'default' : 'ghost'}
              className={`rounded-full px-6 ${activeTab === 'all' ? 'bg-purple-600 hover:bg-purple-700' : 'text-gray-300 hover:text-white hover:bg-gray-800/50'}`}
              onClick={() => setActiveTab('all')}
            >
              All
            </Button>
            <Button
              variant={activeTab === 'ai-cloud' ? 'default' : 'ghost'}
              className={`rounded-full px-6 ${activeTab === 'ai-cloud' ? 'bg-blue-600 hover:bg-blue-700' : 'text-gray-300 hover:text-white hover:bg-gray-800/50'}`}
              onClick={() => setActiveTab('ai-cloud')}
            >
              AI Cloud
            </Button>
            <Button
              variant={activeTab === 'dx-platform' ? 'default' : 'ghost'}
              className={`rounded-full px-6 ${activeTab === 'dx-platform' ? 'bg-emerald-600 hover:bg-emerald-700' : 'text-gray-300 hover:text-white hover:bg-gray-800/50'}`}
              onClick={() => setActiveTab('dx-platform')}
            >
              DX Platform
            </Button>
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            style={{ x }}
            className="overflow-visible" // Ensure content doesn't get clipped
          >
            <FeatureShowcaseSlider features={activeFeatures} />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default FeatureShowcase;
