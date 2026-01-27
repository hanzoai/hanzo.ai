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
      codeExamples={[
        {
          language: "Solidity",
          filename: "QuestRewards.sol",
          code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title QuestRewards - Gamified engagement with on-chain rewards
/// @notice Quest completion, points tracking, and reward distribution
contract QuestRewards is ERC721, Ownable {
    IERC20 public rewardToken;

    // Quest campaign struct
    struct Campaign {
        string name;
        uint256 startTime;
        uint256 endTime;
        bytes32 merkleRoot;
        uint256 totalRewards;
        bool active;
    }

    // User progress tracking
    struct UserProgress {
        uint256 points;
        uint256 questsCompleted;
        uint256 lastClaimTime;
        bool hasClaimed;
    }

    mapping(uint256 => Campaign) public campaigns;
    mapping(uint256 => mapping(address => UserProgress)) public userProgress;
    mapping(uint256 => mapping(address => bool)) public questCompleted;

    uint256 public campaignCount;
    uint256 public badgeTokenId;

    event CampaignCreated(uint256 indexed campaignId, string name, uint256 startTime, uint256 endTime);
    event QuestCompleted(uint256 indexed campaignId, address indexed user, uint256 questId, uint256 points);
    event RewardsClaimed(uint256 indexed campaignId, address indexed user, uint256 amount);
    event BadgeMinted(uint256 indexed campaignId, address indexed user, uint256 tokenId);

    constructor(
        address _rewardToken
    ) ERC721("Quest Badge", "QBADGE") Ownable(msg.sender) {
        rewardToken = IERC20(_rewardToken);
    }

    // Create a new quest campaign
    function createCampaign(
        string calldata name,
        uint256 startTime,
        uint256 endTime,
        bytes32 merkleRoot,
        uint256 totalRewards
    ) external onlyOwner returns (uint256 campaignId) {
        campaignId = campaignCount++;
        campaigns[campaignId] = Campaign({
            name: name,
            startTime: startTime,
            endTime: endTime,
            merkleRoot: merkleRoot,
            totalRewards: totalRewards,
            active: true
        });
        emit CampaignCreated(campaignId, name, startTime, endTime);
    }

    // Complete a quest (called by backend with proof)
    function completeQuest(
        uint256 campaignId,
        uint256 questId,
        uint256 points,
        bytes32[] calldata proof
    ) external {
        Campaign storage campaign = campaigns[campaignId];
        require(campaign.active, "Campaign not active");
        require(block.timestamp >= campaign.startTime, "Campaign not started");
        require(block.timestamp <= campaign.endTime, "Campaign ended");

        // Verify quest completion proof
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender, questId, points));
        require(MerkleProof.verify(proof, campaign.merkleRoot, leaf), "Invalid proof");

        require(!questCompleted[campaignId][msg.sender], "Quest already completed");
        questCompleted[campaignId][msg.sender] = true;

        UserProgress storage progress = userProgress[campaignId][msg.sender];
        progress.points += points;
        progress.questsCompleted++;

        emit QuestCompleted(campaignId, msg.sender, questId, points);
    }

    // Claim token rewards
    function claimRewards(
        uint256 campaignId,
        uint256 amount,
        bytes32[] calldata proof
    ) external {
        Campaign storage campaign = campaigns[campaignId];
        require(block.timestamp > campaign.endTime, "Campaign not ended");

        UserProgress storage progress = userProgress[campaignId][msg.sender];
        require(!progress.hasClaimed, "Already claimed");

        // Verify reward amount proof
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender, amount));
        require(MerkleProof.verify(proof, campaign.merkleRoot, leaf), "Invalid proof");

        progress.hasClaimed = true;
        progress.lastClaimTime = block.timestamp;

        rewardToken.transfer(msg.sender, amount);
        emit RewardsClaimed(campaignId, msg.sender, amount);
    }

    // Mint achievement badge (SBT)
    function mintBadge(uint256 campaignId, uint256 minPoints) external {
        UserProgress storage progress = userProgress[campaignId][msg.sender];
        require(progress.points >= minPoints, "Not enough points");

        uint256 tokenId = badgeTokenId++;
        _safeMint(msg.sender, tokenId);
        emit BadgeMinted(campaignId, msg.sender, tokenId);
    }

    // Soulbound - prevent transfers
    function _update(address to, uint256 tokenId, address auth) internal override returns (address) {
        address from = _ownerOf(tokenId);
        require(from == address(0), "Soulbound: non-transferable");
        return super._update(to, tokenId, auth);
    }
}`,
        },
        {
          language: "Node",
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
    { name: "Follow on Twitter", type: "social", points: 100 },
    { name: "First Swap", type: "onchain", points: 500 },
    { name: "Invite Friends", type: "referral", pointsPerReferral: 200 },
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
        },
        {
          language: "Python",
          filename: "quest.py",
          code: `from hanzo import HanzoQuest
import os

quest = HanzoQuest(api_key=os.environ["HANZO_API_KEY"])

# Create a quest campaign
campaign = await quest.create_campaign(
    name="Launch Week",
    start_date="2024-03-01",
    end_date="2024-03-07",
    quests=[
        {"name": "Follow on Twitter", "type": "social", "points": 100},
        {"name": "First Swap", "type": "onchain", "points": 500},
        {"name": "Invite Friends", "type": "referral", "points_per_referral": 200},
    ],
    rewards=[
        {"tier": "bronze", "min_points": 500, "reward": "NFT Badge"},
        {"tier": "gold", "min_points": 2000, "reward": "1000 TOKENS"},
    ]
)

# Check user progress
progress = await quest.get_user_progress(
    campaign_id=campaign.id,
    user_id="user_123"
)`,
        },
        {
          language: "Go",
          filename: "quest.go",
          code: `package main

import (
    "os"
    "github.com/hanzoai/hanzo-go/blockchain"
)

func main() {
    quest := blockchain.NewQuest(os.Getenv("HANZO_API_KEY"))

    // Create a quest campaign
    campaign, _ := quest.CreateCampaign(ctx, blockchain.CampaignOpts{
        Name:      "Launch Week",
        StartDate: "2024-03-01",
        EndDate:   "2024-03-07",
        Quests: []blockchain.Quest{
            {Name: "Follow on Twitter", Type: "social", Points: 100},
            {Name: "First Swap", Type: "onchain", Points: 500},
            {Name: "Invite Friends", Type: "referral", PointsPerReferral: 200},
        },
        Rewards: []blockchain.Reward{
            {Tier: "bronze", MinPoints: 500, Reward: "NFT Badge"},
            {Tier: "gold", MinPoints: 2000, Reward: "1000 TOKENS"},
        },
    })

    // Check user progress
    progress, _ := quest.GetUserProgress(ctx, campaign.ID, "user_123")
}`,
        },
        {
          language: "Rust",
          filename: "quest.rs",
          code: `use hanzo_blockchain::{Quest, CampaignOpts};

#[tokio::main]
async fn main() -> Result<()> {
    let quest = Quest::new(std::env::var("HANZO_API_KEY")?);

    // Create a quest campaign
    let campaign = quest.create_campaign(CampaignOpts {
        name: "Launch Week".into(),
        start_date: "2024-03-01".into(),
        end_date: "2024-03-07".into(),
        quests: vec![
            QuestDef { name: "Follow on Twitter".into(), quest_type: "social".into(), points: 100 },
            QuestDef { name: "First Swap".into(), quest_type: "onchain".into(), points: 500 },
        ],
        rewards: vec![
            Reward { tier: "bronze".into(), min_points: 500, reward: "NFT Badge".into() },
            Reward { tier: "gold".into(), min_points: 2000, reward: "1000 TOKENS".into() },
        ],
    }).await?;

    // Check user progress
    let progress = quest.get_user_progress(&campaign.id, "user_123").await?;

    Ok(())
}`,
        },
        {
          language: "C",
          filename: "quest.c",
          code: `#include <hanzo/blockchain.h>

int main() {
    hanzo_quest_t *quest = hanzo_quest_new(getenv("HANZO_API_KEY"));

    // Create a quest campaign
    hanzo_quest_def_t quests[] = {
        {"Follow on Twitter", "social", 100},
        {"First Swap", "onchain", 500},
        {"Invite Friends", "referral", 200},
    };
    hanzo_reward_t rewards[] = {
        {"bronze", 500, "NFT Badge"},
        {"gold", 2000, "1000 TOKENS"},
    };
    hanzo_campaign_t *campaign = hanzo_create_campaign(
        quest, "Launch Week", "2024-03-01", "2024-03-07",
        quests, 3, rewards, 2
    );

    // Check user progress
    hanzo_progress_t *progress = hanzo_get_user_progress(
        quest, campaign->id, "user_123"
    );

    hanzo_quest_free(quest);
    return 0;
}`,
        },
        {
          language: "C++",
          filename: "quest.cpp",
          code: `#include <hanzo/blockchain.hpp>

int main() {
    auto quest = hanzo::Quest(std::getenv("HANZO_API_KEY"));

    // Create a quest campaign
    auto campaign = quest.createCampaign({
        .name = "Launch Week",
        .startDate = "2024-03-01",
        .endDate = "2024-03-07",
        .quests = {
            {.name = "Follow on Twitter", .type = "social", .points = 100},
            {.name = "First Swap", .type = "onchain", .points = 500},
        },
        .rewards = {
            {.tier = "bronze", .minPoints = 500, .reward = "NFT Badge"},
            {.tier = "gold", .minPoints = 2000, .reward = "1000 TOKENS"},
        }
    });

    // Check user progress
    auto progress = quest.getUserProgress(campaign.id, "user_123");

    return 0;
}`,
        },
        {
          language: "Ruby",
          filename: "quest.rb",
          code: `require 'hanzo/blockchain'

quest = Hanzo::Quest.new(api_key: ENV['HANZO_API_KEY'])

# Create a quest campaign
campaign = quest.create_campaign(
  name: 'Launch Week',
  start_date: '2024-03-01',
  end_date: '2024-03-07',
  quests: [
    { name: 'Follow on Twitter', type: 'social', points: 100 },
    { name: 'First Swap', type: 'onchain', points: 500 },
    { name: 'Invite Friends', type: 'referral', points_per_referral: 200 },
  ],
  rewards: [
    { tier: 'bronze', min_points: 500, reward: 'NFT Badge' },
    { tier: 'gold', min_points: 2000, reward: '1000 TOKENS' },
  ]
)

# Check user progress
progress = quest.get_user_progress(
  campaign_id: campaign.id,
  user_id: 'user_123'
)`,
        },
      ]}
    />
  );
};

export default HanzoQuest;
