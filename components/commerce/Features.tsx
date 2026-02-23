'use client'


import React from "react";
import { 
  ShoppingCart, CreditCard, Package, BarChart, 
  Tags, Gift, Truck, Globe, Shield, Database
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-white/20 transition-colors duration-300">
      <div className="bg-white/5 p-3 rounded-lg w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neutral-400">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <ShoppingCart className="h-6 w-6 text-white/60" />,
      title: "Headless Shopping Carts",
      description: "Flexible cart management with customizable checkout flows for any frontend."
    },
    {
      icon: <Package className="h-6 w-6 text-white/60" />,
      title: "Product Management",
      description: "Powerful catalog management with variants, collections, and custom attributes."
    },
    {
      icon: <CreditCard className="h-6 w-6 text-white/60" />,
      title: "Payment Processing",
      description: "Seamless integration with multiple payment gateways and subscription billing."
    },
    {
      icon: <Gift className="h-6 w-6 text-white/60" />,
      title: "Promotions & Discounts",
      description: "Create complex discount rules, coupons, and loyalty programs."
    },
    {
      icon: <Tags className="h-6 w-6 text-white/60" />,
      title: "Dynamic Pricing",
      description: "Implement sophisticated pricing strategies with targeted rules and segmentation."
    },
    {
      icon: <BarChart className="h-6 w-6 text-white/60" />,
      title: "Analytics & Reporting",
      description: "Real-time insights into sales, inventory, customer behavior, and more."
    },
    {
      icon: <Truck className="h-6 w-6 text-white/60" />,
      title: "Order Management",
      description: "Complete visibility and control over the entire order lifecycle."
    },
    {
      icon: <Globe className="h-6 w-6 text-white/60" />,
      title: "Multi-channel Selling",
      description: "Sell across websites, mobile apps, social media, and marketplaces."
    },
    {
      icon: <Shield className="h-6 w-6 text-white/60" />,
      title: "Fraud Protection",
      description: "Advanced security features to protect your business and customers."
    },
    {
      icon: <Database className="h-6 w-6 text-white/60" />,
      title: "Scalable Infrastructure",
      description: "Built for high-volume transactions with enterprise-grade reliability."
    }
  ];

  return (
    <section className="py-16 bg-[var(--black)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Powerful E-commerce Features</h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
            Everything you need to build exceptional shopping experiences, all through a simple API-first approach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
