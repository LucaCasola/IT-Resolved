import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'IT Resolved',
    short_name: 'IT R',
    description: 'Professional IT support and solutions for local businesses',
    start_url: '/',
    icons: [
      { src: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    background_color: '#ffffff',
    theme_color: '#ffffff',
    display: 'standalone',
  }
}