"use client";

import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      {/* Architectural grid background with minimal opacity */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(200,200,200,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(200,200,200,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Background subtle gradient effects - monochrome */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-neutral-800/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neutral-800/30 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 w-full">
        <div className="text-center bg-transparent p-4 sm:p-6 md:p-8 mx-auto">
          {/* Hero Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
            The AI Platform
            <span className="block text-neutral-400">for Developers</span>
          </h1>

          {/* Hero Description */}
          <p className="mt-6 text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto">
            Build, deploy, and scale AI applications with Hanzo.
            From foundation models to production infrastructure,
            everything you need in one platform.
          </p>

          {/* Hero Buttons */}
          <div className="flex justify-center mt-10 gap-4">
            <a
              href="https://docs.hanzo.ai"
              className="px-8 py-3 rounded-lg bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors"
            >
              Get Started
            </a>
            <a
              href="/products"
              className="px-8 py-3 rounded-lg border border-neutral-700 text-white font-medium text-sm hover:bg-neutral-900 transition-colors"
            >
              View Products
            </a>
          </div>

          {/* Hero Features */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "100+ Models", detail: "LLM Gateway" },
              { label: "260+ Tools", detail: "MCP Server" },
              { label: "Multi-Agent", detail: "Orchestration" },
              { label: "Edge Deploy", detail: "Global CDN" },
            ].map((feature) => (
              <div key={feature.label} className="text-center">
                <div className="text-white font-semibold text-lg">{feature.label}</div>
                <div className="text-neutral-500 text-sm">{feature.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
