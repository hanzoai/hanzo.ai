
import React from 'react';
import { Gift } from 'lucide-react';

const ReferralHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-white/20 to-neutral-900/30 p-8 rounded-xl border border-border">
      <div className="flex items-center gap-6">
        <div className="h-16 w-16 rounded-full bg-primary/10 border border-white/30 flex items-center justify-center flex-shrink-0">
          <Gift className="h-8 w-8 text-foreground" />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Referral Program</h1>
          <p className="text-lg text-foreground/80">Get $5 in credits for every friend who signs up and pays for any plan</p>
        </div>
      </div>
    </div>
  );
};

export default ReferralHeader;
