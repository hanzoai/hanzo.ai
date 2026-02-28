import { createOgImageResponse, HANZO_AI_THEME } from '@hanzo/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return createOgImageResponse({
    ...HANZO_AI_THEME,
    title: 'Hanzo\nAI Products',
    subtitle: 'The full AI stack, vertically integrated',
    badge: 'Products',
    layout: 'split',
    pills: ['LLM Gateway', 'Chat', 'Agent SDK', 'MCP Tools', 'Operative', 'Platform'],
  })
}
