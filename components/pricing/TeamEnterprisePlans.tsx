'use client'

import React, { useEffect, useState } from "react";
import PricingPlan from "./PricingPlan";
import { Users, Shield, Building2 } from "lucide-react";
import { Loader2 } from "lucide-react";
import TeamPlanDetails from "./TeamPlanDetails";

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
  team: <Users className="h-6 w-6 text-muted-foreground" />,
  enterprise: <Shield className="h-6 w-6 text-muted-foreground" />,
};

const STATIC_PLANS: SubscriptionPlan[] = [
  {
    id: 'team',
    name: 'Team',
    description: 'For teams building production AI together.',
    priceMonthly: 500,
    priceAnnual: 5000,
    category: 'team',
    popular: true,
    features: [
      '$500 credits/month pooled',
      'All Zen frontier models',
      'Up to 20 seats',
      'Shared usage dashboard',
      'SSO via Hanzo Identity',
      'Priority support SLA',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Private cloud AI for the most demanding organizations.',
    priceMonthly: null,
    category: 'enterprise',
    contactSales: true,
    features: [
      'Custom credit allocation',
      'Dedicated inference capacity',
      'VPC / on-premise deployment',
      'Air-gapped option',
      'SAML 2.0 / SCIM',
      '99.99% uptime SLA',
      'Dedicated support engineer',
    ],
  },
];

const TeamEnterprisePlans = () => {
  const [fromMaxPlan, setFromMaxPlan] = useState(false);
  const [fromProPlan, setFromProPlan] = useState(false);
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [loading, setLoading] = useState(true);

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
        setPlans(teamEnterprise.length ? teamEnterprise : STATIC_PLANS);
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
    return `$${plan.priceMonthly.toLocaleString()}`;
  }

  function billingPeriod(plan: SubscriptionPlan) {
    if (plan.contactSales || plan.priceMonthly == null || plan.priceMonthly === 0) return undefined;
    return "/month";
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
          />
        ))}
      </div>

      <TeamPlanDetails fromMaxPlan={fromMaxPlan} fromProPlan={fromProPlan} />
    </div>
  );
};

export default TeamEnterprisePlans;
