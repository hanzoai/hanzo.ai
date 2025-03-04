
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import TeamPlanDetails from "./TeamPlanDetails";

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
  // Use monochrome design
  const borderColor = popular 
    ? "border-gray-700" 
    : "border-gray-800";
  
  const bgColor = popular 
    ? "bg-gray-900/30" 
    : "bg-black/50";

  // Button color - monochrome
  const buttonClass = popular 
    ? "bg-white hover:bg-gray-200 text-black" 
    : "bg-gray-800 hover:bg-gray-700 text-white";

  const renderButton = () => {
    if (name === "Team" && showDetails) {
      return (
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              className={`w-full mb-8 ${buttonClass}`}
            >
              Get Started
            </Button>
          </DrawerTrigger>
          <TeamPlanDetails />
        </Drawer>
      );
    } else {
      return (
        <Button
          className={`w-full mb-8 ${buttonClass}`}
        >
          Get Started
        </Button>
      );
    }
  };

  return (
    <div 
      className={`relative rounded-2xl border ${borderColor} ${bgColor} p-8 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/20`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
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

      {renderButton()}

      <ul className="space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingPlan;
