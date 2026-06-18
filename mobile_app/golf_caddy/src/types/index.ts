export type UserRole = 'golfer' | 'caddy'
export type CaddyType = 'entertainment' | 'expert'
export type Gender = 'male' | 'female'
export type BookingStatus = 'pending' | 'accepted' | 'rejected' | 'completed'
export type PaymentMethod = 'qr' | 'credit_card' | 'ewallet'

export interface GolfCourse {
  id: string
  name: string
  nameEn: string
  province: string
  image: string
  holes: number
}

export interface Review {
  id: string
  golferName: string
  rating: number
  comment: string
  date: string
}

export interface CourseExperience {
  courseId: string
  years: number
  rounds: number
}

export interface Caddy {
  id: string
  name: string
  nameEn: string
  gender: Gender
  type: CaddyType
  image: string
  languages: string[]
  experienceYears: number
  rating: number
  reviewCount: number
  bio: string
  bioEn: string
  courseIds: string[]
  courseExperience: CourseExperience[]
  reviews: Review[]
  isTopTen: boolean
  popularityRank?: number
}

export interface Booking {
  id: string
  caddyId: string
  courseId: string
  date: string
  status: BookingStatus
  createdAt: string
  golferNote?: string
}

export interface ChatMessage {
  id: string
  bookingId: string
  sender: 'golfer' | 'caddy'
  text: string
  time: string
}

export interface Tutorial {
  id: string
  title: string
  titleEn: string
  category: string
  youtubeId: string
  duration: string
  thumbnail: string
}

export interface Transaction {
  id: string
  type: 'topup' | 'unlock' | 'booking'
  amount: number
  method?: PaymentMethod
  date: string
  description: string
}
