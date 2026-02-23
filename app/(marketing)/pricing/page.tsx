"use client"

import { useState } from "react"
import PricingHeader from "@/components/pricing/PricingHeader"
import PersonalPlans from "@/components/pricing/PersonalPlans"
import TeamEnterprisePlans from "@/components/pricing/TeamEnterprisePlans"
import APIPricing from "@/components/pricing/APIPricing"
import BlockchainPricing from "@/components/pricing/BlockchainPricing"
import InfrastructurePricing from "@/components/pricing/InfrastructurePricing"
import FeatureComparison from "@/components/pricing/FeatureComparison"
import PricingFAQ from "@/components/pricing/PricingFAQ"
import BillingManagement from "@/components/pricing/BillingManagement"

const tabs = [
  { id: "personal", label: "Personal" },
  { id: "team", label: "Team & Enterprise" },
  { id: "api", label: "API" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "blockchain", label: "Blockchain" },
]

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("personal")

  const renderTabContent = () => {
    switch (activeTab) {
      case "personal":
        return (
          <>
            <PersonalPlans />
            <FeatureComparison />
            <PricingFAQ />
            <BillingManagement />
          </>
        )
      case "team":
        return (
          <>
            <TeamEnterprisePlans />
            <FeatureComparison />
            <PricingFAQ />
            <BillingManagement />
          </>
        )
      case "api":
        return <APIPricing />
      case "infrastructure":
        return <InfrastructurePricing />
      case "blockchain":
        return <BlockchainPricing />
      default:
        return <PersonalPlans />
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <PricingHeader />

        {/* Tab Navigation */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex justify-center">
            <div className="bg-gray-900/50 rounded-full p-1 border border-gray-800">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </main>
    </div>
  )
}
