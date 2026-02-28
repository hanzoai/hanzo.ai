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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zen Models — Hanzo AI | 390+ Open-Weight LLMs',
    description: 'Hanzo Zen: 390+ frontier AI models from 0.6B to 1T+ parameters. Zen MoDE (Mixture of Distilled Experts). OpenAI-compatible API. Vision, audio, code, math. From $0.15/MTok.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
