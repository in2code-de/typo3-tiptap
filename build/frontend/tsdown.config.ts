import { defineConfig } from 'tsdown/config'
import Vue from 'unplugin-vue/rolldown'

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/plugins/*',
  ],
  outDir: '../../packages/in2tiptap/Resources/Public/TipTap',
  noExternal: [/.*/],
  plugins: [Vue({ isProduction: false })],
})
