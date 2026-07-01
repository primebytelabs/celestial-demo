'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dotEl = dot.current
    const ringEl = ring.current
    if (!dotEl || !ringEl) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      gsap.to(dotEl, { x: mouseX, y: mouseY, duration: 0.08, ease: 'power2.out' })
    }

    const lerp = () => {
      ringX += (mouseX - ringX) * 0.1
      ringY += (mouseY - ringY) * 0.1
      gsap.set(ringEl, { x: ringX, y: ringY })
      requestAnimationFrame(lerp)
    }

    const onEnterLink = () => {
      gsap.to(ringEl, { scale: 2.5, borderColor: 'var(--color-accent)', duration: 0.3 })
      gsap.to(dotEl, { scale: 0, duration: 0.2 })
    }

    const onLeaveLink = () => {
      gsap.to(ringEl, { scale: 1, borderColor: 'rgba(255,255,255,0.5)', duration: 0.3 })
      gsap.to(dotEl, { scale: 1, duration: 0.2 })
    }

    window.addEventListener('mousemove', onMove)

    const links = document.querySelectorAll('a, button, [role="button"]')
    links.forEach(l => {
      l.addEventListener('mouseenter', onEnterLink)
      l.addEventListener('mouseleave', onLeaveLink)
    })

    const raf = requestAnimationFrame(lerp)

    return () => {
      window.removeEventListener('mousemove', onMove)
      links.forEach(l => {
        l.removeEventListener('mouseenter', onEnterLink)
        l.removeEventListener('mouseleave', onLeaveLink)
      })
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
        style={{ willChange: 'transform' }}
      />
      {/* Ring */}
      <div
        ref={ring}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50"
        style={{ willChange: 'transform' }}
      />
    </>
  )
}
