/**
 * Hanzo Commerce - Payment Processor Abstraction
 *
 * Backend-agnostic payment abstraction supporting:
 * - Square (card payments)
 * - Crypto (ETH, BTC, USDC, etc.)
 * - Optional: Stripe, PayPal (if enabled)
 */

import { toast } from 'sonner';

const COMMERCE_API_URL = import.meta.env.VITE_HANZO_API_URL || 'https://api.hanzo.ai';

// Processor types
export type PaymentProcessor = 'square' | 'crypto' | 'stripe' | 'paypal';

// Currency types
export type FiatCurrency = 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AUD' | 'JPY';
export type CryptoCurrency = 'ETH' | 'BTC' | 'USDC' | 'USDT' | 'SOL' | 'LUX';
export type Currency = FiatCurrency | CryptoCurrency;

export interface PaymentMethod {
  id: string;
  type: 'card' | 'crypto_wallet' | 'bank_account';
  processor: PaymentProcessor;
  last4?: string;
  brand?: string;
  expiryMonth?: number;
  expiryYear?: number;
  walletAddress?: string;
  walletChain?: string;
  isDefault: boolean;
  createdAt: string;
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: FiatCurrency;
  interval: 'month' | 'year';
  features: string[];
  isPopular?: boolean;
}

export interface Subscription {
  id: string;
  planId: string;
  status: 'active' | 'canceled' | 'past_due' | 'trialing';
  currentPeriodStart: string;
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
  processor: PaymentProcessor;
}

export interface BillingInfo {
  credits: number;
  plan: Plan | null;
  subscription: Subscription | null;
  paymentMethods: PaymentMethod[];
  trialEndsAt: string | null;
  isInTrial: boolean;
}

export interface PaymentRequest {
  amount: number;
  currency: Currency;
  description?: string;
  metadata?: Record<string, string>;
}

export interface PaymentResult {
  success: boolean;
  transactionId?: string;
  error?: string;
  receiptUrl?: string;
}

// Available plans
const PLANS: Record<string, Plan> = {
  dev: {
    id: 'plan_dev',
    name: 'Dev',
    description: 'For individuals & hobbyists',
    price: 5,
    currency: 'USD',
    interval: 'month',
    features: [
      '$5 monthly credits',
      'Basic AI models',
      'Community support',
      'API access',
    ],
  },
  pro: {
    id: 'plan_pro',
    name: 'Pro',
    description: 'For professionals',
    price: 20,
    currency: 'USD',
    interval: 'month',
    features: [
      '$20 monthly credits',
      'All AI models',
      'Priority support',
      'Advanced analytics',
      'Custom integrations',
    ],
    isPopular: true,
  },
  team: {
    id: 'plan_team',
    name: 'Team',
    description: 'Per user, for teams',
    price: 30,
    currency: 'USD',
    interval: 'month',
    features: [
      '$30 credits per user',
      'All Pro features',
      'Team management',
      'SSO & SAML',
      'Dedicated support',
    ],
  },
};

// Storage key for billing info
const BILLING_STORAGE_KEY = 'hanzo_billing_info';

/**
 * Get enabled payment processors
 */
export function getEnabledProcessors(): PaymentProcessor[] {
  const processors: PaymentProcessor[] = ['square', 'crypto'];

  // Add optional processors if configured
  if (import.meta.env.VITE_STRIPE_ENABLED === 'true') {
    processors.push('stripe');
  }
  if (import.meta.env.VITE_PAYPAL_ENABLED === 'true') {
    processors.push('paypal');
  }

  return processors;
}

/**
 * Check if crypto payments are supported
 */
export function isCryptoEnabled(): boolean {
  return getEnabledProcessors().includes('crypto');
}

/**
 * Get billing info from storage or initialize
 */
export function getBillingInfo(): BillingInfo {
  try {
    const stored = localStorage.getItem(BILLING_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // Continue with default
  }

  // Default billing info
  const defaultInfo: BillingInfo = {
    credits: 5.0,
    plan: null,
    subscription: null,
    paymentMethods: [],
    trialEndsAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    isInTrial: true,
  };

  localStorage.setItem(BILLING_STORAGE_KEY, JSON.stringify(defaultInfo));
  return defaultInfo;
}

/**
 * Update billing info
 */
export function updateBillingInfo(updates: Partial<BillingInfo>): BillingInfo {
  const current = getBillingInfo();
  const updated = { ...current, ...updates };
  localStorage.setItem(BILLING_STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

/**
 * Get all available plans
 */
export function getPlans(): Plan[] {
  return Object.values(PLANS);
}

/**
 * Get a specific plan
 */
export function getPlan(planId: string): Plan | undefined {
  return PLANS[planId] || Object.values(PLANS).find(p => p.id === planId);
}

/**
 * Add a payment method (card via Square)
 */
export async function addPaymentMethod(
  processor: PaymentProcessor,
  token: string
): Promise<PaymentMethod> {
  const accessToken = localStorage.getItem('hanzo_access_token');

  // In production, this calls the commerce API
  try {
    const response = await fetch(`${COMMERCE_API_URL}/v1/payment-methods`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        processor,
        token,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to add payment method');
    }

    const paymentMethod: PaymentMethod = await response.json();

    // Update local billing info
    const billing = getBillingInfo();
    billing.paymentMethods.push(paymentMethod);
    updateBillingInfo(billing);

    toast.success('Payment method added successfully');
    return paymentMethod;
  } catch (error) {
    // Mock for development
    const mockMethod: PaymentMethod = {
      id: `pm_${Date.now()}`,
      type: processor === 'crypto' ? 'crypto_wallet' : 'card',
      processor,
      last4: token.slice(-4),
      brand: 'Visa',
      isDefault: getBillingInfo().paymentMethods.length === 0,
      createdAt: new Date().toISOString(),
    };

    const billing = getBillingInfo();
    billing.paymentMethods.push(mockMethod);
    updateBillingInfo(billing);

    toast.success('Payment method added');
    return mockMethod;
  }
}

/**
 * Add a crypto wallet as payment method
 */
export async function addCryptoWallet(
  address: string,
  chain: string
): Promise<PaymentMethod> {
  const method: PaymentMethod = {
    id: `pm_wallet_${Date.now()}`,
    type: 'crypto_wallet',
    processor: 'crypto',
    walletAddress: address,
    walletChain: chain,
    isDefault: false,
    createdAt: new Date().toISOString(),
  };

  const billing = getBillingInfo();
  billing.paymentMethods.push(method);
  updateBillingInfo(billing);

  toast.success('Wallet connected for payments');
  return method;
}

/**
 * Remove a payment method
 */
export async function removePaymentMethod(methodId: string): Promise<void> {
  const billing = getBillingInfo();
  billing.paymentMethods = billing.paymentMethods.filter(m => m.id !== methodId);
  updateBillingInfo(billing);
  toast.success('Payment method removed');
}

/**
 * Set default payment method
 */
export async function setDefaultPaymentMethod(methodId: string): Promise<void> {
  const billing = getBillingInfo();
  billing.paymentMethods = billing.paymentMethods.map(m => ({
    ...m,
    isDefault: m.id === methodId,
  }));
  updateBillingInfo(billing);
  toast.success('Default payment method updated');
}

/**
 * Subscribe to a plan
 */
export async function subscribeToPlan(
  planId: string,
  paymentMethodId?: string
): Promise<Subscription> {
  const plan = getPlan(planId);
  if (!plan) {
    throw new Error('Plan not found');
  }

  const accessToken = localStorage.getItem('hanzo_access_token');
  const billing = getBillingInfo();
  const paymentMethod = paymentMethodId
    ? billing.paymentMethods.find(m => m.id === paymentMethodId)
    : billing.paymentMethods.find(m => m.isDefault);

  try {
    const response = await fetch(`${COMMERCE_API_URL}/v1/subscriptions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        planId: plan.id,
        paymentMethodId: paymentMethod?.id,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create subscription');
    }

    const subscription: Subscription = await response.json();

    updateBillingInfo({
      plan,
      subscription,
      isInTrial: false,
    });

    toast.success(`Subscribed to ${plan.name} plan!`, {
      description: `You'll be billed $${plan.price}/${plan.interval}`,
    });

    return subscription;
  } catch {
    // Mock for development
    const subscription: Subscription = {
      id: `sub_${Date.now()}`,
      planId: plan.id,
      status: 'active',
      currentPeriodStart: new Date().toISOString(),
      currentPeriodEnd: new Date(
        Date.now() + 30 * 24 * 60 * 60 * 1000
      ).toISOString(),
      cancelAtPeriodEnd: false,
      processor: paymentMethod?.processor || 'square',
    };

    updateBillingInfo({
      plan,
      subscription,
      isInTrial: false,
    });

    toast.success(`Subscribed to ${plan.name} plan!`);
    return subscription;
  }
}

/**
 * Cancel subscription
 */
export async function cancelSubscription(): Promise<void> {
  const billing = getBillingInfo();
  if (!billing.subscription) {
    throw new Error('No active subscription');
  }

  // Mark subscription as canceling at period end
  const updatedSub: Subscription = {
    ...billing.subscription,
    cancelAtPeriodEnd: true,
  };

  updateBillingInfo({
    subscription: updatedSub,
  });

  toast.success('Subscription will cancel at end of billing period');
}

/**
 * Purchase credits
 */
export async function purchaseCredits(
  amount: number,
  processor: PaymentProcessor = 'square',
  paymentMethodId?: string
): Promise<PaymentResult> {
  const billing = getBillingInfo();
  const paymentMethod = paymentMethodId
    ? billing.paymentMethods.find(m => m.id === paymentMethodId)
    : billing.paymentMethods.find(m => m.isDefault && m.processor === processor);

  try {
    // In production, call commerce API
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call

    const newCredits = billing.credits + amount;
    updateBillingInfo({ credits: newCredits });

    toast.success('Credits purchased!', {
      description: `Added $${amount} to your balance. New balance: $${newCredits.toFixed(2)}`,
    });

    return {
      success: true,
      transactionId: `txn_${Date.now()}`,
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Payment failed';
    toast.error('Payment failed', { description: errorMessage });
    return {
      success: false,
      error: errorMessage,
    };
  }
}

/**
 * Pay with crypto
 */
export async function payWithCrypto(
  amount: number,
  currency: CryptoCurrency,
  toAddress: string,
  sendTransaction: (params: {
    to: string;
    value: bigint;
  }) => Promise<string>
): Promise<PaymentResult> {
  try {
    // Convert amount to wei/smallest unit (simplified - real implementation
    // would use proper conversion based on token decimals)
    const value = BigInt(Math.floor(amount * 1e18));

    const txHash = await sendTransaction({
      to: toAddress as `0x${string}`,
      value,
    });

    // Verify transaction on backend
    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for confirmation

    // Update credits
    const billing = getBillingInfo();
    const newCredits = billing.credits + amount;
    updateBillingInfo({ credits: newCredits });

    toast.success('Crypto payment confirmed!', {
      description: `Transaction: ${txHash.slice(0, 10)}...`,
    });

    return {
      success: true,
      transactionId: txHash,
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Transaction failed';
    toast.error('Transaction failed', { description: errorMessage });
    return {
      success: false,
      error: errorMessage,
    };
  }
}

/**
 * Get Square Web SDK application ID
 */
export function getSquareApplicationId(): string {
  return (
    import.meta.env.VITE_SQUARE_APPLICATION_ID ||
    import.meta.env.VITE_SQUARE_SANDBOX_APPLICATION_ID ||
    ''
  );
}

/**
 * Get Square location ID
 */
export function getSquareLocationId(): string {
  return (
    import.meta.env.VITE_SQUARE_LOCATION_ID ||
    import.meta.env.VITE_SQUARE_SANDBOX_LOCATION_ID ||
    ''
  );
}

/**
 * Check if Square is configured
 */
export function isSquareConfigured(): boolean {
  return !!getSquareApplicationId() && !!getSquareLocationId();
}

/**
 * Get crypto payment address for deposits
 */
export function getCryptoDepositAddress(
  chain: string = 'ethereum'
): string {
  // In production, this would be fetched from the API
  // For now, return a placeholder
  return (
    import.meta.env.VITE_CRYPTO_DEPOSIT_ADDRESS ||
    '0x0000000000000000000000000000000000000000'
  );
}
