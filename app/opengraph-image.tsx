import { createOgImageResponse, HANZO_AI_THEME } from '@hanzo/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return createOgImageResponse({
    ...HANZO_AI_THEME,
    title: 'The Complete\nAI Platform',
    subtitle: '390+ models · Agent SDK · LLM Gateway · 260+ MCP tools · Open source',
    pills: ['GPT-5.3', 'Claude Sonnet 4.6', 'Gemini 3.1 Pro', 'Llama 4', 'Zen'],
  })
}
