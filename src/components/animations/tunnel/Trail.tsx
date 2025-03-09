
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TrailProps {
  index: number;
}

const Trail: React.FC<TrailProps> = ({ index }) => {
  const [position, setPosition] = useState({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  });
  
  const [size, setSize] = useState({
    width: Math.random() * 2 + 1,
    length: Math.random() * 100 + 50,
  });
  
  const [color, setColor] = useState(() => {
    const colors = ["#9370DB", "#8A2BE2", "#9400D3", "#8B008B", "#4B0082"];
    return colors[Math.floor(Math.random() * colors.length)];
  });
  
  const [opacity, setOpacity] = useState(Math.random() * 0.5 + 0.2);
  const [angle, setAngle] = useState(Math.random() * 360);
  const [speed, setSpeed] = useState(Math.random() * 2 + 1);
  
  useEffect(() => {
    const updatePosition = () => {
      // Calculate center of screen
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate vector from current position to center
      const dx = centerX - position.x;
      const dy = centerY - position.y;
      
      // Normalize the vector
      const length = Math.sqrt(dx * dx + dy * dy);
      const normalizedDx = dx / length;
      const normalizedDy = dy / length;
      
      // Update position based on direction to center
      setPosition(prev => ({
        x: prev.x + normalizedDx * speed,
        y: prev.y + normalizedDy * speed,
      }));
      
      // Calculate angle to center (in degrees)
      const angleToCenter = Math.atan2(dy, dx) * (180 / Math.PI);
      setAngle(angleToCenter);
      
      // If trail reaches close to center, reset it to a random edge position
      if (length < 20) {
        resetTrail();
      }
    };
    
    const resetTrail = () => {
      // Place at random position on the edge of the screen
      const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
      let x, y;
      
      switch (side) {
        case 0: // top
          x = Math.random() * window.innerWidth;
          y = -size.length;
          break;
        case 1: // right
          x = window.innerWidth + size.length;
          y = Math.random() * window.innerHeight;
          break;
        case 2: // bottom
          x = Math.random() * window.innerWidth;
          y = window.innerHeight + size.length;
          break;
        case 3: // left
          x = -size.length;
          y = Math.random() * window.innerHeight;
          break;
        default:
          x = 0;
          y = 0;
      }
      
      setPosition({ x, y });
      setSize({
        width: Math.random() * 2 + 1,
        length: Math.random() * 100 + 50,
      });
      setOpacity(Math.random() * 0.5 + 0.2);
      setSpeed(Math.random() * 2 + 1);
    };
    
    const interval = setInterval(updatePosition, 16); // approx 60fps
    
    return () => clearInterval(interval);
  }, [position, size.length, speed]);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity }}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        width: size.length,
        height: size.width,
        backgroundColor: color,
        boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
        transform: `rotate(${angle}deg)`,
        transformOrigin: "left center",
        zIndex: 1,
      }}
    />
  );
};

export default Trail;
