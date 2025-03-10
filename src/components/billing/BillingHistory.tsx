
import React from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText, Info, Filter } from "lucide-react";
import { motion } from "framer-motion";
import { createAnimationVariant, curves } from "@/components/ui/animation-variants";
import { useBilling } from "@/contexts/BillingContext";

const cardAnimation = createAnimationVariant("fadeInBlur", {
  duration: 0.4,
  curve: curves.snappy,
  distance: 15
});

const BillingHistory = () => {
  const { billingInfo } = useBilling();
  
  // Mock data for invoices - in real app would come from Stripe API
  const invoices = billingInfo.hasActiveSubscription ? [
    {
      id: "INV-001",
      date: "June 1, 2023",
      amount: billingInfo.plan === 'dev' ? "$5.00" : "$20.00",
      status: "Paid"
    },
    {
      id: "INV-002",
      date: "July 1, 2023",
      amount: billingInfo.plan === 'dev' ? "$5.00" : "$20.00",
      status: "Paid"
    }
  ] : [];

  return (
    <div className="space-y-8">
      <motion.div 
        variants={cardAnimation}
        className="p-6 rounded-xl border border-gray-800 bg-gray-900/20"
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-gray-400" />
            <h3 className="text-xl font-medium">Invoice History</h3>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="border-gray-700">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button 
              className="bg-white hover:bg-gray-200 text-black"
              disabled={invoices.length === 0}
            >
              <Download className="h-4 w-4 mr-2" />
              Export All
            </Button>
          </div>
        </div>
        
        {invoices.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 font-medium text-gray-400">Invoice</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-400">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-400">Amount</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-400">Status</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="border-b border-gray-800">
                    <td className="py-4 px-4">{invoice.id}</td>
                    <td className="py-4 px-4">{invoice.date}</td>
                    <td className="py-4 px-4">{invoice.amount}</td>
                    <td className="py-4 px-4">
                      <span className="inline-block bg-green-900/30 text-green-400 px-2 py-1 rounded-full text-xs">
                        {invoice.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-gray-400 hover:text-white hover:bg-gray-800"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-400 bg-black/30 rounded-lg">
            <FileText className="h-8 w-8 mx-auto mb-3 opacity-50" />
            <p>
              {billingInfo.isInTrial 
                ? "You're on a trial plan. Billing history will appear once you subscribe." 
                : "No billing history found."}
            </p>
          </div>
        )}
      </motion.div>
      
      <motion.div 
        variants={cardAnimation}
        className="p-6 rounded-xl border border-gray-800 bg-gray-900/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <Info className="h-5 w-5 text-blue-400" />
          <h3 className="text-xl font-medium">Invoice Settings</h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-black/30 rounded-lg border border-gray-800">
            <div>
              <div className="font-medium">Email Receipts</div>
              <div className="text-sm text-gray-400">
                Receive invoice copies to your email
              </div>
            </div>
            <Button variant="outline" className="border-gray-700">
              Configure
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-black/30 rounded-lg border border-gray-800">
            <div>
              <div className="font-medium">Tax ID</div>
              <div className="text-sm text-gray-400">
                Add your tax identification number for invoices
              </div>
            </div>
            <Button variant="outline" className="border-gray-700">
              Add Tax ID
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BillingHistory;
