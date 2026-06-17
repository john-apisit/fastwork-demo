export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface Project {
  id: string
  title: string
  category: string
  location: string
  year: number
  description: string
  image: string
  featured?: boolean
}

export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  image: string
}

export const companyInfo = {
  name: 'สร้างสรรค์โครงสร้าง',
  tagline: 'บริษัทรับเหมาก่อสร้างและวิศวกรรม',
  phone: '02-123-4567',
  email: 'info@sangsan-structure.co.th',
  address: '123 ถนนพระราม 9 แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพมหานคร 10310',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5744899999997!2d100.5744899!3d13.7563309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ1JzIyLjgiTiAxMDDCsDM0JzI4LjIiRQ!5e0!3m2!1sth!2sth!4v1700000000000!5m2!1sth!2sth',
  stats: [
    { label: 'ปีประสบการณ์', value: '25+' },
    { label: 'โครงการสำเร็จ', value: '180+' },
    { label: 'วิศวกรและช่าง', value: '350+' },
    { label: 'ลูกค้าพึงพอใจ', value: '98%' },
  ],
}

export const services: Service[] = [
  {
    id: 'building',
    title: 'ก่อสร้างอาคาร',
    description: 'อาคารสำนักงาน อาคารพาณิชย์ โรงแรม และอาคารที่พักอาศัย ครบวงจรตั้งแต่โครงสร้างถึงตกแต่งภายใน',
    icon: '🏢',
  },
  {
    id: 'industrial',
    title: 'โรงงานอุตสาหกรรม',
    description: 'ออกแบบและก่อสร้างโรงงาน คลังสินค้า และระบบโครงสร้างเหล็กสำหรับอุตสาหกรรม',
    icon: '🏭',
  },
  {
    id: 'infrastructure',
    title: 'โครงสร้างพื้นฐาน',
    description: 'ถนน สะพาน ระบบระบายน้ำ และงานโครงสร้างสาธารณะขนาดใหญ่',
    icon: '🛣️',
  },
  {
    id: 'renovation',
    title: 'ปรับปรุงและรีโนเวท',
    description: 'รีโนเวทอาคารเก่า ต่อเติม และปรับปรุงโครงสร้างให้ทันสมัยและปลอดภัย',
    icon: '🔧',
  },
  {
    id: 'design-build',
    title: 'Design & Build',
    description: 'บริการออกแบบและก่อสร้างแบบครบวงจร ลดความเสี่ยงและควบคุมงบประมาณได้ดีขึ้น',
    icon: '📐',
  },
  {
    id: 'consulting',
    title: 'ที่ปรึกษาวิศวกรรม',
    description: 'ประเมินโครงการ ตรวจสอบโครงสร้าง และให้คำปรึกษาด้านเทคนิคก่อนและระหว่างก่อสร้าง',
    icon: '📋',
  },
]

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'อาคารสำนักงานสุขุมวิท',
    category: 'อาคารสำนักงาน',
    location: 'กรุงเทพมหานคร',
    year: 2025,
    description: 'อาคารสำนักงาน 25 ชั้น พื้นที่ใช้สอย 45,000 ตร.ม. มาตรฐาน LEED Gold',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    featured: true,
  },
  {
    id: 'p2',
    title: 'โรงงานอุตสาหกรรมอาหาร นิคมฯ ระยอง',
    category: 'โรงงาน',
    location: 'ระยอง',
    year: 2024,
    description: 'โรงงานผลิตอาหาร GMP/HACCP พื้นที่ 12,000 ตร.ม. พร้อมระบบควบคุมอุณหภูมิ',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    featured: true,
  },
  {
    id: 'p3',
    title: 'สะพานข้ามคลองบางบัวทอง',
    category: 'โครงสร้างพื้นฐาน',
    location: 'นนทบุรี',
    year: 2024,
    description: 'สะพานคอนกรีต-เหล็ก ความยาว 320 เมตร รองรับการจราจร 4 เลน',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80',
    featured: true,
  },
  {
    id: 'p4',
    title: 'คอนโดมิเนียมริver Riverside',
    category: 'ที่พักอาศัย',
    location: 'กรุงเทพมหานคร',
    year: 2023,
    description: 'อาคารที่พักอาศัย 32 ชั้น 800 ยูนิต พร้อมสระว่ายน้ำและพื้นที่ส่วนกลาง',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
  },
  {
    id: 'p5',
    title: 'ศูนย์ก distribution ภาคเหนือ',
    category: 'คลังสินค้า',
    location: 'เชียงใหม่',
    year: 2023,
    description: 'คลังสินค้าและศูนย์กระจายสินค้า 18,000 ตร.ม. พร้อมระบบโหลดสินค้าอัตโนมัติ',
    image: 'https://images.unsplash.com/photo-1565514020169-026b367462bb?w=800&q=80',
  },
  {
    id: 'p6',
    title: 'รีโนเวทโรงแรม Heritage',
    category: 'รีโนเวท',
    location: 'พัทยา',
    year: 2022,
    description: 'ปรับปรุงโรงแรมเก่า 180 ห้อง รักษาเอกลักษณ์สถาปัตยกรรมเดิม',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099925?w=800&q=80',
  },
]

export const newsArticles: NewsArticle[] = [
  {
    id: 'n1',
    title: 'เปิดตัวโครงการอาคารสำนักงานสุขุมวิท สูง 25 ชั้น',
    excerpt: 'บริษัทฯ เริ่มก่อสร้างอาคารสำนักงานระดับพรีเมียมใจกลางกรุงเทพฯ มูลค่าโครงการ 2,500 ล้านบาท',
    date: '2025-03-15',
    category: 'ข่าวโครงการ',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    id: 'n2',
    title: 'มาตรฐานความปลอดภัย ISO 45001 รับรองแล้ว',
    excerpt: 'บริษัทได้รับการรับรองระบบการจัดการความปลอดภัยและอาชีวอนามัยระดับสากล',
    date: '2025-02-20',
    category: 'องค์กร',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  },
  {
    id: 'n3',
    title: '5 เทรนด์การก่อสร้างที่ยั่งยืนในปี 2025',
    excerpt: 'วัสดุรีไซเคิล การลดคาร์บอนจากการก่อสร้าง และเทคโนโลยี BIM ที่เปลี่ยนวงการ',
    date: '2025-01-10',
    category: 'บทความ',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
  },
  {
    id: 'n4',
    title: 'ร่วมมือกับมหาวิทยาลัยเปิดโครงการฝึกงานวิศวกรรม',
    excerpt: 'โครงการพัฒนาบุคลากรรุ่นใหม่ รับนักศึกษาฝึกงาน 30 คนต่อปี',
    date: '2024-12-05',
    category: 'CSR',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
  },
]

export const navLinks = [
  { name: 'หน้าแรก', path: '/' },
  { name: 'เกี่ยวกับเรา', path: '/about' },
  { name: 'บริการ', path: '/services' },
  { name: 'ผลงาน', path: '/projects' },
  { name: 'ข่าวสาร', path: '/news' },
  { name: 'ติดต่อ', path: '/contact' },
]
