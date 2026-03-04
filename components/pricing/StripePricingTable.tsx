'use client'

import React from "react";

const StripePricingTable = () => {
  return (
    <div className="max-w-6xl mx-auto mb-16 text-center py-8">
      <p className="text-muted-foreground mb-4">Manage your subscription and billing</p>
      <a
        href="https://billing.hanzo.ai"
        className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Go to Billing Portal
      </a>
    </div>
  );
};

export default StripePricingTable;
