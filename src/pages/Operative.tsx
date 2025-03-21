
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OperativeHero from '@/components/operator/OperatorHero';
import OperativeFeatures from '@/components/operator/OperatorFeatures';
import OperativeUsage from '@/components/operator/OperatorUsage';
import OperativeModels from '@/components/operator/OperatorModels';
import OperativeDemo from '@/components/operator/OperatorDemo';
import OperativeCTA from '@/components/operator/OperatorCTA';

const Operative = () => {
  return (
    <>
      <Helmet>
        <title>Hanzo Operative | AI-native assistant for automating tasks</title>
        <meta 
          name="description" 
          content="Hanzo Operative is an AI-native assistant for automating desktop tasks via natural language." 
        />
      </Helmet>
      
      <Navbar />
      
      <main>
        <OperativeHero />
        <OperativeFeatures />
        <OperativeUsage />
        <OperativeModels />
        <OperativeDemo />
        <OperativeCTA />
      </main>
      
      <Footer />
    </>
  );
};

export default Operative;
