'use client'

import HeroSection from "@/components/commerce/HeroSection"
import Features from "@/components/commerce/Features"
import APIEndpoints from "@/components/commerce/APIEndpoints"
import UseCases from "@/components/commerce/UseCases"
import TechStack from "@/components/commerce/TechStack"
import Integrations from "@/components/commerce/Integrations"
import CallToAction from "@/components/commerce/CallToAction"

export default function CommerceClient() {
  return (
    <>
      <HeroSection />
      <Features />
      <APIEndpoints />
      <UseCases />
      <Integrations />
      <TechStack />
      <CallToAction />
    </>
  )
}
