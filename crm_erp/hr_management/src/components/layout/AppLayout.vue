<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from './Sidebar.vue'
import HeaderBar from './HeaderBar.vue'

const route = useRoute()
const pageTitle = computed(() => (route.meta.title as string) ?? 'HR Management')
</script>

<template>
  <div class="flex min-h-screen bg-slate-50">
    <Sidebar />
    <div class="flex min-w-0 flex-1 flex-col lg:pl-64">
      <HeaderBar :title="pageTitle" />
      <main class="flex-1 p-4 sm:p-6 lg:p-8">
        <slot />
      </main>
    </div>
  </div>
</template>
