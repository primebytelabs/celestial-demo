'use client'

import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  group?: boolean
  className?: string
}

/** Counts from 0 → end when scrolled into view. Respects prefers-reduced-motion. */
export function CountUp({ end, duration = 1600, prefix = '', suffix = '', group = true, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setValue(end)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const startTime = performance.now()
            const tick = (now: number) => {
              const p = Math.min((now - startTime) / duration, 1)
              const eased = 1 - Math.pow(1 - p, 3)
              setValue(Math.round(end * eased))
              if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {group ? value.toLocaleString('en-IN') : String(value)}
      {suffix}
    </span>
  )
}
