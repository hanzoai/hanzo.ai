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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise AI — Hanzo AI',
    description: 'Enterprise-grade AI infrastructure with custom SLAs, dedicated support, air-gapped deployment, SSO, audit logs, and volume pricing. Techstars-backed, SOC 2 compliant.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
