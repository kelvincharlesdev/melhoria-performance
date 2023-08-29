import { useRef } from 'react'

export const useDebounce = (delay: number = 300) => {
  const debouncing = useRef<number>()

  const debounce = (fn: () => void) => {
    if (debouncing.current) {
      clearTimeout(debouncing.current)
    }

    debouncing.current = setTimeout(() => {
      fn()
    }, delay)
  }

  return { debounce }
}
