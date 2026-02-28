import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Open Source — Hanzo AI | 723+ Repos',
  description: '723+ open-source repositories across AI infrastructure, frontier models, blockchain, and developer tools. MIT/Apache licensed. Fork, self-host, or contribute.',
  openGraph: {
    title: 'Open Source — Hanzo AI | 723+ Repos',
    description: '723+ open-source repositories across AI infrastructure, frontier models, blockchain, and developer tools. MIT/Apache licensed. Fork, self-host, or contribute.',
    url: 'https://hanzo.ai/open-source',
    siteName: 'Hanzo AI',
    type: 'website',
    images: [{ url: '/open-source/opengraph-image', width: 1200, height: 630, alt: 'Hanzo AI Open Source' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Source — Hanzo AI | 723+ Repos',
    description: '723+ open-source repositories across AI infrastructure, frontier models, blockchain, and developer tools. MIT/Apache licensed. Fork, self-host, or contribute.',
    images: ['/open-source/opengraph-image'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
