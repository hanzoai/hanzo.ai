
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useBilling } from '@/contexts/BillingContext';

interface AddCreditsDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddCreditsDialog = ({ isOpen, onClose }: AddCreditsDialogProps) => {
  const { addCredits, refreshBillingInfo } = useBilling();
  const [creditAmount, setCreditAmount] = useState('50');
  
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
      onClose();
      refreshBillingInfo();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Add Credits to Your Account</h3>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <form onSubmit={handlePurchaseCredits} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="creditAmount">Amount (USD)</Label>
          <div className="relative">
            <div className="absolute left-3 top-3 text-neutral-400">$</div>
            <Input
              id="creditAmount"
              name="creditAmount"
              placeholder="50"
              value={creditAmount}
              onChange={handleCreditAmountChange}
              className="bg-gray-800 border-gray-700 pl-8"
            />
          </div>
          <p className="text-sm text-neutral-400">Minimum amount: $10</p>
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
  );
};

export default AddCreditsDialog;
