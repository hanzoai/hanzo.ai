'use client'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BRAND_COLOR = "#ffffff";

const testimonials = [
  {
    company: "Ramp",
    logo: "R",
    quote: "Hanzo Dev has dramatically accelerated our team's coding efficiency. I can now write EDA code in a notebook—pulling data, training a model, and evaluating it with basic metrics—and then ask Hanzo to convert that into a Metaflow pipeline. This process saves 1-2 days of routine (and often boring!) work per model.",
    author: "Anton Biryukov",
    title: "Staff Software Engineer",
    link: "/customers/ramp",
  },
  {
    company: "Intercom",
    logo: "I",
    quote: "With Hanzo, we're not just automating customer service—we're elevating it to truly human quality. This lets support teams think more strategically about customer experience and what makes interactions genuinely valuable.",
    author: "Fergal Reid",
    title: "VP of AI",
    link: "/customers/intercom",
  },
  {
    company: "Notion",
    logo: "N",
    quote: "Hanzo Dev is moving our team up a level: we decide what needs to happen, and smooth the process so it can build and verify end-to-end. A big part of my job now is to keep as many instances of Hanzo Dev busy as possible.",
    author: "Simon Last",
    title: "Co-founder",
    link: "/customers/notion",
  },
];

const companyLogos = [
  "Ramp", "Intercom", "Notion", "Stripe", "Shopify", "Vercel",
  "Linear", "Figma", "Pitch", "Loom", "Discord", "Slack",
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p
            className="inline-flex text-xs font-medium rounded-full px-4 py-2 border mb-6"
            style={{ color: BRAND_COLOR, borderColor: `${BRAND_COLOR}4d` }}
          >
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            What developers are saying
          </h2>
        </motion.div>

        {/* Company logos marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 mb-16 overflow-hidden"
        >
          <div className="flex gap-8 animate-marquee">
            {[...companyLogos, ...companyLogos].map((logo, i) => (
              <div
                key={i}
                className="text-neutral-600 text-lg font-medium whitespace-nowrap"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-white/30 transition-colors group"
            >
              {/* Company logo */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: `${BRAND_COLOR}40` }}
                >
                  {testimonial.logo}
                </div>
                <span className="text-white font-semibold">{testimonial.company}</span>
              </div>

              {/* Quote */}
              <blockquote className="text-neutral-300 text-sm mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium text-sm">{testimonial.author}</div>
                  <div className="text-neutral-500 text-xs">{testimonial.title}</div>
                </div>
                <a
                  href={testimonial.link || "#"}
                  className="text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: BRAND_COLOR }}
                >
                  Read story
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
