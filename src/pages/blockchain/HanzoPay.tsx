import React from "react";
import {
  CreditCard,
  Wallet,
  ArrowLeftRight,
  Globe,
  Shield,
  Receipt,
  Zap,
  QrCode,
  Building2,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoPay = () => {
  return (
    <BlockchainProductLayout
      name="Hanzo Pay"
      tagline="Crypto payments made simple"
      description="A complete payment gateway bridging fiat and crypto. Accept stablecoins, process card payments, enable on/off-ramps, and handle compliance—all through a single API."
      icon={CreditCard}
      accentColor="#22c55e"
      features={[
        {
          icon: Wallet,
          title: "Crypto Checkout",
          description: "Accept USDC, USDT, ETH, and 100+ tokens. Embeddable checkout widget included.",
        },
        {
          icon: CreditCard,
          title: "Card Payments",
          description: "Traditional card processing with instant crypto settlement.",
        },
        {
          icon: ArrowLeftRight,
          title: "On/Off Ramps",
          description: "Let users buy crypto with cards or sell crypto to their bank account.",
        },
        {
          icon: Globe,
          title: "Multi-Currency",
          description: "Accept payments in 50+ fiat currencies with automatic conversion.",
        },
        {
          icon: Shield,
          title: "KYC/AML Built-In",
          description: "Integrated compliance checks. Stay compliant in 100+ countries.",
        },
        {
          icon: Receipt,
          title: "Invoicing",
          description: "Generate and send crypto invoices. Track payment status automatically.",
        },
        {
          icon: Zap,
          title: "Instant Settlement",
          description: "Receive funds instantly in your preferred currency—crypto or fiat.",
        },
        {
          icon: QrCode,
          title: "QR Payments",
          description: "Generate QR codes for in-person payments. Mobile-optimized flows.",
        },
        {
          icon: Building2,
          title: "Business Dashboard",
          description: "Track revenue, refunds, and disputes. Export reports for accounting.",
        },
      ]}
      useCases={[
        {
          title: "E-Commerce",
          description: "Accept crypto alongside traditional payments. Automatic conversion to your preferred currency.",
        },
        {
          title: "SaaS Subscriptions",
          description: "Recurring crypto payments with automatic retry and dunning.",
        },
        {
          title: "Marketplaces",
          description: "Split payments, escrow, and multi-party settlements for marketplace transactions.",
        },
        {
          title: "In-Person Retail",
          description: "POS integration with QR payments. Instant settlement to your bank.",
        },
      ]}
      chains={[
        "Lux",
        "Ethereum",
        "Polygon",
        "Arbitrum",
        "Optimism",
        "Base",
        "Solana",
        "BNB Chain",
      ]}
      codeExamples={[
        {
          language: "Solidity",
          filename: "PaymentReceiver.sol",
          code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@hanzo/pay/IHanzoPay.sol";
import "@hanzo/pay/IPaymentReceiver.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MerchantContract is IPaymentReceiver {
    IHanzoPay public hanzoPay;
    mapping(bytes32 => bool) public processedPayments;

    event PaymentReceived(bytes32 indexed paymentId, address token, uint256 amount);

    constructor(address _hanzoPay) {
        hanzoPay = IHanzoPay(_hanzoPay);
    }

    // Receive payment callback from HanzoPay
    function onPaymentReceived(
        bytes32 paymentId,
        address payer,
        address token,
        uint256 amount,
        bytes calldata metadata
    ) external override {
        require(msg.sender == address(hanzoPay), "Only HanzoPay");
        require(!processedPayments[paymentId], "Already processed");

        processedPayments[paymentId] = true;

        // Decode order info from metadata
        (string memory orderId) = abi.decode(metadata, (string));

        // Process order fulfillment
        _fulfillOrder(orderId, payer, amount);

        emit PaymentReceived(paymentId, token, amount);
    }

    // Create payment intent on-chain
    function createPaymentIntent(
        uint256 amount,
        address[] calldata acceptedTokens
    ) external returns (bytes32 paymentId) {
        paymentId = hanzoPay.createIntent(
            amount,
            acceptedTokens,
            address(this),
            abi.encode("order_123")
        );
    }

    function _fulfillOrder(string memory orderId, address buyer, uint256 amount) internal {
        // Custom fulfillment logic
    }
}`,
        },
        {
          language: "Node",
          filename: "payments.ts",
          code: `import { HanzoPay } from "@hanzo/pay";

// Create a payment intent
const payment = await HanzoPay.createPayment({
  amount: 99.99,
  currency: "USD",
  acceptedTokens: ["USDC", "USDT", "ETH"],
  metadata: { orderId: "order_123" },
});

// Get checkout URL or embed widget
console.log(payment.url);

// Fiat on-ramp: let user buy crypto with card
const onramp = await HanzoPay.createOnRamp({
  userId: "user_456",
  fiatAmount: 100,
  fiatCurrency: "USD",
  cryptoCurrency: "USDC",
  walletAddress: "0x...",
});

// Query payment status
const status = await HanzoPay.getPayment(payment.id);
console.log(status.state); // "completed"`,
        },
        {
          language: "Python",
          filename: "payments.py",
          code: `from hanzo_pay import HanzoPay

client = HanzoPay(api_key="sk_live_...")

# Create a payment intent
payment = client.create_payment(
    amount=99.99,
    currency="USD",
    accepted_tokens=["USDC", "USDT", "ETH"],
    metadata={"order_id": "order_123"},
)

print(payment.url)

# Fiat on-ramp: let user buy crypto with card
onramp = client.create_onramp(
    user_id="user_456",
    fiat_amount=100,
    fiat_currency="USD",
    crypto_currency="USDC",
    wallet_address="0x...",
)

# Check payment status
status = client.get_payment(payment.id)
print(status.state)  # "completed"`,
        },
        {
          language: "Go",
          filename: "payments.go",
          code: `package main

import (
    "fmt"
    "github.com/hanzoai/pay-go"
)

func main() {
    client := pay.New("sk_live_...")

    // Create a payment intent
    payment, _ := client.CreatePayment(&pay.PaymentParams{
        Amount:         99.99,
        Currency:       "USD",
        AcceptedTokens: []string{"USDC", "USDT", "ETH"},
        Metadata:       map[string]string{"orderId": "order_123"},
    })

    fmt.Println(payment.URL)

    // Fiat on-ramp
    onramp, _ := client.CreateOnRamp(&pay.OnRampParams{
        UserID:         "user_456",
        FiatAmount:     100,
        FiatCurrency:   "USD",
        CryptoCurrency: "USDC",
        WalletAddress:  "0x...",
    })

    // Check payment status
    status, _ := client.GetPayment(payment.ID)
    fmt.Println(status.State) // "completed"
}`,
        },
        {
          language: "Rust",
          filename: "payments.rs",
          code: `use hanzo_pay::{Client, PaymentParams, OnRampParams};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new("sk_live_...");

    // Create a payment intent
    let payment = client.create_payment(PaymentParams {
        amount: 99.99,
        currency: "USD".into(),
        accepted_tokens: vec!["USDC", "USDT", "ETH"],
        metadata: Some(serde_json::json!({"orderId": "order_123"})),
    }).await?;

    println!("{}", payment.url);

    // Fiat on-ramp
    let onramp = client.create_onramp(OnRampParams {
        user_id: "user_456".into(),
        fiat_amount: 100.0,
        fiat_currency: "USD".into(),
        crypto_currency: "USDC".into(),
        wallet_address: "0x...".into(),
    }).await?;

    // Check payment status
    let status = client.get_payment(&payment.id).await?;
    println!("{}", status.state); // "completed"

    Ok(())
}`,
        },
        {
          language: "C",
          filename: "payments.c",
          code: `#include <hanzo_pay.h>
#include <stdio.h>

int main() {
    hanzo_client_t *client = hanzo_pay_init("sk_live_...");

    // Create a payment intent
    hanzo_payment_params_t params = {
        .amount = 99.99,
        .currency = "USD",
        .accepted_tokens = {"USDC", "USDT", "ETH"},
        .metadata = "{\"orderId\": \"order_123\"}"
    };

    hanzo_payment_t *payment = hanzo_create_payment(client, &params);
    printf("Checkout URL: %s\\n", payment->url);

    // Fiat on-ramp
    hanzo_onramp_params_t onramp_params = {
        .user_id = "user_456",
        .fiat_amount = 100.0,
        .fiat_currency = "USD",
        .crypto_currency = "USDC",
        .wallet_address = "0x..."
    };
    hanzo_onramp_t *onramp = hanzo_create_onramp(client, &onramp_params);

    // Check payment status
    hanzo_payment_t *status = hanzo_get_payment(client, payment->id);
    printf("Status: %s\\n", status->state); // "completed"

    hanzo_pay_cleanup(client);
    return 0;
}`,
        },
        {
          language: "C++",
          filename: "payments.cpp",
          code: `#include <hanzo/pay.hpp>
#include <iostream>

int main() {
    hanzo::PayClient client("sk_live_...");

    // Create a payment intent
    auto payment = client.createPayment({
        .amount = 99.99,
        .currency = "USD",
        .acceptedTokens = {"USDC", "USDT", "ETH"},
        .metadata = {{"orderId", "order_123"}}
    });

    std::cout << "Checkout URL: " << payment.url << std::endl;

    // Fiat on-ramp
    auto onramp = client.createOnRamp({
        .userId = "user_456",
        .fiatAmount = 100.0,
        .fiatCurrency = "USD",
        .cryptoCurrency = "USDC",
        .walletAddress = "0x..."
    });

    // Check payment status
    auto status = client.getPayment(payment.id);
    std::cout << "Status: " << status.state << std::endl; // "completed"

    return 0;
}`,
        },
        {
          language: "Ruby",
          filename: "payments.rb",
          code: `require 'hanzo_pay'

client = HanzoPay::Client.new(api_key: 'sk_live_...')

# Create a payment intent
payment = client.create_payment(
  amount: 99.99,
  currency: 'USD',
  accepted_tokens: %w[USDC USDT ETH],
  metadata: { order_id: 'order_123' }
)

puts payment.url

# Fiat on-ramp: let user buy crypto with card
onramp = client.create_onramp(
  user_id: 'user_456',
  fiat_amount: 100,
  fiat_currency: 'USD',
  crypto_currency: 'USDC',
  wallet_address: '0x...'
)

# Check payment status
status = client.get_payment(payment.id)
puts status.state # "completed"`,
        },
      ]}
    />
  );
};

export default HanzoPay;
