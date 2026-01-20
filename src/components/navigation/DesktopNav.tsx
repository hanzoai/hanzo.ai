import React from "react";
import { Link } from "react-router-dom";
import ProductsMenu from "./products-menu";
import { SolutionsMenu } from "./solutions-menu";
import { useTheme } from "@/contexts/ThemeContext";
import { NavMenu } from "./NavMenu";

// Meet Hanzo dropdown content
const MeetHanzoContent = ({ closeMenu }: { closeMenu: () => void }) => (
  <div className="grid grid-cols-4 gap-8">
    {/* Featured - About Hanzo */}
    <div className="col-span-1">
      <div className="p-4 rounded-xl bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700/50 mb-4">
        <h3 className="text-white font-semibold mb-2">Hanzo AI</h3>
        <p className="text-neutral-400 text-xs mb-3 leading-relaxed">
          Building frontier AI infrastructure since 2017. Techstars-backed.
        </p>
        <Link
          to="/team"
          onClick={closeMenu}
          className="inline-flex items-center text-xs font-medium text-[#fd4444] hover:text-white transition-colors"
        >
          Meet the team →
        </Link>
      </div>
      <ul className="space-y-2">
        <li><Link to="/philosophy" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Philosophy</Link></li>
        <li><Link to="/leadership" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Leadership</Link></li>
        <li><Link to="/brand" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Brand</Link></li>
        <li><Link to="/press" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Press</Link></li>
      </ul>
    </div>

    {/* Research & Models */}
    <div>
      <h3 className="text-neutral-500 text-xs font-medium mb-3 uppercase tracking-wider">Research</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/zen" onClick={closeMenu} className="group flex items-start gap-2">
            <span className="text-purple-400 text-lg">🧠</span>
            <div>
              <span className="text-sm text-white font-medium group-hover:text-purple-400 transition-colors">Zen LM</span>
              <p className="text-xs text-neutral-500">30+ open foundation models</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/zen/models" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">All Models</Link>
        </li>
        <li>
          <a href="https://zenlm.org/research" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-300 hover:text-white transition-colors">Papers</a>
        </li>
        <li>
          <a href="https://huggingface.co/zenlm" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-300 hover:text-white transition-colors">HuggingFace</a>
        </li>
        <li>
          <Link to="/open-source" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Open Source</Link>
        </li>
      </ul>
    </div>

    {/* Products */}
    <div>
      <h3 className="text-neutral-500 text-xs font-medium mb-3 uppercase tracking-wider">Products</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/dev" onClick={closeMenu} className="group flex items-start gap-2">
            <span className="text-[#fd4444] text-lg">⚡</span>
            <div>
              <span className="text-sm text-white font-medium group-hover:text-[#fd4444] transition-colors">Hanzo Dev</span>
              <p className="text-xs text-neutral-500">AI coding assistant</p>
            </div>
          </Link>
        </li>
        <li><Link to="/ai" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">AI Platform</Link></li>
        <li><Link to="/cloud" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Cloud</Link></li>
        <li><Link to="/platform" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Infrastructure</Link></li>
        <li><Link to="/products" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">All Products →</Link></li>
      </ul>
    </div>

    {/* Connect & Trust */}
    <div>
      <h3 className="text-neutral-500 text-xs font-medium mb-3 uppercase tracking-wider">Connect</h3>
      <ul className="space-y-2 mb-6">
        <li><Link to="/contact" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Contact Us</Link></li>
        <li><Link to="/enterprise" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Enterprise</Link></li>
        <li><Link to="/referrals" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Referral Program</Link></li>
      </ul>
      <h3 className="text-neutral-500 text-xs font-medium mb-3 uppercase tracking-wider">Trust</h3>
      <ul className="space-y-2">
        <li><Link to="/security" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Security</Link></li>
        <li><Link to="/status" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">System Status</Link></li>
      </ul>
    </div>
  </div>
);

// Learn dropdown content
const LearnContent = ({ closeMenu }: { closeMenu: () => void }) => (
  <div className="grid grid-cols-3 gap-6">
    <div>
      <h3 className="text-neutral-500 text-xs font-medium mb-3 uppercase tracking-wider">Documentation</h3>
      <ul className="space-y-2">
        <li><a href="https://docs.hanzo.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-300 hover:text-white transition-colors">Docs</a></li>
        <li><a href="https://docs.hanzo.ai/tutorials" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-300 hover:text-white transition-colors">Tutorials</a></li>
        <li><a href="https://docs.hanzo.ai/api" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-300 hover:text-white transition-colors">API Reference</a></li>
      </ul>
    </div>
    <div>
      <h3 className="text-neutral-500 text-xs font-medium mb-3 uppercase tracking-wider">Community</h3>
      <ul className="space-y-2">
        <li><a href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-300 hover:text-white transition-colors">GitHub</a></li>
        <li><a href="https://discord.gg/hanzo" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-300 hover:text-white transition-colors">Discord</a></li>
        <li><Link to="/blog" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Blog</Link></li>
      </ul>
    </div>
    <div>
      <h3 className="text-neutral-500 text-xs font-medium mb-3 uppercase tracking-wider">Support</h3>
      <ul className="space-y-2">
        <li><Link to="/contact" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Support Center</Link></li>
        <li><Link to="/status" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Status</Link></li>
      </ul>
    </div>
  </div>
);

const DesktopNav = () => {
  const { isDarkMode } = useTheme();

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
        to="/pricing"
        className="text-neutral-400 hover:text-white transition-colors text-sm font-medium"
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
