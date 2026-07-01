'use client'

import { Reveal } from '@/components/Reveal'
import { company } from '@/lib/content'

export function QualitySection() {
  return (
    <section id="quality" className="section-gap bg-paper page-margin border-t border-line">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] items-start">
        <div>
          <p className="type-label-botanical mb-6">04 / Oversight</p>
          <h2 className="type-editorial-headline text-ink">Quality & Compliance</h2>
        </div>
        <Reveal>
          <div className="space-y-8">
            <p className="type-editorial-title text-ink leading-relaxed">
              Our regulatory mindset demands continuous oversight, systematic testing, and rigorous compliance checks.
            </p>
            <p className="text-moss text-base leading-relaxed">
              We approach quality assurance with a focus on traceability and improvement. This includes testing raw materials for purity before batch release, ensuring systematic validation of finished products, and checking compliance across corporate structures.
            </p>
            
            <div className="border-t border-line divide-y divide-line pt-6">
              {[
                ["Corporate Identity", company.legalName],
                ["CIN", company.cin],
                ["BSE Registry", `Symbol: ${company.bseSymbol} / Scrip: ${company.bseScrip}`],
              ].map(([k, v]) => (
                <div key={k} className="py-4 grid md:grid-cols-[200px_1fr] gap-4">
                  <span className="type-label-botanical !text-moss">{k}</span>
                  <span className="text-ink text-sm">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
