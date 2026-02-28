import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enterprise AI — Hanzo AI',
  description: 'Enterprise-grade AI infrastructure with custom SLAs, dedicated support, air-gapped deployment, SSO, audit logs, and volume pricing. Techstars-backed, SOC 2 compliant.',
  openGraph: {
    title: 'Enterprise AI — Hanzo AI',
    description: 'Enterprise-grade AI infrastructure with custom SLAs, dedicated support, air-gapped deployment, SSO, audit logs, and volume pricing. Techstars-backed, SOC 2 compliant.',
    url: 'https://hanzo.ai/enterprise',
    siteName: 'Hanzo AI',
    type: 'website',
    images: [{ url: '/enterprise/opengraph-image', width: 1200, height: 630, alt: 'Hanzo AI Enterprise' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise AI — Hanzo AI',
    description: 'Enterprise-grade AI infrastructure with custom SLAs, dedicated support, air-gapped deployment, SSO, audit logs, and volume pricing. Techstars-backed, SOC 2 compliant.',
    images: ['/enterprise/opengraph-image'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
