import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Models — Hanzo AI | 390+ LLMs',
  description:
    'Access 390+ AI models through one OpenAI-compatible API. GPT-5.3, Claude Sonnet 4.6, Gemini 3.1 Pro, Llama 4, Grok 4.1, DeepSeek V3, Zen, and more. Start free.',
  openGraph: {
    title: 'AI Models — Hanzo AI | 390+ LLMs',
    description: 'Access 390+ AI models through one OpenAI-compatible API.',
    url: 'https://hanzo.ai/models',
    siteName: 'Hanzo AI',
    type: 'website',
    images: [{ url: '/models/opengraph-image', width: 1200, height: 630, alt: '390+ AI Models on Hanzo AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Models — Hanzo AI | 390+ LLMs',
    description: 'Access 390+ AI models through one OpenAI-compatible API.',
    images: ['/models/opengraph-image'],
  },
}

export default function ModelsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
