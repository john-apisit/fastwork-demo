import type { PortfolioItem } from './content'
import { parsePortfolioMd, projectImages } from './parsePortfolioMd'

import beautyClinicMd from '../../../../company_website/beauty_clinic/business_requirement.md?raw'
import constructionMd from '../../../../company_website/construction/business_requirement.md?raw'
import resortMd from '../../../../company_website/hotel/business_requirement.md?raw'
import manufacturingMd from '../../../../company_website/manufacturing/business_requirement.md?raw'
import hrManagementMd from '../../../../crm_erp/hr_management/business_requirement.md?raw'
import golfCaddyMd from '../../../../mobile_app/golf_caddy/business_requirement.md?raw'
import inventoryMd from '../../../../stock_warehouse/inventory/business_requirement.md?raw'

const portfolioConfig = [
  {
    id: 'beauty_clinic',
    imageFolder: 'beauty_clinic',
    imageCount: 6,
    category: 'Company Website',
    content: beautyClinicMd,
  },
  {
    id: 'construction',
    imageFolder: 'construction',
    imageCount: 4,
    category: 'Company Website',
    content: constructionMd,
  },
  {
    id: 'resort',
    imageFolder: 'resort',
    imageCount: 6,
    category: 'Company Website',
    content: resortMd,
  },
  {
    id: 'manufactoring',
    imageFolder: 'manufactoring',
    imageCount: 5,
    category: 'Company Website',
    content: manufacturingMd,
  },
  {
    id: 'hr_management',
    imageFolder: 'hr_management',
    imageCount: 10,
    category: 'CRM & ERP',
    content: hrManagementMd,
  },
  {
    id: 'golf_caddy',
    imageFolder: 'golf_caddy',
    imageCount: 11,
    category: 'Mobile Application',
    content: golfCaddyMd,
  },
  {
    id: 'inventory',
    imageFolder: 'inventory',
    imageCount: 9,
    category: 'Stock & Warehouse',
    content: inventoryMd,
  },
] as const

export const portfolioItems: PortfolioItem[] = portfolioConfig.map((project) => {
  const { title, description, tags } = parsePortfolioMd(project.content)
  const images = projectImages(project.imageFolder, project.imageCount)

  return {
    id: project.id,
    title,
    category: project.category,
    description,
    image: images[0],
    images,
    tags,
  }
})
