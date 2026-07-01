'use client'

import Link from 'next/link'
import { company, proprietaryProducts, sourcedHerbs } from '@/lib/content'

function HeroLattice() {
  // Precise, thin-lined connected-node lattice — the one bold element.
  const nodes = [
    { cx: 60, cy: 90, c: '' },
    { cx: 190, cy: 55, c: 'n2' },
    { cx: 330, cy: 95, c: 'n3' },
    { cx: 455, cy: 60, c: 'n4' },
    { cx: 110, cy: 220, c: 'n5' },
    { cx: 250, cy: 190, c: 'n2' },
    { cx: 395, cy: 225, c: '' },
    { cx: 70, cy: 360, c: 'n3' },
    { cx: 215, cy: 350, c: 'n4' },
    { cx: 360, cy: 375, c: 'n5' },
    { cx: 470, cy: 340, c: 'n2' },
    { cx: 170, cy: 470, c: '' },
    { cx: 320, cy: 480, c: 'n3' },
  ]
  const links: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [0, 4], [1, 5], [2, 5], [2, 6], [3, 6],
    [4, 5], [5, 6], [4, 7], [5, 8], [6, 9], [6, 10], [7, 8], [8, 9],
    [9, 10], [7, 11], [8, 11], [8, 12], [9, 12],
  ]
  return (
    <svg
      className="lattice h-full w-full"
      viewBox="0 0 520 520"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <radialGradient id="latticeGlow" cx="55%" cy="42%" r="55%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.28" />
          <stop offset="55%" stopColor="var(--accent-2)" stopOpacity="0.10" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle className="lattice-glow" cx="270" cy="230" r="230" />
      {links.map(([a, b], i) => (
        <line
          key={i}
          className="lattice-line"
          x1={nodes[a].cx}
          y1={nodes[a].cy}
          x2={nodes[b].cx}
          y2={nodes[b].cy}
        />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} className={`lattice-node ${n.c}`} cx={n.cx} cy={n.cy} r={i % 4 === 0 ? 4 : 2.6} />
      ))}
    </svg>
  )
}

const stats = [
  { value: String(company.founded), label: 'Established' },
  { value: String(proprietaryProducts.length), label: 'Formulations' },
  { value: String(sourcedHerbs.length), label: 'Sourced botanicals' },
  { value: company.bseScrip, label: 'BSE listed' },
]

export function CinematicHero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      {/* Signature lattice visual */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-[52%] max-w-[720px] opacity-90"
        aria-hidden="true"
      >
        <HeroLattice />
      </div>

      <div className="page-margin relative z-10 flex min-h-[92vh] flex-col justify-center pt-32 pb-20">
        <div className="max-w-3xl">
          <span className="label-kicker label-kicker-accent mb-6 fade-up">
            Ayurvedic &amp; Pharmaceutical Manufacturing · Est. 1997
          </span>

          <h1 className="type-hero mb-7 fade-up" style={{ animationDelay: '60ms' }}>
            Engineering health through{' '}
            <span className="text-gradient">precision science</span>.
          </h1>

          <p
            className="body-text mb-10 max-w-xl fade-up"
            style={{ color: 'var(--secondary)', animationDelay: '120ms' }}
          >
            {company.legalName} manufactures standardized Ayurvedic formulations and
            proprietary medicines — pairing traditional preparation standards with modern
            analytical testing, from Hyderabad since 1997.
          </p>

          <div className="flex flex-wrap gap-4 fade-up" style={{ animationDelay: '180ms' }}>
            <Link href="/products" className="btn-primary">
              Explore products
            </Link>
            <Link href="/distributors" className="btn-secondary">
              Talk to our team
            </Link>
          </div>
        </div>

        {/* Stat row — tabular figures */}
        <div
          className="mt-20 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-8 border-t pt-10 sm:grid-cols-4 fade-up"
          style={{ borderColor: 'var(--border)', animationDelay: '240ms' }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div
                className="tabular text-3xl font-semibold sm:text-4xl"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}
              >
                {s.value}
              </div>
              <div className="label-kicker mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
