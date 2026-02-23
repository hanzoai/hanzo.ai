import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GlobalChatWidget from '@/components/GlobalChatWidget'
import { AccountProvider } from '@/contexts/AccountContext'
import { BillingProvider } from '@/contexts/BillingContext'

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
