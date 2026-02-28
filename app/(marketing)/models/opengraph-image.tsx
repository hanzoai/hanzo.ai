import { createOgImageResponse, HANZO_AI_THEME } from '@hanzo/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return createOgImageResponse({
    ...HANZO_AI_THEME,
    layout: 'stat',
    stat: { value: '390+', label: 'AI Models' },
    title: 'Model\nCatalog',
    subtitle: 'One API to access every frontier model',
    badge: 'Models',
    pills: ['OpenAI', 'Anthropic', 'Google', 'Meta', 'xAI', 'DeepSeek', 'Zen'],
  })
}
