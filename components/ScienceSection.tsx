'use client'

import { Reveal } from '@/components/Reveal'
import { cn } from '@/lib/cn'
import { science } from '@/lib/content'

const PIPELINE = [
  {
    step: '01',
    title: 'Target Identification',
    body: 'CELSUITE scans biological target space, computing binding energy landscapes for candidate compounds.',
    accent: 'text-accent',
    border: 'border-accent/20',
  },
  {
    step: '02',
    title: 'Fragment-Based Optimization',
    body: 'Lead fragments are iteratively refined. Thousands of structural permutations evaluated computationally before synthesis.',
    accent: 'text-gold',
    border: 'border-gold/20',
  },
  {
    step: '03',
    title: 'Collaborative Validation',
    body: 'Findings validated with CCMB, IICT and CMFRI (ICAR) — research institutions with international standing.',
    accent: 'text-accent-light',
    border: 'border-accent-light/20',
  },
  {
    step: '04',
    title: 'GMP Formulation',
    body: 'Validated molecules enter GMP-certified production. Algorithm to finished product, traceable at every step.',
    accent: 'text-gold-light',
    border: 'border-gold-light/20',
  },
]

export function ScienceSection() {
  return (
    <section id="science" className="section relative overflow-hidden bg-void stripe-grid">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/6 blur-[100px]" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <Reveal className="mb-20 max-w-3xl">
          <p className="text-label text-accent mb-4">Scientific Innovation</p>
          <h2 className="text-headline text-bone mb-6">
            Discovery is an interface<br />
            between code, biology<br />
            <span className="gradient-text">and formulation.</span>
          </h2>
          <p className="text-lg text-bone/60 leading-relaxed max-w-xl">
            {science.toolDescription} {science.recognition}
          </p>
        </Reveal>

        {/* Pipeline */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {PIPELINE.map(({ step, title, body, accent, border }, i) => (
            <Reveal key={step} delay={i * 0.08}>
              <div className={cn('card p-8 h-full', border, 'border')}>
                <p className={cn('text-display font-bold opacity-15', accent)}>
                  {step}
                </p>
                <h3 className={cn('text-title mt-4 mb-3', accent)}>{title}</h3>
                <p className="text-sm leading-relaxed text-bone/55">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CMFRI Collaboration highlight */}
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-accent/5 p-10 md:p-14">
            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-accent/10 blur-[60px]" />
            <div className="relative z-10 grid gap-8 md:grid-cols-[1.5fr_1fr] items-center">
              <div>
                <p className="text-label text-accent mb-4">Flagship Collaboration</p>
                <h3 className="text-title text-bone mb-4">
                  Cadalmin™ GAe with CMFRI (ICAR)
                </h3>
                <p className="text-bone/65 leading-relaxed mb-6">
                  A marine green-algal extract developed for commercial production and
                  marketing under a formal MoU between Celestial&apos;s Managing Director
                  and CMFRI&apos;s Director — bridging ocean science and formulation.
                </p>
                <a
                  href="https://icar.org.in/en/node/8265"
                  target="_blank"
                  rel="noreferrer"
                  className="text-label text-accent hover:text-accent-light transition-colors"
                >
                  Verify CMFRI source ↗
                </a>
              </div>
              <div className="grid gap-4">
                {[
                  ['Partner', 'ICAR – Central Marine Fisheries Research Institute'],
                  ['Molecule', 'Marine green-algal extract (Cadalmin™ GAe)'],
                  ['Type', 'Commercial production MoU'],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-label text-bone/35 mb-1">{k}</p>
                    <p className="text-sm text-bone/80">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
