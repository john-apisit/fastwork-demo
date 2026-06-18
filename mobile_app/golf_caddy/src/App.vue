<script setup lang="ts">
import { ref } from 'vue'
import MobileFrame from '@/components/layout/MobileFrame.vue'
import { RouterView } from 'vue-router'

const toast = ref<{ message: string; type: 'success' | 'error' } | null>(null)

function showToast(message: string, type: 'success' | 'error' = 'success') {
  toast.value = { message, type }
  setTimeout(() => { toast.value = null }, 3000)
}

defineExpose({ showToast })
</script>

<template>
  <MobileFrame>
    <RouterView v-slot="{ Component }">
      <component :is="Component" :show-toast="showToast" />
    </RouterView>
    <Transition name="fade">
      <div
        v-if="toast"
        class="absolute bottom-24 left-1/2 z-50 -translate-x-1/2 rounded-xl px-4 py-2.5 text-sm font-medium text-white shadow-lg"
        :class="toast.type === 'success' ? 'bg-forest-700' : 'bg-red-600'"
      >
        {{ toast.message }}
      </div>
    </Transition>
  </MobileFrame>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
