'use client'

import { Reveal } from '@/components/Reveal'
import { expertise } from '@/lib/content'

export function ExpertiseSection() {
  return (
    <section id="expertise" className="section-gap bg-paper page-margin border-t border-line">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] items-start">
        <div>
          <p className="type-label-botanical mb-6">02 / Capabilities</p>
          <h2 className="type-editorial-headline text-ink">Our Expertise</h2>
        </div>
        <div>
          <div className="divide-y divide-line">
            {expertise.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="py-8 grid lg:grid-cols-[240px_1fr] gap-6 items-start">
                  <h3 className="type-editorial-title text-ink font-bold">{item.title}</h3>
                  <p className="text-moss text-base leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
