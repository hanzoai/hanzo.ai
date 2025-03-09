
import React from "react";
import ChromeText from "@/components/ui/chrome-text";

const PricingHeader = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      <ChromeText as="h1" className="text-4xl sm:text-5xl font-bold mb-6">
        Pricing
      </ChromeText>
    </div>
  );
};

export default PricingHeader;
