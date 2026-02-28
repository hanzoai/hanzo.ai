import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products — Hanzo AI',
  description: 'The complete Hanzo AI product suite: 390+ models via unified gateway, 260+ MCP tools, agent orchestration, vector database, managed cloud, IAM, KMS, and blockchain integration.',
  openGraph: {
    title: 'Products — Hanzo AI',
    description: 'The complete Hanzo AI product suite: 390+ models via unified gateway, 260+ MCP tools, agent orchestration, vector database, managed cloud, IAM, KMS, and blockchain integration.',
    url: 'https://hanzo.ai/products',
    siteName: 'Hanzo AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products — Hanzo AI',
    description: 'The complete Hanzo AI product suite: 390+ models via unified gateway, 260+ MCP tools, agent orchestration, vector database, managed cloud, IAM, KMS, and blockchain integration.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
