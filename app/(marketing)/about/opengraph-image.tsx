import { createOgImageResponse, HANZO_AI_THEME } from '@hanzo/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return createOgImageResponse({
    ...HANZO_AI_THEME,
    title: 'About\nHanzo AI',
    subtitle: "Frontier AI infrastructure · Techstars '17 · San Francisco",
    badge: 'About',
    pills: ['Amazon', 'Google', 'Microsoft', 'NVIDIA', 'Techstars', 'Lux'],
  })
}
