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
  type ModelData,
} from '@/lib/models'

export const revalidate = 3600

interface Props {
  params: Promise<{ org: string; model: string }>
}

export async function generateStaticParams() {
  const data = await fetchModels()
  return data.models
    .filter((m) => m.status !== 'coming-soon')
    .map((m) => {
      const { org, slug } = getOrgAndSlug(m.id)
      return { org, model: slug }
    })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { org, model: modelSlug } = await params
  const data = await fetchModels()
  const modelId = org === 'hanzo' ? modelSlug : `${org}/${modelSlug}`
  const model = data.models.find((m) => m.id === modelId)

  if (!model) {
    return { title: 'Model Not Found — Hanzo AI' }
  }

  const ctx = getModelContext(model)
  const desc = model.description
    ? `${model.description.slice(0, 140)}${model.description.length > 140 ? '...' : ''} Access via Hanzo's OpenAI-compatible API.${ctx ? ` Context: ${formatContext(ctx)}.` : ''} Get started free.`
    : `Use ${model.name} via Hanzo's OpenAI-compatible API. Single key, unified billing.${ctx ? ` ${formatContext(ctx)} context window.` : ''} Get started free.`

  return {
    title: `${model.name} — Use via Hanzo AI API`,
    description: desc,
    openGraph: {
      title: `${model.name} — Hanzo AI`,
      description: desc,
      url: `https://hanzo.ai${modelPagePath(model.id)}`,
      siteName: 'Hanzo AI',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${model.name} — Hanzo AI`,
      description: desc,
    },
  }
}

function ModalityBadge({ modality }: { modality: string }) {
  const style = MODALITY_STYLES[modality] ?? { bg: 'bg-secondary', text: 'text-muted-foreground' }
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium uppercase tracking-wide ${style.bg} ${style.text}`}
    >
      {modality}
    </span>
  )
}

function CodeBlock({ code, lang }: { code: string; lang: string }) {
  return (
    <div className="rounded-xl bg-background border border-border overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-secondary/30">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="ml-2 text-xs text-muted-foreground font-mono">{lang}</span>
      </div>
      <pre className="p-4 text-xs text-foreground/90 font-mono overflow-x-auto leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  )
}

function buildCodeExamples(model: ModelData) {
  const modelId = model.id
  const ts = `import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.HANZO_API_KEY,
  baseURL: 'https://api.hanzo.ai/v1'
})

const response = await client.chat.completions.create({
  model: '${modelId}',
  messages: [{ role: 'user', content: 'Hello!' }]
})

console.log(response.choices[0].message.content)`

  const py = `from openai import OpenAI

client = OpenAI(
    api_key=os.environ["HANZO_API_KEY"],
    base_url="https://api.hanzo.ai/v1"
)

response = client.chat.completions.create(
    model="${modelId}",
    messages=[{"role": "user", "content": "Hello!"}]
)

print(response.choices[0].message.content)`

  const curl = `curl https://api.hanzo.ai/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $HANZO_API_KEY" \\
  -d '{
    "model": "${modelId}",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'`

  const go = `package main

import (
    "context"
    "fmt"
    "os"

    "github.com/sashabaranov/go-openai"
)

func main() {
    cfg := openai.DefaultConfig(os.Getenv("HANZO_API_KEY"))
    cfg.BaseURL = "https://api.hanzo.ai/v1"
    client := openai.NewClientWithConfig(cfg)

    resp, _ := client.CreateChatCompletion(context.Background(),
        openai.ChatCompletionRequest{
            Model: "${modelId}",
            Messages: []openai.ChatCompletionMessage{
                {Role: openai.ChatMessageRoleUser, Content: "Hello!"},
            },
        },
    )
    fmt.Println(resp.Choices[0].Message.Content)
}`

  return { ts, py, curl, go }
}

function buildJsonLd(model: ModelData) {
  const ctx = getModelContext(model)
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: model.name,
    description: model.description,
    url: `https://hanzo.ai${modelPagePath(model.id)}`,
    applicationCategory: 'AIApplication',
    provider: {
      '@type': 'Organization',
      name: 'Hanzo AI',
      url: 'https://hanzo.ai',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Pay-per-token via Hanzo AI API',
    },
    ...(ctx ? { featureList: [`${formatContext(ctx)} context window`] } : {}),
  }
}

export default async function ModelPage({ params }: Props) {
  const { org, model: modelSlug } = await params
  const data = await fetchModels()
  const modelId = org === 'hanzo' ? modelSlug : `${org}/${modelSlug}`
  const model = data.models.find((m) => m.id === modelId)

  if (!model) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Model not found</h1>
          <Link href="/models" className="text-muted-foreground hover:underline">
            ← Back to all models
          </Link>
        </div>
      </div>
    )
  }

  const ctx = getModelContext(model)
  const logo = orgLogoPath(org)
  const providerName = orgDisplayName(org)
  const { ts, py, curl, go } = buildCodeExamples(model)
  const jsonLd = buildJsonLd(model)

  // Related models: same org, excluding current
  const related = data.models
    .filter((m) => {
      const { org: mOrg } = getOrgAndSlug(m.id)
      return mOrg === org && m.id !== model.id && m.status !== 'coming-soon'
    })
    .slice(0, 6)

  const specRows: { label: string; value: string }[] = []
  if (ctx) specRows.push({ label: 'Context Window', value: formatContext(ctx) })
  if (model.spec?.arch) specRows.push({ label: 'Architecture', value: model.spec.arch })
  if (model.spec?.params) specRows.push({ label: 'Parameters', value: model.spec.params })
  if (model.spec?.activeParams) specRows.push({ label: 'Active Params', value: model.spec.activeParams })
  if (model.modalities?.length) specRows.push({ label: 'Modalities', value: model.modalities.join(', ') })
  specRows.push({ label: 'Status', value: model.status })
  specRows.push({ label: 'Category', value: model.category })
  specRows.push({ label: 'Model ID', value: model.id })

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <section className="pt-24 pb-12 px-4 border-b border-border">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
              <Link href="/models" className="hover:text-foreground transition-colors">
                Models
              </Link>
              <span>/</span>
              <Link href={`/models/${org}`} className="hover:text-foreground transition-colors">
                {providerName}
              </Link>
              <span>/</span>
              <span className="text-foreground">{modelSlug}</span>
            </nav>

            <div className="flex items-start gap-4 mb-6">
              {logo ? (
                <Image
                  src={logo}
                  alt={providerName}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain rounded-xl shrink-0 mt-1"
                  unoptimized
                />
              ) : (
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-lg font-bold shrink-0 mt-1">
                  {providerName.slice(0, 2).toUpperCase()}
                </div>
              )}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">{model.name}</h1>
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <Link
                    href={`/models/${org}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {providerName}
                  </Link>
                  {model.tier && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-secondary border border-border text-muted-foreground">
                      {model.tier}
                    </span>
                  )}
                  {model.status === 'preview' && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/15 text-yellow-400">
                      preview
                    </span>
                  )}
                </div>
              </div>
            </div>

            {model.description && (
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-6">
                {model.description}
              </p>
            )}

            {model.modalities && model.modalities.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {model.modalities.map((m) => (
                  <ModalityBadge key={m} modality={m} />
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              <Link
                href="/signup"
                className="px-5 py-2.5 rounded-lg bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Get API Key
              </Link>
              <Link
                href="https://docs.hanzo.ai"
                className="px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-secondary/50 transition-colors"
              >
                View Docs
              </Link>
              <Link
                href="/chat"
                className="px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-secondary/50 transition-colors"
              >
                Try in Chat
              </Link>
              {model.huggingface && (
                <a
                  href={model.huggingface}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-secondary/50 transition-colors"
                >
                  HuggingFace ↗
                </a>
              )}
              {model.github && (
                <a
                  href={model.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-secondary/50 transition-colors"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Specs + Code */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Spec table */}
            <div className="lg:col-span-2">
              <h2 className="text-lg font-semibold mb-4">Specifications</h2>
              <div className="rounded-xl border border-border overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {specRows.map((row, i) => (
                      <tr
                        key={row.label}
                        className={i % 2 === 0 ? 'bg-secondary/20' : 'bg-transparent'}
                      >
                        <td className="px-4 py-3 text-muted-foreground font-medium whitespace-nowrap">
                          {row.label}
                        </td>
                        <td className="px-4 py-3 text-foreground font-mono text-xs break-all">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {model.features && model.features.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold mb-3">Features</h3>
                  <ul className="space-y-2">
                    {model.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-muted-foreground shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Code examples */}
            <div className="lg:col-span-3">
              <h2 className="text-lg font-semibold mb-4">Quick Start</h2>
              <div className="space-y-4">
                <CodeBlock code={ts} lang="TypeScript" />
                <CodeBlock code={py} lang="Python" />
                <CodeBlock code={curl} lang="cURL" />
                <CodeBlock code={go} lang="Go" />
              </div>
            </div>
          </div>
        </section>

        {/* Related models */}
        {related.length > 0 && (
          <section className="py-12 px-4 border-t border-border bg-secondary/10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-lg font-semibold mb-6">
                More from {providerName}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {related.map((m) => {
                  const mCtx = getModelContext(m)
                  return (
                    <Link
                      key={m.id}
                      href={modelPagePath(m.id)}
                      className="p-3 rounded-xl border border-border bg-secondary/30 hover:bg-secondary/50 transition-all flex flex-col gap-2"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="font-medium text-sm">{m.name}</div>
                        {mCtx && (
                          <span className="shrink-0 text-xs text-muted-foreground">
                            {formatContext(mCtx)}
                          </span>
                        )}
                      </div>
                      {m.description && (
                        <p className="text-xs text-muted-foreground line-clamp-2">{m.description}</p>
                      )}
                    </Link>
                  )
                })}
              </div>
              <div className="mt-6">
                <Link
                  href={`/models/${org}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  View all {providerName} models →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-12 px-4 border-t border-border">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">
              Use {model.name} via Hanzo AI
            </h2>
            <p className="text-muted-foreground mb-6">
              One API key. 390+ models. OpenAI-compatible. Start free.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/signup"
                className="px-6 py-3 rounded-lg bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Get Free API Key
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
    </>
  )
}
