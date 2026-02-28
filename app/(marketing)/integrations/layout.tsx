import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Integrations — Hanzo AI',
  description:
    'Use Hanzo AI with any SDK, framework, or language. OpenAI SDK, LangChain, LlamaIndex, Vercel AI SDK, AutoGen, CrewAI, DSPy, Docker, Kubernetes, Python, TypeScript, Go, Rust, and more.',
  openGraph: {
    title: 'Integrations — Hanzo AI',
    description:
      'Use Hanzo AI with any SDK, framework, or language. OpenAI SDK, LangChain, Vercel AI SDK, AutoGen, and more.',
    url: 'https://hanzo.ai/integrations',
    siteName: 'Hanzo AI',
    type: 'website',
    images: [{ url: '/integrations/opengraph-image', width: 1200, height: 630, alt: 'Hanzo AI Integrations' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Integrations — Hanzo AI',
    description: 'Use Hanzo AI with any SDK, framework, or language.',
    images: ['/integrations/opengraph-image'],
  },
}

export default function IntegrationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
