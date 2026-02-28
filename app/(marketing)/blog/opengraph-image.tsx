import { createOgImageResponse, HANZO_AI_THEME } from '@hanzo/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return createOgImageResponse({
    ...HANZO_AI_THEME,
    title: 'Hanzo AI\nBlog',
    subtitle: 'Insights on AI infrastructure, agents, and the future',
    badge: 'Blog',
  })
}
