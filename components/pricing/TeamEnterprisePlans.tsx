'use client'

import React, { useEffect, useState } from "react";
import PricingPlan from "./PricingPlan";
import { Users, Shield, Building2 } from "lucide-react";
import { Loader2 } from "lucide-react";
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
};

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
      .then((r) => r.json())
      .then((d) => {
        const teamEnterprise = (d.plans || []).filter(
          (p: SubscriptionPlan) => p.category === "team" || p.category === "enterprise"
        );
        setPlans(teamEnterprise);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch plans:", err);
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
    return (
      <div className="text-center py-24 text-muted-foreground">Failed to load plans.</div>
    );
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
