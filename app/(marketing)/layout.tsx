import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GlobalChatWidget from '@/components/GlobalChatWidget'
import { AccountProvider } from '@/contexts/AccountContext'
import { BillingProvider } from '@/contexts/BillingContext'

export const metadata: Metadata = {
  title: 'Hanzo AI — Vertically Integrated AI Platform',
  description: 'The complete AI infrastructure: 390+ models, agent SDK, LLM gateway, MCP tools, vector DB, IAM, KMS, and deploy-anywhere cloud. Open source. Backed by Techstars.',
  openGraph: {
    title: 'Hanzo AI — Vertically Integrated AI Platform',
    description: 'The complete AI infrastructure: 390+ models, agent SDK, LLM gateway, MCP tools, vector DB, IAM, KMS. Open source.',
    url: 'https://hanzo.ai',
    siteName: 'Hanzo AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hanzo AI — Vertically Integrated AI Platform',
    description: '390+ models, agent SDK, LLM gateway, MCP tools. Open source AI cloud.',
  },
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AccountProvider>
      <BillingProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <GlobalChatWidget />
      </BillingProvider>
    </AccountProvider>
  )
}
