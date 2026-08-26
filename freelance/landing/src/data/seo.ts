export interface SiteSeo {
  siteName: string
  brandName: string
  title: string
  description: string
  keywords: string[]
  locale: string
  language: string
  author: string
  email: string
  phone: string
  phoneTel: string
  address: {
    locality: string
    country: string
    countryName: string
  }
  lineUrl: string
  siteUrl: string
  ogImage: string
  services: string[]
}

const defaultDescription =
  'รับทำเว็บไซต์ Company Website, Web Application, CRM/ERP, ระบบคลังสินค้า และ Mobile App ด้วย Vue, React, Node.js และ Flutter — ออกแบบและพัฒนาตามความต้องการ พร้อมส่งมอบ Source Code'

export const siteSeo: SiteSeo = {
  siteName: 'Mr.John Developer',
  brandName: 'Mr.John Dev',
  title: 'Mr.John Developer | รับทำเว็บไซต์ Web App CRM ERP Mobile App',
  description: defaultDescription,
  keywords: [
    'รับทำเว็บไซต์',
    'รับทำเว็บไซต์บริษัท',
    'รับพัฒนา Web Application',
    'รับทำ CRM',
    'รับทำ ERP',
    'ระบบคลังสินค้า',
    'รับทำ Mobile App',
    'Freelance Developer',
    'Vue Developer',
    'React Developer',
    'Flutter Developer',
    'Node.js Developer',
    'พัฒนาเว็บไซต์ กรุงเทพ',
  ],
  locale: 'th_TH',
  language: 'th',
  author: 'Mr.John Developer',
  email: 'john.apisits@gmail.com',
  phone: '088-694-5232',
  phoneTel: '+66886945232',
  address: {
    locality: 'กรุงเทพมหานคร',
    country: 'TH',
    countryName: 'ประเทศไทย',
  },
  lineUrl: 'https://line.me/ti/p/2NCTw-7W5C',
  siteUrl: '',
  ogImage:
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=630&fit=crop&q=80',
  services: [
    'Company Website',
    'Web Application',
    'CRM & ERP',
    'Stock & Warehouse Management',
    'Mobile Application',
  ],
}

export function resolveSiteUrl(envUrl?: string): string {
  const url = (envUrl ?? siteSeo.siteUrl).trim().replace(/\/+$/, '')
  return url
}

export function buildStructuredData(siteUrl: string) {
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: siteSeo.siteName,
      url: siteUrl,
      description: siteSeo.description,
      inLanguage: siteSeo.language,
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#business`,
      name: siteSeo.siteName,
      description: siteSeo.description,
      url: siteUrl,
      image: siteSeo.ogImage,
      email: siteSeo.email,
      telephone: siteSeo.phoneTel,
      areaServed: {
        '@type': 'Country',
        name: siteSeo.address.countryName,
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteSeo.address.locality,
        addressCountry: siteSeo.address.country,
      },
      knowsLanguage: ['th', 'en'],
      serviceType: siteSeo.services,
      sameAs: [siteSeo.lineUrl],
    },
  ]

  if (siteUrl) {
    graph.push({
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: siteSeo.title,
      description: siteSeo.description,
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#business` },
      inLanguage: siteSeo.language,
    })
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}

export function buildSeoHeadTags(siteUrl: string): string {
  const keywords = siteSeo.keywords.join(', ')
  const canonical = siteUrl ? `\n    <link rel="canonical" href="${siteUrl}/" />` : ''
  const ogUrl = siteUrl ? `\n    <meta property="og:url" content="${siteUrl}/" />` : ''

  return `<title>${siteSeo.title}</title>
    <meta name="description" content="${siteSeo.description}" />
    <meta name="keywords" content="${keywords}" />
    <meta name="author" content="${siteSeo.author}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta name="googlebot" content="index, follow" />
    <meta name="theme-color" content="#4f46e5" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${siteSeo.siteName}" />
    <meta property="og:title" content="${siteSeo.title}" />
    <meta property="og:description" content="${siteSeo.description}" />
    <meta property="og:locale" content="${siteSeo.locale}" />
    <meta property="og:image" content="${siteSeo.ogImage}" />
    <meta property="og:image:alt" content="${siteSeo.siteName} — Portfolio & Services" />${ogUrl}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${siteSeo.title}" />
    <meta name="twitter:description" content="${siteSeo.description}" />
    <meta name="twitter:image" content="${siteSeo.ogImage}" />${canonical}
    <script type="application/ld+json">${JSON.stringify(buildStructuredData(siteUrl))}</script>`
}
