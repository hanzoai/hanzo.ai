import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GlobalChatWidget from '@/components/GlobalChatWidget'
import { AccountProvider } from '@/contexts/AccountContext'
import { BillingProvider } from '@/contexts/BillingContext'

export const metadata: Metadata = {
  title: 'Hanzo AI — The Open-Source AI Cloud',
  description: 'The complete AI ecosystem: 390+ models, agent SDK, MCP tools, vector DB, IAM, KMS. Self-host or cloud. Earn $AI on Hanzo Network. Open source.',
  openGraph: {
    title: 'Hanzo AI — The Open-Source AI Cloud',
    description: 'The complete AI ecosystem: 390+ models, agent SDK, MCP tools, vector DB, IAM, KMS. Self-host or cloud. Earn $AI on Hanzo Network. Open source.',
    url: 'https://hanzo.ai',
    siteName: 'Hanzo AI',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Hanzo AI — The Open-Source AI Cloud' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hanzo AI — The Open-Source AI Cloud',
    description: 'The complete AI ecosystem: 390+ models, agent SDK, MCP tools, vector DB, IAM, KMS. Self-host or cloud. Earn $AI on Hanzo Network. Open source.',
    images: ['/opengraph-image'],
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
