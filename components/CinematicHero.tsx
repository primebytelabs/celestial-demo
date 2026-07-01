'use client'

import Link from 'next/link'
import { company, proprietaryProducts, sourcedHerbs } from '@/lib/content'
import { AmbientBackground } from '@/components/AmbientBackground'
import { CountUp } from '@/components/CountUp'

const years = new Date().getFullYear() - company.founded

const stats = [
  { end: years, suffix: '+', label: 'Years of practice', group: true },
  { end: proprietaryProducts.length, suffix: '', label: 'Proprietary formulations', group: true },
  { end: sourcedHerbs.length, suffix: '', label: 'Documented botanicals', group: true },
  { end: Number(company.bseScrip), suffix: '', label: 'BSE scrip code', group: false },
]

export function CinematicHero() {
  return (
    <>
      {/* ═══ CINEMATIC HERO ═══ */}
      <section className="hero-shell bg-paper">
        <AmbientBackground />

        {/* Floating certification badge (top-right) */}
        {/* PLACEHOLDER: verify certifications (AYUSH licence / GMP / ISO) before publishing */}
        <div className="absolute right-[var(--page-margin)] top-28 z-20 hidden sm:block">
          <div className="cert-badge">
            <span className="dot" />
            <span>AYUSH · GMP · ISO 9001</span>
          </div>
        </div>

        <div className="page-margin relative z-10 flex min-h-screen flex-col justify-center pt-28 pb-24">
          <div className="max-w-3xl">
            <span className="label-kicker label-kicker-accent mb-7 fade-up">
              Ayurvedic &amp; Pharmaceutical Manufacturing · Since {company.founded}
            </span>

            <h1 className="type-hero mb-8 fade-up" style={{ animationDelay: '80ms' }}>
              Ancient Science,
              <br />
              <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
                Modern Wellness.
              </span>
            </h1>

            <p
              className="body-text mb-11 max-w-xl fade-up"
              style={{ color: 'var(--secondary)', animationDelay: '140ms' }}
            >
              {company.legalName} crafts standardized Ayurvedic formulations and proprietary
              medicines — honouring time-tested botanical wisdom, validated by modern analytical
              testing, from Hyderabad.
            </p>

            <div className="flex flex-wrap items-center gap-4 fade-up" style={{ animationDelay: '200ms' }}>
              <Link href="/products" className="btn-primary">
                Explore our remedies
              </Link>
              <Link href="/distributors" className="btn-secondary">
                Become a distributor
              </Link>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
            <div className="scroll-cue" />
            <span className="label-kicker" style={{ fontSize: '0.65rem' }}>Scroll</span>
          </div>
        </div>
      </section>

      {/* ═══ STAT BAND — big numbers, count-up ═══ */}
      <section className="section-mist page-margin border-y border-border">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-20 md:grid-cols-4 md:py-24">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="stat-figure">
                <CountUp end={s.end} suffix={s.suffix} group={s.group} />
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
