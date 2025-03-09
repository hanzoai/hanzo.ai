
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
    <div ref={containerRef} className="w-full h-full" />
  );
};

export default GlobeRenderer;
