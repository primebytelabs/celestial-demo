'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Configure Lenis for responsive and organic scrolling
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
    })

    const updateScrollTrigger = () => {
      ScrollTrigger.update()
    }
    
    lenis.on('scroll', updateScrollTrigger)

    const tick = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.off('scroll', updateScrollTrigger)
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}

export default SmoothScroll
