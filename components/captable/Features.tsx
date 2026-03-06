'use client'

import React from "react";
import {
  PieChart, Coins, Target, Banknote,
  FileText, PenLine, Users, TrendingUp, Shield, Fingerprint
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-border transition-colors duration-300">
      <div className="bg-primary/5 p-3 rounded-lg w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <PieChart className="h-6 w-6 text-foreground/60" />,
      title: "Cap Table Management",
      description: "Real-time ownership tracking with fully-diluted calculations. Model dilution scenarios across fundraising rounds."
    },
    {
      icon: <Coins className="h-6 w-6 text-foreground/60" />,
      title: "Share Classes",
      description: "Common, preferred, and custom share classes. Track authorized shares, par value, and voting rights."
    },
    {
      icon: <Target className="h-6 w-6 text-foreground/60" />,
      title: "Stock Options",
      description: "ISO and NSO option grants with cliff, linear, and custom vesting schedules. 409A valuation tracking."
    },
    {
      icon: <Banknote className="h-6 w-6 text-foreground/60" />,
      title: "SAFEs & Convertible Notes",
      description: "Y Combinator SAFE management with conversion modeling. Track notes with interest, caps, and discounts."
    },
    {
      icon: <FileText className="h-6 w-6 text-foreground/60" />,
      title: "Equity Plans",
      description: "Option pools and equity incentive plans. Manage board-approved pools with real-time utilization tracking."
    },
    {
      icon: <PenLine className="h-6 w-6 text-foreground/60" />,
      title: "Built-in E-Signing",
      description: "Integrated document signing for equity grants, board consents, and stock purchase agreements."
    },
    {
      icon: <Users className="h-6 w-6 text-foreground/60" />,
      title: "Stakeholder Management",
      description: "Manage founders, employees, investors, and advisors. Track vesting schedules and exercise windows."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-foreground/60" />,
      title: "Waterfall Analysis",
      description: "Model liquidation scenarios to understand payout distributions at various exit valuations."
    },
    {
      icon: <Shield className="h-6 w-6 text-foreground/60" />,
      title: "Audit Trail",
      description: "Complete audit history for every transaction. SOC 2 ready compliance and data integrity."
    },
    {
      icon: <Fingerprint className="h-6 w-6 text-foreground/60" />,
      title: "SSO Authentication",
      description: "Passkeys, Google SSO, and Hanzo IAM single sign-on for secure access."
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Complete Equity Management</h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Everything you need to manage your cap table, from incorporation to IPO. No spreadsheets required.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
