'use client'

import React from "react";
import PricingPlan from "@/components/pricing/PricingPlan";
import { Github, PieChart, Building2, Rocket } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-gray-900/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Free and open source forever. Self-host or use our managed cloud.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <PricingPlan
            name="Community"
            icon={<Github className="h-6 w-6 text-muted-foreground" />}
            price="Free"
            description="Self-host and own your data. Full source code on GitHub."
            githubLink
            features={[
              'Unlimited stakeholders',
              'Share classes & options',
              'SAFEs & convertible notes',
              'Vesting schedules',
              'Basic reporting',
              'Community support',
            ]}
          />
          <PricingPlan
            name="Startup"
            icon={<PieChart className="h-6 w-6 text-muted-foreground" />}
            price="$50"
            billingPeriod="/mo"
            description="For early-stage startups managing their first cap table."
            features={[
              'Everything in Community',
              'Managed cloud hosting',
              'E-signing for grants',
              'Waterfall analysis',
              '409A valuation tracking',
              'Email support',
              'Up to 25 stakeholders',
            ]}
          />
          <PricingPlan
            name="Growth"
            icon={<Building2 className="h-6 w-6 text-muted-foreground" />}
            price="$150"
            billingPeriod="/mo"
            popular
            description="For growing companies with complex equity structures."
            features={[
              'Everything in Startup',
              'Unlimited stakeholders',
              'Advanced equity plans',
              'Board consent workflows',
              'Data room integration',
              'Custom branding',
              'SSO / SAML',
              'Priority support',
            ]}
          />
          <PricingPlan
            name="Enterprise"
            icon={<Rocket className="h-6 w-6 text-muted-foreground" />}
            price="Custom"
            description="For companies with advanced compliance and security needs."
            contactSalesUrl="https://hanzo.ai/contact"
            features={[
              'Everything in Growth',
              'Dedicated infrastructure',
              'Custom SLA',
              'On-premise deployment',
              'Compliance certifications',
              'Dedicated account manager',
              '24/7 phone support',
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
