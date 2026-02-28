import { createOgImageResponse, HANZO_AI_THEME } from '@hanzo/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return createOgImageResponse({
    ...HANZO_AI_THEME,
    layout: 'stat',
    stat: { value: '260+', label: 'MCP Tools' },
    title: 'Model Context\nProtocol',
    subtitle: 'The largest MCP toolkit for AI agents',
    badge: 'MCP',
    pills: ['Browser', 'Files', 'Database', 'GitHub', 'Slack', 'Email'],
  })
}
