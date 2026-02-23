'use client'


import React, { useRef, useEffect } from 'react';
import GlobeRenderer from './components/GlobeRenderer';

interface GlobeThreeJsProps {
  width: number;
  height: number;
}

const GlobeThreeJs: React.FC<GlobeThreeJsProps> = ({ width, height }) => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-background to-neutral-900">
      <GlobeRenderer width={width} height={height} />
      
      {/* Status indicator */}
      <div className="absolute bottom-3 left-3 flex items-center space-x-2">
        <div className="h-2 w-2 bg-primary/10 rounded-full animate-pulse"></div>
        <span className="text-xs text-foreground/70">Live network traffic</span>
      </div>
    </div>
  );
};

export default GlobeThreeJs;
