import { defineConfig } from 'tsdown/config'

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/plugins/*',
  ],
  outDir: '../../packages/in2tiptap/Resources/Public/TipTap',
  noExternal: [/.*/],
  // plugins: [
  //   {
  //     name: 'inline-css',
  //     transform: {
  //       filter: id => id.endsWith('.css') && id.includes('inline'),
  //       handler(_, id) {
  //         console.log(1751981986949, id)
  //         const t = id.endsWith('.css') && id.includes('inline')
  //         console.log(1751985891609, t)
  //
  //         const cssContent = readFileSync(id.split('?')[0], 'utf-8')
  //         console.log(1751982071579, cssContent)
  //
  //         return {
  //           code: `export default "${cssContent}"`,
  //           map: null,
  //         }
  //       },
  //     },
  //   },
  // ],
})
