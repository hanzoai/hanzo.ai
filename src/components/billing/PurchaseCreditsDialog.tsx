
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBilling } from "@/contexts/BillingContext";
import { CreditCard, Loader2 } from "lucide-react";

interface PurchaseCreditsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PREDEFINED_AMOUNTS = [10, 25, 50, 100];

const PurchaseCreditsDialog = ({ open, onOpenChange }: PurchaseCreditsDialogProps) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);
  const { addCredits } = useBilling();

  const handlePurchase = async () => {
    const amount = selectedAmount || parseFloat(customAmount);
    if (!amount || amount <= 0) return;

    setIsProcessing(true);
    try {
      const success = await addCredits(amount);
      if (success) {
        onOpenChange(false);
        setSelectedAmount(null);
        setCustomAmount("");
      }
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSelectAmount = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAmount(null);
    setCustomAmount(e.target.value);
  };

  const getEffectiveAmount = (): number => {
    if (selectedAmount) return selectedAmount;
    const parsed = parseFloat(customAmount);
    return !isNaN(parsed) ? parsed : 0;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-[var(--black)] border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-xl">Purchase Credits</DialogTitle>
          <DialogDescription>
            Add more credits to your account. Credits are used for resource usage.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div>
            <Label className="text-neutral-400 mb-2 block">Select an amount</Label>
            <div className="grid grid-cols-2 gap-3">
              {PREDEFINED_AMOUNTS.map((amount) => (
                <Button
                  key={amount}
                  type="button"
                  variant={selectedAmount === amount ? "default" : "outline"}
                  onClick={() => handleSelectAmount(amount)}
                  className={`${
                    selectedAmount === amount
                      ? "bg-[#fd4444] hover:bg-[#e03e3e] text-[var(--white)]"
                      : "border-gray-700 text-[var(--white)]"
                  }`}
                >
                  ${amount}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="custom-amount" className="text-neutral-400 mb-2 block">
              Or enter a custom amount
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">$</span>
              <Input
                id="custom-amount"
                placeholder="Enter amount"
                type="number"
                min="1"
                step="1"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="pl-8 bg-gray-900 border-gray-700 text-[var(--white)]"
              />
            </div>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-neutral-400">Amount:</span>
              <span>${getEffectiveAmount().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm font-medium">
              <span className="text-neutral-400">Total:</span>
              <span>${getEffectiveAmount().toFixed(2)}</span>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="ghost"
            onClick={() => onOpenChange(false)}
            className="text-neutral-400 hover:text-[var(--white)] hover:bg-gray-800"
            disabled={isProcessing}
          >
            Cancel
          </Button>
          <Button
            type="button"
            className="bg-[var(--white)] hover:bg-gray-200 text-black"
            onClick={handlePurchase}
            disabled={isProcessing || getEffectiveAmount() <= 0}
          >
            {isProcessing ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <CreditCard className="h-4 w-4 mr-2" />
                Purchase Credits
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseCreditsDialog;
