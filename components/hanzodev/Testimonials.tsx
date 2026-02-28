'use client'

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    company: "Damon Motorcycles",
    logo: "D",
    quote: "Hanzo Dev accelerated our engineering velocity dramatically. Having an AI coding agent that understands our entire codebase meant our team could focus on product decisions instead of boilerplate.",
    author: "Jay Giraud",
    title: "CEO, Damon Motorcycles",
    link: "/customers",
  },
  {
    company: "Bellabeat",
    logo: "B",
    quote: "We went from idea to working prototype in days instead of weeks. Hanzo Dev understands context across our entire stack and keeps our team shipping fast without technical debt.",
    author: "Sandro Mur",
    title: "CEO, Bellabeat",
    link: "/customers",
  },
  {
    company: "SKULLY",
    logo: "S",
    quote: "Hanzo Dev is like having a senior engineer pair-programming with every developer on the team simultaneously. The productivity gains are real and measurable.",
    author: "Marcus Weller",
    title: "CEO, SKULLY Technologies",
    link: "/customers",
  },
];

const companyLogos = [
  "Triller", "Damon", "Bellabeat", "Unikrn", "Cover", "Casper",
  "SKULLY", "Aura", "KANOA", "Myle", "Cove", "Zoo Labs",
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p
            className="inline-flex text-xs font-medium rounded-full px-4 py-2 border mb-6"
            style={{ color: "var(--primary)", borderColor: "color-mix(in srgb, var(--primary) 30%, transparent)" }}
          >
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
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
                className="text-muted-foreground/60 text-lg font-medium whitespace-nowrap"
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
              className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-white/30 transition-colors group"
            >
              {/* Company logo */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-foreground font-bold"
                  style={{ backgroundColor: "color-mix(in srgb, var(--primary) 25%, transparent)" }}
                >
                  {testimonial.logo}
                </div>
                <span className="text-foreground font-semibold">{testimonial.company}</span>
              </div>

              {/* Quote */}
              <blockquote className="text-foreground/80 text-sm mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-foreground font-medium text-sm">{testimonial.author}</div>
                  <div className="text-muted-foreground text-xs">{testimonial.title}</div>
                </div>
                <a
                  href={testimonial.link || "#"}
                  className="text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"

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
