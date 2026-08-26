import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { seoPlugin } from './vite-plugin-seo'

const rootDir = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(rootDir, '../..')

export default defineConfig({
  plugins: [vue(), seoPlugin()],
  server: {
    fs: {
      allow: [repoRoot],
    },
  },
})
