import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Open Source — Hanzo AI | 723+ Repos',
  description: '723+ open-source repositories across AI infrastructure, frontier models, blockchain, and developer tools. MIT/Apache licensed. Fork, self-host, or contribute. OSS Compute Dividends: up to 25% of compute costs paid back to open source authors via SBOM-verified attribution.',
  openGraph: {
    title: 'Open Source — Hanzo AI | 723+ Repos',
    description: '723+ open-source repositories across AI infrastructure, frontier models, blockchain, and developer tools. MIT/Apache licensed. Fork, self-host, or contribute. OSS Compute Dividends: up to 25% of compute costs paid back to open source authors via SBOM-verified attribution.',
    url: 'https://hanzo.ai/open-source',
    siteName: 'Hanzo AI',
    type: 'website',
    images: [{ url: '/open-source/opengraph-image', width: 1200, height: 630, alt: 'Hanzo AI Open Source' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Source — Hanzo AI | 723+ Repos',
    description: '723+ open-source repositories across AI infrastructure, frontier models, blockchain, and developer tools. MIT/Apache licensed. Fork, self-host, or contribute. OSS Compute Dividends: up to 25% of compute costs paid back to open source authors via SBOM-verified attribution.',
    images: ['/open-source/opengraph-image'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Hanzo AI Open Source Platform',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Linux, macOS, Windows',
  url: 'https://hanzo.ai/open-source',
  description:
    'Hanzo AI publishes 723+ open-source repositories under MIT/Apache licenses. The OSS Compute Dividends program pays back up to 25% of compute costs to open source authors whose software is detected via SBOM (Software Bill of Materials) as running in Hanzo production infrastructure. Authors verify contributions via GitHub/GitLab, link a wallet or Stripe account, and receive automatic weekly payouts proportional to their code\'s compute usage.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'OSS Compute Dividends — free to join, earn proportional to your code\'s production compute usage',
  },
  creator: {
    '@type': 'Organization',
    name: 'Hanzo AI',
    url: 'https://hanzo.ai',
    sameAs: ['https://github.com/hanzoai'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
