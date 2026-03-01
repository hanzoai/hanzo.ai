'use client'

import React, { useEffect, useState } from "react";
import PricingPlan from "./PricingPlan";
import { Github, Code, Zap, Rocket } from "lucide-react";
import { Loader2 } from "lucide-react";

const PLANS_API = "https://api.hanzo.ai/v1/plans";

interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  priceMonthly: number | null;
  priceAnnual?: number | null;
  category: string;
  popular?: boolean;
  contactSales?: boolean;
  features: string[];
  limits?: Record<string, number | null>;
  payouts?: { idleResalePercent: number; description: string };
}

const PLAN_ICONS: Record<string, React.ReactNode> = {
  developer: <Github className="h-6 w-6 text-muted-foreground" />,
  pro: <Code className="h-6 w-6 text-muted-foreground" />,
  max: <Zap className="h-6 w-6 text-muted-foreground" />,
};

const STATIC_PLANS: SubscriptionPlan[] = [
  {
    id: 'developer',
    name: 'Developer',
    description: 'For individuals exploring AI development.',
    priceMonthly: 0,
    category: 'personal',
    features: [
      '$5 free credits to start',
      'Access to Zen models',
      '100+ third-party models',
      'API access',
      'Community support',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'For professionals building with AI daily.',
    priceMonthly: 20,
    priceAnnual: 200,
    category: 'personal',
    popular: true,
    features: [
      '$20 credits/month included',
      'All Zen frontier models',
      'Priority inference routing',
      'MCP tools access',
      'Email support',
      'Usage dashboard',
    ],
  },
  {
    id: 'max',
    name: 'Max',
    description: 'Unlimited power for ambitious builders.',
    priceMonthly: 100,
    priceAnnual: 1000,
    category: 'personal',
    features: [
      '$100 credits/month included',
      'All models including Zen5',
      'Faster inference SLA',
      'Fine-tuning access',
      'Advanced analytics',
      'Priority support',
    ],
  },
];

const PersonalPlans = () => {
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(PLANS_API)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((d) => {
        const personal = (d.plans || []).filter(
          (p: SubscriptionPlan) => p.category === "personal"
        );
        setPlans(personal.length ? personal : STATIC_PLANS);
        setLoading(false);
      })
      .catch(() => {
        setPlans(STATIC_PLANS);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="w-6 h-6 animate-spin mr-2 text-muted-foreground" />
        <span className="text-muted-foreground">Loading plans...</span>
      </div>
    );
  }

  if (!plans.length) {
    return null;
  }

  function formatPrice(plan: SubscriptionPlan) {
    if (plan.contactSales || plan.priceMonthly == null) return "Custom";
    if (plan.priceMonthly === 0) return "Free";
    return `$${plan.priceMonthly}`;
  }

  function billingPeriod(plan: SubscriptionPlan) {
    if (plan.contactSales || plan.priceMonthly == null || plan.priceMonthly === 0) return " forever";
    return "/month";
  }

  const iconFallback = <Rocket className="h-6 w-6 text-muted-foreground" />;

  return (
    <div className="max-w-7xl mx-auto mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {plans.map((plan) => (
          <PricingPlan
            key={plan.id}
            name={plan.name}
            icon={PLAN_ICONS[plan.id] || iconFallback}
            price={formatPrice(plan)}
            billingPeriod={billingPeriod(plan)}
            description={plan.description}
            features={plan.features}
            popular={plan.popular}
            githubLink={plan.priceMonthly === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default PersonalPlans;
