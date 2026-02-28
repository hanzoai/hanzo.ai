import { createOgImageResponse, HANZO_AI_THEME } from '@hanzo/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return createOgImageResponse({
    ...HANZO_AI_THEME,
    title: 'Works With\nEverything',
    subtitle: 'Drop-in replacement for any AI SDK or framework',
    badge: 'Integrations',
    pills: ['OpenAI SDK', 'LangChain', 'Vercel AI', 'LlamaIndex', 'AutoGen', 'CrewAI'],
  })
}
