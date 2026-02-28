import { createOgImageResponse, HANZO_AI_THEME } from '@hanzo/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return createOgImageResponse({
    ...HANZO_AI_THEME,
    title: 'Hanzo Bot',
    subtitle: 'AI assistant for every platform',
    badge: 'Bot',
    pills: ['Slack', 'Discord', 'iMessage', 'Telegram', 'Teams', 'Web'],
  })
}
