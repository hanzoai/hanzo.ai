'use client'


import React, { useRef } from 'react';
import { useGlobeScene } from '../hooks/useGlobeScene';
import { useGlobeAnimation } from '../hooks/useGlobeAnimation';

interface GlobeRendererProps {
  width: number;
  height: number;
}

const GlobeRenderer: React.FC<GlobeRendererProps> = ({ width, height }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useGlobeScene(containerRef, width, height);
  
  // Start the animation loop
  useGlobeAnimation(globeRef);
  
  return (
    <div 
      ref={containerRef} 
      className="w-full h-full rounded-lg overflow-hidden"
      style={{ 
        background: 'radial-gradient(circle at center, rgba(30, 30, 30, 0.4) 0%, rgba(10, 10, 10, 0.8) 70%)',
      }}
    />
  );
};

export default GlobeRenderer;
