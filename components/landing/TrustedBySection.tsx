'use client'

import React from "react";
import { motion } from "framer-motion";
import { partnerLogos } from "@/lib/constants/partner-logos";
import { PartnerLogoRow } from "@/components/shared";
import Link from "next/link";

// Companies we've worked with at Hanzo Industries
const clients = [
  "Triller",
  "Damon",
  "Bellabeat",
  "Unikrn",
  "Cover",
  "Casper",
  "Myle",
  "Drumpants",
  "Cove",
  "Aura",
  "KANOA",
  "SKULLY",
];

const trustedBrands = [
  ...clients,
  "AdNexus",
  "Bootnode",
  "Zoo Labs Foundation",
  "Lux Network",
];

const TrustedBySection = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <style>
          {`@keyframes brand-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}
        </style>

        {/* Investors & Partners section - TOP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
            Investors & Partners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Backed by world-class partners
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <PartnerLogoRow
            logos={partnerLogos}
            invert
            className="gap-x-8 gap-y-4"
          />
        </motion.div>

        <div className="flex justify-center mb-16">
          <Link
            href="/signup"
            className="inline-flex items-center px-6 py-3 rounded-full font-medium text-sm bg-primary text-primary-foreground hover:bg-[#cccccc] transition-colors"
          >
            Create account & get started free
          </Link>
        </div>

        {/* Trusted by brands scroller - BOTTOM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6 text-center">
            Trusted By
          </p>
          <div className="relative overflow-hidden border border-border/60 rounded-full bg-secondary/30">
            <div
              className="flex gap-10 py-4 px-6 text-sm text-muted-foreground w-max"
              style={{ animation: "brand-marquee 30s linear infinite" }}
            >
              {[...trustedBrands, ...trustedBrands].map((client, index) => (
                <span key={`${client}-${index}`} className="whitespace-nowrap">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;
