'use client'


import React, { useState } from 'react';
import { useAccount } from '@/contexts/AccountContext';
import AccountLayout from '@/components/account/AccountLayout';
import ReferralHeader from '@/components/referrals/ReferralHeader';
import ReferralLink from '@/components/referrals/ReferralLink';
import ReferralStatsComponent from '@/components/referrals/ReferralStats';
import ReferralHistory from '@/components/referrals/ReferralHistory';
import HowItWorks from '@/components/referrals/HowItWorks';
import { ReferralRecord, ReferralStats as ReferralStatsType } from '@/components/referrals/types';

const ReferralProgram = () => {
  const { user } = useAccount();

  // Mock referral data
  const referralCode = "ALEXJ5CREDITS";
  const referralLink = `https://hanzo.ai/signup?ref=${referralCode}`;
  
  // Mock referral stats
  const referralStats: ReferralStatsType = {
    totalInvited: 12,
    signedUp: 8,
    creditsEarned: 40,
    pending: 4
  };

  // Mock referral history
  const referralHistory: ReferralRecord[] = [
    { id: 1, name: "Sarah Chen", email: "sarah@example.com", status: "Completed", date: "2024-06-12", credits: 5 },
    { id: 2, name: "Miguel Rodriguez", email: "miguel@example.com", status: "Completed", date: "2024-06-05", credits: 5 },
    { id: 3, name: "Priya Patel", email: "priya@example.com", status: "Completed", date: "2024-05-28", credits: 5 },
    { id: 4, name: "James Wilson", email: "james@example.com", status: "Pending", date: "2024-06-15", credits: 0 },
    { id: 5, name: "Olivia Kim", email: "olivia@example.com", status: "Pending", date: "2024-06-14", credits: 0 }
  ];

  return (
    <AccountLayout>
      <div className="space-y-8">
        {/* Header */}
        <ReferralHeader />
        
        {/* Referral Link */}
        <ReferralLink referralLink={referralLink} referralCode={referralCode} />
        
        {/* Referral Stats */}
        <ReferralStatsComponent referralStats={referralStats} />
        
        {/* Referral History */}
        <ReferralHistory referralHistory={referralHistory} />
        
        {/* How It Works */}
        <HowItWorks />
      </div>
    </AccountLayout>
  );
};

export default ReferralProgram;
