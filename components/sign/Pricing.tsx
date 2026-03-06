'use client'

import React from "react";
import PricingPlan from "@/components/pricing/PricingPlan";
import { Github, PenLine, Building2, Rocket } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-gray-900/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Start free and scale as you grow. Self-host for free forever or let us handle the infrastructure.
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
              'Unlimited documents',
              'All field types',
              'Templates',
              'API access',
              'Email notifications',
              'Community support',
            ]}
          />
          <PricingPlan
            name="Starter"
            icon={<PenLine className="h-6 w-6 text-muted-foreground" />}
            price="$30"
            billingPeriod="/mo"
            description="For individuals and small teams getting started with e-signing."
            features={[
              'Everything in Community',
              'Managed cloud hosting',
              'Custom branding',
              'Priority email support',
              'Signing certificates',
              '5 team members',
            ]}
          />
          <PricingPlan
            name="Business"
            icon={<Building2 className="h-6 w-6 text-muted-foreground" />}
            price="$50"
            billingPeriod="/mo"
            popular
            description="For growing teams that need advanced features and integrations."
            features={[
              'Everything in Starter',
              'Unlimited team members',
              'Custom domain',
              'Advanced templates',
              'Webhooks',
              'SAML SSO',
              'Audit logs',
              'Priority support',
            ]}
          />
          <PricingPlan
            name="Enterprise"
            icon={<Rocket className="h-6 w-6 text-muted-foreground" />}
            price="Custom"
            description="For organizations with advanced security and compliance needs."
            contactSalesUrl="https://hanzo.ai/contact"
            features={[
              'Everything in Business',
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
