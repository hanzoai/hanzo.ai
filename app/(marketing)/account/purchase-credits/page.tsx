'use client'


import React, { useState } from 'react';
import { Button } from "@hanzo/ui";
import { Input } from "@hanzo/ui";
import { Label } from "@hanzo/ui";
import { toast } from 'sonner';
import { useBilling } from '@/contexts/BillingContext';

import { ArrowLeft, CreditCard } from 'lucide-react';
import { Checkbox } from "@hanzo/ui";
import AnimatedSection, { AnimatedHeading } from "@/components/ui/animated-section";
import { useRouter } from "next/navigation";

const PurchaseCredits = () => {
  const { addCredits } = useBilling();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [creditAmount, setCreditAmount] = useState('50');

  const handleCreditAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreditAmount(e.target.value);
  };

  const handlePurchaseCredits = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    const amount = parseFloat(creditAmount);
    
    if (isNaN(amount) || amount <= 0) {
      toast.error('Please enter a valid amount greater than 0');
      setIsProcessing(false);
      return;
    }
    
    // Simulate credit purchase
    const success = await addCredits(amount);
    
    if (success) {
      toast.success(`Successfully purchased $${amount} in credits!`);
      router.push('/account/billing');
    } else {
      toast.error('Failed to process payment');
    }
    
    setIsProcessing(false);
  };

  return (
    <AnimatedSection>
      <div className="space-y-6">
        <div className="flex items-center mb-4">
          <Button 
            variant="ghost" 
            onClick={() => router.push('/account/billing')} 
            className="mr-4 hover:bg-gray-900/20"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Billing
          </Button>
        </div>
        
        <AnimatedHeading>
          <h2 className="text-2xl font-bold mb-6">Purchase Credits</h2>
        </AnimatedHeading>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-3">
            <div className="bg-[var(--black)] border-0 rounded-lg p-6 space-y-6">
              <form onSubmit={handlePurchaseCredits} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="creditAmount">Amount (USD)</Label>
                  <div className="relative">
                    <div className="absolute left-3 top-3 text-muted-foreground">$</div>
                    <Input
                      id="creditAmount"
                      name="creditAmount"
                      placeholder="50"
                      value={creditAmount}
                      onChange={handleCreditAmountChange}
                      className="bg-gray-900/20 border-gray-800/30 pl-8"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">Minimum amount: $10</p>
                </div>
                
                {/* Preset amounts */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {['10', '25', '50', '100', '500'].map(amount => (
                    <Button
                      key={amount}
                      type="button"
                      variant="outline"
                      className={`bg-[var(--black)] border-gray-800/30 hover:bg-gray-900/30 ${
                        creditAmount === amount ? 'border-white/30 bg-primary/10' : ''
                      }`}
                      onClick={() => setCreditAmount(amount)}
                    >
                      ${amount}
                    </Button>
                  ))}
                </div>

                <div className="space-y-4">
                  <Label htmlFor="card">Payment Method</Label>
                  <div className="p-4 border-0 rounded-lg bg-gray-900/20 flex items-center">
                    <div className="h-10 w-14 bg-gray-900/50 rounded flex items-center justify-center mr-4">
                      <div className="text-foreground font-bold text-xs">VISA</div>
                    </div>
                    <div>
                      <div className="font-medium">
                        Visa ending in 4242
                        <span className="ml-2 text-xs bg-primary/20 text-foreground px-2 py-0.5 rounded-full">
                          Default
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">Expires 12/25</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox id="terms" checked={true} />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to the terms and conditions
                  </Label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gray-900 hover:bg-gray-800 border-0" 
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Processing...' : 'Purchase Credits'}
                </Button>
              </form>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <div className="bg-[var(--black)] border-0 rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-medium">Order Summary</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between py-2">
                  <span>Credits</span>
                  <span className="font-medium">${creditAmount}</span>
                </div>
                <div className="flex justify-between py-2 border-t border-gray-800/10">
                  <span>Subtotal</span>
                  <span className="font-medium">${creditAmount}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Tax</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="flex justify-between py-2 border-t border-gray-800/10">
                  <span className="font-bold">Total</span>
                  <span className="font-bold">${creditAmount}</span>
                </div>
              </div>
              
              <div className="pt-4 text-sm text-muted-foreground">
                <p>Credits never expire and can be used for any Hanzo AI service.</p>
                <p className="mt-2">Need help? Contact our support team.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PurchaseCredits;
