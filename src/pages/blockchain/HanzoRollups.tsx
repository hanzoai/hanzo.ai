import React from "react";
import {
  Layers,
  Zap,
  Shield,
  Globe,
  ArrowUpDown,
  RefreshCw,
  Database,
  Lock,
  BarChart3,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoRollups = () => {
  return (
    <BlockchainProductLayout
      name="Hanzo Rollups"
      tagline="L2 scaling infrastructure & rollup services"
      description="Deploy and manage rollup infrastructure. From optimistic to ZK rollups, we handle sequencers, provers, and data availability so you can focus on your application."
      icon={Layers}
      accentColor="#fd4444"
      features={[
        {
          icon: Layers,
          title: "Rollup-as-a-Service",
          description: "Deploy your own L2 or L3 rollup with managed infrastructure.",
        },
        {
          icon: Zap,
          title: "High Throughput",
          description: "Process thousands of transactions per second with low fees.",
        },
        {
          icon: Shield,
          title: "Security Inheritance",
          description: "Inherit Ethereum's security while scaling your application.",
        },
        {
          icon: ArrowUpDown,
          title: "Native Bridging",
          description: "Built-in bridges for seamless L1 ↔ L2 asset transfers.",
        },
        {
          icon: Database,
          title: "Data Availability",
          description: "Multiple DA options: Ethereum, Celestia, EigenDA, or custom.",
        },
        {
          icon: RefreshCw,
          title: "Sequencer Management",
          description: "Managed sequencer infrastructure with decentralization options.",
        },
        {
          icon: Lock,
          title: "Fraud & Validity Proofs",
          description: "Support for both optimistic and ZK proving systems.",
        },
        {
          icon: Globe,
          title: "Interoperability",
          description: "Connect to the broader L2 ecosystem and cross-chain protocols.",
        },
        {
          icon: BarChart3,
          title: "Analytics & Monitoring",
          description: "Real-time metrics for rollup performance and health.",
        },
      ]}
      useCases={[
        {
          title: "Gaming & Social",
          description: "High-frequency, low-cost transactions for gaming economies and social apps.",
        },
        {
          title: "DeFi Scaling",
          description: "Scale DeFi protocols with lower gas costs while maintaining security.",
        },
        {
          title: "Enterprise Chains",
          description: "Private or permissioned rollups with custom governance.",
        },
        {
          title: "App-Specific Chains",
          description: "Dedicated throughput and customization for your application.",
        },
      ]}
      chains={[
        "Arbitrum", "Optimism", "Base", "zkSync Era", "Scroll",
        "Linea", "Polygon zkEVM", "Starknet", "Blast", "Mode",
      ]}
      codeExamples={[
        {
          language: "Solidity",
          filename: "L2Bridge.sol",
          code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@hanzo/rollups/IL2Bridge.sol";
import "@hanzo/rollups/ICrossChainMessenger.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/// @title L2Bridge - Bridge assets between L1 and L2 rollups
contract L2Bridge {
    IL2Bridge public bridge;
    ICrossChainMessenger public messenger;

    mapping(bytes32 => bool) public processedDeposits;

    event DepositInitiated(address indexed from, uint256 amount, uint256 l2ChainId);
    event WithdrawalCompleted(address indexed to, uint256 amount);

    constructor(address _bridge, address _messenger) {
        bridge = IL2Bridge(_bridge);
        messenger = ICrossChainMessenger(_messenger);
    }

    // Bridge ETH from L1 to L2
    function bridgeETHToL2(uint256 l2ChainId) external payable {
        bridge.depositETH{value: msg.value}(l2ChainId, msg.sender);
        emit DepositInitiated(msg.sender, msg.value, l2ChainId);
    }

    // Bridge ERC20 tokens to L2
    function bridgeTokenToL2(
        address token,
        uint256 amount,
        uint256 l2ChainId
    ) external {
        IERC20(token).transferFrom(msg.sender, address(this), amount);
        IERC20(token).approve(address(bridge), amount);
        bridge.depositERC20(token, amount, l2ChainId, msg.sender);
        emit DepositInitiated(msg.sender, amount, l2ChainId);
    }

    // Finalize withdrawal on L1 (called by relayer)
    function finalizeWithdrawal(
        bytes32 withdrawalHash,
        address to,
        uint256 amount,
        bytes calldata proof
    ) external {
        require(!processedDeposits[withdrawalHash], "Already processed");
        require(bridge.verifyWithdrawalProof(withdrawalHash, proof), "Invalid proof");

        processedDeposits[withdrawalHash] = true;
        payable(to).transfer(amount);
        emit WithdrawalCompleted(to, amount);
    }
}`,
        },
        {
          language: "Node",
          filename: "rollups.ts",
          code: `import { HanzoRollups } from "@hanzo/blockchain";

const rollups = new HanzoRollups({ apiKey: process.env.HANZO_API_KEY });

// Deploy a new app-specific rollup
const rollup = await rollups.deploy({
  name: "my-app-chain",
  type: "optimistic", // or "zk"
  dataAvailability: "ethereum",
  gasToken: "ETH",
});

// Monitor rollup status
const status = await rollup.getStatus();
console.log("TPS:", status.transactionsPerSecond);
console.log("Finality:", status.averageFinalityTime);`,
        },
        {
          language: "Python",
          filename: "rollups.py",
          code: `from hanzo import HanzoRollups

rollups = HanzoRollups(api_key=os.environ["HANZO_API_KEY"])

# Deploy a new app-specific rollup
rollup = await rollups.deploy(
    name="my-app-chain",
    type="optimistic",  # or "zk"
    data_availability="ethereum",
    gas_token="ETH",
)

# Monitor rollup status
status = await rollup.get_status()
print(f"TPS: {status['transactions_per_second']}")
print(f"Finality: {status['average_finality_time']}")`,
        },
        {
          language: "Go",
          filename: "rollups.go",
          code: `package main

import "github.com/hanzoai/hanzo-go/blockchain"

func main() {
    rollups := blockchain.NewRollups(os.Getenv("HANZO_API_KEY"))

    // Deploy a new app-specific rollup
    rollup, _ := rollups.Deploy(ctx, blockchain.DeployConfig{
        Name:             "my-app-chain",
        Type:             "optimistic", // or "zk"
        DataAvailability: "ethereum",
        GasToken:         "ETH",
    })

    // Monitor rollup status
    status, _ := rollup.GetStatus(ctx)
    fmt.Printf("TPS: %d\\n", status.TransactionsPerSecond)
    fmt.Printf("Finality: %s\\n", status.AverageFinalityTime)
}`,
        },
        {
          language: "Rust",
          filename: "rollups.rs",
          code: `use hanzo_blockchain::Rollups;

#[tokio::main]
async fn main() -> Result<()> {
    let rollups = Rollups::new(std::env::var("HANZO_API_KEY")?);

    // Deploy a new app-specific rollup
    let rollup = rollups.deploy(DeployConfig {
        name: "my-app-chain".into(),
        rollup_type: RollupType::Optimistic, // or Zk
        data_availability: "ethereum".into(),
        gas_token: "ETH".into(),
    }).await?;

    // Monitor rollup status
    let status = rollup.get_status().await?;
    println!("TPS: {}", status.transactions_per_second);
    println!("Finality: {}", status.average_finality_time);
    Ok(())
}`,
        },
        {
          language: "C",
          filename: "rollups.c",
          code: `#include <hanzo/blockchain.h>

int main() {
    hanzo_rollups_t *rollups = hanzo_rollups_new(getenv("HANZO_API_KEY"));

    // Deploy a new app-specific rollup
    hanzo_deploy_config_t config = {
        .name = "my-app-chain",
        .type = HANZO_ROLLUP_OPTIMISTIC, // or HANZO_ROLLUP_ZK
        .data_availability = "ethereum",
        .gas_token = "ETH"
    };
    hanzo_rollup_t *rollup = hanzo_rollups_deploy(rollups, &config);

    // Monitor rollup status
    hanzo_status_t status;
    hanzo_rollup_get_status(rollup, &status);
    printf("TPS: %d\\n", status.transactions_per_second);
    printf("Finality: %s\\n", status.average_finality_time);

    hanzo_rollups_free(rollups);
    return 0;
}`,
        },
        {
          language: "C++",
          filename: "rollups.cpp",
          code: `#include <hanzo/blockchain.hpp>

int main() {
    auto rollups = hanzo::Rollups(std::getenv("HANZO_API_KEY"));

    // Deploy a new app-specific rollup
    auto rollup = rollups.deploy({
        .name = "my-app-chain",
        .type = hanzo::RollupType::Optimistic, // or Zk
        .data_availability = "ethereum",
        .gas_token = "ETH"
    });

    // Monitor rollup status
    auto status = rollup.get_status();
    std::cout << "TPS: " << status.transactions_per_second << std::endl;
    std::cout << "Finality: " << status.average_finality_time << std::endl;

    return 0;
}`,
        },
        {
          language: "Ruby",
          filename: "rollups.rb",
          code: `require 'hanzo/blockchain'

rollups = Hanzo::Rollups.new(api_key: ENV['HANZO_API_KEY'])

# Deploy a new app-specific rollup
rollup = rollups.deploy(
  name: 'my-app-chain',
  type: :optimistic, # or :zk
  data_availability: 'ethereum',
  gas_token: 'ETH'
)

# Monitor rollup status
status = rollup.get_status
puts "TPS: #{status[:transactions_per_second]}"
puts "Finality: #{status[:average_finality_time]}"`,
        },
      ]}
    />
  );
};

export default HanzoRollups;
