'use client'

/**
 * BillingContext - Legacy wrapper for CommerceContext
 *
 * This file provides backwards compatibility with existing code
 * that uses the BillingContext/useBilling pattern.
 *
 * New code should use CommerceContext/useCommerce directly.
 */

import React, { createContext, useContext, ReactNode } from 'react';
import {
  BillingInfo,
  Plan,
  getBillingInfo,
  getPlans,
  subscribeToPlan,
  purchaseCredits,
} from '@/lib/hanzo/commerce';

// Legacy types for backwards compatibility
export type PlanType = 'dev' | 'pro' | 'team';

export interface UserBillingInfo {
  credits: number;
  plan: PlanType | null;
  trialEndsAt: Date | null;
  isInTrial: boolean;
  hasActiveSubscription: boolean;
}

interface BillingContextType {
  billingInfo: UserBillingInfo;
  isLoading: boolean;
  error: Error | null;
  checkout: (planType: PlanType, quantity?: number) => Promise<boolean>;
  addCredits: (amount: number) => Promise<boolean>;
  refreshBillingInfo: () => void;
}

const BillingContext = createContext<BillingContextType | undefined>(undefined);

/**
 * Convert new BillingInfo to legacy UserBillingInfo format
 */
function toLegacyBillingInfo(info: BillingInfo): UserBillingInfo {
  const planMap: Record<string, PlanType> = {
    plan_dev: 'dev',
    plan_pro: 'pro',
    plan_team: 'team',
    dev: 'dev',
    pro: 'pro',
    team: 'team',
  };

  return {
    credits: info.credits,
    plan: info.plan ? planMap[info.plan.id] || null : null,
    trialEndsAt: info.trialEndsAt ? new Date(info.trialEndsAt) : null,
    isInTrial: info.isInTrial,
    hasActiveSubscription: info.subscription?.status === 'active',
  };
}

export const BillingProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [billingInfo, setBillingInfo] = React.useState<UserBillingInfo>(() =>
    toLegacyBillingInfo(getBillingInfo())
  );
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  const refreshBillingInfo = React.useCallback(() => {
    setIsLoading(true);
    setError(null);
    try {
      const info = getBillingInfo();
      setBillingInfo(toLegacyBillingInfo(info));
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error('Failed to load billing info')
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    refreshBillingInfo();
  }, [refreshBillingInfo]);

  const checkout = React.useCallback(
    async (planType: PlanType, _quantity: number = 1): Promise<boolean> => {
      setIsLoading(true);
      try {
        await subscribeToPlan(planType);
        refreshBillingInfo();
        return true;
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('Checkout failed')
        );
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [refreshBillingInfo]
  );

  const addCredits = React.useCallback(
    async (amount: number): Promise<boolean> => {
      setIsLoading(true);
      try {
        const result = await purchaseCredits(amount);
        refreshBillingInfo();
        return result.success;
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('Failed to add credits')
        );
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [refreshBillingInfo]
  );

  return (
    <BillingContext.Provider
      value={{
        billingInfo,
        isLoading,
        error,
        checkout,
        addCredits,
        refreshBillingInfo,
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
