import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.sndfndf.com',

      // ✅ 🔥 ADD THIS LINE (MOST IMPORTANT FIX)
      generateRobotsTxt: false,

      dynamicRoutes: [
        '/',
        '/about',
        '/course',
        '/contact',
        '/team',
        '/blog',
        '/career',
        '/shop',
        '/cart',
        '/checkout',
        '/privacy-policy',
        '/sndfterms',
        '/sndfdisclaimer',
        '/branches/pune',
        '/branches/assam',
        '/media/gallery',
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