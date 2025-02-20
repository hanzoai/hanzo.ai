
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingPlans = () => {
  const plans = [
    {
      name: "Dev",
      price: "$10",
      billingPeriod: "/bot/month",
      description: "Explore how to build with Hanzo AI",
      features: [
        "Access to latest AI models",
        "Limited API calls per month",
        "Access to Hanzo Code and Hanzo Dev",
        "Limited access to file uploads",
        "Use custom Apps",
        "Basic support"
      ]
    },
    {
      name: "Duo",
      price: "$30",
      billingPeriod: "/month",
      description: "Level up productivity and creativity with expanded access",
      popular: true,
      features: [
        "Double Everything in Dev",
        "Extended limits on messaging",
        "Standard and advanced voice mode",
        "Limited access to oT and oT-mini",
        "Opportunities to test new features",
        "Create and use custom GPTs",
        "Priority support"
      ]
    },
    {
      name: "Pro",
      price: "$90",
      billingPeriod: "/month",
      description: "Get the best of Hanzo with the highest level of access",
      features: [
        "Triple Everything in Duo",
        "Unlimited* access to oT, oT-mini, GPT-4x",
        "Higher limits for video and screensharing",
        "Access to oT pro mode",
        "Extended access to Sora video generation",
        "Access to Operator research preview (U.S. only)",
        "24/7 premium support"
      ]
    }
  ];

  const enterprisePlans = [
    {
      name: "Team",
      price: "$500",
      billingPeriod: "/dev/month",
      description: "Supercharge your team's work with a secure, collaborative workspace",
      features: [
        "Higher message limits than Plus",
        "Limited access to oT and oT-mini",
        "Standard and advanced voice mode",
        "Create and share GPTs with workspace",
        "Admin console for workspace management",
        "Team data excluded from training"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Enable your workforce with enterprise-grade AI",
      features: [
        "Everything in Team",
        "High speed access to GPT-4, GPT-4x",
        "Expanded context window",
        "Enterprise data excluded from training",
        "Admin controls and analytics",
        "Enhanced support & account management"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-gray-400 text-lg">
            Choose the plan that best fits your needs. All plans include a 14-day free trial.
          </p>
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
              } p-8 backdrop-blur-sm`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.billingPeriod && (
                    <span className="text-gray-400">{plan.billingPeriod}</span>
                  )}
                </div>
                <p className="text-gray-400 mt-2">{plan.description}</p>
              </div>

              <Button
                className={`w-full mb-8 ${
                  plan.popular
                    ? "bg-purple-500 hover:bg-purple-600"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
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

        {/* Enterprise Plans */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {enterprisePlans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl border border-gray-800 bg-black/50 p-8 backdrop-blur-sm"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.billingPeriod && (
                    <span className="text-gray-400">{plan.billingPeriod}</span>
                  )}
                </div>
                <p className="text-gray-400 mt-2">{plan.description}</p>
              </div>

              <Button
                className="w-full mb-8 bg-white text-black hover:bg-gray-100"
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
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

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Have questions? We're here to help.
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Our team is standing by to answer any questions you might have about our plans, 
            features, or pricing. Get in touch with us today.
          </p>
          <Button variant="outline" className="border-gray-800 hover:bg-gray-800">
            Contact Sales
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPlans;
