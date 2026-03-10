import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = env.VITE_SITE_URL || 'https://example.com'

  let outDir = 'dist'
  let resolvedSiteUrl = siteUrl

  return {
    plugins: [
      react(),
      {
        name: 'seo-static-files',
        configResolved(config) {
          outDir = config.build?.outDir ?? 'dist'
          resolvedSiteUrl = loadEnv(config.mode, process.cwd(), '').VITE_SITE_URL || 'https://example.com'
        },
        closeBundle() {
          const root = process.cwd()
          const dist = join(root, outDir)
          const baseUrl = resolvedSiteUrl.replace(/\/$/, '')
          const lastmod = new Date().toISOString().slice(0, 10)

          writeFileSync(
            join(dist, 'robots.txt'),
            `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`,
            'utf-8'
          )

          writeFileSync(
            join(dist, 'sitemap.xml'),
            `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
            'utf-8'
          )
        },
      },
    ],
  }
})
