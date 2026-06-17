<script setup lang="ts">
import { companyInfo } from '@/data/content'
import SectionHeading from '@/components/SectionHeading.vue'
</script>

<template>
  <section class="bg-slate-850 py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        label="เกี่ยวกับเรา"
        title="ประวัติและวิสัยทัศน์"
        description="ก่อตั้งเมื่อปี 1999 เราเติบโตจากบริษัทรับเหมาขนาดเล็ก สู่ผู้นำด้านการก่อสร้างและวิศวกรรมในประเทศไทย"
        light
      />
    </div>
  </section>

  <section class="py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
            alt="ทีมงานก่อสร้าง"
            class="rounded-2xl shadow-xl"
            loading="lazy"
          />
        </div>
        <div>
          <h2 class="text-2xl font-bold text-slate-900">เรื่องราวของเรา</h2>
          <p class="mt-4 leading-relaxed text-slate-600">
            {{ companyInfo.name }} เริ่มต้นจากความมุ่งมั่นของวิศวกรรุ่นแรกที่ต้องการสร้างโครงสร้าง
            ที่มีคุณภาพและปลอดภัย ตลอด 25 ปีที่ผ่านมา เราได้พัฒนาความเชี่ยวชาญในหลากหลายประเภทโครงการ
            ตั้งแต่อาคารสูง โรงงานอุตสาหกรรม ไปจนถึงงานโครงสร้างพื้นฐานขนาดใหญ่
          </p>
          <p class="mt-4 leading-relaxed text-slate-600">
            เราเชื่อว่าการก่อสร้างที่ดีต้องเริ่มจากการฟังและเข้าใจความต้องการของลูกค้า
            ควบคู่กับมาตรฐานความปลอดภัยระดับสากล และการใช้เทคโนโลยี BIM ในการวางแผนและควบคุมงาน
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-slate-50 py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-8 md:grid-cols-3">
        <div class="rounded-2xl bg-white p-8 shadow-md ring-1 ring-slate-200/60">
          <div class="text-3xl">🎯</div>
          <h3 class="mt-4 text-xl font-bold text-slate-900">วิสัยทัศน์</h3>
          <p class="mt-3 text-sm leading-relaxed text-slate-600">
            เป็นผู้นำด้านการก่อสร้างที่ยั่งยืน สร้างโครงสร้างที่ปลอดภัยและมีคุณภาพ
            เพื่อพัฒนาชุมชนและสังคม
          </p>
        </div>
        <div class="rounded-2xl bg-white p-8 shadow-md ring-1 ring-slate-200/60">
          <div class="text-3xl">💎</div>
          <h3 class="mt-4 text-xl font-bold text-slate-900">พันธกิจ</h3>
          <p class="mt-3 text-sm leading-relaxed text-slate-600">
            ส่งมอบโครงการตรงเวลา ภายในงบประมาณ ด้วยมาตรฐานความปลอดภัยสูงสุด
            และการบริการที่เป็นเลิศ
          </p>
        </div>
        <div class="rounded-2xl bg-white p-8 shadow-md ring-1 ring-slate-200/60">
          <div class="text-3xl">⭐</div>
          <h3 class="mt-4 text-xl font-bold text-slate-900">คุณค่า</h3>
          <p class="mt-3 text-sm leading-relaxed text-slate-600">
            ความซื่อสัตย์ ความเป็นมืออาชีพ นวัตกรรม และความรับผิดชอบต่อสังคมและสิ่งแวดล้อม
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        label="ทีมงาน"
        title="ผู้เชี่ยวชาญของเรา"
        description="ทีมวิศวกร สถาปนิก และช่างก่อสร้างมากกว่า 350 คน พร้อมดูแลโครงการของคุณ"
      />

      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="member in [
            { name: 'ดร.สมชาย วงศ์สุวรรณ', role: 'กรรมการผู้จัดการ', img: 'photo-1560250097-0b93528c311a' },
            { name: 'คุณวิภา จันทร์เพ็ญ', role: 'ผู้อำนวยการฝ่ายวิศวกรรม', img: 'photo-1573496359142-b8d87734a5a2' },
            { name: 'คุณประเสริฐ มั่นคง', role: 'หัวหน้าฝ่ายก่อสร้าง', img: 'photo-1472099645785-5658abf4ff4e' },
            { name: 'คุณนภา สุขใจ', role: 'ผู้จัดการฝ่ายขาย', img: 'photo-1580489944761-15a19d654956' },
          ]"
          :key="member.name"
          class="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200/60"
        >
          <img
            :src="`https://images.unsplash.com/${member.img}?w=400&q=80`"
            :alt="member.name"
            class="aspect-square w-full object-cover"
            loading="lazy"
          />
          <div class="p-4 text-center">
            <p class="font-bold text-slate-900">{{ member.name }}</p>
            <p class="text-sm text-slate-500">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
