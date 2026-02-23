'use client'


import React from "react";
import { motion } from "framer-motion";

const FooterSection = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <h3 className="text-[var(--white)] font-semibold mb-3">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link === "Discord Server" ? "https://discord.gg/XthHQQj" : "#" || "#"} className="text-muted-foreground hover:text-[var(--white)] text-sm">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const DownloadFooter = () => {
  const usefulLinks = ["Discord Server"];
  const resources = ["Support"];
  const contact = ["Developer Docs"];
  const legal = ["Terms & Service", "Privacy Policy"];
  const promptLibrary = [
    "Discover Prompts for Hanzo AI",
    "Writing prompts",
    "Essay prompts",
    "Business prompts"
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[var(--black)]/80 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-5 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <FooterSection title="Useful Links" links={usefulLinks} />
          <FooterSection title="Resources" links={resources} />
          <FooterSection title="Contact" links={contact} />
          <FooterSection title="Legal Information" links={legal} />
          <FooterSection title="Prompt Library" links={promptLibrary} />
        </motion.div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-muted-foreground text-sm">
          © 2025 Hanzo AI. All rights reserved. Not associated with or endorsed by ChatGPT, Perplexity, or Claude.
        </div>
      </div>
    </section>
  );
};

export default DownloadFooter;
