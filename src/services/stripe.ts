
import { toast } from "sonner";

// Stripe publishable key from environment variables
const PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "";

export type PlanType = "dev" | "pro" | "team";

export interface PlanDetails {
  id: string;
  name: string;
  price: number;
  currency: string;
  interval: "month" | "year";
  description: string;
}

// Mock plans that would normally come from Stripe API
const PLANS: Record<PlanType, PlanDetails> = {
  dev: {
    id: "price_dev_monthly",
    name: "Dev Plan",
    price: 5,
    currency: "usd",
    interval: "month",
    description: "For individuals & hobbyists"
  },
  pro: {
    id: "price_pro_monthly",
    name: "Pro Plan",
    price: 20,
    currency: "usd",
    interval: "month",
    description: "For professionals & small teams"
  },
  team: {
    id: "price_team_monthly",
    name: "Team Plan",
    price: 30,
    currency: "usd",
    interval: "month",
    description: "Per user, for larger teams"
  }
};

export interface UserBillingInfo {
  credits: number;
  plan: PlanType | null;
  trialEndsAt: Date | null;
  isInTrial: boolean;
  hasActiveSubscription: boolean;
}

// Simulated user billing info - in production this would come from your backend
const mockUserBillingInfo: UserBillingInfo = {
  credits: 5.00,
  plan: null,
  trialEndsAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
  isInTrial: true,
  hasActiveSubscription: false
};

// Simulate loading the user's billing info from storage or API
export const getUserBillingInfo = (): UserBillingInfo => {
  try {
    const storedInfo = localStorage.getItem('userBillingInfo');
    if (storedInfo) {
      const parsedInfo = JSON.parse(storedInfo);
      return {
        ...parsedInfo,
        trialEndsAt: parsedInfo.trialEndsAt ? new Date(parsedInfo.trialEndsAt) : null
      };
    }
  } catch (error) {
    console.error("Error parsing billing info from localStorage:", error);
  }

  // Initialize with mock data if nothing stored or on error
  localStorage.setItem('userBillingInfo', JSON.stringify(mockUserBillingInfo));
  return mockUserBillingInfo;
};

// Update user billing info in storage
export const updateUserBillingInfo = (info: Partial<UserBillingInfo>): UserBillingInfo => {
  const currentInfo = getUserBillingInfo();
  const updatedInfo = { ...currentInfo, ...info };
  localStorage.setItem('userBillingInfo', JSON.stringify(updatedInfo));
  return updatedInfo;
};

// Simulate a checkout redirect to Stripe
export const redirectToCheckout = async (planType: PlanType, quantity: number = 1) => {
  const plan = PLANS[planType];
  
  try {
    // In a real implementation, you would:
    // 1. Call your backend to create a Stripe Checkout session
    // 2. Redirect to the Stripe Checkout URL
    
    // This is a mock implementation that simulates success after a delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate successful checkout
    const updatedInfo: Partial<UserBillingInfo> = {
      plan: planType,
      hasActiveSubscription: true,
      isInTrial: false
    };
    
    updateUserBillingInfo(updatedInfo);
    
    toast.success(`Successfully subscribed to ${plan.name}!`, {
      description: `Your subscription is now active. You will be billed $${plan.price} per ${plan.interval}.`
    });
    
    return true;
  } catch (error) {
    console.error("Error redirecting to checkout:", error);
    
    toast.error("Failed to process checkout", {
      description: "There was an error redirecting to Stripe. Please try again later."
    });
    
    return false;
  }
};

// Simulate purchasing additional credits
export const purchaseCredits = async (amount: number) => {
  try {
    // In a real implementation, you would:
    // 1. Call your backend to create a Stripe Checkout session for credits
    // 2. Redirect to the Stripe Checkout URL
    
    // This is a mock implementation that simulates success after a delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate successful credit purchase
    const currentInfo = getUserBillingInfo();
    const updatedInfo = updateUserBillingInfo({
      credits: currentInfo.credits + amount
    });
    
    toast.success(`Successfully purchased credits!`, {
      description: `$${amount} has been added to your account. New balance: $${updatedInfo.credits.toFixed(2)}`
    });
    
    return true;
  } catch (error) {
    console.error("Error purchasing credits:", error);
    
    toast.error("Failed to purchase credits", {
      description: "There was an error processing your credit purchase. Please try again later."
    });
    
    return false;
  }
};

// Get plan details
export const getPlanDetails = (planType: PlanType): PlanDetails => {
  return PLANS[planType];
};

// Get all plans
export const getAllPlans = (): Record<PlanType, PlanDetails> => {
  return PLANS;
};
