export type StockStatus = 'in_stock' | 'low_stock' | 'out_of_stock' | 'overstock'
export type POStatus = 'draft' | 'pending' | 'approved' | 'received' | 'cancelled'
export type MovementType = 'receive' | 'issue' | 'transfer' | 'adjustment'
export type ShipmentStatus = 'pending' | 'picked' | 'packed' | 'in_transit' | 'delivered' | 'delayed'
export type WarehouseZone = 'A' | 'B' | 'C' | 'D'

export interface Product {
  id: string
  sku: string
  name: string
  category: string
  barcode: string
  quantity: number
  minStock: number
  maxStock: number
  unit: string
  location: string
  zone: WarehouseZone
  status: StockStatus
  image: string
  lastUpdated: string
}

export interface Warehouse {
  id: string
  name: string
  code: string
  address: string
  capacity: number
  used: number
  zones: number
  image: string
  manager: string
}

export interface PurchaseOrder {
  id: string
  poNumber: string
  supplier: string
  items: number
  totalAmount: number
  status: POStatus
  orderDate: string
  expectedDate: string
}

export interface GoodsTransaction {
  id: string
  type: 'receive' | 'issue'
  reference: string
  productName: string
  sku: string
  quantity: number
  warehouse: string
  operator: string
  timestamp: string
  status: 'completed' | 'pending' | 'processing'
}

export interface ProductMovement {
  id: string
  productName: string
  sku: string
  type: MovementType
  fromLocation: string
  toLocation: string
  quantity: number
  operator: string
  timestamp: string
}

export interface Shipment {
  id: string
  trackingNumber: string
  customer: string
  destination: string
  items: number
  status: ShipmentStatus
  carrier: string
  estimatedDelivery: string
  currentLocation: string
  progress: number
}

export interface DashboardStats {
  totalProducts: number
  totalStockValue: number
  lowStockItems: number
  pendingPOs: number
  activeShipments: number
  warehouseUtilization: number
  todayMovements: number
  accuracyRate: number
}

export interface Notification {
  id: string
  title: string
  message: string
  type: 'info' | 'warning' | 'success' | 'error'
  time: string
  read: boolean
}

export interface ReportMetric {
  label: string
  value: number
  change: number
  unit?: string
}

export interface NavItem {
  name: string
  path: string
  icon: string
}
