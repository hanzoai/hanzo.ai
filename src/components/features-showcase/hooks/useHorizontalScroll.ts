
import { useState, useEffect, RefObject } from "react";

interface UseHorizontalScrollProps {
  containerRef: RefObject<HTMLDivElement>;
  scrollTimeout?: number;
}

export const useHorizontalScroll = ({ 
  containerRef, 
  scrollTimeout = 150 
}: UseHorizontalScrollProps) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Horizontal wheel scrolling logic
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let timeout: number;

    const handleWheel = (e: WheelEvent) => {
      if (container.scrollWidth > container.clientWidth) {
        e.preventDefault();
        setIsScrolling(true);
        container.scrollLeft += e.deltaY;
        
        clearTimeout(timeout);
        timeout = window.setTimeout(() => {
          setIsScrolling(false);
        }, scrollTimeout);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        container.addEventListener('wheel', handleWheel, { passive: false });
      } else {
        container.removeEventListener('wheel', handleWheel);
      }
    }, { threshold: 0.2 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      clearTimeout(timeout);
    };
  }, [containerRef, scrollTimeout]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return {
    isScrolling,
    isDragging,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove
  };
};
