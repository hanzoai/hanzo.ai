
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OperatorHero from '@/components/operator/OperatorHero';
import OperatorFeatures from '@/components/operator/OperatorFeatures';
import OperatorUsage from '@/components/operator/OperatorUsage';
import OperatorModels from '@/components/operator/OperatorModels';
import OperatorDemo from '@/components/operator/OperatorDemo';
import OperatorCTA from '@/components/operator/OperatorCTA';

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
        <OperatorHero />
        <OperatorFeatures />
        <OperatorUsage />
        <OperatorModels />
        <OperatorDemo />
        <OperatorCTA />
      </main>
      
      <Footer />
    </>
  );
};

export default Operative;
