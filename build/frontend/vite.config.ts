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
    target: 'esnext',
    lib: {
      entry: {
        index: resolve(__dirname, './src/index.ts'),
        'rte-link-browser': resolve(__dirname, './src/rte-link-browser.ts'),
        ...plugins,
      },
      fileName: (_, entryName) => {
        if (entryName === 'index') {
          return 'index.js'
        }

        if (entryName === 'rte-link-browser') {
          return 'rte-link-browser.js'
        }

        return `plugins/${entryName}.js`
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: ['@typo3/backend/link-browser.js', '@typo3/backend/modal.js', '@typo3/core/event/regular-event.js']
    },
    outDir: '../../packages/in2tiptap/Resources/Public/TipTap',
    emptyOutDir: true,
  },
  define: { 'process.env.NODE_ENV': '"production"' },
  plugins: [
    vue({}),
  ],
})
