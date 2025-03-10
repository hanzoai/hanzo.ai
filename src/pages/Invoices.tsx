
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InvoicesList from "@/components/invoices/InvoicesList";
import InvoicesSummary from "@/components/invoices/InvoicesSummary";
import AnimatedSection, { AnimatedHeading } from "@/components/ui/animated-section";

const Invoices = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <AnimatedHeading>
              <h1 className="text-4xl font-bold mb-8">Invoices</h1>
            </AnimatedHeading>

            <InvoicesSummary />
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Invoice History</h2>
              <InvoicesList />
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Invoices;
