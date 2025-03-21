
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FeatureShowcaseHeader from "./FeatureShowcaseHeader";
import FeatureShowcaseSlider from "./FeatureShowcaseSlider";
import { features } from "./data/features";

const FeatureShowcase: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll animation values
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);
  
  // Modified horizontal scroll to show full content
  const x = useTransform(
    scrollYProgress, 
    [0.2, 0.8], 
    [0, -((features.length * 350) - window.innerWidth + 100)]
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
        <motion.div style={{ x }}>
          <FeatureShowcaseSlider features={features} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeatureShowcase;
