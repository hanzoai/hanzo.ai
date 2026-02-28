import { ImageResponse } from 'next/og'
import { renderOgImage, HANZO_AI_THEME } from '@hanzo/og'
import { fetchModels, getOrgAndSlug, orgDisplayName, formatContext, getModelContext } from '@/lib/models'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const revalidate = 3600

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ org: string; model: string }>
}) {
  const { org, model } = await params
  const modelId = org === 'hanzo' ? model : `${org}/${model}`
  return [{ id: modelId, alt: `${model} model on Hanzo AI` }]
}

export default async function Image({
  params,
}: {
  params: Promise<{ org: string; model: string }>
}) {
  const { org, model: modelSlug } = await params
  const modelId = org === 'hanzo' ? modelSlug : `${org}/${modelSlug}`

  let modelName = modelSlug
  let contextStr = ''
  let modalities: string[] = []
  let providerName = orgDisplayName(org)

  try {
    const data = await fetchModels()
    const found = data.models.find((m) => m.id === modelId)
    if (found) {
      modelName = found.name
      const ctx = getModelContext(found)
      contextStr = ctx ? formatContext(ctx) : ''
      modalities = found.modalities ?? []
      providerName = orgDisplayName(found.provider ?? org)
    }
  } catch {
    // fallback to params
  }

  return new ImageResponse(
    renderOgImage({
      ...HANZO_AI_THEME,
      layout: 'model',
      title: modelName,
      provider: providerName,
      contextWindow: contextStr || undefined,
      modalities,
      subtitle: `Access via api.hanzo.ai/v1 · model: "${modelId}"`,
      badge: providerName,
    }),
    { width: 1200, height: 630 }
  )
}
