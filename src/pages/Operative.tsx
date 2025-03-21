
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OperativeHero from '@/components/operator/OperativeHero';
import OperativeFeatures from '@/components/operator/OperativeFeatures';
import OperativeUsage from '@/components/operator/OperativeUsage';
import OperativeModels from '@/components/operator/OperativeModels';
import OperativeDemo from '@/components/operator/OperativeDemo';
import OperativeCTA from '@/components/operator/OperativeCTA';

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
