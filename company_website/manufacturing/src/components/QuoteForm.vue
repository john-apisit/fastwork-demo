<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { products } from '@/data/content'

const { t } = useI18n()

const props = defineProps<{
  initialProduct?: string
}>()

const emit = defineEmits<{
  submitted: []
}>()

const form = ref({
  name: '',
  company: '',
  email: '',
  phone: '',
  product: props.initialProduct ?? '',
  quantity: '',
  message: '',
})

const submitted = ref(false)
const loading = ref(false)

async function handleSubmit() {
  loading.value = true
  await new Promise((resolve) => setTimeout(resolve, 800))
  loading.value = false
  submitted.value = true
  emit('submitted')
}
</script>

<template>
  <div v-if="submitted" class="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
    <svg
      class="mx-auto h-12 w-12 text-green-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <p class="mt-4 font-medium text-green-800">{{ t('quote.success') }}</p>
  </div>

  <form v-else class="space-y-5" @submit.prevent="handleSubmit">
    <div class="grid gap-5 sm:grid-cols-2">
      <div>
        <label class="mb-1 block text-sm font-medium text-brand-700">{{ t('quote.name') }}</label>
        <input
          v-model="form.name"
          type="text"
          required
          class="w-full rounded-md border border-brand-300 px-4 py-2.5 text-sm focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
        />
      </div>
      <div>
        <label class="mb-1 block text-sm font-medium text-brand-700">{{
          t('quote.company')
        }}</label>
        <input
          v-model="form.company"
          type="text"
          required
          class="w-full rounded-md border border-brand-300 px-4 py-2.5 text-sm focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
        />
      </div>
    </div>

    <div class="grid gap-5 sm:grid-cols-2">
      <div>
        <label class="mb-1 block text-sm font-medium text-brand-700">{{ t('quote.email') }}</label>
        <input
          v-model="form.email"
          type="email"
          required
          class="w-full rounded-md border border-brand-300 px-4 py-2.5 text-sm focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
        />
      </div>
      <div>
        <label class="mb-1 block text-sm font-medium text-brand-700">{{ t('quote.phone') }}</label>
        <input
          v-model="form.phone"
          type="tel"
          required
          class="w-full rounded-md border border-brand-300 px-4 py-2.5 text-sm focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
        />
      </div>
    </div>

    <div class="grid gap-5 sm:grid-cols-2">
      <div>
        <label class="mb-1 block text-sm font-medium text-brand-700">{{
          t('quote.product')
        }}</label>
        <select
          v-model="form.product"
          required
          class="w-full rounded-md border border-brand-300 px-4 py-2.5 text-sm focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
        >
          <option value="" disabled>{{ t('quote.selectProduct') }}</option>
          <option v-for="p in products" :key="p.id" :value="p.id">
            {{ t(`products.${p.id}.name`) }}
          </option>
        </select>
      </div>
      <div>
        <label class="mb-1 block text-sm font-medium text-brand-700">{{
          t('quote.quantity')
        }}</label>
        <input
          v-model="form.quantity"
          type="number"
          min="1"
          required
          class="w-full rounded-md border border-brand-300 px-4 py-2.5 text-sm focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
        />
      </div>
    </div>

    <div>
      <label class="mb-1 block text-sm font-medium text-brand-700">{{ t('quote.message') }}</label>
      <textarea
        v-model="form.message"
        rows="4"
        class="w-full rounded-md border border-brand-300 px-4 py-2.5 text-sm focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
      />
    </div>

    <button type="submit" class="btn-primary w-full sm:w-auto" :disabled="loading">
      {{ loading ? '...' : t('quote.submit') }}
    </button>
  </form>
</template>
