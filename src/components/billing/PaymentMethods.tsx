
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus, CreditCard, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { createAnimationVariant, curves } from "@/components/ui/animation-variants";

const cardAnimation = createAnimationVariant("fadeInBlur", {
  duration: 0.4,
  curve: curves.snappy,
  distance: 15
});

const PaymentMethods = () => {
  // Mock data for payment methods
  const paymentMethods = [
    {
      id: 1,
      type: "Visa",
      last4: "4242",
      expiry: "12/24",
      isDefault: true
    }
  ];

  return (
    <div className="space-y-8">
      <motion.div 
        variants={cardAnimation}
        className="p-6 rounded-xl border border-gray-800 bg-gray-900/20"
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <CreditCard className="h-5 w-5 text-gray-400" />
            <h3 className="text-xl font-medium">Payment Methods</h3>
          </div>
          
          <Button className="bg-white hover:bg-gray-200 text-black">
            <Plus className="h-4 w-4 mr-2" />
            Add Payment Method
          </Button>
        </div>
        
        {paymentMethods.length > 0 ? (
          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <div 
                key={method.id}
                className="flex justify-between items-center p-4 bg-black/30 rounded-lg border border-gray-800"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gray-800 p-2 rounded">
                    <CreditCard className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">
                      {method.type} ending in {method.last4}
                      {method.isDefault && (
                        <span className="ml-2 text-xs bg-gray-700 text-white px-2 py-0.5 rounded-full">
                          Default
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-400">Expires {method.expiry}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-gray-400 hover:text-white hover:bg-gray-800"
                  >
                    Edit
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-red-400 hover:text-red-300 hover:bg-red-900/30"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-400">
            No payment methods found. Add a payment method to get started.
          </div>
        )}
      </motion.div>
      
      <motion.div 
        variants={cardAnimation}
        className="p-6 rounded-xl border border-gray-800 bg-gray-900/20"
      >
        <h3 className="text-xl font-medium mb-4">Billing Address</h3>
        
        <div className="bg-black/30 p-4 rounded-lg border border-gray-800 mb-4">
          <p className="text-gray-400">
            No billing address has been set. Adding a billing address helps with 
            tax compliance and invoice generation.
          </p>
        </div>
        
        <Button className="bg-white hover:bg-gray-200 text-black">
          Add Billing Address
        </Button>
      </motion.div>
    </div>
  );
};

export default PaymentMethods;
