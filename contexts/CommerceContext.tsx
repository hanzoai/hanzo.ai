'use client'

/**
 * CommerceContext - Payment and Billing Provider
 *
 * Backend-agnostic billing using Hanzo Commerce:
 * - Square (primary card processor)
 * - Crypto payments (ETH, BTC, USDC, etc.)
 * - Subscription management
 * - Credit system
 */

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';
import { useAccount, useSendTransaction } from 'wagmi';
import {
  BillingInfo,
  Plan,
  PaymentMethod,
  Subscription,
  PaymentResult,
  PaymentProcessor,
  CryptoCurrency,
  getBillingInfo,
  updateBillingInfo,
  getPlans,
  getPlan,
  addPaymentMethod,
  addCryptoWallet,
  removePaymentMethod,
  setDefaultPaymentMethod,
  subscribeToPlan,
  cancelSubscription,
  purchaseCredits,
  payWithCrypto,
  getEnabledProcessors,
  isCryptoEnabled,
  isSquareConfigured,
  getCryptoDepositAddress,
} from '@/lib/hanzo/commerce';

interface CommerceContextType {
  // Billing state
  billingInfo: BillingInfo;
  isLoading: boolean;
  error: Error | null;

  // Plans
  plans: Plan[];
  getPlanById: (id: string) => Plan | undefined;

  // Payment methods
  addCard: (token: string) => Promise<PaymentMethod>;
  addWallet: (address: string, chain: string) => Promise<PaymentMethod>;
  removeMethod: (methodId: string) => Promise<void>;
  setDefaultMethod: (methodId: string) => Promise<void>;

  // Subscriptions
  subscribe: (planId: string, paymentMethodId?: string) => Promise<Subscription>;
  cancelSub: () => Promise<void>;

  // Credits
  buyCredits: (
    amount: number,
    processor?: PaymentProcessor
  ) => Promise<PaymentResult>;
  buyCreditsWithCrypto: (
    amount: number,
    currency: CryptoCurrency
  ) => Promise<PaymentResult>;

  // Utilities
  enabledProcessors: PaymentProcessor[];
  isCryptoSupported: boolean;
  isSquareReady: boolean;
  refreshBilling: () => void;
}

const CommerceContext = createContext<CommerceContextType | undefined>(
  undefined
);

export const CommerceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [billingInfo, setBillingInfo] = useState<BillingInfo>(() =>
    getBillingInfo()
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Web3 hooks for crypto payments
  const { address, isConnected } = useAccount();
  const { sendTransactionAsync } = useSendTransaction();

  // Available plans
  const plans = getPlans();

  // Enabled payment processors
  const enabledProcessors = getEnabledProcessors();
  const isCryptoSupported = isCryptoEnabled();
  const isSquareReady = isSquareConfigured();

  // Load billing info
  const refreshBilling = useCallback(() => {
    setIsLoading(true);
    setError(null);
    try {
      const info = getBillingInfo();
      setBillingInfo(info);
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error('Failed to load billing info')
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshBilling();
  }, [refreshBilling]);

  // Auto-add connected wallet as payment method
  useEffect(() => {
    if (isConnected && address) {
      const hasWallet = billingInfo.paymentMethods.some(
        m => m.type === 'crypto_wallet' && m.walletAddress === address
      );
      if (!hasWallet && isCryptoSupported) {
        // Auto-add wallet silently (user can remove if desired)
        addCryptoWallet(address, 'ethereum').then(() => {
          refreshBilling();
        });
      }
    }
  }, [isConnected, address, billingInfo.paymentMethods, isCryptoSupported, refreshBilling]);

  // Get plan by ID
  const getPlanById = useCallback((id: string) => {
    return getPlan(id);
  }, []);

  // Add card payment method
  const addCard = useCallback(
    async (token: string): Promise<PaymentMethod> => {
      setIsLoading(true);
      try {
        const method = await addPaymentMethod('square', token);
        refreshBilling();
        return method;
      } finally {
        setIsLoading(false);
      }
    },
    [refreshBilling]
  );

  // Add crypto wallet
  const addWallet = useCallback(
    async (walletAddress: string, chain: string): Promise<PaymentMethod> => {
      setIsLoading(true);
      try {
        const method = await addCryptoWallet(walletAddress, chain);
        refreshBilling();
        return method;
      } finally {
        setIsLoading(false);
      }
    },
    [refreshBilling]
  );

  // Remove payment method
  const removeMethod = useCallback(
    async (methodId: string): Promise<void> => {
      setIsLoading(true);
      try {
        await removePaymentMethod(methodId);
        refreshBilling();
      } finally {
        setIsLoading(false);
      }
    },
    [refreshBilling]
  );

  // Set default payment method
  const setDefaultMethod = useCallback(
    async (methodId: string): Promise<void> => {
      setIsLoading(true);
      try {
        await setDefaultPaymentMethod(methodId);
        refreshBilling();
      } finally {
        setIsLoading(false);
      }
    },
    [refreshBilling]
  );

  // Subscribe to plan
  const subscribe = useCallback(
    async (planId: string, paymentMethodId?: string): Promise<Subscription> => {
      setIsLoading(true);
      try {
        const sub = await subscribeToPlan(planId, paymentMethodId);
        refreshBilling();
        return sub;
      } finally {
        setIsLoading(false);
      }
    },
    [refreshBilling]
  );

  // Cancel subscription
  const cancelSub = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    try {
      await cancelSubscription();
      refreshBilling();
    } finally {
      setIsLoading(false);
    }
  }, [refreshBilling]);

  // Buy credits with card
  const buyCredits = useCallback(
    async (
      amount: number,
      processor: PaymentProcessor = 'square'
    ): Promise<PaymentResult> => {
      setIsLoading(true);
      try {
        const result = await purchaseCredits(amount, processor);
        refreshBilling();
        return result;
      } finally {
        setIsLoading(false);
      }
    },
    [refreshBilling]
  );

  // Buy credits with crypto
  const buyCreditsWithCrypto = useCallback(
    async (
      amount: number,
      currency: CryptoCurrency
    ): Promise<PaymentResult> => {
      if (!isConnected || !sendTransactionAsync) {
        return {
          success: false,
          error: 'Please connect your wallet first',
        };
      }

      setIsLoading(true);
      try {
        const depositAddress = getCryptoDepositAddress('ethereum');
        const result = await payWithCrypto(
          amount,
          currency,
          depositAddress,
          async (params) => {
            const hash = await sendTransactionAsync({
              to: params.to as `0x${string}`,
              value: params.value,
            });
            return hash;
          }
        );
        refreshBilling();
        return result;
      } finally {
        setIsLoading(false);
      }
    },
    [isConnected, sendTransactionAsync, refreshBilling]
  );

  return (
    <CommerceContext.Provider
      value={{
        billingInfo,
        isLoading,
        error,
        plans,
        getPlanById,
        addCard,
        addWallet,
        removeMethod,
        setDefaultMethod,
        subscribe,
        cancelSub,
        buyCredits,
        buyCreditsWithCrypto,
        enabledProcessors,
        isCryptoSupported,
        isSquareReady,
        refreshBilling,
      }}
    >
      {children}
    </CommerceContext.Provider>
  );
};

export const useCommerce = () => {
  const context = useContext(CommerceContext);
  if (context === undefined) {
    throw new Error('useCommerce must be used within a CommerceProvider');
  }
  return context;
};

// Legacy alias for backwards compatibility
export const useBilling = useCommerce;
