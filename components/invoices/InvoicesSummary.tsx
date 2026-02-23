'use client'


import React from "react";
import { Button } from "@hanzo/ui";
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
          <CreditCard className="h-5 w-5 text-muted-foreground" />
          <h3 className="text-xl font-medium">Active Subscription</h3>
        </div>
        
        <div className="mb-6">
          <div className="text-3xl font-bold mb-1">Trial Plan</div>
          <p className="text-muted-foreground">Free credit grant of $5.00</p>
        </div>
        
        <Button 
          className="bg-primary hover:bg-[#cccccc] text-[var(--white)] w-full"
        >
          View Plan Details
        </Button>
      </motion.div>
      
      <motion.div 
        variants={cardAnimation}
        className="p-6 rounded-xl border border-gray-800 bg-gray-900/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <Receipt className="h-5 w-5 text-muted-foreground" />
          <h3 className="text-xl font-medium">Payment Summary</h3>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Current Usage</span>
            <span>$0.04</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Next Invoice</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between font-medium">
            <span>Credits Available</span>
            <span>$5.00</span>
          </div>
        </div>
        
        <Button className="bg-[var(--white)] hover:bg-gray-200 text-primary-foreground w-full">
          Purchase Credits
        </Button>
      </motion.div>
      
      <motion.div 
        variants={cardAnimation}
        className="p-6 rounded-xl border border-gray-800 bg-gray-900/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <Clock className="h-5 w-5 text-muted-foreground" />
          <h3 className="text-xl font-medium">Upcoming Charges</h3>
        </div>
        
        <div className="bg-[var(--black)]/30 p-4 rounded-lg flex items-center gap-3 mb-6">
          <AlertCircle className="h-5 w-5 text-foreground" />
          <p className="text-foreground/80">No upcoming charges. You're on a trial plan.</p>
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
