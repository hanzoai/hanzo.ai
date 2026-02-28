import { ImageResponse } from 'next/og'
import { renderOgImage, HANZO_AI_THEME } from '@hanzo/og'
import { fetchModels, getOrgAndSlug, orgDisplayName } from '@/lib/models'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const revalidate = 3600

export async function generateImageMetadata({ params }: { params: Promise<{ org: string }> }) {
  const { org } = await params
  return [{ id: org, alt: `${orgDisplayName(org)} models on Hanzo AI` }]
}

export default async function Image({ params }: { params: Promise<{ org: string }> }) {
  const { org } = await params
  const data = await fetchModels()
  const orgModels = data.models.filter((m) => {
    const { org: modelOrg } = getOrgAndSlug(m.id)
    return modelOrg === org
  })
  const providerName = orgDisplayName(org)
  const count = orgModels.length

  return new ImageResponse(
    renderOgImage({
      ...HANZO_AI_THEME,
      layout: 'stat',
      stat: { value: `${count}`, label: 'Models' },
      title: `${providerName}\non Hanzo AI`,
      subtitle: `Access all ${providerName} models via one OpenAI-compatible API`,
      badge: providerName,
    }),
    { width: 1200, height: 630 }
  )
}
