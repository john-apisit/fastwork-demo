export interface Package {
  name: string
  price: string
  description: string
  features: string[]
  duration: string
}

export interface Service {
  id: string
  title: string
  subtitle: string
  description: string
  icon: string
  image: string
  suitableFor: string[]
  deliverables?: string[]
  examples?: string[]
  technologies: string[]
  steps: string[]
  packages: Package[]
}

export interface PortfolioItem {
  id: string
  title: string
  category: string
  description: string
  image: string
  images: string[]
  tags: string[]
}

export interface TechCategory {
  name: string
  items: string[]
}

export const navLinks = [
  { label: 'หน้าแรก', href: '#home' },
  { label: 'บริการ', href: '#services' },
  { label: 'ผลงาน', href: '#portfolio' },
  { label: 'เทคโนโลยี', href: '#tech' },
  { label: 'ติดต่อ', href: '#contact' },
]

export const heroStats = [
  { value: '50+', label: 'โปรเจกต์สำเร็จ' },
  { value: '5', label: 'บริการหลัก' },
  { value: '7-60', label: 'วันส่งมอบ' },
  { value: '100%', label: 'Source Code' },
]

export const services: Service[] = [
  {
    id: 'company-website',
    title: 'Company Website',
    subtitle: 'เว็บไซต์บริษัท องค์กร และธุรกิจ',
    description:
      'รับออกแบบและพัฒนาเว็บไซต์บริษัท เว็บไซต์องค์กร เว็บไซต์แนะนำบริการ และ Landing Page เพื่อสร้างความน่าเชื่อถือให้ธุรกิจ รองรับการใช้งานทั้งบนคอมพิวเตอร์ แท็บเล็ต และมือถือ',
    icon: '🌐',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    suitableFor: [
      'บริษัทเปิดใหม่',
      'SME',
      'โรงงาน',
      'ธุรกิจบริการ',
      'คลินิก',
      'โรงแรม',
      'ร้านอาหาร',
      'Startup',
      'ฟรีแลนซ์และผู้ประกอบการ',
    ],
    deliverables: [
      'เว็บไซต์ Responsive รองรับทุกอุปกรณ์',
      'หน้าแนะนำบริษัทและบริการ',
      'หน้าแสดงผลงาน',
      'หน้าติดต่อเรา',
      'Google Map',
      'ฟอร์มติดต่อ',
      'SEO Friendly',
      'Source Code',
    ],
    technologies: ['React', 'Next.js', 'Vue', 'Nuxt.js', 'TypeScript', 'Tailwind CSS'],
    steps: [
      'พูดคุยความต้องการ',
      'สรุปโครงสร้างเว็บไซต์',
      'ออกแบบหน้าเว็บไซต์',
      'พัฒนาเว็บไซต์',
      'ทดสอบและแก้ไข',
      'Deploy และส่งมอบ',
    ],
    packages: [
      {
        name: 'Basic',
        price: '5,000',
        description: 'เหมาะสำหรับเว็บไซต์เริ่มต้น',
        features: [
          'สูงสุด 5 หน้า',
          'Responsive Design',
          'ฟอร์มติดต่อ',
          'Google Map',
          'SEO พื้นฐาน',
        ],
        duration: '5-7 วัน',
      },
      {
        name: 'Standard',
        price: '15,000',
        description: 'เหมาะสำหรับธุรกิจที่ต้องการเว็บไซต์ครบถ้วน',
        features: [
          'สูงสุด 10 หน้า',
          'Responsive Design',
          'Blog / News',
          'Contact Form',
          'SEO Optimization',
          'Google Analytics',
        ],
        duration: '7-14 วัน',
      },
      {
        name: 'Premium',
        price: '30,000',
        description: 'เหมาะสำหรับองค์กรและบริษัท',
        features: [
          'มากกว่า 10 หน้า',
          'CMS สำหรับจัดการข้อมูล',
          'Blog / News',
          'Multi Language',
          'SEO Optimization',
          'Cloud Deployment',
          'Source Code',
        ],
        duration: '14-30 วัน',
      },
    ],
  },
  {
    id: 'web-application',
    title: 'Web Application',
    subtitle: 'พัฒนาระบบตามความต้องการ',
    description:
      'รับพัฒนา Web Application ตามความต้องการ ด้วย React, Vue, Angular, Node.js และ .NET สำหรับ Startup และธุรกิจที่ต้องการ Digital Transformation',
    icon: '⚡',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    suitableFor: [
      'Startup ที่ต้องการสร้างระบบใหม่',
      'ธุรกิจที่ต้องการระบบจัดการภายใน',
      'บริษัทที่ต้องการระบบจองคิว ระบบสมาชิก',
      'ผู้ประกอบการที่ต้องการ Digital Transformation',
    ],
    technologies: ['React', 'Vue', 'Angular', 'Next.js', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'NestJS', '.NET'],
    steps: [
      'พูดคุยความต้องการและวิเคราะห์ระบบ',
      'ออกแบบ Flow การทำงาน',
      'ออกแบบฐานข้อมูลและ API',
      'พัฒนาระบบ',
      'ทดสอบการใช้งาน',
      'ส่งมอบงานและให้คำแนะนำการใช้งาน',
    ],
    packages: [
      {
        name: 'Basic',
        price: '15,000',
        description: 'ระบบขนาดเล็ก',
        features: ['3-5 หน้าจอ', 'Login', 'CRUD ข้อมูลพื้นฐาน', 'Responsive Design'],
        duration: '7-14 วัน',
      },
      {
        name: 'Standard',
        price: '40,000',
        description: 'ระบบขนาดกลาง',
        features: [
          '8-15 หน้าจอ',
          'Authentication และ Role',
          'Dashboard',
          'API Integration',
          'Export Excel/PDF',
        ],
        duration: '15-30 วัน',
      },
      {
        name: 'Premium',
        price: '80,000',
        description: 'ระบบขนาดใหญ่',
        features: [
          'มากกว่า 15 หน้าจอ',
          'Multi Role',
          'Dashboard ขั้นสูง',
          'API Integration หลายระบบ',
          'Cloud Deployment',
          'Source Code พร้อมเอกสาร',
        ],
        duration: '30-60 วัน',
      },
    ],
  },
  {
    id: 'crm-erp',
    title: 'CRM & ERP',
    subtitle: 'ระบบ Back Office ตามความต้องการ',
    description:
      'รับพัฒนาระบบ CRM, ERP และ Back Office แบบ Custom ตามความต้องการของแต่ละธุรกิจ ช่วยลดงานซ้ำซ้อน เพิ่มประสิทธิภาพการทำงาน และจัดเก็บข้อมูลอย่างเป็นระบบ',
    icon: '📊',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    suitableFor: [
      'บริษัทที่ต้องการระบบจัดการลูกค้า (CRM)',
      'ธุรกิจที่มีทีมขายและทีมบริการลูกค้า',
      'บริษัทที่ต้องการระบบ ERP ภายในองค์กร',
      'ธุรกิจที่ยังใช้ Excel และต้องการย้ายสู่ระบบออนไลน์',
      'โรงงานและองค์กรที่มี Workflow เฉพาะ',
    ],
    examples: [
      'CRM & ERP',
      'Customer Management',
      'Sales & Lead Management',
      'HR Management',
      'Project Management',
      'Helpdesk / Ticket System',
      'Approval Workflow',
      'Document Management',
      'Dashboard และ Reporting',
    ],
    technologies: ['React', 'Vue', 'Angular', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'NestJS', '.NET'],
    steps: [
      'วิเคราะห์ Requirement',
      'ออกแบบระบบ (Database, API, User Flow)',
      'พัฒนาระบบ',
      'ทดสอบระบบ',
      'ส่งมอบงาน',
    ],
    packages: [
      {
        name: 'Basic',
        price: '25,000',
        description: 'เหมาะสำหรับธุรกิจขนาดเล็ก',
        features: [
          '3-5 Module',
          'Login / Authentication',
          'จัดการข้อมูลลูกค้า',
          'CRUD ข้อมูลพื้นฐาน',
          'Dashboard เบื้องต้น',
          'Responsive Design',
          'แก้ไขงาน 2 รอบ',
        ],
        duration: '7-14 วัน',
      },
      {
        name: 'Standard',
        price: '60,000',
        description: 'เหมาะสำหรับ SME',
        features: [
          '6-10 Module',
          'Multi User',
          'Role Permission',
          'Dashboard & Reporting',
          'Export Excel / PDF',
          'API Integration',
          'Source Code',
          'แก้ไขงาน 3 รอบ',
        ],
        duration: '15-30 วัน',
      },
      {
        name: 'Premium',
        price: '120,000',
        description: 'เหมาะสำหรับองค์กร',
        features: [
          'มากกว่า 10 Module',
          'ERP / CRM เต็มรูปแบบ',
          'Workflow Approval',
          'Multi Role Permission',
          'Dashboard ขั้นสูง',
          'Report และ Analytics',
          'Cloud Deployment',
          'เอกสารระบบเบื้องต้น',
          'แก้ไขงาน 5 รอบ',
        ],
        duration: '30-60 วัน',
      },
    ],
  },
  {
    id: 'stock-warehouse',
    title: 'Stock & Warehouse',
    subtitle: 'ระบบคลังสินค้าและ Logistics',
    description:
      'รับพัฒนาระบบบริหารจัดการสินค้า คลังสินค้า และขนส่งแบบ Custom ตามรูปแบบธุรกิจ ช่วยควบคุมสต๊อก ลดความผิดพลาด และติดตามการเคลื่อนไหวของสินค้าได้แบบ Real-time',
    icon: '📦',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    suitableFor: [
      'ร้านค้าออนไลน์',
      'ธุรกิจค้าส่ง',
      'Distributor',
      'โรงงาน',
      'คลังสินค้า',
      'ธุรกิจ Logistic',
      'ธุรกิจนำเข้าและส่งออก',
    ],
    examples: [
      'Inventory Management',
      'Stock Management',
      'Warehouse Management System (WMS)',
      'Product Tracking',
      'Purchase Order',
      'Goods Receive / Issue',
      'Delivery Tracking',
      'Barcode / QR Code System',
    ],
    technologies: ['React', 'Vue', 'Angular', 'TypeScript', 'Tailwind CSS', 'Node.js', 'NestJS', '.NET'],
    steps: [
      'วิเคราะห์การจัดการสินค้า',
      'ออกแบบระบบ (Database, Warehouse Flow)',
      'พัฒนาระบบ',
      'ทดสอบระบบ',
      'ส่งมอบงาน',
    ],
    packages: [
      {
        name: 'Basic',
        price: '30,000',
        description: 'เหมาะสำหรับธุรกิจขนาดเล็ก',
        features: [
          'จัดการสินค้า',
          'รับเข้า / เบิกออก',
          'รายการเคลื่อนไหวสินค้า',
          'Dashboard พื้นฐาน',
          'Responsive Design',
          'แก้ไขงาน 2 รอบ',
        ],
        duration: '7-14 วัน',
      },
      {
        name: 'Standard',
        price: '70,000',
        description: 'เหมาะสำหรับ SME',
        features: [
          'Multi Warehouse',
          'Stock Movement',
          'Purchase Order',
          'Goods Receive',
          'Reporting & Export Excel',
          'User Permission',
          'Dashboard',
          'Source Code',
          'แก้ไขงาน 3 รอบ',
        ],
        duration: '15-30 วัน',
      },
      {
        name: 'Premium',
        price: '150,000',
        description: 'เหมาะสำหรับองค์กรและคลังสินค้าขนาดใหญ่',
        features: [
          'Warehouse Management System',
          'Logistic Workflow',
          'Delivery Tracking',
          'Barcode / QR Code',
          'Dashboard ขั้นสูง',
          'Real-time Monitoring',
          'API Integration',
          'Cloud Deployment',
          'เอกสารระบบเบื้องต้น',
          'แก้ไขงาน 5 รอบ',
        ],
        duration: '30-60 วัน',
      },
    ],
  },
  {
    id: 'mobile-app',
    title: 'Mobile Application',
    subtitle: 'Flutter สำหรับ Android และ iOS',
    description:
      'รับพัฒนา Mobile Application ด้วย Flutter รองรับทั้ง Android และ iOS จาก Source Code ชุดเดียว ช่วยลดต้นทุนและระยะเวลาในการพัฒนา',
    icon: '📱',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    suitableFor: [
      'Startup',
      'ธุรกิจบริการ',
      'E-Commerce',
      'Delivery',
      'Loyalty Program',
      'ระบบสมาชิก',
      'ระบบจองคิว',
      'ระบบภายในองค์กร',
    ],
    examples: [
      'แอปสมาชิก',
      'แอปสะสมแต้ม',
      'แอปจองคิว',
      'แอปส่งอาหาร',
      'แอปติดตามงาน',
      'แอปเชื่อมต่อ API',
      'แอป Dashboard',
    ],
    technologies: ['Flutter', 'Node.js', 'NestJS', '.NET', 'Firebase', 'PostgreSQL', 'MongoDB'],
    steps: [
      'วิเคราะห์ Requirement',
      'ออกแบบ UX/UI Flow',
      'พัฒนา Mobile Application',
      'เชื่อมต่อ API',
      'ทดสอบบน Android และ iOS',
      'ส่งมอบ Source Code',
    ],
    packages: [
      {
        name: 'Basic',
        price: '20,000',
        description: 'เหมาะสำหรับ MVP หรือ Prototype',
        features: ['3-5 หน้าจอ', 'Login', 'API Integration', 'Responsive Mobile UI', 'Android APK'],
        duration: '7-14 วัน',
      },
      {
        name: 'Standard',
        price: '50,000',
        description: 'เหมาะสำหรับธุรกิจขนาดเล็กถึงกลาง',
        features: [
          '6-12 หน้าจอ',
          'Authentication',
          'Push Notification',
          'API Integration',
          'Android และ iOS',
          'Source Code',
        ],
        duration: '15-30 วัน',
      },
      {
        name: 'Premium',
        price: '100,000',
        description: 'เหมาะสำหรับระบบธุรกิจเต็มรูปแบบ',
        features: [
          'มากกว่า 12 หน้าจอ',
          'Multi Role',
          'Firebase Integration',
          'Push Notification',
          'Dashboard',
          'Payment Gateway',
          'Publish ขึ้น Store',
          'Source Code',
        ],
        duration: '30-60 วัน',
      },
    ],
  },
]

export { portfolioItems } from './portfolio'

export const techStack: TechCategory[] = [
  {
    name: 'Frontend',
    items: ['Vue', 'React', 'Next.js', 'Nuxt.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'NestJS', '.NET', 'Python'],
  },
  {
    name: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'Microsoft SQL Server'],
  },
  {
    name: 'Mobile & Cloud',
    items: ['Flutter', 'Firebase', 'AWS', 'Google Cloud', 'Microsoft Azure'],
  },
]

export const cloudProviders = ['AWS', 'Google Cloud Platform', 'Microsoft Azure']
