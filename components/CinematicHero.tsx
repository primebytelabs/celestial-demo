'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { company } from '@/lib/content'
import { LeafIcon } from '@/components/LeafIcon'

export function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.2 }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center bg-paper pt-32 pb-20">
      <div className="container relative z-10 page-margin">
        <div ref={contentRef} className="max-w-4xl opacity-0">
          <div className="flex items-center gap-3 mb-6">
            <LeafIcon className="h-6 w-6 text-leaf" />
            <p className="type-label-botanical !text-leaf">{company.legalName}</p>
          </div>
          
          <h1 className="type-editorial-large text-ink mb-8 leading-[1.05]">
            Engineering health through time-tested Ayurvedic science.
          </h1>
          
          <p className="text-moss text-xl leading-relaxed max-w-2xl mb-12">
            Since 1997, we have manufactured standardized Ayurvedic formulations and proprietary medicines, uniting traditional preparation standards with modern analytical testing.
          </p>

          <div className="flex flex-wrap gap-4 border-t border-line pt-10">
            <div>
              <p className="text-sm font-semibold text-moss">Incorporation</p>
              <p className="text-sm text-ink mt-1">19 November 1997</p>
            </div>
            <div className="w-px h-10 bg-line hidden sm:block mx-8" />
            <div>
              <p className="text-sm font-semibold text-moss">Headquarters</p>
              <p className="text-sm text-ink mt-1">Hyderabad, India</p>
            </div>
            <div className="w-px h-10 bg-line hidden sm:block mx-8" />
            <div>
              <p className="text-sm font-semibold text-moss">Listing Registry</p>
              <p className="text-sm text-ink mt-1">BSE: 532871</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
