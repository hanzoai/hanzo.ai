
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ChromeTextProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
  className?: string;
}

const ChromeText = ({ 
  children, 
  as: Component = "h1", 
  className 
}: ChromeTextProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Component
      ref={textRef}
      className={cn("chrome-gradient", className)}
      style={{
        backgroundPosition: `${(mousePosition.x / (textRef.current?.offsetWidth || 1)) * 100}% ${(mousePosition.y / (textRef.current?.offsetHeight || 1)) * 100}%`,
      }}
    >
      {children}
      <style jsx>{`
        .chrome-gradient {
          background: linear-gradient(
            90deg,
            rgb(180, 180, 180),
            rgb(240, 240, 240),
            rgb(180, 180, 180)
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          transition: background-position 0.3s ease;
        }
      `}</style>
    </Component>
  );
};

export default ChromeText;
