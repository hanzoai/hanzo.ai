import { createOgImageResponse, HANZO_AI_THEME } from '@hanzo/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return createOgImageResponse({
    ...HANZO_AI_THEME,
    layout: 'stat',
    stat: { value: '723+', label: 'Open Source Repositories' },
    title: 'Everything\nOpen Source',
    subtitle: 'hanzoai · luxfi · zenlm · zoo-labs',
    badge: 'Open Source',
  })
}
