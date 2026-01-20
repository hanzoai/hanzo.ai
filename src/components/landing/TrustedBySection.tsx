import React from "react";
import { motion } from "framer-motion";

const partners = [
  {
    name: "Techstars",
    year: "'17",
    svg: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: "NVIDIA",
    svg: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.421 0-.823-.057-1.167-.161v-4.412c1.305.145 1.568.729 2.34 1.972l1.735-1.455s-1.294-1.804-3.51-1.804a6.6 6.6 0 0 0-.565.023v.06zM8.948 4.236v1.932a8.2 8.2 0 0 1 .493-.022c5.101-.078 8.452 4.35 8.452 4.35s-3.97 4.861-7.992 4.861a6.3 6.3 0 0 1-.953-.074v1.884c.28.034.563.058.854.058 3.648 0 6.29-1.884 8.819-4.05.419.327 2.128 1.147 2.479 1.499-2.246 1.924-7.482 4.394-11.206 4.394-.319 0-.632-.019-.946-.054V21.2H6.6V3.924c.765-.098 1.545-.149 2.348-.149 3.882 0 6.724 1.476 6.724 1.476l-1.258 1.702s-2.062-1.236-5.209-1.236c-.088 0-.173.003-.257.008v-.011H8.948v.522z" />
      </svg>
    ),
  },
  {
    name: "Google Cloud",
    svg: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.19 5.016c1.653 0 3.126.591 4.291 1.563l3.2-3.2C17.545 1.478 15.063.4 12.19.4 7.479.4 3.45 3.278 1.616 7.336l3.728 2.893c.886-2.649 3.354-4.595 6.428-4.595l.418-.618z" />
        <path d="M22.38 12.19c0-.84-.076-1.647-.215-2.423H12.19v4.58h5.713a4.88 4.88 0 0 1-2.12 3.2l3.424 2.66c2-1.847 3.173-4.566 3.173-7.817z" />
        <path d="M5.344 14.229a7.12 7.12 0 0 1-.386-2.29c0-.797.14-1.566.386-2.289L1.616 6.758A11.83 11.83 0 0 0 .4 12.19c0 1.915.46 3.726 1.269 5.326l3.675-3.287z" />
        <path d="M12.19 23.58c3.083 0 5.67-1.021 7.56-2.767l-3.425-2.66c-1.014.68-2.312 1.082-4.135 1.082-3.074 0-5.542-1.946-6.428-4.595l-3.728 2.893c1.834 4.058 5.863 6.047 10.156 6.047z" />
      </svg>
    ),
  },
  {
    name: "Nebius",
    svg: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
  {
    name: "DigitalOcean",
    svg: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 5.52 0 10-4.48 10-10 0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3-8c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "100K+", label: "Developers" },
  { value: "50M+", label: "API Calls/Day" },
  { value: "99.99%", label: "Uptime" },
  { value: "150+", label: "Countries" },
];

const TrustedBySection = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4">
            Backed by world-class investors
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
            Trusted by developers worldwide
          </h2>
        </motion.div>

        {/* Partner logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-2 text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              {partner.svg}
              <span className="text-sm font-medium tracking-tight">
                {partner.name}
                {partner.year && (
                  <span className="text-[#fd4444] ml-1">{partner.year}</span>
                )}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-neutral-800"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;
