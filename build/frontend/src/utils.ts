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

/**
 * Creates a throttled cache for a computation function.
 */
export function createThrottledCache<TArgs extends readonly unknown[], TReturn>(computeFn: (...args: TArgs) => TReturn, throttleMs: number = 300): ((...args: TArgs) => TReturn) {
  let cachedValue: TReturn
  let lastComputeTime = 0
  let isInitialized = false

  return (...args: TArgs): TReturn => {
    const now = Date.now()

    if (!isInitialized || now - lastComputeTime >= throttleMs) {
      cachedValue = computeFn(...args)
      lastComputeTime = now
      isInitialized = true
    }

    return cachedValue
  }
}
