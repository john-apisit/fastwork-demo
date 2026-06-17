<script setup lang="ts">
import Sidebar from './Sidebar.vue'
import HeaderBar from './HeaderBar.vue'
</script>

<template>
  <div class="flex min-h-screen">
    <Sidebar />
    <div class="flex-1 flex flex-col min-w-0">
      <HeaderBar />
      <main class="flex-1 p-6 overflow-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>
