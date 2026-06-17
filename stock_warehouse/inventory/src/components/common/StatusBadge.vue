<script setup lang="ts">
const props = defineProps<{
  status: string
  type?: 'stock' | 'po' | 'shipment' | 'transaction' | 'movement'
}>()

const labels: Record<string, Record<string, { text: string; class: string }>> = {
  stock: {
    in_stock: { text: 'มีสต๊อก', class: 'bg-warehouse-50 text-warehouse-700' },
    low_stock: { text: 'สต๊อกต่ำ', class: 'bg-amber-50 text-amber-700' },
    out_of_stock: { text: 'หมดสต๊อก', class: 'bg-red-50 text-red-700' },
    overstock: { text: 'สต๊อกเกิน', class: 'bg-purple-50 text-purple-700' },
  },
  po: {
    draft: { text: 'แบบร่าง', class: 'bg-slate-100 text-slate-600' },
    pending: { text: 'รออนุมัติ', class: 'bg-amber-50 text-amber-700' },
    approved: { text: 'อนุมัติแล้ว', class: 'bg-brand-50 text-brand-700' },
    received: { text: 'รับแล้ว', class: 'bg-warehouse-50 text-warehouse-700' },
    cancelled: { text: 'ยกเลิก', class: 'bg-red-50 text-red-600' },
  },
  shipment: {
    pending: { text: 'รอดำเนินการ', class: 'bg-slate-100 text-slate-600' },
    picked: { text: 'หยิบแล้ว', class: 'bg-blue-50 text-blue-700' },
    packed: { text: 'แพ็คแล้ว', class: 'bg-indigo-50 text-indigo-700' },
    in_transit: { text: 'กำลังจัดส่ง', class: 'bg-brand-50 text-brand-700' },
    delivered: { text: 'จัดส่งสำเร็จ', class: 'bg-warehouse-50 text-warehouse-700' },
    delayed: { text: 'ล่าช้า', class: 'bg-red-50 text-red-700' },
  },
  transaction: {
    completed: { text: 'เสร็จสิ้น', class: 'bg-warehouse-50 text-warehouse-700' },
    pending: { text: 'รอดำเนินการ', class: 'bg-amber-50 text-amber-700' },
    processing: { text: 'กำลังดำเนินการ', class: 'bg-brand-50 text-brand-700' },
  },
  movement: {
    receive: { text: 'รับเข้า', class: 'bg-warehouse-50 text-warehouse-700' },
    issue: { text: 'จ่ายออก', class: 'bg-orange-50 text-orange-700' },
    transfer: { text: 'โอนย้าย', class: 'bg-brand-50 text-brand-700' },
    adjustment: { text: 'ปรับปรุง', class: 'bg-purple-50 text-purple-700' },
  },
}

const badge = labels[props.type || 'stock']?.[props.status] ?? {
  text: props.status,
  class: 'bg-slate-100 text-slate-600',
}
</script>

<template>
  <span :class="badge.class" class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium">
    {{ badge.text }}
  </span>
</template>
