export const site = {
  name: 'Lumière Aesthetic Clinic',
  tagline: 'ความงามที่เริ่มจากความมั่นใจ',
  phone: '02-123-4567',
  email: 'hello@lumiere-clinic.com',
  line: '@lumiereclinic',
  address: '123 ถนน Sukhumvit แขวงคลองตัน เขตวัฒนา กรุงเทพฯ 10110',
  hours: 'จันทร์–อาทิตย์ 10:00–20:00',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.548662876523!2d100.5676378!3d13.7317865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed0a6959b27%3A0x15b6bab29283e963!2sEmQuartier!5e0!3m2!1sth!2sth!4v1625097600000!5m2!1sth!2sth',
  contactImage:
    'https://images.pexels.com/photos/7750099/pexels-photo-7750099.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
}

export const heroBanner = {
  image:
    'https://images.pexels.com/photos/5069437/pexels-photo-5069437.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  alt: 'คลินิกความงาม Lumière',
}

export interface Doctor {
  id: number
  name: string
  title: string
  specialty: string
  experience: string
  image: string
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: 'นพ. สิริมา วงศ์ประเสริฐ',
    title: 'แพทย์ผู้เชี่ยวชาญด้านความงาม',
    specialty: 'Botox, Filler, Laser',
    experience: 'ประสบการณ์ 12 ปี',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop',
  },
  {
    id: 2,
    name: 'พญ. อรทัย สุขใจ',
    title: 'แพทย์ผู้เชี่ยวชาญด้านผิวพรรณ',
    specialty: 'Acne, Melasma, Skin Rejuvenation',
    experience: 'ประสบการณ์ 10 ปี',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop',
  },
  {
    id: 3,
    name: 'คุณพิมพ์ใจ รัตนกุล',
    title: 'Beauty Consultant',
    specialty: 'Skin Analysis & Treatment Planning',
    experience: 'ประสบการณ์ 8 ปี',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
  },
]

export interface Service {
  id: number
  name: string
  description: string
  price: string
  duration: string
  image: string
  popular?: boolean
}

export const services: Service[] = [
  {
    id: 1,
    name: 'Botox',
    description: 'ลดริ้วรอย ปรับรูปหน้าให้ดูอ่อนเยาว์ โดยแพทย์ผู้เชี่ยวชาญ',
    price: '3,900',
    duration: '15–30 นาที',
    image: 'https://images.pexels.com/photos/5069437/pexels-photo-5069437.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    popular: true,
  },
  {
    id: 2,
    name: 'Filler',
    description: 'เติมเต็มใบหน้า ปรับรูปทรงจมูก ร่องแก้ม และริมฝีปาก',
    price: '8,900',
    duration: '30–45 นาที',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=400&fit=crop',
    popular: true,
  },
  {
    id: 3,
    name: 'Laser Rejuvenation',
    description: 'กระตุ้นการสร้างคอลลagen ผิวกระจ่างใส ลดจุดด่างดำและรูขุมขน',
    price: '4,500',
    duration: '45 นาที',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'Acne Treatment',
    description: 'รักษาสิวและรอยแผลเป็นด้วยโปรแกรมเฉพาะบุคคล',
    price: '2,500',
    duration: '60 นาที',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    name: 'IV Drip Therapy',
    description: 'วิตามินบำรุงผิวและร่างกาย ฟื้นฟูจากภายใน',
    price: '3,200',
    duration: '45 นาที',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    name: 'Facial Premium',
    description: 'Treatment บำรุงผิวหน้าแบบพรีเมียม ทำความสะอาดลึก',
    price: '1,990',
    duration: '75 นาที',
    image: 'https://images.pexels.com/photos/6169619/pexels-photo-6169619.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
  },
]

export interface Review {
  id: number
  name: string
  rating: number
  service: string
  comment: string
  date: string
}

export const reviews: Review[] = [
  {
    id: 1,
    name: 'คุณมินตรา',
    rating: 5,
    service: 'Botox & Filler',
    comment: 'แพทย์ให้คำปรึกษาละเอียดมาก ผลลัพธ์เป็นธรรมชาติ ไม่โอเวอร์ ประทับใจมากค่ะ',
    date: 'มี.ค. 2026',
  },
  {
    id: 2,
    name: 'คุณพลอย',
    rating: 5,
    service: 'Laser Rejuvenation',
    comment: 'ทำ Laser มา 3 ครั้ง ผิวสว่างขึ้นชัดเจน ทีมงานบริการดีมาก สะอาด เป็นมืออาชีพ',
    date: 'ก.พ. 2026',
  },
  {
    id: 3,
    name: 'คุณนภา',
    rating: 5,
    service: 'Acne Treatment',
    comment: 'สิวลดลงมากภายใน 2 เดือน แพทย์ติดตามผลอย่างใกล้ชิด แนะนำเลยค่ะ',
    date: 'ม.ค. 2026',
  },
  {
    id: 4,
    name: 'คุณแอน',
    rating: 4,
    service: 'Facial Premium',
    comment: 'บรรยากาศคลินิกหรูหรา สงบ ราคาคุ้มค่ากับคุณภาพ จะกลับมาอีกแน่นอน',
    date: 'ธ.ค. 2025',
  },
]

export interface Promotion {
  id: number
  title: string
  description: string
  discount: string
  validUntil: string
  image: string
}

export const promotions: Promotion[] = [
  {
    id: 1,
    title: 'New Member Special',
    description: 'ลูกค้าใหม่ทำ Botox ครั้งแรก ลด 20% พร้อมฟรี Skin Analysis',
    discount: '20% OFF',
    validUntil: '30 มิ.ย. 2026',
    image: 'https://images.pexels.com/photos/5069437/pexels-photo-5069437.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Summer Glow Package',
    description: 'Laser Rejuvenation 3 ครั้ง + IV Drip 1 ครั้ง ในราคาพิเศษ',
    discount: '฿9,990',
    validUntil: '31 ส.ค. 2026',
    image: 'https://images.pexels.com/photos/19242408/pexels-photo-19242408.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Couple Package',
    description: 'จองคู่ Botox หรือ Filler รับส่วนลดเพิ่ม 15% สำหรับทั้งคู่',
    discount: '15% OFF',
    validUntil: '31 ก.ค. 2026',
    image: 'https://images.pexels.com/photos/775009/pexels-photo-775009.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
]

export const navLinks = [
  { label: 'หน้าแรก', href: '#home' },
  { label: 'ทีมแพทย์', href: '#doctors' },
  { label: 'บริการ', href: '#services' },
  { label: 'รีวิว', href: '#reviews' },
  { label: 'โปรโมชั่น', href: '#promotions' },
  { label: 'นัดหมาย', href: '#appointment' },
  { label: 'ติดต่อ', href: '#contact' },
]

export const timeSlots = [
  '10:00', '11:00', '12:00', '13:00', '14:00',
  '15:00', '16:00', '17:00', '18:00', '19:00',
]
