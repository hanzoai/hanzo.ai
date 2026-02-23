
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CurrentPlan = () => {
  const navigate = useNavigate();
  
  const handleUpgradePlan = () => {
    navigate('/account/billing-plans');
  };

  return (
    <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
      <h3 className="text-xl font-medium mb-4">Current Plan</h3>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold">Pro Plan</div>
          <div className="text-neutral-400 mt-1">$49/month, billed annually</div>
        </div>
        <Button onClick={handleUpgradePlan}>Upgrade Plan</Button>
      </div>
      <div className="mt-6 pt-6 border-t border-gray-800 flex items-center justify-between">
        <div className="text-neutral-400">Next billing date: July 15, 2024</div>
        <Button variant="outline" size="sm">Cancel Subscription</Button>
      </div>
    </div>
  );
};

export default CurrentPlan;
