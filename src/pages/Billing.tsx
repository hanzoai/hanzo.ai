
import React, { useState, useEffect } from "react";
import BillingOverview from "@/components/billing/BillingOverview";
import AnimatedSection, { AnimatedHeading } from "@/components/ui/animated-section";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CreditCard, FileText } from "lucide-react";

const BillingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <AnimatedSection>
      <AnimatedHeading>
        <h2 className="text-2xl font-medium mb-8">Billing</h2>
      </AnimatedHeading>

      <div className="mb-8 flex flex-wrap gap-4">
        <Button 
          variant="outline" 
          onClick={() => navigate('/account/invoices')}
          className="bg-black hover:bg-neutral-900 border border-white/10 text-white flex items-center"
        >
          <FileText className="h-4 w-4 mr-2" />
          View Billing History
        </Button>
        <Button 
          variant="outline" 
          onClick={() => navigate('/account/billing#payment-methods')}
          className="bg-black hover:bg-neutral-900 border border-white/10 text-white flex items-center"
        >
          <CreditCard className="h-4 w-4 mr-2" />
          Manage Payment Methods
        </Button>
      </div>
      
      <div>
        <BillingOverview />
      </div>
    </AnimatedSection>
  );
};

export default BillingPage;
