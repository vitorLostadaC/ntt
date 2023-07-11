import { useState, useEffect } from "react"

export const useDebounce = <T extends unknown>(value: T, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
