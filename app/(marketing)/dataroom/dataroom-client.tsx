'use client'

import HeroSection from "@/components/dataroom/HeroSection"
import Features from "@/components/dataroom/Features"
import Pricing from "@/components/dataroom/Pricing"
import OpenSource from "@/components/dataroom/OpenSource"
import CallToAction from "@/components/dataroom/CallToAction"

export default function DataroomClient() {
  return (
    <>
      <HeroSection />
      <Features />
      <Pricing />
      <OpenSource />
      <CallToAction />
    </>
  )
}
