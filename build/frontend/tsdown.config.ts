import { defineConfig } from 'tsdown/config'

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/plugins/*',
  ],
  outDir: '../../packages/in2tiptap/Resources/Public/TipTap',
  noExternal: [/.*/],
})
