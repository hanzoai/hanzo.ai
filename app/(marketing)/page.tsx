"use client"

import HeroSection from "@/components/landing/HeroSection"
import TrustedBySection from "@/components/landing/TrustedBySection"
import PlatformOverviewSection from "@/components/landing/PlatformOverviewSection"
import UseCasesSection from "@/components/landing/UseCasesSection"
import DeveloperExperienceSection from "@/components/landing/DeveloperExperienceSection"
import OpenSourceSection from "@/components/landing/OpenSourceSection"
import PricingPreviewSection from "@/components/landing/PricingPreviewSection"
import FinalCTASection from "@/components/landing/FinalCTASection"
export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <main>
        <HeroSection />
        <TrustedBySection />
        <PlatformOverviewSection />
        <UseCasesSection />
        <DeveloperExperienceSection />
        <OpenSourceSection />
        <PricingPreviewSection />
        <FinalCTASection />
      </main>
    </div>
  )
}
