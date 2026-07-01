'use client'

import { Reveal } from '@/components/Reveal'
import { company } from '@/lib/content'

export function QualitySection() {
  return (
    <section id="quality" className="section-gap bg-mist page-margin">
      <div className="grid gap-24 lg:grid-cols-[1.5fr_1fr] items-start">
        <Reveal>
          <div className="space-y-8">
            <div>
              <span className="label-kicker">Oversight</span>
              <h2 className="type-display-lg mt-6">
                Quality &amp;
                <br />
                <span className="text-accent">Compliance</span>
              </h2>
            </div>

            <p className="type-display-md text-secondary">
              Our regulatory mindset demands continuous oversight, systematic testing, and rigorous compliance.
            </p>

            <p className="body-text leading-relaxed">
              We approach quality assurance with focus on traceability and improvement—testing raw materials for purity before batch release, systematically validating finished products, and ensuring compliance across all corporate structures.
            </p>
          </div>
        </Reveal>

        {/* Compliance facts: right column */}
        <Reveal delay={0.1}>
          <div className="space-y-8">
            {[
              ["Corporate", company.legalName],
              ["CIN", company.cin],
              ["BSE Symbol", company.bseSymbol],
            ].map(([label, value]) => (
              <div key={label} className="border-b border-border pb-6 last:border-0">
                <span className="label-kicker">{label}</span>
                <p className="text-ink font-semibold text-lg mt-2">{value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
