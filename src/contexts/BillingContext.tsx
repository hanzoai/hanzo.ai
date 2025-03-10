
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  getUserBillingInfo, 
  updateUserBillingInfo, 
  redirectToCheckout, 
  purchaseCredits,
  UserBillingInfo,
  PlanType
} from '@/services/stripe';

interface BillingContextType {
  billingInfo: UserBillingInfo;
  isLoading: boolean;
  error: Error | null;
  checkout: (planType: PlanType, quantity?: number) => Promise<boolean>;
  addCredits: (amount: number) => Promise<boolean>;
  refreshBillingInfo: () => void;
}

const BillingContext = createContext<BillingContextType | undefined>(undefined);

export const BillingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [billingInfo, setBillingInfo] = useState<UserBillingInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const loadBillingInfo = () => {
    try {
      setIsLoading(true);
      setError(null);
      const info = getUserBillingInfo();
      setBillingInfo(info);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load billing information'));
      console.error('Error loading billing info:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadBillingInfo();
  }, []);

  const checkout = async (planType: PlanType, quantity: number = 1) => {
    return await redirectToCheckout(planType, quantity);
  };

  const addCredits = async (amount: number) => {
    const result = await purchaseCredits(amount);
    if (result) {
      loadBillingInfo();
    }
    return result;
  };

  const refreshBillingInfo = () => {
    loadBillingInfo();
  };

  return (
    <BillingContext.Provider 
      value={{ 
        billingInfo: billingInfo || getUserBillingInfo(),
        isLoading, 
        error, 
        checkout, 
        addCredits,
        refreshBillingInfo
      }}
    >
      {children}
    </BillingContext.Provider>
  );
};

export const useBilling = () => {
  const context = useContext(BillingContext);
  if (context === undefined) {
    throw new Error('useBilling must be used within a BillingProvider');
  }
  return context;
};
