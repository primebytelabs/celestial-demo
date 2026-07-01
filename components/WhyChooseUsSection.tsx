'use client'

import { Reveal } from '@/components/Reveal'
import { strengths } from '@/lib/content'

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="section-gap bg-paper page-margin">
      <div className="space-y-20">
        {/* Header */}
        <div>
          <span className="label-kicker">07 / Brand Pillars</span>
          <h2 className="type-display-xl mt-6">Why Choose Us</h2>
        </div>

        {/* Pillars grid: 2x2 with numbered cards */}
        <div className="grid gap-10 md:grid-cols-2">
          {strengths.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="card-ruled group h-full">
                <div className="space-y-6">
                  <span className="section-number">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="space-y-3">
                    <h3 className="type-display-md">
                      {item.title}
                    </h3>
                    <p className="body-text text-secondary leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
