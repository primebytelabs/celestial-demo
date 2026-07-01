'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Reveal } from '@/components/Reveal'

const PILLARS = [
  {
    num: '01',
    title: 'Compute',
    body: 'CELSUITE, our in-house de novo drug-design tool, identifies promising molecular candidates before any physical synthesis begins.',
    accent: 'border-accent/30 hover:border-accent/60',
    dot: 'bg-accent',
  },
  {
    num: '02',
    title: 'Validate',
    body: 'Research partnerships with CCMB, IICT and CMFRI (ICAR) ground every discovery in independent scientific scrutiny.',
    accent: 'border-gold/30 hover:border-gold/60',
    dot: 'bg-gold',
  },
  {
    num: '03',
    title: 'Manufacture',
    body: 'GMP-certified production at Hyderabad. Every batch traced from algorithm output to finished formulation.',
    accent: 'border-accent-light/30 hover:border-accent-light/60',
    dot: 'bg-accent-light',
  },
  {
    num: '04',
    title: 'Distribute',
    body: '150+ verified trade outlets across 6 Indian states — with room to expand to partners who share our standards.',
    accent: 'border-gold-light/30 hover:border-gold-light/60',
    dot: 'bg-gold-light',
  },
]

export function BrandStory() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section className="section relative overflow-hidden bg-void" ref={containerRef}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[80px]" />
      </div>

      <div className="container relative z-10">
        {/* Section intro */}
        <Reveal className="mb-20">
          <p className="text-label text-accent mb-4">Algorithm to Product</p>
          <h2 className="text-headline text-bone mb-6 max-w-3xl">
            We design molecules<br />with our own software,{' '}
            <span className="gradient-text">then make them real.</span>
          </h2>
          <p className="text-lg text-bone/55 leading-relaxed max-w-2xl">
            Since 1997, Celestial Biolabs has operated at the intersection of
            computational chemistry and traditional formulation. Not a generic
            manufacturer. A technology-driven health company that manufactures
            its own discoveries.
          </p>
        </Reveal>

        {/* Pillars with animated connector */}
        <div className="relative flex gap-0">
          {/* Animated vertical line */}
          <div className="relative mr-16 hidden w-px lg:block">
            <div className="absolute inset-0 bg-white/[0.06]" />
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent via-gold to-accent-light"
              style={{ height: lineHeight, originY: 0 }}
            />
          </div>

          {/* Cards */}
          <div className="grid gap-6 flex-1 md:grid-cols-2">
            {PILLARS.map(({ num, title, body, accent, dot }, i) => (
              <Reveal key={num} delay={i * 0.08}>
                <div className={`relative rounded-2xl border p-8 transition-all duration-500 group ${accent} bg-white/[0.02]`}>
                  {/* Dot indicator */}
                  <div className={`absolute -left-[2.55rem] top-10 hidden h-3 w-3 rounded-full ${dot} shadow-[0_0_12px_currentColor] lg:block`} />
                  
                  <div className="flex items-start gap-6">
                    <span className="text-label text-bone/20 shrink-0 w-8">{num}</span>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-bone mb-3">{title}</h3>
                      <p className="text-sm leading-relaxed text-bone/55">{body}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Quote bar */}
        <Reveal className="mt-20">
          <div className="relative rounded-2xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 animate-shimmer" />
            <div className="relative px-10 py-8 md:px-16">
              <p className="text-2xl md:text-3xl font-bold tracking-tight text-bone/80 leading-tight">
                &quot;Not a catalogue.<br />
                A scientific operating system becoming visible.&quot;
              </p>
              <p className="text-label text-bone/30 mt-4">Celestial Biolabs — Positioning Statement</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
