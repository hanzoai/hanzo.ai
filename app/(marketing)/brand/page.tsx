'use client'

import Link from "next/link";

import React from "react";
import { Button } from "@hanzo/ui";
import { motion } from "framer-motion";

import {
  Palette,
  Download,
  Type,
  Grid3X3,
  Sparkles,
  ArrowRight,
  CheckCircle,
  ExternalLink
} from "lucide-react";

interface ColorSwatchProps {
  name: string;
  hex: string;
  className: string;
}

const ColorSwatch = ({ name, hex, className }: ColorSwatchProps) => (
  <div className="space-y-2">
    <div className={`w-full aspect-square rounded-lg ${className} border border-border`}></div>
    <div className="text-sm font-medium text-foreground">{name}</div>
    <div className="text-xs text-muted-foreground">{hex}</div>
  </div>
);

interface TypographyExampleProps {
  name: string;
  className: string;
  description: string;
}

const TypographyExample = ({ name, className, description }: TypographyExampleProps) => (
  <div className="space-y-2 mb-10">
    <div className={`${className}`}>{name}</div>
    <div className="text-xs text-muted-foreground">{description}</div>
  </div>
);

interface ComponentShowcaseProps {
  title: string;
  children: React.ReactNode;
}

const ComponentShowcase = ({ title, children }: ComponentShowcaseProps) => (
  <div className="border border-border rounded-xl overflow-hidden">
    <div className="p-4 border-b border-border bg-secondary/50">
      <h3 className="text-sm font-medium text-foreground">{title}</h3>
    </div>
    <div className="p-8 flex flex-wrap gap-4 items-center justify-center bg-secondary/30">
      {children}
    </div>
  </div>
);

const Brand = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      
      

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15"
              style={{
                background: `radial-gradient(circle, var(--primary) 0%, transparent 70%)`,
                filter: "blur(100px)",
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-10"
              style={{
                background: `radial-gradient(circle, var(--primary) 0%, transparent 70%)`,
                filter: "blur(80px)",
              }}
            />
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
                style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)", color: "var(--primary)" }}
              >
                <Palette className="w-3.5 h-3.5" />
                Design System
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
              >
                <span className="text-foreground">Hanzo Brand</span>
                <br />
                <span className="text-muted-foreground">Guidelines.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto"
              >
                A comprehensive guide for creating consistent, elegant, and minimal interfaces
                across our platform and products.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="flex flex-wrap items-center justify-center gap-4"
              >
                <a
                  href="#assets"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm bg-primary text-primary-foreground"

                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Assets
                </a>
                <Link
                  href="/press"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-secondary text-sm text-foreground"
                >
                  Press Kit
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-background to-neutral-900/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Design Principles</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our core principles guide every design decision we make.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Sparkles,
                  title: "Minimal & Focused",
                  description: "Reduce visual noise and focus on essential elements. Each design decision should have purpose and enhance the user experience."
                },
                {
                  icon: Type,
                  title: "Elegant & Refined",
                  description: "Use subtle gradients, appropriate spacing, and thoughtful typography to create elegant and sophisticated interfaces."
                },
                {
                  icon: Grid3X3,
                  title: "Consistent & Cohesive",
                  description: "Maintain consistency in design patterns, spacing, and visual hierarchy to create a unified experience across all touchpoints."
                }
              ].map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-white/30 transition-colors"
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: "color-mix(in srgb, var(--primary) 10%, transparent)" }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{principle.title}</h3>
                    <p className="text-sm text-muted-foreground">{principle.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Color Palette</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our colors are carefully selected to create a bold, modern aesthetic.
              </p>
            </motion.div>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-medium mb-6 text-foreground">Brand Colors</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <ColorSwatch name="Hanzo Red" hex="#FD4444" className="bg-[#FD4444]" />
                  <ColorSwatch name="Pure Black" hex="#000000" className="bg-background" />
                  <ColorSwatch name="Pure White" hex="#FFFFFF" className="bg-primary" />
                  <ColorSwatch name="Deep Gray" hex="#171717" className="bg-[#171717]" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-medium mb-6 text-foreground">Gray Scale</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
                  <ColorSwatch name="Gray 900" hex="#171717" className="bg-[#171717]" />
                  <ColorSwatch name="Gray 800" hex="#262626" className="bg-[#262626]" />
                  <ColorSwatch name="Gray 700" hex="#404040" className="bg-[#404040]" />
                  <ColorSwatch name="Gray 600" hex="#525252" className="bg-[#525252]" />
                  <ColorSwatch name="Gray 500" hex="#737373" className="bg-[#737373]" />
                  <ColorSwatch name="Gray 400" hex="#A3A3A3" className="bg-[#A3A3A3]" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-medium mb-6 text-foreground">Gradients</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <ColorSwatch
                    name="Brand Glow"
                    hex="Radial"
                    className="bg-gradient-to-br from-white/30 to-transparent"
                  />
                  <ColorSwatch
                    name="White Fade"
                    hex="Linear"
                    className="bg-gradient-to-b from-white/10 to-transparent"
                  />
                  <ColorSwatch
                    name="Gray Fade"
                    hex="Linear"
                    className="bg-gradient-to-r from-neutral-800/50 to-transparent"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="py-16 px-4 md:px-8 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Typography</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Clean, readable typography is essential to our design language.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto bg-secondary/50 border border-border rounded-xl p-8"
            >
              <TypographyExample
                name="Heading 1"
                className="text-4xl md:text-6xl font-bold tracking-tight text-foreground"
                description="Large page titles, hero sections"
              />
              <TypographyExample
                name="Heading 2"
                className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
                description="Section titles, major divisions"
              />
              <TypographyExample
                name="Heading 3"
                className="text-2xl font-semibold text-foreground"
                description="Subsection headings, feature headings"
              />
              <TypographyExample
                name="Heading 4"
                className="text-xl font-medium text-foreground"
                description="Card titles, minor section headings"
              />
              <TypographyExample
                name="Body Large"
                className="text-lg leading-relaxed text-foreground/80"
                description="Featured paragraphs, pull quotes"
              />
              <TypographyExample
                name="Body"
                className="text-base leading-relaxed text-muted-foreground"
                description="Primary body text"
              />
              <TypographyExample
                name="Caption"
                className="text-sm text-muted-foreground"
                description="Supporting text, metadata, labels"
              />
            </motion.div>
          </div>
        </section>

        {/* Components */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Components</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Reusable UI components that maintain consistency across our products.
              </p>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <ComponentShowcase title="Buttons">
                  <Button
                    className="rounded-full"

                  >
                    Primary Button
                  </Button>
                  <Button variant="outline" className="rounded-full border-border text-foreground hover:bg-secondary">
                    Secondary Button
                  </Button>
                  <Button variant="ghost" className="text-foreground hover:bg-secondary">
                    Ghost Button
                  </Button>
                  <Button variant="link" className="text-foreground">
                    Link Button
                  </Button>
                </ComponentShowcase>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <ComponentShowcase title="Cards">
                  <div className="w-full max-w-md p-6 rounded-xl bg-secondary/50 border border-border hover:border-white/30 transition-colors">
                    <h3 className="text-xl font-medium mb-2 text-foreground">Card Title</h3>
                    <p className="text-muted-foreground mb-4">This is a standard card component with hover states and consistent styling.</p>
                    <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-secondary">
                      Learn More
                    </Button>
                  </div>
                </ComponentShowcase>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <ComponentShowcase title="Badges">
                  <div
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)", color: "var(--primary)" }}
                  >
                    Brand Badge
                  </div>
                  <div className="px-3 py-1 rounded-full bg-secondary border border-border text-foreground/80 text-sm font-medium">
                    Default Badge
                  </div>
                  <div className="px-3 py-1 rounded-full bg-primary/10 border border-border text-foreground/70 text-sm font-medium">
                    Success Badge
                  </div>
                </ComponentShowcase>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Download Assets */}
        <section id="assets" className="py-16 px-4 md:px-8 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Download Assets</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get our brand assets for your projects and presentations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Logo Package", description: "SVG, PNG, and PDF formats", size: "2.4 MB" },
                { title: "Icon Set", description: "500+ custom icons", size: "8.1 MB" },
                { title: "Brand Guide", description: "Complete PDF guidelines", size: "4.2 MB" }
              ].map((asset, index) => (
                <motion.a
                  key={asset.title}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-white/30 transition-colors group"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: "color-mix(in srgb, var(--primary) 10%, transparent)" }}
                  >
                    <Download className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-foreground transition-colors">
                    {asset.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{asset.description}</p>
                  <span className="text-xs text-muted-foreground">{asset.size}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-neutral-900/30 to-background relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Need brand assistance?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Our team can help with custom assets, co-branding requests, and other brand-related inquiries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-all hover:opacity-90 text-base bg-primary text-primary-foreground"

              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="mailto:brand@hanzo.ai"
                className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-secondary text-base text-foreground"
              >
                brand@hanzo.ai
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default Brand;
