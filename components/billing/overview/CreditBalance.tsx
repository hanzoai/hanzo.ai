'use client'


import React from 'react';
import { Button } from "@hanzo/ui";
import { Plus } from 'lucide-react';
import { useRouter } from "next/navigation";
import { useBilling } from '@/contexts/BillingContext';

const CreditBalance = () => {
  const { billingInfo } = useBilling();
  const router = useRouter();
  
  const handleAddCredits = () => {
    router.push('/account/purchase-credits');
  };

  return (
    <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-medium">Credit Balance</h3>
        <Button onClick={handleAddCredits}>
          <Plus className="h-4 w-4 mr-2" />
          Add Credits
        </Button>
      </div>
      
      <div className="flex items-center">
        <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center mr-4">
          <span className="text-2xl font-bold text-white">$</span>
        </div>
        <div>
          <div className="text-3xl font-bold">${billingInfo.credits.toFixed(2)}</div>
          <div className="text-sm text-neutral-400 mt-1">Available credits</div>
        </div>
      </div>
    </div>
  );
};

export default CreditBalance;
