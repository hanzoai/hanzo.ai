import { createOgImageResponse, HANZO_AI_THEME } from '@hanzo/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return createOgImageResponse({
    ...HANZO_AI_THEME,
    title: 'Developer\nExperience',
    subtitle: 'OpenAI-compatible API · Drop-in replacement',
    badge: 'Developers',
    layout: 'code',
    codeSnippet: `from hanzo import HanzoAI\nclient = HanzoAI()\nresponse = client.chat(\n  model="zen4-pro",\n  messages=[{"role": "user", "content": "Build me an agent"}]\n)`,
  })
}
