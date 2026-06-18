<script setup lang="ts">
import { computed } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import CalendarPicker from '@/components/CalendarPicker.vue'
import CourseCard from '@/components/CourseCard.vue'
import CaddyCard from '@/components/CaddyCard.vue'
import { caddies, golfCourses } from '@/data/mockData'
import { useAppStore } from '@/stores/app'

const store = useAppStore()

const filteredCaddies = computed(() => {
  let result = [...caddies]

  if (store.selectedCourseId) {
    result = result.filter((c) => c.courseIds.includes(store.selectedCourseId!))
  }

  if (store.filterType !== 'all') {
    result = result.filter((c) => c.type === store.filterType)
  }

  if (store.filterGender !== 'all') {
    result = result.filter((c) => c.gender === store.filterGender)
  }

  return result
})

const selectedCourse = computed(() =>
  golfCourses.find((c) => c.id === store.selectedCourseId),
)

function selectCourse(id: string) {
  store.selectedCourseId = store.selectedCourseId === id ? null : id
}
</script>

<template>
  <div class="pb-4">
    <AppHeader title="ค้นหาแคดดี้" :show-back="false" />

    <div class="space-y-5 px-5">
      <div>
        <h3 class="mb-2 text-sm font-semibold text-forest-800">เลือกวันที่ออกรอบ</h3>
        <CalendarPicker v-model="store.selectedDate" />
      </div>

      <div>
        <h3 class="mb-2 text-sm font-semibold text-forest-800">เลือกสนามกอล์ฟ</h3>
        <div class="grid grid-cols-2 gap-3">
          <CourseCard
            v-for="course in golfCourses"
            :key="course.id"
            :course="course"
            :selected="store.selectedCourseId === course.id"
            @select="selectCourse(course.id)"
          />
        </div>
        <p v-if="selectedCourse" class="mt-2 text-xs text-forest-600">
          แสดงแคดดี้ที่ประจำ {{ selectedCourse.name }} เท่านั้น
        </p>
      </div>

      <div>
        <h3 class="mb-2 text-sm font-semibold text-forest-800">กรองแคดดี้</h3>
        <div class="flex flex-wrap gap-2">
          <button
            class="rounded-full px-3 py-1.5 text-xs font-medium transition"
            :class="store.filterType === 'all' ? 'bg-forest-700 text-white' : 'bg-stone-100 text-stone-600'"
            @click="store.filterType = 'all'"
          >
            ทั้งหมด
          </button>
          <button
            class="rounded-full px-3 py-1.5 text-xs font-medium transition"
            :class="store.filterType === 'expert' ? 'bg-forest-700 text-white' : 'bg-stone-100 text-stone-600'"
            @click="store.filterType = 'expert'"
          >
            Expert
          </button>
          <button
            class="rounded-full px-3 py-1.5 text-xs font-medium transition"
            :class="store.filterType === 'entertainment' ? 'bg-forest-700 text-white' : 'bg-stone-100 text-stone-600'"
            @click="store.filterType = 'entertainment'"
          >
            Entertainment
          </button>
          <button
            class="rounded-full px-3 py-1.5 text-xs font-medium transition"
            :class="store.filterGender === 'male' ? 'bg-forest-700 text-white' : 'bg-stone-100 text-stone-600'"
            @click="store.filterGender = store.filterGender === 'male' ? 'all' : 'male'"
          >
            ชาย
          </button>
          <button
            class="rounded-full px-3 py-1.5 text-xs font-medium transition"
            :class="store.filterGender === 'female' ? 'bg-forest-700 text-white' : 'bg-stone-100 text-stone-600'"
            @click="store.filterGender = store.filterGender === 'female' ? 'all' : 'female'"
          >
            หญิง
          </button>
        </div>
      </div>

      <div>
        <h3 class="mb-3 text-sm font-semibold text-forest-800">
          แคดดี้ที่พบ ({{ filteredCaddies.length }})
        </h3>
        <div v-if="filteredCaddies.length" class="grid grid-cols-2 gap-3">
          <CaddyCard v-for="caddy in filteredCaddies" :key="caddy.id" :caddy="caddy" compact />
        </div>
        <div v-else class="card p-8 text-center text-sm text-stone-500">
          ไม่พบแคดดี้ตามเงื่อนไขที่เลือก
        </div>
      </div>
    </div>
  </div>
</template>
