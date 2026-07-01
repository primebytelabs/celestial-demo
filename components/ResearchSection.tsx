'use client'

import { Reveal } from '@/components/Reveal'

export function ResearchSection() {
  return (
    <section id="research" className="section-gap bg-paper page-margin border-t border-line">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] items-start">
        <div>
          <p className="type-label-botanical mb-6">06 / Continuous Evaluation</p>
          <h2 className="type-editorial-headline text-ink">Research & Innovation</h2>
        </div>
        <Reveal>
          <div className="space-y-6">
            <p className="type-editorial-title text-ink leading-relaxed">
              We are committed to research practices that support quality improvement, standardization, and batch-to-batch consistency.
            </p>
            <p className="text-moss text-lg leading-relaxed">
              Our continuous improvement mindset focuses on evaluating and refining standard Ayurvedic formulations using modern pharmaceutical quality guidelines. Rather than relying on static formulations, we continuously review manufacturing datasets to improve processing safety and standardization.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
