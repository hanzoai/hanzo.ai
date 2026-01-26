import React from "react";
import {
  Radio,
  TrendingUp,
  Dice6,
  CloudSun,
  Link2,
  Shield,
  Clock,
  Database,
  Zap,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoOracle = () => {
  return (
    <BlockchainProductLayout
      name="Hanzo Oracle"
      tagline="Bring real-world data on-chain"
      description="A comprehensive oracle service providing price feeds, randomness, weather data, and custom attestations for smart contracts. Built on Lux's OracleVM with Chainlink integration."
      icon={Radio}
      accentColor="#a855f7"
      features={[
        {
          icon: TrendingUp,
          title: "Price Feeds",
          description: "Real-time and historical price data for crypto, forex, commodities, and stocks.",
        },
        {
          icon: Dice6,
          title: "VRF (Randomness)",
          description: "Verifiable random numbers for gaming, NFT mints, and fair selection.",
        },
        {
          icon: CloudSun,
          title: "Weather Data",
          description: "On-chain weather data for parametric insurance and prediction markets.",
        },
        {
          icon: Link2,
          title: "Custom Data Feeds",
          description: "Bring any API data on-chain with custom oracle configurations.",
        },
        {
          icon: Shield,
          title: "Cryptographic Proofs",
          description: "Every data point includes cryptographic proof of authenticity.",
        },
        {
          icon: Clock,
          title: "Scheduled Updates",
          description: "Configure update frequency from seconds to daily, based on your needs.",
        },
        {
          icon: Database,
          title: "Historical Data",
          description: "Access historical oracle data for backtesting and analysis.",
        },
        {
          icon: Zap,
          title: "Low Latency",
          description: "Sub-second updates for time-sensitive applications.",
        },
      ]}
      useCases={[
        {
          title: "DeFi Protocols",
          description: "Power lending, derivatives, and synthetic assets with reliable price feeds.",
        },
        {
          title: "Gaming & NFTs",
          description: "Generate provably fair random numbers for loot boxes, mints, and gameplay.",
        },
        {
          title: "Insurance",
          description: "Trigger parametric insurance payouts based on weather, flight, or event data.",
        },
        {
          title: "Prediction Markets",
          description: "Settle markets with verified outcomes from trusted data sources.",
        },
      ]}
      chains={[
        "Lux",
        "Ethereum",
        "Polygon",
        "Arbitrum",
        "Avalanche",
        "BNB Chain",
      ]}
      codeExamples={[
        {
          language: "Node",
          filename: "oracle.ts",
          code: `import { HanzoOracle } from '@hanzo/oracle';

const oracle = new HanzoOracle({
  apiKey: process.env.HANZO_API_KEY,
  network: 'mainnet'
});

// Get latest ETH/USD price
const ethPrice = await oracle.getPrice('ETH/USD');
console.log(\`ETH: $\${ethPrice.price} (updated: \${ethPrice.timestamp})\`);

// Get multiple prices at once
const prices = await oracle.getPrices(['BTC/USD', 'ETH/USD', 'LUX/USD']);
prices.forEach(p => console.log(\`\${p.pair}: $\${p.price}\`));

// Subscribe to real-time price updates
oracle.subscribe('ETH/USD', (update) => {
  console.log(\`New price: $\${update.price}\`);
});

// Get historical prices
const history = await oracle.getHistory('ETH/USD', {
  from: Date.now() - 86400000,
  to: Date.now(),
  interval: '1h'
});`,
        },
        {
          language: "Python",
          filename: "oracle.py",
          code: `from hanzo_oracle import HanzoOracle
import asyncio

oracle = HanzoOracle(
    api_key=os.environ["HANZO_API_KEY"],
    network="mainnet"
)

# Get latest ETH/USD price
eth_price = await oracle.get_price("ETH/USD")
print(f"ETH: ${eth_price.price} (updated: {eth_price.timestamp})")

# Get multiple prices at once
prices = await oracle.get_prices(["BTC/USD", "ETH/USD", "LUX/USD"])
for p in prices:
    print(f"{p.pair}: ${p.price}")

# Subscribe to real-time price updates
async def on_price_update(update):
    print(f"New price: ${update.price}")

await oracle.subscribe("ETH/USD", on_price_update)

# Get historical prices with TWAP
history = await oracle.get_history(
    "ETH/USD",
    start=datetime.now() - timedelta(days=1),
    end=datetime.now(),
    interval="1h"
)
twap = sum(h.price for h in history) / len(history)`,
        },
        {
          language: "Go",
          filename: "oracle.go",
          code: `package main

import (
    "fmt"
    "time"
    "github.com/hanzoai/oracle-go"
)

func main() {
    client := oracle.NewClient(oracle.Config{
        APIKey:  os.Getenv("HANZO_API_KEY"),
        Network: "mainnet",
    })

    // Get latest ETH/USD price
    ethPrice, err := client.GetPrice("ETH/USD")
    if err != nil {
        log.Fatal(err)
    }
    fmt.Printf("ETH: $%.2f (updated: %s)\\n", ethPrice.Price, ethPrice.Timestamp)

    // Get multiple prices at once
    prices, _ := client.GetPrices([]string{"BTC/USD", "ETH/USD", "LUX/USD"})
    for _, p := range prices {
        fmt.Printf("%s: $%.2f\\n", p.Pair, p.Price)
    }

    // Subscribe to real-time price updates
    ch := make(chan *oracle.PriceUpdate)
    go client.Subscribe("ETH/USD", ch)
    for update := range ch {
        fmt.Printf("New price: $%.2f\\n", update.Price)
    }
}`,
        },
        {
          language: "Rust",
          filename: "oracle.rs",
          code: `use hanzo_oracle::{Client, Config, PriceUpdate};
use tokio::sync::mpsc;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new(Config {
        api_key: std::env::var("HANZO_API_KEY")?,
        network: "mainnet".into(),
    });

    // Get latest ETH/USD price
    let eth_price = client.get_price("ETH/USD").await?;
    println!("ETH: ${"$"}{:.2} (updated: {})", eth_price.price, eth_price.timestamp);

    // Get multiple prices at once
    let prices = client.get_prices(&["BTC/USD", "ETH/USD", "LUX/USD"]).await?;
    for p in prices {
        println!("{}: ${"$"}{:.2}", p.pair, p.price);
    }

    // Subscribe to real-time price updates
    let (tx, mut rx) = mpsc::channel::<PriceUpdate>(100);
    client.subscribe("ETH/USD", tx).await?;

    while let Some(update) = rx.recv().await {
        println!("New price: ${"$"}{:.2}", update.price);
    }

    Ok(())
}`,
        },
        {
          language: "C",
          filename: "oracle.c",
          code: `#include <stdio.h>
#include <hanzo/oracle.h>

int main() {
    hanzo_oracle_t *oracle = hanzo_oracle_init(
        getenv("HANZO_API_KEY"),
        HANZO_NETWORK_MAINNET
    );

    // Get latest ETH/USD price
    hanzo_price_t eth_price;
    if (hanzo_get_price(oracle, "ETH/USD", &eth_price) == 0) {
        printf("ETH: $%.2f (updated: %ld)\\n",
               eth_price.price, eth_price.timestamp);
    }

    // Get multiple prices at once
    const char *pairs[] = {"BTC/USD", "ETH/USD", "LUX/USD"};
    hanzo_price_t prices[3];
    hanzo_get_prices(oracle, pairs, 3, prices);
    for (int i = 0; i < 3; i++) {
        printf("%s: $%.2f\\n", pairs[i], prices[i].price);
    }

    // Subscribe to real-time price updates
    hanzo_subscribe(oracle, "ETH/USD", price_callback, NULL);

    hanzo_oracle_free(oracle);
    return 0;
}

void price_callback(const hanzo_price_t *update, void *ctx) {
    printf("New price: $%.2f\\n", update->price);
}`,
        },
        {
          language: "C++",
          filename: "oracle.cpp",
          code: `#include <iostream>
#include <hanzo/oracle.hpp>

int main() {
    hanzo::Oracle oracle({
        .api_key = std::getenv("HANZO_API_KEY"),
        .network = hanzo::Network::Mainnet
    });

    // Get latest ETH/USD price
    auto eth_price = oracle.get_price("ETH/USD");
    std::cout << "ETH: $" << eth_price.price
              << " (updated: " << eth_price.timestamp << ")" << std::endl;

    // Get multiple prices at once
    auto prices = oracle.get_prices({"BTC/USD", "ETH/USD", "LUX/USD"});
    for (const auto& p : prices) {
        std::cout << p.pair << ": $" << p.price << std::endl;
    }

    // Subscribe to real-time price updates with lambda
    oracle.subscribe("ETH/USD", [](const hanzo::PriceUpdate& update) {
        std::cout << "New price: $" << update.price << std::endl;
    });

    // Get historical data with TWAP calculation
    auto history = oracle.get_history("ETH/USD", {
        .start = std::chrono::system_clock::now() - std::chrono::hours(24),
        .end = std::chrono::system_clock::now(),
        .interval = "1h"
    });

    return 0;
}`,
        },
        {
          language: "Ruby",
          filename: "oracle.rb",
          code: `require 'hanzo/oracle'

oracle = Hanzo::Oracle.new(
  api_key: ENV['HANZO_API_KEY'],
  network: :mainnet
)

# Get latest ETH/USD price
eth_price = oracle.get_price('ETH/USD')
puts "ETH: $#{eth_price.price} (updated: #{eth_price.timestamp})"

# Get multiple prices at once
prices = oracle.get_prices(['BTC/USD', 'ETH/USD', 'LUX/USD'])
prices.each { |p| puts "#{p.pair}: $#{p.price}" }

# Subscribe to real-time price updates
oracle.subscribe('ETH/USD') do |update|
  puts "New price: $#{update.price}"
end

# Get historical prices
history = oracle.get_history('ETH/USD',
  from: Time.now - 86400,
  to: Time.now,
  interval: '1h'
)

# Calculate TWAP
twap = history.sum(&:price) / history.size
puts "24h TWAP: $#{twap.round(2)}"`,
        },
      ]}
    />
  );
};

export default HanzoOracle;
