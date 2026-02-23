import HeroSection from "@/components/ai/HeroSection"
import Features from "@/components/ai/Features"
import AIEngineeringPlatform from "@/components/ai/EngineeringPlatform"
import UseCases from "@/components/ai/UseCases"
import TrustedBy from "@/components/ai/TrustedBy"
import Testimonials from "@/components/ai/Testimonials"
import CallToAction from "@/components/ai/CallToAction"
import SupportedModels from "@/components/ai/SupportedModels"
import UnifiedCapabilities from "@/components/ai/UnifiedCapabilities"
import DesktopAppBanner from "@/components/DesktopAppBanner"

export const metadata = {
  title: "Hanzo AI - AI Engineering Platform",
  description:
    "Build, deploy, and scale AI applications with Hanzo AI engineering platform.",
}

export default function AIPage() {
  return (
    <>
      <HeroSection />
      <Features />
      <UnifiedCapabilities />
      <AIEngineeringPlatform />
      <SupportedModels />
      <UseCases />
      <TrustedBy />
      <Testimonials />
      <CallToAction />
      <DesktopAppBanner />
    </>
  )
}
