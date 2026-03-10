'use client'

import React, { useEffect, useState } from "react";
import PricingPlan from "./PricingPlan";
import { Github, Code, Users, Rocket } from "lucide-react";

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
  'unified-ai': <Code className="h-6 w-6 text-muted-foreground" />,
  team: <Users className="h-6 w-6 text-muted-foreground" />,
};

// Plans shown on hanzo.ai/pricing — no agency (agency is at hanzo.agency)
const STATIC_PLANS: SubscriptionPlan[] = [
  {
    id: 'developer',
    name: 'Developer',
    description: 'Free to start. $5 credit included — no card required.',
    priceMonthly: 0,
    category: 'personal',
    features: [
      '$5 free AI credit to start',
      'Access to all Zen AI models',
      '60 requests/min',
      '100K tokens/min',
      'API + chat access',
      'Community support',
      'Pay-as-you-go after credit',
    ],
  },
  {
    id: 'unified-ai',
    name: 'Unified AI',
    description: 'Full access to all Hanzo AI — chat, API, agents, and models. 7-day free trial.',
    priceMonthly: 20,
    priceAnnual: 200,
    category: 'personal',
    popular: true,
    features: [
      '7-day free trial + $5 credit',
      'All 14+ Zen AI models (up to 1M ctx)',
      'Unlimited chat at hanzo.chat',
      'MCP tools + agent access',
      '500 requests/min',
      '2M tokens/min',
      'Priority inference',
      'Email support',
      'Usage analytics',
      '$200/yr (save $40)',
    ],
  },
  {
    id: 'team',
    name: 'Team',
    description: 'Collaborate with your team. Includes hanzo.team workspace access.',
    priceMonthly: 25,
    category: 'personal',
    features: [
      'Everything in Unified AI',
      'hanzo.team workspace included',
      'Shared team credits & billing',
      'Up to 25 members',
      'Team usage analytics',
      'SSO / SAML',
      'Priority support',
      'Custom model fine-tuning',
      '5M tokens/min',
      '$25/mo per seat',
    ],
  },
];

const PersonalPlans = () => {
  // Initialize with static plans immediately — no loading flash
  const [plans, setPlans] = useState<SubscriptionPlan[]>(STATIC_PLANS);

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
        if (personal.length) setPlans(personal);
      })
      .catch(() => {
        // keep STATIC_PLANS already set
      });
  }, []);

  function formatPrice(plan: SubscriptionPlan) {
    if (plan.contactSales || plan.priceMonthly == null) return "Custom";
    if (plan.priceMonthly === 0) return "Free";
    return `$${plan.priceMonthly}`;
  }

  function billingPeriod(plan: SubscriptionPlan) {
    if (plan.contactSales || plan.priceMonthly == null) return "";
    if (plan.priceMonthly === 0) return " to start";
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
