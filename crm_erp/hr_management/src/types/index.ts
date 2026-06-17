export type EmployeeStatus = 'active' | 'on-leave' | 'probation'
export type LeaveStatus = 'pending' | 'approved' | 'rejected'
export type LeaveType = 'ลาป่วย' | 'ลากิจ' | 'ลาพักร้อน' | 'ลาคลอด'
export type ExpenseStatus = 'pending' | 'approved' | 'rejected' | 'paid'
export type ApprovalType = 'leave' | 'expense' | 'document'
export type ApprovalStatus = 'pending' | 'approved' | 'rejected'
export type DocumentCategory = 'สัญญาจ้าง' | 'นโยบาย' | 'ใบรับรอง' | 'อื่นๆ'
export type AttendanceStatus = 'present' | 'late' | 'absent' | 'wfh'

export interface Employee {
  id: string
  employeeCode: string
  name: string
  email: string
  department: string
  position: string
  status: EmployeeStatus
  joinDate: string
  avatar: string
  phone: string
}

export interface LeaveRequest {
  id: string
  employeeId: string
  employeeName: string
  type: LeaveType
  startDate: string
  endDate: string
  days: number
  reason: string
  status: LeaveStatus
  submittedAt: string
}

export interface AttendanceRecord {
  id: string
  employeeId: string
  employeeName: string
  date: string
  checkIn: string | null
  checkOut: string | null
  status: AttendanceStatus
  hours: number
}

export interface ExpenseClaim {
  id: string
  employeeId: string
  employeeName: string
  title: string
  category: string
  amount: number
  date: string
  status: ExpenseStatus
  receipt: string
}

export interface ApprovalItem {
  id: string
  type: ApprovalType
  title: string
  requester: string
  department: string
  amount?: number
  submittedAt: string
  status: ApprovalStatus
  priority: 'normal' | 'high'
}

export interface Document {
  id: string
  name: string
  category: DocumentCategory
  uploadedBy: string
  uploadedAt: string
  size: string
  version: string
}

export interface Notification {
  id: string
  title: string
  message: string
  time: string
  read: boolean
  type: 'info' | 'success' | 'warning' | 'approval'
}

export interface DashboardStat {
  label: string
  value: string | number
  change: string
  trend: 'up' | 'down' | 'neutral'
}
