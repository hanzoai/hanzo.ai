'use client'

import React, { useEffect, useState } from "react";
import PricingPlan from "./PricingPlan";
import { Users, Shield, Building2 } from "lucide-react";
import TeamPlanDetails from "./TeamPlanDetails";

const PLANS_API = "https://pricing.hanzo.ai/v1/plans";

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
  team: <Users className="h-6 w-6 text-muted-foreground" />,
  enterprise: <Shield className="h-6 w-6 text-muted-foreground" />,
  agency: <Shield className="h-6 w-6 text-muted-foreground" />,
};

const STATIC_PLANS: SubscriptionPlan[] = [
  {
    id: 'team',
    name: 'Team',
    description: 'Collaborate with your team. Includes hanzo.team workspace access.',
    priceMonthly: 25,
    category: 'team',
    popular: true,
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
  {
    id: 'agency',
    name: 'Agency',
    description: 'Full-scale AI infrastructure for agencies and enterprises. Dedicated support and SLA.',
    priceMonthly: null,
    category: 'enterprise',
    contactSales: true,
    features: [
      'Everything in Team',
      'Unlimited members',
      'Dedicated inference capacity',
      'Custom rate limits',
      'On-premise / VPC deployment',
      'SOC 2 compliance',
      'Custom model fine-tuning',
      '99.99% uptime SLA',
      'Dedicated account manager',
      '24/7 engineering support',
    ],
  },
];

const TeamEnterprisePlans = () => {
  const [fromMaxPlan, setFromMaxPlan] = useState(false);
  const [fromProPlan, setFromProPlan] = useState(false);
  // Initialize with static plans immediately — no loading flash
  const [plans, setPlans] = useState<SubscriptionPlan[]>(STATIC_PLANS);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const from = urlParams.get('from');
    if (from === 'max') {
      setFromMaxPlan(true);
      setFromProPlan(false);
    } else if (from === 'pro') {
      setFromProPlan(true);
      setFromMaxPlan(false);
    }
    window.history.replaceState({}, '', window.location.pathname);
  }, []);

  useEffect(() => {
    fetch(PLANS_API)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((d) => {
        const teamEnterprise = (d.plans || []).filter(
          (p: SubscriptionPlan) => p.category === "team" || p.category === "enterprise"
        );
        if (teamEnterprise.length) setPlans(teamEnterprise);
      })
      .catch(() => {
        // keep STATIC_PLANS already set
      });
  }, []);

  function formatPrice(plan: SubscriptionPlan) {
    if (plan.contactSales || plan.priceMonthly == null) return "Contact Sales";
    if (plan.priceMonthly === 0) return "Free";
    return `$${plan.priceMonthly.toLocaleString()}`;
  }

  function billingPeriod(plan: SubscriptionPlan) {
    if (plan.contactSales || plan.priceMonthly == null || plan.priceMonthly === 0) return undefined;
    return "/mo per seat";
  }

  const iconFallback = <Building2 className="h-6 w-6 text-muted-foreground" />;

  return (
    <div className="max-w-7xl mx-auto mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {plans.map((plan) => (
          <PricingPlan
            key={plan.id}
            name={plan.name}
            icon={PLAN_ICONS[plan.id] || iconFallback}
            price={formatPrice(plan)}
            billingPeriod={billingPeriod(plan)}
            description={plan.description}
            features={plan.features}
            popular={plan.popular || plan.category === "team"}
            showDetails={plan.category === "team"}
            contactSalesUrl={plan.contactSales ? "https://cal.com/hanzo" : undefined}
          />
        ))}
      </div>

      <TeamPlanDetails fromMaxPlan={fromMaxPlan} fromProPlan={fromProPlan} />
    </div>
  );
};

export default TeamEnterprisePlans;
