import Link from 'next/link'
import { INTEGRATIONS, INTEGRATION_CATEGORIES, type Integration } from '@/lib/integrations'

function IntegrationCard({ integration }: { integration: Integration }) {
  return (
    <Link
      href={`/integrations/${integration.slug}`}
      className="group flex flex-col gap-2 rounded-xl border border-border bg-card p-5 hover:border-red-500/50 hover:bg-card/80 transition-colors"
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{integration.icon}</span>
        <span className="font-semibold text-foreground group-hover:text-red-400 transition-colors">
          {integration.name}
        </span>
      </div>
      <p className="text-sm text-muted-foreground line-clamp-2">{integration.description}</p>
      <span className="text-xs text-muted-foreground/60 capitalize">{INTEGRATION_CATEGORIES[integration.category]}</span>
    </Link>
  )
}

export default function IntegrationsPage() {
  const categories = Object.entries(INTEGRATION_CATEGORIES) as [Integration['category'], string][]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-6xl px-4 py-20">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Works with <span className="text-red-500">everything</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Hanzo AI is fully OpenAI-compatible. Use any SDK, framework, or language you already know.
            Drop in{' '}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">https://api.hanzo.ai/v1</code>{' '}
            as the base URL and your Hanzo API key.
          </p>
        </div>

        {/* Quick start */}
        <div className="mb-16 rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">Quick start — any OpenAI SDK</h2>
          <pre className="text-sm text-muted-foreground overflow-x-auto font-mono">
{`# Python
client = OpenAI(base_url="https://api.hanzo.ai/v1", api_key=HANZO_API_KEY)

# TypeScript
const client = new OpenAI({ baseURL: "https://api.hanzo.ai/v1", apiKey: HANZO_API_KEY });

# Go
client := openai.NewClient(option.WithBaseURL("https://api.hanzo.ai/v1"), option.WithAPIKey(HANZO_API_KEY))`}
          </pre>
        </div>

        {/* Categories */}
        {categories.map(([category, label]) => {
          const items = INTEGRATIONS.filter((i) => i.category === category)
          if (items.length === 0) return null
          return (
            <section key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">{label}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((integration) => (
                  <IntegrationCard key={integration.slug} integration={integration} />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
