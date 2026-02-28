import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hanzo Dev — AI Coding Agent for Terminal & IDE',
  description: 'Ship production code with AI. Hanzo Dev reads your repo, edits across files coherently, runs tests, and opens PRs. Install with curl -fsSL hanzo.sh | bash',
  openGraph: {
    title: 'Hanzo Dev — AI Coding Agent for Terminal & IDE',
    description: 'Ship production code with AI. Hanzo Dev reads your repo, edits across files coherently, runs tests, and opens PRs. Install with curl -fsSL hanzo.sh | bash',
    url: 'https://hanzo.ai/dev',
    siteName: 'Hanzo AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hanzo Dev — AI Coding Agent for Terminal & IDE',
    description: 'Ship production code with AI. Hanzo Dev reads your repo, edits across files coherently, runs tests, and opens PRs. Install with curl -fsSL hanzo.sh | bash',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
