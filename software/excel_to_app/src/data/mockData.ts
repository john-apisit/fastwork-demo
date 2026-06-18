import type {
  DashboardStats,
  Dealer,
  NavItem,
  ShipmentJob,
  Vehicle,
  WorkflowStep,
} from '@/types'

export const statusLabels: Record<string, string> = {
  draft: 'ร่าง',
  pending_assignment: 'รอมอบหมายรถ',
  assigned: 'มอบหมายแล้ว',
  in_transit: 'กำลังขนส่ง',
  delivered: 'ส่งถึงดีลเลอร์',
  completed: 'ปิดงานแล้ว',
  cancelled: 'ยกเลิก',
}

export const statusColors: Record<string, string> = {
  draft: 'bg-slate-100 text-slate-700',
  pending_assignment: 'bg-amber-100 text-amber-800',
  assigned: 'bg-sky-100 text-sky-800',
  in_transit: 'bg-blue-100 text-blue-800',
  delivered: 'bg-emerald-100 text-emerald-800',
  completed: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800',
  available: 'bg-emerald-100 text-emerald-800',
  on_route: 'bg-violet-100 text-violet-800',
  maintenance: 'bg-orange-100 text-orange-800',
}

export const stepLabels: Record<WorkflowStep, string> = {
  create_job: '1. สร้างงาน',
  assign_vehicle: '2. มอบหมายรถ',
  pickup: '3. รับรถ',
  in_transit: '4. ขนส่ง',
  dealer_delivery: '5. ส่งดีลเลอร์',
  confirm: '6. ยืนยันปิดงาน',
}

export const workflowSteps: WorkflowStep[] = [
  'create_job',
  'assign_vehicle',
  'pickup',
  'in_transit',
  'dealer_delivery',
  'confirm',
]

export const navItems: NavItem[] = [
  {
    label: 'ภาพรวม',
    path: '/',
    icon: 'dashboard',
    description: 'Dashboard สรุปงานขนส่งทั้งหมด',
  },
  {
    label: 'รายการงาน',
    path: '/jobs',
    icon: 'jobs',
    step: 'create_job',
    description: 'จัดการงานขนส่ง (เดิม: Sheet งานหลัก)',
  },
  {
    label: 'มอบหมายรถ',
    path: '/assignment',
    icon: 'assignment',
    step: 'assign_vehicle',
    description: 'จัดสรรรถขนส่งและคนขับ',
  },
  {
    label: 'ติดตามสถานะ',
    path: '/tracking',
    icon: 'tracking',
    step: 'in_transit',
    description: 'ติดตามเส้นทางแบบ Real-time',
  },
  {
    label: 'ดีลเลอร์',
    path: '/dealers',
    icon: 'dealers',
    step: 'dealer_delivery',
    description: 'ข้อมูลปลายทางทั่วประเทศ',
  },
  {
    label: 'รายงาน',
    path: '/reports',
    icon: 'reports',
    step: 'confirm',
    description: 'สรุปผลและปิดงาน',
  },
]

export const dealers: Dealer[] = [
  {
    id: 'D001',
    name: 'Toyota สยามโตโยต้า บางนา',
    region: 'กรุงเทพและปริมณฑล',
    province: 'กรุงเทพมหานคร',
    address: '888 ถ.บางนา-ตราด กม.2 บางนา',
    contact: 'คุณสมชาย วงศ์ดี',
    phone: '02-123-4567',
    imageUrl:
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=300&fit=crop',
  },
  {
    id: 'D002',
    name: 'Honda Auto Alliance เชียงใหม่',
    region: 'ภาคเหนือ',
    province: 'เชียงใหม่',
    address: '99 ถ.ซuperhighway ต.หนองป่าครั่ง',
    contact: 'คุณวิไล ใจดี',
    phone: '053-234-5678',
    imageUrl:
      'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&h=300&fit=crop',
  },
  {
    id: 'D003',
    name: 'Mazda ภูเก็ต Motors',
    region: 'ภาคใต้',
    province: 'ภูเก็ต',
    address: '45 ถ.เฉลิมพระเกียรติ ต.วิชิต',
    contact: 'คุณประเสริฐ ทองดี',
    phone: '076-345-6789',
    imageUrl:
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop',
  },
  {
    id: 'D004',
    name: 'Isuzu ขอนแก่น Center',
    region: 'ภาคตะวันออกเฉียงเหนือ',
    province: 'ขอนแก่น',
    address: '120 ถ.มิตรภาพ ต.ในเมือง',
    contact: 'คุณนภา สุขใจ',
    phone: '043-456-7890',
    imageUrl:
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=300&fit=crop',
  },
  {
    id: 'D005',
    name: 'Nissan ระยอง Auto Plaza',
    region: 'ภาคตะวันออก',
    province: 'ระยอง',
    address: '78 ถ.สukhumvit ต.ท่าประดู่',
    contact: 'คุณอนันต์ รุ่งเรือง',
    phone: '038-567-8901',
    imageUrl:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop',
  },
  {
    id: 'D006',
    name: 'MG สุราษฎร์ธานี Hub',
    region: 'ภาคใต้',
    province: 'สุราษฎร์ธานี',
    address: '33 ถ.ตลาดใหม่ ต.ตลาด',
    contact: 'คุณพิมพ์ใจ แสงทอง',
    phone: '077-678-9012',
    imageUrl:
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop',
  },
]

export const vehicles: Vehicle[] = [
  {
    id: 'V001',
    plateNumber: 'กข 1234',
    type: 'Car Carrier 6 คัน',
    capacity: 6,
    driverName: 'สมศักดิ์ ขับดี',
    driverPhone: '081-111-2222',
    status: 'on_route',
  },
  {
    id: 'V002',
    plateNumber: 'คง 5678',
    type: 'Car Carrier 8 คัน',
    capacity: 8,
    driverName: 'วิชัย มั่นคง',
    driverPhone: '082-333-4444',
    status: 'available',
  },
  {
    id: 'V003',
    plateNumber: 'จฉ 9012',
    type: 'Single Car Trailer',
    capacity: 1,
    driverName: 'ประยุทธ รวดเร็ว',
    driverPhone: '083-555-6666',
    status: 'available',
  },
  {
    id: 'V004',
    plateNumber: 'ชซ 3456',
    type: 'Car Carrier 6 คัน',
    capacity: 6,
    driverName: 'สุรชัย ปลอดภัย',
    driverPhone: '084-777-8888',
    status: 'on_route',
  },
  {
    id: 'V005',
    plateNumber: 'ญฎ 7890',
    type: 'Car Carrier 4 คัน',
    capacity: 4,
    driverName: 'เกียรติศักดิ์ นุ่มนวล',
    driverPhone: '085-999-0000',
    status: 'maintenance',
  },
]

export const jobs: ShipmentJob[] = [
  {
    id: 'J001',
    jobNumber: 'AL-2026-0041',
    vin: 'MR0KA3CD0R0123456',
    carModel: 'Toyota Hilux Revo',
    carColor: 'ขาว',
    origin: 'โรงงาน Toyota Gateway',
    originProvince: 'ชลบุรี',
    dealerId: 'D001',
    status: 'in_transit',
    currentStep: 'in_transit',
    createdAt: '2026-06-15T08:30:00',
    scheduledPickup: '2026-06-16T06:00:00',
    estimatedDelivery: '2026-06-17T14:00:00',
    assignedVehicleId: 'V001',
    notes: 'ส่งด่วน — ลูกค้ารอรับที่ดีลเลอร์',
    imageUrl:
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop',
    trackingEvents: [
      {
        id: 'T1',
        timestamp: '2026-06-15T08:30:00',
        location: 'ระบบหลังบ้าน',
        description: 'สร้างงานขนส่งใหม่',
        step: 'create_job',
      },
      {
        id: 'T2',
        timestamp: '2026-06-15T10:00:00',
        location: 'ศูนย์จัดสรร',
        description: 'มอบหมายรถ กข 1234 — คนขับ สมศักดิ์',
        step: 'assign_vehicle',
      },
      {
        id: 'T3',
        timestamp: '2026-06-16T06:30:00',
        location: 'Toyota Gateway, ชลบุรี',
        description: 'รับรถจากโรงงานเรียบร้อย',
        step: 'pickup',
      },
      {
        id: 'T4',
        timestamp: '2026-06-16T14:00:00',
        location: 'ทางด่วนบางพระ',
        description: 'ออกเดินทางมุ่งหน้ากรุงเทพฯ',
        step: 'in_transit',
      },
    ],
  },
  {
    id: 'J002',
    jobNumber: 'AL-2026-0042',
    vin: 'HNDCM56789ABCDEF0',
    carModel: 'Honda City e:HEV',
    carColor: 'เทา',
    origin: 'ศูนย์กระจาย Honda Ayutthaya',
    originProvince: 'พระนครศรีอยุธยา',
    dealerId: 'D002',
    status: 'pending_assignment',
    currentStep: 'assign_vehicle',
    createdAt: '2026-06-17T09:00:00',
    scheduledPickup: '2026-06-18T07:00:00',
    estimatedDelivery: '2026-06-19T16:00:00',
    notes: 'เส้นทาง อยุธยา → เชียงใหม่',
    imageUrl:
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop',
    trackingEvents: [
      {
        id: 'T5',
        timestamp: '2026-06-17T09:00:00',
        location: 'ระบบหลังบ้าน',
        description: 'สร้างงานขนส่งใหม่',
        step: 'create_job',
      },
    ],
  },
  {
    id: 'J003',
    jobNumber: 'AL-2026-0043',
    vin: 'MZA3D789012345678',
    carModel: 'Mazda CX-5',
    carColor: 'แดง',
    origin: 'Mazda Laem Chabang Port',
    originProvince: 'ชลบุรี',
    dealerId: 'D003',
    status: 'assigned',
    currentStep: 'pickup',
    createdAt: '2026-06-16T11:00:00',
    scheduledPickup: '2026-06-18T05:00:00',
    estimatedDelivery: '2026-06-19T10:00:00',
    assignedVehicleId: 'V004',
    notes: 'ขนส่งข้ามภาค — ตรวจสภาพรถก่อนรับ',
    imageUrl:
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop',
    trackingEvents: [
      {
        id: 'T6',
        timestamp: '2026-06-16T11:00:00',
        location: 'ระบบหลังบ้าน',
        description: 'สร้างงานขนส่งใหม่',
        step: 'create_job',
      },
      {
        id: 'T7',
        timestamp: '2026-06-17T08:00:00',
        location: 'ศูนย์จัดสรร',
        description: 'มอบหมายรถ ชซ 3456 — คนขับ สุรชัย',
        step: 'assign_vehicle',
      },
    ],
  },
  {
    id: 'J004',
    jobNumber: 'AL-2026-0044',
    vin: 'ISZ9E012345678901',
    carModel: 'Isuzu D-Max',
    carColor: 'ดำ',
    origin: 'Isuzu Samrong Plant',
    originProvince: 'สมุทรปราการ',
    dealerId: 'D004',
    status: 'delivered',
    currentStep: 'confirm',
    createdAt: '2026-06-12T07:00:00',
    scheduledPickup: '2026-06-13T06:00:00',
    estimatedDelivery: '2026-06-14T15:00:00',
    assignedVehicleId: 'V002',
    notes: 'ส่งถึงดีลเลอร์แล้ว รอยืนยันปิดงาน',
    imageUrl:
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop',
    trackingEvents: [
      {
        id: 'T8',
        timestamp: '2026-06-12T07:00:00',
        location: 'ระบบหลังบ้าน',
        description: 'สร้างงานขนส่งใหม่',
        step: 'create_job',
      },
      {
        id: 'T9',
        timestamp: '2026-06-12T09:00:00',
        location: 'ศูนย์จัดสรร',
        description: 'มอบหมายรถ คง 5678',
        step: 'assign_vehicle',
      },
      {
        id: 'T10',
        timestamp: '2026-06-13T06:30:00',
        location: 'Isuzu Samrong',
        description: 'รับรถเรียบร้อย',
        step: 'pickup',
      },
      {
        id: 'T11',
        timestamp: '2026-06-13T08:00:00',
        location: 'ทางหลวงมิตรภาพ',
        description: 'ออกเดินทางมุ่งหน้าขอนแก่น',
        step: 'in_transit',
      },
      {
        id: 'T12',
        timestamp: '2026-06-14T14:30:00',
        location: 'Isuzu ขอนแก่น Center',
        description: 'ส่งมอบรถถึงดีลเลอร์',
        step: 'dealer_delivery',
      },
    ],
  },
  {
    id: 'J005',
    jobNumber: 'AL-2026-0045',
    vin: 'NSN5F678901234567',
    carModel: 'Nissan Almera',
    carColor: 'เงิน',
    origin: 'Nissan Bangna DC',
    originProvince: 'กรุงเทพมหานคร',
    dealerId: 'D005',
    status: 'completed',
    currentStep: 'confirm',
    createdAt: '2026-06-08T10:00:00',
    scheduledPickup: '2026-06-09T08:00:00',
    estimatedDelivery: '2026-06-09T17:00:00',
    assignedVehicleId: 'V003',
    notes: 'ปิดงานเรียบร้อย',
    imageUrl:
      'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=600&h=400&fit=crop',
    trackingEvents: [
      {
        id: 'T13',
        timestamp: '2026-06-08T10:00:00',
        location: 'ระบบหลังบ้าน',
        description: 'สร้างงานขนส่งใหม่',
        step: 'create_job',
      },
      {
        id: 'T14',
        timestamp: '2026-06-08T14:00:00',
        location: 'ศูนย์จัดสรร',
        description: 'มอบหมายรถ จฉ 9012',
        step: 'assign_vehicle',
      },
      {
        id: 'T15',
        timestamp: '2026-06-09T08:30:00',
        location: 'Nissan Bangna DC',
        description: 'รับรถเรียบร้อย',
        step: 'pickup',
      },
      {
        id: 'T16',
        timestamp: '2026-06-09T09:00:00',
        location: 'ถ.บางนา-ตราด',
        description: 'ออกเดินทางมุ่งหน้าระยอง',
        step: 'in_transit',
      },
      {
        id: 'T17',
        timestamp: '2026-06-09T16:30:00',
        location: 'Nissan ระยอง Auto Plaza',
        description: 'ส่งมอบรถถึงดีลเลอร์',
        step: 'dealer_delivery',
      },
      {
        id: 'T18',
        timestamp: '2026-06-09T17:00:00',
        location: 'ระบบหลังบ้าน',
        description: 'ยืนยันปิดงาน — ส่งตรงเวลา',
        step: 'confirm',
      },
    ],
  },
  {
    id: 'J006',
    jobNumber: 'AL-2026-0046',
    vin: 'MGM2H345678901234',
    carModel: 'MG ZS EV',
    carColor: 'น้ำเงิน',
    origin: 'MG Rayong Factory',
    originProvince: 'ระยอง',
    dealerId: 'D006',
    status: 'in_transit',
    currentStep: 'in_transit',
    createdAt: '2026-06-14T08:00:00',
    scheduledPickup: '2026-06-15T07:00:00',
    estimatedDelivery: '2026-06-17T12:00:00',
    assignedVehicleId: 'V004',
    notes: 'รถ EV — ตรวจแบตเตอรี่ก่อนส่ง',
    imageUrl:
      'https://images.unsplash.com/photo-1767949374177-0523cc71421b?w=600&h=400&fit=crop',
    trackingEvents: [
      {
        id: 'T19',
        timestamp: '2026-06-14T08:00:00',
        location: 'ระบบหลังบ้าน',
        description: 'สร้างงานขนส่งใหม่',
        step: 'create_job',
      },
      {
        id: 'T20',
        timestamp: '2026-06-14T10:00:00',
        location: 'ศูนย์จัดสรร',
        description: 'มอบหมายรถ ชซ 3456',
        step: 'assign_vehicle',
      },
      {
        id: 'T21',
        timestamp: '2026-06-15T07:30:00',
        location: 'MG Rayong Factory',
        description: 'รับรถ EV เรียบร้อย',
        step: 'pickup',
      },
      {
        id: 'T22',
        timestamp: '2026-06-16T06:00:00',
        location: 'ทางหลวงสาย 4',
        description: 'ผ่านสุราษฎร์ — มุ่งหน้าภาคใต้',
        step: 'in_transit',
      },
    ],
  },
]

export const dashboardStats: DashboardStats = {
  totalJobs: jobs.length,
  inTransit: jobs.filter((j) => j.status === 'in_transit').length,
  pendingAssignment: jobs.filter((j) => j.status === 'pending_assignment').length,
  deliveredToday: 1,
  activeDealers: dealers.length,
  onTimeRate: 94,
}

export function getDealerById(id: string): Dealer | undefined {
  return dealers.find((d) => d.id === id)
}

export function getVehicleById(id: string): Vehicle | undefined {
  return vehicles.find((v) => v.id === id)
}

export function getJobById(id: string): ShipmentJob | undefined {
  return jobs.find((j) => j.id === id)
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('th-TH', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleString('th-TH', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function getStepIndex(step: WorkflowStep): number {
  return workflowSteps.indexOf(step)
}

export function isStepCompleted(jobStep: WorkflowStep, checkStep: WorkflowStep): boolean {
  return getStepIndex(jobStep) > getStepIndex(checkStep)
}

export function isStepCurrent(jobStep: WorkflowStep, checkStep: WorkflowStep): boolean {
  return jobStep === checkStep
}
