<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import { useAppStore } from '@/stores/app'

const route = useRoute()
const store = useAppStore()

const bookingId = route.params.bookingId as string
const newMessage = ref('')

const messages = computed(() =>
  store.chatMessages.filter((m) => m.bookingId === bookingId),
)

function send() {
  if (!newMessage.value.trim()) return
  store.sendMessage(bookingId, newMessage.value.trim())
  newMessage.value = ''
}
</script>

<template>
  <div class="flex h-full flex-col">
    <AppHeader title="แชท" show-back :show-credits="false" />

    <div class="hide-scrollbar flex-1 space-y-3 overflow-y-auto px-5 pb-4">
      <div
        v-for="msg in messages"
        :key="msg.id"
        class="flex"
        :class="msg.sender === 'golfer' ? 'justify-end' : 'justify-start'"
      >
        <div
          class="max-w-[75%] rounded-2xl px-4 py-2.5 text-sm"
          :class="msg.sender === 'golfer'
            ? 'rounded-br-md bg-forest-700 text-white'
            : 'rounded-bl-md bg-stone-100 text-forest-800'"
        >
          <p>{{ msg.text }}</p>
          <p class="mt-1 text-[10px] opacity-60">{{ msg.time }}</p>
        </div>
      </div>
    </div>

    <div class="border-t border-stone-100 bg-white px-4 py-3">
      <div class="flex gap-2">
        <input
          v-model="newMessage"
          type="text"
          placeholder="พิมพ์ข้อความ..."
          class="flex-1 rounded-xl border border-stone-200 px-4 py-2.5 text-sm focus:border-forest-500 focus:outline-none"
          @keyup.enter="send"
        />
        <button class="btn-primary px-4" @click="send">
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
