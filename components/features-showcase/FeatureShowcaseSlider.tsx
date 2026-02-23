'use client'


import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FeatureSlide } from "./";
import ExploreCard from "./ExploreCard";
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

  // Add arrow navigation for better accessibility
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  // Make sure touch devices can also scroll properly
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      const startX = touch.clientX;
      let startScrollLeft = container.scrollLeft;
      
      const handleTouchMove = (e: TouchEvent) => {
        const touch = e.touches[0];
        const x = touch.clientX;
        const walk = (startX - x) * 2;
        container.scrollLeft = startScrollLeft + walk;
        e.preventDefault();
      };
      
      const handleTouchEnd = () => {
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
      
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    };

    container.addEventListener('touchstart', handleTouchStart);
    
    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return (
    <div className="feature-slide-container relative">
      {/* Add navigation buttons */}
      <button 
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-900/80 hover:bg-gray-900 text-[var(--white)] rounded-full p-2 shadow-lg -ml-4 md:flex hidden"
        aria-label="Scroll left"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      
      <div 
        ref={containerRef}
        className="flex gap-6 pb-6 overflow-x-auto snap-x snap-mandatory feature-scroll-container scrollbar-hide"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {features.map((feature, index) => {
          // Check if this is the last feature (Explore Platform card)
          const isLastFeature = index === features.length - 1;
          
          return (
            <motion.div 
              key={index} 
              className="snap-center flex-shrink-0 w-[350px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.05 }}
            >
              {isLastFeature ? (
                <ExploreCard
                  title={feature.title}
                  description={feature.description}
                  link={feature.link}
                />
              ) : (
                <FeatureSlide
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  color={feature.color}
                  link={feature.link}
                />
              )}
            </motion.div>
          );
        })}
      </div>
      
      <button 
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-900/80 hover:bg-gray-900 text-[var(--white)] rounded-full p-2 shadow-lg -mr-4 md:flex hidden"
        aria-label="Scroll right"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
      
      <div className="flex justify-center mt-6 gap-2">
        <div className="bg-gray-700 h-1 w-20 rounded-full overflow-hidden">
          <div className="bg-[#ffffff] h-full w-1/3 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcaseSlider;
