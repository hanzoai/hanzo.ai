'use client'


import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@hanzo/ui";
import { ArrowLeft, Check, CreditCard } from 'lucide-react';

import { toast } from 'sonner';
import { useBilling } from '@/contexts/BillingContext';
import AnimatedSection, { AnimatedHeading } from '@/components/ui/animated-section';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@hanzo/ui";

const BillingPlans = () => {
  const router = useRouter();
  const { checkout, billingInfo } = useBilling();
  const [isUpgrading, setIsUpgrading] = useState(false);

  const plans = [
    {
      id: 'dev',
      name: 'Developer',
      price: 20,
      interval: 'month',
      description: 'For hobbyists and personal projects',
      features: [
        'All core Hanzo platform features',
        'Unlimited private projects',
        'Unlimited deployments',
        'Self-hosted on your infrastructure',
        '1 AI Unit',
        '1 Compute Unit (Server)'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Professional',
      price: 49,
      interval: 'month',
      description: 'For professionals and small teams',
      features: [
        'Everything in Developer plan',
        'Extended messaging and data analysis',
        'Full access to Hanzo App, Chat, Dev',
        'Integration with Hanzo Models',
        'Image generation',
        'Up to 10 AI Units (Adjustable)',
        'Up to 10 Compute Units (Adjustable)'
      ],
      popular: true
    },
    {
      id: 'team',
      name: 'Team',
      price: 99,
      interval: 'month',
      description: 'For growing teams with advanced needs',
      features: [
        'Everything in Professional plan',
        'Higher message limits',
        'Advanced collaborative workspace',
        'Secure workspace with admin console',
        'Unified team billing',
        'Team data excluded from training',
        'Up to 10 AI Units per user (Adjustable)'
      ],
      popular: false
    }
  ];

  const handleUpgrade = async (planId: string) => {
    setIsUpgrading(true);
    
    // Find the plan
    const plan = plans.find(p => p.id === planId);
    if (!plan) {
      toast.error('Invalid plan selected');
      setIsUpgrading(false);
      return;
    }
    
    // Simulate checkout process
    const success = await checkout(planId as any);
    
    if (success) {
      toast.success(`Successfully upgraded to ${plan.name} plan!`);
      router.push('/account/billing');
    }
    
    setIsUpgrading(false);
  };

  return (
    <AnimatedSection>
      <div className="space-y-6">
        <div className="flex items-center mb-4">
          <Button variant="ghost" onClick={() => router.push('/account/billing')} className="mr-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Billing
          </Button>
        </div>
        
        <AnimatedHeading>
          <h2 className="text-2xl font-bold mb-6">Choose a Plan</h2>
        </AnimatedHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map(plan => (
            <Card 
              key={plan.id} 
              className={`bg-gray-900/30 border ${
                plan.popular ? 'border-white' : 'border-gray-800'
              } relative`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-[var(--white)] px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription className="text-neutral-400">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-neutral-400">/{plan.interval}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-white/70 mr-2 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.popular ? 'bg-white hover:bg-white/20' : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => handleUpgrade(plan.id)}
                  disabled={isUpgrading}
                >
                  {billingInfo.plan === plan.id ? 'Current Plan' : 'Upgrade'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-4">Enterprise Plan</h3>
          <p className="text-neutral-400 mb-4">
            Need a custom solution for your organization? Our Enterprise plan offers custom pricing, 
            dedicated support, and tailored features for your specific needs.
          </p>
          <Button variant="outline">Contact Sales</Button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default BillingPlans;
