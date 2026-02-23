'use client'


import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import BillingOverview from "@/components/billing/BillingOverview";

import { Button } from "@hanzo/ui";
import { CreditCard, FileText } from "lucide-react";
import AnimatedSection, { AnimatedHeading } from "@/components/ui/animated-section";

const BillingPage = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <AnimatedSection>
      <AnimatedHeading>
        <h2 className="text-2xl font-medium mb-8">Billing</h2>
      </AnimatedHeading>

      <div className="mb-8 flex flex-wrap gap-4">
        <Button 
          variant="outline" 
          onClick={() => router.push('/account/invoices')}
          className="bg-[var(--black)] hover:bg-neutral-900 border border-white/10 text-[var(--white)] flex items-center"
        >
          <FileText className="h-4 w-4 mr-2" />
          View Billing History
        </Button>
        <Button 
          variant="outline" 
          onClick={() => router.push('/account/billing#payment-methods')}
          className="bg-[var(--black)] hover:bg-neutral-900 border border-white/10 text-[var(--white)] flex items-center"
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
