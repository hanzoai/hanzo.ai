'use client'

import HeroSection from "@/components/sign/HeroSection"
import Features from "@/components/sign/Features"
import Pricing from "@/components/sign/Pricing"
import OpenSource from "@/components/sign/OpenSource"
import CallToAction from "@/components/sign/CallToAction"

export default function SignClient() {
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
