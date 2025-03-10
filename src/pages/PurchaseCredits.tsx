
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useBilling } from '@/contexts/BillingContext';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import AnimatedSection, { AnimatedHeading } from '@/components/ui/animated-section';

const PurchaseCredits = () => {
  const { addCredits } = useBilling();
  const navigate = useNavigate();
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
      navigate('/account/billing');
    } else {
      toast.error('Failed to process payment');
    }
    
    setIsProcessing(false);
  };

  return (
    <AnimatedSection>
      <div className="space-y-6">
        <div className="flex items-center mb-4">
          <Button variant="ghost" onClick={() => navigate('/account/billing')} className="mr-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Billing
          </Button>
        </div>
        
        <AnimatedHeading>
          <h2 className="text-2xl font-bold mb-6">Purchase Credits</h2>
        </AnimatedHeading>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-3">
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 space-y-6">
              <form onSubmit={handlePurchaseCredits} className="space-y-6">
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
                <div className="flex flex-wrap gap-2 mt-4">
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

                <div className="space-y-4">
                  <Label htmlFor="card">Payment Method</Label>
                  <div className="p-4 border border-gray-800 rounded-lg bg-gray-900/20 flex items-center">
                    <div className="h-10 w-14 bg-gray-800 rounded flex items-center justify-center mr-4">
                      <div className="text-blue-500 font-bold text-xs">VISA</div>
                    </div>
                    <div>
                      <div className="font-medium">
                        Visa ending in 4242
                        <span className="ml-2 text-xs bg-purple-900/50 text-purple-300 px-2 py-0.5 rounded-full">
                          Default
                        </span>
                      </div>
                      <div className="text-sm text-gray-400">Expires 12/25</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox id="terms" checked={true} />
                  <Label htmlFor="terms" className="text-sm text-gray-400">
                    I agree to the terms and conditions
                  </Label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-purple-600 hover:bg-purple-700" 
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Processing...' : 'Purchase Credits'}
                </Button>
              </form>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-medium">Order Summary</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between py-2">
                  <span>Credits</span>
                  <span className="font-medium">${creditAmount}</span>
                </div>
                <div className="flex justify-between py-2 border-t border-gray-800">
                  <span>Subtotal</span>
                  <span className="font-medium">${creditAmount}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Tax</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="flex justify-between py-2 border-t border-gray-800">
                  <span className="font-bold">Total</span>
                  <span className="font-bold">${creditAmount}</span>
                </div>
              </div>
              
              <div className="pt-4 text-sm text-gray-400">
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
