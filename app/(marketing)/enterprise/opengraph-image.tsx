import { createOgImageResponse, HANZO_AI_THEME } from '@hanzo/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return createOgImageResponse({
    ...HANZO_AI_THEME,
    title: 'Enterprise\nAI Infrastructure',
    subtitle: 'Private cloud · On-prem · Dedicated support',
    badge: 'Enterprise',
    pills: ['SOC 2', 'GDPR', '99.9% SLA', 'Private Cloud', 'On-Prem', 'Custom Models'],
  })
}
