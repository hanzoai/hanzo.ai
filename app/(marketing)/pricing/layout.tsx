import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — Hanzo AI',
  description: 'Start with $5 free credit. Pay as you go. Developer: $5 credit included. Unified AI: $20/mo with all models and priority inference. Team: $25/mo per seat. Enterprise: custom SLAs and dedicated support.',
  openGraph: {
    title: 'Pricing — Hanzo AI',
    description: 'Start with $5 free credit. Pay as you go. Developer: $5 credit included. Unified AI: $20/mo with all models and priority inference. Team: $25/mo per seat. Enterprise: custom SLAs and dedicated support.',
    url: 'https://hanzo.ai/pricing',
    siteName: 'Hanzo AI',
    type: 'website',
    images: [{ url: '/pricing/opengraph-image', width: 1200, height: 630, alt: 'Hanzo AI Pricing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing — Hanzo AI',
    description: 'Start with $5 free credit. Pay as you go. Developer: $5 credit included. Unified AI: $20/mo with all models and priority inference. Team: $25/mo per seat. Enterprise: custom SLAs and dedicated support.',
    images: ['/pricing/opengraph-image'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
