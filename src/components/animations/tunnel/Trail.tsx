
import React, { useEffect, useState } from "react";

interface TrailProps {
  index: number;
}

const Trail: React.FC<TrailProps> = ({ index }) => {
  const [style, setStyle] = useState({
    left: '50%',
    top: '50%',
    width: '1px',
    height: '1px',
    opacity: 0,
    transform: 'translateX(-50%) translateY(-50%)',
    background: 'transparent',
    boxShadow: 'none',
    transition: 'all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)',
  });

  useEffect(() => {
    // Create randomized trail
    const randomBrightness = 80 + Math.floor(Math.random() * 20);
    const baseColor = `hsl(260, 100%, ${randomBrightness}%)`;
    const boxShadowColor = `hsl(260, 100%, ${randomBrightness + 10}%)`;
    
    // Angles for trails, converging to center
    const angle = Math.random() * Math.PI * 2;
    const distance = 70 + Math.random() * 30; // Starting point distance from center
    
    // Calculate start point (outer edge of screen)
    const startX = 50 + Math.cos(angle) * distance;
    const startY = 50 + Math.sin(angle) * distance;
    
    // Trail length and size
    const trailWidth = 1 + Math.random() * 2;
    const trailLength = 5 + Math.random() * 15;
    
    // Duration for animation
    const duration = 2 + Math.random() * 2;
    
    // Define the trail initial position (off-screen)
    setStyle({
      left: `${startX}%`,
      top: `${startY}%`,
      width: `${trailWidth}px`,
      height: `${trailLength}px`,
      opacity: 0,
      transform: `translateX(-50%) translateY(-50%) rotate(${angle + Math.PI/2}rad)`,
      background: baseColor,
      boxShadow: `0 0 10px 2px ${boxShadowColor}`,
      transition: `all ${duration}s cubic-bezier(0.165, 0.84, 0.44, 1)`,
    });
    
    // Start animation after initial setup
    const timer1 = setTimeout(() => {
      setStyle(prev => ({
        ...prev,
        opacity: 0.7 + Math.random() * 0.3,
      }));
      
      // Animate to center
      const timer2 = setTimeout(() => {
        setStyle(prev => ({
          ...prev,
          left: '50%',
          top: '50%',
          opacity: 0,
        }));
        
        // Reset and restart animation
        const timer3 = setTimeout(() => {
          const newAngle = Math.random() * Math.PI * 2;
          const newDistance = 70 + Math.random() * 30;
          const newStartX = 50 + Math.cos(newAngle) * newDistance;
          const newStartY = 50 + Math.sin(newAngle) * newDistance;
          const newTrailWidth = 1 + Math.random() * 2;
          const newTrailLength = 5 + Math.random() * 15;
          
          setStyle({
            left: `${newStartX}%`,
            top: `${newStartY}%`,
            width: `${newTrailWidth}px`,
            height: `${newTrailLength}px`,
            opacity: 0,
            transform: `translateX(-50%) translateY(-50%) rotate(${newAngle + Math.PI/2}rad)`,
            background: baseColor,
            boxShadow: `0 0 10px 2px ${boxShadowColor}`,
            transition: `all ${duration}s cubic-bezier(0.165, 0.84, 0.44, 1)`,
          });
        }, 100);
        
        return () => clearTimeout(timer3);
      }, duration * 1000);
      
      return () => clearTimeout(timer2);
    }, 100);
    
    return () => clearTimeout(timer1);
  }, [index]);

  return (
    <div 
      className="absolute rounded-full" 
      style={style}
    />
  );
};

export default Trail;
