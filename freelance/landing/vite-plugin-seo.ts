import type { Plugin } from 'vite'
import { buildSeoHeadTags, resolveSiteUrl } from './src/data/seo'

export function seoPlugin(): Plugin {
  let siteUrl = ''

  return {
    name: 'vite-plugin-seo',
    configResolved(config) {
      siteUrl = resolveSiteUrl(config.env.VITE_SITE_URL)
    },
    transformIndexHtml(html) {
      const seoHead = buildSeoHeadTags(siteUrl)

      return html
        .replace(/<!-- SEO_HEAD -->[\s\S]*?<!-- \/SEO_HEAD -->/, `<!-- SEO_HEAD -->\n    ${seoHead}\n    <!-- /SEO_HEAD -->`)
        .replace(/<html lang="[^"]*">/, '<html lang="th">')
    },
    generateBundle() {
      if (!siteUrl) return

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
      })

      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`,
      })
    },
  }
}
