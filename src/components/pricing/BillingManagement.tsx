
import React from "react";
import { Button } from "@/components/ui/radix-button";
import { CreditCard } from "lucide-react";

const BillingManagement = () => {
  return (
    <div className="max-w-4xl mx-auto mb-16 p-6 rounded-xl border border-[#333] bg-gray-900/50 hover:border-gray-700">
      <div className="flex items-center gap-4 mb-4">
        <CreditCard className="h-8 w-8 text-white" />
        <h2 className="text-2xl font-bold">Billing Management</h2>
      </div>
      <p className="text-gray-300 mb-4">
        Manage your subscription easily. Need assistance? Join our Discord server for immediate support.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button className="bg-white hover:bg-gray-200 text-black">
          Manage Subscription
        </Button>
        <Button 
          variant="outline" 
          className="border-[#333] hover:border-gray-700"
          onClick={() => window.open('https://discord.com/invite/XthHQQj', '_blank')}
        >
          Join Discord
        </Button>
      </div>
    </div>
  );
};

export default BillingManagement;
