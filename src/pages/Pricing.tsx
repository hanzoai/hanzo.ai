
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingHeader from "@/components/pricing/PricingHeader";
import IndividualPlans from "@/components/pricing/IndividualPlans";
import EnterpriseFreePlans from "@/components/pricing/EnterpriseFreePlans";
import FeatureComparison from "@/components/pricing/FeatureComparison";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import BillingManagement from "@/components/pricing/BillingManagement";

const PricingPlans = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <PricingHeader />
        
        <IndividualPlans />
        <EnterpriseFreePlans />
        <FeatureComparison />
        <PricingFAQ />
        <BillingManagement />
      </main>

      <Footer />
    </div>
  );
};

export default PricingPlans;
