
import React from 'react';
import { Mail, User, DollarSign, Clock } from 'lucide-react';
import { ReferralStats } from './types';

interface ReferralStatsProps {
  referralStats: ReferralStats;
}

const ReferralStatsComponent = ({ referralStats }: ReferralStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center">
            <Mail className="h-6 w-6 text-muted-foreground" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Total Invited</div>
            <div className="text-2xl font-bold">{referralStats.totalInvited}</div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center">
            <User className="h-6 w-6 text-muted-foreground" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Signed Up</div>
            <div className="text-2xl font-bold">{referralStats.signedUp}</div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center">
            <DollarSign className="h-6 w-6 text-muted-foreground" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Credits Earned</div>
            <div className="text-2xl font-bold">${referralStats.creditsEarned}</div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center">
            <Clock className="h-6 w-6 text-muted-foreground" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Pending</div>
            <div className="text-2xl font-bold">{referralStats.pending}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralStatsComponent;
