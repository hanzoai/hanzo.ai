
import React from "react";
import { Button } from "@/components/ui/button";
import { CreditCard, Receipt, Clock, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { createAnimationVariant, curves } from "@/components/ui/animation-variants";

const cardAnimation = createAnimationVariant("fadeInBlur", {
  duration: 0.4,
  curve: curves.snappy,
  distance: 15
});

const InvoicesSummary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <motion.div 
        variants={cardAnimation}
        className="p-6 rounded-xl border border-gray-800 bg-gray-900/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <CreditCard className="h-5 w-5 text-gray-400" />
          <h3 className="text-xl font-medium">Active Subscription</h3>
        </div>
        
        <div className="mb-6">
          <div className="text-3xl font-bold mb-1">Trial Plan</div>
          <p className="text-gray-400">Free credit grant of $5.00</p>
        </div>
        
        <Button 
          className="bg-purple-600 hover:bg-purple-700 text-white w-full"
        >
          View Plan Details
        </Button>
      </motion.div>
      
      <motion.div 
        variants={cardAnimation}
        className="p-6 rounded-xl border border-gray-800 bg-gray-900/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <Receipt className="h-5 w-5 text-gray-400" />
          <h3 className="text-xl font-medium">Payment Summary</h3>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-gray-400">Current Usage</span>
            <span>$0.04</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Next Invoice</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between font-medium">
            <span>Credits Available</span>
            <span>$5.00</span>
          </div>
        </div>
        
        <Button className="bg-white hover:bg-gray-200 text-black w-full">
          Purchase Credits
        </Button>
      </motion.div>
      
      <motion.div 
        variants={cardAnimation}
        className="p-6 rounded-xl border border-gray-800 bg-gray-900/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <Clock className="h-5 w-5 text-gray-400" />
          <h3 className="text-xl font-medium">Upcoming Charges</h3>
        </div>
        
        <div className="bg-black/30 p-4 rounded-lg flex items-center gap-3 mb-6">
          <AlertCircle className="h-5 w-5 text-blue-400" />
          <p className="text-gray-300">No upcoming charges. You're on a trial plan.</p>
        </div>
        
        <Button 
          variant="outline" 
          className="border-gray-700 w-full"
        >
          View Pricing
        </Button>
      </motion.div>
    </div>
  );
};

export default InvoicesSummary;
