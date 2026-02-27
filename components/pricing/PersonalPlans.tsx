'use client'

import React, { useEffect, useState } from "react";
import PricingPlan from "./PricingPlan";
import { Github, Code, Zap, Rocket } from "lucide-react";
import { Loader2 } from "lucide-react";

const PLANS_API = "https://pricing.hanzo.ai/v1/plans";

interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  priceMonthly: number;
  priceAnnual?: number;
  category: string;
  popular?: boolean;
  features: string[];
  limits?: Record<string, number>;
  payouts?: { idleResalePercent: number; description: string };
}

const PLAN_ICONS: Record<string, React.ReactNode> = {
  developer: <Github className="h-6 w-6 text-muted-foreground" />,
  pro: <Code className="h-6 w-6 text-muted-foreground" />,
  max: <Zap className="h-6 w-6 text-muted-foreground" />,
};

const PersonalPlans = () => {
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(PLANS_API)
      .then((r) => r.json())
      .then((d) => {
        const personal = (d.plans || []).filter(
          (p: SubscriptionPlan) => p.category === "personal"
        );
        setPlans(personal);
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
    if (plan.priceMonthly === 0) return "Free";
    return `$${plan.priceMonthly}`;
  }

  function billingPeriod(plan: SubscriptionPlan) {
    if (plan.priceMonthly === 0) return " forever";
    return "/month";
  }

  const iconFallback = <Rocket className="h-6 w-6 text-muted-foreground" />;

  return (
    <div className="max-w-7xl mx-auto mb-16">
      <div className={`grid grid-cols-1 md:grid-cols-${Math.min(plans.length, 3)} gap-8 mb-8`}>
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
