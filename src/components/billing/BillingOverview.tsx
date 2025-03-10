
import React from "react";
import { Button } from "@/components/ui/button";
import { Gift, CreditCard, Package } from "lucide-react";
import { motion } from "framer-motion";
import { createAnimationVariant, curves } from "@/components/ui/animation-variants";

const cardAnimation = createAnimationVariant("fadeInBlur", {
  duration: 0.4,
  curve: curves.snappy,
  distance: 15
});

const BillingOverview = () => {
  return (
    <div className="space-y-8">
      <motion.div 
        variants={cardAnimation}
        className="p-6 rounded-xl border border-indigo-500/30 bg-indigo-900/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <Gift className="h-5 w-5 text-indigo-400" />
          <h3 className="text-xl font-medium">Trial Plan</h3>
        </div>
        
        <p className="text-gray-300 mb-6">
          Your plan includes a one-time credit grant of <span className="font-bold">$5.00</span>.
          All deployments will be shut down when you run out of credits.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-black/30 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-1">Memory per container</div>
            <div className="font-semibold">512 MB</div>
          </div>
          <div className="bg-black/30 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-1">CPU per container</div>
            <div className="font-semibold">2 vCPU</div>
          </div>
          <div className="bg-black/30 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-1">Shared disk</div>
            <div className="font-semibold">1 GB</div>
          </div>
        </div>
        
        <Button 
          className="bg-purple-600 hover:bg-purple-700 text-white border-none"
        >
          Unlock Hobby Plan
        </Button>
      </motion.div>
      
      <motion.div 
        variants={cardAnimation}
        className="p-6 rounded-xl border border-gray-800 bg-gray-900/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <CreditCard className="h-5 w-5 text-gray-400" />
          <h3 className="text-xl font-medium">Credits Available</h3>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="text-3xl font-bold mb-1">$5.00</div>
            <p className="text-gray-400">Current usage: $0.04</p>
          </div>
          
          <Button className="bg-white hover:bg-gray-200 text-black">
            Purchase Credits
          </Button>
        </div>
      </motion.div>
      
      <motion.div 
        variants={cardAnimation}
        className="p-6 rounded-xl border border-gray-800 bg-gray-900/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <Package className="h-5 w-5 text-gray-400" />
          <h3 className="text-xl font-medium">Upgrade Options</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/30 rounded-lg p-5 border border-gray-800 hover:border-gray-700 transition-colors">
            <h4 className="text-lg font-medium mb-1">Hobby</h4>
            <div className="text-2xl font-bold mb-3">$5<span className="text-sm text-gray-400">/mo</span></div>
            <ul className="space-y-2 mb-4">
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>8 GB RAM / 8 vCPU per service</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Single developer workspace</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Community support</span>
              </li>
            </ul>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white border-none">
              Deploy with Hobby
            </Button>
          </div>
          
          <div className="bg-black/30 rounded-lg p-5 border border-gray-800 hover:border-gray-700 transition-colors">
            <h4 className="text-lg font-medium mb-1">Pro</h4>
            <div className="text-2xl font-bold mb-3">$20<span className="text-sm text-gray-400">/mo</span></div>
            <ul className="space-y-2 mb-4">
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>32 GB RAM / 32 vCPU per service</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Unlimited team seats included</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Business day support</span>
              </li>
            </ul>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white border-none">
              Deploy with Pro
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BillingOverview;
