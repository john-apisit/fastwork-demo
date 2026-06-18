<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import CaddyCard from '@/components/CaddyCard.vue'
import { getTopCaddies } from '@/data/mockData'
import { useAppStore } from '@/stores/app'

const store = useAppStore()
const topCaddies = getTopCaddies()
</script>

<template>
  <div class="pb-4">
    <AppHeader />

    <section class="relative mx-5 mb-6 overflow-hidden rounded-2xl">
      <img
        src="https://images.unsplash.com/photo-1535131749006-b7f58c990b2b?w=800&q=80"
        alt="Golf course"
        class="h-44 w-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-forest-900/80 to-forest-900/30" />
      <div class="absolute inset-0 flex flex-col justify-end p-5">
        <p class="text-xs font-medium uppercase tracking-widest text-gold-300">Premium Golf Experience</p>
        <h2 class="font-display text-2xl font-semibold leading-tight text-white">
          จองแคดดี้<br />มืออาชีพในประเทศไทย
        </h2>
        <router-link to="/explore" class="btn-gold mt-3 inline-block w-fit text-xs">
          เริ่มจองเลย
        </router-link>
      </div>
    </section>

    <section class="mb-6 px-5">
      <div class="grid grid-cols-3 gap-3">
        <router-link to="/explore" class="card flex flex-col items-center p-3 text-center transition hover:shadow-premium">
          <span class="mb-1 text-2xl">⛳</span>
          <span class="text-[11px] font-medium text-forest-700">เลือกสนาม</span>
        </router-link>
        <router-link to="/knowledge" class="card flex flex-col items-center p-3 text-center transition hover:shadow-premium">
          <span class="mb-1 text-2xl">📚</span>
          <span class="text-[11px] font-medium text-forest-700">ความรู้</span>
        </router-link>
        <router-link to="/credits" class="card flex flex-col items-center p-3 text-center transition hover:shadow-premium">
          <span class="mb-1 text-2xl">💳</span>
          <span class="text-[11px] font-medium text-forest-700">เติมเครดิต</span>
        </router-link>
      </div>
    </section>

    <section class="mb-6 px-5">
      <div class="mb-3 flex items-center justify-between">
        <h3 class="section-title">Top 10 แคดดี้ยอดนิยม</h3>
        <router-link to="/explore" class="text-xs font-medium text-gold-600">ดูทั้งหมด</router-link>
      </div>
      <div class="hide-scrollbar -mx-5 flex gap-3 overflow-x-auto px-5 pb-2">
        <div v-for="caddy in topCaddies" :key="caddy.id" class="w-[160px] shrink-0">
          <CaddyCard :caddy="caddy" compact :rank="caddy.popularityRank" />
        </div>
      </div>
    </section>

    <section v-if="store.activeBookings.length" class="px-5">
      <h3 class="section-title mb-3">การจองที่ยืนยันแล้ว</h3>
      <router-link
        v-for="booking in store.activeBookings"
        :key="booking.id"
        :to="`/chat/${booking.id}`"
        class="card mb-2 flex items-center gap-3 p-3 transition hover:shadow-premium"
      >
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-forest-100 text-forest-700">
          💬
        </div>
        <div class="flex-1">
          <p class="text-sm font-medium text-forest-800">แชทกับแคดดี้</p>
          <p class="text-xs text-stone-500">{{ booking.date }}</p>
        </div>
        <span class="badge bg-green-100 text-green-700">ยืนยันแล้ว</span>
      </router-link>
    </section>

    <section v-if="!store.isLoggedIn" class="mt-4 px-5">
      <router-link to="/register" class="btn-primary block w-full text-center">
        สมัครสมาชิก / เข้าสู่ระบบ
      </router-link>
    </section>
  </div>
</template>
