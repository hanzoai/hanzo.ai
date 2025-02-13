import { motion } from "framer-motion";
import { Database, Brain, ShoppingCart, CreditCard, Megaphone, Users, Share2, Github, Zap, Lock, Globe, Cpu, Cloud, Blocks, Target, BarChart, Rocket } from "lucide-react";
import { Button } from "./ui/button";

const products = [
  {
    icon: <Database className="h-8 w-8" />,
    title: "Hanzo Base",
    description: "A one-file backend with real-time DB, auth, and vector search for next-gen AI applications.",
    code: "import { createClient } from '@hanzo/base';",
    features: [
      { icon: <Zap className="h-4 w-4" />, text: "One-Line Spin-Up – Paste a single import, get an entire backend" },
      { icon: <Lock className="h-4 w-4" />, text: "Realtime & Authentication – Stay in sync effortlessly" },
      { icon: <Globe className="h-4 w-4" />, text: "Edge Optimized – Deploy globally for near-zero latency" },
      { icon: <Github className="h-4 w-4" />, text: "Open Source – No vendor lock-in, self-host or let us do it" }
    ],
    productUrl: "https://docs.hanzo.ai/products/base",
    github: "https://github.com/hanzoai/hanzo-base"
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Hanzo AI",
    description: "Transform your app with advanced ML, vector search, and self-learning automation.",
    code: "import { useAI } from '@hanzo/ai';",
    features: [
      { icon: <Cpu className="h-4 w-4" />, text: "LLM & Vector Search – Deep text analysis and semantic lookup" },
      { icon: <Cloud className="h-4 w-4" />, text: "Autonomous Operations – Automated workflows that evolve over time" },
      { icon: <Blocks className="h-4 w-4" />, text: "Decentralized Ready – Perfect for unstoppable, mesh-based solutions" },
      { icon: <Target className="h-4 w-4" />, text: "Easy SDK – Seamlessly integrate advanced AI calls in your code" }
    ],
    productUrl: "https://docs.hanzo.ai/products/ai",
    github: "https://github.com/hanzoai/hanzoai"
  },
  {
    icon: <ShoppingCart className="h-8 w-8" />,
    title: "Hanzo Commerce",
    description: "Sell anything—physical, digital, or tokenized. Scale from day one with built-in intelligence.",
    code: "import { useCommerce } from '@hanzo/commerce';",
    features: [
      { icon: <CreditCard className="h-4 w-4" />, text: "One-Line Checkout – Quick deployment of cart and payment flows" },
      { icon: <BarChart className="h-4 w-4" />, text: "Subscriptions & Promotions – Auto-manage recurring revenue" },
      { icon: <Globe className="h-4 w-4" />, text: "E2E Analytics – Real-time data on sales and behavior" },
      { icon: <Github className="h-4 w-4" />, text: "Web2 & Web3 – Plug into traditional or decentralized payment rails" }
    ],
    productUrl: "https://docs.hanzo.ai/products/commerce",
    github: "https://github.com/hanzoai/hanzo-commerce"
  },
  {
    icon: <CreditCard className="h-8 w-8" />,
    title: "Hanzo Payments",
    description: "Secure, AI-enhanced transactions across fiat, crypto, and beyond.",
    features: [
      { icon: <Zap className="h-4 w-4" />, text: "Instant Onboarding – Start accepting payments in minutes" },
      { icon: <Globe className="h-4 w-4" />, text: "Global Coverage – Handle multiple currencies and networks" },
      { icon: <Lock className="h-4 w-4" />, text: "Fraud Detection – Machine learning insights reduce disputes" },
      { icon: <BarChart className="h-4 w-4" />, text: "Flexible Pricing – Transparent pay-as-you-grow structure" }
    ],
    productUrl: "https://docs.hanzo.ai/products/payments",
    github: "https://github.com/hanzoai/hanzo-payments"
  },
  {
    icon: <Megaphone className="h-8 w-8" />,
    title: "Hanzo Marketing",
    description: "Supercharge your growth engine—automated ads, funnels, and engagement.",
    features: [
      { icon: <Cpu className="h-4 w-4" />, text: "AI-Optimized Campaigns – Launch targeted ads with minimal effort" },
      { icon: <Cloud className="h-4 w-4" />, text: "Multi-Channel Outreach – Facebook, Google Ads, email, affiliates" },
      { icon: <Blocks className="h-4 w-4" />, text: "Contextual Analytics – Understand user actions in real-time" },
      { icon: <Target className="h-4 w-4" />, text: "Affiliate & Referral Modules – Tap into influencer networks" }
    ],
    productUrl: "https://docs.hanzo.ai/products/marketing",
    github: "https://github.com/hanzoai/hanzo-marketing"
  },
  {
    icon: <Share2 className="h-8 w-8" />,
    title: "Hanzo Social",
    description: "One-stop management for all your social channels.",
    features: [
      { icon: <Zap className="h-4 w-4" />, text: "Scheduled Posts – Plan content across platforms at once" },
      { icon: <Lock className="h-4 w-4" />, text: "Social Insights – Track engagement, discover top content" },
      { icon: <Globe className="h-4 w-4" />, text: "Cross-Platform Integration – Seamless AI automation" },
      { icon: <Github className="h-4 w-4" />, text: "Community Building – Chat & moderation tools in one place" }
    ],
    productUrl: "https://docs.hanzo.ai/products/social",
    github: "https://github.com/hanzoai/hanzo-social"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Hanzo People",
    description: "Bring user data, CRM, and authentication together.",
    features: [
      { icon: <Zap className="h-4 w-4" />, text: "Unified Identity – Manage logins, roles, and permissions" },
      { icon: <Lock className="h-4 w-4" />, text: "CRM Tools – Keep track of users, leads, and conversions" },
      { icon: <Globe className="h-4 w-4" />, text: "Behavior Tracking – Understand user journeys deeply" },
      { icon: <BarChart className="h-4 w-4" />, text: "Flexible Plans – Start small, scale to millions of users" }
    ],
    productUrl: "https://docs.hanzo.ai/products/people",
    github: "https://github.com/hanzoai/hanzo-people"
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Hanzo Ops",
    description: "One-click deployment for your AI applications across any infrastructure.",
    features: [
      { icon: <Zap className="h-4 w-4" />, text: "Multi-Cloud Support – Deploy to AWS, GCP, Azure, or on-prem" },
      { icon: <Lock className="h-4 w-4" />, text: "Zero-Downtime Updates – Rolling deployments by default" },
      { icon: <Globe className="h-4 w-4" />, text: "Edge Ready – Global CDN and load balancing built-in" },
      { icon: <BarChart className="h-4 w-4" />, text: "Infrastructure as Code – Version control your deployments" }
    ],
    productUrl: "https://docs.hanzo.ai/products/deploy",
    github: "https://github.com/hanzoai/hanzo-deploy"
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Hanzo Network",
    description: "Join the decentralized AI network powering the next generation of autonomous applications.",
    features: [
      { icon: <Cpu className="h-4 w-4" />, text: "Decentralized Computing – Contribute and earn rewards" },
      { icon: <Cloud className="h-4 w-4" />, text: "AI-Native Infrastructure – Built for next-gen applications" },
      { icon: <Blocks className="h-4 w-4" />, text: "Mesh Network – Resilient and unstoppable" },
      { icon: <Target className="h-4 w-4" />, text: "Green Energy – Sustainable compute at scale" }
    ],
    productUrl: "https://hanzo.network",
    github: "https://github.com/hanzoai/network"
  }
];

const Products = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: products.length * 0.1 }}
          className="mt-20 p-8 bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-xl ring-1 ring-white/10 hover:ring-white/30 transition-all duration-300"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Ready to Shape the Future?</h3>
            <p className="text-gray-300 mb-8">
              Join the revolution in AI-powered development. Start building unstoppable applications today with our comprehensive suite of tools.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <a href="https://docs.hanzo.ai" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto bg-transparent text-white hover:bg-white hover:text-black border-2 border-white group-hover:translate-y-[-2px] transition-transform duration-300"
                  >
                    Read the Docs
                  </Button>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <a href="https://app.hanzo.ai/signup" target="_blank" rel="noopener noreferrer">
                  <Button
                    className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 group-hover:translate-y-[-2px] transition-transform duration-300"
                  >
                    Get Started Free
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
    </section>
  );
};

export default Products;
