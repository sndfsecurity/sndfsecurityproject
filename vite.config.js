import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.sndfndf.com',

      dynamicRoutes: [
        '/',               
        '/about',
        '/course',
        '/contact',
        '/team',
        '/blog',
        '/career',

        // SHOP (IMPORTANT NOTE BELOW)
        '/shop',
        '/cart',
        '/checkout',

        // LEGAL
        '/privacy-policy',
        '/sndfterms',
        '/sndfdisclaimer',

        // BRANCHES
        '/branches/pune',
        '/branches/assam',

        // MEDIA
        '/media/gallery',

        // SERVICES
        '/services/ndf',
        '/services/sndf',
        '/services/owl',
        '/services/spydefence'
      ],

      changefreq: 'weekly',
      priority: 0.8
    })
  ]
})