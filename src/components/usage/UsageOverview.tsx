
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { createAnimationVariant, curves } from "@/components/ui/animation-variants";

interface UsageOverviewProps {
  dateRange: {
    start: string;
    end: string;
  };
  currentUsage: string;
  discounts: string;
  creditsUsed: string;
  estimatedCost: string;
  creditsAvailable: string;
  creditsRequired: string;
}

const cardAnimation = createAnimationVariant("fadeInBlur", {
  duration: 0.4,
  curve: curves.snappy,
  distance: 15
});

const UsageOverview = ({
  dateRange,
  currentUsage,
  discounts,
  creditsUsed,
  estimatedCost,
  creditsAvailable,
  creditsRequired
}: UsageOverviewProps) => {
  return (
    <motion.div 
      variants={cardAnimation}
      className="rounded-xl border border-gray-800 bg-gray-900/20 overflow-hidden"
    >
      <div className="p-6 border-b border-gray-800">
        <h2 className="text-xl font-semibold mb-1">
          {dateRange.start} to {dateRange.end} Credit Usage
        </h2>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Current Usage</span>
              <span>{currentUsage}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Discounts</span>
              <span>{discounts}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Credits Used</span>
              <span>{creditsUsed}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Estimated Month's Cost</span>
              <span>{estimatedCost}</span>
            </div>
          </div>
          
          <div className="bg-gray-900/30 rounded-xl p-6 flex flex-col items-center justify-center text-center">
            <div className="mb-2">
              <div className="text-sm text-gray-400">Credits Available</div>
              <div className="text-3xl font-bold">${creditsAvailable}</div>
            </div>
            
            <div className="mb-6">
              <div className="text-sm text-green-500">Est Credits Required</div>
              <div className="text-3xl font-bold text-green-500">${creditsRequired}</div>
            </div>
            
            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white w-full"
            >
              Purchase Credits
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UsageOverview;
