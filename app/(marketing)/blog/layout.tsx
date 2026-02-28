import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Hanzo AI',
  description: 'AI infrastructure insights: agent architecture, Zen model releases, LLM gateway guides, MCP tools, and enterprise AI deployment. From the team building the AI cloud.',
  openGraph: {
    title: 'Blog — Hanzo AI',
    description: 'AI infrastructure insights: agent architecture, Zen model releases, LLM gateway guides, MCP tools, and enterprise AI deployment. From the team building the AI cloud.',
    url: 'https://hanzo.ai/blog',
    siteName: 'Hanzo AI',
    type: 'website',
    images: [{ url: '/blog/opengraph-image', width: 1200, height: 630, alt: 'Hanzo AI Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Hanzo AI',
    description: 'AI infrastructure insights: agent architecture, Zen model releases, LLM gateway guides, MCP tools, and enterprise AI deployment. From the team building the AI cloud.',
    images: ['/blog/opengraph-image'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
