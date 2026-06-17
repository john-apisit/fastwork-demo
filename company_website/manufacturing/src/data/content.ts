export interface Product {
  id: string
  category: 'cnc' | 'metal' | 'assembly' | 'custom'
  image: string
  specs: { th: string[]; en: string[] }
}

export interface Standard {
  id: string
  icon: string
  image: string
}

export interface Document {
  id: string
  fileSize: string
  updatedAt: string
}

export const products: Product[] = [
  {
    id: 'cnc-bracket',
    category: 'cnc',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
    specs: {
      th: ['วัสดุ: อลูมิเนียม 6061', 'ความแม่นยำ: ±0.01 mm', 'เคลือบ: Anodized'],
      en: ['Material: Aluminum 6061', 'Tolerance: ±0.01 mm', 'Finish: Anodized'],
    },
  },
  {
    id: 'steel-shaft',
    category: 'metal',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    specs: {
      th: ['วัสดุ: เหล็กกล้า S45C', 'ความแข็ง: HRC 45-50', 'การตัด: Turning & Grinding'],
      en: ['Material: S45C Steel', 'Hardness: HRC 45-50', 'Process: Turning & Grinding'],
    },
  },
  {
    id: 'gear-assembly',
    category: 'assembly',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    specs: {
      th: ['ประเภท: Gear Assembly', 'Module: M1-M5', 'ทดสอบ: Run-in Test'],
      en: ['Type: Gear Assembly', 'Module: M1-M5', 'Testing: Run-in Test'],
    },
  },
  {
    id: 'custom-housing',
    category: 'custom',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    specs: {
      th: ['ผลิตตามแบบลูกค้า', 'วัสดุ: Stainless 304', 'QC: 100% Dimension Check'],
      en: ['Custom per drawing', 'Material: Stainless 304', 'QC: 100% Dimension Check'],
    },
  },
  {
    id: 'cnc-plate',
    category: 'cnc',
    image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?w=800&q=80',
    specs: {
      th: ['ขนาด: 500×300 mm', 'ความหนา: 5-50 mm', 'CNC Milling 5-Axis'],
      en: ['Size: 500×300 mm', 'Thickness: 5-50 mm', 'CNC Milling 5-Axis'],
    },
  },
  {
    id: 'precision-bush',
    category: 'metal',
    image: 'https://images.pexels.com/photos/162625/grinder-hitachi-power-tool-flexible-162625.jpeg?w=800&q=80',
    specs: {
      th: ['วัสดุ: ทองเหลือง C3604', 'Surface Ra 0.8', 'Packaging: VCI Bag'],
      en: ['Material: Brass C3604', 'Surface Ra 0.8', 'Packaging: VCI Bag'],
    },
  },
]

export const standards: Standard[] = [
  {
    id: 'iso9001',
    icon: 'ISO',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
  },
  {
    id: 'iso14001',
    icon: 'ENV',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
  },
  {
    id: 'iatf16949',
    icon: 'IATF',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
  },
  {
    id: 'rohs',
    icon: 'RoHS',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
  },
]

export const documents: Document[] = [
  { id: 'company-profile', fileSize: '2.4 MB', updatedAt: '2025-11-15' },
  { id: 'product-catalog', fileSize: '5.1 MB', updatedAt: '2025-12-01' },
  { id: 'quality-manual', fileSize: '1.8 MB', updatedAt: '2025-10-20' },
  { id: 'certificates', fileSize: '3.2 MB', updatedAt: '2025-09-05' },
]

export const heroImage =
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80'

export const aboutImage =
  'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?w=1200&q=80'

export const factoryImage =
  'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&q=80'
