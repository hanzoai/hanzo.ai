import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { Link } from "react-router-dom";
import {
  Download,
  Mail,
  ExternalLink,
  FileText,
  Image,
  Palette,
  Building2,
  Calendar,
  MapPin,
  Users,
  Globe,
  Phone,
} from "lucide-react";

const BRAND_COLOR = "#fd4444";

// Company facts
const companyFacts = [
  { label: "Founded", value: "2016" },
  { label: "Headquarters", value: "Los Angeles, CA" },
  { label: "Employees", value: "50+" },
  { label: "Customers", value: "10,000+" },
];

// Press releases / news
const pressReleases = [
  {
    date: "January 2025",
    title: "Hanzo Launches Next-Generation AI Platform",
    description: "Hanzo Industries Inc announces the launch of its comprehensive AI platform for enterprises.",
    link: "/blog",
  },
  {
    date: "December 2024",
    title: "Hanzo Reaches 10,000 Customer Milestone",
    description: "The company celebrates serving over 10,000 customers worldwide with its AI solutions.",
    link: "/blog",
  },
  {
    date: "November 2024",
    title: "Hanzo Dev 2.0 Released",
    description: "Major update to Hanzo Dev brings advanced AI coding capabilities and improved developer experience.",
    link: "/blog",
  },
];

// Logo assets
const logoAssets = [
  {
    name: "Logo - Dark Background",
    description: "White logo for use on dark backgrounds",
    format: "SVG, PNG",
    preview: "bg-black",
    logoColor: "white",
  },
  {
    name: "Logo - Light Background",
    description: "Black logo for use on light backgrounds",
    format: "SVG, PNG",
    preview: "bg-white",
    logoColor: "black",
  },
  {
    name: "Icon Only",
    description: "Standalone icon without wordmark",
    format: "SVG, PNG, ICO",
    preview: "bg-neutral-900",
    logoColor: "white",
  },
];

// Social links
const socialLinks = [
  { name: "X (Twitter)", handle: "@hanzoai", href: "https://x.com/hanzoai" },
  { name: "LinkedIn", handle: "hanzoai", href: "https://linkedin.com/company/hanzoai" },
  { name: "GitHub", handle: "hanzoai", href: "https://github.com/hanzoai" },
  { name: "YouTube", handle: "@hanzoai", href: "https://youtube.com/@hanzoai" },
  { name: "Instagram", handle: "@hanzoai", href: "https://instagram.com/hanzoai" },
];

const LogoPreview = ({ isDark }: { isDark: boolean }) => (
  <svg viewBox="0 0 67 67" className="w-8 h-8">
    <path d="M22.21 67V44.6369H0V67H22.21Z" fill={isDark ? "#ffffff" : "#000000"} />
    <path d="M0 44.6369L22.21 46.8285V44.6369H0Z" fill="#DDDDDD" />
    <path d="M66.7038 22.3184H22.2534L0.0878906 44.6367H44.4634L66.7038 22.3184Z" fill={isDark ? "#ffffff" : "#000000"} />
    <path d="M22.21 0H0V22.3184H22.21V0Z" fill={isDark ? "#ffffff" : "#000000"} />
    <path d="M66.7198 0H44.5098V22.3184H66.7198V0Z" fill={isDark ? "#ffffff" : "#000000"} />
    <path d="M66.6753 22.3185L44.5098 20.0822V22.3185H66.6753Z" fill="#DDDDDD" />
    <path d="M66.7198 67V44.6369H44.5098V67H66.7198Z" fill={isDark ? "#ffffff" : "#000000"} />
  </svg>
);

const Press = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <Helmet>
        <title>Press - Hanzo Industries Inc</title>
        <meta name="description" content="Press resources, media kit, and contact information for Hanzo Industries Inc. Download logos, brand assets, and find press contacts." />
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 ${
              isDarkMode ? "bg-neutral-900 text-neutral-300" : "bg-neutral-100 text-neutral-600"
            }`}>
              Press & Media
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
              isDarkMode
                ? "bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/70"
                : "text-black"
            }`}>
              Press Resources
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? "text-neutral-400" : "text-neutral-600"}`}>
              Everything you need to write about Hanzo Industries Inc. Download our press kit, access brand assets, and find media contacts.
            </p>
          </motion.div>

          {/* Company Overview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-20"
          >
            <div className={`p-8 rounded-2xl border ${
              isDarkMode
                ? "bg-gradient-to-b from-neutral-900 to-black border-neutral-800"
                : "bg-gradient-to-b from-neutral-50 to-white border-neutral-200"
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <Building2 className={`w-6 h-6 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`} />
                <h2 className="text-2xl font-bold">About Hanzo Industries Inc</h2>
              </div>
              <p className={`text-lg mb-8 leading-relaxed ${isDarkMode ? "text-neutral-300" : "text-neutral-600"}`}>
                Hanzo Industries Inc is an AI technology company building the infrastructure for the next generation of intelligent applications. Founded in 2016 and headquartered in Los Angeles, Hanzo provides enterprise-grade AI platforms, developer tools, and cloud services to companies worldwide. Our mission is to make AI accessible, safe, and beneficial for everyone.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {companyFacts.map((fact) => (
                  <div key={fact.label} className="text-center">
                    <div className="text-3xl font-bold mb-1" style={{ color: BRAND_COLOR }}>
                      {fact.value}
                    </div>
                    <div className={`text-sm ${isDarkMode ? "text-neutral-500" : "text-neutral-400"}`}>
                      {fact.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Press Contact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Mail className={`w-6 h-6 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`} />
              Press Contact
            </h2>
            <div className={`p-8 rounded-2xl border ${
              isDarkMode
                ? "bg-neutral-900/50 border-neutral-800"
                : "bg-neutral-50 border-neutral-200"
            }`}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Media Inquiries</h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:press@hanzo.ai"
                      className={`flex items-center gap-2 transition-colors ${
                        isDarkMode ? "text-neutral-300 hover:text-white" : "text-neutral-600 hover:text-black"
                      }`}
                    >
                      <Mail className="w-4 h-4" />
                      press@hanzo.ai
                    </a>
                    <div className={`flex items-center gap-2 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}>
                      <Phone className="w-4 h-4" />
                      +1 (424) 335-0550
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Headquarters</h3>
                  <div className={`space-y-1 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}>
                    <p className="font-medium">Hanzo Industries Inc</p>
                    <p>Los Angeles, California</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-neutral-800/50">
                <p className={`text-sm ${isDarkMode ? "text-neutral-500" : "text-neutral-400"}`}>
                  For urgent press inquiries, please include "URGENT" in your email subject line. We typically respond within 24 hours.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Brand Assets */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Palette className={`w-6 h-6 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`} />
                Brand Assets
              </h2>
              <Link to="/brand">
                <Button variant="outline" size="sm" className="gap-2">
                  <FileText className="w-4 h-4" />
                  Brand Guidelines
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {logoAssets.map((asset, index) => (
                <div
                  key={asset.name}
                  className={`rounded-xl border overflow-hidden ${
                    isDarkMode ? "border-neutral-800" : "border-neutral-200"
                  }`}
                >
                  <div className={`h-32 flex items-center justify-center ${asset.preview}`}>
                    <LogoPreview isDark={asset.logoColor === "white"} />
                  </div>
                  <div className={`p-4 ${isDarkMode ? "bg-neutral-900" : "bg-neutral-50"}`}>
                    <h3 className="font-semibold mb-1">{asset.name}</h3>
                    <p className={`text-sm mb-2 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}>
                      {asset.description}
                    </p>
                    <p className={`text-xs ${isDarkMode ? "text-neutral-500" : "text-neutral-400"}`}>
                      {asset.format}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="gap-2" style={{ backgroundColor: BRAND_COLOR }}>
                <Download className="w-4 h-4" />
                Download Press Kit (ZIP)
              </Button>
              <Link to="/brand">
                <Button variant="outline" className="gap-2">
                  <Palette className="w-4 h-4" />
                  View Brand Guidelines
                </Button>
              </Link>
            </div>
          </motion.section>

          {/* Recent News */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Calendar className={`w-6 h-6 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`} />
              Recent News
            </h2>
            <div className="space-y-4">
              {pressReleases.map((release) => (
                <Link
                  key={release.title}
                  to={release.link}
                  className={`block p-6 rounded-xl border transition-all group ${
                    isDarkMode
                      ? "bg-neutral-900/50 border-neutral-800 hover:border-neutral-700"
                      : "bg-neutral-50 border-neutral-200 hover:border-neutral-300"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className={`text-sm mb-2 ${isDarkMode ? "text-neutral-500" : "text-neutral-400"}`}>
                        {release.date}
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:underline">{release.title}</h3>
                      <p className={`text-sm ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}>
                        {release.description}
                      </p>
                    </div>
                    <ExternalLink className={`w-5 h-5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ${
                      isDarkMode ? "text-neutral-500" : "text-neutral-400"
                    }`} />
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>

          {/* Social Media */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Globe className={`w-6 h-6 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`} />
              Connect With Us
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-xl border text-center transition-all ${
                    isDarkMode
                      ? "bg-neutral-900/50 border-neutral-800 hover:border-neutral-700"
                      : "bg-neutral-50 border-neutral-200 hover:border-neutral-300"
                  }`}
                >
                  <div className="font-semibold mb-1">{social.name}</div>
                  <div className={`text-sm ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}>
                    {social.handle}
                  </div>
                </a>
              ))}
            </div>
          </motion.section>

          {/* Executive Team */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Users className={`w-6 h-6 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`} />
              Leadership
            </h2>
            <div className={`p-8 rounded-2xl border text-center ${
              isDarkMode
                ? "bg-neutral-900/50 border-neutral-800"
                : "bg-neutral-50 border-neutral-200"
            }`}>
              <p className={`mb-6 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}>
                For executive bios and headshots, please visit our team page or contact our press team.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/team">
                  <Button variant="outline" className="gap-2">
                    <Users className="w-4 h-4" />
                    View Team
                  </Button>
                </Link>
                <a href="mailto:press@hanzo.ai">
                  <Button className="gap-2" style={{ backgroundColor: BRAND_COLOR }}>
                    <Mail className="w-4 h-4" />
                    Request Executive Bios
                  </Button>
                </a>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Press;
