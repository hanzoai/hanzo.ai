import React from "react";
import { motion } from "framer-motion";

// Partners and investors
const partners = [
  { name: "Techstars", year: "'17" },
  { name: "NVIDIA" },
  { name: "Google Cloud" },
  { name: "Amazon" },
  { name: "DigitalOcean" },
  { name: "Nebius" },
];

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

const TrustedBySection = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
            Trusted by the best
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Backed by world-class partners and trusted by industry leaders
          </p>
        </motion.div>

        {/* Partners section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-6 text-center">
            Partners & Investors
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 text-neutral-300 hover:text-white hover:border-neutral-600 transition-all"
              >
                <span className="text-sm font-medium tracking-tight">
                  {partner.name}
                  {partner.year && (
                    <span className="text-[var(--brand)] ml-1">{partner.year}</span>
                  )}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Clients section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-6 text-center">
            Trusted By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            {clients.map((client, index) => (
              <motion.span
                key={client}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="text-neutral-500 hover:text-neutral-300 transition-colors text-sm font-medium"
              >
                {client}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;
