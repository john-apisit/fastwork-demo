<template>
  <footer class="border-t border-slate-200 bg-white py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div class="flex items-center gap-2.5">
          <div
            class="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 font-display text-sm font-bold text-white"
          >
            HR
          </div>
          <div>
            <p class="font-display text-sm font-bold text-slate-900">HR Management</p>
            <p class="text-xs text-slate-500">Back Office System — ตัวอย่างผลงาน</p>
          </div>
        </div>

        <p class="text-sm text-slate-500">
          © {{ new Date().getFullYear() }} ระบบ Back Office และ HR Management
        </p>
      </div>
    </div>
  </footer>
</template>
