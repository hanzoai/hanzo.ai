import HeroSection from "@/components/datastore/HeroSection"
import KeyFeatures from "@/components/datastore/KeyFeatures"
import EfficiencySection from "@/components/datastore/EfficiencySection"
import UseCasesSection from "@/components/datastore/UseCasesSection"
import GetStartedSection from "@/components/datastore/GetStartedSection"

export const metadata = {
  title: "Hanzo Datastore - Managed Database",
  description:
    "High-performance managed database for modern applications.",
}

export default function DatastorePage() {
  return (
    <>
      <HeroSection />
      <KeyFeatures />
      <EfficiencySection />
      <UseCasesSection />
      <GetStartedSection />
    </>
  )
}
