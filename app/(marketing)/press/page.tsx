"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@hanzo/ui";
import {
  Download,
  Mail,
  ExternalLink,
  FileText,
  Palette,
  Building2,
  Users,
  Phone,
  ArrowRight,
  Newspaper,
} from "lucide-react"

const companyFacts = [
  { label: "Founded", value: "2016" },
  { label: "Headquarters", value: "Los Angeles, CA" },
  { label: "Employees", value: "50+" },
  { label: "Customers", value: "10,000+" },
]

const pressReleases = [
  { date: "January 2025", title: "Hanzo Launches Next-Generation AI Platform", description: "Hanzo Industries Inc announces the launch of its comprehensive AI platform for enterprises.", link: "/blog" },
  { date: "December 2024", title: "Hanzo Reaches 10,000 Customer Milestone", description: "The company celebrates serving over 10,000 customers worldwide with its AI solutions.", link: "/blog" },
  { date: "November 2024", title: "Hanzo Dev 2.0 Released", description: "Major update to Hanzo Dev brings advanced AI coding capabilities and improved developer experience.", link: "/blog" },
]

const logoAssets = [
  { name: "Logo - Dark Background", description: "White logo for use on dark backgrounds", format: "SVG, PNG", preview: "bg-black", logoColor: "white" },
  { name: "Logo - Light Background", description: "Black logo for use on light backgrounds", format: "SVG, PNG", preview: "bg-white", logoColor: "black" },
  { name: "Icon Only", description: "Standalone icon without wordmark", format: "SVG, PNG, ICO", preview: "bg-neutral-900", logoColor: "white" },
]

const socialLinks = [
  { name: "X (Twitter)", handle: "@hanzoai", href: "https://x.com/hanzoai" },
  { name: "LinkedIn", handle: "hanzoai", href: "https://linkedin.com/company/hanzoai" },
  { name: "GitHub", handle: "hanzoai", href: "https://github.com/hanzoai" },
  { name: "YouTube", handle: "@hanzoai", href: "https://youtube.com/@hanzoai" },
  { name: "Instagram", handle: "@hanzoai", href: "https://instagram.com/hanzoai" },
]

const partnerAssets = [
  { name: "Techstars", files: [{ label: "Logo (PNG)", href: "/press/partners/techstars/techstars.png" }] },
  { name: "NVIDIA", files: [{ label: "Logo (SVG)", href: "/press/partners/nvidia/nvidia.svg" }] },
  { name: "Google Cloud", files: [{ label: "Logo (SVG)", href: "/press/partners/googlecloud/googlecloud.svg" }] },
  { name: "AWS", files: [{ label: "Logo (SVG)", href: "/press/partners/aws/aws.svg" }] },
  { name: "DigitalOcean", files: [{ label: "Logo (SVG)", href: "/press/partners/digitalocean/digitalocean.svg" }] },
  { name: "Nebius", files: [{ label: "Logo (SVG)", href: "/press/partners/nebius/nebius.svg" }] },
  { name: "Zoo Labs Foundation Inc", files: [{ label: "Logo (SVG)", href: "/press/partners/zoo-labs-foundation/zoo-labs-foundation.svg" }] },
  { name: "Lux Industries", files: [{ label: "Logo (SVG)", href: "/press/partners/lux-industries/lux-industries.svg" }] },
  { name: "Lux Network", files: [{ label: "Logo (SVG)", href: "/press/partners/lux-network/lux-network.svg" }] },
  { name: "Lux Partners", files: [{ label: "Logo (SVG)", href: "/press/partners/lux-partners/lux-partners.svg" }] },
]

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
)

export default function PressPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)", filter: "blur(100px)" }} />
          </div>
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 bg-white/20 text-white">
              <Newspaper className="w-3.5 h-3.5" />Press & Media
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }} className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6">
              <span className="text-white">Press</span><br /><span className="text-neutral-400">Resources.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="text-base lg:text-lg text-neutral-400 leading-relaxed mb-10 max-w-3xl mx-auto">
              Everything you need to write about Hanzo Industries Inc. Download our press kit, access brand assets, and find media contacts.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }} className="flex flex-wrap items-center justify-center gap-4">
              <button className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm bg-white text-black"><Download className="w-4 h-4 mr-2" />Download Press Kit</button>
              <a href="mailto:press@hanzo.ai" className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"><Mail className="w-4 h-4 mr-2" />Contact Press Team</a>
            </motion.div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-black to-neutral-900/30">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10"><Building2 className="w-5 h-5 text-white" /></div>
                <h2 className="text-2xl font-bold text-white">About Hanzo Industries Inc</h2>
              </div>
              <p className="text-neutral-300 text-lg leading-relaxed mb-8">Hanzo Industries Inc is an AI technology company building the infrastructure for the next generation of intelligent applications. Founded in 2016 and headquartered in Los Angeles, Hanzo provides enterprise-grade AI platforms, developer tools, and cloud services to companies worldwide. Our mission is to make AI accessible, safe, and beneficial for everyone.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {companyFacts.map((fact) => (
                  <div key={fact.label} className="text-center bg-neutral-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white mb-1">{fact.value}</div>
                    <div className="text-sm text-neutral-500">{fact.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Press Contact */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Press Contact</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">Get in touch with our media relations team.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-4">Media Inquiries</h3>
                <div className="space-y-3">
                  <a href="mailto:press@hanzo.ai" className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors"><Mail className="w-5 h-5 text-white" />press@hanzo.ai</a>
                  <div className="flex items-center gap-3 text-neutral-400"><Phone className="w-5 h-5 text-white" />+1 (424) 335-0550</div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-4">Headquarters</h3>
                <div className="space-y-1 text-neutral-400">
                  <p className="font-medium text-white">Hanzo Industries Inc</p>
                  <p>Los Angeles, California</p>
                  <p>United States</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Brand Assets */}
        <section className="py-16 px-4 md:px-8 bg-neutral-900/30">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Brand Assets</h2>
                <p className="text-neutral-400">Download logos and visual assets.</p>
              </div>
              <Link href="/brand">
                <Button variant="outline" size="sm" className="gap-2 border-neutral-700 text-white hover:bg-neutral-800"><FileText className="w-4 h-4" />Brand Guidelines</Button>
              </Link>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {logoAssets.map((asset, index) => (
                <motion.div key={asset.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="rounded-xl border border-neutral-800 overflow-hidden">
                  <div className={`h-32 flex items-center justify-center ${asset.preview}`}><LogoPreview isDark={asset.logoColor === "white"} /></div>
                  <div className="p-4 bg-neutral-900/50">
                    <h3 className="font-semibold text-white mb-1">{asset.name}</h3>
                    <p className="text-sm text-neutral-400 mb-2">{asset.description}</p>
                    <p className="text-xs text-neutral-500">{asset.format}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap gap-4">
              <a href="/press/hanzo-press-kit.zip" className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm bg-white text-black"><Download className="w-4 h-4 mr-2" />Download Press Kit (ZIP)</a>
              <Link href="/brand" className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"><Palette className="w-4 h-4 mr-2" />View Brand Guidelines</Link>
            </motion.div>
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-white mb-4">Partner Assets</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {partnerAssets.map((partner) => (
                  <div key={partner.name} className="border border-neutral-800 rounded-xl p-4 bg-neutral-900/40">
                    <div className="text-sm uppercase tracking-widest text-neutral-500 mb-2">{partner.name}</div>
                    <div className="flex flex-col gap-2">
                      {partner.files.map((file) => (
                        <a key={file.href} href={file.href || "#"} className="inline-flex items-center text-sm text-neutral-300 hover:text-white transition-colors"><ExternalLink className="w-4 h-4 mr-2" />{file.label}</a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recent News */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Recent News</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">Latest press releases and company announcements.</p>
            </motion.div>
            <div className="space-y-4">
              {pressReleases.map((release, index) => (
                <motion.div key={release.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Link href={release.link || "#"} className="block p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all group">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-sm text-neutral-500 mb-2">{release.date}</div>
                        <h3 className="font-semibold text-white mb-2 group-hover:text-neutral-300 transition-colors">{release.title}</h3>
                        <p className="text-sm text-neutral-400">{release.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-16 px-4 md:px-8 bg-neutral-900/30">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Connect With Us</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">Follow us on social media for the latest updates.</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a key={social.name} href={social.href || "#"} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 text-center hover:border-neutral-700 transition-all">
                  <div className="font-semibold text-white mb-1">{social.name}</div>
                  <div className="text-sm text-neutral-500">{social.handle}</div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-neutral-900/30 to-black relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 bg-white/20 text-white"><Users className="w-3.5 h-3.5" />Leadership</motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-white mb-4">Meet our team</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto">For executive bios and headshots, visit our team page or contact our press team.</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/team" className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-all hover:opacity-90 text-base bg-white text-black">View Team<ArrowRight className="ml-2 h-5 w-5" /></Link>
              <a href="mailto:press@hanzo.ai" className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-base text-white">Request Executive Bios</a>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
