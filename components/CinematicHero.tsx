'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { company } from '@/lib/content'

export function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const factsRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animation: headline, description, facts
      gsap.fromTo(headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
      gsap.fromTo(descRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.1 }
      )
      gsap.fromTo(factsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-[95vh] flex items-center bg-paper pt-24 pb-24">
      <div className="page-margin w-full">
        <div className="grid-asymmetric-left">
          {/* Left: Headline, description (wider column) */}
          <div className="max-w-xl">
            <span className="label-kicker label-kicker-accent">Established 1997</span>

            <h1 ref={headlineRef} className="type-hero mb-8 opacity-0">
              Engineering Health
            </h1>

            <p ref={descRef} className="body-text text-secondary mb-16 opacity-0 max-w-lg">
              Since 1997, Celestial Biolabs has manufactured standardized Ayurvedic formulations and proprietary medicines — uniting traditional preparation standards with modern analytical testing.
            </p>

            <button className="btn-primary">Explore Our Products</button>
          </div>

          {/* Right: Bold accent rectangle with facts (narrower column) */}
          <div className="flex flex-col justify-start">
            <div ref={factsRef} className="bg-accent text-paper p-12 rounded-sm opacity-0 space-y-8">
              <div className="border-t border-paper/30 pt-6">
                <p className="text-xs font-bold text-paper/70 uppercase tracking-widest mb-1">Founded</p>
                <p className="text-2xl font-bold">1997</p>
              </div>
              <div className="border-t border-paper/30 pt-6">
                <p className="text-xs font-bold text-paper/70 uppercase tracking-widest mb-1">Headquarters</p>
                <p className="text-lg">Hyderabad</p>
              </div>
              <div className="border-t border-paper/30 pt-6">
                <p className="text-xs font-bold text-paper/70 uppercase tracking-widest mb-1">BSE Listing</p>
                <p className="text-lg font-mono">532871</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
