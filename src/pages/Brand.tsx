
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ColorSwatch = ({ name, hex, className }) => (
  <div className="space-y-2">
    <div className={`w-full aspect-square rounded-lg ${className}`}></div>
    <div className="text-sm font-medium">{name}</div>
    <div className="text-xs text-gray-500">{hex}</div>
  </div>
);

const TypographyExample = ({ name, className, description }) => (
  <div className="space-y-2 mb-10">
    <div className={`${className}`}>{name}</div>
    <div className="text-xs text-gray-500">{description}</div>
  </div>
);

const ComponentShowcase = ({ title, children }) => (
  <div className="border border-gray-800 rounded-xl overflow-hidden">
    <div className="p-4 border-b border-gray-800 bg-black/40">
      <h3 className="text-sm font-medium text-white">{title}</h3>
    </div>
    <div className="p-8 flex flex-wrap gap-4 items-center justify-center bg-black/20">
      {children}
    </div>
  </div>
);

const Brand = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Hanzo Design System - Brand Guidelines</title>
        <meta name="description" content="The Hanzo design system, typography, colors, and components. A guide for consistent visual design across our platform." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-gray-900 text-gray-300 text-sm font-medium mb-4">
              Design System
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/70">
              Hanzo Brand
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive guide for creating consistent, elegant, and minimal interfaces across our platform.
            </p>
          </div>
          
          {/* Design Principles */}
          <section className="mb-24">
            <h2 className="text-2xl font-bold mb-8 text-center">Design Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl bg-gradient-to-b from-gray-900 to-black border border-gray-800">
                <h3 className="text-xl font-bold mb-4">Minimal & Focused</h3>
                <p className="text-gray-400">
                  Reduce visual noise and focus on essential elements. Each design decision should have purpose and enhance the user experience.
                </p>
              </div>
              <div className="p-8 rounded-xl bg-gradient-to-b from-gray-900 to-black border border-gray-800">
                <h3 className="text-xl font-bold mb-4">Elegant & Refined</h3>
                <p className="text-gray-400">
                  Use subtle gradients, appropriate spacing, and thoughtful typography to create elegant and sophisticated interfaces.
                </p>
              </div>
              <div className="p-8 rounded-xl bg-gradient-to-b from-gray-900 to-black border border-gray-800">
                <h3 className="text-xl font-bold mb-4">Consistent & Cohesive</h3>
                <p className="text-gray-400">
                  Maintain consistency in design patterns, spacing, and visual hierarchy to create a unified experience across all touchpoints.
                </p>
              </div>
            </div>
          </section>
          
          {/* Color Palette */}
          <section className="mb-24">
            <h2 className="text-2xl font-bold mb-8 text-center">Color Palette</h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-medium mb-6">Core Colors</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <ColorSwatch name="Pure Black" hex="#000000" className="bg-black" />
                  <ColorSwatch name="Deep Black" hex="#101010" className="bg-[#101010]" />
                  <ColorSwatch name="Pure White" hex="#FFFFFF" className="bg-white" />
                  <ColorSwatch name="Off White" hex="#F7F7F7" className="bg-[#F7F7F7]" />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-6">Gray Scale</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
                  <ColorSwatch name="Gray 900" hex="#171717" className="bg-[#171717]" />
                  <ColorSwatch name="Gray 800" hex="#262626" className="bg-[#262626]" />
                  <ColorSwatch name="Gray 700" hex="#404040" className="bg-[#404040]" />
                  <ColorSwatch name="Gray 600" hex="#525252" className="bg-[#525252]" />
                  <ColorSwatch name="Gray 500" hex="#737373" className="bg-[#737373]" />
                  <ColorSwatch name="Gray 400" hex="#A3A3A3" className="bg-[#A3A3A3]" />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-6">Subtle Gradients</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <ColorSwatch 
                    name="White Fade" 
                    hex="Linear" 
                    className="bg-gradient-to-b from-white/10 to-transparent" 
                  />
                  <ColorSwatch 
                    name="Gray Fade" 
                    hex="Linear" 
                    className="bg-gradient-to-r from-gray-800/20 to-transparent" 
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Typography */}
          <section className="mb-24">
            <h2 className="text-2xl font-bold mb-8 text-center">Typography</h2>
            <div className="max-w-3xl mx-auto">
              <TypographyExample 
                name="Heading 1" 
                className="text-4xl md:text-6xl font-bold tracking-tight" 
                description="Large page titles, hero sections" 
              />
              <TypographyExample 
                name="Heading 2" 
                className="text-3xl md:text-4xl font-bold tracking-tight" 
                description="Section titles, major divisions" 
              />
              <TypographyExample 
                name="Heading 3" 
                className="text-2xl font-semibold" 
                description="Subsection headings, feature headings" 
              />
              <TypographyExample 
                name="Heading 4" 
                className="text-xl font-medium" 
                description="Card titles, minor section headings" 
              />
              <TypographyExample 
                name="Body Large" 
                className="text-lg leading-relaxed text-gray-300" 
                description="Featured paragraphs, pull quotes" 
              />
              <TypographyExample 
                name="Body" 
                className="text-base leading-relaxed text-gray-400" 
                description="Primary body text" 
              />
              <TypographyExample 
                name="Caption" 
                className="text-sm text-gray-500" 
                description="Supporting text, metadata, labels" 
              />
            </div>
          </section>
          
          {/* Components */}
          <section className="mb-24">
            <h2 className="text-2xl font-bold mb-8 text-center">Components</h2>
            <div className="space-y-12">
              <ComponentShowcase title="Buttons">
                <Button variant="default" size="lg">Primary Button</Button>
                <Button variant="outline" size="lg">Secondary Button</Button>
                <Button variant="ghost" size="lg">Ghost Button</Button>
                <Button variant="link" size="lg">Link Button</Button>
              </ComponentShowcase>
              
              <ComponentShowcase title="Cards">
                <div className="w-full max-w-md p-6 rounded-xl bg-gradient-to-b from-gray-900 to-black border border-gray-800">
                  <h3 className="text-xl font-medium mb-2">Card Title</h3>
                  <p className="text-gray-400 mb-4">This is a standard card component with a subtle gradient background.</p>
                  <Button variant="outline" size="sm">Learn More</Button>
                </div>
              </ComponentShowcase>
              
              <ComponentShowcase title="Badges">
                <div className="px-3 py-1 rounded-full bg-gray-900 text-gray-300 text-sm font-medium">Default Badge</div>
                <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">Glass Badge</div>
              </ComponentShowcase>
            </div>
          </section>
          
          {/* Grid & Spacing */}
          <section className="mb-24">
            <h2 className="text-2xl font-bold mb-8 text-center">Grid & Spacing</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900 p-4 rounded-lg mb-8">
                <div className="grid grid-cols-4 gap-4 h-64">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="bg-gray-800 rounded flex items-center justify-center">
                      <span className="text-xs text-gray-500">{i+1}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3 text-gray-400">
                <p>We use a 4px base unit for all spacing measurements.</p>
                <p>Common spacing values: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px.</p>
                <p>Baseline grid: 4px with a primary line height of 1.5.</p>
              </div>
            </div>
          </section>
          
          {/* Icons & Illustrations */}
          <section>
            <h2 className="text-2xl font-bold mb-8 text-center">Icons & Illustrations</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-400 mb-8">
                We use minimalist, monochrome SVG graphics with subtle animations to emphasize important concepts
                without compromising our clean, elegant aesthetic.
              </p>
              <div className="flex flex-wrap gap-8 justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M15 4L9 12L15 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M9 4L15 12L9 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Brand;
