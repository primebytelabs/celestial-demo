'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

/**
 * A horizontal-scroll pinned section. As the user scrolls down,
 * the panels slide LEFT — creating a magazine-like reading experience.
 * Each panel is a full-screen story.
 */
const PANELS = [
  {
    num: '01',
    label: 'Compute',
    headline: 'CELSUITE finds the molecule.',
    body: 'Our in-house de novo drug-design platform — CELSUITE — scans target space, evaluates binding energy landscapes, and identifies lead molecular candidates before a single gram of material is synthesized. DSIR recognized.',
  },
  {
    num: '02',
    label: 'Validate',
    headline: 'Institutions verify the science.',
    body: 'Research partnerships with CCMB (Centre for Cellular & Molecular Biology), IICT (Indian Institute of Chemical Technology) and CMFRI (ICAR) ground every discovery in independent, institutional-grade scrutiny.',
  },
  {
    num: '03',
    label: 'Manufacture',
    headline: 'GMP makes it real.',
    body: 'From algorithm output to formulation: Ayurvedic proprietary medicines, enzymes and nutraceuticals manufactured under ISO 9001 and GMP standards at our Hyderabad facility.',
  },
  {
    num: '04',
    label: 'Distribute',
    headline: '150+ outlets carry it forward.',
    body: 'A verified trade network across Gujarat, Maharashtra, Rajasthan, Uttar Pradesh, Odisha and Andhra Pradesh. Territory expansion is deliberate, not indiscriminate.',
  },
]

export function HorizontalScience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current
      if (!track) return

      const totalWidth = track.scrollWidth - window.innerWidth

      gsap.to(track, {
        x: -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${totalWidth}`,
          invalidateOnRefresh: true,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="science" ref={containerRef} className="overflow-hidden bg-black">
      <div ref={trackRef} className="flex" style={{ width: 'fit-content' }}>
        {/* First panel: section intro */}
        <div className="flex h-screen w-screen shrink-0 flex-col justify-end page-margin pb-[12vh]">
          <p className="type-mono-sm text-signal mb-6">How it works</p>
          <h2 className="type-massive text-white max-w-[80vw]">
            Algorithm<br />to product.
          </h2>
        </div>

        {/* Content panels */}
        {PANELS.map(({ num, label, headline, body }) => (
          <div
            key={num}
            className="flex h-screen w-screen shrink-0 items-center page-margin"
          >
            <div className="grid w-full gap-16 lg:grid-cols-[1fr_1.2fr] items-end">
              {/* Left: Number + label */}
              <div>
                <span className="text-[12rem] font-extrabold leading-none text-white/[0.04] block">
                  {num}
                </span>
                <p className="type-mono-sm text-signal mt-4">{label}</p>
              </div>
              {/* Right: Content */}
              <div className="border-t border-white/[0.09] pt-10">
                <h3 className="type-large text-white mb-6">{headline}</h3>
                <p className="text-grey-3 text-lg leading-relaxed max-w-lg">
                  {body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
