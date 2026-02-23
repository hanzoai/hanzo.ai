'use client'


import React from "react";
import { motion } from "framer-motion";
import { PartnerLogoRow } from "@/components/shared";
import { partnerLogos } from "@/lib/constants/partner-logos";

const HanzoCodeCompanies = () => {

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[var(--black)]/60">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-xl text-muted-foreground">Trusted by engineers at</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <PartnerLogoRow logos={partnerLogos} invert className="opacity-70" />
        </motion.div>
      </div>
    </section>
  );
};

export default HanzoCodeCompanies;
