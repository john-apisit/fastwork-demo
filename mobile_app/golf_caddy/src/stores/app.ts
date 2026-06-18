import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type {
  UserRole,
  Booking,
  ChatMessage,
  Transaction,
  PaymentMethod,
  CaddyType,
  Gender,
} from '@/types'
import { BOOKING_COST, UNLOCK_COST } from '@/data/mockData'

export const useAppStore = defineStore('app', () => {
  const isLoggedIn = ref(false)
  const userRole = ref<UserRole>('golfer')
  const userName = ref('คุณสมชาย')
  const credits = ref(500)
  const unlockedCaddies = ref<string[]>(['cd1'])
  const selectedDate = ref<string | null>(null)
  const selectedCourseId = ref<string | null>(null)
  const filterType = ref<CaddyType | 'all'>('all')
  const filterGender = ref<Gender | 'all'>('all')

  const bookings = ref<Booking[]>([
    {
      id: 'b1',
      caddyId: 'cd1',
      courseId: 'c1',
      date: '2026-06-20',
      status: 'accepted',
      createdAt: '2026-06-15T10:00:00',
      golferNote: 'ต้องการแคดดี้ที่พูดอังกฤษได้ดี',
    },
    {
      id: 'b2',
      caddyId: 'cd3',
      courseId: 'c2',
      date: '2026-06-25',
      status: 'pending',
      createdAt: '2026-06-17T14:30:00',
    },
    {
      id: 'b3',
      caddyId: 'cd2',
      courseId: 'c4',
      date: '2026-06-10',
      status: 'completed',
      createdAt: '2026-06-05T09:00:00',
    },
  ])

  const chatMessages = ref<ChatMessage[]>([
    {
      id: 'm1',
      bookingId: 'b1',
      sender: 'caddy',
      text: 'สวัสดีค่ะ ยินดีที่ได้แคดดี้ให้คุณในวันศุกร์นี้ค่ะ',
      time: '10:15',
    },
    {
      id: 'm2',
      bookingId: 'b1',
      sender: 'golfer',
      text: 'สวัสดีครับ ขอเจอกันที่ clubhouse 8:00 น. นะครับ',
      time: '10:18',
    },
    {
      id: 'm3',
      bookingId: 'b1',
      sender: 'caddy',
      text: 'รับทราบค่ะ พร้อมชุดยูนิฟอร์มตามมาตรฐานสนามค่ะ',
      time: '10:20',
    },
  ])

  const transactions = ref<Transaction[]>([
    {
      id: 'tx1',
      type: 'topup',
      amount: 500,
      method: 'qr',
      date: '2026-06-10',
      description: 'เติมเครดิต 500 บาท',
    },
    {
      id: 'tx2',
      type: 'unlock',
      amount: -UNLOCK_COST,
      date: '2026-06-12',
      description: 'ปลดล็อกโปรไฟล์ สมหญิง วงศ์สุวรรณ',
    },
  ])

  const reviewedBookings = ref<string[]>([])

  const pendingBookings = computed(() =>
    bookings.value.filter((b) => b.status === 'pending'),
  )

  const activeBookings = computed(() =>
    bookings.value.filter((b) => b.status === 'accepted'),
  )

  function login(role: UserRole, name: string) {
    userRole.value = role
    userName.value = name
    isLoggedIn.value = true
  }

  function logout() {
    isLoggedIn.value = false
  }

  function isCaddyUnlocked(caddyId: string) {
    return unlockedCaddies.value.includes(caddyId)
  }

  function unlockCaddy(caddyId: string): boolean {
    if (credits.value < UNLOCK_COST) return false
    if (unlockedCaddies.value.includes(caddyId)) return true
    credits.value -= UNLOCK_COST
    unlockedCaddies.value.push(caddyId)
    transactions.value.unshift({
      id: `tx-${Date.now()}`,
      type: 'unlock',
      amount: -UNLOCK_COST,
      date: new Date().toISOString().split('T')[0],
      description: `ปลดล็อกโปรไฟล์แคดดี้`,
    })
    return true
  }

  function topUpCredits(amount: number, method: PaymentMethod): boolean {
    credits.value += amount
    transactions.value.unshift({
      id: `tx-${Date.now()}`,
      type: 'topup',
      amount,
      method,
      date: new Date().toISOString().split('T')[0],
      description: `เติมเครดิต ${amount} บาท`,
    })
    return true
  }

  function sendBookingRequest(
    caddyId: string,
    courseId: string,
    date: string,
    note?: string,
  ): boolean {
    if (credits.value < BOOKING_COST) return false
    credits.value -= BOOKING_COST
    bookings.value.unshift({
      id: `b-${Date.now()}`,
      caddyId,
      courseId,
      date,
      status: 'pending',
      createdAt: new Date().toISOString(),
      golferNote: note,
    })
    transactions.value.unshift({
      id: `tx-${Date.now()}`,
      type: 'booking',
      amount: -BOOKING_COST,
      date: new Date().toISOString().split('T')[0],
      description: 'ส่งคำขอจองแคดดี้',
    })
    return true
  }

  function respondToBooking(bookingId: string, accept: boolean) {
    const booking = bookings.value.find((b) => b.id === bookingId)
    if (booking) {
      booking.status = accept ? 'accepted' : 'rejected'
    }
  }

  function completeBooking(bookingId: string) {
    const booking = bookings.value.find((b) => b.id === bookingId)
    if (booking) booking.status = 'completed'
  }

  function sendMessage(bookingId: string, text: string) {
    chatMessages.value.push({
      id: `m-${Date.now()}`,
      bookingId,
      sender: userRole.value === 'golfer' ? 'golfer' : 'caddy',
      text,
      time: new Date().toLocaleTimeString('th-TH', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    })
  }

  function submitReview(bookingId: string) {
    reviewedBookings.value.push(bookingId)
  }

  function hasReviewed(bookingId: string) {
    return reviewedBookings.value.includes(bookingId)
  }

  return {
    isLoggedIn,
    userRole,
    userName,
    credits,
    unlockedCaddies,
    selectedDate,
    selectedCourseId,
    filterType,
    filterGender,
    bookings,
    chatMessages,
    transactions,
    reviewedBookings,
    pendingBookings,
    activeBookings,
    login,
    logout,
    isCaddyUnlocked,
    unlockCaddy,
    topUpCredits,
    sendBookingRequest,
    respondToBooking,
    completeBooking,
    sendMessage,
    submitReview,
    hasReviewed,
  }
})
