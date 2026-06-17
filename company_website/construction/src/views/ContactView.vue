<script setup lang="ts">
import { companyInfo } from '@/data/content'
import SectionHeading from '@/components/SectionHeading.vue'
import ContactForm from '@/components/ContactForm.vue'
</script>

<template>
  <section class="bg-slate-850 py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        label="ติดต่อ"
        title="ติดต่อเรา"
        description="สอบถามข้อมูล ขอใบเสนอราคา หรือนัดหมายปรึกษาโครการได้ที่นี่"
        light
      />
    </div>
  </section>

  <section class="py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 class="text-2xl font-bold text-slate-900">ส่งข้อความถึงเรา</h2>
          <p class="mt-2 text-slate-600">
            กรอกแบบฟอร์มด้านล่าง ทีมงานจะติดต่อกลับภายใน 1-2 วันทำการ
          </p>
          <div class="mt-8">
            <ContactForm />
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-slate-900">ข้อมูลติดต่อ</h2>
          <div class="mt-6 space-y-6">
            <div class="flex gap-4">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-xl">
                📍
              </div>
              <div>
                <p class="font-semibold text-slate-900">ที่อยู่</p>
                <p class="mt-1 text-sm text-slate-600">{{ companyInfo.address }}</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-xl">
                📞
              </div>
              <div>
                <p class="font-semibold text-slate-900">โทรศัพท์</p>
                <a
                  :href="`tel:${companyInfo.phone}`"
                  class="mt-1 text-sm text-brand-600 hover:underline"
                >
                  {{ companyInfo.phone }}
                </a>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-xl">
                ✉️
              </div>
              <div>
                <p class="font-semibold text-slate-900">อีเมล</p>
                <a
                  :href="`mailto:${companyInfo.email}`"
                  class="mt-1 text-sm text-brand-600 hover:underline"
                >
                  {{ companyInfo.email }}
                </a>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-xl">
                🕐
              </div>
              <div>
                <p class="font-semibold text-slate-900">เวลาทำการ</p>
                <p class="mt-1 text-sm text-slate-600">จันทร์ - ศุกร์ 08:00 - 17:00 น.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Google Map -->
  <section class="bg-slate-50 py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-center text-2xl font-bold text-slate-900">แผนที่</h2>
      <div class="mt-8 overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200">
        <iframe
          :src="companyInfo.mapEmbedUrl"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="แผนที่ที่ตั้งบริษัท"
        />
      </div>
    </div>
  </section>
</template>
