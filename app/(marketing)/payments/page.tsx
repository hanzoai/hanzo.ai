'use client'


import React from "react";
import HeroSection from "@/components/payments/HeroSection";
import PaymentsSuite from "@/components/payments/PaymentsSuite";
import Compliance from "@/components/payments/Compliance";
import CheckoutExperience from "@/components/payments/CheckoutExperience";
import Integrations from "@/components/payments/Integrations";
import UseCases from "@/components/payments/UseCases";
import TrustedBy from "@/components/payments/TrustedBy";
import CallToAction from "@/components/payments/CallToAction";

const Payments = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      
      <main>
        <HeroSection />
        <PaymentsSuite />
        <Compliance />
        <CheckoutExperience />
        <Integrations />
        <UseCases />
        <TrustedBy />
        <CallToAction />
      </main>
      
    </div>
  );
};

export default Payments;
