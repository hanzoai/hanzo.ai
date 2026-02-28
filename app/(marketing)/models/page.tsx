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

function ProviderInitials({ org }: { org: string }) {
  const name = orgDisplayName(org)
  return (
    <span className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-xs font-bold text-muted-foreground uppercase">
      {name.slice(0, 2)}
    </span>
  )
}

function ProviderLogo({ org }: { org: string }) {
  const logo = orgLogoPath(org)
  if (logo) {
    return (
      <Image
        src={logo}
        alt={orgDisplayName(org)}
        width={32}
        height={32}
        className="w-8 h-8 object-contain rounded-lg"
        unoptimized
      />
    )
  }
  return <ProviderInitials org={org} />
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

export default async function ModelsPage() {
  const data = await fetchModels()
  const available = data.models.filter((m) => m.status !== 'coming-soon')

  // Group by org
  const byOrg: Record<string, typeof available> = {}
  for (const model of available) {
    const { org } = getOrgAndSlug(model.id)
    if (!byOrg[org]) byOrg[org] = []
    byOrg[org].push(model)
  }

  // Sort orgs by model count descending, but put hanzo first
  const sortedOrgs = Object.entries(byOrg).sort(([a, ac], [b, bc]) => {
    if (a === 'hanzo') return -1
    if (b === 'hanzo') return 1
    return bc.length - ac.length
  })

  // Featured models: Hanzo flagships + top third-party
  const featured = available
    .filter((m) => m.category === 'flagship' || ['openai', 'anthropic', 'google', 'x-ai'].includes(getOrgAndSlug(m.id).org))
    .slice(0, 12)

  const codeExample = `import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.HANZO_API_KEY,
  baseURL: 'https://api.hanzo.ai/v1'
})

const response = await client.chat.completions.create({
  model: 'anthropic/claude-sonnet-4.6',
  messages: [{ role: 'user', content: 'Hello!' }]
})`

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 text-center border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-xs text-muted-foreground mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            {data.total} models available · Updated live
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            AI Model Catalog
            <br />
            <span className="text-muted-foreground">{data.total}+ Models</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Access GPT-5.3, Claude Sonnet 4.6, Gemini 3.1 Pro, Zen, Llama 4, Grok, DeepSeek and{' '}
            {data.total - 10}+ more through one OpenAI-compatible API.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/signup"
              className="px-6 py-3 rounded-lg bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Get Free API Key
            </Link>
            <Link
              href="https://docs.hanzo.ai"
              className="px-6 py-3 rounded-lg border border-border text-sm font-medium hover:bg-secondary/50 transition-colors"
            >
              View Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Provider grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Browse by Provider</h2>
          <p className="text-muted-foreground mb-8">{sortedOrgs.length} providers · All accessible via one API key</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {sortedOrgs.map(([org, models]) => (
              <Link
                key={org}
                href={`/models/${org}`}
                className="p-4 rounded-xl border border-border bg-secondary/20 hover:bg-secondary/50 transition-all group flex flex-col gap-3"
              >
                <div className="flex items-center gap-2">
                  <ProviderLogo org={org} />
                  <span className="font-medium text-sm truncate">{orgDisplayName(org)}</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  {models.length} model{models.length !== 1 ? 's' : ''}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured models */}
      <section className="py-16 px-4 border-t border-border bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Featured Models</h2>
          <p className="text-muted-foreground mb-8">Flagship and most-used models across providers</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((model) => {
              const { org } = getOrgAndSlug(model.id)
              const ctx = getModelContext(model)
              return (
                <Link
                  key={model.id}
                  href={modelPagePath(model.id)}
                  className="p-4 rounded-xl border border-border bg-secondary/30 hover:bg-secondary/50 transition-all group flex flex-col gap-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <ProviderLogo org={org} />
                      <div className="min-w-0">
                        <div className="font-medium text-sm truncate">{model.name}</div>
                        <div className="text-xs text-muted-foreground">{orgDisplayName(org)}</div>
                      </div>
                    </div>
                    {ctx && (
                      <span className="shrink-0 text-xs text-muted-foreground bg-secondary rounded px-1.5 py-0.5">
                        {formatContext(ctx)}
                      </span>
                    )}
                  </div>
                  {model.description && (
                    <p className="text-xs text-muted-foreground line-clamp-2">{model.description}</p>
                  )}
                  {model.modalities && model.modalities.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {model.modalities.slice(0, 3).map((m) => (
                        <ModalityBadge key={m} modality={m} />
                      ))}
                    </div>
                  )}
                </Link>
              )
            })}
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm mb-4">
              Showing 12 of {available.length} available models
            </p>
          </div>
        </div>
      </section>

      {/* Code CTA */}
      <section className="py-16 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-border bg-secondary/20 p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-3">One API key. {data.total}+ models.</h2>
              <p className="text-muted-foreground">
                Drop-in replacement for OpenAI. Works with every SDK and framework.
              </p>
            </div>
            <div className="rounded-xl bg-background border border-border overflow-hidden mb-8">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-secondary/30">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">typescript</span>
              </div>
              <pre className="p-4 text-xs text-foreground/90 font-mono overflow-x-auto leading-relaxed">
                <code>{codeExample}</code>
              </pre>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/signup"
                className="px-6 py-3 rounded-lg bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Get Free API Key
              </Link>
              <Link
                href="https://docs.hanzo.ai"
                className="px-6 py-3 rounded-lg border border-border text-sm font-medium hover:bg-secondary/50 transition-colors"
              >
                Read the Docs
              </Link>
              <Link
                href="/chat"
                className="px-6 py-3 rounded-lg border border-border text-sm font-medium hover:bg-secondary/50 transition-colors"
              >
                Try in Chat
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 px-4 border-t border-border bg-secondary/10">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold">{data.total}+</div>
            <div className="text-sm text-muted-foreground mt-1">AI Models</div>
          </div>
          <div>
            <div className="text-3xl font-bold">{sortedOrgs.length}+</div>
            <div className="text-sm text-muted-foreground mt-1">Providers</div>
          </div>
          <div>
            <div className="text-3xl font-bold">1</div>
            <div className="text-sm text-muted-foreground mt-1">API Key</div>
          </div>
          <div>
            <div className="text-3xl font-bold">$0</div>
            <div className="text-sm text-muted-foreground mt-1">To Start</div>
          </div>
        </div>
      </section>
    </div>
  )
}
