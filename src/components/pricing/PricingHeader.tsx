
import React from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const PricingHeader = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-8">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6">
        Pricing
      </h1>
      
      <Alert variant="destructive" className="bg-gray-900/20 border-gray-800 text-white mb-8 mx-auto max-w-2xl">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Something went wrong</AlertTitle>
        <AlertDescription>
          We're experiencing some technical difficulties with our pricing system. Please try again later or contact support.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default PricingHeader;
