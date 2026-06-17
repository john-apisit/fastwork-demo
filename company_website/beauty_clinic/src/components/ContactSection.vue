<script setup lang="ts">
import { site } from '../data/content'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="contact" class="section-padding">
    <div class="container-narrow">
      <SectionHeading
        label="Contact"
        title="ติดต่อเรา"
        description="Visit us at our clinic or reach out through any channel below"
      />

      <div class="grid gap-8 lg:grid-cols-2">
        <div class="space-y-6">
          <div class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 class="font-bold text-gray-900">ข้อมูลติดต่อ</h3>
            <dl class="mt-4 space-y-4 text-sm">
              <div class="flex gap-3">
                <dt class="shrink-0 text-gray-400">ที่อยู่</dt>
                <dd class="text-gray-700">{{ site.address }}</dd>
              </div>
              <div class="flex gap-3">
                <dt class="shrink-0 text-gray-400">โทร</dt>
                <dd class="text-gray-700">{{ site.phone }}</dd>
              </div>
              <div class="flex gap-3">
                <dt class="shrink-0 text-gray-400">อีเมล</dt>
                <dd class="text-gray-700">{{ site.email }}</dd>
              </div>
              <div class="flex gap-3">
                <dt class="shrink-0 text-gray-400">Line</dt>
                <dd class="text-gray-700">{{ site.line }}</dd>
              </div>
              <div class="flex gap-3">
                <dt class="shrink-0 text-gray-400">เวลา</dt>
                <dd class="text-gray-700">{{ site.hours }}</dd>
              </div>
            </dl>
          </div>

          <div class="overflow-hidden rounded-2xl shadow-md">
            <iframe
              :src="site.mapEmbedUrl"
              width="100%"
              height="320"
              style="border: 0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Google Map - Lumière Aesthetic Clinic"
            />
          </div>
        </div>

        <div class="overflow-hidden rounded-2xl shadow-md">
          <img
            :src="site.contactImage"
            alt="ภายในคลินิก Lumière"
            class="h-full min-h-[400px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>
