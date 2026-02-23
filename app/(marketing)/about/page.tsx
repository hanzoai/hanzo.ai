import AboutHero from "@/components/about/AboutHero"
import HistoryTimeline from "@/components/about/HistoryTimeline"
import ZenPrinciples from "@/components/about/ZenPrinciples"
import SenseiMethod from "@/components/about/SenseiMethod"
import OurStory from "@/components/about/OurStory"

export const metadata = {
  title: "About Hanzo Industries - Our Story and Evolution",
  description:
    "Learn about Hanzo Industries' journey from a crowd-powered marketing platform to a Techstars-backed AI venture, and our guiding philosophy.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="pt-20">
        <AboutHero />
        <OurStory />
        <HistoryTimeline />
        <ZenPrinciples />
        <SenseiMethod />
      </main>
    </div>
  )
}
