import ZenBackground from "@/components/zen/ZenBackground"
import ZenQuoteSection from "@/components/zen/ZenQuoteSection"
import CloudHero from "@/components/cloud/CloudHero"
import Features from "@/components/cloud/Features"
import ProductCatalog from "@/components/cloud/ProductCatalog"
import Regions from "@/components/cloud/Regions"
import Security from "@/components/cloud/Security"
import TechStack from "@/components/cloud/TechStack"
import CallToAction from "@/components/cloud/CallToAction"
import DesktopAppBanner from "@/components/DesktopAppBanner"

export const metadata = {
  title: "Hanzo Cloud - Complete Cloud Platform",
  description:
    "90+ managed services for AI, databases, compute, and more. Build, deploy, and scale modern applications on a unified platform.",
}

export default function CloudPage() {
  return (
    <>
      <ZenBackground />
      <CloudHero />
      <ProductCatalog />
      <ZenQuoteSection
        quote="The engineer who masters the cloud sees no distinction between the physical and the virtual."
        attribution="Principle 27"
      />
      <Features />
      <Regions />
      <Security />
      <TechStack />
      <CallToAction />
      <DesktopAppBanner />
    </>
  )
}
