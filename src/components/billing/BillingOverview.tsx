
import React from 'react';
import { CreditCard, Download, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BillingTabsLink from './BillingTabsLink';

const BillingOverview = () => {
  return (
    <div className="space-y-8">
      {/* Current Plan */}
      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-medium mb-4">Current Plan</h3>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold">Pro Plan</div>
            <div className="text-gray-400 mt-1">$49/month, billed annually</div>
          </div>
          <Button>Upgrade Plan</Button>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-800 flex items-center justify-between">
          <div className="text-gray-400">Next billing date: July 15, 2024</div>
          <Button variant="outline" size="sm">Cancel Subscription</Button>
        </div>
      </div>
      
      {/* Payment Method Summary */}
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
            <CreditCard className="h-6 w-6 text-gray-400" />
          </div>
          <div>
            <div className="font-medium">Visa ending in 4242</div>
            <div className="text-sm text-gray-400">Expires 12/25</div>
          </div>
        </div>
      </div>
      
      {/* Recent Invoices */}
      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-medium">Recent Invoices</h3>
          <BillingTabsLink tabId="history">
            <span className="flex items-center">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </BillingTabsLink>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <div className="font-medium">June 15, 2024</div>
                <div className="text-sm text-gray-400">Pro Plan - $49.00</div>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <Download className="h-4 w-4 mr-2" />
              PDF
            </Button>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <div className="font-medium">May 15, 2024</div>
                <div className="text-sm text-gray-400">Pro Plan - $49.00</div>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <Download className="h-4 w-4 mr-2" />
              PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingOverview;
