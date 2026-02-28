import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zen Models — Hanzo AI | 390+ Open-Weight LLMs',
  description: 'Hanzo Zen: 390+ frontier AI models from 0.6B to 1T+ parameters. Zen MoDE (Mixture of Distilled Experts). OpenAI-compatible API. Vision, audio, code, math. From $0.15/MTok.',
  openGraph: {
    title: 'Zen Models — Hanzo AI | 390+ Open-Weight LLMs',
    description: 'Hanzo Zen: 390+ frontier AI models from 0.6B to 1T+ parameters. Zen MoDE (Mixture of Distilled Experts). OpenAI-compatible API. Vision, audio, code, math. From $0.15/MTok.',
    url: 'https://hanzo.ai/zen',
    siteName: 'Hanzo AI',
    type: 'website',
    images: [{ url: '/zen/opengraph-image', width: 1200, height: 630, alt: 'Zen AI Models by Hanzo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zen Models — Hanzo AI | 390+ Open-Weight LLMs',
    description: 'Hanzo Zen: 390+ frontier AI models from 0.6B to 1T+ parameters. Zen MoDE (Mixture of Distilled Experts). OpenAI-compatible API. Vision, audio, code, math. From $0.15/MTok.',
    images: ['/zen/opengraph-image'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
