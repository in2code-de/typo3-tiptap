import { merge } from 'ts-deepmerge'

/**
 * Generic function to merge arrays with de-duplication using ts-deepmerge
 */
export function mergeArrays<T>(target: T[], source: T[]): T[] {
  const merged = merge.withOptions(
    { mergeArrays: true, uniqueArrayItems: true },
    { items: target },
    { items: source },
  )
  return merged.items as T[]
}
