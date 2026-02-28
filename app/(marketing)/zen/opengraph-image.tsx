import { createOgImageResponse, HANZO_AI_THEME } from '@hanzo/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return createOgImageResponse({
    ...HANZO_AI_THEME,
    title: 'Zen AI\nModel Family',
    subtitle: 'Frontier models by Hanzo · nano to 1T+ parameters',
    badge: 'Zen Models',
    pills: ['zen4', 'zen4-pro', 'zen4-max', 'zen4-coder', 'zen4-thinking', 'zen4-ultra'],
  })
}
