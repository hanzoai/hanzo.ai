'use client'

import React from "react";
import Link from "next/link";
import ProductsMenu from "./products-menu";
import { SolutionsMenu } from "./solutions-menu";
import { NavMenu } from "./NavMenu";
import {
  Users, Lightbulb, Palette, Newspaper, Brain, Layers, FileText, ExternalLink,
  GitBranch, Cpu, Cloud, Server, ArrowRight, Mail, Building2, Gift, Shield,
  Activity, BookOpen, GraduationCap, Code, MessageCircle, PenLine, LifeBuoy,
  Briefcase
} from "lucide-react";

// Reusable icon link component for menu items
const IconLink = ({
  href,
  icon: Icon,
  label,
  description,
  external,
  closeMenu,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  description?: string;
  external?: boolean;
  closeMenu: () => void;
}) => {
  const content = (
    <div className="group flex items-start gap-2 py-1">
      <Icon className="h-3.5 w-3.5 mt-0.5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
      <div>
        <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">{label}</span>
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
      </div>
    </div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} onClick={closeMenu} className="block">
      {content}
    </Link>
  );
};

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
      <div className="space-y-0.5">
        <IconLink href="/philosophy" icon={Lightbulb} label="Philosophy" closeMenu={closeMenu} />
        <IconLink href="/leadership" icon={Users} label="Leadership" closeMenu={closeMenu} />
        <IconLink href="/brand" icon={Palette} label="Brand" closeMenu={closeMenu} />
        <IconLink href="/press" icon={Newspaper} label="Press" closeMenu={closeMenu} />
      </div>
    </div>

    {/* Research & Models */}
    <div>
      <h3 className="text-muted-foreground text-xs font-medium mb-3 uppercase tracking-wider">Research</h3>
      <div className="space-y-0.5">
        <IconLink href="/zen" icon={Brain} label="Zen LM" description="30+ open foundation models" closeMenu={closeMenu} />
        <IconLink href="/zen/models" icon={Layers} label="All Models" closeMenu={closeMenu} />
        <IconLink href="https://zenlm.org/research" icon={FileText} label="Papers" external closeMenu={closeMenu} />
        <IconLink href="https://huggingface.co/zenlm" icon={ExternalLink} label="HuggingFace" external closeMenu={closeMenu} />
        <IconLink href="/open-source" icon={GitBranch} label="Open Source" closeMenu={closeMenu} />
      </div>
    </div>

    {/* Products */}
    <div>
      <h3 className="text-muted-foreground text-xs font-medium mb-3 uppercase tracking-wider">Products</h3>
      <div className="space-y-0.5">
        <IconLink href="/dev" icon={Code} label="Hanzo Dev" description="AI coding assistant" closeMenu={closeMenu} />
        <IconLink href="/ai" icon={Cpu} label="AI Platform" closeMenu={closeMenu} />
        <IconLink href="/cloud" icon={Cloud} label="Cloud" closeMenu={closeMenu} />
        <IconLink href="/platform" icon={Server} label="Infrastructure" closeMenu={closeMenu} />
        <IconLink href="/products" icon={ArrowRight} label="All Products →" closeMenu={closeMenu} />
      </div>
    </div>

    {/* Connect & Trust */}
    <div>
      <h3 className="text-muted-foreground text-xs font-medium mb-3 uppercase tracking-wider">Connect</h3>
      <div className="space-y-0.5 mb-6">
        <IconLink href="/contact" icon={Mail} label="Contact Us" closeMenu={closeMenu} />
        <IconLink href="/enterprise" icon={Building2} label="Enterprise" closeMenu={closeMenu} />
        <IconLink href="/referrals" icon={Gift} label="Referral Program" closeMenu={closeMenu} />
      </div>
      <h3 className="text-muted-foreground text-xs font-medium mb-3 uppercase tracking-wider">Trust</h3>
      <div className="space-y-0.5">
        <IconLink href="/security" icon={Shield} label="Security" closeMenu={closeMenu} />
        <IconLink href="/status" icon={Activity} label="System Status" closeMenu={closeMenu} />
      </div>
    </div>
  </div>
);

// Learn dropdown content
const LearnContent = ({ closeMenu }: { closeMenu: () => void }) => (
  <div className="grid grid-cols-3 gap-6">
    <div>
      <h3 className="text-muted-foreground text-xs font-medium mb-3 uppercase tracking-wider">Documentation</h3>
      <div className="space-y-0.5">
        <IconLink href="https://docs.hanzo.ai" icon={BookOpen} label="Docs" external closeMenu={closeMenu} />
        <IconLink href="https://docs.hanzo.ai/tutorials" icon={GraduationCap} label="Tutorials" external closeMenu={closeMenu} />
        <IconLink href="https://docs.hanzo.ai/api" icon={Code} label="API Reference" external closeMenu={closeMenu} />
      </div>
    </div>
    <div>
      <h3 className="text-muted-foreground text-xs font-medium mb-3 uppercase tracking-wider">Community</h3>
      <div className="space-y-0.5">
        <IconLink href="https://github.com/hanzoai" icon={GitBranch} label="GitHub" external closeMenu={closeMenu} />
        <IconLink href="https://discord.gg/hanzo" icon={MessageCircle} label="Discord" external closeMenu={closeMenu} />
        <IconLink href="/blog" icon={PenLine} label="Blog" closeMenu={closeMenu} />
      </div>
    </div>
    <div>
      <h3 className="text-muted-foreground text-xs font-medium mb-3 uppercase tracking-wider">Support</h3>
      <div className="space-y-0.5">
        <IconLink href="/contact" icon={LifeBuoy} label="Support Center" closeMenu={closeMenu} />
        <IconLink href="/status" icon={Activity} label="Status" closeMenu={closeMenu} />
      </div>
    </div>
  </div>
);

const DesktopNav = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      {/* Meet Hanzo dropdown */}
      <NavMenu label="Meet Hanzo">
        {(closeMenu) => <MeetHanzoContent closeMenu={closeMenu} />}
      </NavMenu>

      {/* Platform (Products) dropdown */}
      <ProductsMenu />

      {/* Solutions dropdown */}
      <SolutionsMenu />

      {/* Agency - direct prominent link */}
      <Link
        href="/agency"
        className="text-foreground hover:text-foreground/80 transition-colors text-sm font-semibold"
      >
        Agency
      </Link>

      {/* Learn dropdown */}
      <NavMenu label="Learn">
        {(closeMenu) => <LearnContent closeMenu={closeMenu} />}
      </NavMenu>

      {/* Docs - direct link for easy access */}
      <a
        href="https://docs.hanzo.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
      >
        Docs
      </a>

      {/* Pricing direct link */}
      <Link
        href="/pricing"
        className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
      >
        Pricing
      </Link>
    </div>
  );
};

export default DesktopNav;
