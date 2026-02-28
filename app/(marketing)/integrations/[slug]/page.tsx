import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { INTEGRATIONS, getIntegration, INTEGRATION_CATEGORIES } from '@/lib/integrations'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return INTEGRATIONS.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const integration = getIntegration(slug)

  if (!integration) {
    return { title: 'Integration Not Found — Hanzo AI' }
  }

  const title = `Use Hanzo AI with ${integration.name}`
  const description = integration.description

  return {
    title: `${title} — Hanzo AI`,
    description,
    openGraph: {
      title,
      description,
      url: `https://hanzo.ai/integrations/${slug}`,
      siteName: 'Hanzo AI',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

function CodeBlock({ code, lang }: { code: string; lang: string }) {
  return (
    <div className="rounded-lg border border-border bg-[#0d0d0d] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border">
        <span className="text-xs text-muted-foreground font-mono">{lang}</span>
      </div>
      <pre className="p-4 overflow-x-auto text-sm text-[#cccccc] font-mono leading-relaxed whitespace-pre">
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default async function IntegrationPage({ params }: Props) {
  const { slug } = await params
  const integration = getIntegration(slug)

  if (!integration) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['HowTo', 'SoftwareApplication'],
    name: `Use Hanzo AI with ${integration.name}`,
    description: integration.description,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Organization', name: integration.creator, url: integration.creatorUrl },
    license: integration.upstream,
    step: integration.examples.map((ex, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: ex.label,
      text: ex.code,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto max-w-4xl px-4 py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
            <Link href="/integrations" className="hover:text-foreground transition-colors">
              Integrations
            </Link>
            <span>/</span>
            <span className="text-foreground">{integration.name}</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">{integration.icon}</span>
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {INTEGRATION_CATEGORIES[integration.category]}
                </span>
                <h1 className="text-4xl font-bold text-foreground">
                  Use Hanzo AI with {integration.name}
                </h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">{integration.description}</p>
          </div>

          {/* API base info */}
          <div className="mb-10 rounded-xl border border-red-500/20 bg-red-500/5 p-5">
            <p className="text-sm text-muted-foreground mb-2">
              <strong className="text-foreground">Base URL:</strong>{' '}
              <code className="font-mono text-red-400">https://api.hanzo.ai/v1</code>
            </p>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">API Key:</strong> Get yours at{' '}
              <Link href="/signup" className="text-red-400 hover:underline">
                hanzo.ai/signup
              </Link>{' '}
              · Fully OpenAI-compatible · 390+ models available
            </p>
          </div>

          {/* Attribution */}
          <div className="mb-10 rounded-xl border border-border bg-muted/30 p-5 flex items-start gap-4">
            <div className="text-2xl">{integration.icon}</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground mb-0.5">
                Created by{' '}
                <a
                  href={integration.creatorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:underline"
                >
                  {integration.creator}
                </a>
              </p>
              <p className="text-xs text-muted-foreground mb-2">
                License:{' '}
                <span className="font-mono bg-muted px-1.5 py-0.5 rounded text-foreground">{integration.license}</span>
                {' · '}
                <a
                  href={integration.upstream}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  View source on GitHub →
                </a>
              </p>
              <p className="text-xs text-muted-foreground">
                Hanzo AI is OpenAI-compatible, so existing {integration.name} code works with zero refactoring. We deeply appreciate the {integration.creator} team for building and maintaining this open-source project.
              </p>
            </div>
          </div>

          {/* Code examples */}
          <div className="space-y-10">
            {integration.examples.map((example, i) => (
              <div key={i}>
                <h2 className="text-xl font-semibold text-foreground mb-4">{example.label}</h2>
                <CodeBlock code={example.code} lang={example.lang} />
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Ready to get started?
            </h2>
            <p className="text-muted-foreground mb-6">
              Create a free account and get your API key. 100K API calls/month free forever.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/signup"
                className="rounded-lg bg-red-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-600 transition-colors"
              >
                Get API Key — Free
              </Link>
              <Link
                href="/models"
                className="rounded-lg border border-border px-6 py-2.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                Browse 390+ Models
              </Link>
            </div>
          </div>

          {/* Other integrations */}
          <div className="mt-12">
            <h2 className="text-lg font-semibold text-foreground mb-4">More integrations</h2>
            <div className="flex flex-wrap gap-2">
              {INTEGRATIONS.filter((i) => i.slug !== slug).map((i) => (
                <Link
                  key={i.slug}
                  href={`/integrations/${i.slug}`}
                  className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground hover:border-red-500/50 hover:text-foreground transition-colors"
                >
                  {i.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
