
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingTier = ({ title, price, description, features, highlight = false, cta = "Get Started" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`border rounded-xl p-8 h-full ${
        highlight
          ? "border-[#fd4444] bg-gradient-to-b from-[#fd4444]/10 to-black"
          : "border-gray-800 bg-gray-900/20"
      }`}
    >
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <div className="mb-4">
        <div className="text-3xl font-bold">{price}</div>
        <p className="text-neutral-400">{description}</p>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
            <span className="text-neutral-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button
        className={`w-full ${
          highlight
            ? "bg-[#fd4444] hover:bg-[#e03e3e] text-[var(--white)]"
            : "bg-gray-800 text-[var(--white)] hover:bg-gray-700"
        }`}
      >
        {cta}
      </Button>
    </motion.div>
  );
};

const HanzoAppPricing = () => {
  const starterFeatures = [
    "10,000 Predictions / month",
    "then $0.001 per prediction",
    "1GB Storage",
    "Database Backup",
    "1 Week Log Retention",
    "Evaluations & Metrics",
    "Custom Chatbot Branding",
    "Community Support"
  ];
  
  const proFeatures = [
    "Everything in Starter",
    "50,000 Predictions / month",
    "then $0.001 per prediction",
    "10GB Storage",
    "Unlimited Workspaces",
    "Admin Roles & Permissions",
    "3 Months Log Retention",
    "Priority Support"
  ];
  
  const enterpriseFeatures = [
    "On-Premise Deployment",
    "Air-gapped Environments",
    "SSO & SAML",
    "LDAP & RBAC",
    "Versioning",
    "Audit Logs",
    "99.99% Uptime SLA"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--black)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Pricing</h2>
          <p className="text-xl text-neutral-300">
            Free 14 day trial. No credit card required.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PricingTier 
            title="Starter"
            price="$35/month"
            description="For individuals & small teams"
            features={starterFeatures}
          />
          
          <PricingTier 
            title="Pro"
            price="$65/month"
            description="For medium-sized businesses"
            features={proFeatures}
            highlight={true}
          />
          
          <PricingTier 
            title="Enterprise"
            price="Contact Us"
            description="For large organizations"
            features={enterpriseFeatures}
            cta="Contact Sales"
          />
        </div>
      </div>
    </section>
  );
};

export default HanzoAppPricing;
