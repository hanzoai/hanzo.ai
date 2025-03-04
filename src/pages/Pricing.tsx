
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, CreditCard, Users, Shield, Code, Zap } from "lucide-react";
import { useEffect } from "react";

const PricingPlans = () => {
  useEffect(() => {
    // Load Stripe pricing table script
    const script = document.createElement('script');
    script.src = "https://js.stripe.com/v3/pricing-table.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const plans = [
    {
      name: "Dev",
      icon: <Code className="h-6 w-6 text-indigo-400" />,
      price: "$4.50",
      billingPeriod: "/month",
      description: "Ideal for hobbyists and occasional use",
      features: [
        "All core Hanzo platform features",
        "Unlimited private projects",
        "Unlimited deployments",
        "Self-hosted on your infrastructure",
        "Full deployment functionality",
        "Hanzo integration",
        "Automated backups",
        "All upcoming feature updates",
        "1 AI Unit",
        "1 Compute Unit (Server)"
      ]
    },
    {
      name: "Pro",
      icon: <Zap className="h-6 w-6 text-purple-400" />,
      price: "$20",
      billingPeriod: "/month",
      description: "For professionals and small businesses",
      popular: true,
      features: [
        "Everything in the Dev plan",
        "Extended messaging and data analysis",
        "Full access to Hanzo App, Chat, Dev",
        "Integration with Hanzo Models",
        "Image generation",
        "Real-time web search",
        "Access to deep research models",
        "Up to 10 AI Units (Adjustable)",
        "Up to 10 Compute Units (Adjustable)"
      ]
    },
    {
      name: "Team",
      icon: <Users className="h-6 w-6 text-blue-400" />,
      price: "$25",
      billingPeriod: "/user/month",
      description: "Collaborative teams requiring unified billing",
      features: [
        "Everything in the Pro plan",
        "Higher message limits",
        "Advanced collaborative workspace",
        "Secure workspace with admin console",
        "Unified team billing",
        "Team data excluded from training",
        "Custom GPT creation and sharing",
        "Up to 10 AI Units per user (Adjustable)",
        "Up to 10 Compute Units per user (Adjustable)"
      ]
    }
  ];

  const enterprisePlan = {
    name: "Enterprise",
    icon: <Shield className="h-6 w-6 text-emerald-400" />,
    price: "Custom",
    description: "For large businesses requiring enterprise-grade security",
    features: [
      "Everything in the Team plan",
      "Expanded context window",
      "Highest limits on messaging & features",
      "Enhanced security (CSA, SOC 2, GDPR, CCPA)",
      "User management via SCIM and SSO",
      "Domain verification, user analytics",
      "Custom data retention policies",
      "Dedicated support & account management",
      "Customizable AI & Compute resources"
    ]
  };

  const freePlan = {
    name: "Free (Open Source)",
    icon: <Code className="h-6 w-6 text-green-400" />,
    price: "Free",
    billingPeriod: "Forever",
    description: "For individuals wanting full control",
    features: [
      "Completely open source (self-host via GitHub)",
      "Full access to platform capabilities",
      "Unlimited deployments on your hardware",
      "Self-hosted AI models and compute",
      "Real-time web search",
      "Custom GPT usage"
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Hanzo Pricing Overview
          </h1>
          <p className="text-gray-400 text-lg">
            Choose the plan that best fits your needs. All paid plans include a 14-day free trial.
          </p>
        </div>

        {/* Billing Management Section */}
        <div className="max-w-4xl mx-auto mb-16 p-6 rounded-xl border border-gray-800 bg-gray-900/50">
          <div className="flex items-center gap-4 mb-4">
            <CreditCard className="h-8 w-8 text-purple-500" />
            <h2 className="text-2xl font-bold">Billing Management</h2>
          </div>
          <p className="text-gray-300 mb-4">
            Manage your subscription easily. Need assistance? Join our Discord server for immediate support.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              Manage Subscription
            </Button>
            <Button variant="outline" className="border-gray-700">
              Join Discord
            </Button>
          </div>
        </div>

        {/* Stripe Pricing Table */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="stripe-pricing-table">
            {/* Using a div with dangerouslySetInnerHTML instead of the custom element */}
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
                  <stripe-pricing-table
                    pricing-table-id="prctbl_1OuWBqCXWvTtjTI7GiQiLlhq"
                    publishable-key="pk_live_51OIbM0CXWvTtjTI7mbcOsQiQxciFdRhW4lOmW7rIIxZRQn5hNUlSJLNHes0nWTmwkR2bYlQ6SNeTiYxOAd7JOgbJ00bF3H5rCM"
                  ></stripe-pricing-table>
                `
              }}
            />
          </div>
        </div>

        {/* Individual Plans */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border ${
                plan.popular
                  ? "border-purple-500 bg-purple-500/10"
                  : "border-gray-800 bg-black/50"
              } p-8 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/20`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                {plan.icon}
                <h3 className="text-xl font-semibold">{plan.name}</h3>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.billingPeriod && (
                    <span className="text-gray-400">{plan.billingPeriod}</span>
                  )}
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>

              <Button
                className={`w-full mb-8 ${
                  plan.popular
                    ? "bg-purple-500 hover:bg-purple-600"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {plan.name === "Team" ? "Contact Sales" : "Get Started"}
              </Button>

              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enterprise Plan */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl border border-gray-800 bg-black/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/20">
            <div className="flex items-center gap-3 mb-4">
              {enterprisePlan.icon}
              <h3 className="text-xl font-semibold">{enterprisePlan.name}</h3>
            </div>
            
            <div className="mb-6">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold">{enterprisePlan.price}</span>
              </div>
              <p className="text-gray-400">{enterprisePlan.description}</p>
            </div>

            <Button className="w-full mb-8 bg-white text-black hover:bg-gray-100">
              Contact Sales
            </Button>

            <ul className="space-y-4">
              {enterprisePlan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Free Open Source Plan */}
          <div className="rounded-2xl border border-green-800 bg-green-900/10 p-8 backdrop-blur-sm transition-all duration-300 hover:border-green-700 hover:bg-green-900/20">
            <div className="flex items-center gap-3 mb-4">
              {freePlan.icon}
              <h3 className="text-xl font-semibold">{freePlan.name}</h3>
            </div>
            
            <div className="mb-6">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold">{freePlan.price}</span>
                {freePlan.billingPeriod && (
                  <span className="text-gray-400">{freePlan.billingPeriod}</span>
                )}
              </div>
              <p className="text-gray-400">{freePlan.description}</p>
            </div>

            <Button className="w-full mb-8 bg-green-500 hover:bg-green-600 text-white">
              View on GitHub
            </Button>

            <ul className="space-y-4">
              {freePlan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center flex flex-wrap gap-6 justify-center">
          <Button variant="outline" className="border-gray-800 hover:bg-gray-800">
            <a href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer">
              Hanzo GitHub
            </a>
          </Button>
          <Button variant="outline" className="border-gray-800 hover:bg-gray-800">
            <a href="mailto:sales@hanzo.ai">
              Contact Sales
            </a>
          </Button>
          <Button variant="outline" className="border-gray-800 hover:bg-gray-800">
            <a href="https://discord.gg/hanzo" target="_blank" rel="noopener noreferrer">
              Join Discord
            </a>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPlans;
