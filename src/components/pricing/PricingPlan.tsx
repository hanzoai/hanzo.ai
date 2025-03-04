
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingPlanProps {
  name: string;
  icon: React.ReactNode;
  price: string;
  billingPeriod?: string;
  description: string;
  features: string[];
  popular?: boolean;
  customColor?: string;
  showDetails?: boolean;
}

const PricingPlan = ({
  name,
  icon,
  price,
  billingPeriod,
  description,
  features,
  popular = false,
  customColor,
  showDetails = false
}: PricingPlanProps) => {
  // Determine border and background color based on popular status or custom color
  const borderColor = customColor 
    ? `border-${customColor}-800` 
    : popular 
      ? "border-purple-500" 
      : "border-gray-800";
  
  const bgColor = customColor 
    ? `bg-${customColor}-900/10` 
    : popular 
      ? "bg-purple-500/10" 
      : "bg-black/50";

  // Button color
  const buttonClass = customColor 
    ? `bg-${customColor}-500 hover:bg-${customColor}-600 text-white` 
    : popular 
      ? "bg-purple-500 hover:bg-purple-600" 
      : "bg-white text-black hover:bg-gray-100";

  // Check icon color
  const checkColor = customColor 
    ? `text-${customColor}-500` 
    : "text-purple-500";

  return (
    <div 
      className={`relative rounded-2xl border ${borderColor} ${bgColor} p-8 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/20`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Most Popular
          </div>
        </div>
      )}

      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
      
      <div className="mb-6">
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-4xl font-bold">{price}</span>
          {billingPeriod && (
            <span className="text-gray-400">{billingPeriod}</span>
          )}
        </div>
        <p className="text-gray-400">{description}</p>
      </div>

      <Button
        className={`w-full mb-8 ${buttonClass}`}
      >
        {name === "Enterprise" ? "Contact Sales" : "Get Started"}
      </Button>

      <ul className="space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className={`h-5 w-5 ${checkColor} mt-0.5 flex-shrink-0`} />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingPlan;
