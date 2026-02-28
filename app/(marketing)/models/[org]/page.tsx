import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  fetchModels,
  getOrgAndSlug,
  orgDisplayName,
  orgLogoPath,
  formatContext,
  getModelContext,
  MODALITY_STYLES,
  modelPagePath,
} from '@/lib/models'

export const revalidate = 3600

interface Props {
  params: Promise<{ org: string }>
}

export async function generateStaticParams() {
  const data = await fetchModels()
  const orgs = new Set<string>()
  for (const model of data.models) {
    if (model.status === 'coming-soon') continue
    const { org } = getOrgAndSlug(model.id)
    orgs.add(org)
  }
  return Array.from(orgs).map((org) => ({ org }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { org } = await params
  const data = await fetchModels()
  const models = data.models.filter((m) => {
    const { org: mOrg } = getOrgAndSlug(m.id)
    return mOrg === org && m.status !== 'coming-soon'
  })
  const providerName = orgDisplayName(org)
  const count = models.length
  return {
    title: `${providerName} Models via Hanzo AI — ${count} models`,
    description: `Access all ${count} ${providerName} model${count !== 1 ? 's' : ''} through Hanzo's OpenAI-compatible API. Single API key, unified billing, no rate limit juggling.`,
    openGraph: {
      title: `${providerName} Models via Hanzo AI`,
      description: `${count} ${providerName} models via one OpenAI-compatible API.`,
      url: `https://hanzo.ai/models/${org}`,
      siteName: 'Hanzo AI',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${providerName} Models via Hanzo AI`,
      description: `${count} ${providerName} models. One API key.`,
    },
  }
}

function ModalityBadge({ modality }: { modality: string }) {
  const style = MODALITY_STYLES[modality] ?? { bg: 'bg-secondary', text: 'text-muted-foreground' }
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wide ${style.bg} ${style.text}`}
    >
      {modality}
    </span>
  )
}

export default async function OrgPage({ params }: Props) {
  const { org } = await params
  const data = await fetchModels()

  const orgModels = data.models.filter((m) => {
    const { org: mOrg } = getOrgAndSlug(m.id)
    return mOrg === org && m.status !== 'coming-soon'
  })

  const providerName = orgDisplayName(org)
  const logo = orgLogoPath(org)

  if (orgModels.length === 0) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Provider not found</h1>
          <Link href="/models" className="text-muted-foreground hover:underline">
            ← Back to all models
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="pt-24 pb-12 px-4 border-b border-border">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/models" className="hover:text-foreground transition-colors">
              Models
            </Link>
            <span>/</span>
            <span className="text-foreground">{providerName}</span>
          </nav>

          <div className="flex items-center gap-4 mb-6">
            {logo ? (
              <Image
                src={logo}
                alt={providerName}
                width={48}
                height={48}
                className="w-12 h-12 object-contain rounded-xl"
                unoptimized
              />
            ) : (
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-lg font-bold">
                {providerName.slice(0, 2).toUpperCase()}
              </div>
            )}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{providerName} Models via Hanzo AI</h1>
              <p className="text-muted-foreground mt-1">{orgModels.length} models available</p>
            </div>
          </div>

          <p className="text-muted-foreground max-w-2xl">
            Access all {orgModels.length} {providerName} model{orgModels.length !== 1 ? 's' : ''} through
            Hanzo's OpenAI-compatible API. Single API key, unified billing, no rate limit juggling.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              href="/signup"
              className="px-5 py-2.5 rounded-lg bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Get API Access
            </Link>
            <Link
              href="https://docs.hanzo.ai"
              className="px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-secondary/50 transition-colors"
            >
              API Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Model grid */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {orgModels.map((model) => {
              const ctx = getModelContext(model)
              return (
                <Link
                  key={model.id}
                  href={modelPagePath(model.id)}
                  className="p-4 rounded-xl border border-border bg-secondary/30 hover:bg-secondary/50 transition-all group flex flex-col gap-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="font-medium text-sm leading-snug group-hover:text-foreground/80 transition-colors">
                      {model.name}
                    </div>
                    {ctx && (
                      <span className="shrink-0 text-xs text-muted-foreground bg-secondary rounded px-1.5 py-0.5">
                        {formatContext(ctx)}
                      </span>
                    )}
                  </div>

                  {model.description && (
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {model.description}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-1 mt-auto">
                    {(model.modalities ?? []).slice(0, 3).map((m) => (
                      <ModalityBadge key={m} modality={m} />
                    ))}
                    {model.status === 'preview' && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wide bg-yellow-500/15 text-yellow-400">
                        preview
                      </span>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 border-t border-border bg-secondary/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Use {providerName} models via Hanzo</h2>
          <p className="text-muted-foreground mb-6">
            One API key. Unified billing. OpenAI-compatible. Works with every existing SDK.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/signup"
              className="px-6 py-3 rounded-lg bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Start Free
            </Link>
            <Link
              href="/models"
              className="px-6 py-3 rounded-lg border border-border text-sm font-medium hover:bg-secondary/50 transition-colors"
            >
              Browse All Models
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
