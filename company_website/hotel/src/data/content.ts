export interface RoomType {
  id: string
  name: string
  description: string
  price: number
  size: string
  capacity: number
  beds: string
  image: string
  features: string[]
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: string
}

export interface Amenity {
  id: string
  icon: string
  title: string
  description: string
}

export interface Attraction {
  id: string
  name: string
  distance: string
  description: string
  image: string
}

export const siteInfo = {
  name: 'Azure Bay Resort & Spa',
  tagline: 'พักผ่อนท่ามกลางธรรมชาติ ริมอ่าวทะเลใส',
  description:
    'รีสอร์ทระดับ 5 ดาว ตั้งอยู่ริมชายหาดส่วนตัว พร้อมสปา สระว่ายน้ำ infinity และบริการระดับพรีเมียม เหมาะสำหรับการพักผ่อนและจัดงานพิเศษ',
  phone: '02-123-4567',
  email: 'reservation@azurebayresort.com',
  address: '88 ถนนชายหาด ตำบลกมลา อำเภอกมลา จังหวัดภูเก็ต 83120',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.652412345678!2d98.2805!3d7.9555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3050257f8e8e8e8e%3A0x1234567890abcdef!2sKamala%20Beach%2C%20Kamala%2C%20Kathu%20District%2C%20Phuket!5e0!3m2!1sen!2sth!4v1700000000000!5m2!1sen!2sth',
}

export const navLinks = [
  { label: 'ห้องพัก', href: '#rooms' },
  { label: 'แกลเลอรี', href: '#gallery' },
  { label: 'สิ่งอำนวยความสะดวก', href: '#amenities' },
  { label: 'สถานที่ท่องเที่ยว', href: '#attractions' },
  { label: 'จองห้องพัก', href: '#booking' },
  { label: 'ติดต่อเรา', href: '#contact' },
]

export const roomTypes: RoomType[] = [
  {
    id: 'deluxe',
    name: 'Deluxe Ocean View',
    description: 'ห้องพักกว้างขวาง พร้อมระเบียงชมวิวทะเลและอ่าวส่วนตัว',
    price: 4500,
    size: '42 ตร.ม.',
    capacity: 2,
    beds: 'เตียงคิงไซส์',
    image:
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    features: ['วิวทะเล', 'อาหารเช้า', 'Wi-Fi ฟรี', 'มินิบาร์'],
  },
  {
    id: 'suite',
    name: 'Executive Suite',
    description: 'ห้องสวีทหรูหรา แยกห้องนั่งเล่น พร้อมอ่างจากุซซี่',
    price: 7800,
    size: '68 ตร.ม.',
    capacity: 3,
    beds: 'เตียงคิง + โซฟาเบด',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    features: ['อ่างจากุซซี่', 'Butler Service', 'Club Lounge', 'วิวพาโนรามา'],
  },
  {
    id: 'villa',
    name: 'Pool Villa',
    description: 'วิลล่าส่วนตัวพร้อมสระว่ายน้ำ สำหรับครอบครัวหรือกลุ่มเพื่อน',
    price: 12500,
    size: '120 ตร.ม.',
    capacity: 4,
    beds: '2 ห้องนอน',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    features: ['สระส่วนตัว', 'ครัวขนาดเล็ก', 'สวนส่วนตัว', 'รถกอล์ฟ'],
  },
  {
    id: 'family',
    name: 'Family Connecting',
    description: 'ห้องเชื่อมต่อกัน 2 ห้อง เหมาะสำหรับครอบครัวพร้อมเด็ก',
    price: 6200,
    size: '55 ตร.ม.',
    capacity: 4,
    beds: '2 เตียงควีน',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80',
    features: ['Kids Club', 'อาหารเช้า 4 ท่าน', 'เตียงเสริม', 'วิวสวน'],
  },
]

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: 'https://images.unsplash.com/photo-1520250497591-112f2fc40a3d?w=800&q=80',
    alt: 'Lobby หรูหรา',
    category: 'lobby',
  },
  {
    id: 'g2',
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
    alt: 'สระว่ายน้ำ infinity',
    category: 'pool',
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1540541338287-a417d05a0b0a?w=800&q=80',
    alt: 'ห้องอาหารริมทะเล',
    category: 'dining',
  },
  {
    id: 'g4',
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    alt: 'สปาและนวด',
    category: 'spa',
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1571003123891-b5ba79f2a7a2?w=800&q=80',
    alt: 'ห้องพักวิวทะเล',
    category: 'room',
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    alt: 'ชายหาดส่วนตัว',
    category: 'beach',
  },
  {
    id: 'g7',
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    alt: 'Fine Dining',
    category: 'dining',
  },
  {
    id: 'g8',
    src: 'https://images.unsplash.com/photo-1519167758481-83f29da79811?w=800&q=80',
    alt: 'งานแต่งงานริมทะเล',
    category: 'event',
  },
]

export const amenities: Amenity[] = [
  {
    id: 'a1',
    icon: '🏊',
    title: 'Infinity Pool',
    description: 'สระว่ายน้ำไร้ขอบชมวิวอ่าว พร้อม Pool Bar',
  },
  {
    id: 'a2',
    icon: '💆',
    title: 'Azure Spa',
    description: 'ทรีทเมนต์สปาและนวดแผนไทย-อโรมatherapy',
  },
  {
    id: 'a3',
    icon: '🍽️',
    title: '3 ร้านอาหาร',
    description: 'อาหารไทย ซีฟู้ด และนานาชาติ ริมทะเล',
  },
  {
    id: 'a4',
    icon: '🏋️',
    title: 'Fitness Center',
    description: 'ห้องออกกำลังกาย 24 ชม. พร้อม Personal Trainer',
  },
  {
    id: 'a5',
    icon: '🚗',
    title: 'Airport Transfer',
    description: 'บริการรับ-ส่งสนามบินภูเก็ต (จองล่วงหน้า)',
  },
  {
    id: 'a6',
    icon: '👶',
    title: 'Kids Club',
    description: 'กิจกรรมสำหรับเด็กและบริการพี่เลี้ยงเด็ก',
  },
  {
    id: 'a7',
    icon: '📶',
    title: 'Free Wi-Fi',
    description: 'อินเทอร์เน็ตความเร็วสูงทั่วรีสอร์ท',
  },
  {
    id: 'a8',
    icon: '🎉',
    title: 'Event & Wedding',
    description: 'จัดงานแต่งงานและสัมมนา ริมชายหาด',
  },
]

export const attractions: Attraction[] = [
  {
    id: 'at1',
    name: 'หาด Kamala',
    distance: '5 นาที',
    description: 'ชายหาดทรายขาว น้ำใส เหมาะว่ายน้ำและพักผ่อน',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
  },
  {
    id: 'at2',
    name: 'Patong Beach',
    distance: '15 นาที',
    description: 'หาดยอดนิยม ร้านค้า bars และ nightlife',
    image:
      'https://images.unsplash.com/photo-1559628233-100c798642d4?w=600&q=80',
  },
  {
    id: 'at3',
    name: 'Big Buddha',
    distance: '20 นาที',
    description: 'พระใหญ่ภูเก็ต จุดชมวิวพาโนรามาเหนือเกาะ',
    image:
      'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?w=600',
  },
  {
    id: 'at4',
    name: 'Old Phuket Town',
    distance: '30 นาที',
    description: 'เมืองเก่าสถาปัตยกรรมจีน-โปรตุเกส คาเฟ่และร้านของฝาก',
    image:
      'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?w=600',
  },
]

export const galleryCategories = [
  { id: 'all', label: 'ทั้งหมด' },
  { id: 'room', label: 'ห้องพัก' },
  { id: 'pool', label: 'สระว่ายน้ำ' },
  { id: 'dining', label: 'อาหาร' },
  { id: 'spa', label: 'สปา' },
  { id: 'beach', label: 'ชายหาด' },
  { id: 'event', label: 'งานอีเวนต์' },
]
