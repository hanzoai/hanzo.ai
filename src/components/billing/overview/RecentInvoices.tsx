
import React from 'react';
import { Clock, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BillingTabsLink from '../BillingTabsLink';

const RecentInvoices = () => {
  return (
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
  );
};

export default RecentInvoices;
