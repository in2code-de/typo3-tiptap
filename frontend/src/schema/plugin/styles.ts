import { z } from 'zod'

/**
 * Shared schema config by the web component and the styles plugin.
 * That's why its in a separate file.
 */
export const stylesPluginConfigSchema = z.object({
  styles: z.array(
    z.object({
      name: z.string().min(1),
      element: z.string().min(1),
      classes: z.string().min(1),
    }),
  ).min(1),
})
