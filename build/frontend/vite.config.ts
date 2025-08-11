import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { glob } from 'glob'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

// read all files from plugins directory
const plugins = glob.sync('./src/plugins/*.ts').reduce((entries, file) => {
  const name = file
    .replace('src/plugins/', '')
    .replace('.ts', '')
  entries[name] = resolve(__dirname, file)
  return entries
}, {})

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, './src/index.ts'),
        ...plugins,
      },
      formats: ['es'],
    },
  },
  plugins: [
    vue({}),
  ],
})
