
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FeatureSlide } from "./";
import { useHorizontalScroll } from "./hooks/useHorizontalScroll";
import { Feature } from "./data/features";

interface FeatureShowcaseSliderProps {
  features: Feature[];
}

const FeatureShowcaseSlider: React.FC<FeatureShowcaseSliderProps> = ({ features }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { 
    handleMouseDown, 
    handleMouseUp, 
    handleMouseMove 
  } = useHorizontalScroll({ containerRef });

  return (
    <div className="feature-slide-container">
      <div 
        ref={containerRef}
        className="flex gap-6 pb-6 overflow-x-auto snap-x snap-mandatory feature-scroll-container cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            className="snap-center flex-shrink-0 w-[350px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <FeatureSlide
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color}
              link={feature.link}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeatureShowcaseSlider;
