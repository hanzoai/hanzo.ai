
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingHeader from "@/components/pricing/PricingHeader";
import BillingManagement from "@/components/pricing/BillingManagement";
import StripePricingTable from "@/components/pricing/StripePricingTable";
import IndividualPlans from "@/components/pricing/IndividualPlans";
import EnterpriseFreePlans from "@/components/pricing/EnterpriseFreePlans";
import PricingFooterLinks from "@/components/pricing/PricingFooterLinks";

const PricingPlans = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <PricingHeader />
        <StripePricingTable />
        <IndividualPlans />
        <EnterpriseFreePlans />
        <BillingManagement />
        <PricingFooterLinks />
      </main>

      <Footer />
    </div>
  );
};

export default PricingPlans;
