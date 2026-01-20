import React from "react";
import {
  Trophy,
  Gift,
  Users,
  Target,
  Sparkles,
  BarChart3,
  Bell,
  Coins,
  Gamepad2,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoQuest = () => {
  return (
    <BlockchainProductLayout
      name="Hanzo Quest"
      tagline="Gamified engagement and loyalty programs"
      description="Build engaging quest systems and loyalty programs. Users complete tasks, earn points, and claim rewards—NFTs, tokens, or real-world perks. Drive engagement and retention with gamification."
      icon={Trophy}
      accentColor="#eab308"
      features={[
        {
          icon: Target,
          title: "Quest Builder",
          description: "Create quests with on-chain and off-chain tasks. No code required.",
        },
        {
          icon: Coins,
          title: "Points System",
          description: "Award points for completing tasks. Leaderboards and tiers included.",
        },
        {
          icon: Gift,
          title: "Reward Distribution",
          description: "Distribute NFTs, tokens, or whitelist spots. Merkle drops supported.",
        },
        {
          icon: Users,
          title: "Referral Programs",
          description: "Built-in referral tracking with customizable reward structures.",
        },
        {
          icon: Sparkles,
          title: "Achievement Badges",
          description: "Soulbound tokens (SBTs) for achievements that users can showcase.",
        },
        {
          icon: BarChart3,
          title: "Analytics",
          description: "Track quest completion, user retention, and reward redemption.",
        },
        {
          icon: Bell,
          title: "Notifications",
          description: "Push notifications for new quests, rewards, and milestones.",
        },
        {
          icon: Gamepad2,
          title: "Gamification Widgets",
          description: "Embeddable widgets for progress bars, leaderboards, and rewards.",
        },
      ]}
      useCases={[
        {
          title: "NFT Communities",
          description: "Engage holders with quests that reward participation and loyalty.",
        },
        {
          title: "DeFi Protocols",
          description: "Incentivize protocol usage with points that convert to governance tokens.",
        },
        {
          title: "Gaming",
          description: "Build in-game achievement systems with on-chain rewards.",
        },
        {
          title: "Brand Loyalty",
          description: "Web3-native loyalty programs with tradeable reward tokens.",
        },
      ]}
      codeExample={{
        filename: "quest.ts",
        code: `import { HanzoQuest } from "@hanzo/blockchain";

const quest = new HanzoQuest({
  apiKey: process.env.HANZO_API_KEY,
});

// Create a quest campaign
const campaign = await quest.createCampaign({
  name: "Launch Week",
  startDate: "2024-03-01",
  endDate: "2024-03-07",
  quests: [
    {
      name: "Follow on Twitter",
      type: "social",
      platform: "twitter",
      action: "follow",
      target: "@hanzoai",
      points: 100,
    },
    {
      name: "First Swap",
      type: "onchain",
      contract: "0x...",
      event: "Swap",
      points: 500,
    },
    {
      name: "Invite Friends",
      type: "referral",
      pointsPerReferral: 200,
    },
  ],
  rewards: [
    { tier: "bronze", minPoints: 500, reward: "NFT Badge" },
    { tier: "gold", minPoints: 2000, reward: "1000 TOKENS" },
  ],
});

// Check user progress
const progress = await quest.getUserProgress({
  campaignId: campaign.id,
  userId: "user_123",
});`,
      }}
    />
  );
};

export default HanzoQuest;
