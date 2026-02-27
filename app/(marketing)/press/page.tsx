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
import { HanzoLogo } from "@hanzo/logo/react"

const companyFacts = [
  { label: "Founded", value: "2016" },
  { label: "Headquarters", value: "Los Angeles, CA" },
  { label: "Employees", value: "50+" },
  { label: "Customers", value: "10,000+" },
]

const pressReleases = [
  { date: "February 27, 2026", title: "Hanzo Launches Unified AI Gateway — 100+ Models, Zero Markup", description: "Hanzo AI Gateway provides access to over 100 models from every major provider through a single API key with zero markup on third-party pricing.", link: "/blog/2026-02-27-unified-ai-gateway" },
  { date: "February 27, 2026", title: "Hanzo Cloud Launches with 10-54% Lower Pricing Than Competitors", description: "Hanzo Cloud offers developer VMs starting at $5/mo with 2x the RAM of DigitalOcean at the same price, zero egress fees, and global multi-cloud routing.", link: "/blog/2026-02-27-hanzo-network-cloud-launch" },
  { date: "February 27, 2026", title: "Hanzo Bot: Full-Stack AI Agent Hosting from $5/mo", description: "Deploy AI agents with built-in access to 100+ models, 260+ MCP tools, GPU compute, and multimodal capabilities — audio transcription 85% cheaper than OpenAI.", link: "/blog/2026-02-27-hanzo-bot-launch" },
  { date: "February 27, 2026", title: "Zen4 Coder 480B: The Largest Open-Source Code Model", description: "Zen4 Coder 480B MoE delivers frontier-class code generation with only 22B active parameters, available through the Hanzo AI Gateway.", link: "/blog/2026-02-27-zen4-coder-launch" },
  { date: "February 9, 2026", title: "Zen4 Model Family Launch — 14 Models from 600M to 480B Parameters", description: "Hanzo releases the Zen4 model family built on Mixture of Distilled Experts architecture, spanning chat, code, vision, and audio.", link: "/blog/2026-02-09-zen4-launch" },
  { date: "February 27, 2026", title: "Complete AI Pricing Breakdown: Models, Cloud, GPU, and Audio", description: "A comprehensive reference for all Hanzo AI pricing across the gateway, cloud infrastructure, GPU compute, and multimodal services.", link: "/blog/2026-02-27-pricing-deep-dive" },
]

const logoAssets = [
  { name: "Logo - Dark Background", description: "White logo for use on dark backgrounds", format: "SVG, PNG", preview: "bg-background", logoColor: "white" },
  { name: "Logo - Light Background", description: "Black logo for use on light backgrounds", format: "SVG, PNG", preview: "bg-primary", logoColor: "black" },
  { name: "Icon Only", description: "Standalone icon without wordmark", format: "SVG, PNG, ICO", preview: "bg-secondary", logoColor: "white" },
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
  <HanzoLogo variant={isDark ? "white" : "mono"} className="w-8 h-8" />
)

export default function PressPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)", filter: "blur(100px)" }} />
          </div>
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 bg-primary/20 text-foreground">
              <Newspaper className="w-3.5 h-3.5" />Press & Media
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }} className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6">
              <span className="text-foreground">Press</span><br /><span className="text-muted-foreground">Resources.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
              Everything you need to write about Hanzo Industries Inc. Download our press kit, access brand assets, and find media contacts.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }} className="flex flex-wrap items-center justify-center gap-4">
              <button className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm bg-primary text-primary-foreground"><Download className="w-4 h-4 mr-2" />Download Press Kit</button>
              <a href="mailto:press@hanzo.ai" className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-secondary text-sm text-foreground"><Mail className="w-4 h-4 mr-2" />Contact Press Team</a>
            </motion.div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-background to-neutral-900/30">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-secondary/50 border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10"><Building2 className="w-5 h-5 text-foreground" /></div>
                <h2 className="text-2xl font-bold text-foreground">About Hanzo Industries Inc</h2>
              </div>
              <p className="text-foreground/80 text-lg leading-relaxed mb-8">Hanzo Industries Inc is an AI technology company building the infrastructure for the next generation of intelligent applications. Founded in 2016 and headquartered in Los Angeles, Hanzo provides enterprise-grade AI platforms, developer tools, and cloud services to companies worldwide. Our mission is to make AI accessible, safe, and beneficial for everyone.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {companyFacts.map((fact) => (
                  <div key={fact.label} className="text-center bg-neutral-800/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-foreground mb-1">{fact.value}</div>
                    <div className="text-sm text-muted-foreground">{fact.label}</div>
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
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Press Contact</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Get in touch with our media relations team.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-secondary/50 border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Media Inquiries</h3>
                <div className="space-y-3">
                  <a href="mailto:press@hanzo.ai" className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors"><Mail className="w-5 h-5 text-foreground" />press@hanzo.ai</a>
                  <div className="flex items-center gap-3 text-muted-foreground"><Phone className="w-5 h-5 text-foreground" />+1 (424) 335-0550</div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-secondary/50 border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Headquarters</h3>
                <div className="space-y-1 text-muted-foreground">
                  <p className="font-medium text-foreground">Hanzo Industries Inc</p>
                  <p>Los Angeles, California</p>
                  <p>United States</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Brand Assets */}
        <section className="py-16 px-4 md:px-8 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Brand Assets</h2>
                <p className="text-muted-foreground">Download logos and visual assets.</p>
              </div>
              <Link href="/brand">
                <Button variant="outline" size="sm" className="gap-2 border-border text-foreground hover:bg-accent"><FileText className="w-4 h-4" />Brand Guidelines</Button>
              </Link>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {logoAssets.map((asset, index) => (
                <motion.div key={asset.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="rounded-xl border border-border overflow-hidden">
                  <div className={`h-32 flex items-center justify-center ${asset.preview}`}><LogoPreview isDark={asset.logoColor === "white"} /></div>
                  <div className="p-4 bg-secondary/50">
                    <h3 className="font-semibold text-foreground mb-1">{asset.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{asset.description}</p>
                    <p className="text-xs text-muted-foreground">{asset.format}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap gap-4">
              <a href="/press/hanzo-press-kit.zip" className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm bg-primary text-primary-foreground"><Download className="w-4 h-4 mr-2" />Download Press Kit (ZIP)</a>
              <Link href="/brand" className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-secondary text-sm text-foreground"><Palette className="w-4 h-4 mr-2" />View Brand Guidelines</Link>
            </motion.div>
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-foreground mb-4">Partner Assets</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {partnerAssets.map((partner) => (
                  <div key={partner.name} className="border border-border rounded-xl p-4 bg-secondary/40">
                    <div className="text-sm uppercase tracking-widest text-muted-foreground mb-2">{partner.name}</div>
                    <div className="flex flex-col gap-2">
                      {partner.files.map((file) => (
                        <a key={file.href} href={file.href || "#"} className="inline-flex items-center text-sm text-foreground/80 hover:text-foreground transition-colors"><ExternalLink className="w-4 h-4 mr-2" />{file.label}</a>
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
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Recent News</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Latest press releases and company announcements.</p>
            </motion.div>
            <div className="space-y-4">
              {pressReleases.map((release, index) => (
                <motion.div key={release.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Link href={release.link || "#"} className="block p-6 rounded-xl bg-secondary/50 border border-border hover:border-border transition-all group">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground mb-2">{release.date}</div>
                        <h3 className="font-semibold text-foreground mb-2 group-hover:text-foreground/80 transition-colors">{release.title}</h3>
                        <p className="text-sm text-muted-foreground">{release.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground/60 group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-16 px-4 md:px-8 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Connect With Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Follow us on social media for the latest updates.</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a key={social.name} href={social.href || "#"} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="p-4 rounded-xl bg-secondary/50 border border-border text-center hover:border-border transition-all">
                  <div className="font-semibold text-foreground mb-1">{social.name}</div>
                  <div className="text-sm text-muted-foreground">{social.handle}</div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-neutral-900/30 to-background relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 bg-primary/20 text-foreground"><Users className="w-3.5 h-3.5" />Leadership</motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet our team</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">For executive bios and headshots, visit our team page or contact our press team.</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/team" className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-all hover:opacity-90 text-base bg-primary text-primary-foreground">View Team<ArrowRight className="ml-2 h-5 w-5" /></Link>
              <a href="mailto:press@hanzo.ai" className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-secondary text-base text-foreground">Request Executive Bios</a>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
