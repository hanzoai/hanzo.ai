'use client'


import React from 'react';
import OperativeHero from '@/components/operator/OperativeHero';
import OperativeFeatures from '@/components/operator/OperativeFeatures';
import OperativeUsage from '@/components/operator/OperativeUsage';
import OperativeModels from '@/components/operator/OperativeModels';
import OperativeDemo from '@/components/operator/OperativeDemo';
import OperativeCTA from '@/components/operator/OperativeCTA';

const Operative = () => {
  return (
    <>
            
      
      
      <main>
        <OperativeHero />
        <OperativeFeatures />
        <OperativeUsage />
        <OperativeModels />
        <OperativeDemo />
        <OperativeCTA />
      </main>
      
      
    </>
  );
};

export default Operative;
