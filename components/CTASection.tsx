'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'
import { distribution, investorLink } from '@/lib/content'

gsap.registerPlugin(ScrollTrigger)

/**
 * CTA — The number 150+ is the entire design.
 * Massive, filling the viewport. Below it, the context.
 * On scroll, the number counter-animates upward while the 
 * CTA content slides in.
 */
export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const numRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(numRef.current,
        { yPercent: 30, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1,
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-gap bg-black page-margin">
      {/* The massive number */}
      <div ref={numRef} className="mb-16">
        <p
          className="font-extrabold tracking-tighter text-white leading-none select-none"
          style={{ fontSize: 'clamp(8rem, 25vw, 22rem)' }}
        >
          150<span className="text-signal">+</span>
        </p>
      </div>

      {/* Context */}
      <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] items-end border-t border-white/[0.06] pt-12">
        <div>
          <p className="type-mono-sm text-signal mb-4">Trade Network</p>
          <p className="type-mid text-white mb-6">
            Outlets already carry the range across {distribution.states.length} states.
            The next territory should feel deliberate.
          </p>
          <p className="text-grey-3 leading-relaxed">
            Current distribution: {distribution.states.join(', ')}.
            Trade enquiries are routed through a direct review flow.
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:items-end">
          <Link
            href="/distributors"
            className="inline-block bg-signal text-black px-10 py-5 text-sm font-bold tracking-tight hover:opacity-90 transition-opacity"
          >
            Start distributor enquiry
          </Link>
          <a
            href={investorLink.url}
            target="_blank"
            rel="noreferrer"
            className="type-mono-sm text-grey-3 hover:text-white transition-colors"
          >
            {investorLink.label} ↗
          </a>
        </div>
      </div>
    </section>
  )
}
