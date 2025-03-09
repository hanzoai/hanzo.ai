
import React from 'react';
import GlobeRenderer from './components/GlobeRenderer';

interface GlobeThreeJsProps {
  width: number;
  height: number;
}

const GlobeThreeJs: React.FC<GlobeThreeJsProps> = ({ width, height }) => {
  return <GlobeRenderer width={width} height={height} />;
};

export default GlobeThreeJs;
