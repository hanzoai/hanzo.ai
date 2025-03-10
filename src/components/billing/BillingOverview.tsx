
import React, { useState } from 'react';
import CurrentPlan from './overview/CurrentPlan';
import CreditBalance from './overview/CreditBalance';
import PaymentMethodSummary from './overview/PaymentMethodSummary';
import RecentInvoices from './overview/RecentInvoices';
import AddCreditsDialog from './AddCreditsDialog';

const BillingOverview = () => {
  const [showAddCredits, setShowAddCredits] = useState(false);
  
  const handleCloseAddCredits = () => {
    setShowAddCredits(false);
  };

  return (
    <div className="space-y-8">
      {/* Current Plan */}
      <CurrentPlan />
      
      {/* Credit Balance */}
      <CreditBalance />
      
      {/* Add Credits Dialog */}
      <AddCreditsDialog 
        isOpen={showAddCredits}
        onClose={handleCloseAddCredits}
      />
      
      {/* Payment Method Summary */}
      <PaymentMethodSummary />
      
      {/* Recent Invoices */}
      <RecentInvoices />
    </div>
  );
};

export default BillingOverview;
