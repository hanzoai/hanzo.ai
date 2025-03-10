
import React, { useState } from 'react';
import { CreditCard, Download, Clock, ArrowRight, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import BillingTabsLink from './BillingTabsLink';
import { toast } from 'sonner';
import { useBilling } from '@/contexts/BillingContext';

const BillingOverview = () => {
  const { billingInfo, addCredits, refreshBillingInfo } = useBilling();
  const [showAddCredits, setShowAddCredits] = useState(false);
  const [creditAmount, setCreditAmount] = useState('50');
  
  const handleAddCredits = () => {
    setShowAddCredits(true);
  };
  
  const handleCloseAddCredits = () => {
    setShowAddCredits(false);
  };
  
  const handleCreditAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreditAmount(e.target.value);
  };
  
  const handlePurchaseCredits = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const amount = parseFloat(creditAmount);
    
    if (isNaN(amount) || amount <= 0) {
      toast.error('Please enter a valid amount greater than 0');
      return;
    }
    
    // Simulate credit purchase
    const success = await addCredits(amount);
    
    if (success) {
      setShowAddCredits(false);
      refreshBillingInfo();
    }
  };

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
      
      {/* Credit Balance */}
      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-medium">Credit Balance</h3>
          <Button onClick={handleAddCredits}>
            <Plus className="h-4 w-4 mr-2" />
            Add Credits
          </Button>
        </div>
        
        <div className="flex items-center">
          <div className="h-16 w-16 bg-purple-900/30 rounded-full flex items-center justify-center mr-4">
            <span className="text-2xl font-bold text-purple-300">$</span>
          </div>
          <div>
            <div className="text-3xl font-bold">${billingInfo.credits.toFixed(2)}</div>
            <div className="text-sm text-gray-400 mt-1">Available credits</div>
          </div>
        </div>
      </div>
      
      {/* Add Credits Dialog */}
      {showAddCredits && (
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Add Credits to Your Account</h3>
            <Button variant="ghost" size="sm" onClick={handleCloseAddCredits}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <form onSubmit={handlePurchaseCredits} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="creditAmount">Amount (USD)</Label>
              <div className="relative">
                <div className="absolute left-3 top-3 text-gray-400">$</div>
                <Input
                  id="creditAmount"
                  name="creditAmount"
                  placeholder="50"
                  value={creditAmount}
                  onChange={handleCreditAmountChange}
                  className="bg-gray-800 border-gray-700 pl-8"
                />
              </div>
              <p className="text-sm text-gray-400">Minimum amount: $10</p>
            </div>
            
            {/* Preset amounts */}
            <div className="flex flex-wrap gap-2 mt-2">
              {['10', '25', '50', '100', '500'].map(amount => (
                <Button
                  key={amount}
                  type="button"
                  variant="outline"
                  className={`${
                    creditAmount === amount ? 'border-purple-500 bg-purple-900/20' : ''
                  }`}
                  onClick={() => setCreditAmount(amount)}
                >
                  ${amount}
                </Button>
              ))}
            </div>
            
            <Button type="submit" className="w-full mt-4">
              Purchase Credits
            </Button>
          </form>
        </div>
      )}
      
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
