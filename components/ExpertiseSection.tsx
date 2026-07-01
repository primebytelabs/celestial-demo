'use client'

import { Reveal } from '@/components/Reveal'
import { expertise } from '@/lib/content'

export function ExpertiseSection() {
  return (
    <section id="expertise" className="section-gap bg-paper page-margin">
      <div className="space-y-24">
        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] items-start">
          <div>
            <span className="label-kicker">03 / Capabilities</span>
            <h2 className="type-display-xl mt-6">Our Expertise</h2>
          </div>
          <p className="body-text text-secondary leading-relaxed">
            Decades of focused research and manufacturing excellence have built our reputation for consistency, quality, and scientific rigor in Ayurvedic formulation.
          </p>
        </div>

        {/* Expertise Items: Asymmetric grid */}
        <div className="grid gap-12 lg:grid-cols-2">
          {expertise.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="card-ruled group">
                <div className="space-y-4">
                  <span className="section-number">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="type-display-md">{item.title}</h3>
                  <p className="body-text text-secondary leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
