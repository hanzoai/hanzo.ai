export interface ModelSpec {
  params?: string
  activeParams?: string
  context?: number
  arch?: string
}

export interface ModelData {
  id: string
  name: string
  fullName?: string
  provider: string
  description?: string
  context?: number
  modalities?: string[]
  status: string
  category: string
  spec?: ModelSpec
  features?: string[]
  huggingface?: string
  github?: string
  aliases?: string[]
  tier?: string
  generation?: string
}

export interface ModelsResponse {
  updated: string
  total: number
  models: ModelData[]
}

export async function fetchModels(): Promise<ModelsResponse> {
  const res = await fetch('https://models.hanzo.ai/v1/models', {
    next: { revalidate: 3600 },
  })
  if (!res.ok) throw new Error('Failed to fetch models')
  return res.json()
}

export function getOrgAndSlug(modelId: string): { org: string; slug: string } {
  if (modelId.includes('/')) {
    const [org, ...rest] = modelId.split('/')
    return { org, slug: rest.join('/') }
  }
  return { org: 'hanzo', slug: modelId }
}

export function modelPagePath(modelId: string): string {
  const { org, slug } = getOrgAndSlug(modelId)
  return `/models/${org}/${slug}`
}

export function getModelContext(model: ModelData): number | undefined {
  return model.context ?? model.spec?.context
}

export function formatContext(ctx: number | undefined): string {
  if (!ctx) return 'N/A'
  if (ctx >= 1_000_000) return `${Math.round(ctx / 1_000_000)}M`
  if (ctx >= 1_000) return `${Math.round(ctx / 1000)}K`
  return String(ctx)
}

// Map org slug → display name
export const ORG_DISPLAY_NAMES: Record<string, string> = {
  hanzo: 'Hanzo',
  openai: 'OpenAI',
  anthropic: 'Anthropic',
  google: 'Google',
  'meta-llama': 'Meta',
  'x-ai': 'xAI',
  mistralai: 'Mistral',
  deepseek: 'DeepSeek',
  qwen: 'Qwen',
  nvidia: 'NVIDIA',
  'z-ai': 'Z.ai',
  'arcee-ai': 'Arcee AI',
  minimax: 'Minimax',
  allenai: 'Allen AI',
  nousresearch: 'Nous Research',
  liquid: 'Liquid AI',
  moonshotai: 'Moonshot AI',
  amazon: 'Amazon',
  perplexity: 'Perplexity',
  baidu: 'Baidu',
  cohere: 'Cohere',
  'bytedance-seed': 'ByteDance Seed',
  openrouter: 'OpenRouter',
  microsoft: 'Microsoft',
  inflection: 'Inflection',
  sao10k: 'Sao10K',
  'aion-labs': 'Aion Labs',
  thedrummer: 'TheDrummer',
  stepfun: 'StepFun',
  relace: 'Relace',
  morph: 'Morph',
  inception: 'Inception',
  neversleep: 'NeverSleep',
  upstage: 'Upstage',
  writer: 'Writer',
  xiaomi: 'Xiaomi',
  'nex-agi': 'Nex-AGI',
  essentialai: 'EssentialAI',
  'prime-intellect': 'Prime Intellect',
  deepcogito: 'DeepCogito',
  kwaipilot: 'KwaiPilot',
  'ibm-granite': 'IBM Granite',
  alibaba: 'Alibaba',
  opengvlab: 'OpenGVLab',
  meituan: 'Meituan',
  ai21: 'AI21',
  bytedance: 'ByteDance',
  switchpoint: 'Switchpoint',
  cognitivecomputations: 'Cognitive Computations',
  tencent: 'Tencent',
  tngtech: 'TNG Tech',
  eleutherai: 'EleutherAI',
  alfredpros: 'AlfredPros',
  raifle: 'Raifle',
  'anthracite-org': 'Anthracite',
  alpindale: 'Alpindale',
  mancer: 'Mancer',
  undi95: 'Undi95',
  gryphe: 'Gryphe',
}

export function orgDisplayName(org: string): string {
  return ORG_DISPLAY_NAMES[org] ?? org
}

// Map org slug → logo path (relative to /public)
export function orgLogoPath(org: string): string | null {
  const logoMap: Record<string, string> = {
    hanzo: '/icon.svg',
    openai: '/logos/openai.svg',
    anthropic: '/logos/anthropic.svg',
    google: '/logos/google.svg',
    'x-ai': '/logos/xai.svg',
    mistralai: '/logos/mistral.svg',
    deepseek: '/logos/deepseek.svg',
    qwen: '/logos/qwen.svg',
    moonshotai: '/logos/moonshot.svg',
    'meta-llama': null,
    nvidia: null,
    cohere: null,
    perplexity: null,
    amazon: null,
    groq: '/logos/groq.svg',
    together: '/logos/together.svg',
  }
  return logoMap[org] ?? null
}

export const MODALITY_STYLES: Record<string, { bg: string; text: string }> = {
  text:   { bg: 'bg-blue-500/15',   text: 'text-blue-400' },
  vision: { bg: 'bg-purple-500/15', text: 'text-purple-400' },
  code:   { bg: 'bg-green-500/15',  text: 'text-green-400' },
  audio:  { bg: 'bg-yellow-500/15', text: 'text-yellow-400' },
  math:   { bg: 'bg-orange-500/15', text: 'text-orange-400' },
  image:  { bg: 'bg-pink-500/15',   text: 'text-pink-400' },
  video:  { bg: 'bg-cyan-500/15',   text: 'text-cyan-400' },
}
