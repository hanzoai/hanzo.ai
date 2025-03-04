
import React from "react";
import { Check, X } from "lucide-react";

const FeatureComparison = () => {
  // Features categories and their specific features
  const featureCategories = [
    {
      name: "Platform Access",
      features: [
        { name: "Core Platform Features", dev: true, pro: true, team: true, enterprise: true },
        { name: "Unlimited Private Projects", dev: true, pro: true, team: true, enterprise: true },
        { name: "Self-hosted Infrastructure", dev: true, pro: true, team: true, enterprise: true },
        { name: "Hanzo App Access", dev: false, pro: true, team: true, enterprise: true },
        { name: "Unified Team Billing", dev: false, pro: false, team: true, enterprise: true },
      ]
    },
    {
      name: "AI & Compute",
      features: [
        { name: "AI Units Included", dev: "1", pro: "Up to 10", team: "Up to 10/user", enterprise: "Custom" },
        { name: "Compute Units", dev: "1", pro: "Up to 10", team: "Up to 10/user", enterprise: "Custom" },
        { name: "Custom AI Resources", dev: false, pro: false, team: false, enterprise: true },
      ]
    },
    {
      name: "Security & Management",
      features: [
        { name: "Admin Console", dev: false, pro: false, team: true, enterprise: true },
        { name: "User Management", dev: false, pro: false, team: true, enterprise: true },
        { name: "Data Exclusion from Training", dev: false, pro: false, team: true, enterprise: true },
        { name: "Enhanced Security (SOC 2, GDPR)", dev: false, pro: false, team: false, enterprise: true },
        { name: "Custom Data Retention", dev: false, pro: false, team: false, enterprise: true },
      ]
    },
    {
      name: "Support",
      features: [
        { name: "Community Support", dev: true, pro: true, team: true, enterprise: true },
        { name: "Standard Support", dev: false, pro: true, team: true, enterprise: true },
        { name: "Priority Support", dev: false, pro: false, team: true, enterprise: true },
        { name: "Dedicated Account Manager", dev: false, pro: false, team: false, enterprise: true },
      ]
    }
  ];

  // Helper function to render feature value
  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-gray-300 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-gray-600 mx-auto" />
      );
    }
    return <span className="text-gray-300 text-center block">{value}</span>;
  };

  return (
    <div className="max-w-7xl mx-auto my-16 px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">Compare Features Across Plans</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="py-4 px-4 text-left">Feature</th>
              <th className="py-4 px-6 text-center">Dev</th>
              <th className="py-4 px-6 text-center">Pro</th>
              <th className="py-4 px-6 text-center">Team</th>
              <th className="py-4 px-6 text-center">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {featureCategories.map((category) => (
              <React.Fragment key={category.name}>
                <tr className="bg-gray-900/30">
                  <td colSpan={5} className="py-3 px-4 font-medium text-gray-300">
                    {category.name}
                  </td>
                </tr>
                {category.features.map((feature) => (
                  <tr key={feature.name} className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-gray-400">{feature.name}</td>
                    <td className="py-3 px-6">{renderFeatureValue(feature.dev)}</td>
                    <td className="py-3 px-6">{renderFeatureValue(feature.pro)}</td>
                    <td className="py-3 px-6">{renderFeatureValue(feature.team)}</td>
                    <td className="py-3 px-6">{renderFeatureValue(feature.enterprise)}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeatureComparison;
