'use client'

import React from "react";
import Link from "next/link";
import ProductsMenu from "./products-menu";
import { SolutionsMenu } from "./solutions-menu";
import { NavMenu } from "./NavMenu";

// Meet Hanzo dropdown content
const MeetHanzoContent = ({ closeMenu }: { closeMenu: () => void }) => (
  <div className="grid grid-cols-4 gap-8">
    {/* Featured - About Hanzo */}
    <div className="col-span-1">
      <div className="p-4 rounded-xl bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-border/50 mb-4">
        <h3 className="text-foreground font-semibold mb-2">Hanzo AI</h3>
        <p className="text-muted-foreground text-xs mb-3 leading-relaxed">
          Building frontier AI infrastructure since 2017. Techstars-backed.
        </p>
        <Link
          href="/team"
          onClick={closeMenu}
          className="inline-flex items-center text-xs font-medium text-foreground hover:text-foreground transition-colors"
        >
          Meet the team →
        </Link>
      </div>
      <ul className="space-y-2">
        <li><Link href="/philosophy" onClick={closeMenu} className="text-sm text-foreground/80 hover:text-foreground transition-colors">Philosophy</Link></li>
        <li><Link href="/leadership" onClick={closeMenu} className="text-sm text-foreground/80 hover:text-foreground transition-colors">Leadership</Link></li>
        <li><Link href="/brand" onClick={closeMenu} className="text-sm text-foreground/80 hover:text-foreground transition-colors">Brand</Link></li>
        <li><Link href="/press" onClick={closeMenu} className="text-sm text-foreground/80 hover:text-foreground transition-colors">Press</Link></li>
      </ul>
    </div>

    {/* Research & Models */}
    <div>
      <h3 className="text-muted-foreground text-xs font-medium mb-3 uppercase tracking-wider">Research</h3>
      <ul className="space-y-2">
        <li>
          <Link href="/zen" onClick={closeMenu} className="group flex items-start gap-2">
            <span className="text-foreground text-lg">🧠</span>
            <div>
              <span className="text-sm text-foreground font-medium group-hover:text-foreground transition-colors">Zen LM</span>
              <p className="text-xs text-muted-foreground">30+ open foundation models</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/zen/models" onClick={closeMenu} className="text-sm text-foreground/80 hover:text-foreground transition-colors">All Models</Link>
        </li>
        <li>
          <a href="https://zenlm.org/research" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Papers</a>
        </li>
        <li>
          <a href="https://huggingface.co/zenlm" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/80 hover:text-foreground transition-colors">HuggingFace</a>
        </li>
        <li>
          <Link href="/open-source" onClick={closeMenu} className="text-sm text-foreground/80 hover:text-foreground transition-colors">Open Source</Link>
        </li>
      </ul>
    </div>

    {/* Products */}
    <div>
      <h3 className="text-muted-foreground text-xs font-medium mb-3 uppercase tracking-wider">Products</h3>
      <ul className="space-y-2">
        <li>
          <Link href="/dev" onClick={closeMenu} className="group flex items-start gap-2">
            <span className="text-foreground text-lg">⚡</span>
            <div>
              <span className="text-sm text-foreground font-medium group-hover:text-foreground transition-colors">Hanzo Dev</span>
              <p className="text-xs text-muted-foreground">AI coding assistant</p>
            </div>
          </Link>
        </li>
        <li><Link href="/ai" onClick={closeMenu} className="text-sm text-foreground/80 hover:text-foreground transition-colors">AI Platform</Link></li>
        <li><Link href="/cloud" onClick={closeMenu} className="text-sm text-foreground/80 hover:text-foreground transition-colors">Cloud</Link></li>
        <li><Link href="/platform" onClick={closeMenu} className="text-sm text-foreground/80 hover:text-foreground transition-colors">Infrastructure</Link></li>
        <li><Link href="/products" onClick={closeMenu} className="text-sm text-foreground/80 hover:text-foreground transition-colors">All Products →</Link></li>
      </ul>
    </div>

    {/* Connect & Trust */}
    <div>
      <h3 className="text-muted-foreground text-xs font-medium mb-3 uppercase tracking-wider">Connect</h3>
      <ul className="space-y-2 mb-6">
        <li><Link href="/contact" onClick={closeMenu} className="text-sm text-foreground/80 hover:text-foreground transition-colors">Contact Us</Link></li>
        <li><Link href="/enterprise" onClick={closeMenu} className="text-sm text-foreground/80 hover:text-foreground transition-colors">Enterprise</Link></li>
        <li><Link href="/referrals" onClick={closeMenu} className="text-sm text-foreground/80 hover:text-foreground transition-colors">Referral Program</Link></li>
      </ul>
      <h3 className="text-muted-foreground text-xs font-medium mb-3 uppercase tracking-wider">Trust</h3>
      <ul className="space-y-2">
        <li><Link href="/security" onClick={closeMenu} className="text-sm text-foreground/80 hover:text-foreground transition-colors">Security</Link></li>
        <li><Link href="/status" onClick={closeMenu} className="text-sm text-foreground/80 hover:text-foreground transition-colors">System Status</Link></li>
      </ul>
    </div>
  </div>
);

// Learn dropdown content
const LearnContent = ({ closeMenu }: { closeMenu: () => void }) => (
  <div className="grid grid-cols-3 gap-6">
    <div>
      <h3 className="text-muted-foreground text-xs font-medium mb-3 uppercase tracking-wider">Documentation</h3>
      <ul className="space-y-2">
        <li><a href="https://docs.hanzo.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Docs</a></li>
        <li><a href="https://docs.hanzo.ai/tutorials" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Tutorials</a></li>
        <li><a href="https://docs.hanzo.ai/api" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/80 hover:text-foreground transition-colors">API Reference</a></li>
      </ul>
    </div>
    <div>
      <h3 className="text-muted-foreground text-xs font-medium mb-3 uppercase tracking-wider">Community</h3>
      <ul className="space-y-2">
        <li><a href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/80 hover:text-foreground transition-colors">GitHub</a></li>
        <li><a href="https://discord.gg/hanzo" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Discord</a></li>
        <li><Link href="/blog" onClick={closeMenu} className="text-sm text-foreground/80 hover:text-foreground transition-colors">Blog</Link></li>
      </ul>
    </div>
    <div>
      <h3 className="text-muted-foreground text-xs font-medium mb-3 uppercase tracking-wider">Support</h3>
      <ul className="space-y-2">
        <li><Link href="/contact" onClick={closeMenu} className="text-sm text-foreground/80 hover:text-foreground transition-colors">Support Center</Link></li>
        <li><Link href="/status" onClick={closeMenu} className="text-sm text-foreground/80 hover:text-foreground transition-colors">Status</Link></li>
      </ul>
    </div>
  </div>
);

const DesktopNav = () => {
  return (
    <div className="hidden md:flex items-center space-x-6">
      {/* Meet Hanzo dropdown */}
      <NavMenu label="Meet Hanzo">
        {(closeMenu) => <MeetHanzoContent closeMenu={closeMenu} />}
      </NavMenu>

      {/* Platform (Products) dropdown */}
      <ProductsMenu />

      {/* Solutions dropdown */}
      <SolutionsMenu />

      {/* Pricing direct link */}
      <Link
        href="/pricing"
        className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
      >
        Pricing
      </Link>

      {/* Learn dropdown */}
      <NavMenu label="Learn">
        {(closeMenu) => <LearnContent closeMenu={closeMenu} />}
      </NavMenu>
    </div>
  );
};

export default DesktopNav;
