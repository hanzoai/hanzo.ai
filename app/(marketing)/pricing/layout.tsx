import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — Hanzo AI',
  description: 'Start free. Upgrade when you scale. Developer: free forever with 100K API calls/mo. Pro: $49/mo with priority access and higher limits. Enterprise: custom SLAs and dedicated support.',
  openGraph: {
    title: 'Pricing — Hanzo AI',
    description: 'Start free. Upgrade when you scale. Developer: free forever with 100K API calls/mo. Pro: $49/mo with priority access and higher limits. Enterprise: custom SLAs and dedicated support.',
    url: 'https://hanzo.ai/pricing',
    siteName: 'Hanzo AI',
    type: 'website',
    images: [{ url: '/pricing/opengraph-image', width: 1200, height: 630, alt: 'Hanzo AI Pricing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing — Hanzo AI',
    description: 'Start free. Upgrade when you scale. Developer: free forever with 100K API calls/mo. Pro: $49/mo with priority access and higher limits. Enterprise: custom SLAs and dedicated support.',
    images: ['/pricing/opengraph-image'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
