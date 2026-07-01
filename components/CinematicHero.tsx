'use client'

import Link from 'next/link'
import { company, proprietaryProducts, sourcedHerbs } from '@/lib/content'

const LEAF = 'M0 0 C 8 -13 8 -32 0 -46 C -8 -32 -8 -13 0 0 Z'
const VEIN = 'M0 -3 L0 -43'

const leaves = [
  { x: 258, y: 452, r: -42, s: 1.15 },
  { x: 288, y: 398, r: 46, s: 1.0 },
  { x: 262, y: 330, r: -52, s: 1.2 },
  { x: 294, y: 270, r: 48, s: 1.05 },
  { x: 270, y: 210, r: -44, s: 1.05 },
  { x: 296, y: 150, r: 40, s: 0.92 },
  { x: 288, y: 92, r: 6, s: 1.25 },
]

const berries = [
  { cx: 302, cy: 250, r: 5, c: '' },
  { cx: 250, cy: 300, r: 4, c: 'b2' },
  { cx: 306, cy: 150, r: 4.5, c: 'b3' },
]

function HeroBotanical() {
  return (
    <svg
      className="botanical h-full w-full"
      viewBox="0 0 560 580"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <radialGradient id="botanicalGlow" cx="52%" cy="40%" r="55%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.22" />
          <stop offset="55%" stopColor="var(--accent-2)" stopOpacity="0.10" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle className="botanical-glow" cx="300" cy="250" r="250" />

      {/* main stem */}
      <path
        className="botanical-stem"
        d="M 262 540 C 244 430 300 380 274 300 C 250 228 300 150 292 60"
      />

      {/* leaves (each placed, then gently swaying) */}
      {leaves.map((l, i) => (
        <g key={i} transform={`translate(${l.x} ${l.y}) rotate(${l.r}) scale(${l.s})`}>
          <g className="botanical-sway" style={{ animationDelay: `${-i * 0.7}s` }}>
            <path className="botanical-leaf" d={LEAF} />
            <path className="botanical-vein" d={VEIN} />
          </g>
        </g>
      ))}

      {/* seed berries */}
      {berries.map((b, i) => (
        <circle key={i} className={`botanical-berry ${b.c}`} cx={b.cx} cy={b.cy} r={b.r} />
      ))}
    </svg>
  )
}

const stats = [
  { value: String(company.founded), label: 'Crafting since' },
  { value: String(proprietaryProducts.length), label: 'Formulations' },
  { value: String(sourcedHerbs.length), label: 'Sourced botanicals' },
  { value: company.bseScrip, label: 'BSE listed' },
]

export function CinematicHero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      {/* Signature botanical visual */}
      <div
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[50%] max-w-[660px] md:block"
        aria-hidden="true"
      >
        <HeroBotanical />
      </div>

      <div className="page-margin relative z-10 flex min-h-[92vh] flex-col justify-center pt-32 pb-20">
        <div className="max-w-3xl">
          <span className="label-kicker label-kicker-accent mb-6 fade-up flex items-center gap-2">
            <span aria-hidden="true">❋</span>
            Ayurvedic &amp; Pharmaceutical Manufacturing · Since {company.founded}
          </span>

          <h1 className="type-hero mb-7 fade-up" style={{ animationDelay: '60ms' }}>
            Rooted in nature,
            <br />
            <span className="text-gradient" style={{ fontStyle: 'italic' }}>
              refined by science.
            </span>
          </h1>

          <p
            className="body-text mb-10 max-w-xl fade-up"
            style={{ color: 'var(--secondary)', animationDelay: '120ms' }}
          >
            {company.legalName} crafts standardized Ayurvedic formulations and proprietary
            medicines — honouring time-tested botanical wisdom while validating every batch
            with modern analytical testing, from Hyderabad since {company.founded}.
          </p>

          <div className="flex flex-wrap gap-4 fade-up" style={{ animationDelay: '180ms' }}>
            <Link href="/products" className="btn-primary">
              Explore our remedies
            </Link>
            <Link href="/distributors" className="btn-secondary">
              Talk to our team
            </Link>
          </div>
        </div>

        {/* Stat row */}
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
