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
      codeExample={{
        filename: "payments.ts",
        code: `import { HanzoPay } from "@hanzo/blockchain";

// Create a payment intent
const payment = await HanzoPay.createPayment({
  amount: 99.99,
  currency: "USD",
  acceptedTokens: ["USDC", "USDT", "ETH"],
  metadata: {
    orderId: "order_123",
  },
});

// Get the payment URL or embed checkout
const checkoutUrl = payment.url;

// Or use the embeddable widget
<HanzoPayButton
  paymentId={payment.id}
  onSuccess={(tx) => console.log("Paid!", tx)}
/>

// Webhooks notify you of payment status
// POST /webhook { event: "payment.completed", ... }

// Query payment status
const status = await HanzoPay.getPayment(payment.id);
console.log(status.state); // "completed"`,
      }}
    />
  );
};

export default HanzoPay;
