
import React from 'react';
import { Gift } from 'lucide-react';

const ReferralHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 p-8 rounded-xl border border-purple-500/20">
      <div className="flex items-center gap-6">
        <div className="h-16 w-16 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
          <Gift className="h-8 w-8 text-purple-300" />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold mb-2">Referral Program</h1>
          <p className="text-lg text-neutral-300">Get $5 in credits for every friend who signs up and pays for any plan</p>
        </div>
      </div>
    </div>
  );
};

export default ReferralHeader;
