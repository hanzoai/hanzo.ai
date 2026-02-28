import { createOgImageResponse, HANZO_AI_THEME } from '@hanzo/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return createOgImageResponse({
    ...HANZO_AI_THEME,
    title: 'Transparent\nAI Pricing',
    subtitle: 'Start free, scale with your team',
    badge: 'Pricing',
    layout: 'split',
    pills: ['Free', 'Pro $49/mo', 'Team $149/mo', 'Enterprise'],
  })
}
