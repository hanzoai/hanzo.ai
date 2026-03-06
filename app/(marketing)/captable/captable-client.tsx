'use client'

import HeroSection from "@/components/captable/HeroSection"
import Features from "@/components/captable/Features"
import Pricing from "@/components/captable/Pricing"
import OpenSource from "@/components/captable/OpenSource"
import CallToAction from "@/components/captable/CallToAction"

export default function CaptableClient() {
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
