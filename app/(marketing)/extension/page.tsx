import HanzoExtensionHero from "@/components/extension/HanzoExtensionHero"
import HanzoExtensionFeatures from "@/components/extension/HanzoExtensionFeatures"
import HanzoExtensionBrowsers from "@/components/extension/HanzoExtensionBrowsers"
import HanzoExtensionUseCases from "@/components/extension/HanzoExtensionUseCases"
import HanzoExtensionCTA from "@/components/extension/HanzoExtensionCTA"

export const metadata = {
  title: "Hanzo Extension - Browser AI Assistant",
  description:
    "AI-powered browser extension for enhanced web productivity.",
}

export default function ExtensionPage() {
  return (
    <>
      <HanzoExtensionHero />
      <HanzoExtensionFeatures />
      <HanzoExtensionBrowsers />
      <HanzoExtensionUseCases />
      <HanzoExtensionCTA />
    </>
  )
}
