'use client'

import React from "react";
import PricingPlan from "@/components/pricing/PricingPlan";
import { Github, FolderLock, Building2, Rocket } from "lucide-react";

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
            name="Free"
            icon={<Github className="h-6 w-6 text-muted-foreground" />}
            price="$0"
            billingPeriod="/mo"
            description="Get started with document sharing and analytics."
            features={[
              '1 team member',
              '50 links',
              '50 documents',
              'Unlimited visitors',
              'Page-by-page analytics',
              'Community support',
            ]}
          />
          <PricingPlan
            name="Pro"
            icon={<FolderLock className="h-6 w-6 text-muted-foreground" />}
            price="$25"
            billingPeriod="/mo"
            description="For professionals who need branding and more capacity."
            features={[
              'Unlimited links',
              '100 documents',
              'Large file uploads',
              'Custom branding',
              'Video support',
              'Folder organization',
            ]}
          />
          <PricingPlan
            name="Business"
            icon={<Building2 className="h-6 w-6 text-muted-foreground" />}
            price="$59"
            billingPeriod="/mo"
            popular
            description="For teams that need custom domains and advanced access controls."
            features={[
              'Everything in Pro',
              '3 team members',
              '1,000 documents',
              'Custom domain',
              'Email verification',
              'Allow/block lists',
              'Screenshot protection',
              'Webhooks',
            ]}
          />
          <PricingPlan
            name="Data Rooms"
            icon={<Rocket className="h-6 w-6 text-muted-foreground" />}
            price="$99"
            billingPeriod="/mo"
            description="Full data room capabilities for fundraising and due diligence."
            features={[
              'Everything in Business',
              'Unlimited data rooms',
              'Data room analytics',
              'NDA agreements',
              'Dynamic watermark',
              'Granular permissions',
              'Custom data room domain',
              '24/7 email support',
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
