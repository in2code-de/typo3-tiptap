import { z } from 'zod'

/**
 * Options passed via the `options` prop on the `<editor-tiptap>` web component.
 */
export const WebComponentOptionsSchema = z.object({
  id: z.string(),
  contentCss: z.array(z.string()).optional(),
  plugins: z.array(
    z.object({
      path: z.string(),
      config: z.record(
        z.string(),
        z.unknown(),
      ).optional(),
    }),
  ).optional(),
  enableContentDragAndDrop: z.boolean().default(false),
  linkBrowserUrl: z.string(),
  enableDebugMode: z.boolean().default(false),
})

export type WebComponentOptions = z.infer<typeof WebComponentOptionsSchema>
