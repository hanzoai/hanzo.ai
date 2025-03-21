
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { OperatorHero as OperativeHero } from '@/components/operator/OperatorHero';
import { OperatorFeatures as OperativeFeatures } from '@/components/operator/OperatorFeatures';
import { OperatorUsage as OperativeUsage } from '@/components/operator/OperatorUsage';
import { OperatorModels as OperativeModels } from '@/components/operator/OperatorModels';
import { OperatorDemo as OperativeDemo } from '@/components/operator/OperatorDemo';
import { OperatorCTA as OperativeCTA } from '@/components/operator/OperatorCTA';

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
