'use client'

import { Reveal } from '@/components/Reveal'
import { strengths } from '@/lib/content'
import { LeafIcon } from '@/components/LeafIcon'

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="section-gap bg-paper page-margin border-t border-line">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] items-start">
        <div>
          <p className="type-label-botanical mb-6">07 / Brand Pillars</p>
          <h2 className="type-editorial-headline text-ink">Why Choose Us</h2>
        </div>
        <div>
          <div className="grid gap-6 md:grid-cols-2">
            {strengths.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="border border-line bg-mist/50 p-8 flex flex-col justify-between h-full group hover:border-leaf/30 transition-colors">
                  <div>
                    <div className="flex justify-between items-start">
                      <span className="type-label-botanical">Pillar {String(i + 1).padStart(2, '0')}</span>
                      <LeafIcon className="h-5 w-5 text-moss group-hover:text-leaf transition-colors" />
                    </div>
                    <h3 className="type-editorial-title text-ink font-bold mt-4 mb-2">{item.title}</h3>
                    <p className="text-moss text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
