import { createI18n } from 'vue-i18n'

const messages = {
  th: {
    nav: {
      home: 'หน้าแรก',
      catalog: 'แคตตาล็อก',
      standards: 'มาตรฐาน',
      documents: 'เอกสาร',
      quote: 'ขอใบเสนอราคา',
    },
    hero: {
      title: 'ผลิตชิ้นส่วนอุตสาหกรรม มาตรฐานสากล',
      subtitle:
        'PrecisionTech Manufacturing โรงงานผลิตชิ้นส่วน CNC และโลหะ รองรับลูกค้าทั้งในประเทศและต่างประเทศ ด้วยระบบคุณภาพ ISO 9001',
      ctaCatalog: 'ดูแคตตาล็อก',
      ctaQuote: 'ขอใบเสนอราคา',
    },
    stats: {
      years: 'ปีประสบการณ์',
      clients: 'ลูกค้าทั่วโลก',
      capacity: 'ชิ้น/เดือน',
      accuracy: 'ความแม่นยำ',
    },
    about: {
      title: 'เกี่ยวกับเรา',
      text: 'เราเป็นผู้ผลิตชิ้นส่วนอุตสาหกรรมที่มีประสบการณ์กว่า 25 ปี ให้บริการออกแบบ ผลิต และตรวจสอบคุณภาพครบวงจร ตั้งแต่ชิ้นส่วน CNC โลหะ ไปจนถึงการประกอบชิ้นส่วนเครื่องจักร',
      feature1: 'เครื่องจักร CNC 5-Axis',
      feature2: 'ห้องปฏิบัติการ QC',
      feature3: 'ส่งออกกว่า 30 ประเทศ',
    },
    catalog: {
      title: 'แคตตาล็อกสินค้า',
      subtitle: 'ชิ้นส่วนอุตสาหกรรมคุณภาพสูง ผลิตตามสเปกลูกค้า',
      filterAll: 'ทั้งหมด',
      filterCnc: 'CNC Machining',
      filterMetal: 'Metal Parts',
      filterAssembly: 'Assembly',
      filterCustom: 'Custom OEM',
      viewSpecs: 'ดูรายละเอียด',
      requestQuote: 'ขอราคา',
    },
    products: {
      'cnc-bracket': {
        name: 'CNC Bracket',
        description: 'แบรกเก็ตอลูมิเนียม CNC สำหรับอุตสาหกรรมอิเล็กทรอนิกส์',
      },
      'steel-shaft': {
        name: 'Steel Shaft',
        description: 'เพลาเหล็กกล้าความแม่นยำสูง สำหรับเครื่องจักรอุตสาหกรรม',
      },
      'gear-assembly': {
        name: 'Gear Assembly',
        description: 'ชุดเฟืองประกอบพร้อมทดสอบ Run-in',
      },
      'custom-housing': {
        name: 'Custom Housing',
        description: 'ฮาวซิ่งสแตนเลส ผลิตตามแบบลูกค้า OEM',
      },
      'cnc-plate': {
        name: 'CNC Plate',
        description: 'แผ่นโลหะ CNC Milling 5-Axis',
      },
      'precision-bush': {
        name: 'Precision Bush',
        description: 'บุชทองเหลืองความแม่นยำสูง',
      },
    },
    standards: {
      title: 'มาตรฐานการผลิต',
      subtitle: 'เรายึดมั่นในมาตรฐานสากลเพื่อความเชื่อมั่นของลูกค้า',
      processTitle: 'กระบวนการควบคุมคุณภาพ',
      processSteps: [
        'ตรวจรับวัตถุดิบ (IQC)',
        'ควบคุมกระบวนการผลิต (IPQC)',
        'ตรวจสอบผลิตภัณฑ์สำเร็จ (FQC)',
        'ทดสอบตามสเปกลูกค้า',
        'บรรจุภัณฑ์และจัดส่ง',
      ],
      iso9001: {
        name: 'ISO 9001:2015',
        description: 'ระบบบริหารคุณภาพ ครอบคลุมทุกกระบวนการผลิต',
      },
      iso14001: {
        name: 'ISO 14001:2015',
        description: 'ระบบการจัดการสิ่งแวดล้อม ลดของเสียและพลังงาน',
      },
      iatf16949: {
        name: 'IATF 16949',
        description: 'มาตรฐานอุตสาหกรรมยานยนต์ สำหรับชิ้นส่วน Automotive',
      },
      rohs: {
        name: 'RoHS Compliant',
        description: 'ปลอดสารอันตราย ตามมาตรฐาน EU RoHS',
      },
    },
    documents: {
      title: 'ดาวน์โหลดเอกสาร',
      subtitle: 'เอกสารบริษัท แคตตาล็อก และใบรับรองมาตรฐาน',
      download: 'ดาวน์โหลด PDF',
      updated: 'อัปเดต',
      items: {
        'company-profile': {
          name: 'Company Profile',
          description: 'แนะนำบริษัท ความสามารถในการผลิต และลูกค้า',
        },
        'product-catalog': {
          name: 'Product Catalog 2025',
          description: 'แคตตาล็อกสินค้าครบทุกหมวดหมู่',
        },
        'quality-manual': {
          name: 'Quality Manual',
          description: 'คู่มือระบบคุณภาพ ISO 9001',
        },
        certificates: {
          name: 'Certificates',
          description: 'ใบรับรอง ISO, IATF และ RoHS',
        },
      },
    },
    quote: {
      title: 'ขอใบเสนอราคา',
      subtitle: 'กรอกข้อมูลด้านล่าง ทีมงานจะติดต่อกลับภายใน 1-2 วันทำการ',
      name: 'ชื่อ-นามสกุล',
      company: 'บริษัท',
      email: 'อีเมล',
      phone: 'เบอร์โทร',
      product: 'สินค้าที่สนใจ',
      quantity: 'จำนวน (ชิ้น)',
      message: 'รายละเอียดเพิ่มเติม',
      submit: 'ส่งคำขอ',
      success: 'ส่งคำขอเรียบร้อยแล้ว ขอบคุณที่ติดต่อเรา',
      selectProduct: 'เลือกสินค้า',
    },
    footer: {
      tagline: 'ผลิตชิ้นส่วนอุตสาหกรรม มาตรฐานสากล',
      address: '123 ถ.อุตสาหกรรม แขวงบางชัน เขตคลองสามวา กรุงเทพฯ 10510',
      phone: '02-123-4567',
      email: "info{'@'}precisiontech.co.th",
      rights: 'สงวนลิขสิทธิ์',
    },
    seo: {
      home: {
        title: 'PrecisionTech Manufacturing | โรงงานผลิตชิ้นส่วนอุตสาหกรรม',
        description:
          'โรงงานผลิตชิ้นส่วน CNC และโลหะ มาตรฐาน ISO 9001 รองรับลูกค้าในประเทศและต่างประเทศ',
      },
      catalog: {
        title: 'แคตตาล็อกสินค้า | PrecisionTech Manufacturing',
        description: 'ชิ้นส่วน CNC, โลหะ, Assembly และ Custom OEM',
      },
      standards: {
        title: 'มาตรฐานการผลิต | PrecisionTech Manufacturing',
        description: 'ISO 9001, ISO 14001, IATF 16949 และ RoHS Compliant',
      },
      documents: {
        title: 'ดาวน์โหลดเอกสาร | PrecisionTech Manufacturing',
        description: 'Company Profile, Catalog, Quality Manual และ Certificates',
      },
      quote: {
        title: 'ขอใบเสนอราคา | PrecisionTech Manufacturing',
        description: 'ส่งคำขอใบเสนอราคาชิ้นส่วนอุตสาหกรรม',
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      catalog: 'Catalog',
      standards: 'Standards',
      documents: 'Documents',
      quote: 'Get Quote',
    },
    hero: {
      title: 'Industrial Parts Manufacturing to Global Standards',
      subtitle:
        'PrecisionTech Manufacturing — CNC and metal parts factory serving domestic and international clients with ISO 9001 quality systems.',
      ctaCatalog: 'View Catalog',
      ctaQuote: 'Request Quote',
    },
    stats: {
      years: 'Years Experience',
      clients: 'Global Clients',
      capacity: 'Parts/Month',
      accuracy: 'Accuracy',
    },
    about: {
      title: 'About Us',
      text: 'With over 25 years of experience, we provide end-to-end design, manufacturing, and quality inspection — from CNC metal parts to complete machine assemblies.',
      feature1: '5-Axis CNC Machines',
      feature2: 'QC Laboratory',
      feature3: 'Export to 30+ Countries',
    },
    catalog: {
      title: 'Product Catalog',
      subtitle: 'High-quality industrial components built to your specifications',
      filterAll: 'All',
      filterCnc: 'CNC Machining',
      filterMetal: 'Metal Parts',
      filterAssembly: 'Assembly',
      filterCustom: 'Custom OEM',
      viewSpecs: 'View Specs',
      requestQuote: 'Get Quote',
    },
    products: {
      'cnc-bracket': {
        name: 'CNC Bracket',
        description: 'CNC aluminum bracket for electronics industry',
      },
      'steel-shaft': {
        name: 'Steel Shaft',
        description: 'High-precision steel shaft for industrial machinery',
      },
      'gear-assembly': {
        name: 'Gear Assembly',
        description: 'Complete gear assembly with run-in testing',
      },
      'custom-housing': {
        name: 'Custom Housing',
        description: 'Stainless steel housing, custom OEM production',
      },
      'cnc-plate': {
        name: 'CNC Plate',
        description: '5-Axis CNC milled metal plate',
      },
      'precision-bush': {
        name: 'Precision Bush',
        description: 'High-precision brass bushings',
      },
    },
    standards: {
      title: 'Production Standards',
      subtitle: 'We adhere to international standards for customer confidence',
      processTitle: 'Quality Control Process',
      processSteps: [
        'Incoming Quality Control (IQC)',
        'In-Process Quality Control (IPQC)',
        'Final Quality Control (FQC)',
        'Customer Specification Testing',
        'Packaging & Delivery',
      ],
      iso9001: {
        name: 'ISO 9001:2015',
        description: 'Quality management system covering all production processes',
      },
      iso14001: {
        name: 'ISO 14001:2015',
        description: 'Environmental management, waste and energy reduction',
      },
      iatf16949: {
        name: 'IATF 16949',
        description: 'Automotive industry standard for auto parts',
      },
      rohs: {
        name: 'RoHS Compliant',
        description: 'Hazardous substance free per EU RoHS standard',
      },
    },
    documents: {
      title: 'Download Documents',
      subtitle: 'Company documents, catalogs, and certification',
      download: 'Download PDF',
      updated: 'Updated',
      items: {
        'company-profile': {
          name: 'Company Profile',
          description: 'Company overview, capabilities, and clients',
        },
        'product-catalog': {
          name: 'Product Catalog 2025',
          description: 'Complete product catalog by category',
        },
        'quality-manual': {
          name: 'Quality Manual',
          description: 'ISO 9001 quality system manual',
        },
        certificates: {
          name: 'Certificates',
          description: 'ISO, IATF and RoHS certificates',
        },
      },
    },
    quote: {
      title: 'Request a Quote',
      subtitle: 'Fill in the form below. Our team will respond within 1-2 business days.',
      name: 'Full Name',
      company: 'Company',
      email: 'Email',
      phone: 'Phone',
      product: 'Product of Interest',
      quantity: 'Quantity (pcs)',
      message: 'Additional Details',
      submit: 'Submit Request',
      success: 'Request submitted successfully. Thank you for contacting us.',
      selectProduct: 'Select a product',
    },
    footer: {
      tagline: 'Industrial parts manufacturing to global standards',
      address: '123 Industrial Rd, Bangchan, Khlong Sam Wa, Bangkok 10510',
      phone: '+66 2 123 4567',
      email: "info{'@'}precisiontech.co.th",
      rights: 'All rights reserved',
    },
    seo: {
      home: {
        title: 'PrecisionTech Manufacturing | Industrial Parts Factory',
        description:
          'CNC and metal parts manufacturing with ISO 9001. Serving domestic and international clients.',
      },
      catalog: {
        title: 'Product Catalog | PrecisionTech Manufacturing',
        description: 'CNC parts, metal components, assemblies and custom OEM',
      },
      standards: {
        title: 'Production Standards | PrecisionTech Manufacturing',
        description: 'ISO 9001, ISO 14001, IATF 16949 and RoHS Compliant',
      },
      documents: {
        title: 'Download Documents | PrecisionTech Manufacturing',
        description: 'Company Profile, Catalog, Quality Manual and Certificates',
      },
      quote: {
        title: 'Request a Quote | PrecisionTech Manufacturing',
        description: 'Submit a quote request for industrial parts',
      },
    },
  },
}

export type MessageSchema = typeof messages.th

const savedLocale = localStorage.getItem('locale') as 'th' | 'en' | null

export const i18n = createI18n<[MessageSchema], 'th' | 'en'>({
  legacy: false,
  locale: savedLocale ?? 'th',
  fallbackLocale: 'en',
  messages,
})

export function setLocale(locale: 'th' | 'en') {
  ;(i18n.global.locale as unknown as { value: 'th' | 'en' }).value = locale
  localStorage.setItem('locale', locale)
  document.documentElement.lang = locale
}

document.documentElement.lang = savedLocale ?? 'th'
