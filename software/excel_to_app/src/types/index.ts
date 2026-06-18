export type JobStatus =
  | 'draft'
  | 'pending_assignment'
  | 'assigned'
  | 'in_transit'
  | 'delivered'
  | 'completed'
  | 'cancelled'

export type WorkflowStep =
  | 'create_job'
  | 'assign_vehicle'
  | 'pickup'
  | 'in_transit'
  | 'dealer_delivery'
  | 'confirm'

export interface Dealer {
  id: string
  name: string
  region: string
  province: string
  address: string
  contact: string
  phone: string
  imageUrl: string
}

export interface Vehicle {
  id: string
  plateNumber: string
  type: string
  capacity: number
  driverName: string
  driverPhone: string
  status: 'available' | 'on_route' | 'maintenance'
}

export interface TrackingEvent {
  id: string
  timestamp: string
  location: string
  description: string
  step: WorkflowStep
}

export interface ShipmentJob {
  id: string
  jobNumber: string
  vin: string
  carModel: string
  carColor: string
  origin: string
  originProvince: string
  dealerId: string
  status: JobStatus
  currentStep: WorkflowStep
  createdAt: string
  scheduledPickup: string
  estimatedDelivery: string
  assignedVehicleId?: string
  notes: string
  imageUrl: string
  trackingEvents: TrackingEvent[]
}

export interface DashboardStats {
  totalJobs: number
  inTransit: number
  pendingAssignment: number
  deliveredToday: number
  activeDealers: number
  onTimeRate: number
}

export interface NavItem {
  label: string
  path: string
  icon: string
  step?: WorkflowStep
  description: string
}
