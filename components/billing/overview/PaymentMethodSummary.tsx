
import React from 'react';
import { CreditCard, ArrowRight } from 'lucide-react';
import BillingTabsLink from '../BillingTabsLink';

const PaymentMethodSummary = () => {
  return (
    <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-medium">Payment Method</h3>
        <BillingTabsLink tabId="payment-methods">
          <span className="flex items-center">
            Manage <ArrowRight className="ml-2 h-4 w-4" />
          </span>
        </BillingTabsLink>
      </div>
      <div className="flex items-center">
        <div className="h-10 w-14 bg-gray-800 rounded flex items-center justify-center mr-4">
          <CreditCard className="h-6 w-6 text-muted-foreground" />
        </div>
        <div>
          <div className="font-medium">Visa ending in 4242</div>
          <div className="text-sm text-muted-foreground">Expires 12/25</div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodSummary;
