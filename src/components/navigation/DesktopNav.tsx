import React from "react";
import { Link } from "react-router-dom";
import ProductsMenu from "./products-menu";
import { SolutionsMenu } from "./solutions-menu";
import { useTheme } from "@/contexts/ThemeContext";
import { NavMenu } from "./NavMenu";

// Meet Hanzo dropdown content
const MeetHanzoContent = ({ closeMenu }: { closeMenu: () => void }) => (
  <div className="grid grid-cols-3 gap-6">
    <div>
      <h3 className="text-neutral-500 text-xs font-medium mb-3 uppercase tracking-wider">Company</h3>
      <ul className="space-y-2">
        <li><Link to="/team" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Team</Link></li>
        <li><Link to="/leadership" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Leadership</Link></li>
        <li><Link to="/philosophy" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Philosophy</Link></li>
        <li><Link to="/zen" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Zen Models</Link></li>
        <li><Link to="/open-source" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Open Source</Link></li>
      </ul>
    </div>
    <div>
      <h3 className="text-neutral-500 text-xs font-medium mb-3 uppercase tracking-wider">Connect</h3>
      <ul className="space-y-2">
        <li><Link to="/contact" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Contact</Link></li>
        <li><Link to="/enterprise" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Enterprise</Link></li>
        <li><Link to="/referrals" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Referrals</Link></li>
      </ul>
    </div>
    <div>
      <h3 className="text-neutral-500 text-xs font-medium mb-3 uppercase tracking-wider">Trust</h3>
      <ul className="space-y-2">
        <li><Link to="/security" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Security</Link></li>
        <li><Link to="/status" onClick={closeMenu} className="text-sm text-neutral-300 hover:text-white transition-colors">Status</Link></li>
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
