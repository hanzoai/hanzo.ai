import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Hanzo AI',
  description: 'Talk to the Hanzo AI team. Sales inquiries, partnerships, enterprise pricing, or general questions. We respond within 24 hours.',
  openGraph: {
    title: 'Contact — Hanzo AI',
    description: 'Talk to the Hanzo AI team. Sales inquiries, partnerships, enterprise pricing, or general questions. We respond within 24 hours.',
    url: 'https://hanzo.ai/contact',
    siteName: 'Hanzo AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact — Hanzo AI',
    description: 'Talk to the Hanzo AI team. Sales inquiries, partnerships, enterprise pricing, or general questions. We respond within 24 hours.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
