
import React from 'react';
import InvoicesList from '@/components/invoices/InvoicesList';
import InvoicesSummary from '@/components/invoices/InvoicesSummary';
import AnimatedSection, { AnimatedHeading } from '@/components/ui/animated-section';

const Invoices = () => {
  return (
    <AnimatedSection>
      <AnimatedHeading>Invoices</AnimatedHeading>
      
      <div className="space-y-8">
        <InvoicesSummary />
        <InvoicesList />
      </div>
    </AnimatedSection>
  );
};

export default Invoices;
