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

const CACHE_BUSTING_PARAMETER = 'bust'
const CACHE_BUSTING_REFERENCE_SPECIFIER = '@typo3-tiptap/tiptap/index.js'

/**
 * Adds the importmap bust parameter of this extension to same-origin URLs without one.
 * Paths that are not covered by the importmap (e.g. plain /_assets/ URLs) would otherwise stay cached after an update.
 */
export function addCacheBustingParameter(path: string): string {
  let url: URL
  try {
    url = new URL(import.meta.resolve(path))
  }
  catch {
    return path
  }

  if (url.origin !== window.location.origin || url.searchParams.has(CACHE_BUSTING_PARAMETER))
    return url.href

  const bust = new URL(import.meta.resolve(CACHE_BUSTING_REFERENCE_SPECIFIER)).searchParams.get(CACHE_BUSTING_PARAMETER)
  if (bust === null)
    return url.href

  url.searchParams.set(CACHE_BUSTING_PARAMETER, bust)
  return url.href
}
